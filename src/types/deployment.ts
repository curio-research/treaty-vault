export enum TILE_TYPE {
  PLAIN = 0,
}

export interface GameConfig {
  address: string;
  network: string;
  deploymentId: string;
  map: TILE_TYPE[][];
  time: any;
}
