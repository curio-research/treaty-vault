import { QueryCondition, QueryActionType } from './../types/query';

// encode world constants

export const encodeConstantTag = (
  functionName: string,
  componentName: string,
  entityName: string,
  level: number
): string => {
  return `Constant-${functionName}-${componentName}-${entityName}-${level}`;
};

// ------------------------
// core query language functions
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
