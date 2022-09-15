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
} from "../../common";

export interface UintArrayComponentInterface extends utils.Interface {
  functions: {
    "getAllEntitiesAndValues()": FunctionFragment;
    "getBytesValue(uint256)": FunctionFragment;
    "getEntities()": FunctionFragment;
    "getEntitiesWithValue(uint256[])": FunctionFragment;
    "getEntitiesWithValue(bytes)": FunctionFragment;
    "getValue(uint256)": FunctionFragment;
    "has(uint256)": FunctionFragment;
    "remove(uint256)": FunctionFragment;
    "set(uint256,bytes)": FunctionFragment;
    "set(uint256,uint256[])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getAllEntitiesAndValues"
      | "getBytesValue"
      | "getEntities"
      | "getEntitiesWithValue(uint256[])"
      | "getEntitiesWithValue(bytes)"
      | "getValue"
      | "has"
      | "remove"
      | "set(uint256,bytes)"
      | "set(uint256,uint256[])"
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
    functionFragment: "getEntitiesWithValue(uint256[])",
    values: [PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getEntitiesWithValue(bytes)",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getValue",
    values: [PromiseOrValue<BigNumberish>]
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
    functionFragment: "set(uint256,bytes)",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "set(uint256,uint256[])",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>[]]
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
    functionFragment: "getEntitiesWithValue(uint256[])",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getEntitiesWithValue(bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getValue", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "has", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "remove", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "set(uint256,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "set(uint256,uint256[])",
    data: BytesLike
  ): Result;

  events: {};
}

export interface UintArrayComponent extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: UintArrayComponentInterface;

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

    "getEntitiesWithValue(uint256[])"(
      _value: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    "getEntitiesWithValue(bytes)"(
      _value: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    getValue(
      _entity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    has(
      _entity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    remove(
      _entity: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "set(uint256,bytes)"(
      _entity: PromiseOrValue<BigNumberish>,
      _value: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "set(uint256,uint256[])"(
      _entity: PromiseOrValue<BigNumberish>,
      _value: PromiseOrValue<BigNumberish>[],
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

  "getEntitiesWithValue(uint256[])"(
    _value: PromiseOrValue<BigNumberish>[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  "getEntitiesWithValue(bytes)"(
    _value: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  getValue(
    _entity: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  has(
    _entity: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  remove(
    _entity: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "set(uint256,bytes)"(
    _entity: PromiseOrValue<BigNumberish>,
    _value: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "set(uint256,uint256[])"(
    _entity: PromiseOrValue<BigNumberish>,
    _value: PromiseOrValue<BigNumberish>[],
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

    "getEntitiesWithValue(uint256[])"(
      _value: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    "getEntitiesWithValue(bytes)"(
      _value: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getValue(
      _entity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    has(
      _entity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    remove(
      _entity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "set(uint256,bytes)"(
      _entity: PromiseOrValue<BigNumberish>,
      _value: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    "set(uint256,uint256[])"(
      _entity: PromiseOrValue<BigNumberish>,
      _value: PromiseOrValue<BigNumberish>[],
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

    "getEntitiesWithValue(uint256[])"(
      _value: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getEntitiesWithValue(bytes)"(
      _value: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getValue(
      _entity: PromiseOrValue<BigNumberish>,
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

    "set(uint256,bytes)"(
      _entity: PromiseOrValue<BigNumberish>,
      _value: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "set(uint256,uint256[])"(
      _entity: PromiseOrValue<BigNumberish>,
      _value: PromiseOrValue<BigNumberish>[],
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

    "getEntitiesWithValue(uint256[])"(
      _value: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getEntitiesWithValue(bytes)"(
      _value: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getValue(
      _entity: PromiseOrValue<BigNumberish>,
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

    "set(uint256,bytes)"(
      _entity: PromiseOrValue<BigNumberish>,
      _value: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "set(uint256,uint256[])"(
      _entity: PromiseOrValue<BigNumberish>,
      _value: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
