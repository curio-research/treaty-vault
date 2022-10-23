"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameStateCore = void 0;
const util_1 = require("../util");
const _1 = require("./");
const mobx_1 = require("mobx");
const map_1 = require("../types/map");
const util_2 = require("../util");
const query_1 = require("../types/query");
const query_2 = require("../util/query");
// ------------------------------------------------------------
// Master game state
// This should be always updated with the contracts
// ------------------------------------------------------------
class GameStateCore {
    constructor(emitter, gameManager) {
        // ECS ----------------------------------------------------------------
        this.getEntitiesOfValue = (component, value) => {
            const encodedValueKey = _1.componentTypeToEncoder[_1.componentToType[component]](value);
            return this.components.get(component).valueToEntity.get(encodedValueKey) || new Set();
        };
        this.handleComponentValueSet = ({ componentName, entity, value }) => {
            this.setComponentValue(componentName, entity, _1.componentNameToDecoder[componentName](value));
        };
        this.handleEntityRemoved = ({ entity }) => {
            this.entities.delete(entity);
            // loop through all components, deleting everything related to this entity
            for (const [componentName, component] of this.components) {
                component.entities.delete(entity);
                component.entityToPrevValue.delete(entity);
                component.entityToValue.delete(entity);
                for (const [value, entities] of component.valueToEntity) {
                    if (entities.has(entity)) {
                        component.valueToEntity.delete(entity);
                    }
                }
            }
        };
        this.addToValueEntityMapping = (componentName, entity, value) => {
            const encodedValueKey = _1.componentTypeToEncoder[_1.componentToType[componentName]](value);
            const component = this.components.get(componentName);
            if (!component)
                return;
            if (!component.valueToEntity.get(encodedValueKey)) {
                this.components.get(componentName).valueToEntity.set(encodedValueKey, new Set());
            }
            // add new data
            component.valueToEntity.get(encodedValueKey)?.add(entity);
        };
        this.queryEntitiesAsSet = (query) => {
            return new Set(this.queryEntities(query));
        };
        // caches the current value as "previous value". updates the current value
        this.setComponentValue = (componentName, entity, value) => {
            // if component doesn't exist, create one
            if (!this.components.get(componentName)) {
                this.initializeComponent(componentName);
            }
            this.entities.add(entity);
            const component = this.components.get(componentName);
            if (!component)
                return;
            component.entities.add(entity);
            // fetch and remove previous data, add new one
            const prevValue = component.entityToValue.get(entity);
            if (prevValue) {
                const encodedPrevValue = _1.componentTypeToEncoder[_1.componentToType[componentName]](prevValue);
                component.valueToEntity.get(encodedPrevValue)?.delete(entity);
            }
            component.entityToPrevValue.set(entity, prevValue);
            component.entityToValue.set(entity, value);
            this.addToValueEntityMapping(componentName, entity, value);
        };
        this.initializeComponent = (componentName) => {
            const componentId = _1.componentNameToId[componentName];
            this.components.set(componentName, new map_1.Component(componentId));
        };
        // query and return a list of entities based on conditions
        // ex: "i want all entities with position and isMovable"
        // TODO: test for performance
        this.queryEntities = (query) => {
            let entities = this.entities;
            const allWorldEntitySet = new Set();
            this.entities.forEach((entity) => {
                allWorldEntitySet.add(entity);
            });
            query.forEach((queryCondition) => {
                const component = this.components.get(queryCondition.component);
                if (component) {
                    if (queryCondition.action === query_1.QueryActionType.HAS) {
                        entities = (0, query_2.setIntersection)(entities, component.entities);
                    }
                    else if (queryCondition.action === query_1.QueryActionType.NOT) {
                        entities = (0, query_2.setIntersection)(entities, (0, query_2.setDiff)(allWorldEntitySet, component.entities));
                    }
                    else if (queryCondition.action === query_1.QueryActionType.HAS_EXACT) {
                        entities = (0, query_2.setIntersection)(entities, component.valueToEntity.get(_1.componentTypeToEncoder[_1.componentToType[queryCondition.component]](queryCondition.value)) || new Set());
                    }
                }
            });
            return [...entities];
        };
        // fetch from smart contracts
        this.fetchSetECSValues = async () => {
            const componentNonce = Object.keys(_1.componentNameToId).length;
            const allEntities = await this.gameManager.apiManager.getEntities();
            this.entities = new Set(allEntities);
            for (let i = 0; i < componentNonce; i++) {
                const componentId = i + 1;
                const componentName = _1.componentIdToName[componentId];
                this.initializeComponent(componentName);
                const componentAddress = await this.gameManager.apiManager.getComponentById(componentId);
                const { entityIds, values } = await this.gameManager.apiManager.getAllEntitiesAndRawValues(componentAddress);
                for (let j = 0; j < entityIds.length; j++) {
                    const entity = entityIds[j];
                    if (allEntities.includes(entity)) {
                        const entityValue = values[j];
                        this.setComponentValue(_1.componentIdToName[componentId], entity, _1.componentNameToDecoder[componentName](entityValue));
                    }
                }
            }
        };
        this.entities = new Set();
        this.components = new Map();
        this.worldConstants = map_1.emptyWorldConstants;
        this.tileMap = new Map();
        this.emitter = emitter;
        this.gameManager = gameManager;
        (0, mobx_1.makeObservable)(this, {
            entities: mobx_1.observable,
            components: mobx_1.observable,
            worldConstants: mobx_1.observable,
            tileMap: mobx_1.observable,
        });
    }
    // listen to events emitted from apiManager.ts
    setupEventListeners() {
        const eventToHandlerBinding = {
            [util_2.NetworkEvents.ComponentValueSet]: this.handleComponentValueSet.bind(this),
            [util_2.NetworkEvents.EntityRemoved]: this.handleEntityRemoved.bind(this),
        };
        (0, util_1.bindEventListenerToHandlers)(util_2.NetworkEvents, this.emitter, eventToHandlerBinding);
    }
}
exports.GameStateCore = GameStateCore;
exports.default = GameStateCore;
(0, mobx_1.configure)({
    enforceActions: 'never',
});
//# sourceMappingURL=gameStateCore.js.map