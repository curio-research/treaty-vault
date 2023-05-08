import { getNot } from './query';
// ecs based engine like we wrote in javascript basically

import { ECSUpdate, Query, QueryActionType } from '../types/ecs';
import { hasExactValue, setDiff, setIntersection, setUnion } from './query';

// TODO:
// split this into a shared package with frontend

// ------------------------------------
// Simple ecs engine
// ------------------------------------
export class GameState {
  public entities: Set<number> = new Set();
  public entitiesNonce: Number = 0;

  public components: Map<string, Component> = new Map();
  public componentNonce: Number = 0;

  // addComponent
  // TODO: add component type
  public addComponent(componentName: string) {
    if (this.components.has(componentName)) {
      return;
    }
    this.components.set(componentName, new Component());
  }

  // getComponentValue
  public getComponentValue<T>(componentName: string, entity: number): T | undefined {
    const component = this.components.get(componentName);

    if (!component) return;

    return component.entityToValue.get(entity);
  }

  // setComponentValue
  // TODO: fix value type
  // returns an ecs update struct
  public setComponentValue(componentName: string, entity: number, value: any): ECSUpdate | undefined {
    // if component doesn't exist, create one
    this.addComponent(componentName);

    this.entities.add(entity);

    const component = this.components.get(componentName);
    if (!component) return;

    component.entities.add(entity);

    component.entityToValue.set(entity, value);

    // store in value to entities reverse mapping
    this.addToValueEntityMapping(componentName, entity, value);

    return {
      component: componentName,
      entity,
      value,
    };
  }

  private addToValueEntityMapping = (componentName: string, entity: number, value: any): void => {
    // TODO: do we need to encode values to bytes or can we keep them raw
    const component = this.components.get(componentName);
    if (!component) return;

    // if empty, start it
    if (!component.valueToEntities.get(value)) {
      this.components.get(componentName)!.valueToEntities.set(value, new Set());
    }

    // add new data
    component.valueToEntities.get(value)?.add(entity);
  };

  // query
  public query(query: Query) {
    // this is a shallow copy i think
    let entities = this.entities;

    const allWorldEntitySet = new Set<number>(entities);

    query.forEach((queryCondition) => {
      const component = this.components.get(queryCondition.component);
      if (!component) return;

      if (queryCondition.action === QueryActionType.HAS) {
        // has component
        entities = setIntersection(entities, component.entities);
      } else if (queryCondition.action === QueryActionType.NOT) {
        // does not have component
        entities = setIntersection(entities, setDiff(allWorldEntitySet, component.entities));
      } else if (queryCondition.action === QueryActionType.HAS_EXACT) {
        // has exactly the value
        entities = setIntersection(entities, component.valueToEntities.get(queryCondition.value) || new Set());

        // / Prev implementation;
        // entities = setIntersection(
        //   entities,
        //   component.valueToEntities.get(
        //     componentTypeToEncoder[componentToType[queryCondition.component]](queryCondition.value),
        //   ) || new Set(),
      } else if (queryCondition.action === QueryActionType.HAS_EXACT_MULTIPLE) {
        // has multiple options. "Or" operator
        if (!queryCondition.value) return;

        let temp = new Set<number>();

        // loop through each potential value
        queryCondition.value.forEach((val: any) => {
          const current = this.queryEntitiesAsSet([hasExactValue(queryCondition.component, val)]);
          temp = setUnion(temp, current);
        });

        entities = setIntersection(entities, temp);
      }

      // TODO: if needed implement HAS_EXACT_NOT but i don't think we need this
      // else if (queryCondition.action === QueryActionType.HAS_EXACT_NOT) {
      //   entities = setIntersection(entities, component.getNot( queryCondition.value))
      // }
    });

    return [...entities];
  }

  public queryEntitiesAsSet = (query: Query): Set<number> => {
    return new Set(this.query(query));
  };
}

export class Component {
  // TODO: add data type

  public entities: Set<number> = new Set();
  public entityToValue: Map<number, any> = new Map();

  // TODO:
  public valueToEntities: Map<any, Set<number>> = new Map();
}
