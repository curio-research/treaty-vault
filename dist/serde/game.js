"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeWorldConstants = void 0;
// ------------------------------------------------------------
// deserialize outputs from smart contracts
// ------------------------------------------------------------
const decodeWorldConstants = (constants) => {
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
    };
};
exports.decodeWorldConstants = decodeWorldConstants;
//# sourceMappingURL=game.js.map