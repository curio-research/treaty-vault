import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface NATOInterface extends utils.Interface {
    functions: {
        "approveMoveArmy()": FunctionFragment;
        "denounceTreaty()": FunctionFragment;
        "isMemberStates(address)": FunctionFragment;
        "joinTreaty()": FunctionFragment;
        "memberStates(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "approveMoveArmy" | "denounceTreaty" | "isMemberStates" | "joinTreaty" | "memberStates"): FunctionFragment;
    encodeFunctionData(functionFragment: "approveMoveArmy", values?: undefined): string;
    encodeFunctionData(functionFragment: "denounceTreaty", values?: undefined): string;
    encodeFunctionData(functionFragment: "isMemberStates", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "joinTreaty", values?: undefined): string;
    encodeFunctionData(functionFragment: "memberStates", values: [PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "approveMoveArmy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "denounceTreaty", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isMemberStates", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "joinTreaty", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "memberStates", data: BytesLike): Result;
    events: {};
}
export interface NATO extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: NATOInterface;
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
        approveMoveArmy(overrides?: CallOverrides): Promise<[boolean]>;
        denounceTreaty(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        isMemberStates(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        joinTreaty(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        memberStates(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
    };
    approveMoveArmy(overrides?: CallOverrides): Promise<boolean>;
    denounceTreaty(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    isMemberStates(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    joinTreaty(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    memberStates(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        approveMoveArmy(overrides?: CallOverrides): Promise<boolean>;
        denounceTreaty(overrides?: CallOverrides): Promise<boolean>;
        isMemberStates(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        joinTreaty(overrides?: CallOverrides): Promise<boolean>;
        memberStates(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        approveMoveArmy(overrides?: CallOverrides): Promise<BigNumber>;
        denounceTreaty(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        isMemberStates(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        joinTreaty(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        memberStates(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        approveMoveArmy(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        denounceTreaty(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        isMemberStates(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        joinTreaty(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        memberStates(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
