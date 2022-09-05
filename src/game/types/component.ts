import { position } from "../../types";
import { EventEmitter } from "events";

// -----------------------------------------------------------------
// event emitter singleton
// the event emitter relays data from the apiManager (received from on chain events) to rest of the modules such as triggering animations or UI changes

// responsible for emitting events after decoding results from on-chain events
export const emitter = new EventEmitter();

// ui related events
export enum Events {
  ChangeUISelection = "ChangeUISelection",
  ZoomPosition = "ZoomPosition",
  TroopSelected = "TroopSelected",
  HoverEnterExitTroop = "HoverEnterExitTroop",
  NextAutomove = "NextAutomove",
  ClickedPosition = "ClickedPosition",
  TxMoveStarted = "TxMoveStarted",
  TxMoveEnded = "TxMoveEnded",
  TxMoveFailed = "TxMoveFailed",
  AutomovePathPlanned = "AutomovePathPlanned",
  AutomovePathCancelled = "AutomovePathCancelled",

  // animations
  addAnimationHighlightTileFlash = "addAnimationHighlightTileFlash",
  addAnimationExplosion = "addAnimationExplosion",

  // on chain events
  ComponentValueSet = "ComponentValueSet",
  ComponentValueRemoved = "ComponentValueRemoved",
  NewPlayer = "NewPlayer",
}

export type EventHandlers = Record<string, any>;

// on-chain events' event handler types ---------------------------------

export interface handleComponentValueSet {
  componentName: string;
  entity: number;
  value: string;
}

export interface handleComponentValueRemoved {
  componentName: string;
  entity: number;
}

export interface handleNewPlayerPayload {
  player: string;
  position: position;
}

export interface handleBaseCapture {
  player: string;
  armyId: number;
  baseId: number;
}

// UI event emitters ---------------------------------

export interface handleTxMoveStartedPayload {
  armyId: number;
  position: position;
}

export interface handleAutomovePathPlanned {
  entityId: number;
}

export interface handleAutomovePathCancelled {
  entityId: number;
}

export interface handleTxMoveEndedPayload {
  entityId: number;
  position: position;
}

export interface handleTxMoveFailedPayload {
  entityId: number;
  position: position;
}

export interface handleQueueAutomove {
  entityId: number;
}

export interface handleZoomLocation {
  position: position;
}

export interface handleFlashHighlightTile {
  position: position;
}
