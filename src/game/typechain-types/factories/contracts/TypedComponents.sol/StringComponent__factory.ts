/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  StringComponent,
  StringComponentInterface,
} from "../../../contracts/TypedComponents.sol/StringComponent";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_gameAddr",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "getAllEntitiesAndValues",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "",
        type: "bytes[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_entity",
        type: "uint256",
      },
    ],
    name: "getBytesValue",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getEntities",
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
    inputs: [],
    name: "getEntitiesAsSet",
    outputs: [
      {
        internalType: "contract Set",
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
        name: "_value",
        type: "bytes",
      },
    ],
    name: "getEntitiesWithValue",
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
        internalType: "string",
        name: "_value",
        type: "string",
      },
    ],
    name: "getEntitiesWithValue",
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
        internalType: "bytes",
        name: "_value",
        type: "bytes",
      },
    ],
    name: "getEntitiesWithValueAsSet",
    outputs: [
      {
        internalType: "contract Set",
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
        name: "_entity",
        type: "uint256",
      },
    ],
    name: "getValue",
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
        name: "_entity",
        type: "uint256",
      },
    ],
    name: "has",
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
        name: "_entity",
        type: "uint256",
      },
    ],
    name: "remove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_entity",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_value",
        type: "string",
      },
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_entity",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_value",
        type: "bytes",
      },
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a0604052604051610010906100dc565b604051809103906000f08015801561002c573d6000803e3d6000fd5b506001600160a01b0316608052604051610045906100dc565b604051809103906000f080158015610061573d6000803e3d6000fd5b50600180546001600160a01b03929092166001600160a01b031992831617905560048054909116905534801561009657600080fd5b5060405162001bd838038062001bd88339810160408190526100b7916100ea565b600080546001600160a01b0319166001600160a01b039290921691909117905561011a565b6104af806200172983390190565b6000602082840312156100fc57600080fd5b81516001600160a01b038116811461011357600080fd5b9392505050565b6080516115f36200013660003960006109fc01526115f36000f3fe608060405234801561001057600080fd5b50600436106100d45760003560e01c80638b28294711610081578063b361be461161005b578063b361be46146101b7578063cccf7a8e146101ca578063f94655da146101ed57600080fd5b80638b282947146101685780639933adfd1461017b578063a1d8509f146101a657600080fd5b80634cc82215116100b25780634cc822151461012a578063643719771461013f57806378d9f34f1461015257600080fd5b80630ff4c916146100d957806331b933b9146101025780634c518fdc14610117575b600080fd5b6100ec6100e7366004610c25565b610200565b6040516100f99190610c9a565b60405180910390f35b61010a610224565b6040516100f99190610cef565b6100ec610125366004610c25565b6102b4565b61013d610138366004610c25565b610356565b005b61013d61014d366004610dc7565b61050b565b61015a610534565b6040516100f9929190610e0e565b61013d610176366004610dc7565b610703565b61018e610189366004610e80565b6109c9565b6040516001600160a01b0390911681526020016100f9565b6001546001600160a01b031661018e565b61010a6101c5366004610e80565b610a21565b6101dd6101d8366004610c25565b610a91565b60405190151581526020016100f9565b61010a6101fb366004610e80565b610b18565b606061020b826102b4565b80602001905181019061021e9190610ebd565b92915050565b600154604080517f53ed514300000000000000000000000000000000000000000000000000000000815290516060926001600160a01b0316916353ed51439160048083019260009291908290030181865afa158015610287573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526102af9190810190610f34565b905090565b60008181526002602052604090208054606091906102d190610fda565b80601f01602080910402602001604051908101604052809291908181526020018280546102fd90610fda565b801561034a5780601f1061031f5761010080835404028352916020019161034a565b820191906000526020600020905b81548152906001019060200180831161032d57829003601f168201915b50505050509050919050565b6000546001600160a01b031633148061036e57503330145b6103e55760405162461bcd60e51b815260206004820152602e60248201527f436f6d706f6e656e743a204f6e6c792067616d65206f722073656c662063616e60448201527f206d6f646966792076616c75657300000000000000000000000000000000000060648201526084015b60405180910390fd5b600154604051634cc8221560e01b8152600481018390526001600160a01b0390911690634cc8221590602401600060405180830381600087803b15801561042b57600080fd5b505af115801561043f573d6000803e3d6000fd5b5050506000828152600260205260408082209051919250600391839161046491611014565b60408051918290039091208252602082019290925201600020546004546001600160a01b0391821692501681146104f057604051634cc8221560e01b8152600481018390526001600160a01b03821690634cc8221590602401600060405180830381600087803b1580156104d757600080fd5b505af11580156104eb573d6000803e3d6000fd5b505050505b600082815260026020526040812061050791610b42565b5050565b61050782826040516020016105209190610c9a565b604051602081830303815290604052610703565b6060806000600160009054906101000a90046001600160a01b03166001600160a01b03166353ed51436040518163ffffffff1660e01b8152600401600060405180830381865afa15801561058c573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526105b49190810190610f34565b90506000815167ffffffffffffffff8111156105d2576105d2610d02565b60405190808252806020026020018201604052801561060557816020015b60608152602001906001900390816105f05790505b50905060005b82518110156106f9576002600084838151811061062a5761062a6110af565b60200260200101518152602001908152602001600020805461064b90610fda565b80601f016020809104026020016040519081016040528092919081815260200182805461067790610fda565b80156106c45780601f10610699576101008083540402835291602001916106c4565b820191906000526020600020905b8154815290600101906020018083116106a757829003601f168201915b50505050508282815181106106db576106db6110af565b602002602001018190525080806106f1906110c5565b91505061060b565b5090939092509050565b6000546001600160a01b031633148061071b57503330145b61078d5760405162461bcd60e51b815260206004820152602e60248201527f436f6d706f6e656e743a204f6e6c792067616d65206f722073656c662063616e60448201527f206d6f646966792076616c75657300000000000000000000000000000000000060648201526084016103dc565b600154604051630801f16960e11b8152600481018490526001600160a01b0390911690631003e2d290602401600060405180830381600087803b1580156107d357600080fd5b505af11580156107e7573d6000803e3d6000fd5b5050506000838152600260205260408082209051919250600391839161080c91611014565b60408051918290039091208252602082019290925201600020546004546001600160a01b03918216925016811461089857604051634cc8221560e01b8152600481018490526001600160a01b03821690634cc8221590602401600060405180830381600087803b15801561087f57600080fd5b505af1158015610893573d6000803e3d6000fd5b505050505b600083815260026020908152604090912083516108b792850190610b7f565b5081516020808401919091206004546000828152600390935260409092205490916001600160a01b03908116911603610958576040516108f690610c03565b604051809103906000f080158015610912573d6000803e3d6000fd5b50600082815260036020526040902080547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b03929092169190911790555b60008181526003602052604090819020549051630801f16960e11b8152600481018690526001600160a01b0390911690631003e2d290602401600060405180830381600087803b1580156109ab57600080fd5b505af11580156109bf573d6000803e3d6000fd5b5050505050505050565b80516020808301919091206000908152600390915260408120546004546001600160a01b039182169116810361021e57507f000000000000000000000000000000000000000000000000000000000000000092915050565b6060610a2c826109c9565b6001600160a01b03166353ed51436040518163ffffffff1660e01b8152600401600060405180830381865afa158015610a69573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261021e9190810190610f34565b6001546040517f9f161b0a000000000000000000000000000000000000000000000000000000008152600481018390526000916001600160a01b031690639f161b0a90602401602060405180830381865afa158015610af4573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061021e91906110ec565b606061021e82604051602001610b2e9190610c9a565b604051602081830303815290604052610a21565b508054610b4e90610fda565b6000825580601f10610b5e575050565b601f016020900490600052602060002090810190610b7c9190610c10565b50565b828054610b8b90610fda565b90600052602060002090601f016020900481019282610bad5760008555610bf3565b82601f10610bc657805160ff1916838001178555610bf3565b82800160010185558215610bf3579182015b82811115610bf3578251825591602001919060010190610bd8565b50610bff929150610c10565b5090565b6104af8061110f83390190565b5b80821115610bff5760008155600101610c11565b600060208284031215610c3757600080fd5b5035919050565b60005b83811015610c59578181015183820152602001610c41565b83811115610c68576000848401525b50505050565b60008151808452610c86816020860160208601610c3e565b601f01601f19169290920160200192915050565b602081526000610cad6020830184610c6e565b9392505050565b600081518084526020808501945080840160005b83811015610ce457815187529582019590820190600101610cc8565b509495945050505050565b602081526000610cad6020830184610cb4565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715610d4157610d41610d02565b604052919050565b600067ffffffffffffffff821115610d6357610d63610d02565b50601f01601f191660200190565b600082601f830112610d8257600080fd5b8135610d95610d9082610d49565b610d18565b818152846020838601011115610daa57600080fd5b816020850160208301376000918101602001919091529392505050565b60008060408385031215610dda57600080fd5b82359150602083013567ffffffffffffffff811115610df857600080fd5b610e0485828601610d71565b9150509250929050565b604081526000610e216040830185610cb4565b6020838203818501528185518084528284019150828160051b85010183880160005b83811015610e7157601f19878403018552610e5f838351610c6e565b94860194925090850190600101610e43565b50909998505050505050505050565b600060208284031215610e9257600080fd5b813567ffffffffffffffff811115610ea957600080fd5b610eb584828501610d71565b949350505050565b600060208284031215610ecf57600080fd5b815167ffffffffffffffff811115610ee657600080fd5b8201601f81018413610ef757600080fd5b8051610f05610d9082610d49565b818152856020838501011115610f1a57600080fd5b610f2b826020830160208601610c3e565b95945050505050565b60006020808385031215610f4757600080fd5b825167ffffffffffffffff80821115610f5f57600080fd5b818501915085601f830112610f7357600080fd5b815181811115610f8557610f85610d02565b8060051b9150610f96848301610d18565b8181529183018401918481019088841115610fb057600080fd5b938501935b83851015610fce57845182529385019390850190610fb5565b98975050505050505050565b600181811c90821680610fee57607f821691505b60208210810361100e57634e487b7160e01b600052602260045260246000fd5b50919050565b600080835481600182811c91508083168061103057607f831692505b6020808410820361104f57634e487b7160e01b86526022600452602486fd5b8180156110635760018114611074576110a1565b60ff198616895284890196506110a1565b60008a81526020902060005b868110156110995781548b820152908501908301611080565b505084890196505b509498975050505050505050565b634e487b7160e01b600052603260045260246000fd5b6000600182016110e557634e487b7160e01b600052601160045260246000fd5b5060010190565b6000602082840312156110fe57600080fd5b81518015158114610cad57600080fdfe608060405234801561001057600080fd5b50600080546001600160a01b0319163317905561047d806100326000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c806353ed51431161005057806353ed514314610094578063949d225d146100b25780639f161b0a146100c357600080fd5b80631003e2d21461006c5780634cc8221514610081575b600080fd5b61007f61007a366004610399565b6100e6565b005b61007f61008f366004610399565b6101bd565b61009c6102e8565b6040516100a991906103b2565b60405180910390f35b6001546040519081526020016100a9565b6100d66100d1366004610399565b610340565b60405190151581526020016100a9565b60005473ffffffffffffffffffffffffffffffffffffffff16331461015e5760405162461bcd60e51b8152602060048201526024808201527f5365743a204f6e6c79206465706c6f7965722063616e206d6f646966792076616044820152636c75657360e01b60648201526084015b60405180910390fd5b61016781610340565b6101ba5760018054808201825560008290527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf60182905580546101aa91906103f6565b6000828152600260205260409020555b50565b60005473ffffffffffffffffffffffffffffffffffffffff1633146102305760405162461bcd60e51b8152602060048201526024808201527f5365743a204f6e6c79206465706c6f7965722063616e206d6f646966792076616044820152636c75657360e01b6064820152608401610155565b61023981610340565b156101ba576000818152600260205260408120549060018061025a60015490565b61026491906103f6565b815481106102745761027461041b565b9060005260206000200154905080600183815481106102955761029561041b565b60009182526020808320909101929092558281526002909152604080822084905584825281205560018054806102cd576102cd610431565b60019003818190600052602060002001600090559055505050565b6060600180548060200260200160405190810160405280929190818152602001828054801561033657602002820191906000526020600020905b815481526020019060010190808311610322575b5050505050905090565b600061034b60015490565b60000361035a57506000919050565b60008281526002602052604090205415158061039357508160016000815481106103865761038661041b565b9060005260206000200154145b92915050565b6000602082840312156103ab57600080fd5b5035919050565b6020808252825182820181905260009190848201906040850190845b818110156103ea578351835292840192918401916001016103ce565b50909695505050505050565b60008282101561041657634e487b7160e01b600052601160045260246000fd5b500390565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052603160045260246000fdfea2646970667358221220ebde7a6ce6f021fdc810c16de3d7df0f72534ae7915f8069ae1d3872a5fc997564736f6c634300080d0033a264697066735822122042ad1700c5cfae90ce95560088ca07730995841e459da4b1dfaf212c34d2557364736f6c634300080d0033608060405234801561001057600080fd5b50600080546001600160a01b0319163317905561047d806100326000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c806353ed51431161005057806353ed514314610094578063949d225d146100b25780639f161b0a146100c357600080fd5b80631003e2d21461006c5780634cc8221514610081575b600080fd5b61007f61007a366004610399565b6100e6565b005b61007f61008f366004610399565b6101bd565b61009c6102e8565b6040516100a991906103b2565b60405180910390f35b6001546040519081526020016100a9565b6100d66100d1366004610399565b610340565b60405190151581526020016100a9565b60005473ffffffffffffffffffffffffffffffffffffffff16331461015e5760405162461bcd60e51b8152602060048201526024808201527f5365743a204f6e6c79206465706c6f7965722063616e206d6f646966792076616044820152636c75657360e01b60648201526084015b60405180910390fd5b61016781610340565b6101ba5760018054808201825560008290527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf60182905580546101aa91906103f6565b6000828152600260205260409020555b50565b60005473ffffffffffffffffffffffffffffffffffffffff1633146102305760405162461bcd60e51b8152602060048201526024808201527f5365743a204f6e6c79206465706c6f7965722063616e206d6f646966792076616044820152636c75657360e01b6064820152608401610155565b61023981610340565b156101ba576000818152600260205260408120549060018061025a60015490565b61026491906103f6565b815481106102745761027461041b565b9060005260206000200154905080600183815481106102955761029561041b565b60009182526020808320909101929092558281526002909152604080822084905584825281205560018054806102cd576102cd610431565b60019003818190600052602060002001600090559055505050565b6060600180548060200260200160405190810160405280929190818152602001828054801561033657602002820191906000526020600020905b815481526020019060010190808311610322575b5050505050905090565b600061034b60015490565b60000361035a57506000919050565b60008281526002602052604090205415158061039357508160016000815481106103865761038661041b565b9060005260206000200154145b92915050565b6000602082840312156103ab57600080fd5b5035919050565b6020808252825182820181905260009190848201906040850190845b818110156103ea578351835292840192918401916001016103ce565b50909695505050505050565b60008282101561041657634e487b7160e01b600052601160045260246000fd5b500390565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052603160045260246000fdfea2646970667358221220ebde7a6ce6f021fdc810c16de3d7df0f72534ae7915f8069ae1d3872a5fc997564736f6c634300080d0033";

type StringComponentConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StringComponentConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StringComponent__factory extends ContractFactory {
  constructor(...args: StringComponentConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _gameAddr: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<StringComponent> {
    return super.deploy(_gameAddr, overrides || {}) as Promise<StringComponent>;
  }
  override getDeployTransaction(
    _gameAddr: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_gameAddr, overrides || {});
  }
  override attach(address: string): StringComponent {
    return super.attach(address) as StringComponent;
  }
  override connect(signer: Signer): StringComponent__factory {
    return super.connect(signer) as StringComponent__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StringComponentInterface {
    return new utils.Interface(_abi) as StringComponentInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StringComponent {
    return new Contract(address, _abi, signerOrProvider) as StringComponent;
  }
}
