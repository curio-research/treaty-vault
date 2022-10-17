import { makeObservable, observable } from 'mobx';
import { TILE_TYPE } from './deployment';

export interface WorldConstants {
  admin: string;
  worldWidth: number;
  worldHeight: number;
  numInitTerrainTypes: number;
  initBatchSize: number;
  maxCityCountPerPlayer: number;
  maxArmyCountPerPlayer: number;
  maxPlayerCount: number;
  tileWidth: number;
  cityUpgradeGoldCost: number;
  tileGuardAmount: number;
  tileUpgradeGoldCost: number;
  barbarianCooldown: number;
  initCityCenterGoldLoad: number;
}

export const emptyWorldConstants: WorldConstants = {
  admin: '',
  worldWidth: 0,
  worldHeight: 0,
  numInitTerrainTypes: 0,
  initBatchSize: 0,
  maxCityCountPerPlayer: 0,
  maxArmyCountPerPlayer: 0,
  maxPlayerCount: 0,
  tileWidth: 0,
  cityUpgradeGoldCost: 0,
  tileGuardAmount: 0,
  tileUpgradeGoldCost: 0,
  barbarianCooldown: 0,
  initCityCenterGoldLoad: 0,
};

export interface Tile {
  terrain: TILE_TYPE;
}

export type Tiles = Map<string, Tile>;

export type Components = Map<string, Component>;

export class Component {
  componentId: number;

  entities: Set<number>;

  entityToPrevValue: Map<number, any>; // entity -> prevValue

  entityToValue: Map<number, any>; // entity -> value

  valueToEntity: Map<any, Set<number>>; // value -> set(entity)'

  constructor(componentId: number) {
    this.componentId = componentId;
    this.entities = new Set();
    this.entityToPrevValue = new Map();
    this.entityToValue = new Map();
    this.valueToEntity = new Map();

    makeObservable(this, {
      componentId: observable,
      entities: observable,
      entityToPrevValue: observable,
      entityToValue: observable,
      valueToEntity: observable,
    });
  }
}