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
    maxCityCountPerPlayer: constants.maxCityCountPerPlayer.toNumber(),
    maxArmyCountPerPlayer: constants.maxArmyCountPerPlayer.toNumber(),
    maxPlayerCount: constants.maxPlayerCount.toNumber(),
    tileWidth: constants.tileWidth.toNumber(),
    gameMode: constants.gameMode,
    gameLengthInSeconds: constants.gameLengthInSeconds.toNumber(),
    cityCenterLevelToEntityLevelRatio: constants.cityCenterLevelToEntityLevelRatio.toNumber(),
    secondsToTrainAThousandTroops: constants.secondsToTrainAThousandTroops.toNumber(),
    gameMode: constants.gameMode,
  };
};
