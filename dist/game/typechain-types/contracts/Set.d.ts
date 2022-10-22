import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface SetInterface extends utils.Interface {
    functions: {
        "add(uint256)": FunctionFragment;
        "addArray(uint256[])": FunctionFragment;
        "getAll()": FunctionFragment;
        "includes(uint256)": FunctionFragment;
        "remove(uint256)": FunctionFragment;
        "size()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "add" | "addArray" | "getAll" | "includes" | "remove" | "size"): FunctionFragment;
    encodeFunctionData(functionFragment: "add", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "addArray", values: [PromiseOrValue<BigNumberish>[]]): string;
    encodeFunctionData(functionFragment: "getAll", values?: undefined): string;
    encodeFunctionData(functionFragment: "includes", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "remove", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "size", values?: undefined): string;
    decodeFunctionResult(functionFragment: "add", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addArray", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "includes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "remove", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "size", data: BytesLike): Result;
    events: {};
}
export interface Set extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SetInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        add(_element: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        addArray(_elements: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getAll(overrides?: CallOverrides): Promise<[BigNumber[]]>;
        includes(_element: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean]>;
        remove(_element: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        size(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    add(_element: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    addArray(_elements: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getAll(overrides?: CallOverrides): Promise<BigNumber[]>;
    includes(_element: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    remove(_element: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    size(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        add(_element: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        addArray(_elements: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
        getAll(overrides?: CallOverrides): Promise<BigNumber[]>;
        includes(_element: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        remove(_element: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        size(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        add(_element: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        addArray(_elements: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getAll(overrides?: CallOverrides): Promise<BigNumber>;
        includes(_element: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        remove(_element: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        size(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        add(_element: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        addArray(_elements: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getAll(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        includes(_element: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        remove(_element: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        size(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
