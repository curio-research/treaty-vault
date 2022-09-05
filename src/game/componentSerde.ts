import { BigNumber as BN } from "ethers";
import { Result } from "@ethersproject/abi";
import { position } from "../types";
import { handleComponentValueSet, handleComponentValueRemoved } from "./types/component";
import { defaultAbiCoder as abi } from "ethers/lib/utils";

export const decodeEntitiesAndRawValues = (val: [BN[], string[]]): any => {
  return { entityIds: val[0].map((entityId) => entityId.toNumber()), values: val[1] };
};

// ECS base level decoders

export const decodeComponentValueSet = (componentName: string, entity: BN, value: string): handleComponentValueSet => {
  return {
    componentName: componentName.toString(),
    entity: entity.toNumber(),
    value: value,
  };
};

export const decodeComponentValueRemoved = (componentName: string, entity: BN): handleComponentValueRemoved => {
  return {
    componentName: componentName.toString(),
    entity: entity.toNumber(),
  };
};

// base level decoders for bytes data

export const encodePositionComp = (position: position): string => {
  return `x:${position.x},y:${position.y}`;
};

export const decodePositionComp = (bytes: string): position => {
  const decoded = abi.decode(["uint256", "uint256"], bytes);
  return { x: decoded[0].toNumber(), y: decoded[1].toNumber() };
};

export const encodeStringComp = (string: string): string => {
  return string;
};

export const decodeStringComp = (bytes: string): string => {
  const decoded: Result = abi.decode(["string"], bytes);
  return decoded[0];
};

export const encodeAddressComp = (address: string) => {
  return address;
};

export const decodeAddressComp = (bytes: string): string => {
  const decoded = abi.decode(["address"], bytes);
  return decoded[0];
};

export const encodeUint256Comp = (number: number): string => {
  return number.toString();
};

export const decodeUint256Comp = (bytes: string): number => {
  const decoded = abi.decode(["uint256"], bytes);
  return decoded[0].toNumber();
};

export const encodeInt256Comp = (number: number): string => {
  return number.toString();
};

export const decodeInt256Comp = (bytes: string): number => {
  const decoded = abi.decode(["int256"], bytes);
  return decoded[0].toNumber();
};

export const encodeBoolComp = (boolean: boolean): string => {
  return boolean ? "true" : "false";
};

export const decodeBoolComp = (bytes: string): number => {
  const decoded = abi.decode(["bool"], bytes);
  return decoded[0];
};

export type ComponentValueTypes = position | string | number;
