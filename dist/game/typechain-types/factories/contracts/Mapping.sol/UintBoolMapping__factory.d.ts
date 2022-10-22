import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { UintBoolMapping, UintBoolMappingInterface } from "../../../contracts/Mapping.sol/UintBoolMapping";
declare type UintBoolMappingConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class UintBoolMapping__factory extends ContractFactory {
    constructor(...args: UintBoolMappingConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<UintBoolMapping>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): UintBoolMapping;
    connect(signer: Signer): UintBoolMapping__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610116806100206000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c8063399313bd14603757806362f46d5614606b575b600080fd5b605760423660046098565b60006020819052908152604090205460ff1681565b604051901515815260200160405180910390f35b6096607636600460af565b600091825260208290526040909120805460ff1916911515919091179055565b005b60006020828403121560a8578081fd5b5035919050565b6000806040838503121560c0578081fd5b823591506020830135801515811460d5578182fd5b80915050925092905056fea2646970667358221220d735cda41c090cc4edcd48b5c09e51808abde58662b46a6f7d2956894964e04064736f6c63430008040033";
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): UintBoolMappingInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): UintBoolMapping;
}
export {};
