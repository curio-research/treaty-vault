import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export declare type PositionStruct = {
    x: PromiseOrValue<BigNumberish>;
    y: PromiseOrValue<BigNumberish>;
};
export declare type PositionStructOutput = [BigNumber, BigNumber] & {
    x: BigNumber;
    y: BigNumber;
};
export declare type ConstantSpecStruct = {
    functionName: PromiseOrValue<string>;
    componentName: PromiseOrValue<string>;
    entityName: PromiseOrValue<string>;
    level: PromiseOrValue<BigNumberish>;
    value: PromiseOrValue<BigNumberish>;
};
export declare type ConstantSpecStructOutput = [
    string,
    string,
    string,
    BigNumber,
    BigNumber
] & {
    functionName: string;
    componentName: string;
    entityName: string;
    level: BigNumber;
    value: BigNumber;
};
export declare type ComponentSpecStruct = {
    name: PromiseOrValue<string>;
    valueType: PromiseOrValue<BigNumberish>;
};
export declare type ComponentSpecStructOutput = [string, number] & {
    name: string;
    valueType: number;
};
export declare type WorldConstantsStruct = {
    admin: PromiseOrValue<string>;
    worldWidth: PromiseOrValue<BigNumberish>;
    worldHeight: PromiseOrValue<BigNumberish>;
    numInitTerrainTypes: PromiseOrValue<BigNumberish>;
    initBatchSize: PromiseOrValue<BigNumberish>;
    maxCityCountPerPlayer: PromiseOrValue<BigNumberish>;
    maxArmyCountPerPlayer: PromiseOrValue<BigNumberish>;
    maxTroopCountPerArmy: PromiseOrValue<BigNumberish>;
    maxPlayerCount: PromiseOrValue<BigNumberish>;
    tileWidth: PromiseOrValue<BigNumberish>;
};
export declare type WorldConstantsStructOutput = [
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
] & {
    admin: string;
    worldWidth: BigNumber;
    worldHeight: BigNumber;
    numInitTerrainTypes: BigNumber;
    initBatchSize: BigNumber;
    maxCityCountPerPlayer: BigNumber;
    maxArmyCountPerPlayer: BigNumber;
    maxTroopCountPerArmy: BigNumber;
    maxPlayerCount: BigNumber;
    tileWidth: BigNumber;
};
export declare type QueryConditionStruct = {
    queryType: PromiseOrValue<BigNumberish>;
    value: PromiseOrValue<BytesLike>;
    componentName: PromiseOrValue<string>;
};
export declare type QueryConditionStructOutput = [number, string, string] & {
    queryType: number;
    value: string;
    componentName: string;
};
export declare namespace IDiamondCut {
    type FacetCutStruct = {
        facetAddress: PromiseOrValue<string>;
        action: PromiseOrValue<BigNumberish>;
        functionSelectors: PromiseOrValue<BytesLike>[];
    };
    type FacetCutStructOutput = [string, number, string[]] & {
        facetAddress: string;
        action: number;
        functionSelectors: string[];
    };
}
export declare namespace IDiamondLoupe {
    type FacetStruct = {
        facetAddress: PromiseOrValue<string>;
        functionSelectors: PromiseOrValue<BytesLike>[];
    };
    type FacetStructOutput = [string, string[]] & {
        facetAddress: string;
        functionSelectors: string[];
    };
}
export interface CurioInterface extends utils.Interface {
    functions: {
        "addConstant(string,string,string,uint256,uint256)": FunctionFragment;
        "addEntity()": FunctionFragment;
        "addTroopTemplate(string,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256)": FunctionFragment;
        "adminInitializeTile((uint256,uint256))": FunctionFragment;
        "assignResource(uint256,string,uint256)": FunctionFragment;
        "bulkAddConstants((string,string,string,uint256,uint256)[])": FunctionFragment;
        "bulkInitializeTiles((uint256,uint256)[])": FunctionFragment;
        "createArmy(uint256,(uint256,uint256))": FunctionFragment;
        "reactivatePlayer(address)": FunctionFragment;
        "registerComponents(address,(string,uint8)[])": FunctionFragment;
        "registerDefaultComponents(address)": FunctionFragment;
        "registerTemplateShortcuts(string[],uint256[])": FunctionFragment;
        "removeEntity(uint256)": FunctionFragment;
        "setComponentValue(string,uint256,bytes)": FunctionFragment;
        "spawnBarbarian((uint256,uint256),uint256)": FunctionFragment;
        "spawnResource((uint256,uint256),string)": FunctionFragment;
        "storeEncodedColumnBatches(uint256[][])": FunctionFragment;
        "diamondCut((address,uint8,bytes4[])[],address,bytes)": FunctionFragment;
        "facetAddress(bytes4)": FunctionFragment;
        "facetAddresses()": FunctionFragment;
        "facetFunctionSelectors(address)": FunctionFragment;
        "facets()": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "authorizeGame(address)": FunctionFragment;
        "battle(uint256,uint256)": FunctionFragment;
        "claimTile(uint256,uint256)": FunctionFragment;
        "disbandArmy(uint256)": FunctionFragment;
        "endGather(uint256)": FunctionFragment;
        "endTroopProduction(uint256,uint256)": FunctionFragment;
        "foundCity(uint256,(uint256,uint256)[],string)": FunctionFragment;
        "harvestResource(uint256)": FunctionFragment;
        "harvestResourcesFromCity(uint256)": FunctionFragment;
        "initializePlayer((uint256,uint256),string)": FunctionFragment;
        "move(uint256,(uint256,uint256))": FunctionFragment;
        "organizeArmy(uint256,uint256[],uint256[])": FunctionFragment;
        "packCity(uint256)": FunctionFragment;
        "startGather(uint256,uint256)": FunctionFragment;
        "startTroopProduction(uint256,uint256,uint256)": FunctionFragment;
        "unloadResources(uint256)": FunctionFragment;
        "upgradeCity(uint256,(uint256,uint256)[])": FunctionFragment;
        "upgradeCityInventory(uint256)": FunctionFragment;
        "upgradeResource(uint256)": FunctionFragment;
        "upgradeTile(uint256)": FunctionFragment;
        "getArmyAt((uint256,uint256))": FunctionFragment;
        "getArmyFood(uint256)": FunctionFragment;
        "getCityAtTile((uint256,uint256))": FunctionFragment;
        "getCityCenter(uint256)": FunctionFragment;
        "getCityFood(uint256)": FunctionFragment;
        "getCityGold(uint256)": FunctionFragment;
        "getComponent(string)": FunctionFragment;
        "getComponentById(uint256)": FunctionFragment;
        "getConstituentAtTile(uint256)": FunctionFragment;
        "getConstituents(uint256)": FunctionFragment;
        "getEntities()": FunctionFragment;
        "getEntitiesAddr()": FunctionFragment;
        "getEntity()": FunctionFragment;
        "getInventoryByCityAndType(uint256,string)": FunctionFragment;
        "getMainBurnerAccount(address)": FunctionFragment;
        "getPlayerCount()": FunctionFragment;
        "getPlayerId(address)": FunctionFragment;
        "getPositionExternal(string,uint256)": FunctionFragment;
        "getResourceAtTile((uint256,uint256))": FunctionFragment;
        "getResourceLevel(uint256)": FunctionFragment;
        "getSettlerAt((uint256,uint256))": FunctionFragment;
        "getTemplateByInventoryType(string)": FunctionFragment;
        "getTileAt((uint256,uint256))": FunctionFragment;
        "getWorldConstants()": FunctionFragment;
        "isPlayerInitialized(address)": FunctionFragment;
        "owner()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "_getComponent(string)": FunctionFragment;
        "_getComponentValue(string,uint256)": FunctionFragment;
        "concatenate(uint256[],uint256[])": FunctionFragment;
        "getAddress(string,uint256)": FunctionFragment;
        "getAddressComponent(string)": FunctionFragment;
        "getBool(string,uint256)": FunctionFragment;
        "getBoolComponent(string)": FunctionFragment;
        "getComponentByEntity(uint256)": FunctionFragment;
        "getInt(string,uint256)": FunctionFragment;
        "getIntComponent(string)": FunctionFragment;
        "getPosition(string,uint256)": FunctionFragment;
        "getPositionComponent(string)": FunctionFragment;
        "getString(string,uint256)": FunctionFragment;
        "getStringComponent(string)": FunctionFragment;
        "getUint(string,uint256)": FunctionFragment;
        "getUintArray(string,uint256)": FunctionFragment;
        "getUintArrayComponent(string)": FunctionFragment;
        "getUintComponent(string)": FunctionFragment;
        "queryChunk(uint8,string,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addConstant" | "addEntity" | "addTroopTemplate" | "adminInitializeTile" | "assignResource" | "bulkAddConstants" | "bulkInitializeTiles" | "createArmy" | "reactivatePlayer" | "registerComponents" | "registerDefaultComponents" | "registerTemplateShortcuts" | "removeEntity" | "setComponentValue" | "spawnBarbarian" | "spawnResource" | "storeEncodedColumnBatches" | "diamondCut" | "facetAddress" | "facetAddresses" | "facetFunctionSelectors" | "facets" | "supportsInterface" | "authorizeGame" | "battle" | "claimTile" | "disbandArmy" | "endGather" | "endTroopProduction" | "foundCity" | "harvestResource" | "harvestResourcesFromCity" | "initializePlayer" | "move" | "organizeArmy" | "packCity" | "startGather" | "startTroopProduction" | "unloadResources" | "upgradeCity" | "upgradeCityInventory" | "upgradeResource" | "upgradeTile" | "getArmyAt" | "getArmyFood" | "getCityAtTile" | "getCityCenter" | "getCityFood" | "getCityGold" | "getComponent" | "getComponentById" | "getConstituentAtTile" | "getConstituents" | "getEntities" | "getEntitiesAddr" | "getEntity" | "getInventoryByCityAndType" | "getMainBurnerAccount" | "getPlayerCount" | "getPlayerId" | "getPositionExternal" | "getResourceAtTile" | "getResourceLevel" | "getSettlerAt" | "getTemplateByInventoryType" | "getTileAt" | "getWorldConstants" | "isPlayerInitialized" | "owner" | "transferOwnership" | "_getComponent" | "_getComponentValue" | "concatenate" | "getAddress" | "getAddressComponent" | "getBool" | "getBoolComponent" | "getComponentByEntity" | "getInt" | "getIntComponent" | "getPosition" | "getPositionComponent" | "getString" | "getStringComponent" | "getUint" | "getUintArray" | "getUintArrayComponent" | "getUintComponent" | "queryChunk"): FunctionFragment;
    encodeFunctionData(functionFragment: "addConstant", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "addEntity", values?: undefined): string;
    encodeFunctionData(functionFragment: "addTroopTemplate", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "adminInitializeTile", values: [PositionStruct]): string;
    encodeFunctionData(functionFragment: "assignResource", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "bulkAddConstants", values: [ConstantSpecStruct[]]): string;
    encodeFunctionData(functionFragment: "bulkInitializeTiles", values: [PositionStruct[]]): string;
    encodeFunctionData(functionFragment: "createArmy", values: [PromiseOrValue<BigNumberish>, PositionStruct]): string;
    encodeFunctionData(functionFragment: "reactivatePlayer", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "registerComponents", values: [PromiseOrValue<string>, ComponentSpecStruct[]]): string;
    encodeFunctionData(functionFragment: "registerDefaultComponents", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "registerTemplateShortcuts", values: [PromiseOrValue<string>[], PromiseOrValue<BigNumberish>[]]): string;
    encodeFunctionData(functionFragment: "removeEntity", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setComponentValue", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "spawnBarbarian", values: [PositionStruct, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "spawnResource", values: [PositionStruct, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "storeEncodedColumnBatches", values: [PromiseOrValue<BigNumberish>[][]]): string;
    encodeFunctionData(functionFragment: "diamondCut", values: [
        IDiamondCut.FacetCutStruct[],
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "facetAddress", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "facetAddresses", values?: undefined): string;
    encodeFunctionData(functionFragment: "facetFunctionSelectors", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "facets", values?: undefined): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "authorizeGame", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "battle", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "claimTile", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "disbandArmy", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "endGather", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "endTroopProduction", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "foundCity", values: [
        PromiseOrValue<BigNumberish>,
        PositionStruct[],
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "harvestResource", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "harvestResourcesFromCity", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "initializePlayer", values: [PositionStruct, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "move", values: [PromiseOrValue<BigNumberish>, PositionStruct]): string;
    encodeFunctionData(functionFragment: "organizeArmy", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BigNumberish>[]
    ]): string;
    encodeFunctionData(functionFragment: "packCity", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "startGather", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "startTroopProduction", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "unloadResources", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "upgradeCity", values: [PromiseOrValue<BigNumberish>, PositionStruct[]]): string;
    encodeFunctionData(functionFragment: "upgradeCityInventory", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "upgradeResource", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "upgradeTile", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getArmyAt", values: [PositionStruct]): string;
    encodeFunctionData(functionFragment: "getArmyFood", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getCityAtTile", values: [PositionStruct]): string;
    encodeFunctionData(functionFragment: "getCityCenter", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getCityFood", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getCityGold", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getComponent", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getComponentById", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getConstituentAtTile", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getConstituents", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getEntities", values?: undefined): string;
    encodeFunctionData(functionFragment: "getEntitiesAddr", values?: undefined): string;
    encodeFunctionData(functionFragment: "getEntity", values?: undefined): string;
    encodeFunctionData(functionFragment: "getInventoryByCityAndType", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getMainBurnerAccount", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getPlayerCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPlayerId", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getPositionExternal", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getResourceAtTile", values: [PositionStruct]): string;
    encodeFunctionData(functionFragment: "getResourceLevel", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getSettlerAt", values: [PositionStruct]): string;
    encodeFunctionData(functionFragment: "getTemplateByInventoryType", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getTileAt", values: [PositionStruct]): string;
    encodeFunctionData(functionFragment: "getWorldConstants", values?: undefined): string;
    encodeFunctionData(functionFragment: "isPlayerInitialized", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "_getComponent", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "_getComponentValue", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "concatenate", values: [PromiseOrValue<BigNumberish>[], PromiseOrValue<BigNumberish>[]]): string;
    encodeFunctionData(functionFragment: "getAddress", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getAddressComponent", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getBool", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getBoolComponent", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getComponentByEntity", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getInt", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getIntComponent", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getPosition", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getPositionComponent", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getString", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getStringComponent", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getUint", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getUintArray", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getUintArrayComponent", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getUintComponent", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "queryChunk", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    decodeFunctionResult(functionFragment: "addConstant", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addEntity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addTroopTemplate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "adminInitializeTile", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assignResource", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bulkAddConstants", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bulkInitializeTiles", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createArmy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "reactivatePlayer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registerComponents", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registerDefaultComponents", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registerTemplateShortcuts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeEntity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setComponentValue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "spawnBarbarian", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "spawnResource", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "storeEncodedColumnBatches", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "diamondCut", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "facetAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "facetAddresses", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "facetFunctionSelectors", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "facets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "authorizeGame", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "battle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimTile", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "disbandArmy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "endGather", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "endTroopProduction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "foundCity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "harvestResource", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "harvestResourcesFromCity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initializePlayer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "move", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "organizeArmy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "packCity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startGather", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startTroopProduction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unloadResources", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeCity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeCityInventory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeResource", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeTile", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getArmyAt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getArmyFood", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCityAtTile", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCityCenter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCityFood", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCityGold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getComponent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getComponentById", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getConstituentAtTile", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getConstituents", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getEntities", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getEntitiesAddr", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getEntity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getInventoryByCityAndType", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMainBurnerAccount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPlayerCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPlayerId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPositionExternal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getResourceAtTile", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getResourceLevel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSettlerAt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTemplateByInventoryType", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTileAt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getWorldConstants", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isPlayerInitialized", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_getComponent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_getComponentValue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "concatenate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAddressComponent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBoolComponent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getComponentByEntity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getInt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getIntComponent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPositionComponent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getString", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getStringComponent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUintArray", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUintArrayComponent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUintComponent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "queryChunk", data: BytesLike): Result;
    events: {
        "DiamondCut(tuple[],address,bytes)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "ComponentValueRemoved(string,uint256)": EventFragment;
        "ComponentValueSet(string,uint256,bytes)": EventFragment;
        "EntityRemoved(uint256)": EventFragment;
        "NewComponent(string,uint256)": EventFragment;
        "NewEntity(uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "DiamondCut"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ComponentValueRemoved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ComponentValueSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "EntityRemoved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewComponent"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewEntity"): EventFragment;
}
export interface DiamondCutEventObject {
    _diamondCut: IDiamondCut.FacetCutStructOutput[];
    _init: string;
    _calldata: string;
}
export declare type DiamondCutEvent = TypedEvent<[
    IDiamondCut.FacetCutStructOutput[],
    string,
    string
], DiamondCutEventObject>;
export declare type DiamondCutEventFilter = TypedEventFilter<DiamondCutEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export declare type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface ComponentValueRemovedEventObject {
    _componentName: string;
    _entity: BigNumber;
}
export declare type ComponentValueRemovedEvent = TypedEvent<[
    string,
    BigNumber
], ComponentValueRemovedEventObject>;
export declare type ComponentValueRemovedEventFilter = TypedEventFilter<ComponentValueRemovedEvent>;
export interface ComponentValueSetEventObject {
    _componentName: string;
    _entity: BigNumber;
    _value: string;
}
export declare type ComponentValueSetEvent = TypedEvent<[
    string,
    BigNumber,
    string
], ComponentValueSetEventObject>;
export declare type ComponentValueSetEventFilter = TypedEventFilter<ComponentValueSetEvent>;
export interface EntityRemovedEventObject {
    _entity: BigNumber;
}
export declare type EntityRemovedEvent = TypedEvent<[
    BigNumber
], EntityRemovedEventObject>;
export declare type EntityRemovedEventFilter = TypedEventFilter<EntityRemovedEvent>;
export interface NewComponentEventObject {
    _name: string;
    _entity: BigNumber;
}
export declare type NewComponentEvent = TypedEvent<[
    string,
    BigNumber
], NewComponentEventObject>;
export declare type NewComponentEventFilter = TypedEventFilter<NewComponentEvent>;
export interface NewEntityEventObject {
    _entity: BigNumber;
}
export declare type NewEntityEvent = TypedEvent<[BigNumber], NewEntityEventObject>;
export declare type NewEntityEventFilter = TypedEventFilter<NewEntityEvent>;
export interface Curio extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CurioInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        addConstant(_functionName: PromiseOrValue<string>, _componentName: PromiseOrValue<string>, _entityName: PromiseOrValue<string>, _level: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        addEntity(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        addTroopTemplate(_inventoryType: PromiseOrValue<string>, _health: PromiseOrValue<BigNumberish>, _speed: PromiseOrValue<BigNumberish>, _moveCooldown: PromiseOrValue<BigNumberish>, _battleCooldown: PromiseOrValue<BigNumberish>, _attack: PromiseOrValue<BigNumberish>, _defense: PromiseOrValue<BigNumberish>, _duration: PromiseOrValue<BigNumberish>, _load: PromiseOrValue<BigNumberish>, _cost: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        adminInitializeTile(_startPosition: PositionStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        assignResource(_cityID: PromiseOrValue<BigNumberish>, _inventoryType: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        bulkAddConstants(_constantSpecs: ConstantSpecStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        bulkInitializeTiles(_positions: PositionStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        createArmy(_playerID: PromiseOrValue<BigNumberish>, _position: PositionStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        reactivatePlayer(_address: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        registerComponents(_gameAddr: PromiseOrValue<string>, _componentSpecs: ComponentSpecStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        registerDefaultComponents(_gameAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        registerTemplateShortcuts(_names: PromiseOrValue<string>[], _IDs: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        removeEntity(_entity: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setComponentValue(_componentName: PromiseOrValue<string>, _entity: PromiseOrValue<BigNumberish>, _value: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        spawnBarbarian(_startPosition: PositionStruct, _level: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        spawnResource(_startPosition: PositionStruct, _inventoryType: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        storeEncodedColumnBatches(_colBatches: PromiseOrValue<BigNumberish>[][], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        diamondCut(_diamondCut: IDiamondCut.FacetCutStruct[], _init: PromiseOrValue<string>, _calldata: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        facetAddress(_functionSelector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string] & {
            facetAddress_: string;
        }>;
        facetAddresses(overrides?: CallOverrides): Promise<[string[]] & {
            facetAddresses_: string[];
        }>;
        facetFunctionSelectors(_facet: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string[]] & {
            _facetFunctionSelectors: string[];
        }>;
        facets(overrides?: CallOverrides): Promise<[
            IDiamondLoupe.FacetStructOutput[]
        ] & {
            facets_: IDiamondLoupe.FacetStructOutput[];
        }>;
        supportsInterface(_interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        authorizeGame(_burnerAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        battle(_armyID: PromiseOrValue<BigNumberish>, _targetID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        claimTile(_armyID: PromiseOrValue<BigNumberish>, _tileID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        disbandArmy(_armyID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        endGather(_armyID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        endTroopProduction(_buildingID: PromiseOrValue<BigNumberish>, _productionID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        foundCity(_settlerID: PromiseOrValue<BigNumberish>, _tiles: PositionStruct[], _cityName: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        harvestResource(_resourceID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        harvestResourcesFromCity(_buildingID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        initializePlayer(_position: PositionStruct, _name: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        move(_movableEntity: PromiseOrValue<BigNumberish>, _targetPosition: PositionStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        organizeArmy(_cityID: PromiseOrValue<BigNumberish>, _templateIDs: PromiseOrValue<BigNumberish>[], _amounts: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        packCity(_cityID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        startGather(_armyID: PromiseOrValue<BigNumberish>, _resourceID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        startTroopProduction(_buildingID: PromiseOrValue<BigNumberish>, _templateID: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        unloadResources(_armyID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        upgradeCity(_cityID: PromiseOrValue<BigNumberish>, _newTiles: PositionStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        upgradeCityInventory(_buildingID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        upgradeResource(_resourceID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        upgradeTile(_tileID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getArmyAt(_position: PositionStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getArmyFood(_armyID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getCityAtTile(_startPosition: PositionStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getCityCenter(_cityID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getCityFood(_cityID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getCityGold(_cityID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getComponent(_name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        getComponentById(_entity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        getConstituentAtTile(_tileID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getConstituents(_armyID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getEntities(overrides?: CallOverrides): Promise<[BigNumber[]]>;
        getEntitiesAddr(overrides?: CallOverrides): Promise<[string]>;
        getEntity(overrides?: CallOverrides): Promise<[BigNumber]>;
        getInventoryByCityAndType(_cityID: PromiseOrValue<BigNumberish>, _inventoryType: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getMainBurnerAccount(_primaryAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        getPlayerCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        getPlayerId(_player: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getPositionExternal(_componentName: PromiseOrValue<string>, _entity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[PositionStructOutput]>;
        getResourceAtTile(_startPosition: PositionStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getResourceLevel(_resourceID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getSettlerAt(_position: PositionStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getTemplateByInventoryType(_inventoryType: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getTileAt(_position: PositionStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getWorldConstants(overrides?: CallOverrides): Promise<[WorldConstantsStructOutput]>;
        isPlayerInitialized(_player: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        owner(overrides?: CallOverrides): Promise<[string] & {
            owner_: string;
        }>;
        transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        _getComponent(_name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        _getComponentValue(_componentName: PromiseOrValue<string>, _entity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        concatenate(_arr1: PromiseOrValue<BigNumberish>[], _arr2: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<[BigNumber[]]>;
        getAddress(_componentName: PromiseOrValue<string>, _entity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        getAddressComponent(_name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        getBool(_componentName: PromiseOrValue<string>, _entity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean]>;
        getBoolComponent(_name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        getComponentByEntity(_entity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        getInt(_componentName: PromiseOrValue<string>, _entity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getIntComponent(_name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        getPosition(_componentName: PromiseOrValue<string>, _entity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[PositionStructOutput]>;
        getPositionComponent(_name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        getString(_componentName: PromiseOrValue<string>, _entity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        getStringComponent(_name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        getUint(_componentName: PromiseOrValue<string>, _entity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getUintArray(_componentName: PromiseOrValue<string>, _entity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber[]]>;
        getUintArrayComponent(_name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        getUintComponent(_name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        queryChunk(_queryType: PromiseOrValue<BigNumberish>, _componentName: PromiseOrValue<string>, _value: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[QueryConditionStructOutput]>;
    };
    addConstant(_functionName: PromiseOrValue<string>, _componentName: PromiseOrValue<string>, _entityName: PromiseOrValue<string>, _level: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    addEntity(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    addTroopTemplate(_inventoryType: PromiseOrValue<string>, _health: PromiseOrValue<BigNumberish>, _speed: PromiseOrValue<BigNumberish>, _moveCooldown: PromiseOrValue<BigNumberish>, _battleCooldown: PromiseOrValue<BigNumberish>, _attack: PromiseOrValue<BigNumberish>, _defense: PromiseOrValue<BigNumberish>, _duration: PromiseOrValue<BigNumberish>, _load: PromiseOrValue<BigNumberish>, _cost: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    adminInitializeTile(_startPosition: PositionStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    assignResource(_cityID: PromiseOrValue<BigNumberish>, _inventoryType: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    bulkAddConstants(_constantSpecs: ConstantSpecStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    bulkInitializeTiles(_positions: PositionStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    createArmy(_playerID: PromiseOrValue<BigNumberish>, _position: PositionStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    reactivatePlayer(_address: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    registerComponents(_gameAddr: PromiseOrValue<string>, _componentSpecs: ComponentSpecStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    registerDefaultComponents(_gameAddr: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    registerTemplateShortcuts(_names: PromiseOrValue<string>[], _IDs: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    removeEntity(_entity: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setComponentValue(_componentName: PromiseOrValue<string>, _entity: PromiseOrValue<BigNumberish>, _value: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    spawnBarbarian(_startPosition: PositionStruct, _level: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    spawnResource(_startPosition: PositionStruct, _inventoryType: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    storeEncodedColumnBatches(_colBatches: PromiseOrValue<BigNumberish>[][], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    diamondCut(_diamondCut: IDiamondCut.FacetCutStruct[], _init: PromiseOrValue<string>, _calldata: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    facetAddress(_functionSelector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    facetAddresses(overrides?: CallOverrides): Promise<string[]>;
    facetFunctionSelectors(_facet: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string[]>;
    facets(overrides?: CallOverrides): Promise<IDiamondLoupe.FacetStructOutput[]>;
    supportsInterface(_interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    authorizeGame(_burnerAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    battle(_armyID: PromiseOrValue<BigNumberish>, _targetID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    claimTile(_armyID: PromiseOrValue<BigNumberish>, _tileID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    disbandArmy(_armyID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    endGather(_armyID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    endTroopProduction(_buildingID: PromiseOrValue<BigNumberish>, _productionID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    foundCity(_settlerID: PromiseOrValue<BigNumberish>, _tiles: PositionStruct[], _cityName: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    harvestResource(_resourceID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    harvestResourcesFromCity(_buildingID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    initializePlayer(_position: PositionStruct, _name: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    move(_movableEntity: PromiseOrValue<BigNumberish>, _targetPosition: PositionStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    organizeArmy(_cityID: PromiseOrValue<BigNumberish>, _templateIDs: PromiseOrValue<BigNumberish>[], _amounts: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    packCity(_cityID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    startGather(_armyID: PromiseOrValue<BigNumberish>, _resourceID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    startTroopProduction(_buildingID: PromiseOrValue<BigNumberish>, _templateID: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    unloadResources(_armyID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    upgradeCity(_cityID: PromiseOrValue<BigNumberish>, _newTiles: PositionStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    upgradeCityInventory(_buildingID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    upgradeResource(_resourceID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    upgradeTile(_tileID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getArmyAt(_position: PositionStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getArmyFood(_armyID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getCityAtTile(_startPosition: PositionStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getCityCenter(_cityID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getCityFood(_cityID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getCityGold(_cityID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getComponent(_name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    getComponentById(_entity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    getConstituentAtTile(_tileID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getConstituents(_armyID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getEntities(overrides?: CallOverrides): Promise<BigNumber[]>;
    getEntitiesAddr(overrides?: CallOverrides): Promise<string>;
    getEntity(overrides?: CallOverrides): Promise<BigNumber>;
    getInventoryByCityAndType(_cityID: PromiseOrValue<BigNumberish>, _inventoryType: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getMainBurnerAccount(_primaryAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    getPlayerCount(overrides?: CallOverrides): Promise<BigNumber>;
    getPlayerId(_player: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getPositionExternal(_componentName: PromiseOrValue<string>, _entity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PositionStructOutput>;
    getResourceAtTile(_startPosition: PositionStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getResourceLevel(_resourceID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getSettlerAt(_position: PositionStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getTemplateByInventoryType(_inventoryType: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getTileAt(_position: PositionStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getWorldConstants(overrides?: CallOverrides): Promise<WorldConstantsStructOutput>;
    isPlayerInitialized(_player: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    owner(overrides?: CallOverrides): Promise<string>;
    transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    _getComponent(_name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    _getComponentValue(_componentName: PromiseOrValue<string>, _entity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    concatenate(_arr1: PromiseOrValue<BigNumberish>[], _arr2: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber[]>;
    getAddress(_componentName: PromiseOrValue<string>, _entity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    getAddressComponent(_name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    getBool(_componentName: PromiseOrValue<string>, _entity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    getBoolComponent(_name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    getComponentByEntity(_entity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    getInt(_componentName: PromiseOrValue<string>, _entity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getIntComponent(_name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    getPosition(_componentName: PromiseOrValue<string>, _entity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PositionStructOutput>;
    getPositionComponent(_name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    getString(_componentName: PromiseOrValue<string>, _entity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    getStringComponent(_name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    getUint(_componentName: PromiseOrValue<string>, _entity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getUintArray(_componentName: PromiseOrValue<string>, _entity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber[]>;
    getUintArrayComponent(_name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    getUintComponent(_name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    queryChunk(_queryType: PromiseOrValue<BigNumberish>, _componentName: PromiseOrValue<string>, _value: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<QueryConditionStructOutput>;
    callStatic: {
        addConstant(_functionName: PromiseOrValue<string>, _componentName: PromiseOrValue<string>, _entityName: PromiseOrValue<string>, _level: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        addEntity(overrides?: CallOverrides): Promise<BigNumber>;
        addTroopTemplate(_inventoryType: PromiseOrValue<string>, _health: PromiseOrValue<BigNumberish>, _speed: PromiseOrValue<BigNumberish>, _moveCooldown: PromiseOrValue<BigNumberish>, _battleCooldown: PromiseOrValue<BigNumberish>, _attack: PromiseOrValue<BigNumberish>, _defense: PromiseOrValue<BigNumberish>, _duration: PromiseOrValue<BigNumberish>, _load: PromiseOrValue<BigNumberish>, _cost: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        adminInitializeTile(_startPosition: PositionStruct, overrides?: CallOverrides): Promise<void>;
        assignResource(_cityID: PromiseOrValue<BigNumberish>, _inventoryType: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        bulkAddConstants(_constantSpecs: ConstantSpecStruct[], overrides?: CallOverrides): Promise<void>;
        bulkInitializeTiles(_positions: PositionStruct[], overrides?: CallOverrides): Promise<void>;
        createArmy(_playerID: PromiseOrValue<BigNumberish>, _position: PositionStruct, overrides?: CallOverrides): Promise<void>;
        reactivatePlayer(_address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        registerComponents(_gameAddr: PromiseOrValue<string>, _componentSpecs: ComponentSpecStruct[], overrides?: CallOverrides): Promise<void>;
        registerDefaultComponents(_gameAddr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        registerTemplateShortcuts(_names: PromiseOrValue<string>[], _IDs: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
        removeEntity(_entity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setComponentValue(_componentName: PromiseOrValue<string>, _entity: PromiseOrValue<BigNumberish>, _value: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        spawnBarbarian(_startPosition: PositionStruct, _level: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        spawnResource(_startPosition: PositionStruct, _inventoryType: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        storeEncodedColumnBatches(_colBatches: PromiseOrValue<BigNumberish>[][], overrides?: CallOverrides): Promise<void>;
        diamondCut(_diamondCut: IDiamondCut.FacetCutStruct[], _init: PromiseOrValue<string>, _calldata: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        facetAddress(_functionSelector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        facetAddresses(overrides?: CallOverrides): Promise<string[]>;
        facetFunctionSelectors(_facet: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string[]>;
        facets(overrides?: CallOverrides): Promise<IDiamondLoupe.FacetStructOutput[]>;
        supportsInterface(_interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        authorizeGame(_burnerAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        battle(_armyID: PromiseOrValue<BigNumberish>, _targetID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        claimTile(_armyID: PromiseOrValue<BigNumberish>, _tileID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        disbandArmy(_armyID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        endGather(_armyID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        endTroopProduction(_buildingID: PromiseOrValue<BigNumberish>, _productionID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        foundCity(_settlerID: PromiseOrValue<BigNumberish>, _tiles: PositionStruct[], _cityName: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        harvestResource(_resourceID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        harvestResourcesFromCity(_buildingID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        initializePlayer(_position: PositionStruct, _name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        move(_movableEntity: PromiseOrValue<BigNumberish>, _targetPosition: PositionStruct, overrides?: CallOverrides): Promise<void>;
        organizeArmy(_cityID: PromiseOrValue<BigNumberish>, _templateIDs: PromiseOrValue<BigNumberish>[], _amounts: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber>;
        packCity(_cityID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        startGather(_armyID: PromiseOrValue<BigNumberish>, _resourceID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        startTroopProduction(_buildingID: PromiseOrValue<BigNumberish>, _templateID: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        unloadResources(_armyID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        upgradeCity(_cityID: PromiseOrValue<BigNumberish>, _newTiles: PositionStruct[], overrides?: CallOverrides): Promise<void>;
        upgradeCityInventory(_buildingID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        upgradeResource(_resourceID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        upgradeTile(_tileID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        getArmyAt(_position: PositionStruct, overrides?: CallOverrides): Promise<BigNumber>;
        getArmyFood(_armyID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getCityAtTile(_startPosition: PositionStruct, overrides?: CallOverrides): Promise<BigNumber>;
        getCityCenter(_cityID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getCityFood(_cityID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getCityGold(_cityID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getComponent(_name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        getComponentById(_entity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        getConstituentAtTile(_tileID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getConstituents(_armyID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber[]>;
        getEntities(overrides?: CallOverrides): Promise<BigNumber[]>;
        getEntitiesAddr(overrides?: CallOverrides): Promise<string>;
        getEntity(overrides?: CallOverrides): Promise<BigNumber>;
        getInventoryByCityAndType(_cityID: PromiseOrValue<BigNumberish>, _inventoryType: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getMainBurnerAccount(_primaryAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        getPlayerCount(overrides?: CallOverrides): Promise<BigNumber>;
        getPlayerId(_player: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getPositionExternal(_componentName: PromiseOrValue<string>, _entity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PositionStructOutput>;
        getResourceAtTile(_startPosition: PositionStruct, overrides?: CallOverrides): Promise<BigNumber>;
        getResourceLevel(_resourceID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getSettlerAt(_position: PositionStruct, overrides?: CallOverrides): Promise<BigNumber>;
        getTemplateByInventoryType(_inventoryType: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getTileAt(_position: PositionStruct, overrides?: CallOverrides): Promise<BigNumber>;
        getWorldConstants(overrides?: CallOverrides): Promise<WorldConstantsStructOutput>;
        isPlayerInitialized(_player: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        owner(overrides?: CallOverrides): Promise<string>;
        transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        _getComponent(_name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        _getComponentValue(_componentName: PromiseOrValue<string>, _entity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        concatenate(_arr1: PromiseOrValue<BigNumberish>[], _arr2: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber[]>;
        getAddress(_componentName: PromiseOrValue<string>, _entity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        getAddressComponent(_name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        getBool(_componentName: PromiseOrValue<string>, _entity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        getBoolComponent(_name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        getComponentByEntity(_entity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        getInt(_componentName: PromiseOrValue<string>, _entity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getIntComponent(_name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        getPosition(_componentName: PromiseOrValue<string>, _entity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PositionStructOutput>;
        getPositionComponent(_name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        getString(_componentName: PromiseOrValue<string>, _entity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        getStringComponent(_name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        getUint(_componentName: PromiseOrValue<string>, _entity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getUintArray(_componentName: PromiseOrValue<string>, _entity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber[]>;
        getUintArrayComponent(_name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        getUintComponent(_name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        queryChunk(_queryType: PromiseOrValue<BigNumberish>, _componentName: PromiseOrValue<string>, _value: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<QueryConditionStructOutput>;
    };
    filters: {
        "DiamondCut(tuple[],address,bytes)"(_diamondCut?: null, _init?: null, _calldata?: null): DiamondCutEventFilter;
        DiamondCut(_diamondCut?: null, _init?: null, _calldata?: null): DiamondCutEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        "ComponentValueRemoved(string,uint256)"(_componentName?: null, _entity?: null): ComponentValueRemovedEventFilter;
        ComponentValueRemoved(_componentName?: null, _entity?: null): ComponentValueRemovedEventFilter;
        "ComponentValueSet(string,uint256,bytes)"(_componentName?: null, _entity?: null, _value?: null): ComponentValueSetEventFilter;
        ComponentValueSet(_componentName?: null, _entity?: null, _value?: null): ComponentValueSetEventFilter;
        "EntityRemoved(uint256)"(_entity?: null): EntityRemovedEventFilter;
        EntityRemoved(_entity?: null): EntityRemovedEventFilter;
        "NewComponent(string,uint256)"(_name?: null, _entity?: null): NewComponentEventFilter;
        NewComponent(_name?: null, _entity?: null): NewComponentEventFilter;
        "NewEntity(uint256)"(_entity?: null): NewEntityEventFilter;
        NewEntity(_entity?: null): NewEntityEventFilter;
    };
    estimateGas: {
        addConstant(_functionName: PromiseOrValue<string>, _componentName: PromiseOrValue<string>, _entityName: PromiseOrValue<string>, _level: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        addEntity(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        addTroopTemplate(_inventoryType: PromiseOrValue<string>, _health: PromiseOrValue<BigNumberish>, _speed: PromiseOrValue<BigNumberish>, _moveCooldown: PromiseOrValue<BigNumberish>, _battleCooldown: PromiseOrValue<BigNumberish>, _attack: PromiseOrValue<BigNumberish>, _defense: PromiseOrValue<BigNumberish>, _duration: PromiseOrValue<BigNumberish>, _load: PromiseOrValue<BigNumberish>, _cost: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        adminInitializeTile(_startPosition: PositionStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        assignResource(_cityID: PromiseOrValue<BigNumberish>, _inventoryType: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        bulkAddConstants(_constantSpecs: ConstantSpecStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        bulkInitializeTiles(_positions: PositionStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        createArmy(_playerID: PromiseOrValue<BigNumberish>, _position: PositionStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        reactivatePlayer(_address: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        registerComponents(_gameAddr: PromiseOrValue<string>, _componentSpecs: ComponentSpecStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        registerDefaultComponents(_gameAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        registerTemplateShortcuts(_names: PromiseOrValue<string>[], _IDs: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        removeEntity(_entity: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setComponentValue(_componentName: PromiseOrValue<string>, _entity: PromiseOrValue<BigNumberish>, _value: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        spawnBarbarian(_startPosition: PositionStruct, _level: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        spawnResource(_startPosition: PositionStruct, _inventoryType: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        storeEncodedColumnBatches(_colBatches: PromiseOrValue<BigNumberish>[][], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        diamondCut(_diamondCut: IDiamondCut.FacetCutStruct[], _init: PromiseOrValue<string>, _calldata: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        facetAddress(_functionSelector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        facetAddresses(overrides?: CallOverrides): Promise<BigNumber>;
        facetFunctionSelectors(_facet: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        facets(overrides?: CallOverrides): Promise<BigNumber>;
        supportsInterface(_interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        authorizeGame(_burnerAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        battle(_armyID: PromiseOrValue<BigNumberish>, _targetID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        claimTile(_armyID: PromiseOrValue<BigNumberish>, _tileID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        disbandArmy(_armyID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        endGather(_armyID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        endTroopProduction(_buildingID: PromiseOrValue<BigNumberish>, _productionID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        foundCity(_settlerID: PromiseOrValue<BigNumberish>, _tiles: PositionStruct[], _cityName: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        harvestResource(_resourceID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        harvestResourcesFromCity(_buildingID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        initializePlayer(_position: PositionStruct, _name: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        move(_movableEntity: PromiseOrValue<BigNumberish>, _targetPosition: PositionStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        organizeArmy(_cityID: PromiseOrValue<BigNumberish>, _templateIDs: PromiseOrValue<BigNumberish>[], _amounts: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        packCity(_cityID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        startGather(_armyID: PromiseOrValue<BigNumberish>, _resourceID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        startTroopProduction(_buildingID: PromiseOrValue<BigNumberish>, _templateID: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        unloadResources(_armyID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        upgradeCity(_cityID: PromiseOrValue<BigNumberish>, _newTiles: PositionStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        upgradeCityInventory(_buildingID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        upgradeResource(_resourceID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        upgradeTile(_tileID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getArmyAt(_position: PositionStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getArmyFood(_armyID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getCityAtTile(_startPosition: PositionStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getCityCenter(_cityID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getCityFood(_cityID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getCityGold(_cityID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getComponent(_name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getComponentById(_entity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getConstituentAtTile(_tileID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getConstituents(_armyID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getEntities(overrides?: CallOverrides): Promise<BigNumber>;
        getEntitiesAddr(overrides?: CallOverrides): Promise<BigNumber>;
        getEntity(overrides?: CallOverrides): Promise<BigNumber>;
        getInventoryByCityAndType(_cityID: PromiseOrValue<BigNumberish>, _inventoryType: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getMainBurnerAccount(_primaryAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getPlayerCount(overrides?: CallOverrides): Promise<BigNumber>;
        getPlayerId(_player: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getPositionExternal(_componentName: PromiseOrValue<string>, _entity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getResourceAtTile(_startPosition: PositionStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getResourceLevel(_resourceID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getSettlerAt(_position: PositionStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getTemplateByInventoryType(_inventoryType: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getTileAt(_position: PositionStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getWorldConstants(overrides?: CallOverrides): Promise<BigNumber>;
        isPlayerInitialized(_player: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        _getComponent(_name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        _getComponentValue(_componentName: PromiseOrValue<string>, _entity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        concatenate(_arr1: PromiseOrValue<BigNumberish>[], _arr2: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber>;
        getAddress(_componentName: PromiseOrValue<string>, _entity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getAddressComponent(_name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getBool(_componentName: PromiseOrValue<string>, _entity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getBoolComponent(_name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getComponentByEntity(_entity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getInt(_componentName: PromiseOrValue<string>, _entity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getIntComponent(_name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getPosition(_componentName: PromiseOrValue<string>, _entity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getPositionComponent(_name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getString(_componentName: PromiseOrValue<string>, _entity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getStringComponent(_name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getUint(_componentName: PromiseOrValue<string>, _entity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getUintArray(_componentName: PromiseOrValue<string>, _entity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getUintArrayComponent(_name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getUintComponent(_name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        queryChunk(_queryType: PromiseOrValue<BigNumberish>, _componentName: PromiseOrValue<string>, _value: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        addConstant(_functionName: PromiseOrValue<string>, _componentName: PromiseOrValue<string>, _entityName: PromiseOrValue<string>, _level: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        addEntity(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        addTroopTemplate(_inventoryType: PromiseOrValue<string>, _health: PromiseOrValue<BigNumberish>, _speed: PromiseOrValue<BigNumberish>, _moveCooldown: PromiseOrValue<BigNumberish>, _battleCooldown: PromiseOrValue<BigNumberish>, _attack: PromiseOrValue<BigNumberish>, _defense: PromiseOrValue<BigNumberish>, _duration: PromiseOrValue<BigNumberish>, _load: PromiseOrValue<BigNumberish>, _cost: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        adminInitializeTile(_startPosition: PositionStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        assignResource(_cityID: PromiseOrValue<BigNumberish>, _inventoryType: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        bulkAddConstants(_constantSpecs: ConstantSpecStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        bulkInitializeTiles(_positions: PositionStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        createArmy(_playerID: PromiseOrValue<BigNumberish>, _position: PositionStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        reactivatePlayer(_address: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        registerComponents(_gameAddr: PromiseOrValue<string>, _componentSpecs: ComponentSpecStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        registerDefaultComponents(_gameAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        registerTemplateShortcuts(_names: PromiseOrValue<string>[], _IDs: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        removeEntity(_entity: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setComponentValue(_componentName: PromiseOrValue<string>, _entity: PromiseOrValue<BigNumberish>, _value: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        spawnBarbarian(_startPosition: PositionStruct, _level: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        spawnResource(_startPosition: PositionStruct, _inventoryType: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        storeEncodedColumnBatches(_colBatches: PromiseOrValue<BigNumberish>[][], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        diamondCut(_diamondCut: IDiamondCut.FacetCutStruct[], _init: PromiseOrValue<string>, _calldata: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        facetAddress(_functionSelector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        facetAddresses(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        facetFunctionSelectors(_facet: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        facets(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        supportsInterface(_interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        authorizeGame(_burnerAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        battle(_armyID: PromiseOrValue<BigNumberish>, _targetID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        claimTile(_armyID: PromiseOrValue<BigNumberish>, _tileID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        disbandArmy(_armyID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        endGather(_armyID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        endTroopProduction(_buildingID: PromiseOrValue<BigNumberish>, _productionID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        foundCity(_settlerID: PromiseOrValue<BigNumberish>, _tiles: PositionStruct[], _cityName: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        harvestResource(_resourceID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        harvestResourcesFromCity(_buildingID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        initializePlayer(_position: PositionStruct, _name: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        move(_movableEntity: PromiseOrValue<BigNumberish>, _targetPosition: PositionStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        organizeArmy(_cityID: PromiseOrValue<BigNumberish>, _templateIDs: PromiseOrValue<BigNumberish>[], _amounts: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        packCity(_cityID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        startGather(_armyID: PromiseOrValue<BigNumberish>, _resourceID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        startTroopProduction(_buildingID: PromiseOrValue<BigNumberish>, _templateID: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        unloadResources(_armyID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        upgradeCity(_cityID: PromiseOrValue<BigNumberish>, _newTiles: PositionStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        upgradeCityInventory(_buildingID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        upgradeResource(_resourceID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        upgradeTile(_tileID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getArmyAt(_position: PositionStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getArmyFood(_armyID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getCityAtTile(_startPosition: PositionStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getCityCenter(_cityID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getCityFood(_cityID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getCityGold(_cityID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getComponent(_name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getComponentById(_entity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getConstituentAtTile(_tileID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getConstituents(_armyID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getEntities(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getEntitiesAddr(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getEntity(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getInventoryByCityAndType(_cityID: PromiseOrValue<BigNumberish>, _inventoryType: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getMainBurnerAccount(_primaryAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPlayerCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPlayerId(_player: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPositionExternal(_componentName: PromiseOrValue<string>, _entity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getResourceAtTile(_startPosition: PositionStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getResourceLevel(_resourceID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSettlerAt(_position: PositionStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getTemplateByInventoryType(_inventoryType: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getTileAt(_position: PositionStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getWorldConstants(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isPlayerInitialized(_player: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        _getComponent(_name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _getComponentValue(_componentName: PromiseOrValue<string>, _entity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        concatenate(_arr1: PromiseOrValue<BigNumberish>[], _arr2: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAddress(_componentName: PromiseOrValue<string>, _entity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAddressComponent(_name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBool(_componentName: PromiseOrValue<string>, _entity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBoolComponent(_name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getComponentByEntity(_entity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getInt(_componentName: PromiseOrValue<string>, _entity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getIntComponent(_name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPosition(_componentName: PromiseOrValue<string>, _entity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPositionComponent(_name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getString(_componentName: PromiseOrValue<string>, _entity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getStringComponent(_name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUint(_componentName: PromiseOrValue<string>, _entity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUintArray(_componentName: PromiseOrValue<string>, _entity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUintArrayComponent(_name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUintComponent(_name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        queryChunk(_queryType: PromiseOrValue<BigNumberish>, _componentName: PromiseOrValue<string>, _value: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
