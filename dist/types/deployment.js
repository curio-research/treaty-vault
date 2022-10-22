"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emptyGameConfig = exports.TILE_TYPE = void 0;
var TILE_TYPE;
(function (TILE_TYPE) {
    TILE_TYPE[TILE_TYPE["LAND"] = 0] = "LAND";
    TILE_TYPE[TILE_TYPE["GOLDMINE_LV1"] = 1] = "GOLDMINE_LV1";
    TILE_TYPE[TILE_TYPE["FARM_LV1"] = 2] = "FARM_LV1";
    TILE_TYPE[TILE_TYPE["BARBARIAN_LV1"] = 3] = "BARBARIAN_LV1";
    TILE_TYPE[TILE_TYPE["BARBARIAN_LV2"] = 4] = "BARBARIAN_LV2";
})(TILE_TYPE = exports.TILE_TYPE || (exports.TILE_TYPE = {}));
exports.emptyGameConfig = {
    address: '',
    network: 'none',
    deploymentId: '',
    indexerUrl: '',
    map: [],
    time: 0,
};
//# sourceMappingURL=deployment.js.map