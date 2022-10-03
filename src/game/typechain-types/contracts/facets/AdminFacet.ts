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

export type PositionStruct = {
  x: PromiseOrValue<BigNumberish>;
  y: PromiseOrValue<BigNumberish>;
};

export type PositionStructOutput = [BigNumber, BigNumber] & {
  x: BigNumber;
  y: BigNumber;
};

export type ComponentSpecStruct = {
  name: PromiseOrValue<string>;
  valueType: PromiseOrValue<BigNumberish>;
};

export type ComponentSpecStructOutput = [string, number] & {
  name: string;
  valueType: number;
};

export interface AdminFacetInterface extends utils.Interface {
  functions: {
    "addEntity()": FunctionFragment;
    "bulkInitializeTiles((uint256,uint256)[])": FunctionFragment;
    "reactivatePlayer(address)": FunctionFragment;
    "registerComponents(address,(string,uint8)[])": FunctionFragment;
    "registerDefaultComponents(address)": FunctionFragment;
    "removeEntity(uint256)": FunctionFragment;
    "setComponentValue(string,uint256,bytes)": FunctionFragment;
    "storeEncodedColumnBatches(uint256[][])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addEntity"
      | "bulkInitializeTiles"
      | "reactivatePlayer"
      | "registerComponents"
      | "registerDefaultComponents"
      | "removeEntity"
      | "setComponentValue"
      | "storeEncodedColumnBatches"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "addEntity", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "bulkInitializeTiles",
    values: [PositionStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "reactivatePlayer",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "registerComponents",
    values: [PromiseOrValue<string>, ComponentSpecStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "registerDefaultComponents",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "removeEntity",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setComponentValue",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "storeEncodedColumnBatches",
    values: [PromiseOrValue<BigNumberish>[][]]
  ): string;

  decodeFunctionResult(functionFragment: "addEntity", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "bulkInitializeTiles",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "reactivatePlayer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerComponents",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerDefaultComponents",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeEntity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setComponentValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "storeEncodedColumnBatches",
    data: BytesLike
  ): Result;

  events: {};
}

export interface AdminFacet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AdminFacetInterface;

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
    addEntity(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    bulkInitializeTiles(
      _positions: PositionStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    reactivatePlayer(
      _address: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    registerComponents(
      _gameAddr: PromiseOrValue<string>,
      _componentSpecs: ComponentSpecStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    registerDefaultComponents(
      _gameAddr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    removeEntity(
      _entity: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setComponentValue(
      _componentName: PromiseOrValue<string>,
      _entity: PromiseOrValue<BigNumberish>,
      _value: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    storeEncodedColumnBatches(
      _colBatches: PromiseOrValue<BigNumberish>[][],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  addEntity(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  bulkInitializeTiles(
    _positions: PositionStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  reactivatePlayer(
    _address: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  registerComponents(
    _gameAddr: PromiseOrValue<string>,
    _componentSpecs: ComponentSpecStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  registerDefaultComponents(
    _gameAddr: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  removeEntity(
    _entity: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setComponentValue(
    _componentName: PromiseOrValue<string>,
    _entity: PromiseOrValue<BigNumberish>,
    _value: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  storeEncodedColumnBatches(
    _colBatches: PromiseOrValue<BigNumberish>[][],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addEntity(overrides?: CallOverrides): Promise<BigNumber>;

    bulkInitializeTiles(
      _positions: PositionStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    reactivatePlayer(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    registerComponents(
      _gameAddr: PromiseOrValue<string>,
      _componentSpecs: ComponentSpecStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    registerDefaultComponents(
      _gameAddr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    removeEntity(
      _entity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setComponentValue(
      _componentName: PromiseOrValue<string>,
      _entity: PromiseOrValue<BigNumberish>,
      _value: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    storeEncodedColumnBatches(
      _colBatches: PromiseOrValue<BigNumberish>[][],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    addEntity(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    bulkInitializeTiles(
      _positions: PositionStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    reactivatePlayer(
      _address: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    registerComponents(
      _gameAddr: PromiseOrValue<string>,
      _componentSpecs: ComponentSpecStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    registerDefaultComponents(
      _gameAddr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    removeEntity(
      _entity: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setComponentValue(
      _componentName: PromiseOrValue<string>,
      _entity: PromiseOrValue<BigNumberish>,
      _value: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    storeEncodedColumnBatches(
      _colBatches: PromiseOrValue<BigNumberish>[][],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addEntity(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    bulkInitializeTiles(
      _positions: PositionStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    reactivatePlayer(
      _address: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    registerComponents(
      _gameAddr: PromiseOrValue<string>,
      _componentSpecs: ComponentSpecStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    registerDefaultComponents(
      _gameAddr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    removeEntity(
      _entity: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setComponentValue(
      _componentName: PromiseOrValue<string>,
      _entity: PromiseOrValue<BigNumberish>,
      _value: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    storeEncodedColumnBatches(
      _colBatches: PromiseOrValue<BigNumberish>[][],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
