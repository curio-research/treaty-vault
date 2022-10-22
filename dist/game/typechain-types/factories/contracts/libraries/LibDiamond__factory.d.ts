import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { LibDiamond, LibDiamondInterface } from "../../../contracts/libraries/LibDiamond";
declare type LibDiamondConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class LibDiamond__factory extends ContractFactory {
    constructor(...args: LibDiamondConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<LibDiamond>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): LibDiamond;
    connect(signer: Signer): LibDiamond__factory;
    static readonly bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212200702125afc26de3e9e895cfa7393a64b5f1e7ddddf3d86d408ea796bcff4dfe764736f6c63430008040033";
    static readonly abi: {
        anonymous: boolean;
        inputs: ({
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        } | {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        })[];
        name: string;
        type: string;
    }[];
    static createInterface(): LibDiamondInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): LibDiamond;
}
export {};
