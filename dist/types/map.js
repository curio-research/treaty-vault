"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = exports.emptyWorldConstants = void 0;
const mobx_1 = require("mobx");
exports.emptyWorldConstants = {
    admin: '',
    worldWidth: 0,
    worldHeight: 0,
    numInitTerrainTypes: 0,
    initBatchSize: 0,
    maxCityCountPerPlayer: 0,
    maxArmyCountPerPlayer: 0,
    maxPlayerCount: 0,
    tileWidth: 0,
};
class Component {
    constructor(componentId) {
        this.componentId = componentId;
        this.entities = new Set();
        this.entityToPrevValue = new Map();
        this.entityToValue = new Map();
        this.valueToEntity = new Map();
        (0, mobx_1.makeObservable)(this, {
            componentId: mobx_1.observable,
            entities: mobx_1.observable,
            entityToPrevValue: mobx_1.observable,
            entityToValue: mobx_1.observable,
            valueToEntity: mobx_1.observable,
        });
    }
}
exports.Component = Component;
//# sourceMappingURL=map.js.map