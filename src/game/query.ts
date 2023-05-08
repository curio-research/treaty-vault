import { QueryActionType, QueryCondition } from '../types/ecs';

// ------------------------
// Query DSL
// ------------------------

export const has = (componentName: string): QueryCondition => {
  return { component: componentName, action: QueryActionType.HAS, value: undefined };
};

export const not = (componentName: string): QueryCondition => {
  return { component: componentName, action: QueryActionType.NOT, value: undefined };
};

export const hasExactValue = (componentName: string, value: any): QueryCondition => {
  return { component: componentName, action: QueryActionType.HAS_EXACT, value: value };
};

export const hasExactValues = (componentName: string, values: any[]): QueryCondition => {
  return { component: componentName, action: QueryActionType.HAS_EXACT_MULTIPLE, value: values };
};

export const hasExactNot = (componentName: string, value: any): QueryCondition => {
  return { component: componentName, action: QueryActionType.HAS_EXACT_NOT, value: value };
};

// ---------------------
// query
// ---------------------

export const setUnion = <T>(set1: Set<T>, set2: Set<T>): Set<T> => {
  return new Set([...set1, ...set2]);
};

export const setIntersection = <T>(set1: Set<T>, set2: Set<T>): Set<T> => {
  return new Set([...set1].filter((i) => set2.has(i)));
};

export const setDiff = <T>(set1: Set<T>, set2: Set<T>): Set<T> => {
  return new Set([...set1].filter((x) => !set2.has(x)));
};

export const DeepCopySet = <T>(set: Set<T>): Set<T> => {
  return new Set([...set]);
};

export const getNot = <T>(set1: any, set2: any): Set<number> => {
  return setDiff(set1 || new Set<number>(), set2 || new Set<number>());
};

// export const getNot = (val: any): Set<number> => {
//   return setDifference(this.entities, this.valueToEntity.get(val) || new Set<number>())
// }
