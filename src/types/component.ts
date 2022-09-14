export type componentRegistryType = Record<number, CompType>;

export interface CompType {
  name: string;
  valueType: ComponentDataTypes;
}

export enum ComponentDataTypes {
  UINT,
  STRING,
  BOOL,
  INT,
  ADDRESS,
  POSITION,
  UINT_ARRAY,
  STRING_ARRAY,
}
