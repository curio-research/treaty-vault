import { Contract } from 'ethers';

export enum ContractMethods {
  initializeNation = 'initializeNation',
  foundCity = 'foundCity',
  authorizeGame = 'authorizeGame',
  move = 'move',
  upgradeNation = 'upgradeNation',
  startTroopProduction = 'startTroopProduction',
  endTroopProduction = 'endTroopProduction',
  harvestResourcesFromCapital = 'harvestResourcesFromCapital',
  harvestResource = 'harvestResource',
  harvestResources = 'harvestResources',
  organizeArmy = 'organizeArmy',
  march = 'march',
  battle = 'battle',
  endBattle = 'endBattle',
  packCity = 'packCity',
  disbandArmy = 'disbandArmy',
  startGather = 'startGather',
  endGather = 'endGather',
  claimTile = 'claimTile',
  upgradeResource = 'upgradeResource',
  upgradeTile = 'upgradeTile',
  unloadResources = 'unloadResources',
  moveCityCenter = 'moveCityCenter',
  disownTile = 'disownTile',
  recoverTile = 'recoverTile',
  delegateGameFunction = 'delegateGameFunction',

  setComponentValue = 'setComponentValue',
}

export type TxIntent = {
  contract: Contract;
  methodName: string;
  args: unknown[];
};
