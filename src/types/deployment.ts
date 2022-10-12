export enum TILE_TYPE {
  LAND = 0,
  GOLDMINE_LV1 = 1,
  // GOLDMINE_LV2 = 2,
  // GOLDMINE_LV3 = 3,
  FARM_LV1 = 2,
  BARBARIAN_LV1 = 3,
  BARBARIAN_LV2 = 4,
  // BARBARIAN_LV3 = 6,
}

export type TileMap = TILE_TYPE[][];

export interface GameConfig {
  address: string;
  network: string;
  deploymentId: string;
  map: TileMap;
  time: any;
}
