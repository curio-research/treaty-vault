import { WorldConstants } from '../types/map';
import { TxIntent, ContractMethods } from '../util/transactions';
import NetworkEngineCore from './networkEngineCore';
export declare class ApiManagerCore {
    networkEngine: NetworkEngineCore;
    constructor(networkEngine: NetworkEngineCore);
    initializeApiManager: (networkEngine: NetworkEngineCore) => Promise<void>;
    createTx: (contractFunc: ContractMethods, functionArgs: any[]) => TxIntent;
    getWorldConstants: () => Promise<WorldConstants>;
    isPlayerInitialized: (address: string) => Promise<boolean>;
    getComponentById: (componentId: number) => Promise<string>;
    getAllEntitiesAndRawValues: (componentAddr: string) => Promise<any>;
    getEntities: () => Promise<number[]>;
    getPubAddr: () => string;
}
export default ApiManagerCore;
