import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export interface GameLibInterface extends utils.Interface {
    functions: {
        "getAttackBonus(uint256,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getAttackBonus"): FunctionFragment;
    encodeFunctionData(functionFragment: "getAttackBonus", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "getAttackBonus", data: BytesLike): Result;
    events: {
        "GamePaused()": EventFragment;
        "GameResumed()": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "GamePaused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "GameResumed"): EventFragment;
}
export interface GamePausedEventObject {
}
export declare type GamePausedEvent = TypedEvent<[], GamePausedEventObject>;
export declare type GamePausedEventFilter = TypedEventFilter<GamePausedEvent>;
export interface GameResumedEventObject {
}
export declare type GameResumedEvent = TypedEvent<[], GameResumedEventObject>;
export declare type GameResumedEventFilter = TypedEventFilter<GameResumedEvent>;
export interface GameLib extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: GameLibInterface;
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
        getAttackBonus(_offenderTemplateID: PromiseOrValue<BigNumberish>, _defenderTemplateID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    getAttackBonus(_offenderTemplateID: PromiseOrValue<BigNumberish>, _defenderTemplateID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        getAttackBonus(_offenderTemplateID: PromiseOrValue<BigNumberish>, _defenderTemplateID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "GamePaused()"(): GamePausedEventFilter;
        GamePaused(): GamePausedEventFilter;
        "GameResumed()"(): GameResumedEventFilter;
        GameResumed(): GameResumedEventFilter;
    };
    estimateGas: {
        getAttackBonus(_offenderTemplateID: PromiseOrValue<BigNumberish>, _defenderTemplateID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getAttackBonus(_offenderTemplateID: PromiseOrValue<BigNumberish>, _defenderTemplateID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
