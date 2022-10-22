/// <reference types="node" />
import { EventEmitter } from 'events';
import { Contract, EventFilter, providers } from 'ethers';
import { Wallet } from '@ethersproject/wallet';
import { GameConfig } from '..';
import { Curio } from '.';
import { EventHandlers } from '../util/events';
import { TransactionReceipt } from '@ethersproject/providers';
export declare class NetworkEngineCore {
    block: number;
    lastSyncedBlock: number;
    provider: providers.JsonRpcProvider;
    wsProvider: providers.WebSocketProvider;
    contract: Curio;
    hasReceivedValidEvent: Map<number, boolean>;
    handledEventTx: Map<string, boolean>;
    signer: Wallet | undefined;
    chainEventHandlers: EventHandlers | undefined;
    constructor(chain: string, emitter: EventEmitter);
    addEventListeners(): Promise<void>;
    /**
     * Processes on chain events emitted. initialized once. this is the master listener
     * @param contracts contracts to listen to
     * @param filters contract filters to filter events through
     * @param eventHandlers event handlers, which take events and emit the proper events (Ex: the UI listens to them and changes state accordingly)
     */
    subscribeToContractEvents(contracts: Contract[], filters: EventFilter[], eventHandlers: EventHandlers): void;
    removeWebsocketConnection: () => void;
    resetSubscribeContractEvents: () => void;
    removeEventListeners(): void;
    processEvents(startBlock: number, endBlock: number, contracts: Contract[], filters: EventFilter[], handlers: EventHandlers): Promise<void>;
    setDeployment: (deployment: GameConfig) => void;
    getBalance: (address: string) => Promise<number>;
    getBlockTimestamp: () => Promise<any>;
    getOwnBalance: () => Promise<number>;
    setSigner: (privKey: string) => void;
    getSigner: () => Wallet;
    getPubAddr: () => string;
    isUser: (address: string) => boolean;
    signMessage: (message: string) => Promise<string>;
    private setLastSyncedBlock;
    destroyWsListeners(): void;
    waitForTxToComplete: (tx: string) => Promise<TransactionReceipt>;
    getNonce(): Promise<number>;
}
export default NetworkEngineCore;
