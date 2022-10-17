import { EventEmitter } from 'events';
import { ethers, Contract, BigNumber as BN, EventFilter, providers } from 'ethers';
import { Wallet } from '@ethersproject/wallet';
import { GameConfig, decodeComponentValueSet, decodeComponentValueRemoved, decodeEntityRemoved } from '..';
import { Curio__factory, Curio } from '.';
import { chainInfo } from '../util/constants';
import { EventHandlers, NetworkEvents } from '../util/events';
import debounce from 'just-debounce';
import { makeObservable, observable } from 'mobx';
import { TransactionReceipt } from '@ethersproject/providers';
import { delay, EMPTY_ADDR } from '../util/network';
import { resolveProperties } from '@ethersproject/properties';

// ------------------------------------------------------------
// network engine
// reads events data from blocks mined. single point of contact with on chain events
// ------------------------------------------------------------

export class NetworkEngineCore {
  public block: number;

  public lastSyncedBlock: number;

  public provider: providers.JsonRpcProvider;

  public wsProvider: providers.WebSocketProvider;

  public contract: Curio;

  public hasReceivedValidEvent: Map<number, boolean>;

  public handledEventTx: Map<string, boolean>;

  public signer: Wallet | undefined;

  public chainEventHandlers: EventHandlers | undefined;

  // we could be connected to a network but without contracts, for example to check for balance
  constructor(chain: string, emitter: EventEmitter) {
    this.block = 0;
    this.lastSyncedBlock = 0;
    this.handledEventTx = new Map();
    this.hasReceivedValidEvent = new Map();
    this.provider = new providers.JsonRpcProvider(chainInfo[chain].rpcUrl);
    this.wsProvider = new providers.WebSocketProvider(chainInfo[chain].wsRpcUrl);
    this.contract = Curio__factory.connect(EMPTY_ADDR, this.signer!);

    // on chain events
    const eventHandlers: EventHandlers = {
      [NetworkEvents.ComponentValueSet]: (componentName: string, entity: BN, value: string) => {
        emitter.emit(NetworkEvents.ComponentValueSet, decodeComponentValueSet(componentName, entity, value));
      },
      [NetworkEvents.ComponentValueRemoved]: (componentName: string, entity: BN) => {
        emitter.emit(NetworkEvents.ComponentValueRemoved, decodeComponentValueRemoved(componentName, entity));
      },
      [NetworkEvents.EntityRemoved]: (entity: BN) => {
        emitter.emit(NetworkEvents.EntityRemoved, decodeEntityRemoved(entity));
      },
    };

    this.chainEventHandlers = eventHandlers;

    makeObservable(this, {
      lastSyncedBlock: observable,
    });
  }

  // event listeners for all data
  public async addEventListeners(): Promise<void> {
    const contract = this.contract;
    if (!contract) {
      throw new Error('No contract');
    }

    // TODO: events should be automated?
    const allFilters: EventFilter = {
      address: contract.address,
      topics: [
        [
          contract.filters.ComponentValueSet(null, null, null).topics,
          contract.filters.ComponentValueRemoved(null, null).topics,
          contract.filters.EntityRemoved(null).topics,
          // contract.filters.NewEntity(null).topics,
        ].map((topicsOrUndefined) => (topicsOrUndefined || [])[0]),
      ] as Array<string | Array<string>>,
    };

    const currentBlock = await this.provider.getBlockNumber();
    this.setLastSyncedBlock(currentBlock);

    if (!this.chainEventHandlers) return;
    this.subscribeToContractEvents([contract], [allFilters], this.chainEventHandlers);
  }

  /**
   * Processes on chain events emitted. initialized once. this is the master listener
   * @param contracts contracts to listen to
   * @param filters contract filters to filter events through
   * @param eventHandlers event handlers, which take events and emit the proper events (Ex: the UI listens to them and changes state accordingly)
   */
  public subscribeToContractEvents(contracts: Contract[], filters: EventFilter[], eventHandlers: EventHandlers): void {
    const debouncedOnNewBlock = debounce(this.processEvents.bind(this), 0, true, true);

    this.wsProvider.on('block', async (latestBlockNumber: number) => {
      debouncedOnNewBlock(
        Math.min(this.lastSyncedBlock + 1, latestBlockNumber),
        latestBlockNumber,
        contracts,
        filters,
        eventHandlers
      );
    });
  }

  public removeWebsocketConnection = (): void => {
    this.wsProvider.removeAllListeners();
  };

  // TODO: reset connection when it detects things are becomes stale
  public resetSubscribeContractEvents = (): void => {
    this.removeWebsocketConnection();
    this.addEventListeners();
  };

  public removeEventListeners(): void {
    this.wsProvider.removeAllListeners();
  }

  // startBlock: inclusive
  // endBlock: inclusive
  public async processEvents(
    startBlock: number,
    endBlock: number,
    contracts: Contract[],
    filters: EventFilter[],
    handlers: EventHandlers
  ): Promise<void> {
    // fetch log by looping through filters and handling proper events
    try {
      this.block = endBlock;
      this.setLastSyncedBlock(endBlock);

      const logPromise = async (startBlock: number, endBlock: number, filter: EventFilter) => {
        const params = await resolveProperties({
          filter: this.provider._getFilter({
            fromBlock: startBlock,
            toBlock: endBlock,
            address: filter.address,
            topics: filter.topics,
          }),
        });

        const logs: Array<ethers.providers.Log> = await this.provider.perform('getLogs', params);
        logs.forEach((log) => {
          if (log.removed == null) {
            log.removed = false;
          }
        });
        return logs;
      };

      // figure out how to use batch vs. normal vs. ws. Ex: in optimism kovan only ws works for some reason
      const logPromises: Promise<ethers.providers.Log[]>[] = [];
      filters.forEach((filter) => {
        logPromises.push(logPromise(startBlock, endBlock, filter));
      });

      let allLogs: ethers.providers.Log[][] = [];
      allLogs = await Promise.all(logPromises);

      // this means we received valid events
      if (allLogs.flat().length > 0) {
        for (let i = startBlock; i < endBlock + 1; i++) {
          this.hasReceivedValidEvent.set(i, true);
        }
      }
      for (let i = 0; i < allLogs.length; i++) {
        const contract = contracts[i];
        const logs = allLogs[i];

        logs.sort((a: ethers.providers.Log, b: ethers.providers.Log) => {
          if (a.blockNumber < b.blockNumber) {
            return -1;
          } else if (a.blockNumber > b.blockNumber) {
            return 1;
          } else {
            return a.logIndex < b.logIndex ? -1 : 1;
          }
        });

        logs.forEach((log) => {
          //  keeping a running log of which tx has been processed so far
          const txKey = `${log.transactionHash}-${log.data}`;

          if (this.handledEventTx.get(txKey) === undefined) {
            this.handledEventTx.set(txKey, true);

            const parsedData = contract.interface.parseLog(log);

            const handler = handlers[parsedData.name];
            if (handler) {
              handler(...parsedData.args);
            }
          }
        });
      }
    } catch (err: any) {
      console.log(err);
    }
  }

  // set deployment
  public setDeployment = (deployment: GameConfig): void => {
    this.contract = Curio__factory.connect(String(deployment.address), this.signer!);

    this.provider = new providers.JsonRpcProvider(chainInfo[deployment.network].rpcUrl);
    this.wsProvider = new providers.WebSocketProvider(chainInfo[deployment.network].wsRpcUrl);
  };

  public getBalance = async (address: string): Promise<number> => {
    const balanceBN = await this.provider.getBalance(address);
    return parseFloat(ethers.utils.formatEther(balanceBN));
  };

  public getBlockTimestamp = async (): Promise<any> => {
    const timestamp = await (await this.provider.getBlock('latest')).timestamp;
    return timestamp;
  };

  public getOwnBalance = async (): Promise<number> => {
    if (!this.signer) {
      throw new Error('no signer');
    } else {
      return this.getBalance(this.signer.address);
    }
  };

  public setSigner = (privKey: string): void => {
    this.signer = new Wallet(privKey, this.provider);
  };

  public getSigner = (): Wallet => {
    if (!this.signer) {
      throw new Error('No signer');
    } else {
      return this.signer;
    }
  };

  public getPubAddr = (): string => {
    if (!this.signer) {
      throw new Error('No signer');
    } else {
      return this.signer.address.toLowerCase();
    }
  };

  public isUser = (address: string): boolean => {
    return this.getPubAddr().toLowerCase() == address.toLowerCase();
  };

  public signMessage = async (message: string): Promise<string> => {
    if (!this.signer) {
      throw new Error('No signer');
    } else {
      return this.signer.signMessage(message);
    }
  };

  private setLastSyncedBlock = (block: number): void => {
    this.lastSyncedBlock = block;
  };

  public destroyWsListeners(): void {
    this.wsProvider.removeAllListeners();
  }

  // tx: a tx hash of a tx that has been submitted
  public waitForTxToComplete = async (tx: string): Promise<TransactionReceipt> => {
    return new Promise(async (resolve) => {
      let receipt: TransactionReceipt | undefined;
      let tries = 0;
      while (!receipt) {
        receipt = await this.provider.getTransactionReceipt(tx);

        if (receipt) {
          resolve(receipt);
          return;
        }

        const time = 500 * 1.1 ** tries; // exponential backoff
        await delay(time);
        tries += 1;
      }
    });
  };

  public async getNonce(): Promise<number> {
    if (!this.signer) {
      return 0;
    }
    const res = await this.provider.getTransactionCount(this.signer.address);
    return res;
  }
}

export default NetworkEngineCore;

// attributions for networking code: Darkforest, Lattice
