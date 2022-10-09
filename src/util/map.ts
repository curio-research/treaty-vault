import { TILE_TYPE } from './../types/deployment';
import { position } from './../types/common';

export const getLeftPos = (pos: position, scale?: number): position => {
  if (scale) return { x: pos.x - scale, y: pos.y };
  return { x: pos.x - 1, y: pos.y };
};

export const getLeftTopPos = (pos: position, scale?: number): position => {
  if (scale) return { x: pos.x - scale, y: pos.y - scale };
  return { x: pos.x - 1, y: pos.y - 1 };
};

export const getLeftBottomPos = (pos: position, scale?: number): position => {
  if (scale) return { x: pos.x - scale, y: pos.y + scale };
  return { x: pos.x - 1, y: pos.y + 1 };
};

export const getRightBottomPos = (pos: position, scale?: number): position => {
  if (scale) return { x: pos.x + scale, y: pos.y + scale };
  return { x: pos.x + 1, y: pos.y + 1 };
};

export const getRightPos = (pos: position, scale?: number): position => {
  if (scale) return { x: pos.x + scale, y: pos.y };
  return { x: pos.x + 1, y: pos.y };
};

export const getRightTopPos = (pos: position, scale?: number): position => {
  if (scale) return { x: pos.x + scale, y: pos.y - scale };
  return { x: pos.x + 1, y: pos.y - 1 };
};

export const getTopPos = (pos: position, scale?: number): position => {
  if (scale) return { x: pos.x, y: pos.y - scale };
  return { x: pos.x, y: pos.y - 1 };
};

export const getBottomPos = (pos: position, scale?: number): position => {
  if (scale) return { x: pos.x, y: pos.y + scale };
  return { x: pos.x, y: pos.y + 1 };
};

export const getImmediateSurroundingPositions = (center: position): position[] => {
  return [
    getLeftTopPos(center),
    getLeftPos(center),
    getLeftBottomPos(center),
    getBottomPos(center),
    center,
    getTopPos(center),
    getRightTopPos(center),
    getRightPos(center),
    getRightBottomPos(center),
  ];
};

export const getProperTilePosition = (position: position, tileSize: number): position => {
  return { x: position.x - (position.x % tileSize), y: position.y - (position.y % tileSize) };
};

export const getLargeTilePos = (position: position, tileSize: number): position => {
  return { x: Math.floor(position.x / tileSize), y: Math.floor(position.y / tileSize) };
};

export const isEven = (number: number): boolean => {
  if (number % 2 === 0) return true;
  return false;
};

export const isOdd = (number: number): boolean => {
  return !isEven(number);
};

// scale a map to absolute coordinates
export const scaleMap = (map: TILE_TYPE[][], tileWidth: number): TILE_TYPE[][] => {
  const scaledMap = [...Array(map.length * tileWidth)].map((e) => Array(map[0].length * tileWidth).fill(0));

  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[0].length; j++) {
      const properTilePos = getLargeTilePos({ x: i, y: j }, tileWidth);
      scaledMap[i][j] = map[properTilePos.x][properTilePos.y];
    }
  }

  return scaledMap;
};

export const euclidian = (pos1: position, pos2: position): number => {
  return Math.floor(Math.sqrt(Math.pow(pos1.x - pos2.x, 2) + Math.pow(pos1.y - pos2.y, 2)));
};
