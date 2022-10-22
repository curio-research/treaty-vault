"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeBigNumberishArr = exports.decodeBNArr = exports.decodePositions = exports.decodePosition = exports.encodePos = exports.decodePosStr = void 0;
// map util// `1-23` -> {x: 1, y: 23}
const decodePosStr = (pos) => {
    return { x: Number(pos.split('-')[0]), y: Number(pos.split('-')[1]) };
};
exports.decodePosStr = decodePosStr;
const encodePos = (pos) => {
    return `${pos.x}-${pos.y}`;
};
exports.encodePos = encodePos;
const decodePosition = (pos) => {
    return { x: pos.x.toNumber(), y: pos.y.toNumber() };
};
exports.decodePosition = decodePosition;
const decodePositions = (positions) => {
    return positions.map((position) => (0, exports.decodePosition)(position));
};
exports.decodePositions = decodePositions;
const decodeBNArr = (arr) => {
    return arr.map((arr) => arr.toNumber());
};
exports.decodeBNArr = decodeBNArr;
const decodeBigNumberishArr = (arr) => {
    return arr.map((arr) => Number(arr));
};
exports.decodeBigNumberishArr = decodeBigNumberishArr;
//# sourceMappingURL=common.js.map