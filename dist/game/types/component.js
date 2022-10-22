"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emitter = void 0;
const events_1 = require("events");
// -----------------------------------------------------------------
// event emitter singleton
// the event emitter relays data from the apiManager (received from on chain events) to rest of the modules such as triggering animations or UI changes
// responsible for emitting events after decoding results from on-chain events
exports.emitter = new events_1.EventEmitter();
//# sourceMappingURL=component.js.map