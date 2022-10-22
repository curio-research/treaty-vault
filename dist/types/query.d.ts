export interface QueryCondition {
    component: string;
    action: QueryActionType;
    value: any;
}
export declare enum QueryActionType {
    HAS = 0,
    NOT = 1,
    HAS_EXACT = 2
}
export declare type Query = QueryCondition[];
