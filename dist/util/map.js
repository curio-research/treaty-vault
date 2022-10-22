"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.euclidian = exports.scaleMap = exports.isOdd = exports.isEven = exports.getLargeTilePos = exports.getTileMidPosition = exports.getProperTilePosition = exports.getImmediateSurroundingPositions = exports.getBottomPos = exports.getTopPos = exports.getRightTopPos = exports.getRightPos = exports.getRightBottomPos = exports.getLeftBottomPos = exports.getLeftTopPos = exports.getLeftPos = void 0;
const getLeftPos = (pos, scale) => {
    if (scale)
        return { x: pos.x - scale, y: pos.y };
    return { x: pos.x - 1, y: pos.y };
};
exports.getLeftPos = getLeftPos;
const getLeftTopPos = (pos, scale) => {
    if (scale)
        return { x: pos.x - scale, y: pos.y - scale };
    return { x: pos.x - 1, y: pos.y - 1 };
};
exports.getLeftTopPos = getLeftTopPos;
const getLeftBottomPos = (pos, scale) => {
    if (scale)
        return { x: pos.x - scale, y: pos.y + scale };
    return { x: pos.x - 1, y: pos.y + 1 };
};
exports.getLeftBottomPos = getLeftBottomPos;
const getRightBottomPos = (pos, scale) => {
    if (scale)
        return { x: pos.x + scale, y: pos.y + scale };
    return { x: pos.x + 1, y: pos.y + 1 };
};
exports.getRightBottomPos = getRightBottomPos;
const getRightPos = (pos, scale) => {
    if (scale)
        return { x: pos.x + scale, y: pos.y };
    return { x: pos.x + 1, y: pos.y };
};
exports.getRightPos = getRightPos;
const getRightTopPos = (pos, scale) => {
    if (scale)
        return { x: pos.x + scale, y: pos.y - scale };
    return { x: pos.x + 1, y: pos.y - 1 };
};
exports.getRightTopPos = getRightTopPos;
const getTopPos = (pos, scale) => {
    if (scale)
        return { x: pos.x, y: pos.y - scale };
    return { x: pos.x, y: pos.y - 1 };
};
exports.getTopPos = getTopPos;
const getBottomPos = (pos, scale) => {
    if (scale)
        return { x: pos.x, y: pos.y + scale };
    return { x: pos.x, y: pos.y + 1 };
};
exports.getBottomPos = getBottomPos;
const getImmediateSurroundingPositions = (center) => {
    return [
        (0, exports.getLeftTopPos)(center),
        (0, exports.getLeftPos)(center),
        (0, exports.getLeftBottomPos)(center),
        (0, exports.getBottomPos)(center),
        center,
        (0, exports.getTopPos)(center),
        (0, exports.getRightTopPos)(center),
        (0, exports.getRightPos)(center),
        (0, exports.getRightBottomPos)(center),
    ];
};
exports.getImmediateSurroundingPositions = getImmediateSurroundingPositions;
const getProperTilePosition = (position, tileSize) => {
    return { x: position.x - (position.x % tileSize), y: position.y - (position.y % tileSize) };
};
exports.getProperTilePosition = getProperTilePosition;
const getTileMidPosition = (tilePosition, tileSize) => {
    return { x: tilePosition.x + Math.floor(tileSize / 2), y: tilePosition.y + Math.floor(tileSize / 2) };
};
exports.getTileMidPosition = getTileMidPosition;
const getLargeTilePos = (position, tileSize) => {
    return { x: Math.floor(position.x / tileSize), y: Math.floor(position.y / tileSize) };
};
exports.getLargeTilePos = getLargeTilePos;
const isEven = (number) => {
    if (number % 2 === 0)
        return true;
    return false;
};
exports.isEven = isEven;
const isOdd = (number) => {
    return !(0, exports.isEven)(number);
};
exports.isOdd = isOdd;
// scale a map to absolute coordinates
const scaleMap = (map, tileWidth) => {
    const scaledMap = [...Array(map.length * tileWidth)].map((e) => Array(map[0].length * tileWidth).fill(0));
    for (let i = 0; i < scaledMap.length; i++) {
        for (let j = 0; j < scaledMap[0].length; j++) {
            const properTilePos = (0, exports.getLargeTilePos)({ x: i, y: j }, tileWidth);
            scaledMap[i][j] = map[properTilePos.x][properTilePos.y];
        }
    }
    return scaledMap;
};
exports.scaleMap = scaleMap;
const euclidian = (pos1, pos2) => {
    return Math.floor(Math.sqrt(Math.pow(pos1.x - pos2.x, 2) + Math.pow(pos1.y - pos2.y, 2)));
};
exports.euclidian = euclidian;
//# sourceMappingURL=map.js.map