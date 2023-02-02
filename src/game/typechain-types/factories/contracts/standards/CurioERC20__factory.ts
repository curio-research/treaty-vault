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
  CurioERC20,
  CurioERC20Interface,
} from "../../../contracts/standards/CurioERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "_decimals",
        type: "uint8",
      },
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "approve",
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
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "destroyToken",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "address",
        name: "_address",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "dripToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "maxTransferDistance",
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
    name: "symbol",
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
    name: "totalSupply",
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
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "transfer",
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
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "transferAll",
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
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
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
  "0x6080604052601460055560006006553480156200001b57600080fd5b5060405162002342380380620023428339810160408190526200003e9162000281565b6001600160a01b038116620000a55760405162461bcd60e51b8152602060048201526024808201527f437572696f45524332303a204469616d6f6e64206164647265737320726571756044820152631a5c995960e21b606482015260840160405180910390fd5b8351620000ba9060009060208701906200010e565b508251620000d09060019060208601906200010e565b506002805460ff191660ff9390931692909217909155600480546001600160a01b0319166001600160a01b0390921691909117905550620003619050565b8280546200011c9062000325565b90600052602060002090601f0160209004810192826200014057600085556200018b565b82601f106200015b57805160ff19168380011785556200018b565b828001600101855582156200018b579182015b828111156200018b5782518255916020019190600101906200016e565b50620001999291506200019d565b5090565b5b808211156200019957600081556001016200019e565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620001dc57600080fd5b81516001600160401b0380821115620001f957620001f9620001b4565b604051601f8301601f19908116603f01168101908282118183101715620002245762000224620001b4565b816040528381526020925086838588010111156200024157600080fd5b600091505b8382101562000265578582018301518183018401529082019062000246565b83821115620002775760008385830101525b9695505050505050565b600080600080608085870312156200029857600080fd5b84516001600160401b0380821115620002b057600080fd5b620002be88838901620001ca565b95506020870151915080821115620002d557600080fd5b50620002e487828801620001ca565b935050604085015160ff81168114620002fc57600080fd5b60608601519092506001600160a01b03811681146200031a57600080fd5b939692955090935050565b600181811c908216806200033a57607f821691505b6020821081036200035b57634e487b7160e01b600052602260045260246000fd5b50919050565b611fd180620003716000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80634b14e0031161008c5780639b1ad792116100665780639b1ad792146101c5578063a9059cbb146101d8578063dd62ed3e146101eb578063f0b7db4e146101fe57600080fd5b80634b14e0031461019757806370a08231146101aa57806395d89b41146101bd57600080fd5b806318160ddd116100c857806318160ddd14610145578063239df7f21461015c57806323b872dd14610165578063313ce5671461017857600080fd5b806306fdde03146100ef57806307d6a5d41461010d578063095ea7b314610122575b600080fd5b6100f7610229565b6040516101049190611a89565b60405180910390f35b61012061011b366004611ab4565b6102b7565b005b610135610130366004611ab4565b610438565b6040519015158152602001610104565b61014e60035481565b604051908152602001610104565b61014e60055481565b610135610173366004611ae0565b610736565b6002546101859060ff1681565b60405160ff9091168152602001610104565b6101356101a5366004611b21565b610dc9565b61014e6101b8366004611b5a565b610e5b565b6100f7610ee9565b6101206101d3366004611ab4565b610ef6565b6101356101e6366004611ab4565b61105b565b61014e6101f9366004611b21565b6113cd565b600454610211906001600160a01b031681565b6040516001600160a01b039091168152602001610104565b6000805461023690611b77565b80601f016020809104026020016040519081016040528092919081815260200182805461026290611b77565b80156102af5780601f10610284576101008083540402835291602001916102af565b820191906000526020600020905b81548152906001019060200180831161029257829003601f168201915b505050505081565b6004546001600160a01b0316331461032b5760405162461bcd60e51b815260206004820152602c60248201527f437572696f45524332303a204f6e6c792067616d652063616e2063616c6c207460448201526b3434b990333ab731ba34b7b760a11b60648201526084015b60405180910390fd5b6000806000610339856115a8565b9194509250905060008261034d8684611bc7565b11610359575083610366565b6103638284611bdf565b90505b6004546001600160a01b0316638d20eac3856103828486611bc7565b6040516001600160e01b031960e085901b16815260048101929092526024820152604401600060405180830381600087803b1580156103c057600080fd5b505af11580156103d4573d6000803e3d6000fd5b50506040518381526001600160a01b0389169250600091507fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3806003600082825461042b9190611bc7565b9091555050505050505050565b6004805460405163b356003960e01b8152339281019290925260009182916001600160a01b03169063b356003990602401602060405180830381865afa158015610486573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104aa9190611bf6565b6004805460405163b356003960e01b81526001600160a01b038881169382019390935292935060009291169063b356003990602401602060405180830381865afa1580156104fc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105209190611bf6565b600480546040517f3313db270000000000000000000000000000000000000000000000000000000081529293506000926001600160a01b0390911691633313db27916105729185918891889101611cae565b602060405180830381865afa15801561058f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105b39190611bf6565b9050600654810361065157600480546040517f6f4c70690000000000000000000000000000000000000000000000000000000081526001600160a01b0390911691636f4c70699161060b916000918891889101611cae565b6020604051808303816000875af115801561062a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061064e9190611bf6565b90505b60045460408051602080820189905282518083039091018152818301928390527f39684ca5000000000000000000000000000000000000000000000000000000009092526001600160a01b03909216916339684ca5916106b691859190604401611cd3565b600060405180830381600087803b1580156106d057600080fd5b505af11580156106e4573d6000803e3d6000fd5b50506040518781526001600160a01b03891692503391507f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259060200160405180910390a3600193505050505b92915050565b6004546000906001600160a01b031633811480159061088c575060405163b356003960e01b81526001600160a01b03868116600483015282169063f27fe5da90829063b356003990602401602060405180830381865afa15801561079e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107c29190611bf6565b6040518263ffffffff1660e01b81526004016107e091815260200190565b602060405180830381865afa1580156107fd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108219190611bf6565b60405163b356003960e01b81523360048201526001600160a01b0383169063b356003990602401602060405180830381865afa158015610865573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108899190611bf6565b14155b8015610a5357506040516384d969bd60e01b815260206004820152600360248201527f54616700000000000000000000000000000000000000000000000000000000006044820152610a51906001600160a01b038316906384d969bd90606401602060405180830381865afa158015610909573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061092d9190611d1a565b60405163b356003960e01b81523360048201526001600160a01b0391821691634c518fdc919085169063b356003990602401602060405180830381865afa15801561097c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109a09190611bf6565b6040518263ffffffff1660e01b81526004016109be91815260200190565b600060405180830381865afa1580156109db573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610a039190810190611dcd565b806020019051810190610a169190611dcd565b6040518060400160405280600681526020017f5472656174790000000000000000000000000000000000000000000000000000815250611649565b155b15610db15760405163b356003960e01b81526001600160a01b0386811660048301526000919083169063b356003990602401602060405180830381865afa158015610aa2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ac69190611bf6565b60405163b356003960e01b81523360048201529091506000906001600160a01b0384169063b356003990602401602060405180830381865afa158015610b10573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b349190611bf6565b90506000836001600160a01b0316633313db27600085856040518463ffffffff1660e01b8152600401610b6993929190611cae565b602060405180830381865afa158015610b86573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610baa9190611bf6565b90506000846001600160a01b03166384d969bd6040518163ffffffff1660e01b8152600401610bd890611e16565b602060405180830381865afa158015610bf5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c199190611d1a565b6001600160a01b0316634c518fdc836040518263ffffffff1660e01b8152600401610c4691815260200190565b600060405180830381865afa158015610c63573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610c8b9190810190611dcd565b806020019051810190610c9e9190611bf6565b905086811015610d165760405162461bcd60e51b815260206004820152602260248201527f437572696f45524332303a20496e73756666696369656e7420616c6c6f77616e60448201527f63650000000000000000000000000000000000000000000000000000000000006064820152608401610322565b6000198114610dac576004546001600160a01b03166339684ca583610d3b8a85611bdf565b604051602001610d4d91815260200190565b6040516020818303038152906040526040518363ffffffff1660e01b8152600401610d79929190611cd3565b600060405180830381600087803b158015610d9357600080fd5b505af1158015610da7573d6000803e3d6000fd5b505050505b505050505b610dbc8585856116b3565b60019150505b9392505050565b6004546000906001600160a01b03163314610e3b5760405162461bcd60e51b815260206004820152602c60248201527f437572696f45524332303a204f6e6c792067616d652063616e2063616c6c207460448201526b3434b990333ab731ba34b7b760a11b6064820152608401610322565b6000610e4684610e5b565b9050610e53848483610736565b949350505050565b600480546040517fb869810c0000000000000000000000000000000000000000000000000000000081526000926001600160a01b039092169163b869810c91610ea8918691869101611e3c565b602060405180830381865afa158015610ec5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107309190611bf6565b6001805461023690611b77565b6004546001600160a01b03163314610f655760405162461bcd60e51b815260206004820152602c60248201527f437572696f45524332303a204f6e6c792067616d652063616e2063616c6c207460448201526b3434b990333ab731ba34b7b760a11b6064820152608401610322565b600080610f71846115a8565b92505091506000818411610f855783610f87565b815b6004549091506001600160a01b0316638d20eac384610fa68486611bdf565b6040516001600160e01b031960e085901b16815260048101929092526024820152604401600060405180830381600087803b158015610fe457600080fd5b505af1158015610ff8573d6000803e3d6000fd5b5050604051838152600092506001600160a01b03881691507fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3806003600082825461104f9190611bdf565b90915550505050505050565b60003330146113b9576004805460405163b356003960e01b815233928101929092526000916001600160a01b039091169063b356003990602401602060405180830381865afa1580156110b2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110d69190611bf6565b600480546040516384d969bd60e01b815292935060009283926001600160a01b03909216916384d969bd9161113d910160208082526006908201527f4e6174696f6e0000000000000000000000000000000000000000000000000000604082015260600190565b602060405180830381865afa15801561115a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061117e9190611d1a565b6001600160a01b031663b361be468460405160200161119f91815260200190565b6040516020818303038152906040526040518263ffffffff1660e01b81526004016111ca9190611a89565b600060405180830381865afa1580156111e7573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261120f9190810190611e5e565b511161129e57600480546040517ff27fe5da0000000000000000000000000000000000000000000000000000000081529182018490526001600160a01b03169063f27fe5da90602401602060405180830381865afa158015611275573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112999190611bf6565b6112a0565b815b6004805460405163b356003960e01b81526001600160a01b038981169382019390935292935060009291169063b356003990602401602060405180830381865afa1580156112f2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113169190611bf6565b600454604080516020810184905280820189905281518082038301815260608201928390527f8c48d213000000000000000000000000000000000000000000000000000000009092529293506001600160a01b0390911691638c48d2139161138391869190606401611f04565b600060405180830381600087803b15801561139d57600080fd5b505af11580156113b1573d6000803e3d6000fd5b505050505050505b6113c43384846116b3565b50600192915050565b6004805460405163b356003960e01b81526001600160a01b038581169382019390935260009283921690633313db27908390839063b356003990602401602060405180830381865afa158015611427573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061144b9190611bf6565b6004805460405163b356003960e01b81526001600160a01b038a81169382019390935291169063b356003990602401602060405180830381865afa158015611497573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114bb9190611bf6565b6040518463ffffffff1660e01b81526004016114d993929190611cae565b602060405180830381865afa1580156114f6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061151a9190611bf6565b600480546040517f9980ec860000000000000000000000000000000000000000000000000000000081529293506001600160a01b031691639980ec86916115679185910190815260200190565b602060405180830381865afa158015611584573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e539190611bf6565b600480546040517fbbdb353b000000000000000000000000000000000000000000000000000000008152600092839283926001600160a01b039091169163bbdb353b916115f9918891869101611e3c565b6060604051808303816000875af1158015611618573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061163c9190611f51565b9250925092509193909250565b6000815183511461165c57506000610730565b8160405160200161166d9190611f7f565b60405160208183030381529060405280519060200120836040516020016116949190611f7f565b6040516020818303038152906040528051906020012014905092915050565b6000806116bf856115a8565b925050915060008060006116d2876115a8565b92509250925060065485141580156116ec57506006548314155b61175e5760405162461bcd60e51b815260206004820152602760248201527f437572696f45524332303a20496e2d67616d6520696e76656e746f7279206e6f60448201527f7420666f756e64000000000000000000000000000000000000000000000000006064820152608401610322565b858410156117d45760405162461bcd60e51b815260206004820152602660248201527f437572696f45524332303a2053656e64657220696e737566666963656e74206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152608401610322565b6000826117e18884611bc7565b11156117f6576117f18284611bdf565b6117f8565b865b6004549091506001600160a01b0316638d20eac3876118178489611bdf565b6040516001600160e01b031960e085901b16815260048101929092526024820152604401600060405180830381600087803b15801561185557600080fd5b505af1158015611869573d6000803e3d6000fd5b5050600480546040516384d969bd60e01b81526001600160a01b0390911693506384d969bd925061189a9101611e16565b602060405180830381865afa1580156118b7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118db9190611d1a565b6001600160a01b0316634c518fdc856040518263ffffffff1660e01b815260040161190891815260200190565b600060405180830381865afa158015611925573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261194d9190810190611dcd565b8060200190518101906119609190611bf6565b6004549092506001600160a01b0316638d20eac38561197f8486611bc7565b6040516001600160e01b031960e085901b16815260048101929092526024820152604401600060405180830381600087803b1580156119bd57600080fd5b505af11580156119d1573d6000803e3d6000fd5b50505050876001600160a01b0316896001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051611a1a91815260200190565b60405180910390a3505050505050505050565b60005b83811015611a48578181015183820152602001611a30565b83811115611a57576000848401525b50505050565b60008151808452611a75816020860160208601611a2d565b601f01601f19169290920160200192915050565b602081526000610dc26020830184611a5d565b6001600160a01b0381168114611ab157600080fd5b50565b60008060408385031215611ac757600080fd5b8235611ad281611a9c565b946020939093013593505050565b600080600060608486031215611af557600080fd5b8335611b0081611a9c565b92506020840135611b1081611a9c565b929592945050506040919091013590565b60008060408385031215611b3457600080fd5b8235611b3f81611a9c565b91506020830135611b4f81611a9c565b809150509250929050565b600060208284031215611b6c57600080fd5b8135610dc281611a9c565b600181811c90821680611b8b57607f821691505b602082108103611bab57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115611bda57611bda611bb1565b500190565b600082821015611bf157611bf1611bb1565b500390565b600060208284031215611c0857600080fd5b5051919050565b8054600090600181811c9080831680611c2957607f831692505b60208084108203611c4a57634e487b7160e01b600052602260045260246000fd5b83885260208801828015611c655760018114611c7657611ca1565b60ff19871682528282019750611ca1565b60008981526020902060005b87811015611c9b57815484820152908601908401611c82565b83019850505b5050505050505092915050565b606081526000611cc16060830186611c0f565b60208301949094525060400152919050565b606081526000611cf9606083016006815265105b5bdd5b9d60d21b602082015260400190565b8460208401528281036040840152611d118185611a5d565b95945050505050565b600060208284031215611d2c57600080fd5b8151610dc281611a9c565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715611d7657611d76611d37565b604052919050565b600067ffffffffffffffff831115611d9857611d98611d37565b611dab601f8401601f1916602001611d4d565b9050828152838383011115611dbf57600080fd5b610dc2836020830184611a2d565b600060208284031215611ddf57600080fd5b815167ffffffffffffffff811115611df657600080fd5b8201601f81018413611e0757600080fd5b610e5384825160208401611d7e565b602081526000610730602083016006815265105b5bdd5b9d60d21b602082015260400190565b6001600160a01b0383168152604060208201526000610e536040830184611c0f565b60006020808385031215611e7157600080fd5b825167ffffffffffffffff80821115611e8957600080fd5b818501915085601f830112611e9d57600080fd5b815181811115611eaf57611eaf611d37565b8060051b9150611ec0848301611d4d565b8181529183018401918481019088841115611eda57600080fd5b938501935b83851015611ef857845182529385019390850190611edf565b98975050505050505050565b60608152600860608201527f5472616e73666572000000000000000000000000000000000000000000000000608082015282602082015260a060408201526000610e5360a0830184611a5d565b600080600060608486031215611f6657600080fd5b8351925060208401519150604084015190509250925092565b60008251611f91818460208701611a2d565b919091019291505056fea26469706673582212208855bda58741927fe03b8b6a19999a2f33e142670c0b2e27e6a4a8e2c328265064736f6c634300080d0033";

type CurioERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CurioERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CurioERC20__factory extends ContractFactory {
  constructor(...args: CurioERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    _decimals: PromiseOrValue<BigNumberish>,
    _diamond: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CurioERC20> {
    return super.deploy(
      _name,
      _symbol,
      _decimals,
      _diamond,
      overrides || {}
    ) as Promise<CurioERC20>;
  }
  override getDeployTransaction(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    _decimals: PromiseOrValue<BigNumberish>,
    _diamond: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _name,
      _symbol,
      _decimals,
      _diamond,
      overrides || {}
    );
  }
  override attach(address: string): CurioERC20 {
    return super.attach(address) as CurioERC20;
  }
  override connect(signer: Signer): CurioERC20__factory {
    return super.connect(signer) as CurioERC20__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CurioERC20Interface {
    return new utils.Interface(_abi) as CurioERC20Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CurioERC20 {
    return new Contract(address, _abi, signerOrProvider) as CurioERC20;
  }
}
