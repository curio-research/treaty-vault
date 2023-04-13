export enum TILE_TYPE {
  LAND = 0,
  CRYSTAL_MINE_LV1 = 1,
  FARM_LV1 = 2,
  BARBARIAN_LV1 = 3,
  BARBARIAN_LV2 = 4,
  MOUNTAIN = 5,
}

export enum GameMode {
  REGULAR = 0,
  BATTLE_ROYALE = 1,
}

export interface GameConfig {
  name: string;
  address: string;
  network: string;
  deploymentId: string;
  indexerUrl: string;
  map: TileMap;
  time: any;
}

export type TileMap = TILE_TYPE[][];

export const emptyGameConfig = {
  name: '',
  address: '',
  network: 'none',
  deploymentId: '',
  indexerUrl: '',
  map: [],
  time: 0,
};
