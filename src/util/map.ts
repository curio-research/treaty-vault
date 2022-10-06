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

export const isEven = (number: number): boolean => {
  if (number % 2 === 0) return true;
  return false;
};

export const isOdd = (number: number): boolean => {
  return !isEven(number);
};
