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
export interface AdminFacetInterface extends utils.Interface {
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
    };
    getFunction(nameOrSignatureOrTopic: "addConstant" | "addEntity" | "addTroopTemplate" | "adminInitializeTile" | "assignResource" | "bulkAddConstants" | "bulkInitializeTiles" | "createArmy" | "reactivatePlayer" | "registerComponents" | "registerDefaultComponents" | "registerTemplateShortcuts" | "removeEntity" | "setComponentValue" | "spawnBarbarian" | "spawnResource" | "storeEncodedColumnBatches"): FunctionFragment;
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
    events: {};
}
export interface AdminFacet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AdminFacetInterface;
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
    };
    filters: {};
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
    };
}
