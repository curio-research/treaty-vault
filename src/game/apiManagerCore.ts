import { WorldConstants } from '../types/map';
import { decodeBigNumberishArr } from '../serde/common';
import { decodeEntitiesAndRawValues, Component__factory } from './index';
import { makeObservable, observable } from 'mobx';
import { decodeWorldConstants } from '../serde/game';
import { TxIntent, ContractMethods } from '../util/transactions';
import NetworkEngineCore from './networkEngineCore';

// ------------------------------------------------------------
// the API manager initializes all contracts and is the single point of API contact with the blockchain
// ------------------------------------------------------------

export class ApiManagerCore {
  public networkEngine: NetworkEngineCore; // maintains connection with the chainzz

  constructor(networkEngine: NetworkEngineCore) {
    this.networkEngine = networkEngine;
  }

  public initializeApiManager = async (networkEngine: NetworkEngineCore): Promise<void> => {
    this.networkEngine = networkEngine;
  };

  // ------------------------------------------------------------
  // on chain functions
  // ------------------------------------------------------------

  public createTx = (contractFunc: ContractMethods, functionArgs: any[]): TxIntent => {
    const intent: TxIntent = {
      contract: this.networkEngine.contract,
      methodName: contractFunc,
      args: functionArgs,
    };

    return intent;
  };

  // ------------------------------------------------------------
  // contract getters
  // ------------------------------------------------------------

  public getWorldConstants = async (): Promise<WorldConstants> => {
    return decodeWorldConstants(await this.networkEngine!.contract!.getWorldConstants());
  };

  public isPlayerInitialized = async (address: string): Promise<boolean> => {
    return await this.networkEngine!.contract!.isPlayerInitialized(address);
  };

  // starts at 1
  public getComponentById = async (componentId: number): Promise<string> => {
    const res = await this.networkEngine!.contract!.getComponentById(componentId);
    return res.toString().toLowerCase();
  };

  public getAllEntitiesAndRawValues = async (componentAddr: string) => {
    const componentContract = Component__factory.connect(componentAddr, this.networkEngine!.getSigner());
    const res = decodeEntitiesAndRawValues(await componentContract.getAllEntitiesAndValues());

    return res;
  };

  public getEntities = async (): Promise<number[]> => {
    const res = await this.networkEngine!.contract!.getEntities();
    return decodeBigNumberishArr(res);
  };

  // ------------------------------------------------------------
  // helpers
  // ------------------------------------------------------------

  public getPubAddr = (): string => {
    if (!this.networkEngine) {
      throw new Error('Network engine not present');
    } else {
      return this.networkEngine.getPubAddr();
    }
  };
}

export default ApiManagerCore;
