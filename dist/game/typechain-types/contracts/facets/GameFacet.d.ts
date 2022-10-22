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
export interface GameFacetInterface extends utils.Interface {
    functions: {
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
    };
    getFunction(nameOrSignatureOrTopic: "authorizeGame" | "battle" | "claimTile" | "disbandArmy" | "endGather" | "endTroopProduction" | "foundCity" | "harvestResource" | "harvestResourcesFromCity" | "initializePlayer" | "move" | "organizeArmy" | "packCity" | "startGather" | "startTroopProduction" | "unloadResources" | "upgradeCity" | "upgradeCityInventory" | "upgradeResource" | "upgradeTile"): FunctionFragment;
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
    events: {};
}
export interface GameFacet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: GameFacetInterface;
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
    };
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
    callStatic: {
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
    };
    filters: {};
    estimateGas: {
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
    };
    populateTransaction: {
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
    };
}
