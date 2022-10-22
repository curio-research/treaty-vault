export declare type componentRegistryType = Record<number, CompType>;
export interface CompType {
    name: string;
    valueType: ComponentDataTypes;
}
export declare enum ComponentDataTypes {
    UINT = 0,
    STRING = 1,
    BOOL = 2,
    INT = 3,
    ADDRESS = 4,
    POSITION = 5,
    UINT_ARRAY = 6,
    STRING_ARRAY = 7
}
