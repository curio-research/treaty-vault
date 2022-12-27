import EventEmitter from 'events';
import { bindEventListenerToHandlers } from '../util';
import {
  componentIdToName,
  componentNameToDecoder,
  componentNameToId,
  componentToType,
  componentTypeToEncoder,
} from './';
import { makeObservable, observable, configure } from 'mobx';
import { WorldConstants, Tiles, emptyWorldConstants, Components, Component } from '../types/map';
import { NetworkEvents, handleComponentValueSet, handleComponentValueRemoved, handleEntityRemoved } from '../util';
import { Query, QueryActionType } from '../types/query';
import { setDifference, setIntersection } from '../util/set';
import GameManagerCore from './gameManagerCore';

// ------------------------------------------------------------
// Master game state
// This should be always updated with the contracts
// ------------------------------------------------------------

export class GameStateCore {
  public entities: Set<number>;
  public components: Components;
  public worldConstants: WorldConstants;
  public tileMap: Tiles;

  public emitter: EventEmitter;
  public gameManager: GameManagerCore; // reference to game master

  constructor(emitter: EventEmitter, gameManager: GameManagerCore) {
    this.entities = new Set();
    this.components = new Map();
    this.worldConstants = emptyWorldConstants;
    this.tileMap = new Map();

    this.emitter = emitter;
    this.gameManager = gameManager;

    makeObservable(this, {
      entities: observable,
      components: observable,
      worldConstants: observable,
      tileMap: observable,
    });
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

  // ECS ----------------------------------------------------------------

  public getEntitiesOfValue = (component: string, value: any): Set<number> => {
    const encodedValueKey = componentTypeToEncoder[componentToType[component]](value);
    return this.components.get(component)!.valueToEntity.get(encodedValueKey) || new Set();
  };

  public handleComponentValueSet = ({ componentName, entity, value }: handleComponentValueSet) => {
    this.setComponentValue(componentName, entity, componentNameToDecoder[componentName](value));
  };

  public handleComponentValueRemoved = ({ componentName, entity }: handleComponentValueRemoved) => {
    this.removeComponentValue(componentName, entity);
  };

  public handleEntityRemoved = ({ entity }: handleEntityRemoved) => {
    this.entities.delete(entity);

    // loop through all components, deleting everything related to this entity
    for (const [componentName, component] of this.components) {
      component.entities.delete(entity);
      component.entityToPrevValue.delete(entity);
      component.entityToValue.delete(entity);

      for (const [value, entities] of component.valueToEntity) {
        if (entities.has(entity)) {
          component.valueToEntity.delete(entity);
        }
      }
    }
  };

  public addToValueEntityMapping = (componentName: string, entity: number, value: any): void => {
    const encodedValueKey = componentTypeToEncoder[componentToType[componentName]](value);
    const component = this.components.get(componentName);
    if (!component) return;

    if (!component.valueToEntity.get(encodedValueKey)) {
      this.components.get(componentName)!.valueToEntity.set(encodedValueKey, new Set());
    }

    // add new data
    component.valueToEntity.get(encodedValueKey)?.add(entity);
  };

  public queryEntitiesAsSet = (query: Query): Set<number> => {
    return new Set(this.queryEntities(query));
  };

  public removeComponentValue = (componentName: string, entity: number): void => {
    // if component doesn't exist, create one
    if (!this.components.get(componentName)) {
      this.initializeComponent(componentName);
    }

    const component = this.components.get(componentName);
    if (!component) return;

    component.entities.delete(entity);
  };

  // caches the current value as "previous value". updates the current value
  public setComponentValue = <T>(componentName: string, entity: number, value: T): void => {
    // if component doesn't exist, create one
    if (!this.components.get(componentName)) {
      this.initializeComponent(componentName);
    }

    this.entities.add(entity);

    const component = this.components.get(componentName);
    if (!component) return;

    component.entities.add(entity);

    // fetch and remove previous data, add new one
    const prevValue = component.entityToValue.get(entity);
    if (prevValue) {
      const encodedPrevValue = componentTypeToEncoder[componentToType[componentName]](prevValue);
      component.valueToEntity.get(encodedPrevValue)?.delete(entity);
    }

    component.entityToPrevValue.set(entity, prevValue);
    component.entityToValue.set(entity, value);

    this.addToValueEntityMapping(componentName, entity, value);
  };

  public initializeComponent = (componentName: string): void => {
    const componentId = componentNameToId[componentName];
    this.components.set(componentName, new Component(componentId));
  };

  // query and return a list of entities based on conditions
  // ex: "i want all entities with position and isMovable"

  // TODO: test for performance
  public queryEntities = (query: Query): number[] => {
    let entities = this.entities;
    const allWorldEntitySet = new Set<number>();

    this.entities.forEach((entity) => {
      allWorldEntitySet.add(entity);
    });

    query.forEach((queryCondition) => {
      const component = this.components.get(queryCondition.component);

      if (component) {
        if (queryCondition.action === QueryActionType.HAS) {
          entities = setIntersection(entities, component.entities);
        } else if (queryCondition.action === QueryActionType.NOT) {
          entities = setIntersection(entities, setDifference(allWorldEntitySet, component.entities));
        } else if (queryCondition.action === QueryActionType.HAS_EXACT) {
          entities = setIntersection(
            entities,
            component.valueToEntity.get(
              componentTypeToEncoder[componentToType[queryCondition.component]](queryCondition.value)
            ) || new Set()
          );
        }
      }
    });

    return [...entities];
  };

  // fetch from smart contracts
  public fetchSetECSValues = async (): Promise<void> => {
    const componentNonce = Object.keys(componentNameToId).length;

    const allEntities = await this.gameManager.apiManager.getEntities();

    this.entities = new Set(allEntities);

    for (let i = 0; i < componentNonce; i++) {
      const componentId = i + 1;
      const componentName = componentIdToName[componentId];

      this.initializeComponent(componentName);

      const componentAddress = await this.gameManager.apiManager.getComponentById(componentId);
      const { entityIds, values } = await this.gameManager.apiManager.getAllEntitiesAndRawValues(componentAddress);

      for (let j = 0; j < entityIds.length; j++) {
        const entity = entityIds[j];

        if (allEntities.includes(entity)) {
          const entityValue = values[j];

          this.setComponentValue(
            componentIdToName[componentId],
            entity,
            componentNameToDecoder[componentName](entityValue)
          );
        }
      }
    }
  };
}

export default GameStateCore;

configure({
  enforceActions: 'never',
});
