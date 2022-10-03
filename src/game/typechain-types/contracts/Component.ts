/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
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

export interface ComponentInterface extends utils.Interface {
  functions: {
    "getAllEntitiesAndValues()": FunctionFragment;
    "getBytesValue(uint256)": FunctionFragment;
    "getEntities()": FunctionFragment;
    "getEntitiesAsSet()": FunctionFragment;
    "getEntitiesWithValue(bytes)": FunctionFragment;
    "getEntitiesWithValueAsSet(bytes)": FunctionFragment;
    "has(uint256)": FunctionFragment;
    "remove(uint256)": FunctionFragment;
    "set(uint256,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getAllEntitiesAndValues"
      | "getBytesValue"
      | "getEntities"
      | "getEntitiesAsSet"
      | "getEntitiesWithValue"
      | "getEntitiesWithValueAsSet"
      | "has"
      | "remove"
      | "set"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getAllEntitiesAndValues",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getBytesValue",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getEntities",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getEntitiesAsSet",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getEntitiesWithValue",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getEntitiesWithValueAsSet",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "has",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "remove",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "set",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(
    functionFragment: "getAllEntitiesAndValues",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBytesValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getEntities",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getEntitiesAsSet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getEntitiesWithValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getEntitiesWithValueAsSet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "has", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "remove", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "set", data: BytesLike): Result;

  events: {};
}

export interface Component extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ComponentInterface;

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
    getAllEntitiesAndValues(
      overrides?: CallOverrides
    ): Promise<[BigNumber[], string[]]>;

    getBytesValue(
      _entity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getEntities(overrides?: CallOverrides): Promise<[BigNumber[]]>;

    getEntitiesAsSet(overrides?: CallOverrides): Promise<[string]>;

    getEntitiesWithValue(
      _value: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    getEntitiesWithValueAsSet(
      _value: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    has(
      _entity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    remove(
      _entity: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    set(
      _entity: PromiseOrValue<BigNumberish>,
      _value: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  getAllEntitiesAndValues(
    overrides?: CallOverrides
  ): Promise<[BigNumber[], string[]]>;

  getBytesValue(
    _entity: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  getEntities(overrides?: CallOverrides): Promise<BigNumber[]>;

  getEntitiesAsSet(overrides?: CallOverrides): Promise<string>;

  getEntitiesWithValue(
    _value: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  getEntitiesWithValueAsSet(
    _value: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  has(
    _entity: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  remove(
    _entity: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  set(
    _entity: PromiseOrValue<BigNumberish>,
    _value: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getAllEntitiesAndValues(
      overrides?: CallOverrides
    ): Promise<[BigNumber[], string[]]>;

    getBytesValue(
      _entity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getEntities(overrides?: CallOverrides): Promise<BigNumber[]>;

    getEntitiesAsSet(overrides?: CallOverrides): Promise<string>;

    getEntitiesWithValue(
      _value: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getEntitiesWithValueAsSet(
      _value: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    has(
      _entity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    remove(
      _entity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    set(
      _entity: PromiseOrValue<BigNumberish>,
      _value: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    getAllEntitiesAndValues(overrides?: CallOverrides): Promise<BigNumber>;

    getBytesValue(
      _entity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getEntities(overrides?: CallOverrides): Promise<BigNumber>;

    getEntitiesAsSet(overrides?: CallOverrides): Promise<BigNumber>;

    getEntitiesWithValue(
      _value: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getEntitiesWithValueAsSet(
      _value: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    has(
      _entity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    remove(
      _entity: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    set(
      _entity: PromiseOrValue<BigNumberish>,
      _value: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getAllEntitiesAndValues(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getBytesValue(
      _entity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getEntities(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getEntitiesAsSet(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getEntitiesWithValue(
      _value: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getEntitiesWithValueAsSet(
      _value: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    has(
      _entity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    remove(
      _entity: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    set(
      _entity: PromiseOrValue<BigNumberish>,
      _value: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
