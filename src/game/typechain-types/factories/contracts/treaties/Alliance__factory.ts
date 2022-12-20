/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  Alliance,
  AllianceInterface,
} from "../../../contracts/treaties/Alliance";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_diamond",
        type: "address",
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
    name: "goldToken",
    outputs: [
      {
        internalType: "contract CurioERC20",
        name: "",
        type: "address",
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
        name: "_targetArmyID",
        type: "uint256",
      },
    ],
    name: "treatyBesiege",
    outputs: [],
    stateMutability: "nonpayable",
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
  "0x60806040523480156200001157600080fd5b506040516200209c3803806200209c8339810160408190526200003491620002a4565b806001600160a01b0381166200009e5760405162461bcd60e51b815260206004820152602560248201527f437572696f5472656174793a204469616d6f6e642061646472657373207265716044820152641d5a5c995960da1b606482015260840160405180910390fd5b600080546001600160a01b039092166001600160a01b031992831681179091556001805483168217905560028054831682179055600380549092168117909155604051631c0e27e760e11b815263381c4fce90620001179060040160208082526004908201526311dbdb1960e21b604082015260600190565b602060405180830381865afa15801562000135573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200015b9190620002a4565b600680546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600880825267416c6c69616e636560c01b6020909201918252620001ac91600491620001e5565b506040518060c001604052806088815260200162002014608891398051620001dd91600591602090910190620001e5565b505062000307565b828054620001f390620002cb565b90600052602060002090601f01602090048101928262000217576000855562000262565b82601f106200023257805160ff191683800117855562000262565b8280016001018555821562000262579182015b828111156200026257825182559160200191906001019062000245565b506200027092915062000274565b5090565b5b8082111562000270576000815560010162000275565b6001600160a01b0381168114620002a157600080fd5b50565b600060208284031215620002b757600080fd5b8151620002c4816200028b565b9392505050565b600181811c90821680620002e057607f821691505b6020821081036200030157634e487b7160e01b600052602260045260246000fd5b50919050565b611cfd80620003176000396000f3fe608060405234801561001057600080fd5b50600436106101ef5760003560e01c80637284e4161161010f578063cbb34e86116100a2578063f0b7db4e11610071578063f0b7db4e146102d5578063f2e1730b146101f4578063f851a440146102e8578063fa91f75e146101f457600080fd5b8063cbb34e86146101f4578063e534ae5f146101f4578063e75991fa146101f4578063ec19ae80146101f457600080fd5b80639bcecd0b116100de5780639bcecd0b146101f4578063a83280bc146101f4578063c009a6cb146101f4578063c3fe3e28146102c257600080fd5b80637284e416146102695780637bc1e8411461027157806394002b5714610284578063993a04b7146102af57600080fd5b80632efd6629116101875780634ad30a91116101565780634ad30a91146101f45780635f310b12146101f457806360acfcc6146101f45780636a2a2b4e1461025657600080fd5b80632efd66291461023b57806337415516146101f457806339ebfad4146101f457806347b958a61461024e57600080fd5b8063243086c4116101c3578063243086c4146101f457806328f59b83146102315780632b451c64146101f45780632d47fe27146101f457600080fd5b8062048f5a146101f457806304dc7c74146101f457806306fdde031461021c5780631c357173146101f4575b600080fd5b6102076102023660046117df565b6102fb565b60405190151581526020015b60405180910390f35b610224610365565b6040516102139190611892565b6102396103f3565b005b6102396102493660046118ba565b6108b9565b6102396109ae565b6102076102643660046117df565b610bb9565b610224610d4f565b61023961027f366004611929565b610d5c565b600654610297906001600160a01b031681565b6040516001600160a01b039091168152602001610213565b600254610297906001600160a01b031681565b600154610297906001600160a01b031681565b600054610297906001600160a01b031681565b600354610297906001600160a01b031681565b600080546001600160a01b0316331461035b5760405162461bcd60e51b815260206004820152601f60248201527f437572696f5472656174793a204f6e6c792067616d652063616e2063616c6c0060448201526064015b60405180910390fd5b5060015b92915050565b6004805461037290611942565b80601f016020809104026020016040519081016040528092919081815260200182805461039e90611942565b80156103eb5780601f106103c0576101008083540402835291602001916103eb565b820191906000526020600020905b8154815290600101906020018083116103ce57829003601f168201915b505050505081565b60025460405163b356003960e01b81523360048201526000916001600160a01b03169063b356003990602401602060405180830381865afa15801561043c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610460919061197c565b60025460405163b356003960e01b81523060048201529192506000916001600160a01b039091169063b356003990602401602060405180830381865afa1580156104ae573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104d2919061197c565b6002546040517f84d969bd00000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f496e697454696d657374616d700000000000000000000000000000000000000060448201529192506000916001600160a01b03909116906384d969bd90606401602060405180830381865afa158015610567573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061058b91906119aa565b60025460405163344289d960e11b815260048101869052602481018590526001600160a01b0392831692634c518fdc92169063688513b290604401602060405180830381865afa1580156105e3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610607919061197c565b6040518263ffffffff1660e01b815260040161062591815260200190565b600060405180830381865afa158015610642573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261066a91908101906119c7565b80602001905181019061067d919061197c565b9050600a61068b8242611a54565b10156106ff5760405162461bcd60e51b815260206004820152603260248201527f416c6c69616e63653a204e6174696f6e206d757374207374617920666f72206160448201527f74206c65617374203130207365636f6e647300000000000000000000000000006064820152608401610352565b6002546040517f29560980000000000000000000000000000000000000000000000000000000008152600481018590526000916001600160a01b03169063b93f9b0a908290632956098090602401602060405180830381865afa15801561076a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061078e919061197c565b6040518263ffffffff1660e01b81526004016107ac91815260200190565b602060405180830381865afa1580156107c9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107ed91906119aa565b6006546040517fa9059cbb0000000000000000000000000000000000000000000000000000000081526001600160a01b0380841660048301526103e8602483015292935091169063a9059cbb906044016020604051808303816000875af115801561085c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108809190611a6b565b506108ab60405180604001604052806006815260200165426174746c6560d01b8152506000806108b9565b6108b3611557565b50505050565b60025460405163b356003960e01b81523360048201526000916001600160a01b03169063b356003990602401602060405180830381865afa158015610902573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610926919061197c565b6003546040517f66e39e790000000000000000000000000000000000000000000000000000000081529192506001600160a01b0316906366e39e7990610976908490889088908890600401611a88565b600060405180830381600087803b15801561099057600080fd5b505af11580156109a4573d6000803e3d6000fd5b5050505050505050565b60025460405163b356003960e01b81523360048201526000916001600160a01b03169063b93f9b0a908290632956098090829063b356003990602401602060405180830381865afa158015610a07573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a2b919061197c565b6040518263ffffffff1660e01b8152600401610a4991815260200190565b602060405180830381865afa158015610a66573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a8a919061197c565b6040518263ffffffff1660e01b8152600401610aa891815260200190565b602060405180830381865afa158015610ac5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ae991906119aa565b6006546040517f23b872dd0000000000000000000000000000000000000000000000000000000081526001600160a01b0380841660048301523060248301526103e860448301529293509116906323b872dd906064016020604051808303816000875af1158015610b5e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b829190611a6b565b50610bae60405180604001604052806006815260200165426174746c6560d01b815250600060016108b9565b610bb6611638565b50565b60008082806020019051810190610bd09190611ab9565b60025460405163793ff2ed60e11b815260048101839052919450600093506001600160a01b0316915063f27fe5da90602401602060405180830381865afa158015610c1f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c43919061197c565b60025460405163b356003960e01b81523060048201529192506000916001600160a01b039091169063b356003990602401602060405180830381865afa158015610c91573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cb5919061197c565b60025460405163344289d960e11b815260048101859052602481018390529192506001600160a01b03169063688513b290604401602060405180830381865afa158015610d06573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d2a919061197c565b15610d3b576000935050505061035f565b610d4586866102fb565b9695505050505050565b6005805461037290611942565b60025460405163b356003960e01b81523360048201526001600160a01b039091169063688513b290829063b356003990602401602060405180830381865afa158015610dac573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dd0919061197c565b60025460405163b356003960e01b81523060048201526001600160a01b039091169063b356003990602401602060405180830381865afa158015610e18573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e3c919061197c565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815260048101929092526024820152604401602060405180830381865afa158015610e95573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610eb9919061197c565b600003610f2e5760405162461bcd60e51b815260206004820152602160248201527f437572696f5472656174793a204f6e6c79207369676e65722063616e2063616c60448201527f6c000000000000000000000000000000000000000000000000000000000000006064820152608401610352565b60025460405163793ff2ed60e11b8152600481018390526000916001600160a01b03169063f27fe5da90602401602060405180830381865afa158015610f78573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f9c919061197c565b60025460405163b356003960e01b81523060048201529192506000916001600160a01b039091169063b356003990602401602060405180830381865afa158015610fea573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061100e919061197c565b60025460405163344289d960e11b815260048101859052602481018390529192506001600160a01b03169063688513b290604401602060405180830381865afa15801561105f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611083919061197c565b156110f65760405162461bcd60e51b815260206004820152602c60248201527f416c6c69616e63653a2043616e6e6f7420626573696567652061726d79206f6660448201527f20616c6c79206e6174696f6e00000000000000000000000000000000000000006064820152608401610352565b600254604080517fb66e9de70000000000000000000000000000000000000000000000000000000081526004810191909152600d60448201527f5374617274506f736974696f6e000000000000000000000000000000000000006064820152602481018590526000916001600160a01b03169063eead3d8490829063b66e9de7906084016040805180830381865afa158015611196573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111ba9190611b36565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b168152815160048201526020909101516024820152604401600060405180830381865afa158015611218573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526112409190810190611b76565b905060005b81518110156115505760025482516000916001600160a01b031690636c90bd8b9085908590811061127857611278611c12565b6020908102919091018101516040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b168152815160048201529101516024820152604401600060405180830381865afa1580156112df573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526113079190810190611c28565b905060005b815181101561153b5760025482516000916001600160a01b03169063f27fe5da9085908590811061133f5761133f611c12565b60200260200101516040518263ffffffff1660e01b815260040161136591815260200190565b602060405180830381865afa158015611382573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113a6919061197c565b60025460405163344289d960e11b815260048101839052602481018990529192506001600160a01b03169063688513b290604401602060405180830381865afa1580156113f7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061141b919061197c565b156115285760015483516001600160a01b0390911690632a0c52219085908590811061144957611449611c12565b60200260200101518a6040518363ffffffff1660e01b8152600401611478929190918252602082015260400190565b600060405180830381600087803b15801561149257600080fd5b505af11580156114a6573d6000803e3d6000fd5b505060025460405163793ff2ed60e11b8152600481018c90526001600160a01b03909116925063f27fe5da9150602401602060405180830381865afa1580156114f3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611517919061197c565b600003611528575050505050505050565b508061153381611cae565b91505061130c565b5050808061154890611cae565b915050611245565b5050505050565b60025460405163b356003960e01b81523360048201526000916001600160a01b03169063b356003990602401602060405180830381865afa1580156115a0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115c4919061197c565b6003546040517f5ffde144000000000000000000000000000000000000000000000000000000008152600481018390529192506001600160a01b031690635ffde14490602401600060405180830381600087803b15801561162457600080fd5b505af1158015611550573d6000803e3d6000fd5b60025460405163b356003960e01b81523360048201526000916001600160a01b03169063b356003990602401602060405180830381865afa158015611681573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116a5919061197c565b6003546040517fff2a5e79000000000000000000000000000000000000000000000000000000008152600481018390529192506001600160a01b03169063ff2a5e79906024016020604051808303816000875af115801561170a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061172e919061197c565b5050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561177157611771611732565b604052919050565b600067ffffffffffffffff82111561179357611793611732565b50601f01601f191660200190565b60006117b46117af84611779565b611748565b90508281528383830111156117c857600080fd5b828260208301376000602084830101529392505050565b600080604083850312156117f257600080fd5b82359150602083013567ffffffffffffffff81111561181057600080fd5b8301601f8101851361182157600080fd5b611830858235602084016117a1565b9150509250929050565b60005b8381101561185557818101518382015260200161183d565b838111156108b35750506000910152565b6000815180845261187e81602086016020860161183a565b601f01601f19169290920160200192915050565b6020815260006118a56020830184611866565b9392505050565b8015158114610bb657600080fd5b6000806000606084860312156118cf57600080fd5b833567ffffffffffffffff8111156118e657600080fd5b8401601f810186136118f757600080fd5b611906868235602084016117a1565b93505060208401359150604084013561191e816118ac565b809150509250925092565b60006020828403121561193b57600080fd5b5035919050565b600181811c9082168061195657607f821691505b60208210810361197657634e487b7160e01b600052602260045260246000fd5b50919050565b60006020828403121561198e57600080fd5b5051919050565b6001600160a01b0381168114610bb657600080fd5b6000602082840312156119bc57600080fd5b81516118a581611995565b6000602082840312156119d957600080fd5b815167ffffffffffffffff8111156119f057600080fd5b8201601f81018413611a0157600080fd5b8051611a0f6117af82611779565b818152856020838501011115611a2457600080fd5b611a3582602083016020860161183a565b95945050505050565b634e487b7160e01b600052601160045260246000fd5b600082821015611a6657611a66611a3e565b500390565b600060208284031215611a7d57600080fd5b81516118a5816118ac565b848152608060208201526000611aa16080830186611866565b60408301949094525090151560609091015292915050565b600080600060608486031215611ace57600080fd5b8351925060208401519150604084015190509250925092565b600060408284031215611af957600080fd5b6040516040810181811067ffffffffffffffff82111715611b1c57611b1c611732565b604052825181526020928301519281019290925250919050565b600060408284031215611b4857600080fd5b6118a58383611ae7565b600067ffffffffffffffff821115611b6c57611b6c611732565b5060051b60200190565b60006020808385031215611b8957600080fd5b825167ffffffffffffffff811115611ba057600080fd5b8301601f81018513611bb157600080fd5b8051611bbf6117af82611b52565b81815260069190911b82018301908381019087831115611bde57600080fd5b928401925b82841015611c0757611bf58885611ae7565b82528482019150604084019350611be3565b979650505050505050565b634e487b7160e01b600052603260045260246000fd5b60006020808385031215611c3b57600080fd5b825167ffffffffffffffff811115611c5257600080fd5b8301601f81018513611c6357600080fd5b8051611c716117af82611b52565b81815260059190911b82018301908381019087831115611c9057600080fd5b928401925b82841015611c0757835182529284019290840190611c95565b600060018201611cc057611cc0611a3e565b506001019056fea2646970667358221220b076cf58f1e82b367c0197d90cc365c50b86c6a82dba38f611e51f3574372fa564736f6c634300080d00334120747265617479206265747765656e2074776f206f72206d6f726520636f756e747269657320746f20776f726b20746f67657468657220746f7761726473206120636f6d6d6f6e20676f616c206f7220746f20646566656e642065616368206f7468657220696e207468652063617365206f662065787465726e616c2061676772657373696f6e";

type AllianceConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AllianceConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Alliance__factory extends ContractFactory {
  constructor(...args: AllianceConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _diamond: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Alliance> {
    return super.deploy(_diamond, overrides || {}) as Promise<Alliance>;
  }
  override getDeployTransaction(
    _diamond: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_diamond, overrides || {});
  }
  override attach(address: string): Alliance {
    return super.attach(address) as Alliance;
  }
  override connect(signer: Signer): Alliance__factory {
    return super.connect(signer) as Alliance__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AllianceInterface {
    return new utils.Interface(_abi) as AllianceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Alliance {
    return new Contract(address, _abi, signerOrProvider) as Alliance;
  }
}
