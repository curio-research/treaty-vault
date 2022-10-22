/// <reference types="node" />
import EventEmitter from 'events';
import { WorldConstants, Tiles, Components } from '../types/map';
import { handleComponentValueSet, handleEntityRemoved } from '../util';
import { Query } from '../types/query';
import GameManagerCore from './gameManagerCore';
export declare class GameStateCore {
    entities: Set<number>;
    components: Components;
    worldConstants: WorldConstants;
    tileMap: Tiles;
    emitter: EventEmitter;
    gameManager: GameManagerCore;
    constructor(emitter: EventEmitter, gameManager: GameManagerCore);
    setupEventListeners(): void;
    getEntitiesOfValue: (component: string, value: any) => Set<number>;
    handleComponentValueSet: ({ componentName, entity, value }: handleComponentValueSet) => void;
    handleEntityRemoved: ({ entity }: handleEntityRemoved) => void;
    addToValueEntityMapping: (componentName: string, entity: number, value: any) => void;
    queryEntitiesAsSet: (query: Query) => Set<number>;
    setComponentValue: <T>(componentName: string, entity: number, value: T) => void;
    initializeComponent: (componentName: string) => void;
    queryEntities: (query: Query) => number[];
    fetchSetECSValues: () => Promise<void>;
}
export default GameStateCore;
