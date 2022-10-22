"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Curio__factory = exports.DiamondInit__factory = exports.UintComponent__factory = exports.UintArrayComponent__factory = exports.StringComponent__factory = exports.PositionComponent__factory = exports.IntComponent__factory = exports.BoolComponent__factory = exports.AddressComponent__factory = exports.Set__factory = exports.NATO__factory = exports.UintBoolMapping__factory = exports.LibDiamond__factory = exports.GameLib__factory = exports.ECSLib__factory = exports.IERC173__factory = exports.IERC165__factory = exports.IDiamondLoupe__factory = exports.IDiamondCut__factory = exports.OwnershipFacet__factory = exports.GetterFacet__factory = exports.GameFacet__factory = exports.DiamondLoupeFacet__factory = exports.DiamondCutFacet__factory = exports.AdminFacet__factory = exports.Diamond__factory = exports.Component__factory = exports.factories = void 0;
exports.factories = __importStar(require("./factories"));
var Component__factory_1 = require("./factories/contracts/Component__factory");
Object.defineProperty(exports, "Component__factory", { enumerable: true, get: function () { return Component__factory_1.Component__factory; } });
var Diamond__factory_1 = require("./factories/contracts/Diamond__factory");
Object.defineProperty(exports, "Diamond__factory", { enumerable: true, get: function () { return Diamond__factory_1.Diamond__factory; } });
var AdminFacet__factory_1 = require("./factories/contracts/facets/AdminFacet__factory");
Object.defineProperty(exports, "AdminFacet__factory", { enumerable: true, get: function () { return AdminFacet__factory_1.AdminFacet__factory; } });
var DiamondCutFacet__factory_1 = require("./factories/contracts/facets/DiamondCutFacet__factory");
Object.defineProperty(exports, "DiamondCutFacet__factory", { enumerable: true, get: function () { return DiamondCutFacet__factory_1.DiamondCutFacet__factory; } });
var DiamondLoupeFacet__factory_1 = require("./factories/contracts/facets/DiamondLoupeFacet__factory");
Object.defineProperty(exports, "DiamondLoupeFacet__factory", { enumerable: true, get: function () { return DiamondLoupeFacet__factory_1.DiamondLoupeFacet__factory; } });
var GameFacet__factory_1 = require("./factories/contracts/facets/GameFacet__factory");
Object.defineProperty(exports, "GameFacet__factory", { enumerable: true, get: function () { return GameFacet__factory_1.GameFacet__factory; } });
var GetterFacet__factory_1 = require("./factories/contracts/facets/GetterFacet__factory");
Object.defineProperty(exports, "GetterFacet__factory", { enumerable: true, get: function () { return GetterFacet__factory_1.GetterFacet__factory; } });
var OwnershipFacet__factory_1 = require("./factories/contracts/facets/OwnershipFacet__factory");
Object.defineProperty(exports, "OwnershipFacet__factory", { enumerable: true, get: function () { return OwnershipFacet__factory_1.OwnershipFacet__factory; } });
var IDiamondCut__factory_1 = require("./factories/contracts/interfaces/IDiamondCut__factory");
Object.defineProperty(exports, "IDiamondCut__factory", { enumerable: true, get: function () { return IDiamondCut__factory_1.IDiamondCut__factory; } });
var IDiamondLoupe__factory_1 = require("./factories/contracts/interfaces/IDiamondLoupe__factory");
Object.defineProperty(exports, "IDiamondLoupe__factory", { enumerable: true, get: function () { return IDiamondLoupe__factory_1.IDiamondLoupe__factory; } });
var IERC165__factory_1 = require("./factories/contracts/interfaces/IERC165__factory");
Object.defineProperty(exports, "IERC165__factory", { enumerable: true, get: function () { return IERC165__factory_1.IERC165__factory; } });
var IERC173__factory_1 = require("./factories/contracts/interfaces/IERC173__factory");
Object.defineProperty(exports, "IERC173__factory", { enumerable: true, get: function () { return IERC173__factory_1.IERC173__factory; } });
var ECSLib__factory_1 = require("./factories/contracts/libraries/ECSLib__factory");
Object.defineProperty(exports, "ECSLib__factory", { enumerable: true, get: function () { return ECSLib__factory_1.ECSLib__factory; } });
var GameLib__factory_1 = require("./factories/contracts/libraries/GameLib__factory");
Object.defineProperty(exports, "GameLib__factory", { enumerable: true, get: function () { return GameLib__factory_1.GameLib__factory; } });
var LibDiamond__factory_1 = require("./factories/contracts/libraries/LibDiamond__factory");
Object.defineProperty(exports, "LibDiamond__factory", { enumerable: true, get: function () { return LibDiamond__factory_1.LibDiamond__factory; } });
var UintBoolMapping__factory_1 = require("./factories/contracts/Mapping.sol/UintBoolMapping__factory");
Object.defineProperty(exports, "UintBoolMapping__factory", { enumerable: true, get: function () { return UintBoolMapping__factory_1.UintBoolMapping__factory; } });
var NATO__factory_1 = require("./factories/contracts/NATO__factory");
Object.defineProperty(exports, "NATO__factory", { enumerable: true, get: function () { return NATO__factory_1.NATO__factory; } });
var Set__factory_1 = require("./factories/contracts/Set__factory");
Object.defineProperty(exports, "Set__factory", { enumerable: true, get: function () { return Set__factory_1.Set__factory; } });
var AddressComponent__factory_1 = require("./factories/contracts/TypedComponents.sol/AddressComponent__factory");
Object.defineProperty(exports, "AddressComponent__factory", { enumerable: true, get: function () { return AddressComponent__factory_1.AddressComponent__factory; } });
var BoolComponent__factory_1 = require("./factories/contracts/TypedComponents.sol/BoolComponent__factory");
Object.defineProperty(exports, "BoolComponent__factory", { enumerable: true, get: function () { return BoolComponent__factory_1.BoolComponent__factory; } });
var IntComponent__factory_1 = require("./factories/contracts/TypedComponents.sol/IntComponent__factory");
Object.defineProperty(exports, "IntComponent__factory", { enumerable: true, get: function () { return IntComponent__factory_1.IntComponent__factory; } });
var PositionComponent__factory_1 = require("./factories/contracts/TypedComponents.sol/PositionComponent__factory");
Object.defineProperty(exports, "PositionComponent__factory", { enumerable: true, get: function () { return PositionComponent__factory_1.PositionComponent__factory; } });
var StringComponent__factory_1 = require("./factories/contracts/TypedComponents.sol/StringComponent__factory");
Object.defineProperty(exports, "StringComponent__factory", { enumerable: true, get: function () { return StringComponent__factory_1.StringComponent__factory; } });
var UintArrayComponent__factory_1 = require("./factories/contracts/TypedComponents.sol/UintArrayComponent__factory");
Object.defineProperty(exports, "UintArrayComponent__factory", { enumerable: true, get: function () { return UintArrayComponent__factory_1.UintArrayComponent__factory; } });
var UintComponent__factory_1 = require("./factories/contracts/TypedComponents.sol/UintComponent__factory");
Object.defineProperty(exports, "UintComponent__factory", { enumerable: true, get: function () { return UintComponent__factory_1.UintComponent__factory; } });
var DiamondInit__factory_1 = require("./factories/contracts/upgradeInitializers/DiamondInit__factory");
Object.defineProperty(exports, "DiamondInit__factory", { enumerable: true, get: function () { return DiamondInit__factory_1.DiamondInit__factory; } });
var Curio__factory_1 = require("./factories/hardhat-diamond-abi/Curio__factory");
Object.defineProperty(exports, "Curio__factory", { enumerable: true, get: function () { return Curio__factory_1.Curio__factory; } });
//# sourceMappingURL=index.js.map