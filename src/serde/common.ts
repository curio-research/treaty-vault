import { PositionStructOutput } from '../game';
import { BigNumber as BN, BigNumberish } from 'ethers';
import { position } from '../types/common';

// map util// `1-23` -> {x: 1, y: 23}
export const decodePosStr = (pos: string): position => {
  return { x: Number(pos.split('-')[0]), y: Number(pos.split('-')[1]) };
};

export const encodePos = (pos: position): string => {
  return `${pos.x}-${pos.y}`;
};

export const decodePosition = (pos: PositionStructOutput): position => {
  return { x: pos.x.toNumber(), y: pos.y.toNumber() };
};

export const decodePositions = (positions: PositionStructOutput[]): position[] => {
  return positions.map((position) => decodePosition(position));
};

export const decodeBNArr = (arr: BN[]): number[] => {
  return arr.map((arr) => arr.toNumber());
};

export const decodeBigNumberishArr = (arr: BigNumberish[]): number[] => {
  return arr.map((arr) => Number(arr));
};
