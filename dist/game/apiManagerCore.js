"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiManagerCore = void 0;
const common_1 = require("../serde/common");
const index_1 = require("./index");
const game_1 = require("../serde/game");
// ------------------------------------------------------------
// the API manager initializes all contracts and is the single point of API contact with the blockchain
// ------------------------------------------------------------
class ApiManagerCore {
    constructor(networkEngine) {
        this.initializeApiManager = async (networkEngine) => {
            this.networkEngine = networkEngine;
        };
        // ------------------------------------------------------------
        // on chain functions
        // ------------------------------------------------------------
        this.createTx = (contractFunc, functionArgs) => {
            const intent = {
                contract: this.networkEngine.contract,
                methodName: contractFunc,
                args: functionArgs,
            };
            return intent;
        };
        // ------------------------------------------------------------
        // contract getters
        // ------------------------------------------------------------
        this.getWorldConstants = async () => {
            return (0, game_1.decodeWorldConstants)(await this.networkEngine.contract.getWorldConstants());
        };
        this.isPlayerInitialized = async (address) => {
            return await this.networkEngine.contract.isPlayerInitialized(address);
        };
        // starts at 1
        this.getComponentById = async (componentId) => {
            const res = await this.networkEngine.contract.getComponentById(componentId);
            return res.toString().toLowerCase();
        };
        this.getAllEntitiesAndRawValues = async (componentAddr) => {
            const componentContract = index_1.Component__factory.connect(componentAddr, this.networkEngine.getSigner());
            const res = (0, index_1.decodeEntitiesAndRawValues)(await componentContract.getAllEntitiesAndValues());
            return res;
        };
        this.getEntities = async () => {
            const res = await this.networkEngine.contract.getEntities();
            return (0, common_1.decodeBigNumberishArr)(res);
        };
        // ------------------------------------------------------------
        // helpers
        // ------------------------------------------------------------
        this.getPubAddr = () => {
            if (!this.networkEngine) {
                throw new Error('Network engine not present');
            }
            else {
                return this.networkEngine.getPubAddr();
            }
        };
        this.networkEngine = networkEngine;
    }
}
exports.ApiManagerCore = ApiManagerCore;
exports.default = ApiManagerCore;
//# sourceMappingURL=apiManagerCore.js.map