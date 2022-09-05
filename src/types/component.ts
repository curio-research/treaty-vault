export type componentRegistryType = Record<number, compType>;

export interface compType {
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
}
