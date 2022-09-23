export enum TILE_TYPE {
  LAND = 0,
  GOLDMINE_LV1 = 1,
  GOLDMINE_LV2 = 2,
  GOLDMINE_LV3 = 3,
  BARBARIAN_LV1 = 4,
  BARBARIAN_LV2 = 5,
  BARBARIAN_LV3 = 6,
}

export interface GameConfig {
  address: string;
  network: string;
  deploymentId: string;
  map: TILE_TYPE[][];
  time: any;
}
