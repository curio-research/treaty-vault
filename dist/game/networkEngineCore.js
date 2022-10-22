"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkEngineCore = void 0;
const ethers_1 = require("ethers");
const wallet_1 = require("@ethersproject/wallet");
const __1 = require("..");
const _1 = require(".");
const constants_1 = require("../util/constants");
const events_1 = require("../util/events");
const just_debounce_1 = __importDefault(require("just-debounce"));
const mobx_1 = require("mobx");
const network_1 = require("../util/network");
const properties_1 = require("@ethersproject/properties");
// ------------------------------------------------------------
// network engine
// reads events data from blocks mined. single point of contact with on chain events
// ------------------------------------------------------------
class NetworkEngineCore {
    // we could be connected to a network but without contracts, for example to check for balance
    constructor(chain, emitter) {
        this.removeWebsocketConnection = () => {
            this.wsProvider.removeAllListeners();
        };
        // TODO: reset connection when it detects things are becomes stale
        this.resetSubscribeContractEvents = () => {
            this.removeWebsocketConnection();
            this.addEventListeners();
        };
        // set deployment
        this.setDeployment = (deployment) => {
            this.provider = new ethers_1.providers.JsonRpcProvider(constants_1.chainInfo[deployment.network].rpcUrl);
            this.wsProvider = new ethers_1.providers.WebSocketProvider(constants_1.chainInfo[deployment.network].wsRpcUrl);
            this.contract = _1.Curio__factory.connect(String(deployment.address), this.signer || this.provider);
        };
        this.getBalance = async (address) => {
            const balanceBN = await this.provider.getBalance(address);
            return parseFloat(ethers_1.ethers.utils.formatEther(balanceBN));
        };
        this.getBlockTimestamp = async () => {
            const timestamp = await (await this.provider.getBlock('latest')).timestamp;
            return timestamp;
        };
        this.getOwnBalance = async () => {
            if (!this.signer) {
                throw new Error('no signer');
            }
            else {
                return this.getBalance(this.signer.address);
            }
        };
        this.setSigner = (privKey) => {
            this.signer = new wallet_1.Wallet(privKey, this.provider);
        };
        this.getSigner = () => {
            if (!this.signer) {
                throw new Error('No signer');
            }
            else {
                return this.signer;
            }
        };
        this.getPubAddr = () => {
            if (!this.signer) {
                throw new Error('No signer');
            }
            else {
                return this.signer.address.toLowerCase();
            }
        };
        this.isUser = (address) => {
            return this.getPubAddr().toLowerCase() == address.toLowerCase();
        };
        this.signMessage = async (message) => {
            if (!this.signer) {
                throw new Error('No signer');
            }
            else {
                return this.signer.signMessage(message);
            }
        };
        this.setLastSyncedBlock = (block) => {
            this.lastSyncedBlock = block;
        };
        // tx: a tx hash of a tx that has been submitted
        this.waitForTxToComplete = async (tx) => {
            return new Promise(async (resolve) => {
                let receipt;
                let tries = 0;
                while (!receipt) {
                    receipt = await this.provider.getTransactionReceipt(tx);
                    if (receipt) {
                        resolve(receipt);
                        return;
                    }
                    const time = 500 * 1.1 ** tries; // exponential backoff
                    await (0, network_1.delay)(time);
                    tries += 1;
                }
            });
        };
        this.block = 0;
        this.lastSyncedBlock = 0;
        this.handledEventTx = new Map();
        this.hasReceivedValidEvent = new Map();
        this.provider = new ethers_1.providers.JsonRpcProvider(constants_1.chainInfo[chain].rpcUrl);
        this.wsProvider = new ethers_1.providers.WebSocketProvider(constants_1.chainInfo[chain].wsRpcUrl);
        this.contract = _1.Curio__factory.connect(ethers_1.ethers.constants.AddressZero, this.signer);
        // on chain events
        const eventHandlers = {
            [events_1.NetworkEvents.ComponentValueSet]: (componentName, entity, value) => {
                emitter.emit(events_1.NetworkEvents.ComponentValueSet, (0, __1.decodeComponentValueSet)(componentName, entity, value));
            },
            [events_1.NetworkEvents.ComponentValueRemoved]: (componentName, entity) => {
                emitter.emit(events_1.NetworkEvents.ComponentValueRemoved, (0, __1.decodeComponentValueRemoved)(componentName, entity));
            },
            [events_1.NetworkEvents.EntityRemoved]: (entity) => {
                emitter.emit(events_1.NetworkEvents.EntityRemoved, (0, __1.decodeEntityRemoved)(entity));
            },
        };
        this.chainEventHandlers = eventHandlers;
        (0, mobx_1.makeObservable)(this, {
            lastSyncedBlock: mobx_1.observable,
        });
    }
    // event listeners for all data
    async addEventListeners() {
        const contract = this.contract;
        if (!contract) {
            throw new Error('No contract');
        }
        // TODO: events should be automated?
        const allFilters = {
            address: contract.address,
            topics: [
                [
                    contract.filters.ComponentValueSet(null, null, null).topics,
                    contract.filters.ComponentValueRemoved(null, null).topics,
                    contract.filters.EntityRemoved(null).topics,
                    // contract.filters.NewEntity(null).topics,
                ].map((topicsOrUndefined) => (topicsOrUndefined || [])[0]),
            ],
        };
        const currentBlock = await this.provider.getBlockNumber();
        this.setLastSyncedBlock(currentBlock);
        if (!this.chainEventHandlers)
            return;
        this.subscribeToContractEvents([contract], [allFilters], this.chainEventHandlers);
    }
    /**
     * Processes on chain events emitted. initialized once. this is the master listener
     * @param contracts contracts to listen to
     * @param filters contract filters to filter events through
     * @param eventHandlers event handlers, which take events and emit the proper events (Ex: the UI listens to them and changes state accordingly)
     */
    subscribeToContractEvents(contracts, filters, eventHandlers) {
        const debouncedOnNewBlock = (0, just_debounce_1.default)(this.processEvents.bind(this), 0, true, true);
        this.wsProvider.on('block', async (latestBlockNumber) => {
            debouncedOnNewBlock(Math.min(this.lastSyncedBlock + 1, latestBlockNumber), latestBlockNumber, contracts, filters, eventHandlers);
        });
    }
    removeEventListeners() {
        this.wsProvider.removeAllListeners();
    }
    // startBlock: inclusive
    // endBlock: inclusive
    async processEvents(startBlock, endBlock, contracts, filters, handlers) {
        // fetch log by looping through filters and handling proper events
        try {
            this.block = endBlock;
            this.setLastSyncedBlock(endBlock);
            const logPromise = async (startBlock, endBlock, filter) => {
                const params = await (0, properties_1.resolveProperties)({
                    filter: this.provider._getFilter({
                        fromBlock: startBlock,
                        toBlock: endBlock,
                        address: filter.address,
                        topics: filter.topics,
                    }),
                });
                const logs = await this.provider.perform('getLogs', params);
                logs.forEach((log) => {
                    if (log.removed == null) {
                        log.removed = false;
                    }
                });
                return logs;
            };
            // figure out how to use batch vs. normal vs. ws. Ex: in optimism kovan only ws works for some reason
            const logPromises = [];
            filters.forEach((filter) => {
                logPromises.push(logPromise(startBlock, endBlock, filter));
            });
            let allLogs = [];
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
                logs.sort((a, b) => {
                    if (a.blockNumber < b.blockNumber) {
                        return -1;
                    }
                    else if (a.blockNumber > b.blockNumber) {
                        return 1;
                    }
                    else {
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
            // fetch transactions
            // const contractInterface = new ethers.utils.Interface(Curio__factory.abi);
            // const data = await this.provider.getBlockWithTransactions(startBlock);
            // data.transactions.forEach((tx) => {
            //   const decodedContractData = contractInterface.parseTransaction({ data: tx.data });
            //   console.log({
            //     function_name: decodedContractData.name,
            //     from: tx.from,
            //     args: decodedContractData.args,
            //   });
            // });
        }
        catch (err) {
            console.log(err);
        }
    }
    destroyWsListeners() {
        this.wsProvider.removeAllListeners();
    }
    async getNonce() {
        if (!this.signer) {
            return 0;
        }
        const res = await this.provider.getTransactionCount(this.signer.address);
        return res;
    }
}
exports.NetworkEngineCore = NetworkEngineCore;
exports.default = NetworkEngineCore;
// attributions for networking code: Darkforest, Lattice
//# sourceMappingURL=networkEngineCore.js.map