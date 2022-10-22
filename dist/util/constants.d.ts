export interface ChainInfoType {
    rpcUrl: string;
    wsRpcUrl: string;
    id: number;
    gasLimit: number;
}
export declare const chainInfo: Record<string, ChainInfoType>;
