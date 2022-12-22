/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  QueryLib,
  QueryLibInterface,
} from "../../../contracts/libraries/QueryLib";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "array",
        type: "uint256[]",
      },
    ],
    name: "arrayToList",
    outputs: [
      {
        internalType: "LinkedList",
        name: "list",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "LinkedList",
        name: "list",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "length",
        type: "uint256",
      },
    ],
    name: "listToArray",
    outputs: [
      {
        internalType: "uint256[]",
        name: "array",
        type: "uint256[]",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x6103e461003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100405760003560e01c80635c35f12f14610045578063e87f3be91461006e575b600080fd5b610058610053366004610237565b61008f565b6040516100659190610259565b60405180910390f35b61008161007c3660046102b3565b610168565b604051908152602001610065565b60608167ffffffffffffffff8111156100aa576100aa61029d565b6040519080825280602002602001820160405280156100d3578160200160208202803683370190505b509050811561016257600169ffffffffffffffffffff606085901c1660005b821561015e5760006101168360408051808201909152600080825260208201525090565b9050806000015185838151811061012f5761012f610371565b60209081029190910101528161014481610387565b60b089901c949094015180151595509392506100f2915050565b5050505b92915050565b76200000000000000000000000000000000000000000000060005b82518110156101df576101cb6101c460405180604001604052808685815181106101af576101af610371565b60200260200101518152602001600081525090565b83906101e5565b9150806101d781610387565b915050610183565b50919050565b6000808360501b60b01c116001811461020a578260101b8360601b8517179150610230565b828460b01c8560a01b60b01c01528260101b6bffffffffffffffffffffffff1985161791505b5092915050565b6000806040838503121561024a57600080fd5b50508035926020909101359150565b6020808252825182820181905260009190848201906040850190845b8181101561029157835183529284019291840191600101610275565b50909695505050505050565b634e487b7160e01b600052604160045260246000fd5b600060208083850312156102c657600080fd5b823567ffffffffffffffff808211156102de57600080fd5b818501915085601f8301126102f257600080fd5b8135818111156103045761030461029d565b8060051b604051601f19603f830116810181811085821117156103295761032961029d565b60405291825284820192508381018501918883111561034757600080fd5b938501935b828510156103655784358452938501939285019261034c565b98975050505050505050565b634e487b7160e01b600052603260045260246000fd5b6000600182016103a757634e487b7160e01b600052601160045260246000fd5b506001019056fea2646970667358221220783b3a33b47b6f1c9d99f3f384477974bc6644de331495d262801720bd97cd3664736f6c634300080d0033";

type QueryLibConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: QueryLibConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class QueryLib__factory extends ContractFactory {
  constructor(...args: QueryLibConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<QueryLib> {
    return super.deploy(overrides || {}) as Promise<QueryLib>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): QueryLib {
    return super.attach(address) as QueryLib;
  }
  override connect(signer: Signer): QueryLib__factory {
    return super.connect(signer) as QueryLib__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): QueryLibInterface {
    return new utils.Interface(_abi) as QueryLibInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): QueryLib {
    return new Contract(address, _abi, signerOrProvider) as QueryLib;
  }
}
