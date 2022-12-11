/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface TreatyInterface extends utils.Interface {
  functions: {
    "diamond()": FunctionFragment;
    "game()": FunctionFragment;
    "getter()": FunctionFragment;
    "joinTreaty()": FunctionFragment;
    "leaveTreaty()": FunctionFragment;
    "name()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "diamond"
      | "game"
      | "getter"
      | "joinTreaty"
      | "leaveTreaty"
      | "name"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "diamond", values?: undefined): string;
  encodeFunctionData(functionFragment: "game", values?: undefined): string;
  encodeFunctionData(functionFragment: "getter", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "joinTreaty",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "leaveTreaty",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;

  decodeFunctionResult(functionFragment: "diamond", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "game", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getter", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "joinTreaty", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "leaveTreaty",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;

  events: {};
}

export interface Treaty extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TreatyInterface;

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

  functions: {
    diamond(overrides?: CallOverrides): Promise<[string]>;

    game(overrides?: CallOverrides): Promise<[string]>;

    getter(overrides?: CallOverrides): Promise<[string]>;

    joinTreaty(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    leaveTreaty(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    name(overrides?: CallOverrides): Promise<[string]>;
  };

  diamond(overrides?: CallOverrides): Promise<string>;

  game(overrides?: CallOverrides): Promise<string>;

  getter(overrides?: CallOverrides): Promise<string>;

  joinTreaty(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  leaveTreaty(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  name(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    diamond(overrides?: CallOverrides): Promise<string>;

    game(overrides?: CallOverrides): Promise<string>;

    getter(overrides?: CallOverrides): Promise<string>;

    joinTreaty(overrides?: CallOverrides): Promise<boolean>;

    leaveTreaty(overrides?: CallOverrides): Promise<boolean>;

    name(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    diamond(overrides?: CallOverrides): Promise<BigNumber>;

    game(overrides?: CallOverrides): Promise<BigNumber>;

    getter(overrides?: CallOverrides): Promise<BigNumber>;

    joinTreaty(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    leaveTreaty(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    diamond(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    game(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    joinTreaty(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    leaveTreaty(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
