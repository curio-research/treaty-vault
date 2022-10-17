import { EventEmitter } from 'events';

export enum NetworkEvents {
  ComponentValueSet = 'ComponentValueSet',
  ComponentValueRemoved = 'ComponentValueRemoved',
  EntityRemoved = 'EntityRemoved',
  NewPlayer = 'NewPlayer',
}

export type EventHandlers = Record<string, any>;

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

export const bindEventListenerToHandlers = (
  eventNames: any,
  emitter: EventEmitter,
  bindedFunctions: Record<string, any>
): void => {
  for (const item in eventNames) {
    emitter.on(item, (args) => {
      if (bindedFunctions[item]) {
        bindedFunctions[item](args || null);
      }
    });
  }
};
