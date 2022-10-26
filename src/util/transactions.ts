import { Contract } from 'ethers';

export enum ContractMethods {
  initializePlayer = 'initializePlayer',
  foundCity = 'foundCity',
  authorizeGame = 'authorizeGame',
  move = 'move',
  upgradeCityCenter = 'upgradeCityCenter',
  startTroopProduction = 'startTroopProduction',
  endTroopProduction = 'endTroopProduction',
  harvestResourcesFromCity = 'harvestResourcesFromCity',
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

  setComponentValue = 'setComponentValue',
}

export type TxIntent = {
  contract: Contract;
  methodName: string;
  args: unknown[];
};
