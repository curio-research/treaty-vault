/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TestTreaty,
  TestTreatyInterface,
} from "../../../contracts/treaties/TestTreaty";

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
    name: "approveDelegatePermission",
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
    stateMutability: "pure",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "delegatedGameFunctionNames",
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
  "0x60806040523480156200001157600080fd5b5060405162000c7538038062000c758339810160408190526200003491620001fa565b806001600160a01b0381166200009e5760405162461bcd60e51b815260206004820152602560248201527f437572696f5472656174793a204469616d6f6e642061646472657373207265716044820152641d5a5c995960da1b606482015260840160405180910390fd5b600080546001600160a01b039092166001600160a01b0319928316811790915560018054831682179055600280548316821790556003805490921617905560408051808201909152600b8082526a546573742054726561747960a81b6020909201918252620001109160049162000154565b506040805180820190915260128082527154726561747920666f722074657374696e6760701b60209092019182526200014c9160059162000154565b505062000268565b82805462000162906200022c565b90600052602060002090601f016020900481019282620001865760008555620001d1565b82601f10620001a157805160ff1916838001178555620001d1565b82800160010185558215620001d1579182015b82811115620001d1578251825591602001919060010190620001b4565b50620001df929150620001e3565b5090565b5b80821115620001df5760008155600101620001e4565b6000602082840312156200020d57600080fd5b81516001600160a01b03811681146200022557600080fd5b9392505050565b600181811c908216806200024157607f821691505b6020821081036200026257634e487b7160e01b600052602260045260246000fd5b50919050565b6109fd80620002786000396000f3fe608060405234801561001057600080fd5b50600436106101d95760003560e01c80636a2a2b4e11610104578063c3fe3e28116100a2578063ec19ae8011610071578063ec19ae80146101de578063f0b7db4e1461029c578063f2e1730b146101de578063f851a440146102af57600080fd5b8063c3fe3e2814610289578063cbb34e86146101de578063e534ae5f146101de578063e75991fa146101de57600080fd5b8063993a04b7116100de578063993a04b71461025e5780639bcecd0b146101de578063a83280bc146101de578063c009a6cb146101de57600080fd5b80636a2a2b4e146101de5780637284e416146102435780637fecf0981461024b57600080fd5b80632b451c641161017c57806347b958a61161014b57806347b958a6146102255780634ad30a91146101de5780635f310b12146101de57806360acfcc61461022d57600080fd5b80632b451c64146101de5780632d47fe27146101de57806337415516146101de57806339ebfad4146101de57600080fd5b80631bc8475d116101b85780631bc8475d146101de5780631c357173146101de578063243086c4146101de57806328f59b831461021b57600080fd5b8062048f5a146101de57806304dc7c74146101de57806306fdde0314610206575b600080fd5b6101f16101ec36600461074e565b6102c2565b60405190151581526020015b60405180910390f35b61020e610344565b6040516101fd9190610809565b6102236103d2565b005b610223610562565b6101f161023b36600461074e565b600092915050565b61020e610700565b61020e61025936600461085e565b61070d565b600254610271906001600160a01b031681565b6040516001600160a01b0390911681526020016101fd565b600154610271906001600160a01b031681565b600054610271906001600160a01b031681565b600354610271906001600160a01b031681565b600080546001600160a01b0316331461033b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f437572696f5472656174793a204f6e6c792067616d652063616e2063616c6c00604482015260640160405180910390fd5b50600192915050565b6004805461035190610877565b80601f016020809104026020016040519081016040528092919081815260200182805461037d90610877565b80156103ca5780601f1061039f576101008083540402835291602001916103ca565b820191906000526020600020905b8154815290600101906020018083116103ad57829003601f168201915b505050505081565b60025460405163b356003960e01b81523360048201526000916001600160a01b03169063b356003990602401602060405180830381865afa15801561041b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061043f91906108b1565b6003546040517f5ffde144000000000000000000000000000000000000000000000000000000008152600481018390529192506001600160a01b031690635ffde14490602401600060405180830381600087803b15801561049f57600080fd5b505af11580156104b3573d6000803e3d6000fd5b5050505060005b60065481101561055e57600354600680546001600160a01b03909216916359f50cfd918591859081106104ef576104ef6108ca565b9060005260206000200160006040518463ffffffff1660e01b8152600401610519939291906108e0565b600060405180830381600087803b15801561053357600080fd5b505af1158015610547573d6000803e3d6000fd5b505050508080610556906109a0565b9150506104ba565b5050565b60025460405163b356003960e01b81523360048201526000916001600160a01b03169063b356003990602401602060405180830381865afa1580156105ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105cf91906108b1565b6003546040517fff2a5e79000000000000000000000000000000000000000000000000000000008152600481018390529192506001600160a01b03169063ff2a5e79906024016020604051808303816000875af1158015610634573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061065891906108b1565b5060005b60065481101561055e57600354600680546001600160a01b03909216916359f50cfd91859185908110610691576106916108ca565b9060005260206000200160016040518463ffffffff1660e01b81526004016106bb939291906108e0565b600060405180830381600087803b1580156106d557600080fd5b505af11580156106e9573d6000803e3d6000fd5b5050505080806106f8906109a0565b91505061065c565b6005805461035190610877565b6006818154811061071d57600080fd5b90600052602060002001600091509050805461035190610877565b634e487b7160e01b600052604160045260246000fd5b6000806040838503121561076157600080fd5b82359150602083013567ffffffffffffffff8082111561078057600080fd5b818501915085601f83011261079457600080fd5b8135818111156107a6576107a6610738565b604051601f8201601f19908116603f011681019083821181831017156107ce576107ce610738565b816040528281528860208487010111156107e757600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b600060208083528351808285015260005b818110156108365785810183015185820160400152820161081a565b81811115610848576000604083870101525b50601f01601f1916929092016040019392505050565b60006020828403121561087057600080fd5b5035919050565b600181811c9082168061088b57607f821691505b6020821081036108ab57634e487b7160e01b600052602260045260246000fd5b50919050565b6000602082840312156108c357600080fd5b5051919050565b634e487b7160e01b600052603260045260246000fd5b838152600060206060818401526000855481600182811c91508083168061090857607f831692505b858310810361092557634e487b7160e01b85526022600452602485fd5b6060880183905260808801818015610944576001811461095557610980565b60ff19861682528782019650610980565b60008c81526020902060005b8681101561097a57815484820152908501908901610961565b83019750505b50505050861515604087015250909250610998915050565b949350505050565b6000600182016109c057634e487b7160e01b600052601160045260246000fd5b506001019056fea264697066735822122031736bb796fdbdaed8fe4212261aacbf5d4da9c00b129f591f33829642ad4c8f64736f6c634300080d0033";

type TestTreatyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestTreatyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestTreaty__factory extends ContractFactory {
  constructor(...args: TestTreatyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _diamond: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestTreaty> {
    return super.deploy(_diamond, overrides || {}) as Promise<TestTreaty>;
  }
  override getDeployTransaction(
    _diamond: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_diamond, overrides || {});
  }
  override attach(address: string): TestTreaty {
    return super.attach(address) as TestTreaty;
  }
  override connect(signer: Signer): TestTreaty__factory {
    return super.connect(signer) as TestTreaty__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestTreatyInterface {
    return new utils.Interface(_abi) as TestTreatyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestTreaty {
    return new Contract(address, _abi, signerOrProvider) as TestTreaty;
  }
}
