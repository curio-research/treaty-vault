export interface ComponentType {
  name: string;
  valueType: ComponentDataTypes;
}

export enum ComponentDataTypes {
  NUMBER,
  STRING,
  BOOL,
  POSITION,
}

// query

export type Query = QueryCondition[];

export enum QueryActionType {
  HAS,
  NOT,
  HAS_EXACT,
  HAS_EXACT_MULTIPLE,
  HAS_EXACT_NOT,
}

export interface QueryCondition {
  component: string;
  action: QueryActionType;
  value: any;
}

export interface Pos {
  x: number;
  y: number;
}

export interface ECSUpdate {
  component: string;
  entity: number;
  value: any;
}
