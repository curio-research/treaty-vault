import { position } from '../../types';
import { EventEmitter } from 'events';

// -----------------------------------------------------------------
// event emitter singleton
// the event emitter relays data from the apiManager (received from on chain events) to rest of the modules such as triggering animations or UI changes

// responsible for emitting events after decoding results from on-chain events
export const emitter = new EventEmitter();

export interface handleNewPlayerPayload {
  player: string;
  position: position;
}

export interface handleBaseCapture {
  player: string;
  armyId: number;
  baseId: number;
}
