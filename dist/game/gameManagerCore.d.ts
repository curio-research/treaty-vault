/// <reference types="node" />
import { EventEmitter } from 'events';
import { GameConfig } from '../types';
import GameStateCore from './gameStateCore';
import ApiManager from './apiManagerCore';
export declare class GameManagerCore {
    deployment: GameConfig;
    gameState: GameStateCore;
    apiManager: ApiManager;
    emitter: EventEmitter;
    constructor(emitter: EventEmitter, gameConfig: GameConfig);
    sync: () => Promise<void>;
    getAddress: () => string;
}
export default GameManagerCore;
