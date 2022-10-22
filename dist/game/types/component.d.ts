/// <reference types="node" />
import { position } from '../../types';
import { EventEmitter } from 'events';
export declare const emitter: EventEmitter;
export interface handleNewPlayerPayload {
    player: string;
    position: position;
}
export interface handleBaseCapture {
    player: string;
    armyId: number;
    baseId: number;
}
