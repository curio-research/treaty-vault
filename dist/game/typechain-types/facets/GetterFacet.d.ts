import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
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
export declare type TileStruct = {
    isInitialized: PromiseOrValue<boolean>;
    terrain: PromiseOrValue<BigNumberish>;
};
export declare type TileStructOutput = [boolean, number] & {
    isInitialized: boolean;
    terrain: number;
};
export declare type WorldConstantsStruct = {
    admin: PromiseOrValue<string>;
    worldWidth: PromiseOrValue<BigNumberish>;
    worldHeight: PromiseOrValue<BigNumberish>;
    numInitTerrainTypes: PromiseOrValue<BigNumberish>;
    initBatchSize: PromiseOrValue<BigNumberish>;
    maxCityCountPerPlayer: PromiseOrValue<BigNumberish>;
    maxArmyCountPerPlayer: PromiseOrValue<BigNumberish>;
    maxPlayerCount: PromiseOrValue<BigNumberish>;
    maxInventoryCapacity: PromiseOrValue<BigNumberish>;
    cityUpgradeGoldCost: PromiseOrValue<BigNumberish>;
    initCityGold: PromiseOrValue<BigNumberish>;
    cityHealth: PromiseOrValue<BigNumberish>;
    cityAttack: PromiseOrValue<BigNumberish>;
    cityDefense: PromiseOrValue<BigNumberish>;
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
    maxPlayerCount: BigNumber;
    maxInventoryCapacity: BigNumber;
    cityUpgradeGoldCost: BigNumber;
    initCityGold: BigNumber;
    cityHealth: BigNumber;
    cityAttack: BigNumber;
    cityDefense: BigNumber;
};
export interface GetterFacetInterface extends utils.Interface {
    functions: {
        "getCityAt((uint256,uint256))": FunctionFragment;
        "getCityCenter(uint256)": FunctionFragment;
        "getComponent(string)": FunctionFragment;
        "getComponentById(uint256)": FunctionFragment;
        "getEntity()": FunctionFragment;
        "getPlayerCount()": FunctionFragment;
        "getPlayerId(address)": FunctionFragment;
        "getSettlerAt((uint256,uint256))": FunctionFragment;
        "getTemplateId(string)": FunctionFragment;
        "getTileAt((uint256,uint256))": FunctionFragment;
        "getWorldConstants()": FunctionFragment;
        "isPlayerInitialized(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getCityAt" | "getCityCenter" | "getComponent" | "getComponentById" | "getEntity" | "getPlayerCount" | "getPlayerId" | "getSettlerAt" | "getTemplateId" | "getTileAt" | "getWorldConstants" | "isPlayerInitialized"): FunctionFragment;
    encodeFunctionData(functionFragment: "getCityAt", values: [PositionStruct]): string;
    encodeFunctionData(functionFragment: "getCityCenter", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getComponent", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getComponentById", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getEntity", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPlayerCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPlayerId", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getSettlerAt", values: [PositionStruct]): string;
    encodeFunctionData(functionFragment: "getTemplateId", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getTileAt", values: [PositionStruct]): string;
    encodeFunctionData(functionFragment: "getWorldConstants", values?: undefined): string;
    encodeFunctionData(functionFragment: "isPlayerInitialized", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "getCityAt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCityCenter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getComponent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getComponentById", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getEntity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPlayerCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPlayerId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSettlerAt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTemplateId", data: BytesLike): Result;
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
        getCityAt(_position: PositionStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getCityCenter(_cityID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getComponent(_name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        getComponentById(_entity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        getEntity(overrides?: CallOverrides): Promise<[BigNumber]>;
        getPlayerCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        getPlayerId(_player: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getSettlerAt(_position: PositionStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getTemplateId(_inventoryType: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getTileAt(_pos: PositionStruct, overrides?: CallOverrides): Promise<[TileStructOutput]>;
        getWorldConstants(overrides?: CallOverrides): Promise<[WorldConstantsStructOutput]>;
        isPlayerInitialized(_player: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
    };
    getCityAt(_position: PositionStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getCityCenter(_cityID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getComponent(_name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    getComponentById(_entity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    getEntity(overrides?: CallOverrides): Promise<BigNumber>;
    getPlayerCount(overrides?: CallOverrides): Promise<BigNumber>;
    getPlayerId(_player: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getSettlerAt(_position: PositionStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getTemplateId(_inventoryType: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getTileAt(_pos: PositionStruct, overrides?: CallOverrides): Promise<TileStructOutput>;
    getWorldConstants(overrides?: CallOverrides): Promise<WorldConstantsStructOutput>;
    isPlayerInitialized(_player: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        getCityAt(_position: PositionStruct, overrides?: CallOverrides): Promise<BigNumber>;
        getCityCenter(_cityID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getComponent(_name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        getComponentById(_entity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        getEntity(overrides?: CallOverrides): Promise<BigNumber>;
        getPlayerCount(overrides?: CallOverrides): Promise<BigNumber>;
        getPlayerId(_player: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getSettlerAt(_position: PositionStruct, overrides?: CallOverrides): Promise<BigNumber>;
        getTemplateId(_inventoryType: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getTileAt(_pos: PositionStruct, overrides?: CallOverrides): Promise<TileStructOutput>;
        getWorldConstants(overrides?: CallOverrides): Promise<WorldConstantsStructOutput>;
        isPlayerInitialized(_player: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        getCityAt(_position: PositionStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getCityCenter(_cityID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getComponent(_name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getComponentById(_entity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getEntity(overrides?: CallOverrides): Promise<BigNumber>;
        getPlayerCount(overrides?: CallOverrides): Promise<BigNumber>;
        getPlayerId(_player: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getSettlerAt(_position: PositionStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getTemplateId(_inventoryType: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getTileAt(_pos: PositionStruct, overrides?: CallOverrides): Promise<BigNumber>;
        getWorldConstants(overrides?: CallOverrides): Promise<BigNumber>;
        isPlayerInitialized(_player: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getCityAt(_position: PositionStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getCityCenter(_cityID: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getComponent(_name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getComponentById(_entity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getEntity(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPlayerCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPlayerId(_player: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSettlerAt(_position: PositionStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getTemplateId(_inventoryType: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getTileAt(_pos: PositionStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getWorldConstants(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isPlayerInitialized(_player: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
