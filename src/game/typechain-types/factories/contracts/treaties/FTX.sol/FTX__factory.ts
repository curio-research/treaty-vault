/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  FTX,
  FTXInterface,
} from "../../../../contracts/treaties/FTX.sol/FTX";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_diamond",
        type: "address",
      },
      {
        internalType: "address",
        name: "_sbfAddress",
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
    name: "approveDeployTreaty",
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
    name: "fttToken",
    outputs: [
      {
        internalType: "contract FTTERC20",
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
    name: "isBankrupt",
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
    inputs: [],
    name: "sbfAddress",
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
    name: "sbfCapitalAddress",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "treatyDeposit",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
  {
    inputs: [],
    name: "treatyRun",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "treatyWithdraw",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002b3b38038062002b3b833981016040819052620000349162000326565b816001600160a01b0381166200009e5760405162461bcd60e51b815260206004820152602560248201527f437572696f5472656174793a204469616d6f6e642061646472657373207265716044820152641d5a5c995960da1b606482015260840160405180910390fd5b600080546001600160a01b039092166001600160a01b03199283168117909155600180548316821790556002805483168217905560038054909216178155604080518082019091528181526208ca8b60eb1b602090910190815262000107916004919062000259565b5060405180608001604052806056815260200162002ae5605691398051620001389160059160209091019062000259565b50600254604051631c0e27e760e11b81526001600160a01b039091169063381c4fce90620001819060040160208082526004908201526311dbdb1960e21b604082015260600190565b602060405180830381865afa1580156200019f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001c5919062000365565b600680546001600160a01b0319166001600160a01b03929092169190911790556040513090620001f590620002e8565b6001600160a01b039091168152602001604051809103906000f08015801562000222573d6000803e3d6000fd5b50600780546001600160a01b039283166001600160a01b0319918216179091556008805493909216921691909117905550620003c8565b82805462000267906200038c565b90600052602060002090601f0160209004810192826200028b5760008555620002d6565b82601f10620002a657805160ff1916838001178555620002d6565b82800160010185558215620002d6579182015b82811115620002d6578251825591602001919060010190620002b9565b50620002e4929150620002f6565b5090565b6110668062001a7f83390190565b5b80821115620002e45760008155600101620002f7565b6001600160a01b03811681146200032357600080fd5b50565b600080604083850312156200033a57600080fd5b825162000347816200030d565b60208401519092506200035a816200030d565b809150509250929050565b6000602082840312156200037857600080fd5b815162000385816200030d565b9392505050565b600181811c90821680620003a157607f821691505b602082108103620003c257634e487b7160e01b600052602260045260246000fd5b50919050565b6116a780620003d86000396000f3fe608060405234801561001057600080fd5b50600436106102ac5760003560e01c80637284e4161161017b578063c3fe3e28116100d8578063ec19ae801161008c578063f2e1730b11610071578063f2e1730b146102b1578063f851a440146103fa578063fa91f75e146102b157600080fd5b8063ec19ae80146102b1578063f0b7db4e146103e757600080fd5b8063d553ed48116100bd578063d553ed48146102b1578063e534ae5f146102b1578063e75991fa146102b157600080fd5b8063c3fe3e28146103d4578063cbb34e86146102b157600080fd5b80639bcecd0b1161012f578063a83280bc11610114578063a83280bc146102b1578063b4bfdfcd146103c1578063c009a6cb146102b157600080fd5b80639bcecd0b146102b1578063a228e1d3146103ae57600080fd5b806394002b571161016057806394002b571461037557806395f095fb14610388578063993a04b71461039b57600080fd5b80637284e41614610365578063934c3b0d1461036d57600080fd5b806337415516116102295780634b3dc808116101dd57806360acfcc6116101c257806360acfcc6146102b15780636a2a2b4e146102b1578063721c7d461461035157600080fd5b80634b3dc8081461033e5780635f310b12146102b157600080fd5b806341bcc52f1161020e57806341bcc52f1461030b57806347b958a6146103365780634ad30a91146102b157600080fd5b806337415516146102b157806339ebfad4146102b157600080fd5b8063243086c4116102805780632b451c64116102655780632b451c64146102b15780632d47fe27146102b15780632efd6629146102f857600080fd5b8063243086c4146102b157806328f59b83146102ee57600080fd5b8062048f5a146102b157806304dc7c74146102b157806306fdde03146102d95780631c357173146102b1575b600080fd5b6102c46102bf36600461139d565b61040d565b60405190151581526020015b60405180910390f35b6102e1610476565b6040516102d09190611445565b6102f6610504565b005b6102f6610306366004611470565b6105ec565b60075461031e906001600160a01b031681565b6040516001600160a01b0390911681526020016102d0565b6102f66106e1565b60095461031e906001600160a01b031681565b6009546102c490600160a01b900460ff1681565b6102e16107db565b6102c46107e8565b60065461031e906001600160a01b031681565b6102c46103963660046114df565b6108d3565b60025461031e906001600160a01b031681565b6102c46103bc3660046114df565b610b8f565b60085461031e906001600160a01b031681565b60015461031e906001600160a01b031681565b60005461031e906001600160a01b031681565b60035461031e906001600160a01b031681565b600080546001600160a01b0316331461046d5760405162461bcd60e51b815260206004820152601f60248201527f437572696f5472656174793a204f6e6c792067616d652063616e2063616c6c0060448201526064015b60405180910390fd5b50600192915050565b60048054610483906114f8565b80601f01602080910402602001604051908101604052809291908181526020018280546104af906114f8565b80156104fc5780601f106104d1576101008083540402835291602001916104fc565b820191906000526020600020905b8154815290600101906020018083116104df57829003601f168201915b505050505081565b60025460405163b356003960e01b81523360048201526000916001600160a01b03169063b356003990602401602060405180830381865afa15801561054d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105719190611532565b6003546040517f5ffde144000000000000000000000000000000000000000000000000000000008152600481018390529192506001600160a01b031690635ffde14490602401600060405180830381600087803b1580156105d157600080fd5b505af11580156105e5573d6000803e3d6000fd5b5050505050565b60025460405163b356003960e01b81523360048201526000916001600160a01b03169063b356003990602401602060405180830381865afa158015610635573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106599190611532565b6003546040517f66e39e790000000000000000000000000000000000000000000000000000000081529192506001600160a01b0316906366e39e79906106a990849088908890889060040161154b565b600060405180830381600087803b1580156106c357600080fd5b505af11580156106d7573d6000803e3d6000fd5b5050505050505050565b60025460405163b356003960e01b81523360048201526000916001600160a01b03169063b356003990602401602060405180830381865afa15801561072a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061074e9190611532565b6003546040517fff2a5e79000000000000000000000000000000000000000000000000000000008152600481018390529192506001600160a01b03169063ff2a5e79906024016020604051808303816000875af11580156107b3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107d79190611532565b5050565b60058054610483906114f8565b6008546000906001600160a01b031633146108455760405162461bcd60e51b815260206004820152601a60248201527f4654583a20596f7520646f6e2774206e65656420746f2072756e0000000000006044820152606401610464565b600954600160a01b900460ff161561089f5760405162461bcd60e51b815260206004820152601b60248201527f4654583a20596f7527766520616c7265616479206573636170656400000000006044820152606401610464565b50600980547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff16600160a01b179055600190565b6008546000906001600160a01b031633036109305760405162461bcd60e51b815260206004820152601e60248201527f4654583a20596f7520646f6e2774206e65656420746f206465706f73697400006044820152606401610464565b6009546001600160a01b031661094857610948610ff0565b60025460405163b356003960e01b81523360048201526000916001600160a01b03169063b93f9b0a908290632956098090829063b356003990602401602060405180830381865afa1580156109a1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109c59190611532565b6040518263ffffffff1660e01b81526004016109e391815260200190565b602060405180830381865afa158015610a00573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a249190611532565b6040518263ffffffff1660e01b8152600401610a4291815260200190565b602060405180830381865afa158015610a5f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a839190611591565b6006546009546040516323b872dd60e01b81526001600160a01b03808516600483015291821660248201526044810187905292935016906323b872dd906064016020604051808303816000875af1158015610ae2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b0691906115ae565b506007546040517f40c10f190000000000000000000000000000000000000000000000000000000081526001600160a01b03838116600483015260248201869052909116906340c10f1990604401600060405180830381600087803b158015610b6e57600080fd5b505af1158015610b82573d6000803e3d6000fd5b5060019695505050505050565b6008546000906001600160a01b03163303610bec5760405162461bcd60e51b815260206004820152601f60248201527f4654583a20596f7520646f6e2774206e65656420746f207769746864726177006044820152606401610464565b600954600160a01b900460ff1615610c465760405162461bcd60e51b815260206004820152601760248201527f4654583a20596f7572206d6f6e657920697320676f6e650000000000000000006044820152606401610464565b60025460405163b356003960e01b81523360048201526000916001600160a01b03169063b93f9b0a908290632956098090829063b356003990602401602060405180830381865afa158015610c9f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cc39190611532565b6040518263ffffffff1660e01b8152600401610ce191815260200190565b602060405180830381865afa158015610cfe573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d229190611532565b6040518263ffffffff1660e01b8152600401610d4091815260200190565b602060405180830381865afa158015610d5d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d819190611591565b6007546040516370a0823160e01b81526001600160a01b0380841660048301529293508592909116906370a0823190602401602060405180830381865afa158015610dd0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610df49190611532565b1015610e425760405162461bcd60e51b815260206004820152601960248201527f4654583a20496e73756666696369656e742062616c616e6365000000000000006044820152606401610464565b6009546001600160a01b0316610e5a57610e5a610ff0565b6006546009546040516370a0823160e01b81526001600160a01b03918216600482015260009291909116906370a0823190602401602060405180830381865afa158015610eab573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ecf9190611532565b90506000848211610ee05781610ee2565b845b6006546009546040516323b872dd60e01b81526001600160a01b03918216600482015286821660248201526044810184905292935016906323b872dd906064016020604051808303816000875af1158015610f41573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f6591906115ae565b506007546040517f9dc29fac0000000000000000000000000000000000000000000000000000000081526001600160a01b0385811660048301526024820184905290911690639dc29fac90604401600060405180830381600087803b158015610fcd57600080fd5b505af1158015610fe1573d6000803e3d6000fd5b50600198975050505050505050565b6002546040517f84d969bd00000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f416464726573730000000000000000000000000000000000000000000000000060448201526001600160a01b03909116906384d969bd90606401602060405180830381865afa15801561107f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110a39190611591565b600854604080516001600160a01b039283166020820152929091169163b361be4691016040516020818303038152906040526040518263ffffffff1660e01b81526004016110f19190611445565b600060405180830381865afa15801561110e573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261113691908101906115cb565b516001146111865760405162461bcd60e51b815260206004820152601860248201527f4654583a20534246206e6f7420696e697469616c697a656400000000000000006044820152606401610464565b60025460085460405163b356003960e01b81526001600160a01b03918216600482015291169063b93f9b0a908290632956098090829063b356003990602401602060405180830381865afa1580156111e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112069190611532565b6040518263ffffffff1660e01b815260040161122491815260200190565b602060405180830381865afa158015611241573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112659190611532565b6040518263ffffffff1660e01b815260040161128391815260200190565b602060405180830381865afa1580156112a0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112c49190611591565b600980547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561133d5761133d6112fe565b604052919050565b600067ffffffffffffffff83111561135f5761135f6112fe565b611372601f8401601f1916602001611314565b905082815283838301111561138657600080fd5b828260208301376000602084830101529392505050565b600080604083850312156113b057600080fd5b82359150602083013567ffffffffffffffff8111156113ce57600080fd5b8301601f810185136113df57600080fd5b6113ee85823560208401611345565b9150509250929050565b6000815180845260005b8181101561141e57602081850181015186830182015201611402565b81811115611430576000602083870101525b50601f01601f19169290920160200192915050565b60208152600061145860208301846113f8565b9392505050565b801515811461146d57600080fd5b50565b60008060006060848603121561148557600080fd5b833567ffffffffffffffff81111561149c57600080fd5b8401601f810186136114ad57600080fd5b6114bc86823560208401611345565b9350506020840135915060408401356114d48161145f565b809150509250925092565b6000602082840312156114f157600080fd5b5035919050565b600181811c9082168061150c57607f821691505b60208210810361152c57634e487b7160e01b600052602260045260246000fd5b50919050565b60006020828403121561154457600080fd5b5051919050565b84815260806020820152600061156460808301866113f8565b60408301949094525090151560609091015292915050565b6001600160a01b038116811461146d57600080fd5b6000602082840312156115a357600080fd5b81516114588161157c565b6000602082840312156115c057600080fd5b81516114588161145f565b600060208083850312156115de57600080fd5b825167ffffffffffffffff808211156115f657600080fd5b818501915085601f83011261160a57600080fd5b81518181111561161c5761161c6112fe565b8060051b915061162d848301611314565b818152918301840191848101908884111561164757600080fd5b938501935b838510156116655784518252938501939085019061164c565b9897505050505050505056fea264697066735822122069e4c1a08f9c426a20aefab3f88de7a85f128c64eeb2ec29a7dbed18be6db83064736f6c634300080d003360e06040523480156200001157600080fd5b50604051620010663803806200106683398101604081905262000034916200021f565b6040805180820182526009815268232a2c102a37b5b2b760b91b60208083019182528351808501909452600384526211951560ea1b90840152815191929160129162000084916000919062000179565b5081516200009a90600190602085019062000179565b5060ff81166080524660a052620000b0620000dd565b60c0525050600680546001600160a01b0319166001600160a01b0393909316929092179091555062000330565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60006040516200011191906200028d565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b828054620001879062000251565b90600052602060002090601f016020900481019282620001ab5760008555620001f6565b82601f10620001c657805160ff1916838001178555620001f6565b82800160010185558215620001f6579182015b82811115620001f6578251825591602001919060010190620001d9565b506200020492915062000208565b5090565b5b8082111562000204576000815560010162000209565b6000602082840312156200023257600080fd5b81516001600160a01b03811681146200024a57600080fd5b9392505050565b600181811c908216806200026657607f821691505b6020821081036200028757634e487b7160e01b600052602260045260246000fd5b50919050565b600080835481600182811c915080831680620002aa57607f831692505b60208084108203620002ca57634e487b7160e01b86526022600452602486fd5b818015620002e15760018114620002f35762000322565b60ff1986168952848901965062000322565b60008a81526020902060005b868110156200031a5781548b820152908501908301620002ff565b505084890196505b509498975050505050505050565b60805160a05160c051610d066200036060003960006104b7015260006104820152600061016a0152610d066000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806370a0823111610097578063a34a28fd11610066578063a34a28fd14610216578063a9059cbb14610241578063d505accf14610254578063dd62ed3e1461026757600080fd5b806370a08231146101bb5780637ecebe00146101db57806395d89b41146101fb5780639dc29fac1461020357600080fd5b806323b872dd116100d357806323b872dd14610152578063313ce567146101655780633644e5151461019e57806340c10f19146101a657600080fd5b806306fdde03146100fa578063095ea7b31461011857806318160ddd1461013b575b600080fd5b610102610292565b60405161010f9190610a17565b60405180910390f35b61012b610126366004610a88565b610320565b604051901515815260200161010f565b61014460025481565b60405190815260200161010f565b61012b610160366004610ab2565b61038c565b61018c7f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff909116815260200161010f565b61014461047e565b6101b96101b4366004610a88565b6104d9565b005b6101446101c9366004610aee565b60036020526000908152604090205481565b6101446101e9366004610aee565b60056020526000908152604090205481565b610102610546565b6101b9610211366004610a88565b610553565b600654610229906001600160a01b031681565b6040516001600160a01b03909116815260200161010f565b61012b61024f366004610a88565b6105b7565b6101b9610262366004610b10565b61062f565b610144610275366004610b83565b600460209081526000928352604080842090915290825290205481565b6000805461029f90610bb6565b80601f01602080910402602001604051908101604052809291908181526020018280546102cb90610bb6565b80156103185780601f106102ed57610100808354040283529160200191610318565b820191906000526020600020905b8154815290600101906020018083116102fb57829003601f168201915b505050505081565b3360008181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259061037b9086815260200190565b60405180910390a350600192915050565b6001600160a01b038316600090815260046020908152604080832033845290915281205460001981146103e8576103c38382610c06565b6001600160a01b03861660009081526004602090815260408083203384529091529020555b6001600160a01b03851660009081526003602052604081208054859290610410908490610c06565b90915550506001600160a01b03808516600081815260036020526040908190208054870190555190918716907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9061046b9087815260200190565b60405180910390a3506001949350505050565b60007f000000000000000000000000000000000000000000000000000000000000000046146104b4576104af61089d565b905090565b507f000000000000000000000000000000000000000000000000000000000000000090565b6006546001600160a01b031633146105385760405162461bcd60e51b815260206004820152601660248201527f4654543a204f6e6c79204654582063616e206d696e740000000000000000000060448201526064015b60405180910390fd5b6105428282610937565b5050565b6001805461029f90610bb6565b6006546001600160a01b031633146105ad5760405162461bcd60e51b815260206004820152601660248201527f4654543a204f6e6c79204654582063616e206275726e00000000000000000000604482015260640161052f565b61054282826109a3565b336000908152600360205260408120805483919083906105d8908490610c06565b90915550506001600160a01b038316600081815260036020526040908190208054850190555133907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9061037b9086815260200190565b4284101561067f5760405162461bcd60e51b815260206004820152601760248201527f5045524d49545f444541444c494e455f45585049524544000000000000000000604482015260640161052f565b6000600161068b61047e565b6001600160a01b038a811660008181526005602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938d166060840152608083018c905260a083019390935260c08083018b90528151808403909101815260e0830190915280519201919091207f19010000000000000000000000000000000000000000000000000000000000006101008301526101028201929092526101228101919091526101420160408051601f198184030181528282528051602091820120600084529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa1580156107b2573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116158015906107e85750876001600160a01b0316816001600160a01b0316145b6108345760405162461bcd60e51b815260206004820152600e60248201527f494e56414c49445f5349474e4552000000000000000000000000000000000000604482015260640161052f565b6001600160a01b0390811660009081526004602090815260408083208a8516808552908352928190208990555188815291928a16917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60006040516108cf9190610c1d565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b80600260008282546109499190610cb8565b90915550506001600160a01b0382166000818152600360209081526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91015b60405180910390a35050565b6001600160a01b038216600090815260036020526040812080548392906109cb908490610c06565b90915550506002805482900390556040518181526000906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610997565b600060208083528351808285015260005b81811015610a4457858101830151858201604001528201610a28565b81811115610a56576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b0381168114610a8357600080fd5b919050565b60008060408385031215610a9b57600080fd5b610aa483610a6c565b946020939093013593505050565b600080600060608486031215610ac757600080fd5b610ad084610a6c565b9250610ade60208501610a6c565b9150604084013590509250925092565b600060208284031215610b0057600080fd5b610b0982610a6c565b9392505050565b600080600080600080600060e0888a031215610b2b57600080fd5b610b3488610a6c565b9650610b4260208901610a6c565b95506040880135945060608801359350608088013560ff81168114610b6657600080fd5b9699959850939692959460a0840135945060c09093013592915050565b60008060408385031215610b9657600080fd5b610b9f83610a6c565b9150610bad60208401610a6c565b90509250929050565b600181811c90821680610bca57607f821691505b602082108103610bea57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b600082821015610c1857610c18610bf0565b500390565b600080835481600182811c915080831680610c3957607f831692505b60208084108203610c5857634e487b7160e01b86526022600452602486fd5b818015610c6c5760018114610c7d57610caa565b60ff19861689528489019650610caa565b60008a81526020902060005b86811015610ca25781548b820152908501908301610c89565b505084890196505b509498975050505050505050565b60008219821115610ccb57610ccb610bf0565b50019056fea2646970667358221220aafc2312763e6494b1f0be841d9be6cce9749ee90815721b2cfb647207fcfc2264736f6c634300080d003346545820697320612063727970746f63757272656e63792065786368616e676520626173656420696e2074686520556e69746564205374617465732e20497420697320746f74616c6c79206e6f742061207363616d2e";

type FTXConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FTXConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FTX__factory extends ContractFactory {
  constructor(...args: FTXConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _diamond: PromiseOrValue<string>,
    _sbfAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<FTX> {
    return super.deploy(_diamond, _sbfAddress, overrides || {}) as Promise<FTX>;
  }
  override getDeployTransaction(
    _diamond: PromiseOrValue<string>,
    _sbfAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_diamond, _sbfAddress, overrides || {});
  }
  override attach(address: string): FTX {
    return super.attach(address) as FTX;
  }
  override connect(signer: Signer): FTX__factory {
    return super.connect(signer) as FTX__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FTXInterface {
    return new utils.Interface(_abi) as FTXInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): FTX {
    return new Contract(address, _abi, signerOrProvider) as FTX;
  }
}
