/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  CurioWallet,
  CurioWalletInterface,
} from "../../contracts/CurioWallet";

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
        name: "_contractAddress",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_callData",
        type: "bytes",
      },
    ],
    name: "executeTx",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161060e38038061060e83398101604081905261002f916100c6565b6001600160a01b0381166100975760405162461bcd60e51b815260206004820152602560248201527f437572696f57616c6c65743a204469616d6f6e642061646472657373207265716044820152641d5a5c995960da1b606482015260840160405180910390fd5b600080546001600160a01b039092166001600160a01b03199283168117909155600180549092161790556100f6565b6000602082840312156100d857600080fd5b81516001600160a01b03811681146100ef57600080fd5b9392505050565b610509806101056000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063993a04b714610046578063f0b7db4e14610076578063fac5e98114610089575b600080fd5b600154610059906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b600054610059906001600160a01b031681565b61009c610097366004610358565b6100a9565b60405161006d9190610484565b60015460405163b356003960e01b81523060048201526060916000916001600160a01b039091169063b356003990602401602060405180830381865afa1580156100f7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061011b919061049e565b6000549091506001600160a01b0316331480610226575060015460405163b356003960e01b81523360048201526001600160a01b039091169063b356003990602401602060405180830381865afa15801561017a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061019e919061049e565b6001546040517ff27fe5da000000000000000000000000000000000000000000000000000000008152600481018490526001600160a01b039091169063f27fe5da90602401602060405180830381865afa158015610200573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610224919061049e565b145b61029d5760405162461bcd60e51b815260206004820152602860248201527f437572696f57616c6c65743a204f6e6c792067616d65206f72206f776e65722060448201527f63616e2063616c6c00000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b600080856001600160a01b0316856040516102b891906104b7565b6000604051808303816000865af19150503d80600081146102f5576040519150601f19603f3d011682016040523d82523d6000602084013e6102fa565b606091505b509150915081819061031f5760405162461bcd60e51b81526004016102949190610484565b5095945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000806040838503121561036b57600080fd5b82356001600160a01b038116811461038257600080fd5b9150602083013567ffffffffffffffff8082111561039f57600080fd5b818501915085601f8301126103b357600080fd5b8135818111156103c5576103c5610329565b604051601f8201601f19908116603f011681019083821181831017156103ed576103ed610329565b8160405282815288602084870101111561040657600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b60005b8381101561044357818101518382015260200161042b565b83811115610452576000848401525b50505050565b60008151808452610470816020860160208601610428565b601f01601f19169290920160200192915050565b6020815260006104976020830184610458565b9392505050565b6000602082840312156104b057600080fd5b5051919050565b600082516104c9818460208701610428565b919091019291505056fea2646970667358221220d15fc9e4c1673130a8deca5659ae877fcf915e840a37875658c0ce41130e801364736f6c634300080d0033";

type CurioWalletConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CurioWalletConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CurioWallet__factory extends ContractFactory {
  constructor(...args: CurioWalletConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _diamond: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CurioWallet> {
    return super.deploy(_diamond, overrides || {}) as Promise<CurioWallet>;
  }
  override getDeployTransaction(
    _diamond: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_diamond, overrides || {});
  }
  override attach(address: string): CurioWallet {
    return super.attach(address) as CurioWallet;
  }
  override connect(signer: Signer): CurioWallet__factory {
    return super.connect(signer) as CurioWallet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CurioWalletInterface {
    return new utils.Interface(_abi) as CurioWalletInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CurioWallet {
    return new Contract(address, _abi, signerOrProvider) as CurioWallet;
  }
}
