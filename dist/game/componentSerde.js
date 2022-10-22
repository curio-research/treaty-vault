"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encodePosition = exports.encodeUint256 = exports.encodeString = exports.decodeBoolComp = exports.encodeBoolComp = exports.decodeInt256Comp = exports.encodeInt256Comp = exports.decodeUint256ArrComp = exports.encodeUint256ArrComp = exports.decodeUint256Comp = exports.encodeUint256Comp = exports.decodeAddressComp = exports.encodeAddressComp = exports.decodeStringArrComp = exports.encodeStringArrComp = exports.decodeStringComp = exports.encodeStringComp = exports.decodePositionArrComp = exports.encodePositionArrComp = exports.decodePositionComp = exports.encodePositionComp = exports.decodeEntityRemoved = exports.decodeComponentValueRemoved = exports.decodeComponentValueSet = exports.decodeEntitiesAndRawValues = void 0;
const utils_1 = require("ethers/lib/utils");
const decodeEntitiesAndRawValues = (val) => {
    return {
        entityIds: val[0].map((entityId) => entityId.toNumber()),
        values: val[1],
    };
};
exports.decodeEntitiesAndRawValues = decodeEntitiesAndRawValues;
// ECS base level decoders
const decodeComponentValueSet = (componentName, entity, value) => {
    return {
        componentName: componentName.toString(),
        entity: entity.toNumber(),
        value: value,
    };
};
exports.decodeComponentValueSet = decodeComponentValueSet;
const decodeComponentValueRemoved = (componentName, entity) => {
    return {
        componentName: componentName.toString(),
        entity: entity.toNumber(),
    };
};
exports.decodeComponentValueRemoved = decodeComponentValueRemoved;
const decodeEntityRemoved = (entity) => {
    return {
        entity: entity.toNumber(),
    };
};
exports.decodeEntityRemoved = decodeEntityRemoved;
// base level decoders for bytes data
const encodePositionComp = (position) => {
    return `x:${position.x},y:${position.y}`;
};
exports.encodePositionComp = encodePositionComp;
const decodePositionComp = (bytes) => {
    const decoded = utils_1.defaultAbiCoder.decode(['tuple(uint256,uint256)'], bytes);
    return { x: decoded[0][0].toNumber(), y: decoded[0][1].toNumber() };
};
exports.decodePositionComp = decodePositionComp;
const encodePositionArrComp = (positions) => {
    return 'TODO: array of position';
};
exports.encodePositionArrComp = encodePositionArrComp;
// TODO: not verified
const decodePositionArrComp = (bytes) => {
    const decoded = utils_1.defaultAbiCoder.decode(['tuple(uint256,uint256)[]'], bytes);
    return decoded[0].map((pos) => ({ x: pos[0].toNumber(), y: pos[1].toNumber() }));
};
exports.decodePositionArrComp = decodePositionArrComp;
const encodeStringComp = (string) => {
    return string;
};
exports.encodeStringComp = encodeStringComp;
const decodeStringComp = (bytes) => {
    const decoded = utils_1.defaultAbiCoder.decode(['string'], bytes);
    return decoded[0];
};
exports.decodeStringComp = decodeStringComp;
const encodeStringArrComp = (srings) => {
    return 'TODO: string array';
};
exports.encodeStringArrComp = encodeStringArrComp;
const decodeStringArrComp = (bytes) => {
    const decoded = utils_1.defaultAbiCoder.decode(['string[]'], bytes);
    return decoded[0];
};
exports.decodeStringArrComp = decodeStringArrComp;
const encodeAddressComp = (address) => {
    return address;
};
exports.encodeAddressComp = encodeAddressComp;
const decodeAddressComp = (bytes) => {
    const decoded = utils_1.defaultAbiCoder.decode(['address'], bytes);
    return decoded[0].toLowerCase();
};
exports.decodeAddressComp = decodeAddressComp;
const encodeUint256Comp = (number) => {
    return number.toString();
};
exports.encodeUint256Comp = encodeUint256Comp;
const decodeUint256Comp = (bytes) => {
    const decoded = utils_1.defaultAbiCoder.decode(['uint256'], bytes);
    return decoded[0].toNumber();
};
exports.decodeUint256Comp = decodeUint256Comp;
const encodeUint256ArrComp = (numbers) => {
    return `TODO: uint256 array`;
};
exports.encodeUint256ArrComp = encodeUint256ArrComp;
const decodeUint256ArrComp = (bytes) => {
    const decoded = utils_1.defaultAbiCoder.decode(['uint256[]'], bytes);
    return decoded[0].map((val) => val.toNumber());
};
exports.decodeUint256ArrComp = decodeUint256ArrComp;
const encodeInt256Comp = (number) => {
    return number.toString();
};
exports.encodeInt256Comp = encodeInt256Comp;
const decodeInt256Comp = (bytes) => {
    const decoded = utils_1.defaultAbiCoder.decode(['int256'], bytes);
    return decoded[0].toNumber();
};
exports.decodeInt256Comp = decodeInt256Comp;
const encodeBoolComp = (boolean) => {
    return boolean ? 'true' : 'false';
};
exports.encodeBoolComp = encodeBoolComp;
const decodeBoolComp = (bytes) => {
    const decoded = utils_1.defaultAbiCoder.decode(['bool'], bytes);
    return decoded[0];
};
exports.decodeBoolComp = decodeBoolComp;
//
const encodeString = (string) => {
    return utils_1.defaultAbiCoder.encode(['string'], [string]);
};
exports.encodeString = encodeString;
const encodeUint256 = (num) => {
    return utils_1.defaultAbiCoder.encode(['uint256'], [num]);
};
exports.encodeUint256 = encodeUint256;
const encodePosition = (pos) => {
    return utils_1.defaultAbiCoder.encode(['tuple(uint256 x,uint256 y)'], [pos]); // BUG
};
exports.encodePosition = encodePosition;
//# sourceMappingURL=componentSerde.js.map