import EventEmitter from 'events';
import GameManagerCore from './gameManagerCore';
import { componentIdToName, componentNameToId, componentToType, componentTypeToEncoder } from './componentRegistry';
import {
  bindEventListenerToHandlers,
  NetworkEvents,
  handleComponentValueSet,
  handleComponentValueRemoved,
  handleEntityRemoved,
} from '../util/events';
import { union, intersection, difference } from '../util/set';
import { Components, Component } from '../types/map';
import { Query, QueryActionType } from '../types/query';

// ------------------------------------------------------------
// Master game state
// This should be always updated with the contracts
// ------------------------------------------------------------

export class GameStateCore {
  public emitter: EventEmitter;
  public gameManager: GameManagerCore; // reference to game master

  public components: Components;

  constructor(emitter: EventEmitter, gameManager: GameManagerCore) {
    this.emitter = emitter;
    this.gameManager = gameManager;

    this.components = new Map();
  }

  // listen to events emitted from apiManager.ts
  public setupEventListeners(): void {
    const eventToHandlerBinding: Record<string, any> = {
      [NetworkEvents.ComponentValueSet]: this.handleComponentValueSet.bind(this),
      [NetworkEvents.ComponentValueRemoved]: this.handleComponentValueRemoved.bind(this),
      [NetworkEvents.EntityRemoved]: this.handleEntityRemoved.bind(this),
    };

    bindEventListenerToHandlers(NetworkEvents, this.emitter, eventToHandlerBinding);
  }

  public handleComponentValueSet = ({ componentName, entity, value }: handleComponentValueSet) => {
    this.setComponentValue(componentName, entity, value);
  };

  public handleComponentValueRemoved = ({ componentName, entity }: handleComponentValueRemoved) => {
    this.removeComponentEntity(this.components.get(componentName), entity);
  };

  public handleEntityRemoved = ({ entity }: handleEntityRemoved) => {
    for (const [componentName, component] of this.components) {
      this.removeComponentEntity(component, entity);
    }
  };

  // ECS ----------------------------------------------------------------

  // fetch from smart contracts. only used for initialization
  public fetchSetECSValues = async (): Promise<void> => {
    const allEntities = new Set(await this.gameManager.apiManager.getEntities());

    for (let i = 0; i < Object.keys(componentNameToId).length; i++) {
      const componentId = i + 1;
      const componentName = componentIdToName[componentId];

      this.initializeComponent(componentName);

      const componentAddress = await this.gameManager.apiManager.getComponentById(componentId);
      const { entityIds, values } = await this.gameManager.apiManager.getAllEntitiesAndRawValues(componentAddress);

      for (let j = 0; j < entityIds.length; j++) {
        const entity = entityIds[j];
        if (allEntities.has(entity)) {
          this.setComponentValue(componentName, entity, values[j]);
        }
      }
    }
  };

  public getEntitiesOfValue = (componentName: string, value: any): Set<number> => {
    const encodedValueKey = componentTypeToEncoder[componentToType[componentName]](value);
    return this.components.get(componentName)?.valueToEntity.get(encodedValueKey) || new Set();
  };

  // query and return a list of entities based on conditions
  // ex: "i want all entities with position and isMovable"
  // TODO: test for performance
  public queryEntities = (query: Query): number[] => {
    let allWorldEntitySet = new Set<number>();
    for (const [componentName, component] of this.components) {
      allWorldEntitySet = union(allWorldEntitySet, component.entities);
    }

    let entities = new Set<number>();
    query.forEach((queryCondition) => {
      const component = this.components.get(queryCondition.component);

      if (component) {
        let delta = new Set<number>();
        if (queryCondition.action === QueryActionType.HAS) {
          delta = component.entities;
        } else if (queryCondition.action === QueryActionType.NOT) {
          delta = difference(allWorldEntitySet, component.entities);
        } else if (
          queryCondition.action === QueryActionType.HAS_EXACT ||
          queryCondition.action === QueryActionType.HAS_EXACT_NOT
        ) {
          const entitiesWithValue =
            component.valueToEntity.get(
              componentTypeToEncoder[componentToType[queryCondition.component]](queryCondition.value)
            ) || new Set();
          if (queryCondition.action === QueryActionType.HAS_EXACT) {
            delta = entitiesWithValue;
          } else {
            delta = difference(allWorldEntitySet, entitiesWithValue);
          }
        }
        entities = intersection(entities, delta);
      }
    });

    return [...entities];
  };

  // PRIVATE FUNCTIONS ----------------------------------------------------------------

  private initializeComponent = (componentName: string): Component => {
    const component = new Component(componentNameToId[componentName]);
    this.components.set(componentName, component);
    return component;
  };

  // caches the current value as "previous value". updates the current value
  private setComponentValue = (componentName: string, entity: number, encodedValue: string): void => {
    let component = this.components.get(componentName);
    if (!component) {
      component = this.initializeComponent(componentName);
    }

    component.entities.add(entity);

    // fetch and remove previous data, add new one
    const encodedPrevValue = component.entityToValue.get(entity);
    if (encodedPrevValue) {
      component.entityToPrevValue.set(entity, encodedPrevValue);
      component.valueToEntity.get(encodedPrevValue)?.delete(entity);
    }

    component.entityToValue.set(entity, encodedValue);

    if (!component.valueToEntity.get(encodedValue)) {
      component.valueToEntity.set(encodedValue, new Set());
    }
    component.valueToEntity.get(encodedValue)!.add(entity);
  };

  private removeComponentEntity = (component: Component | undefined, entity: number): void => {
    if (!component) return;

    component.entities.delete(entity);
    component.entityToPrevValue.delete(entity);

    const encodedValue = component.entityToValue.get(entity);
    if (encodedValue) {
      // entity can only be part of one valueToEntity entry
      component.valueToEntity.delete(encodedValue);
    }

    component.entityToValue.delete(entity);
  };
}

export default GameStateCore;
