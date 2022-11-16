export interface QueryCondition {
  component: string;
  action: QueryActionType;
  value: any;
}

export enum QueryActionType {
  HAS,
  NOT,
  HAS_EXACT,
  HAS_EXACT_NOT,
}

export type Query = QueryCondition[];
