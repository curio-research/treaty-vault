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
    maxCapitalCountPerNation: constants.maxCapitalCountPerNation.toNumber(),
    maxArmyCountPerNation: constants.maxArmyCountPerNation.toNumber(),
    maxNationCount: constants.maxNationCount.toNumber(),
    tileWidth: constants.tileWidth.toNumber(),
    gameMode: constants.gameMode,
    gameLengthInSeconds: constants.gameLengthInSeconds.toNumber(),
    capitalLevelToEntityLevelRatio: constants.capitalLevelToEntityLevelRatio.toNumber(),
    secondsToTrainAThousandTroops: constants.secondsToTrainAThousandTroops.toNumber(),
  };
};
