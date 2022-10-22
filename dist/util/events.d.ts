import { EventEmitter } from 'events';
export declare enum NetworkEvents {
    ComponentValueSet = "ComponentValueSet",
    ComponentValueRemoved = "ComponentValueRemoved",
    EntityRemoved = "EntityRemoved",
    NewPlayer = "NewPlayer"
}
export declare type EventHandlers = Record<string, any>;
export interface handleComponentValueSet {
    componentName: string;
    entity: number;
    value: string;
}
export interface handleComponentValueRemoved {
    componentName: string;
    entity: number;
}
export interface handleEntityRemoved {
    entity: number;
}
export declare const bindEventListenerToHandlers: (eventNames: any, emitter: EventEmitter, bindedFunctions: Record<string, any>) => void;
