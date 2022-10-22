import { TILE_TYPE } from './deployment';
export interface WorldConstants {
    admin: string;
    worldWidth: number;
    worldHeight: number;
    numInitTerrainTypes: number;
    initBatchSize: number;
    maxCityCountPerPlayer: number;
    maxArmyCountPerPlayer: number;
    maxPlayerCount: number;
    tileWidth: number;
}
export declare const emptyWorldConstants: WorldConstants;
export interface Tile {
    terrain: TILE_TYPE;
}
export declare type Tiles = Map<string, Tile>;
export declare type Components = Map<string, Component>;
export declare class Component {
    componentId: number;
    entities: Set<number>;
    entityToPrevValue: Map<number, any>;
    entityToValue: Map<number, any>;
    valueToEntity: Map<any, Set<number>>;
    constructor(componentId: number);
}
