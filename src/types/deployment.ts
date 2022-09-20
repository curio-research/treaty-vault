export enum TILE_TYPE {
  LAND = 0,
  GOLDMINE_LV1 = 1,
  GOLDMINE_LV2 = 2,
  GOLDMINE_LV3 = 3,
}

export interface GameConfig {
  address: string;
  network: string;
  deploymentId: string;
  map: TILE_TYPE[][];
  time: any;
}
