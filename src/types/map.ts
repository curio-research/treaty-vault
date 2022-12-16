import { setDiff } from '../util/query';
import { makeObservable, observable } from 'mobx';
import { TILE_TYPE } from './deployment';

export interface WorldConstants {
  admin: string;
  worldWidth: number;
  worldHeight: number;
  numInitTerrainTypes: number;
  maxCapitalCountPerNation: number;
  maxArmyCountPerNation: number;
  maxNationCount: number;
  tileWidth: number;
  gameMode: number;
  gameLengthInSeconds: number;
  capitalLevelToEntityLevelRatio: number;
  secondsToTrainAThousandTroops: number;
}

export const emptyWorldConstants: WorldConstants = {
  admin: '',
  worldWidth: 0,
  worldHeight: 0,
  numInitTerrainTypes: 0,
  maxCapitalCountPerNation: 0,
  maxArmyCountPerNation: 0,
  maxNationCount: 0,
  tileWidth: 0,
  gameMode: 0,
  gameLengthInSeconds: 0,
  capitalLevelToEntityLevelRatio: 0,
  secondsToTrainAThousandTroops: 0,
};

export interface Tile {
  terrain: TILE_TYPE;
}

export type Tiles = Map<string, Tile>;

export type Components = Map<string, Component>;

export class Component {
  componentId: number;

  entities: Set<number>;

  // all "values" are the encoded versions. See componentTypeToDecoder/componentTypeToEncoder in componentRegistry
  entityToPrevValue: Map<number, string>; // entity -> prevValue

  entityToValue: Map<number, string>; // entity -> value

  valueToEntity: Map<string, Set<number>>; // value -> set(entity)'

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

  public getNot = (val: any): Set<number> => {
    return setDiff(this.entities, this.valueToEntity.get(val) || new Set<number>());
  };
}
