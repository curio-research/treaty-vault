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
    "battle(uint256,uint256)": FunctionFragment;
    "claimTile(uint256,uint256)": FunctionFragment;
    "disbandArmy(uint256)": FunctionFragment;
    "disownTile(uint256)": FunctionFragment;
    "endGather(uint256)": FunctionFragment;
    "endTroopProduction(uint256,uint256)": FunctionFragment;
    "harvestResource(uint256)": FunctionFragment;
    "harvestResources(uint256[])": FunctionFragment;
    "harvestResourcesFromCapital(uint256)": FunctionFragment;
    "initializeNation(uint256,uint256,string)": FunctionFragment;
    "joinTreaty(uint256)": FunctionFragment;
    "leaveTreaty(uint256)": FunctionFragment;
    "move(uint256,uint256,uint256)": FunctionFragment;
    "moveCapital(uint256,(uint256,uint256))": FunctionFragment;
    "organizeArmy(uint256,uint256[],uint256[])": FunctionFragment;
    "recoverTile(uint256)": FunctionFragment;
    "startGather(uint256,uint256)": FunctionFragment;
    "startTroopProduction(uint256,uint256,uint256)": FunctionFragment;
    "unloadResources(uint256)": FunctionFragment;
    "upgradeNation()": FunctionFragment;
    "upgradeResource(uint256)": FunctionFragment;
    "upgradeTile(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "battle"
      | "claimTile"
      | "disbandArmy"
      | "disownTile"
      | "endGather"
      | "endTroopProduction"
      | "harvestResource"
      | "harvestResources"
      | "harvestResourcesFromCapital"
      | "initializeNation"
      | "joinTreaty"
      | "leaveTreaty"
      | "move"
      | "moveCapital"
      | "organizeArmy"
      | "recoverTile"
      | "startGather"
      | "startTroopProduction"
      | "unloadResources"
      | "upgradeNation"
      | "upgradeResource"
      | "upgradeTile"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "battle",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "claimTile",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "disbandArmy",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "disownTile",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "endGather",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "endTroopProduction",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "harvestResource",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "harvestResources",
    values: [PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "harvestResourcesFromCapital",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "initializeNation",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "joinTreaty",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "leaveTreaty",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "move",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "moveCapital",
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
    functionFragment: "recoverTile",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "startGather",
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
    functionFragment: "unloadResources",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeNation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeResource",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeTile",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "battle", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claimTile", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "disbandArmy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "disownTile", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "endGather", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "endTroopProduction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "harvestResource",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "harvestResources",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "harvestResourcesFromCapital",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initializeNation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "joinTreaty", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "leaveTreaty",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "move", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "moveCapital",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "organizeArmy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "recoverTile",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "startGather",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "startTroopProduction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unloadResources",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "upgradeNation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "upgradeResource",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "upgradeTile",
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
    battle(
      _armyID: PromiseOrValue<BigNumberish>,
      _targetID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    claimTile(
      _armyID: PromiseOrValue<BigNumberish>,
      _tileID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    disbandArmy(
      _armyID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    disownTile(
      _tileID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    endGather(
      _armyID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    endTroopProduction(
      _capitalID: PromiseOrValue<BigNumberish>,
      _productionID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    harvestResource(
      _resourceID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    harvestResources(
      resourceIds: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    harvestResourcesFromCapital(
      _capitalID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    initializeNation(
      _positionX: PromiseOrValue<BigNumberish>,
      _positionY: PromiseOrValue<BigNumberish>,
      _name: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    joinTreaty(
      _treatyID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    leaveTreaty(
      _treatyID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    move(
      _armyID: PromiseOrValue<BigNumberish>,
      _targetX: PromiseOrValue<BigNumberish>,
      _targetY: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    moveCapital(
      _capitalID: PromiseOrValue<BigNumberish>,
      _newTilePosition: PositionStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    organizeArmy(
      _capitalID: PromiseOrValue<BigNumberish>,
      _templateIDs: PromiseOrValue<BigNumberish>[],
      _amounts: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    recoverTile(
      _tileID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    startGather(
      _armyID: PromiseOrValue<BigNumberish>,
      _resourceID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    startTroopProduction(
      _capitalID: PromiseOrValue<BigNumberish>,
      _templateID: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    unloadResources(
      _armyID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    upgradeNation(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    upgradeResource(
      _resourceID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    upgradeTile(
      _tileID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  battle(
    _armyID: PromiseOrValue<BigNumberish>,
    _targetID: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  claimTile(
    _armyID: PromiseOrValue<BigNumberish>,
    _tileID: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  disbandArmy(
    _armyID: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  disownTile(
    _tileID: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  endGather(
    _armyID: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  endTroopProduction(
    _capitalID: PromiseOrValue<BigNumberish>,
    _productionID: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  harvestResource(
    _resourceID: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  harvestResources(
    resourceIds: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  harvestResourcesFromCapital(
    _capitalID: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  initializeNation(
    _positionX: PromiseOrValue<BigNumberish>,
    _positionY: PromiseOrValue<BigNumberish>,
    _name: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  joinTreaty(
    _treatyID: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  leaveTreaty(
    _treatyID: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  move(
    _armyID: PromiseOrValue<BigNumberish>,
    _targetX: PromiseOrValue<BigNumberish>,
    _targetY: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  moveCapital(
    _capitalID: PromiseOrValue<BigNumberish>,
    _newTilePosition: PositionStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  organizeArmy(
    _capitalID: PromiseOrValue<BigNumberish>,
    _templateIDs: PromiseOrValue<BigNumberish>[],
    _amounts: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  recoverTile(
    _tileID: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  startGather(
    _armyID: PromiseOrValue<BigNumberish>,
    _resourceID: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  startTroopProduction(
    _capitalID: PromiseOrValue<BigNumberish>,
    _templateID: PromiseOrValue<BigNumberish>,
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  unloadResources(
    _armyID: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  upgradeNation(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  upgradeResource(
    _resourceID: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  upgradeTile(
    _tileID: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    battle(
      _armyID: PromiseOrValue<BigNumberish>,
      _targetID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    claimTile(
      _armyID: PromiseOrValue<BigNumberish>,
      _tileID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    disbandArmy(
      _armyID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    disownTile(
      _tileID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    endGather(
      _armyID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    endTroopProduction(
      _capitalID: PromiseOrValue<BigNumberish>,
      _productionID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    harvestResource(
      _resourceID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    harvestResources(
      resourceIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    harvestResourcesFromCapital(
      _capitalID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    initializeNation(
      _positionX: PromiseOrValue<BigNumberish>,
      _positionY: PromiseOrValue<BigNumberish>,
      _name: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    joinTreaty(
      _treatyID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    leaveTreaty(
      _treatyID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    move(
      _armyID: PromiseOrValue<BigNumberish>,
      _targetX: PromiseOrValue<BigNumberish>,
      _targetY: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    moveCapital(
      _capitalID: PromiseOrValue<BigNumberish>,
      _newTilePosition: PositionStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    organizeArmy(
      _capitalID: PromiseOrValue<BigNumberish>,
      _templateIDs: PromiseOrValue<BigNumberish>[],
      _amounts: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    recoverTile(
      _tileID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    startGather(
      _armyID: PromiseOrValue<BigNumberish>,
      _resourceID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    startTroopProduction(
      _capitalID: PromiseOrValue<BigNumberish>,
      _templateID: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    unloadResources(
      _armyID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    upgradeNation(overrides?: CallOverrides): Promise<void>;

    upgradeResource(
      _resourceID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    upgradeTile(
      _tileID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    battle(
      _armyID: PromiseOrValue<BigNumberish>,
      _targetID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    claimTile(
      _armyID: PromiseOrValue<BigNumberish>,
      _tileID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    disbandArmy(
      _armyID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    disownTile(
      _tileID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    endGather(
      _armyID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    endTroopProduction(
      _capitalID: PromiseOrValue<BigNumberish>,
      _productionID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    harvestResource(
      _resourceID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    harvestResources(
      resourceIds: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    harvestResourcesFromCapital(
      _capitalID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    initializeNation(
      _positionX: PromiseOrValue<BigNumberish>,
      _positionY: PromiseOrValue<BigNumberish>,
      _name: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    joinTreaty(
      _treatyID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    leaveTreaty(
      _treatyID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    move(
      _armyID: PromiseOrValue<BigNumberish>,
      _targetX: PromiseOrValue<BigNumberish>,
      _targetY: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    moveCapital(
      _capitalID: PromiseOrValue<BigNumberish>,
      _newTilePosition: PositionStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    organizeArmy(
      _capitalID: PromiseOrValue<BigNumberish>,
      _templateIDs: PromiseOrValue<BigNumberish>[],
      _amounts: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    recoverTile(
      _tileID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    startGather(
      _armyID: PromiseOrValue<BigNumberish>,
      _resourceID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    startTroopProduction(
      _capitalID: PromiseOrValue<BigNumberish>,
      _templateID: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    unloadResources(
      _armyID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    upgradeNation(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    upgradeResource(
      _resourceID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    upgradeTile(
      _tileID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    battle(
      _armyID: PromiseOrValue<BigNumberish>,
      _targetID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    claimTile(
      _armyID: PromiseOrValue<BigNumberish>,
      _tileID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    disbandArmy(
      _armyID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    disownTile(
      _tileID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    endGather(
      _armyID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    endTroopProduction(
      _capitalID: PromiseOrValue<BigNumberish>,
      _productionID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    harvestResource(
      _resourceID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    harvestResources(
      resourceIds: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    harvestResourcesFromCapital(
      _capitalID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    initializeNation(
      _positionX: PromiseOrValue<BigNumberish>,
      _positionY: PromiseOrValue<BigNumberish>,
      _name: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    joinTreaty(
      _treatyID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    leaveTreaty(
      _treatyID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    move(
      _armyID: PromiseOrValue<BigNumberish>,
      _targetX: PromiseOrValue<BigNumberish>,
      _targetY: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    moveCapital(
      _capitalID: PromiseOrValue<BigNumberish>,
      _newTilePosition: PositionStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    organizeArmy(
      _capitalID: PromiseOrValue<BigNumberish>,
      _templateIDs: PromiseOrValue<BigNumberish>[],
      _amounts: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    recoverTile(
      _tileID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    startGather(
      _armyID: PromiseOrValue<BigNumberish>,
      _resourceID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    startTroopProduction(
      _capitalID: PromiseOrValue<BigNumberish>,
      _templateID: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    unloadResources(
      _armyID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    upgradeNation(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    upgradeResource(
      _resourceID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    upgradeTile(
      _tileID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
