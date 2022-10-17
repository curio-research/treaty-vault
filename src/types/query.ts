export interface QueryCondition {
  component: string;
  action: QueryActionType;
  value: any;
}

export enum QueryActionType {
  HAS,
  NOT,
  HAS_EXACT,
}

export type Query = QueryCondition[];
