import { decodeStringArrComp, decodeUint256ArrComp, encodeStringArrComp, encodeUint256ArrComp } from './componentSerde';
import { componentRegistryType, ComponentDataTypes, CompType } from '../types';
import { position } from '../types';
import {
  decodeBoolComp,
  decodeAddressComp,
  decodeUint256Comp,
  decodePositionComp,
  decodeStringComp,
  decodeInt256Comp,
  encodePositionComp,
  encodeBoolComp,
  encodeStringComp,
  encodeUint256Comp,
  encodeAddressComp,
  encodeInt256Comp,
} from './componentSerde';

// ------------------------------------
// * Main Component Registry *

export const IsComponent = 'IsComponent';
export const Tag = 'Tag';
export const InitTimestamp = 'InitTimestamp';
export const Position = 'Position';
export const Owner = 'Owner';
export const Level = 'Level';
export const Name = 'Name';
export const BuildingType = 'BuildingType';
export const Template = 'Template';
export const CanProduce = 'CanProduce';
export const Duration = 'Duration';
export const Health = 'Health';
export const Attack = 'Attack';
export const Defense = 'Defense';
export const Speed = 'Speed';
export const MoveCooldown = 'MoveCooldown';
export const BattleCooldown = 'BattleCooldown';
export const Load = 'Load';
export const Amount = 'Amount';
export const Keeper = 'Keeper';
export const Address = 'Address';
export const Treaty = 'Treaty';
export const Army = 'Army';
export const StartPosition = 'StartPosition';
export const Terrain = 'Terrain';
export const CanBattle = 'CanBattle';
export const AttackRange = 'AttackRange';
export const LastUpgraded = 'LastUpgraded';
export const LastMoved = 'LastMoved';
export const LastRecovered = 'LastRecovered';
export const LastSacked = 'LastSacked';
export const LastAttacked = 'LastAttacked';
export const LastHarvested = 'LastHarvested';
export const Nation = 'Nation';
export const ABIHash = 'ABIHash';
export const FunctionName = 'FunctionName';
export const Caller = 'Caller';
export const Description = 'Description';
export const CanHoldTokens = 'CanHoldTokens';
export const IsLocked = 'IsLocked';
export const CanHostCapital = 'CanHostCapital';
export const Subject = 'Subject';
export const LastActed = 'LastActed';
export const Metadata = 'Metadata';

export const COMPONENT_SPECS: CompType[] = [
  { name: Address, valueType: ComponentDataTypes.ADDRESS }, // MUST BE THE FIRST COMPONENT
  { name: IsComponent, valueType: ComponentDataTypes.BOOL }, // MUST BE THE SECOND COMPONENT
  { name: Tag, valueType: ComponentDataTypes.STRING },
  { name: InitTimestamp, valueType: ComponentDataTypes.UINT },
  { name: Position, valueType: ComponentDataTypes.POSITION },
  { name: Owner, valueType: ComponentDataTypes.UINT },
  { name: Level, valueType: ComponentDataTypes.UINT },
  { name: Name, valueType: ComponentDataTypes.STRING },
  { name: BuildingType, valueType: ComponentDataTypes.STRING },
  { name: Template, valueType: ComponentDataTypes.UINT },
  { name: CanProduce, valueType: ComponentDataTypes.BOOL },
  { name: Duration, valueType: ComponentDataTypes.UINT },
  { name: Health, valueType: ComponentDataTypes.UINT },
  { name: Attack, valueType: ComponentDataTypes.UINT },
  { name: Defense, valueType: ComponentDataTypes.UINT },
  { name: Speed, valueType: ComponentDataTypes.UINT },
  { name: MoveCooldown, valueType: ComponentDataTypes.UINT },
  { name: BattleCooldown, valueType: ComponentDataTypes.UINT },
  { name: Load, valueType: ComponentDataTypes.UINT },
  { name: Keeper, valueType: ComponentDataTypes.UINT },
  { name: Amount, valueType: ComponentDataTypes.UINT },
  { name: Treaty, valueType: ComponentDataTypes.UINT },
  { name: Army, valueType: ComponentDataTypes.UINT },
  { name: StartPosition, valueType: ComponentDataTypes.POSITION },
  { name: Terrain, valueType: ComponentDataTypes.UINT },
  { name: CanBattle, valueType: ComponentDataTypes.BOOL },
  { name: AttackRange, valueType: ComponentDataTypes.UINT },
  { name: LastUpgraded, valueType: ComponentDataTypes.UINT },
  { name: LastMoved, valueType: ComponentDataTypes.UINT },
  { name: LastRecovered, valueType: ComponentDataTypes.UINT },
  { name: LastSacked, valueType: ComponentDataTypes.UINT },
  { name: LastAttacked, valueType: ComponentDataTypes.UINT },
  { name: LastHarvested, valueType: ComponentDataTypes.UINT },
  { name: Nation, valueType: ComponentDataTypes.UINT },
  { name: ABIHash, valueType: ComponentDataTypes.STRING },
  { name: FunctionName, valueType: ComponentDataTypes.STRING },
  { name: Caller, valueType: ComponentDataTypes.UINT },
  { name: Description, valueType: ComponentDataTypes.STRING },
  { name: CanHoldTokens, valueType: ComponentDataTypes.BOOL },
  { name: IsLocked, valueType: ComponentDataTypes.BOOL },
  { name: CanHostCapital, valueType: ComponentDataTypes.BOOL },
  { name: Subject, valueType: ComponentDataTypes.UINT },
  { name: LastActed, valueType: ComponentDataTypes.UINT },
  { name: Metadata, valueType: ComponentDataTypes.STRING },
];

export interface componentInputTypeMap {
  IsComponent: boolean;
  Tag: string;
  InitTimestamp: number;
  Position: position;
  Owner: number;
  Level: number;
  Name: string;
  BuildingType: string;
  Template: number;
  CanProduce: boolean;
  Duration: number;
  Health: number;
  Attack: number;
  Defense: number;
  Speed: number;
  MoveCooldown: number;
  BattleCooldown: number;
  Load: number;
  Amount: number;
  Keeper: number;
  Address: string;
  Treaty: number;
  Terrain: number;
  CanBattle: boolean;
  StartPosition: position;
  AttackRange: number;
  LastUpgraded: number;
  LastMoved: number;
  LastRecovered: number;
  LastSacked: number;
  LastAttacked: number;
  LastHarvested: number;
  Nation: number;
  ABIHash: string;
  FunctionName: string;
  Caller: number;
  Description: string;
  CanHoldTokens: boolean;
  IsLocked: boolean;
  CanHostCapital: boolean;
  Subject: number;
  LastActed: number;
  Metadata: string;
}

export enum Tags {
  Army = 'Army',
  Battle = 'Battle',
  Building = 'Building',
  Constituent = 'Constituent',
  Guard = 'Guard',
  Inventory = 'Inventory',
  Player = 'Player',
  Resource = 'Resource',
  ResourceInventory = 'ResourceInventory',
  ResourceTemplate = 'ResourceTemplate',
  ResourceGather = 'ResourceGather',
  Settler = 'Settler',
  Signature = 'Signature',
  Tile = 'Tile',
  Treaty = 'Treaty',
  TreatyTemplate = 'TreatyTemplate',
  TroopInventory = 'TroopInventory',
  TroopProduction = 'TroopProduction',
  TroopTemplate = 'TroopTemplate',
  Gather = 'Gather',
  Constant = 'Constant',
  Nation = 'Nation',
  Delegation = 'Delegation',
}

export enum BuildingTypeOptions {
  Capital = 'Capital',
}

export enum InventoryTypeOptions {
  Horseman = 'Horseman',
  Warrior = 'Warrior',
  Slinger = 'Slinger',
  Guard = 'Guard',
  Gold = 'Gold',
  Food = 'Food',
}

// ---------------------------------------------------------------------------

export const componentRegistry: componentRegistryType = {};

Object.keys(COMPONENT_SPECS).forEach((key, idx) => {
  const componentInfo = COMPONENT_SPECS[Number(key)];
  componentRegistry[idx + 1] = componentInfo;
});

// assert the two are the same size

// --------------------------------------------------------

export const componentNameToDecoder: Record<string, any> = {};

Object.keys(componentRegistry).forEach((key) => {
  const componentInfo = componentRegistry[Number(key)];

  switch (componentInfo.valueType) {
    case ComponentDataTypes.POSITION:
      componentNameToDecoder[componentInfo.name] = decodePositionComp;
      break;
    case ComponentDataTypes.BOOL:
      componentNameToDecoder[componentInfo.name] = decodeBoolComp;
      break;
    case ComponentDataTypes.STRING:
      componentNameToDecoder[componentInfo.name] = decodeStringComp;
      break;
    case ComponentDataTypes.STRING_ARRAY:
      componentNameToDecoder[componentInfo.name] = decodeStringArrComp;
      break;
    case ComponentDataTypes.ADDRESS:
      componentNameToDecoder[componentInfo.name] = decodeAddressComp;
      break;
    case ComponentDataTypes.UINT:
      componentNameToDecoder[componentInfo.name] = decodeUint256Comp;
      break;
    case ComponentDataTypes.UINT_ARRAY:
      componentNameToDecoder[componentInfo.name] = decodeUint256ArrComp;
      break;
    case ComponentDataTypes.INT:
      componentNameToDecoder[componentInfo.name] = decodeInt256Comp;
      break;
  }
});

// base component types

export const componentToType: Record<string, ComponentDataTypes> = {};

// ex: Position: position
Object.keys(componentRegistry).forEach((key, idx) => {
  const componentInfo = componentRegistry[Number(key)];
  componentToType[componentInfo.name] = componentInfo.valueType;
});

export const componentTypeToDecoder: Record<ComponentDataTypes, any> = {
  [ComponentDataTypes.UINT]: decodeUint256Comp,
  [ComponentDataTypes.STRING]: decodeStringComp,
  [ComponentDataTypes.BOOL]: decodeBoolComp,
  [ComponentDataTypes.INT]: decodeInt256Comp,
  [ComponentDataTypes.ADDRESS]: decodeAddressComp,
  [ComponentDataTypes.POSITION]: decodePositionComp,
  [ComponentDataTypes.UINT_ARRAY]: decodeUint256ArrComp,
  [ComponentDataTypes.STRING_ARRAY]: decodeStringArrComp,
  // [ComponentDataTypes.POSITION_ARRAY]: decodePositionArrComp,
};

export const componentTypeToEncoder: Record<ComponentDataTypes, any> = {
  [ComponentDataTypes.UINT]: encodeUint256Comp,
  [ComponentDataTypes.STRING]: encodeStringComp,
  [ComponentDataTypes.BOOL]: encodeBoolComp,
  [ComponentDataTypes.INT]: encodeInt256Comp,
  [ComponentDataTypes.ADDRESS]: encodeAddressComp,
  [ComponentDataTypes.POSITION]: encodePositionComp,
  [ComponentDataTypes.UINT_ARRAY]: encodeUint256ArrComp,
  [ComponentDataTypes.STRING_ARRAY]: encodeStringArrComp,
};

// auto generated. component index starts at 1
export const componentNameToId: Record<string, number> = {};

Object.keys(componentRegistry).forEach((key, idx) => {
  const componentInfo = componentRegistry[Number(key)];
  componentNameToId[componentInfo.name] = idx + 1;
});

// this is auto generated. It's a reverse mapping of componentNameToId and looks like
// {1: IsActive: 2: Position, 3: ...}
export const componentIdToName: Record<number, string> = {};

Object.keys(componentNameToId).forEach((key) => {
  componentIdToName[componentNameToId[key]] = key;
});
