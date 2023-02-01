import { Contract } from 'ethers';

export enum ContractMethods {
  joinGame = 'joinGame',
  foundCity = 'foundCity',
  authorizeGame = 'authorizeGame',
  move = 'move',
  upgradeCapital = 'upgradeCapital',
  startTroopProduction = 'startTroopProduction',
  stopTroopProduction = 'stopTroopProduction',
  endTroopProduction = 'endTroopProduction',
  harvestResourcesFromCapital = 'harvestResourcesFromCapital',
  harvestResource = 'harvestResource',
  harvestAllResources = 'harvestAllResources',
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
  moveCapital = 'moveCapital',
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
