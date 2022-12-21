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
  "0x60a0604052604051610010906100da565b604051809103906000f08015801561002c573d6000803e3d6000fd5b506001600160a01b0316608052604051610045906100da565b604051809103906000f080158015610061573d6000803e3d6000fd5b50600180546001600160a01b03929092166001600160a01b031992831617905560048054909116905534801561009657600080fd5b506040516118cd3803806118cd8339810160408190526100b5916100e7565b600080546001600160a01b0319166001600160a01b0392909216919091179055610117565b6103b88061151583390190565b6000602082840312156100f957600080fd5b81516001600160a01b038116811461011057600080fd5b9392505050565b6080516113e361013260003960006108e301526113e36000f3fe608060405234801561001057600080fd5b50600436106100d45760003560e01c80638b28294711610081578063b361be461161005b578063b361be46146101b7578063cccf7a8e146101ca578063f94655da146101ed57600080fd5b80638b282947146101685780639933adfd1461017b578063a1d8509f146101a657600080fd5b80634cc82215116100b25780634cc822151461012a578063643719771461013f57806378d9f34f1461015257600080fd5b80630ff4c916146100d957806331b933b9146101025780634c518fdc14610117575b600080fd5b6100ec6100e7366004610b0c565b610200565b6040516100f99190610b81565b60405180910390f35b61010a610224565b6040516100f99190610bd6565b6100ec610125366004610b0c565b6102b4565b61013d610138366004610b0c565b610356565b005b61013d61014d366004610cae565b61047c565b61015a6104a5565b6040516100f9929190610cf5565b61013d610176366004610cae565b610674565b61018e610189366004610d67565b6108b0565b6040516001600160a01b0390911681526020016100f9565b6001546001600160a01b031661018e565b61010a6101c5366004610d67565b610908565b6101dd6101d8366004610b0c565b610978565b60405190151581526020016100f9565b61010a6101fb366004610d67565b6109ff565b606061020b826102b4565b80602001905181019061021e9190610da4565b92915050565b600154604080517f53ed514300000000000000000000000000000000000000000000000000000000815290516060926001600160a01b0316916353ed51439160048083019260009291908290030181865afa158015610287573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526102af9190810190610e1b565b905090565b60008181526002602052604090208054606091906102d190610ec1565b80601f01602080910402602001604051908101604052809291908181526020018280546102fd90610ec1565b801561034a5780601f1061031f5761010080835404028352916020019161034a565b820191906000526020600020905b81548152906001019060200180831161032d57829003601f168201915b50505050509050919050565b600154604051634cc8221560e01b8152600481018390526001600160a01b0390911690634cc8221590602401600060405180830381600087803b15801561039c57600080fd5b505af11580156103b0573d6000803e3d6000fd5b505050600082815260026020526040808220905191925060039183916103d591610efb565b60408051918290039091208252602082019290925201600020546004546001600160a01b03918216925016811461046157604051634cc8221560e01b8152600481018390526001600160a01b03821690634cc8221590602401600060405180830381600087803b15801561044857600080fd5b505af115801561045c573d6000803e3d6000fd5b505050505b600082815260026020526040812061047891610a29565b5050565b61047882826040516020016104919190610b81565b604051602081830303815290604052610674565b6060806000600160009054906101000a90046001600160a01b03166001600160a01b03166353ed51436040518163ffffffff1660e01b8152600401600060405180830381865afa1580156104fd573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526105259190810190610e1b565b90506000815167ffffffffffffffff81111561054357610543610be9565b60405190808252806020026020018201604052801561057657816020015b60608152602001906001900390816105615790505b50905060005b825181101561066a576002600084838151811061059b5761059b610f96565b6020026020010151815260200190815260200160002080546105bc90610ec1565b80601f01602080910402602001604051908101604052809291908181526020018280546105e890610ec1565b80156106355780601f1061060a57610100808354040283529160200191610635565b820191906000526020600020905b81548152906001019060200180831161061857829003601f168201915b505050505082828151811061064c5761064c610f96565b6020026020010181905250808061066290610fac565b91505061057c565b5090939092509050565b600154604051630801f16960e11b8152600481018490526001600160a01b0390911690631003e2d290602401600060405180830381600087803b1580156106ba57600080fd5b505af11580156106ce573d6000803e3d6000fd5b505050600083815260026020526040808220905191925060039183916106f391610efb565b60408051918290039091208252602082019290925201600020546004546001600160a01b03918216925016811461077f57604051634cc8221560e01b8152600481018490526001600160a01b03821690634cc8221590602401600060405180830381600087803b15801561076657600080fd5b505af115801561077a573d6000803e3d6000fd5b505050505b6000838152600260209081526040909120835161079e92850190610a66565b5081516020808401919091206004546000828152600390935260409092205490916001600160a01b0390811691160361083f576040516107dd90610aea565b604051809103906000f0801580156107f9573d6000803e3d6000fd5b50600082815260036020526040902080547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b03929092169190911790555b60008181526003602052604090819020549051630801f16960e11b8152600481018690526001600160a01b0390911690631003e2d290602401600060405180830381600087803b15801561089257600080fd5b505af11580156108a6573d6000803e3d6000fd5b5050505050505050565b80516020808301919091206000908152600390915260408120546004546001600160a01b039182169116810361021e57507f000000000000000000000000000000000000000000000000000000000000000092915050565b6060610913826108b0565b6001600160a01b03166353ed51436040518163ffffffff1660e01b8152600401600060405180830381865afa158015610950573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261021e9190810190610e1b565b6001546040517f9f161b0a000000000000000000000000000000000000000000000000000000008152600481018390526000916001600160a01b031690639f161b0a90602401602060405180830381865afa1580156109db573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061021e9190610fd3565b606061021e82604051602001610a159190610b81565b604051602081830303815290604052610908565b508054610a3590610ec1565b6000825580601f10610a45575050565b601f016020900490600052602060002090810190610a639190610af7565b50565b828054610a7290610ec1565b90600052602060002090601f016020900481019282610a945760008555610ada565b82601f10610aad57805160ff1916838001178555610ada565b82800160010185558215610ada579182015b82811115610ada578251825591602001919060010190610abf565b50610ae6929150610af7565b5090565b6103b880610ff683390190565b5b80821115610ae65760008155600101610af8565b600060208284031215610b1e57600080fd5b5035919050565b60005b83811015610b40578181015183820152602001610b28565b83811115610b4f576000848401525b50505050565b60008151808452610b6d816020860160208601610b25565b601f01601f19169290920160200192915050565b602081526000610b946020830184610b55565b9392505050565b600081518084526020808501945080840160005b83811015610bcb57815187529582019590820190600101610baf565b509495945050505050565b602081526000610b946020830184610b9b565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715610c2857610c28610be9565b604052919050565b600067ffffffffffffffff821115610c4a57610c4a610be9565b50601f01601f191660200190565b600082601f830112610c6957600080fd5b8135610c7c610c7782610c30565b610bff565b818152846020838601011115610c9157600080fd5b816020850160208301376000918101602001919091529392505050565b60008060408385031215610cc157600080fd5b82359150602083013567ffffffffffffffff811115610cdf57600080fd5b610ceb85828601610c58565b9150509250929050565b604081526000610d086040830185610b9b565b6020838203818501528185518084528284019150828160051b85010183880160005b83811015610d5857601f19878403018552610d46838351610b55565b94860194925090850190600101610d2a565b50909998505050505050505050565b600060208284031215610d7957600080fd5b813567ffffffffffffffff811115610d9057600080fd5b610d9c84828501610c58565b949350505050565b600060208284031215610db657600080fd5b815167ffffffffffffffff811115610dcd57600080fd5b8201601f81018413610dde57600080fd5b8051610dec610c7782610c30565b818152856020838501011115610e0157600080fd5b610e12826020830160208601610b25565b95945050505050565b60006020808385031215610e2e57600080fd5b825167ffffffffffffffff80821115610e4657600080fd5b818501915085601f830112610e5a57600080fd5b815181811115610e6c57610e6c610be9565b8060051b9150610e7d848301610bff565b8181529183018401918481019088841115610e9757600080fd5b938501935b83851015610eb557845182529385019390850190610e9c565b98975050505050505050565b600181811c90821680610ed557607f821691505b602082108103610ef557634e487b7160e01b600052602260045260246000fd5b50919050565b600080835481600182811c915080831680610f1757607f831692505b60208084108203610f3657634e487b7160e01b86526022600452602486fd5b818015610f4a5760018114610f5b57610f88565b60ff19861689528489019650610f88565b60008a81526020902060005b86811015610f805781548b820152908501908301610f67565b505084890196505b509498975050505050505050565b634e487b7160e01b600052603260045260246000fd5b600060018201610fcc57634e487b7160e01b600052601160045260246000fd5b5060010190565b600060208284031215610fe557600080fd5b81518015158114610b9457600080fdfe608060405234801561001057600080fd5b50610398806100206000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c806353ed51431161005057806353ed514314610094578063949d225d146100b25780639f161b0a146100c357600080fd5b80631003e2d21461006c5780634cc8221514610081575b600080fd5b61007f61007a3660046102b4565b6100e6565b005b61007f61008f3660046102b4565b61014f565b61009c61020b565b6040516100a991906102cd565b60405180910390f35b6000546040519081526020016100a9565b6100d66100d13660046102b4565b610263565b60405190151581526020016100a9565b6100ef81610263565b156100f75750565b60008054600181810183559180527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5630182905561013360005490565b61013d9190610311565b60009182526001602052604090912055565b61015881610263565b61015f5750565b60008181526001602081905260408220549190819061017d60005490565b6101879190610311565b8154811061019757610197610336565b9060005260206000200154905080600083815481106101b8576101b8610336565b60009182526020808320909101929092558281526001909152604080822084905584825281208190558054806101f0576101f061034c565b60019003818190600052602060002001600090559055505050565b6060600080548060200260200160405190810160405280929190818152602001828054801561025957602002820191906000526020600020905b815481526020019060010190808311610245575b5050505050905090565b6000805460000361027657506000919050565b6000828152600160205260409020541515806102ae575081600080815481106102a1576102a1610336565b9060005260206000200154145b92915050565b6000602082840312156102c657600080fd5b5035919050565b6020808252825182820181905260009190848201906040850190845b81811015610305578351835292840192918401916001016102e9565b50909695505050505050565b60008282101561033157634e487b7160e01b600052601160045260246000fd5b500390565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052603160045260246000fdfea264697066735822122044a6b59e3f4cc51fb52700a3a654b0f0db6451ab7312e182fced1c3775e1cd3d64736f6c634300080d0033a2646970667358221220e4b61a723870105545021434c28068aedc7e7c5dd0143ec0969a6bd6f10f544b64736f6c634300080d0033608060405234801561001057600080fd5b50610398806100206000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c806353ed51431161005057806353ed514314610094578063949d225d146100b25780639f161b0a146100c357600080fd5b80631003e2d21461006c5780634cc8221514610081575b600080fd5b61007f61007a3660046102b4565b6100e6565b005b61007f61008f3660046102b4565b61014f565b61009c61020b565b6040516100a991906102cd565b60405180910390f35b6000546040519081526020016100a9565b6100d66100d13660046102b4565b610263565b60405190151581526020016100a9565b6100ef81610263565b156100f75750565b60008054600181810183559180527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5630182905561013360005490565b61013d9190610311565b60009182526001602052604090912055565b61015881610263565b61015f5750565b60008181526001602081905260408220549190819061017d60005490565b6101879190610311565b8154811061019757610197610336565b9060005260206000200154905080600083815481106101b8576101b8610336565b60009182526020808320909101929092558281526001909152604080822084905584825281208190558054806101f0576101f061034c565b60019003818190600052602060002001600090559055505050565b6060600080548060200260200160405190810160405280929190818152602001828054801561025957602002820191906000526020600020905b815481526020019060010190808311610245575b5050505050905090565b6000805460000361027657506000919050565b6000828152600160205260409020541515806102ae575081600080815481106102a1576102a1610336565b9060005260206000200154145b92915050565b6000602082840312156102c657600080fd5b5035919050565b6020808252825182820181905260009190848201906040850190845b81811015610305578351835292840192918401916001016102e9565b50909695505050505050565b60008282101561033157634e487b7160e01b600052601160045260246000fd5b500390565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052603160045260246000fdfea264697066735822122044a6b59e3f4cc51fb52700a3a654b0f0db6451ab7312e182fced1c3775e1cd3d64736f6c634300080d0033";

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
