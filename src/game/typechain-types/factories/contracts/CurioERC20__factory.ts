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
import type { PromiseOrValue } from "../../common";
import type {
  CurioERC20,
  CurioERC20Interface,
} from "../../contracts/CurioERC20";

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
        name: "amount",
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
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
      {
        internalType: "address",
        name: "",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
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
        name: "",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
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
  "0x60e06040523480156200001157600080fd5b5060405162000f1838038062000f188339810160408190526200003491620002a3565b82828282600090805190602001906200004f9291906200014a565b508151620000659060019060208501906200014a565b507fff0000000000000000000000000000000000000000000000000000000000000060f882901b166080524660a0526200009e620000ae565b60c052506200041a945050505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6000604051620000e2919062000324565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b8280546200015890620003c7565b90600052602060002090601f0160209004810192826200017c5760008555620001c7565b82601f106200019757805160ff1916838001178555620001c7565b82800160010185558215620001c7579182015b82811115620001c7578251825591602001919060010190620001aa565b50620001d5929150620001d9565b5090565b5b80821115620001d55760008155600101620001da565b600082601f83011262000201578081fd5b81516001600160401b03808211156200021e576200021e62000404565b604051601f8301601f19908116603f0116810190828211818310171562000249576200024962000404565b8160405283815260209250868385880101111562000265578485fd5b8491505b8382101562000288578582018301518183018401529082019062000269565b838211156200029957848385830101525b9695505050505050565b600080600060608486031215620002b8578283fd5b83516001600160401b0380821115620002cf578485fd5b620002dd87838801620001f0565b94506020860151915080821115620002f3578384fd5b506200030286828701620001f0565b925050604084015160ff8116811462000319578182fd5b809150509250925092565b600080835482600182811c9150808316806200034157607f831692505b60208084108214156200036257634e487b7160e01b87526022600452602487fd5b8180156200037957600181146200038b57620003b9565b60ff19861689528489019650620003b9565b60008a815260209020885b86811015620003b15781548b82015290850190830162000396565b505084890196505b509498975050505050505050565b600181811c90821680620003dc57607f821691505b60208210811415620003fe57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b60805160f81c60a05160c051610acb6200044d60003960006103ec015260006103b7015260006101490152610acb6000f3fe608060405234801561001057600080fd5b50600436106100d45760003560e01c806370a0823111610081578063a9059cbb1161005b578063a9059cbb146101cd578063d505accf146101e0578063dd62ed3e146101f557600080fd5b806370a08231146101855780637ecebe00146101a557806395d89b41146101c557600080fd5b806323b872dd116100b257806323b872dd14610131578063313ce567146101445780633644e5151461017d57600080fd5b806306fdde03146100d9578063095ea7b3146100f757806318160ddd1461011a575b600080fd5b6100e1610220565b6040516100ee91906109e4565b60405180910390f35b61010a610105366004610920565b6102ae565b60405190151581526020016100ee565b61012360025481565b6040519081526020016100ee565b61010a61013f366004610874565b6102c1565b61016b7f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff90911681526020016100ee565b6101236103b3565b610123610193366004610828565b60036020526000908152604090205481565b6101236101b3366004610828565b60056020526000908152604090205481565b6100e161040e565b61010a6101db366004610920565b61041b565b6101f36101ee3660046108af565b6104a4565b005b610123610203366004610842565b600460209081526000928352604080842090915290825290205481565b6000805461022d90610a5a565b80601f016020809104026020016040519081016040528092919081815260200182805461025990610a5a565b80156102a65780601f1061027b576101008083540402835291602001916102a6565b820191906000526020600020905b81548152906001019060200180831161028957829003601f168201915b505050505081565b60006102ba8383610717565b9392505050565b6001600160a01b0383166000908152600460209081526040808320338452909152812054600019811461031d576102f88382610a37565b6001600160a01b03861660009081526004602090815260408083203384529091529020555b6001600160a01b03851660009081526003602052604081208054859290610345908490610a37565b90915550506001600160a01b03808516600081815260036020526040908190208054870190555190918716907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906103a09087815260200190565b60405180910390a3506001949350505050565b60007f000000000000000000000000000000000000000000000000000000000000000046146103e9576103e4610772565b905090565b507f000000000000000000000000000000000000000000000000000000000000000090565b6001805461022d90610a5a565b3360009081526003602052604081208054839190839061043c908490610a37565b90915550506001600160a01b038316600081815260036020526040908190208054850190555133907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906104939086815260200190565b60405180910390a350600192915050565b428410156104f95760405162461bcd60e51b815260206004820152601760248201527f5045524d49545f444541444c494e455f4558504952454400000000000000000060448201526064015b60405180910390fd5b600060016105056103b3565b6001600160a01b038a811660008181526005602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938d166060840152608083018c905260a083019390935260c08083018b90528151808403909101815260e0830190915280519201919091207f19010000000000000000000000000000000000000000000000000000000000006101008301526101028201929092526101228101919091526101420160408051601f198184030181528282528051602091820120600084529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa15801561062c573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116158015906106625750876001600160a01b0316816001600160a01b0316145b6106ae5760405162461bcd60e51b815260206004820152600e60248201527f494e56414c49445f5349474e455200000000000000000000000000000000000060448201526064016104f0565b6001600160a01b0390811660009081526004602090815260408083208a8516808552908352928190208990555188815291928a16917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b3360008181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906104939086815260200190565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60006040516107a49190610949565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b80356001600160a01b038116811461082357600080fd5b919050565b600060208284031215610839578081fd5b6102ba8261080c565b60008060408385031215610854578081fd5b61085d8361080c565b915061086b6020840161080c565b90509250929050565b600080600060608486031215610888578081fd5b6108918461080c565b925061089f6020850161080c565b9150604084013590509250925092565b600080600080600080600060e0888a0312156108c9578283fd5b6108d28861080c565b96506108e06020890161080c565b95506040880135945060608801359350608088013560ff81168114610903578384fd5b9699959850939692959460a0840135945060c09093013592915050565b60008060408385031215610932578182fd5b61093b8361080c565b946020939093013593505050565b600080835482600182811c91508083168061096557607f831692505b602080841082141561098557634e487b7160e01b87526022600452602487fd5b81801561099957600181146109aa576109d6565b60ff198616895284890196506109d6565b60008a815260209020885b868110156109ce5781548b8201529085019083016109b5565b505084890196505b509498975050505050505050565b6000602080835283518082850152825b81811015610a10578581018301518582016040015282016109f4565b81811115610a215783604083870101525b50601f01601f1916929092016040019392505050565b600082821015610a5557634e487b7160e01b81526011600452602481fd5b500390565b600181811c90821680610a6e57607f821691505b60208210811415610a8f57634e487b7160e01b600052602260045260246000fd5b5091905056fea26469706673582212209105b215bbb536ffb2352f1ef664c70d7b89d089a0f39a7c12468f806edb036264736f6c63430008040033";

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
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CurioERC20> {
    return super.deploy(
      _name,
      _symbol,
      _decimals,
      overrides || {}
    ) as Promise<CurioERC20>;
  }
  override getDeployTransaction(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    _decimals: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _name,
      _symbol,
      _decimals,
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