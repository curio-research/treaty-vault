"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameManagerCore = void 0;
const deployment_1 = require("./../types/deployment");
const events_1 = require("events");
const gameStateCore_1 = __importDefault(require("./gameStateCore"));
const networkEngineCore_1 = __importDefault(require("./networkEngineCore"));
const apiManagerCore_1 = __importDefault(require("./apiManagerCore"));
const emitter = new events_1.EventEmitter();
class GameManagerCore {
    // manages single deployment
    constructor(emitter, gameConfig) {
        // main sync game function with the chain state
        this.sync = async () => {
            await this.gameState.fetchSetECSValues();
            console.log(`Finished syncing deployment ${this.deployment.deploymentId}`);
        };
        this.getAddress = () => {
            const address = this.apiManager.networkEngine?.getPubAddr();
            if (address)
                return address;
            return '';
        };
        this.emitter = emitter;
        this.deployment = gameConfig || deployment_1.emptyGameConfig;
        const networkEngine = new networkEngineCore_1.default(gameConfig.network, this.emitter);
        // this should be variable based on network
        networkEngine.setSigner('92db14e403b83dfe3df233f83dfa3a0d7096f21ca9b0d6d6b8d88b2b4ec1564e');
        networkEngine.setDeployment(gameConfig);
        networkEngine.resetSubscribeContractEvents();
        this.apiManager = new apiManagerCore_1.default(networkEngine);
        this.apiManager.initializeApiManager(networkEngine);
        this.gameState = new gameStateCore_1.default(this.emitter, this);
        // sync initialize game state?
        // this.gameState.initializeAll();
    }
}
exports.GameManagerCore = GameManagerCore;
exports.default = GameManagerCore;
//# sourceMappingURL=gameManagerCore.js.map