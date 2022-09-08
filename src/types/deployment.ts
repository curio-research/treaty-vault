export enum TILE_TYPE {
  COAST = 0,
  INLAND = 1,
  WATER = 2,
  PORT = 3,
  CITY = 4,
  OIL_WELL = 5,
}

export type ComponentSpecStruct = { name: string; valueType: any };

export interface gameConfig {
  address: string;
  network: string;
  deploymentId: string;
  map: TILE_TYPE[][];
  time: any;
}
