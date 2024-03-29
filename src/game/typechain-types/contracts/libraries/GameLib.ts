/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { BaseContract, Signer, utils } from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface GameLibInterface extends utils.Interface {
  functions: {};

  events: {
    "GamePaused()": EventFragment;
    "GameResumed()": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "GamePaused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GameResumed"): EventFragment;
}

export interface GamePausedEventObject {}
export type GamePausedEvent = TypedEvent<[], GamePausedEventObject>;

export type GamePausedEventFilter = TypedEventFilter<GamePausedEvent>;

export interface GameResumedEventObject {}
export type GameResumedEvent = TypedEvent<[], GameResumedEventObject>;

export type GameResumedEventFilter = TypedEventFilter<GameResumedEvent>;

export interface GameLib extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GameLibInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {};

  callStatic: {};

  filters: {
    "GamePaused()"(): GamePausedEventFilter;
    GamePaused(): GamePausedEventFilter;

    "GameResumed()"(): GameResumedEventFilter;
    GameResumed(): GameResumedEventFilter;
  };

  estimateGas: {};

  populateTransaction: {};
}
