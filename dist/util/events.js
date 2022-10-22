"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bindEventListenerToHandlers = exports.NetworkEvents = void 0;
var NetworkEvents;
(function (NetworkEvents) {
    NetworkEvents["ComponentValueSet"] = "ComponentValueSet";
    NetworkEvents["ComponentValueRemoved"] = "ComponentValueRemoved";
    NetworkEvents["EntityRemoved"] = "EntityRemoved";
    NetworkEvents["NewPlayer"] = "NewPlayer";
})(NetworkEvents = exports.NetworkEvents || (exports.NetworkEvents = {}));
const bindEventListenerToHandlers = (eventNames, emitter, bindedFunctions) => {
    for (const item in eventNames) {
        emitter.on(item, (args) => {
            if (bindedFunctions[item]) {
                bindedFunctions[item](args || null);
            }
        });
    }
};
exports.bindEventListenerToHandlers = bindEventListenerToHandlers;
//# sourceMappingURL=events.js.map