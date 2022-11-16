import { emptyGameConfig } from './../types/deployment';
import { EventEmitter } from 'events';
import { GameConfig } from '../types';
import GameStateCore from './gameStateCore';
import NetworkEngine from './networkEngineCore';
import ApiManager from './apiManagerCore';

const emitter = new EventEmitter();

export class GameManagerCore {
  deployment: GameConfig; // deployment information
  gameState: GameStateCore | any; // stores game state
  apiManager: ApiManager; // manages game connection
  emitter: EventEmitter; // event emitter for on-chain events

  // manages single deployment
  constructor(emitter: EventEmitter, gameConfig: GameConfig) {
    this.emitter = emitter;
    this.deployment = gameConfig || emptyGameConfig;

    const networkEngine = new NetworkEngine(gameConfig.network, this.emitter);

    // this should be variable based on network
    networkEngine.setSigner('92db14e403b83dfe3df233f83dfa3a0d7096f21ca9b0d6d6b8d88b2b4ec1564e');
    networkEngine.setDeployment(gameConfig);
    networkEngine.resetSubscribeContractEvents();

    this.apiManager = new ApiManager(networkEngine);
    this.apiManager.initializeApiManager(networkEngine);

    this.gameState = new GameStateCore(this.emitter, this);

    // sync initialize game state?
    // this.gameState.initializeAll();
  }

  // main sync game function with the chain state
  public sync = async () => {
    await this.gameState.fetchSetECSValues();
    console.log(`Finished syncing deployment ${this.deployment.deploymentId}`);
  };

  public getAddress = (): string => {
    const address = this.apiManager.networkEngine?.getPubAddr();
    if (address) return address;
    return '';
  };
}

export default GameManagerCore;
