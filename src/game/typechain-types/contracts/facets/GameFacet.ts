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

export interface GameFacetInterface extends utils.Interface {
  functions: {
    "disbandArmy(uint256)": FunctionFragment;
    "endBattle(uint256,bool)": FunctionFragment;
    "endTroopProduction(uint256,uint256)": FunctionFragment;
    "foundCity(uint256,(uint256,uint256)[],string)": FunctionFragment;
    "harvestResource(uint256,uint256)": FunctionFragment;
    "initializePlayer((uint256,uint256),string)": FunctionFragment;
    "moveArmy(uint256,(uint256,uint256))": FunctionFragment;
    "moveSettler(uint256,(uint256,uint256))": FunctionFragment;
    "organizeArmy(uint256,uint256[],uint256[])": FunctionFragment;
    "packCity(uint256)": FunctionFragment;
    "startBattle(uint256,uint256)": FunctionFragment;
    "startTroopProduction(uint256,uint256,uint256)": FunctionFragment;
    "upgradeCity(uint256,(uint256,uint256)[])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "disbandArmy"
      | "endBattle"
      | "endTroopProduction"
      | "foundCity"
      | "harvestResource"
      | "initializePlayer"
      | "moveArmy"
      | "moveSettler"
      | "organizeArmy"
      | "packCity"
      | "startBattle"
      | "startTroopProduction"
      | "upgradeCity"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "disbandArmy",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "endBattle",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "endTroopProduction",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "foundCity",
    values: [
      PromiseOrValue<BigNumberish>,
      PositionStruct[],
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "harvestResource",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "initializePlayer",
    values: [PositionStruct, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "moveArmy",
    values: [PromiseOrValue<BigNumberish>, PositionStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "moveSettler",
    values: [PromiseOrValue<BigNumberish>, PositionStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "organizeArmy",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "packCity",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "startBattle",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "startTroopProduction",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeCity",
    values: [PromiseOrValue<BigNumberish>, PositionStruct[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "disbandArmy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "endBattle", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "endTroopProduction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "foundCity", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "harvestResource",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initializePlayer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "moveArmy", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "moveSettler",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "organizeArmy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "packCity", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "startBattle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "startTroopProduction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "upgradeCity",
    data: BytesLike
  ): Result;

  events: {};
}

export interface GameFacet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GameFacetInterface;

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
    disbandArmy(
      _armyID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    endBattle(
      _armyID: PromiseOrValue<BigNumberish>,
      _isBattlingArmy: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    endTroopProduction(
      _buildingID: PromiseOrValue<BigNumberish>,
      _productionID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    foundCity(
      _settlerID: PromiseOrValue<BigNumberish>,
      _territory: PositionStruct[],
      _cityName: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    harvestResource(
      _buildingID: PromiseOrValue<BigNumberish>,
      _templateID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    initializePlayer(
      _position: PositionStruct,
      _name: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    moveArmy(
      _armyID: PromiseOrValue<BigNumberish>,
      _targetPosition: PositionStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    moveSettler(
      _settlerID: PromiseOrValue<BigNumberish>,
      _targetPosition: PositionStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    organizeArmy(
      _cityID: PromiseOrValue<BigNumberish>,
      _templateIDs: PromiseOrValue<BigNumberish>[],
      _amounts: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    packCity(
      _cityID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    startBattle(
      _armyID: PromiseOrValue<BigNumberish>,
      _targetID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    startTroopProduction(
      _buildingID: PromiseOrValue<BigNumberish>,
      _templateID: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    upgradeCity(
      _cityID: PromiseOrValue<BigNumberish>,
      _newTerritory: PositionStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  disbandArmy(
    _armyID: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  endBattle(
    _armyID: PromiseOrValue<BigNumberish>,
    _isBattlingArmy: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  endTroopProduction(
    _buildingID: PromiseOrValue<BigNumberish>,
    _productionID: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  foundCity(
    _settlerID: PromiseOrValue<BigNumberish>,
    _territory: PositionStruct[],
    _cityName: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  harvestResource(
    _buildingID: PromiseOrValue<BigNumberish>,
    _templateID: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  initializePlayer(
    _position: PositionStruct,
    _name: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  moveArmy(
    _armyID: PromiseOrValue<BigNumberish>,
    _targetPosition: PositionStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  moveSettler(
    _settlerID: PromiseOrValue<BigNumberish>,
    _targetPosition: PositionStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  organizeArmy(
    _cityID: PromiseOrValue<BigNumberish>,
    _templateIDs: PromiseOrValue<BigNumberish>[],
    _amounts: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  packCity(
    _cityID: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  startBattle(
    _armyID: PromiseOrValue<BigNumberish>,
    _targetID: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  startTroopProduction(
    _buildingID: PromiseOrValue<BigNumberish>,
    _templateID: PromiseOrValue<BigNumberish>,
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  upgradeCity(
    _cityID: PromiseOrValue<BigNumberish>,
    _newTerritory: PositionStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    disbandArmy(
      _armyID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    endBattle(
      _armyID: PromiseOrValue<BigNumberish>,
      _isBattlingArmy: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    endTroopProduction(
      _buildingID: PromiseOrValue<BigNumberish>,
      _productionID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    foundCity(
      _settlerID: PromiseOrValue<BigNumberish>,
      _territory: PositionStruct[],
      _cityName: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    harvestResource(
      _buildingID: PromiseOrValue<BigNumberish>,
      _templateID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    initializePlayer(
      _position: PositionStruct,
      _name: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { _playerID: BigNumber; _settlerID: BigNumber }
    >;

    moveArmy(
      _armyID: PromiseOrValue<BigNumberish>,
      _targetPosition: PositionStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    moveSettler(
      _settlerID: PromiseOrValue<BigNumberish>,
      _targetPosition: PositionStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    organizeArmy(
      _cityID: PromiseOrValue<BigNumberish>,
      _templateIDs: PromiseOrValue<BigNumberish>[],
      _amounts: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    packCity(
      _cityID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    startBattle(
      _armyID: PromiseOrValue<BigNumberish>,
      _targetID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    startTroopProduction(
      _buildingID: PromiseOrValue<BigNumberish>,
      _templateID: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    upgradeCity(
      _cityID: PromiseOrValue<BigNumberish>,
      _newTerritory: PositionStruct[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    disbandArmy(
      _armyID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    endBattle(
      _armyID: PromiseOrValue<BigNumberish>,
      _isBattlingArmy: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    endTroopProduction(
      _buildingID: PromiseOrValue<BigNumberish>,
      _productionID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    foundCity(
      _settlerID: PromiseOrValue<BigNumberish>,
      _territory: PositionStruct[],
      _cityName: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    harvestResource(
      _buildingID: PromiseOrValue<BigNumberish>,
      _templateID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    initializePlayer(
      _position: PositionStruct,
      _name: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    moveArmy(
      _armyID: PromiseOrValue<BigNumberish>,
      _targetPosition: PositionStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    moveSettler(
      _settlerID: PromiseOrValue<BigNumberish>,
      _targetPosition: PositionStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    organizeArmy(
      _cityID: PromiseOrValue<BigNumberish>,
      _templateIDs: PromiseOrValue<BigNumberish>[],
      _amounts: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    packCity(
      _cityID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    startBattle(
      _armyID: PromiseOrValue<BigNumberish>,
      _targetID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    startTroopProduction(
      _buildingID: PromiseOrValue<BigNumberish>,
      _templateID: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    upgradeCity(
      _cityID: PromiseOrValue<BigNumberish>,
      _newTerritory: PositionStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    disbandArmy(
      _armyID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    endBattle(
      _armyID: PromiseOrValue<BigNumberish>,
      _isBattlingArmy: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    endTroopProduction(
      _buildingID: PromiseOrValue<BigNumberish>,
      _productionID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    foundCity(
      _settlerID: PromiseOrValue<BigNumberish>,
      _territory: PositionStruct[],
      _cityName: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    harvestResource(
      _buildingID: PromiseOrValue<BigNumberish>,
      _templateID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    initializePlayer(
      _position: PositionStruct,
      _name: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    moveArmy(
      _armyID: PromiseOrValue<BigNumberish>,
      _targetPosition: PositionStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    moveSettler(
      _settlerID: PromiseOrValue<BigNumberish>,
      _targetPosition: PositionStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    organizeArmy(
      _cityID: PromiseOrValue<BigNumberish>,
      _templateIDs: PromiseOrValue<BigNumberish>[],
      _amounts: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    packCity(
      _cityID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    startBattle(
      _armyID: PromiseOrValue<BigNumberish>,
      _targetID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    startTroopProduction(
      _buildingID: PromiseOrValue<BigNumberish>,
      _templateID: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    upgradeCity(
      _cityID: PromiseOrValue<BigNumberish>,
      _newTerritory: PositionStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
