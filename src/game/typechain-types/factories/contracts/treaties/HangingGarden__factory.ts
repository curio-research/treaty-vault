/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  HangingGarden,
  HangingGardenInterface,
} from "../../../contracts/treaties/HangingGarden";

const _abi = [
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_owners",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "_diamond",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_homieFee",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "contract AdminFacet",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_nationID",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_encodedParams",
        type: "bytes",
      },
    ],
    name: "approveBattle",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_nationID",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_encodedParams",
        type: "bytes",
      },
    ],
    name: "approveClaimTile",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_nationID",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_encodedParams",
        type: "bytes",
      },
    ],
    name: "approveDelegateGameFunction",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_nationID",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_encodedParams",
        type: "bytes",
      },
    ],
    name: "approveDisbandArmy",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_nationID",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_encodedParams",
        type: "bytes",
      },
    ],
    name: "approveDisownTile",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_nationID",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_encodedParams",
        type: "bytes",
      },
    ],
    name: "approveEndGather",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_nationID",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_encodedParams",
        type: "bytes",
      },
    ],
    name: "approveEndTroopProduction",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_nationID",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_encodedParams",
        type: "bytes",
      },
    ],
    name: "approveHarvestResource",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_nationID",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_encodedParams",
        type: "bytes",
      },
    ],
    name: "approveHarvestResourcesFromCapital",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_nationID",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_encodedParams",
        type: "bytes",
      },
    ],
    name: "approveJoinTreaty",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_nationID",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_encodedParams",
        type: "bytes",
      },
    ],
    name: "approveLeaveTreaty",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_nationID",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_encodedParams",
        type: "bytes",
      },
    ],
    name: "approveMove",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_armyAddress",
        type: "address",
      },
    ],
    name: "approveMove",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_nationID",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_encodedParams",
        type: "bytes",
      },
    ],
    name: "approveMoveCapital",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_nationID",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_encodedParams",
        type: "bytes",
      },
    ],
    name: "approveOrganizeArmy",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_nationID",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_encodedParams",
        type: "bytes",
      },
    ],
    name: "approveRecoverTile",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_nationID",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_encodedParams",
        type: "bytes",
      },
    ],
    name: "approveStartGather",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_nationID",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_encodedParams",
        type: "bytes",
      },
    ],
    name: "approveStartTroopProduction",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_nationID",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_encodedParams",
        type: "bytes",
      },
    ],
    name: "approveUnloadResources",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_nationID",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_encodedParams",
        type: "bytes",
      },
    ],
    name: "approveUpgradeCapital",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_nationID",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_encodedParams",
        type: "bytes",
      },
    ],
    name: "approveUpgradeResource",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_nationID",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_encodedParams",
        type: "bytes",
      },
    ],
    name: "approveUpgradeTile",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_armyAddress",
        type: "address",
      },
    ],
    name: "becomeAHomie",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "description",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "diamond",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "executeGameTx",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_contractAddress",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "executeTx",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "game",
    outputs: [
      {
        internalType: "contract GameFacet",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getter",
    outputs: [
      {
        internalType: "contract GetterFacet",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "homieFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "homies",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isHomie",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isOwner",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "owners",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_functionName",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_subjectID",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_canCall",
        type: "bool",
      },
    ],
    name: "treatyDelegateGameFunction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "treatyJoin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "treatyLeave",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620015d6380380620015d6833981016040819052620000349162000441565b816001600160a01b0381166200009f5760405162461bcd60e51b815260206004820152602560248201527f437572696f5472656174793a204469616d6f6e642061646472657373207265716044820152641d5a5c995960da1b60648201526084015b60405180910390fd5b600080546001600160a01b039092166001600160a01b0319928316811790915560018054831682179055600280548316821790556003805490921617905582516200012d5760405162461bcd60e51b815260206004820152601660248201527f57616c6c6574206f776e65727320726571756972656400000000000000000000604482015260640162000096565b60005b8351811015620002f357600084828151811062000151576200015162000530565b6020026020010151905060006001600160a01b0316816001600160a01b031603620001bf5760405162461bcd60e51b815260206004820152601460248201527f496e76616c69642077616c6c6574206f776e6572000000000000000000000000604482015260640162000096565b6001600160a01b03811660009081526009602052604090205460ff16156200022a5760405162461bcd60e51b815260206004820152601760248201527f57616c6c6574206f776e6572206e6f7420756e69717565000000000000000000604482015260640162000096565b6001600160a01b031660008181526009602090815260408083208054600160ff199182168117909255600680548084019091557ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f0180546001600160a01b03199081168817909155600a909452918420805490921681179091556007805491820181559092527fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c6889091018054909116909117905580620002ea8162000546565b91505062000130565b5060408051808201909152600d8082526c2430b733b4b733a3b0b93232b760991b60209092019182526200032a9160049162000368565b506040518060600160405280602c8152602001620015aa602c913980516200035b9160059160209091019062000368565b5060085550620005aa9050565b82805462000376906200056e565b90600052602060002090601f0160209004810192826200039a5760008555620003e5565b82601f10620003b557805160ff1916838001178555620003e5565b82800160010185558215620003e5579182015b82811115620003e5578251825591602001919060010190620003c8565b50620003f3929150620003f7565b5090565b5b80821115620003f35760008155600101620003f8565b634e487b7160e01b600052604160045260246000fd5b80516001600160a01b03811681146200043c57600080fd5b919050565b6000806000606084860312156200045757600080fd5b83516001600160401b03808211156200046f57600080fd5b818601915086601f8301126200048457600080fd5b81516020828211156200049b576200049b6200040e565b8160051b604051601f19603f83011681018181108682111715620004c357620004c36200040e565b60405292835281830193508481018201928a841115620004e257600080fd5b948201945b838610156200050b57620004fb8662000424565b85529482019493820193620004e7565b97506200051c905088820162000424565b955050505050604084015190509250925092565b634e487b7160e01b600052603260045260246000fd5b6000600182016200056757634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c908216806200058357607f821691505b602082108103620005a457634e487b7160e01b600052602260045260246000fd5b50919050565b610ff080620005ba6000396000f3fe608060405234801561001057600080fd5b50600436106102ac5760003560e01c806360acfcc61161017b578063e12d6661116100d8578063f0b7db4e1161008c578063f851a44011610071578063f851a44014610441578063fa91f75e146102b1578063fac5e9811461045457600080fd5b8063f0b7db4e1461042e578063f2e1730b146102b157600080fd5b8063e75991fa116100bd578063e75991fa146102b1578063e8661bb914610417578063ec19ae80146102b157600080fd5b8063e12d6661146103eb578063e534ae5f146102b157600080fd5b80639bcecd0b1161012f578063c009a6cb11610114578063c009a6cb146102b1578063c3fe3e28146103d8578063cbb34e86146102b157600080fd5b80639bcecd0b146102b1578063a83280bc146102b157600080fd5b80637284e416116101605780637284e416146103aa578063993a04b7146103b257806399ba7cdf146103c557600080fd5b806360acfcc6146102b15780636a2a2b4e146102b157600080fd5b80632d47fe271161022957806339ebfad4116101dd5780634ad30a91116101c25780634ad30a91146102b15780635829915d146103875780635f310b12146102b157600080fd5b806339ebfad4146102b157806347b958a61461037f57600080fd5b80632f54bf6e1161020e5780632f54bf6e1461034957806330d6d28e1461036c57806337415516146102b157600080fd5b80632d47fe27146102b15780632efd66291461033657600080fd5b80631c3571731161028057806327a1ed1a1161026557806327a1ed1a1461031957806328f59b831461032c5780632b451c64146102b157600080fd5b80631c357173146102b1578063243086c4146102b157600080fd5b8062048f5a146102b1578063025e7c27146102d957806304dc7c74146102b157806306fdde0314610304575b600080fd5b6102c46102bf366004610d0e565b610467565b60405190151581526020015b60405180910390f35b6102ec6102e7366004610d55565b6104d0565b6040516001600160a01b0390911681526020016102d0565b61030c6104fa565b6040516102d09190610dca565b6102ec610327366004610d55565b610588565b610334610598565b005b610334610344366004610ddd565b610680565b6102c4610357366004610e69565b60096020526000908152604090205460ff1681565b61033461037a366004610e86565b610775565b61033461086d565b6102c4610395366004610e69565b600a6020526000908152604090205460ff1681565b61030c610967565b6002546102ec906001600160a01b031681565b6103346103d3366004610e69565b610974565b6001546102ec906001600160a01b031681565b6102c46103f9366004610e69565b6001600160a01b03166000908152600a602052604090205460ff1690565b61042060085481565b6040519081526020016102d0565b6000546102ec906001600160a01b031681565b6003546102ec906001600160a01b031681565b610334610462366004610ec3565b610bd3565b600080546001600160a01b031633146104c75760405162461bcd60e51b815260206004820152601f60248201527f437572696f5472656174793a204f6e6c792067616d652063616e2063616c6c0060448201526064015b60405180910390fd5b50600192915050565b600681815481106104e057600080fd5b6000918252602090912001546001600160a01b0316905081565b6004805461050790610efd565b80601f016020809104026020016040519081016040528092919081815260200182805461053390610efd565b80156105805780601f1061055557610100808354040283529160200191610580565b820191906000526020600020905b81548152906001019060200180831161056357829003601f168201915b505050505081565b600781815481106104e057600080fd5b60025460405163b356003960e01b81523360048201526000916001600160a01b03169063b356003990602401602060405180830381865afa1580156105e1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106059190610f37565b6003546040517f5ffde144000000000000000000000000000000000000000000000000000000008152600481018390529192506001600160a01b031690635ffde14490602401600060405180830381600087803b15801561066557600080fd5b505af1158015610679573d6000803e3d6000fd5b5050505050565b60025460405163b356003960e01b81523360048201526000916001600160a01b03169063b356003990602401602060405180830381865afa1580156106c9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106ed9190610f37565b6003546040517f6dd00e8a0000000000000000000000000000000000000000000000000000000081529192506001600160a01b031690636dd00e8a9061073d908490889088908890600401610f50565b600060405180830381600087803b15801561075757600080fd5b505af115801561076b573d6000803e3d6000fd5b5050505050505050565b3360009081526009602052604090205460ff166107e25760405162461bcd60e51b815260206004820152602560248201527f596f7520646f206e6f7420686176652061636365737320746f20746869732077604482015264185b1b195d60da1b60648201526084016104be565b6001546040516001600160a01b039091169060009081908390610806908690610f81565b6000604051808303816000865af19150503d8060008114610843576040519150601f19603f3d011682016040523d82523d6000602084013e610848565b606091505b50915091508181906106795760405162461bcd60e51b81526004016104be9190610dca565b60025460405163b356003960e01b81523360048201526000916001600160a01b03169063b356003990602401602060405180830381865afa1580156108b6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108da9190610f37565b6003546040517fff2a5e79000000000000000000000000000000000000000000000000000000008152600481018390529192506001600160a01b03169063ff2a5e79906024016020604051808303816000875af115801561093f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109639190610f37565b5050565b6005805461050790610efd565b6002546040517f381c4fce0000000000000000000000000000000000000000000000000000000081526000916001600160a01b03169063381c4fce906109ee9060040160208082526004908201527f476f6c6400000000000000000000000000000000000000000000000000000000604082015260600190565b602060405180830381865afa158015610a0b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a2f9190610f9d565b60085460405133602482015230604482015260648101919091529091506000906001600160a01b0383169060840160408051601f198184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd0000000000000000000000000000000000000000000000000000000017905251610ac09190610f81565b6000604051808303816000865af19150503d8060008114610afd576040519150601f19603f3d011682016040523d82523d6000602084013e610b02565b606091505b5050905080610b535760405162461bcd60e51b815260206004820152601660248201527f4661696c20746f2070617920686f6d696520666565210000000000000000000060448201526064016104be565b50506001600160a01b03166000818152600a60205260408120805460ff191660019081179091556006805491820181559091527ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f0180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169091179055565b3360009081526009602052604090205460ff16610c405760405162461bcd60e51b815260206004820152602560248201527f596f7520646f206e6f7420686176652061636365737320746f20746869732077604482015264185b1b195d60da1b60648201526084016104be565b600080836001600160a01b0316836040516108069190610f81565b634e487b7160e01b600052604160045260246000fd5b600067ffffffffffffffff80841115610c8c57610c8c610c5b565b604051601f8501601f19908116603f01168101908282118183101715610cb457610cb4610c5b565b81604052809350858152868686011115610ccd57600080fd5b858560208301376000602087830101525050509392505050565b600082601f830112610cf857600080fd5b610d0783833560208501610c71565b9392505050565b60008060408385031215610d2157600080fd5b82359150602083013567ffffffffffffffff811115610d3f57600080fd5b610d4b85828601610ce7565b9150509250929050565b600060208284031215610d6757600080fd5b5035919050565b60005b83811015610d89578181015183820152602001610d71565b83811115610d98576000848401525b50505050565b60008151808452610db6816020860160208601610d6e565b601f01601f19169290920160200192915050565b602081526000610d076020830184610d9e565b600080600060608486031215610df257600080fd5b833567ffffffffffffffff811115610e0957600080fd5b8401601f81018613610e1a57600080fd5b610e2986823560208401610c71565b9350506020840135915060408401358015158114610e4657600080fd5b809150509250925092565b6001600160a01b0381168114610e6657600080fd5b50565b600060208284031215610e7b57600080fd5b8135610d0781610e51565b600060208284031215610e9857600080fd5b813567ffffffffffffffff811115610eaf57600080fd5b610ebb84828501610ce7565b949350505050565b60008060408385031215610ed657600080fd5b8235610ee181610e51565b9150602083013567ffffffffffffffff811115610d3f57600080fd5b600181811c90821680610f1157607f821691505b602082108103610f3157634e487b7160e01b600052602260045260246000fd5b50919050565b600060208284031215610f4957600080fd5b5051919050565b848152608060208201526000610f696080830186610d9e565b60408301949094525090151560609091015292915050565b60008251610f93818460208701610d6e565b9190910192915050565b600060208284031215610faf57600080fd5b8151610d0781610e5156fea2646970667358221220b6b8916229853dbad747830614fdfc80166f5070f4cee100dd7feae3b02761c464736f6c634300080d003341206465707265636174656420736d61727420636f6e74726163742077616c6c657420666f7220437572696f";

type HangingGardenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: HangingGardenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class HangingGarden__factory extends ContractFactory {
  constructor(...args: HangingGardenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _owners: PromiseOrValue<string>[],
    _diamond: PromiseOrValue<string>,
    _homieFee: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<HangingGarden> {
    return super.deploy(
      _owners,
      _diamond,
      _homieFee,
      overrides || {}
    ) as Promise<HangingGarden>;
  }
  override getDeployTransaction(
    _owners: PromiseOrValue<string>[],
    _diamond: PromiseOrValue<string>,
    _homieFee: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _owners,
      _diamond,
      _homieFee,
      overrides || {}
    );
  }
  override attach(address: string): HangingGarden {
    return super.attach(address) as HangingGarden;
  }
  override connect(signer: Signer): HangingGarden__factory {
    return super.connect(signer) as HangingGarden__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HangingGardenInterface {
    return new utils.Interface(_abi) as HangingGardenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): HangingGarden {
    return new Contract(address, _abi, signerOrProvider) as HangingGarden;
  }
}
