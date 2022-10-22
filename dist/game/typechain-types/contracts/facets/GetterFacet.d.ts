import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export declare type PositionStruct = {
    x: PromiseOrValue<BigNumberish>;
    y: PromiseOrValue<BigNumberish>;
};
export declare type PositionStructOutput = [BigNumber, BigNumber] & {
    x: BigNumber;
    y: BigNumber;
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
export interface GetterFacetInterface extends utils.Interface {
    functions: {
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
    };
    getFunction(nameOrSignatureOrTopic: "getArmyAt" | "getArmyFood" | "getCityAtTile" | "getCityCenter" | "getCityFood" | "getCityGold" | "getComponent" | "getComponentById" | "getConstituentAtTile" | "getConstituents" | "getEntities" | "getEntitiesAddr" | "getEntity" | "getInventoryByCityAndType" | "getMainBurnerAccount" | "getPlayerCount" | "getPlayerId" | "getPositionExternal" | "getResourceAtTile" | "getResourceLevel" | "getSettlerAt" | "getTemplateByInventoryType" | "getTileAt" | "getWorldConstants" | "isPlayerInitialized"): FunctionFragment;
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
    events: {};
}
export interface GetterFacet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: GetterFacetInterface;
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
    };
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
    callStatic: {
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
    };
    filters: {};
    estimateGas: {
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
    };
    populateTransaction: {
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
    };
}
