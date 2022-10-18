export enum TILE_TYPE {
  LAND = 0,
  GOLDMINE_LV1 = 1,
  FARM_LV1 = 2,
  BARBARIAN_LV1 = 3,
  BARBARIAN_LV2 = 4,
}

export interface GameConfig {
  address: string;
  network: string;
  deploymentId: string;
  map: TileMap;
  time: any;
}

export type TileMap = TILE_TYPE[][];

export const emptyGameConfig = {
  address: '',
  network: 'none',
  deploymentId: '',
  map: [],
  time: 0,
};
