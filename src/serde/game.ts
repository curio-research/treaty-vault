import { WorldConstantsStructOutput } from '../index';
import { WorldConstants } from '../types/map';

// ------------------------------------------------------------
// deserialize outputs from smart contracts
// ------------------------------------------------------------

export const decodeWorldConstants = (constants: WorldConstantsStructOutput): WorldConstants => {
  return {
    admin: constants.admin.toLowerCase(),
    worldWidth: constants.worldWidth.toNumber(),
    worldHeight: constants.worldHeight.toNumber(),
    numInitTerrainTypes: constants.numInitTerrainTypes.toNumber(),
    initBatchSize: constants.initBatchSize.toNumber(),
    maxCityCountPerPlayer: constants.maxCityCountPerPlayer.toNumber(),
    maxArmyCountPerPlayer: constants.maxArmyCountPerPlayer.toNumber(),
    maxPlayerCount: constants.maxPlayerCount.toNumber(),
    tileWidth: constants.tileWidth.toNumber(),
    cityCenterLevelToEntityLevelRatio: constants.cityCenterLevelToEntityLevelRatio.toNumber(),
    cityCenterLevelToTileCountRatio: constants.cityCenterLevelToTileCountRatio.toNumber(),
  };
};
