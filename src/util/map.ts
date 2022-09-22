import { position } from './../types/common';

export const getLeftPos = (pos: position): position => {
  return { x: pos.x - 1, y: pos.y };
};

export const getLeftTopPos = (pos: position): position => {
  return { x: pos.x - 1, y: pos.y - 1 };
};

export const getLeftBottomPos = (pos: position): position => {
  return { x: pos.x - 1, y: pos.y + 1 };
};

export const getRightBottomPos = (pos: position): position => {
  return { x: pos.x + 1, y: pos.y + 1 };
};

export const getRightPos = (pos: position): position => {
  return { x: pos.x + 1, y: pos.y };
};

export const getRightTopPos = (pos: position): position => {
  return { x: pos.x + 1, y: pos.y - 1 };
};

export const getTopPos = (pos: position): position => {
  return { x: pos.x, y: pos.y - 1 };
};

export const getBottomPos = (pos: position): position => {
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
