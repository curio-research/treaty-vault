import { componentRegistryType, ComponentDataTypes, CompType } from '../types';
import { position } from '../types';
export declare const IsComponent = "IsComponent";
export declare const Tag = "Tag";
export declare const IsActive = "IsActive";
export declare const InitTimestamp = "InitTimestamp";
export declare const Position = "Position";
export declare const Owner = "Owner";
export declare const Level = "Level";
export declare const Name = "Name";
export declare const CanSettle = "CanSettle";
export declare const ResourceType = "ResourceType";
export declare const BuildingType = "BuildingType";
export declare const Template = "Template";
export declare const CanProduce = "CanProduce";
export declare const Duration = "Duration";
export declare const BalanceLastUpdated = "BalanceLastUpdated";
export declare const MaxHealth = "MaxHealth";
export declare const Health = "Health";
export declare const Attack = "Attack";
export declare const Defense = "Defense";
export declare const Speed = "Speed";
export declare const MoveCooldown = "MoveCooldown";
export declare const BattleCooldown = "BattleCooldown";
export declare const Load = "Load";
export declare const City = "City";
export declare const Amount = "Amount";
export declare const InventoryType = "InventoryType";
export declare const Inventory = "Inventory";
export declare const LastTimestamp = "LastTimestamp";
export declare const Source = "Source";
export declare const Target = "Target";
export declare const Keeper = "Keeper";
export declare const Address = "Address";
export declare const Cost = "Cost";
export declare const Treaty = "Treaty";
export declare const Army = "Army";
export declare const StartPosition = "StartPosition";
export declare const Terrain = "Terrain";
export declare const CanBattle = "CanBattle";
export declare const AttackRange = "AttackRange";
export declare const COMPONENT_SPECS: CompType[];
export interface componentInputTypeMap {
    IsComponent: boolean;
    Tag: string;
    IsActive: boolean;
    InitTimestamp: number;
    Position: position;
    Owner: number;
    Level: number;
    Name: string;
    CanSettle: boolean;
    ResourceType: string;
    BuildingType: string;
    Template: number;
    CanProduce: boolean;
    Duration: number;
    BalanceLastUpdated: number;
    MaxHealth: number;
    Health: number;
    Attack: number;
    Defense: number;
    Speed: number;
    MoveCooldown: number;
    BattleCooldown: number;
    Load: number;
    City: number;
    Amount: number;
    InventoryType: string;
    InventoryTypes: string[];
    LastTimestamp: number;
    Source: number;
    Target: number;
    Keeper: number;
    Inventory: number;
    Address: string;
    Cost: number;
    Treaty: number;
    Terrain: number;
    CanBattle: boolean;
    StartPosition: position;
    AttackRange: number;
}
export declare enum Tags {
    Army = "Army",
    Battle = "Battle",
    Building = "Building",
    City = "City",
    Constituent = "Constituent",
    Guard = "Guard",
    Player = "Player",
    Resource = "Resource",
    ResourceInventory = "ResourceInventory",
    ResourceTemplate = "ResourceTemplate",
    ResourceGather = "ResourceGather",
    Settler = "Settler",
    Signature = "Signature",
    Tile = "Tile",
    TroopInventory = "TroopInventory",
    TroopProduction = "TroopProduction",
    TroopTemplate = "TroopTemplate",
    Gather = "Gather",
    Constant = "Constant"
}
export declare enum BuildingTypeOptions {
    CityCenter = "City Center"
}
export declare enum InventoryTypeOptions {
    Horseman = "Horseman",
    Warrior = "Warrior",
    Slinger = "Slinger",
    Guard = "Guard",
    Gold = "Gold",
    Food = "Food"
}
export declare const componentRegistry: componentRegistryType;
export declare const componentNameToDecoder: Record<string, any>;
export declare const componentToType: Record<string, ComponentDataTypes>;
export declare const componentTypeToDecoder: Record<ComponentDataTypes, any>;
export declare const componentTypeToEncoder: Record<ComponentDataTypes, any>;
export declare const componentNameToId: Record<string, number>;
export declare const componentIdToName: Record<number, string>;
