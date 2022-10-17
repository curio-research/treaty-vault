import { Contract } from 'ethers';

export enum ContractMethods {
  initializePlayer = 'initializePlayer',
  foundCity = 'foundCity',

  authorizeGame = 'authorizeGame',
  move = 'move',
  upgradeCity = 'upgradeCity',
  startTroopProduction = 'startTroopProduction',
  endTroopProduction = 'endTroopProduction',
  harvestResourcesFromCity = 'harvestResourcesFromCity',
  harvestResource = 'harvestResource',
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
}

export type TxIntent = {
  contract: Contract;
  methodName: string;
  args: unknown[];
};
