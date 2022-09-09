import { encodePositionArryComp, encodeUint256ArryComp } from ".";
import { componentRegistryType, ComponentDataTypes, compType } from "../types";
import { position } from "../types";
import { decodeBoolComp, decodeAddressComp, decodeUint256Comp, decodePositionComp, decodeStringComp, decodeInt256Comp, encodePositionComp, encodeBoolComp, encodeStringComp, encodeUint256Comp, decodePositionArrComp, encodeAddressComp, encodeInt256Comp } from "./componentSerde";

// ------------------------------------
// * Main Component Registry *

export const IsComponent = "IsComponent";
export const InitTimestamp = "InitTimestamp";
export const IsActive = "IsActive";
export const Position = "Position";
export const OwnerEntity = "OwnerEntity";

export const Name = "Name";
export const Tag = "Tag";
export const CanMove = "CanMove";
export const CanAttack = "CanAttack";
export const CanCapture = "CanCapture";
export const CanPurchase = "CanPurchase";

export const Gold = "Gold";
export const GoldPerSecond = "GoldPerSecond";
export const Oil = "Oil";
export const OilPerSecond = "OilPerSecond";
export const BalanceLastUpdated = "BalanceLastUpdated";

export const Health = "Health";
export const LastMoved = "LastMoved";
export const LastLargeActionTaken = "LastLargeActionTaken";
export const LastRepaired = "LastRepaired";
export const CanMoveOnLand = "CanMoveOnLand";
export const MaxHealth = "MaxHealth";
export const DamagePerHit = "DamagePerHit";
export const AttackFactor = "AttackFactor";
export const DefenseFactor = "DefenseFactor";
export const MovementCooldown = "MovementCooldown";
export const LargeActionCooldown = "LargeActionCooldown";
export const ArmyEntity = "ArmyEntity";
export const IsDebuffed = "IsDebuffed";
export const IsArmy = "IsArmy";

export const Owner = "Owner";
export const Base = "Base";

export const COMPONENT_SPECS: compType[] = [
  // General system
  { name: "IsComponent", valueType: ComponentDataTypes.BOOL },
  { name: "InitTimestamp", valueType: ComponentDataTypes.UINT },
  { name: "IsActive", valueType: ComponentDataTypes.BOOL },
  { name: "Position", valueType: ComponentDataTypes.POSITION },
  { name: "OwnerEntity", valueType: ComponentDataTypes.UINT },
  // Identifier system
  { name: "Name", valueType: ComponentDataTypes.STRING },
  { name: "Tag", valueType: ComponentDataTypes.STRING },
  { name: "CanMove", valueType: ComponentDataTypes.BOOL },
  { name: "CanAttack", valueType: ComponentDataTypes.BOOL },
  { name: "CanCapture", valueType: ComponentDataTypes.BOOL },
  { name: "CanPurchase", valueType: ComponentDataTypes.BOOL },
  // Resource system
  { name: "Gold", valueType: ComponentDataTypes.UINT },
  { name: "GoldPerSecond", valueType: ComponentDataTypes.INT },
  { name: "Oil", valueType: ComponentDataTypes.UINT },
  { name: "OilPerSecond", valueType: ComponentDataTypes.INT },
  { name: "BalanceLastUpdated", valueType: ComponentDataTypes.UINT },
  // Battle system
  { name: "Health", valueType: ComponentDataTypes.UINT },
  { name: "LastMoved", valueType: ComponentDataTypes.UINT },
  { name: "LastLargeActionTaken", valueType: ComponentDataTypes.UINT },
  { name: "LastRepaired", valueType: ComponentDataTypes.UINT },
  { name: "CanMoveOnLand", valueType: ComponentDataTypes.BOOL },
  { name: "MaxHealth", valueType: ComponentDataTypes.UINT },
  { name: "DamagePerHit", valueType: ComponentDataTypes.UINT },
  { name: "AttackFactor", valueType: ComponentDataTypes.UINT },
  { name: "DefenseFactor", valueType: ComponentDataTypes.UINT },
  { name: "MovementCooldown", valueType: ComponentDataTypes.UINT },
  { name: "LargeActionCooldown", valueType: ComponentDataTypes.UINT },
  { name: "ArmyEntity", valueType: ComponentDataTypes.UINT },
  { name: "IsDebuffed", valueType: ComponentDataTypes.BOOL },
  { name: "IsArmy", valueType: ComponentDataTypes.BOOL },
];

// ---------------------------------------------------------------------------

export const componentRegistry: componentRegistryType = {};

Object.keys(COMPONENT_SPECS).forEach((key, idx) => {
  const componentInfo = COMPONENT_SPECS[Number(key)];
  componentRegistry[idx + 1] = componentInfo;
});

export interface componentInputTypeMap {
  IsComponent: boolean;
  InitTimestamp: number;
  IsActive: boolean;
  Position: position;
  OwnerEntity: number;
  Name: string;
  Tag: string;
  CanMove: boolean;
  CanAttack: boolean;
  CanCapture: boolean;
  CanPurchase: boolean;
  Gold: number;
  GoldPerSecond: number;
  Oil: number;
  OilPerSecond: number;
  BalanceLastUpdated: number;
  Health: number;
  LastMoved: number;
  LastLargeActionTaken: number;
  LastRepaired: number;
  CanMoveOnLand: boolean;
  MaxHealth: number;
  DamagePerHit: number;
  AttackFactor: number;
  DefenseFactor: number;
  MovementCooldown: number;
  LargeActionCooldown: number;
  ArmyEntity: number;
  IsDebuffed: boolean;
  IsArmy: boolean;
}

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
    case ComponentDataTypes.ADDRESS:
      componentNameToDecoder[componentInfo.name] = decodeAddressComp;
      break;
    case ComponentDataTypes.UINT:
      componentNameToDecoder[componentInfo.name] = decodeUint256Comp;
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
  [ComponentDataTypes.POSITION]: decodePositionComp,
  [ComponentDataTypes.BOOL]: decodeBoolComp,
  [ComponentDataTypes.STRING]: decodeStringComp,
  [ComponentDataTypes.ADDRESS]: decodeAddressComp,
  [ComponentDataTypes.UINT]: decodeUint256Comp,
  [ComponentDataTypes.INT]: decodeInt256Comp,
  [ComponentDataTypes.POSITION_ARRAY]: decodePositionArrComp,
  [ComponentDataTypes.UINT256_ARRAY]: decodeUint256Comp,
};

export const componentTypeToEncoder: Record<ComponentDataTypes, any> = {
  [ComponentDataTypes.POSITION]: encodePositionComp,
  [ComponentDataTypes.BOOL]: encodeBoolComp,
  [ComponentDataTypes.STRING]: encodeStringComp,
  [ComponentDataTypes.ADDRESS]: encodeAddressComp,
  [ComponentDataTypes.UINT]: encodeUint256Comp,
  [ComponentDataTypes.INT]: encodeInt256Comp,
  [ComponentDataTypes.POSITION_ARRAY]: encodePositionArryComp,
  [ComponentDataTypes.UINT256_ARRAY]: encodeUint256ArryComp,
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
