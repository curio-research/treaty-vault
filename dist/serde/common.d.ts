import { PositionStructOutput } from '../game';
import { BigNumber as BN, BigNumberish } from 'ethers';
import { position } from '../types/common';
export declare const decodePosStr: (pos: string) => position;
export declare const encodePos: (pos: position) => string;
export declare const decodePosition: (pos: PositionStructOutput) => position;
export declare const decodePositions: (positions: PositionStructOutput[]) => position[];
export declare const decodeBNArr: (arr: BN[]) => number[];
export declare const decodeBigNumberishArr: (arr: BigNumberish[]) => number[];
