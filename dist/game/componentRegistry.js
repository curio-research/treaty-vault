"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.componentIdToName = exports.componentNameToId = exports.componentTypeToEncoder = exports.componentTypeToDecoder = exports.componentToType = exports.componentNameToDecoder = exports.componentRegistry = exports.InventoryTypeOptions = exports.BuildingTypeOptions = exports.Tags = exports.COMPONENT_SPECS = exports.AttackRange = exports.CanBattle = exports.Terrain = exports.StartPosition = exports.Army = exports.Treaty = exports.Cost = exports.Address = exports.Keeper = exports.Target = exports.Source = exports.LastTimestamp = exports.Inventory = exports.InventoryType = exports.Amount = exports.City = exports.Load = exports.BattleCooldown = exports.MoveCooldown = exports.Speed = exports.Defense = exports.Attack = exports.Health = exports.MaxHealth = exports.BalanceLastUpdated = exports.Duration = exports.CanProduce = exports.Template = exports.BuildingType = exports.ResourceType = exports.CanSettle = exports.Name = exports.Level = exports.Owner = exports.Position = exports.InitTimestamp = exports.IsActive = exports.Tag = exports.IsComponent = void 0;
const componentSerde_1 = require("./componentSerde");
const types_1 = require("../types");
const componentSerde_2 = require("./componentSerde");
// ------------------------------------
// * Main Component Registry *
exports.IsComponent = 'IsComponent';
exports.Tag = 'Tag';
exports.IsActive = 'IsActive';
exports.InitTimestamp = 'InitTimestamp';
exports.Position = 'Position';
exports.Owner = 'Owner';
exports.Level = 'Level';
exports.Name = 'Name';
exports.CanSettle = 'CanSettle';
exports.ResourceType = 'ResourceType';
exports.BuildingType = 'BuildingType';
exports.Template = 'Template';
exports.CanProduce = 'CanProduce';
exports.Duration = 'Duration';
exports.BalanceLastUpdated = 'BalanceLastUpdated';
exports.MaxHealth = 'MaxHealth';
exports.Health = 'Health';
exports.Attack = 'Attack';
exports.Defense = 'Defense';
exports.Speed = 'Speed';
exports.MoveCooldown = 'MoveCooldown';
exports.BattleCooldown = 'BattleCooldown';
exports.Load = 'Load';
exports.City = 'City';
exports.Amount = 'Amount';
exports.InventoryType = 'InventoryType';
exports.Inventory = 'Inventory';
exports.LastTimestamp = 'LastTimestamp';
exports.Source = 'Source';
exports.Target = 'Target';
exports.Keeper = 'Keeper';
exports.Address = 'Address';
exports.Cost = 'Cost';
exports.Treaty = 'Treaty';
exports.Army = 'Army';
exports.StartPosition = 'StartPosition';
exports.Terrain = 'Terrain';
exports.CanBattle = 'CanBattle';
exports.AttackRange = 'AttackRange';
exports.COMPONENT_SPECS = [
    { name: exports.IsComponent, valueType: types_1.ComponentDataTypes.BOOL },
    { name: exports.Tag, valueType: types_1.ComponentDataTypes.STRING },
    { name: exports.IsActive, valueType: types_1.ComponentDataTypes.BOOL },
    { name: exports.InitTimestamp, valueType: types_1.ComponentDataTypes.UINT },
    { name: exports.Position, valueType: types_1.ComponentDataTypes.POSITION },
    { name: exports.Owner, valueType: types_1.ComponentDataTypes.UINT },
    { name: exports.Level, valueType: types_1.ComponentDataTypes.UINT },
    { name: exports.Name, valueType: types_1.ComponentDataTypes.STRING },
    { name: exports.CanSettle, valueType: types_1.ComponentDataTypes.BOOL },
    { name: exports.ResourceType, valueType: types_1.ComponentDataTypes.STRING },
    { name: exports.BuildingType, valueType: types_1.ComponentDataTypes.STRING },
    { name: exports.Template, valueType: types_1.ComponentDataTypes.UINT },
    { name: exports.CanProduce, valueType: types_1.ComponentDataTypes.BOOL },
    { name: exports.Duration, valueType: types_1.ComponentDataTypes.UINT },
    { name: exports.BalanceLastUpdated, valueType: types_1.ComponentDataTypes.UINT },
    { name: exports.MaxHealth, valueType: types_1.ComponentDataTypes.UINT },
    { name: exports.Health, valueType: types_1.ComponentDataTypes.UINT },
    { name: exports.Attack, valueType: types_1.ComponentDataTypes.UINT },
    { name: exports.Defense, valueType: types_1.ComponentDataTypes.UINT },
    { name: exports.Speed, valueType: types_1.ComponentDataTypes.UINT },
    { name: exports.MoveCooldown, valueType: types_1.ComponentDataTypes.UINT },
    { name: exports.BattleCooldown, valueType: types_1.ComponentDataTypes.UINT },
    { name: exports.Load, valueType: types_1.ComponentDataTypes.UINT },
    { name: exports.City, valueType: types_1.ComponentDataTypes.UINT },
    { name: exports.Keeper, valueType: types_1.ComponentDataTypes.UINT },
    { name: exports.Amount, valueType: types_1.ComponentDataTypes.UINT },
    { name: exports.InventoryType, valueType: types_1.ComponentDataTypes.STRING },
    { name: exports.LastTimestamp, valueType: types_1.ComponentDataTypes.UINT },
    { name: exports.Source, valueType: types_1.ComponentDataTypes.UINT },
    { name: exports.Target, valueType: types_1.ComponentDataTypes.UINT },
    { name: exports.Inventory, valueType: types_1.ComponentDataTypes.UINT },
    { name: exports.Address, valueType: types_1.ComponentDataTypes.ADDRESS },
    { name: exports.Cost, valueType: types_1.ComponentDataTypes.UINT },
    { name: exports.Treaty, valueType: types_1.ComponentDataTypes.ADDRESS },
    { name: exports.Army, valueType: types_1.ComponentDataTypes.UINT },
    { name: exports.StartPosition, valueType: types_1.ComponentDataTypes.POSITION },
    { name: exports.Terrain, valueType: types_1.ComponentDataTypes.UINT },
    { name: exports.CanBattle, valueType: types_1.ComponentDataTypes.BOOL },
    { name: exports.AttackRange, valueType: types_1.ComponentDataTypes.UINT },
];
var Tags;
(function (Tags) {
    Tags["Army"] = "Army";
    Tags["Battle"] = "Battle";
    Tags["Building"] = "Building";
    Tags["City"] = "City";
    Tags["Constituent"] = "Constituent";
    Tags["Guard"] = "Guard";
    Tags["Player"] = "Player";
    Tags["Resource"] = "Resource";
    Tags["ResourceInventory"] = "ResourceInventory";
    Tags["ResourceTemplate"] = "ResourceTemplate";
    Tags["ResourceGather"] = "ResourceGather";
    Tags["Settler"] = "Settler";
    Tags["Signature"] = "Signature";
    Tags["Tile"] = "Tile";
    Tags["TroopInventory"] = "TroopInventory";
    Tags["TroopProduction"] = "TroopProduction";
    Tags["TroopTemplate"] = "TroopTemplate";
    Tags["Gather"] = "Gather";
    Tags["Constant"] = "Constant";
})(Tags = exports.Tags || (exports.Tags = {}));
var BuildingTypeOptions;
(function (BuildingTypeOptions) {
    BuildingTypeOptions["CityCenter"] = "City Center";
})(BuildingTypeOptions = exports.BuildingTypeOptions || (exports.BuildingTypeOptions = {}));
var InventoryTypeOptions;
(function (InventoryTypeOptions) {
    InventoryTypeOptions["Horseman"] = "Horseman";
    InventoryTypeOptions["Warrior"] = "Warrior";
    InventoryTypeOptions["Slinger"] = "Slinger";
    InventoryTypeOptions["Guard"] = "Guard";
    InventoryTypeOptions["Gold"] = "Gold";
    InventoryTypeOptions["Food"] = "Food";
})(InventoryTypeOptions = exports.InventoryTypeOptions || (exports.InventoryTypeOptions = {}));
// export enum ResourceType {}
// ---------------------------------------------------------------------------
exports.componentRegistry = {};
Object.keys(exports.COMPONENT_SPECS).forEach((key, idx) => {
    const componentInfo = exports.COMPONENT_SPECS[Number(key)];
    exports.componentRegistry[idx + 1] = componentInfo;
});
// assert the two are the same size
// --------------------------------------------------------
exports.componentNameToDecoder = {};
Object.keys(exports.componentRegistry).forEach((key) => {
    const componentInfo = exports.componentRegistry[Number(key)];
    switch (componentInfo.valueType) {
        case types_1.ComponentDataTypes.POSITION:
            exports.componentNameToDecoder[componentInfo.name] = componentSerde_2.decodePositionComp;
            break;
        case types_1.ComponentDataTypes.BOOL:
            exports.componentNameToDecoder[componentInfo.name] = componentSerde_2.decodeBoolComp;
            break;
        case types_1.ComponentDataTypes.STRING:
            exports.componentNameToDecoder[componentInfo.name] = componentSerde_2.decodeStringComp;
            break;
        case types_1.ComponentDataTypes.STRING_ARRAY:
            exports.componentNameToDecoder[componentInfo.name] = componentSerde_1.decodeStringArrComp;
            break;
        case types_1.ComponentDataTypes.ADDRESS:
            exports.componentNameToDecoder[componentInfo.name] = componentSerde_2.decodeAddressComp;
            break;
        case types_1.ComponentDataTypes.UINT:
            exports.componentNameToDecoder[componentInfo.name] = componentSerde_2.decodeUint256Comp;
            break;
        case types_1.ComponentDataTypes.UINT_ARRAY:
            exports.componentNameToDecoder[componentInfo.name] = componentSerde_1.decodeUint256ArrComp;
            break;
        case types_1.ComponentDataTypes.INT:
            exports.componentNameToDecoder[componentInfo.name] = componentSerde_2.decodeInt256Comp;
            break;
    }
});
// base component types
exports.componentToType = {};
// ex: Position: position
Object.keys(exports.componentRegistry).forEach((key, idx) => {
    const componentInfo = exports.componentRegistry[Number(key)];
    exports.componentToType[componentInfo.name] = componentInfo.valueType;
});
exports.componentTypeToDecoder = {
    [types_1.ComponentDataTypes.UINT]: componentSerde_2.decodeUint256Comp,
    [types_1.ComponentDataTypes.STRING]: componentSerde_2.decodeStringComp,
    [types_1.ComponentDataTypes.BOOL]: componentSerde_2.decodeBoolComp,
    [types_1.ComponentDataTypes.INT]: componentSerde_2.decodeInt256Comp,
    [types_1.ComponentDataTypes.ADDRESS]: componentSerde_2.decodeAddressComp,
    [types_1.ComponentDataTypes.POSITION]: componentSerde_2.decodePositionComp,
    [types_1.ComponentDataTypes.UINT_ARRAY]: componentSerde_1.decodeUint256ArrComp,
    [types_1.ComponentDataTypes.STRING_ARRAY]: componentSerde_1.decodeStringArrComp,
    // [ComponentDataTypes.POSITION_ARRAY]: decodePositionArrComp,
};
exports.componentTypeToEncoder = {
    [types_1.ComponentDataTypes.UINT]: componentSerde_2.encodeUint256Comp,
    [types_1.ComponentDataTypes.STRING]: componentSerde_2.encodeStringComp,
    [types_1.ComponentDataTypes.BOOL]: componentSerde_2.encodeBoolComp,
    [types_1.ComponentDataTypes.INT]: componentSerde_2.encodeInt256Comp,
    [types_1.ComponentDataTypes.ADDRESS]: componentSerde_2.encodeAddressComp,
    [types_1.ComponentDataTypes.POSITION]: componentSerde_2.encodePositionComp,
    [types_1.ComponentDataTypes.UINT_ARRAY]: componentSerde_1.encodeUint256ArrComp,
    [types_1.ComponentDataTypes.STRING_ARRAY]: componentSerde_1.encodeStringArrComp,
};
// auto generated. component index starts at 1
exports.componentNameToId = {};
Object.keys(exports.componentRegistry).forEach((key, idx) => {
    const componentInfo = exports.componentRegistry[Number(key)];
    exports.componentNameToId[componentInfo.name] = idx + 1;
});
// this is auto generated. It's a reverse mapping of componentNameToId and looks like
// {1: IsActive: 2: Position, 3: ...}
exports.componentIdToName = {};
Object.keys(exports.componentNameToId).forEach((key) => {
    exports.componentIdToName[exports.componentNameToId[key]] = key;
});
//# sourceMappingURL=componentRegistry.js.map