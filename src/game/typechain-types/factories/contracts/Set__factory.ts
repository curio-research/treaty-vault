/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Set, SetInterface } from "../../contracts/Set";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_element",
        type: "uint256",
      },
    ],
    name: "add",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAll",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_element",
        type: "uint256",
      },
    ],
    name: "includes",
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
        name: "_element",
        type: "uint256",
      },
    ],
    name: "remove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "size",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600080546001600160a01b0319163317905561047d806100326000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c806353ed51431161005057806353ed514314610094578063949d225d146100b25780639f161b0a146100c357600080fd5b80631003e2d21461006c5780634cc8221514610081575b600080fd5b61007f61007a366004610399565b6100e6565b005b61007f61008f366004610399565b6101bd565b61009c6102e8565b6040516100a991906103b2565b60405180910390f35b6001546040519081526020016100a9565b6100d66100d1366004610399565b610340565b60405190151581526020016100a9565b60005473ffffffffffffffffffffffffffffffffffffffff16331461015e5760405162461bcd60e51b8152602060048201526024808201527f5365743a204f6e6c79206465706c6f7965722063616e206d6f646966792076616044820152636c75657360e01b60648201526084015b60405180910390fd5b61016781610340565b6101ba5760018054808201825560008290527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf60182905580546101aa91906103f6565b6000828152600260205260409020555b50565b60005473ffffffffffffffffffffffffffffffffffffffff1633146102305760405162461bcd60e51b8152602060048201526024808201527f5365743a204f6e6c79206465706c6f7965722063616e206d6f646966792076616044820152636c75657360e01b6064820152608401610155565b61023981610340565b156101ba576000818152600260205260408120549060018061025a60015490565b61026491906103f6565b815481106102745761027461041b565b9060005260206000200154905080600183815481106102955761029561041b565b60009182526020808320909101929092558281526002909152604080822084905584825281205560018054806102cd576102cd610431565b60019003818190600052602060002001600090559055505050565b6060600180548060200260200160405190810160405280929190818152602001828054801561033657602002820191906000526020600020905b815481526020019060010190808311610322575b5050505050905090565b600061034b60015490565b60000361035a57506000919050565b60008281526002602052604090205415158061039357508160016000815481106103865761038661041b565b9060005260206000200154145b92915050565b6000602082840312156103ab57600080fd5b5035919050565b6020808252825182820181905260009190848201906040850190845b818110156103ea578351835292840192918401916001016103ce565b50909695505050505050565b60008282101561041657634e487b7160e01b600052601160045260246000fd5b500390565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052603160045260246000fdfea26469706673582212204af513f4c6ced8d8fbeaf7a242307a0a1384e8a5ba73c71c7d3d2e25f90a3d8164736f6c634300080d0033";

type SetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Set__factory extends ContractFactory {
  constructor(...args: SetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Set> {
    return super.deploy(overrides || {}) as Promise<Set>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Set {
    return super.attach(address) as Set;
  }
  override connect(signer: Signer): Set__factory {
    return super.connect(signer) as Set__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SetInterface {
    return new utils.Interface(_abi) as SetInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Set {
    return new Contract(address, _abi, signerOrProvider) as Set;
  }
}
