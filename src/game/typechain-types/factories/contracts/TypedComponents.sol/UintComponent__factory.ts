/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  UintComponent,
  UintComponentInterface,
} from "../../../contracts/TypedComponents.sol/UintComponent";

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
        internalType: "uint256",
        name: "_value",
        type: "uint256",
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
        internalType: "uint256",
        name: "_value",
        type: "uint256",
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
  "0x60a0604052604051610010906100e0565b604051809103906000f08015801561002c573d6000803e3d6000fd5b5060601b6001600160601b031916608052604051610049906100e0565b604051809103906000f080158015610065573d6000803e3d6000fd5b50600180546001600160a01b03929092166001600160a01b031992831617905560048054909116905534801561009a57600080fd5b5060405162001c4638038062001c468339810160408190526100bb916100ee565b600080546001600160a01b0319166001600160a01b039290921691909117905561011c565b610529806200171d83390190565b6000602082840312156100ff578081fd5b81516001600160a01b0381168114610115578182fd5b9392505050565b60805160601c6115e26200013b60003960006109cf01526115e26000f3fe608060405234801561001057600080fd5b50600436106100d45760003560e01c80638b28294711610081578063b361be461161005b578063b361be46146101c1578063cccf7a8e146101d4578063fbdfa1ea146101f757600080fd5b80638b282947146101725780639933adfd14610185578063a1d8509f146101b057600080fd5b80634c518fdc116100b25780634c518fdc146101295780634cc822151461014957806378d9f34f1461015c57600080fd5b80630ff4c916146100d95780631ab06ee5146100ff57806331b933b914610114575b600080fd5b6100ec6100e7366004610d8d565b61020a565b6040519081526020015b60405180910390f35b61011261010d366004610e02565b61022e565b005b61011c61025d565b6040516100f69190610f43565b61013c610137366004610d8d565b6102fc565b6040516100f69190610fc7565b610112610157366004610d8d565b610434565b610164610556565b6040516100f6929190610f56565b610112610180366004610dbd565b61075e565b610198610193366004610d52565b61099b565b6040516001600160a01b0390911681526020016100f6565b6001546001600160a01b0316610198565b61011c6101cf366004610d52565b6109f4565b6101e76101e2366004610d8d565b610a73565b60405190151581526020016100f6565b61011c610205366004610d8d565b610b09565b6000610215826102fc565b8060200190518101906102289190610da5565b92915050565b610259828260405160200161024591815260200190565b60405160208183030381529060405261075e565b5050565b600154604080517f53ed514300000000000000000000000000000000000000000000000000000000815290516060926001600160a01b0316916353ed5143916004808301926000929190829003018186803b1580156102bb57600080fd5b505afa1580156102cf573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526102f79190810190610c83565b905090565b606061030782610a73565b610396576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f435552494f3a20456e74697479206e6f7420666f756e6420696e20636f6d706f60448201527f6e656e7400000000000000000000000000000000000000000000000000000000606482015260840160405180910390fd5b600082815260026020526040902080546103af9061100b565b80601f01602080910402602001604051908101604052809291908181526020018280546103db9061100b565b80156104285780601f106103fd57610100808354040283529160200191610428565b820191906000526020600020905b81548152906001019060200180831161040b57829003601f168201915b50505050509050919050565b600154604051634cc8221560e01b8152600481018390526001600160a01b0390911690634cc8221590602401600060405180830381600087803b15801561047a57600080fd5b505af115801561048e573d6000803e3d6000fd5b505050600082815260026020526040808220905191925060039183916104b391610ea8565b60408051918290039091208252602082019290925201600020546004546001600160a01b03918216925016811461053f57604051634cc8221560e01b8152600481018390526001600160a01b03821690634cc8221590602401600060405180830381600087803b15801561052657600080fd5b505af115801561053a573d6000803e3d6000fd5b505050505b600082815260026020526040812061025991610b35565b6060806000600160009054906101000a90046001600160a01b03166001600160a01b03166353ed51436040518163ffffffff1660e01b815260040160006040518083038186803b1580156105a957600080fd5b505afa1580156105bd573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526105e59190810190610c83565b90506000815167ffffffffffffffff81111561061157634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561064457816020015b606081526020019060019003908161062f5790505b50905060005b8251811015610754576002600084838151811061067757634e487b7160e01b600052603260045260246000fd5b6020026020010151815260200190815260200160002080546106989061100b565b80601f01602080910402602001604051908101604052809291908181526020018280546106c49061100b565b80156107115780601f106106e657610100808354040283529160200191610711565b820191906000526020600020905b8154815290600101906020018083116106f457829003601f168201915b505050505082828151811061073657634e487b7160e01b600052603260045260246000fd5b6020026020010181905250808061074c90611046565b91505061064a565b5090939092509050565b600154604051630801f16960e11b8152600481018490526001600160a01b0390911690631003e2d290602401600060405180830381600087803b1580156107a457600080fd5b505af11580156107b8573d6000803e3d6000fd5b505050600083815260026020526040808220905191925060039183916107dd91610ea8565b60408051918290039091208252602082019290925201600020546004546001600160a01b03918216925016811461086957604051634cc8221560e01b8152600481018490526001600160a01b03821690634cc8221590602401600060405180830381600087803b15801561085057600080fd5b505af1158015610864573d6000803e3d6000fd5b505050505b6000838152600260209081526040909120835161088892850190610b72565b5081516020808401919091206004546000828152600390935260409092205490916001600160a01b039182169116141561092a576040516108c890610bf6565b604051809103906000f0801580156108e4573d6000803e3d6000fd5b50600082815260036020526040902080547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b03929092169190911790555b60008181526003602052604090819020549051630801f16960e11b8152600481018690526001600160a01b0390911690631003e2d290602401600060405180830381600087803b15801561097d57600080fd5b505af1158015610991573d6000803e3d6000fd5b5050505050505050565b80516020808301919091206000908152600390915260408120546004546001600160a01b03918216911681141561022857507f000000000000000000000000000000000000000000000000000000000000000092915050565b60606109ff8261099b565b6001600160a01b03166353ed51436040518163ffffffff1660e01b815260040160006040518083038186803b158015610a3757600080fd5b505afa158015610a4b573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526102289190810190610c83565b6001546040517f9f161b0a000000000000000000000000000000000000000000000000000000008152600481018390526000916001600160a01b031690639f161b0a9060240160206040518083038186803b158015610ad157600080fd5b505afa158015610ae5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102289190610d2b565b606061022882604051602001610b2191815260200190565b6040516020818303038152906040526109f4565b508054610b419061100b565b6000825580601f10610b51575050565b601f016020900490600052602060002090810190610b6f9190610c03565b50565b828054610b7e9061100b565b90600052602060002090601f016020900481019282610ba05760008555610be6565b82601f10610bb957805160ff1916838001178555610be6565b82800160010185558215610be6579182015b82811115610be6578251825591602001919060010190610bcb565b50610bf2929150610c03565b5090565b6105298061108483390190565b5b80821115610bf25760008155600101610c04565b600082601f830112610c28578081fd5b813567ffffffffffffffff811115610c4257610c4261106d565b610c55601f8201601f1916602001610fda565b818152846020838601011115610c69578283fd5b816020850160208301379081016020019190915292915050565b60006020808385031215610c95578182fd5b825167ffffffffffffffff80821115610cac578384fd5b818501915085601f830112610cbf578384fd5b815181811115610cd157610cd161106d565b8060051b9150610ce2848301610fda565b8181528481019084860184860187018a1015610cfc578788fd5b8795505b83861015610d1e578051835260019590950194918601918601610d00565b5098975050505050505050565b600060208284031215610d3c578081fd5b81518015158114610d4b578182fd5b9392505050565b600060208284031215610d63578081fd5b813567ffffffffffffffff811115610d79578182fd5b610d8584828501610c18565b949350505050565b600060208284031215610d9e578081fd5b5035919050565b600060208284031215610db6578081fd5b5051919050565b60008060408385031215610dcf578081fd5b82359150602083013567ffffffffffffffff811115610dec578182fd5b610df885828601610c18565b9150509250929050565b60008060408385031215610e14578182fd5b50508035926020909101359150565b6000815180845260208085019450808401835b83811015610e5257815187529582019590820190600101610e36565b509495945050505050565b60008151808452815b81811015610e8257602081850181015186830182015201610e66565b81811115610e935782602083870101525b50601f01601f19169290920160200192915050565b600080835482600182811c915080831680610ec457607f831692505b6020808410821415610ee457634e487b7160e01b87526022600452602487fd5b818015610ef85760018114610f0957610f35565b60ff19861689528489019650610f35565b60008a815260209020885b86811015610f2d5781548b820152908501908301610f14565b505084890196505b509498975050505050505050565b602081526000610d4b6020830184610e23565b604081526000610f696040830185610e23565b6020838203818501528185518084528284019150828160051b850101838801865b83811015610fb857601f19878403018552610fa6838351610e5d565b94860194925090850190600101610f8a565b50909998505050505050505050565b602081526000610d4b6020830184610e5d565b604051601f8201601f1916810167ffffffffffffffff811182821017156110035761100361106d565b604052919050565b600181811c9082168061101f57607f821691505b6020821081141561104057634e487b7160e01b600052602260045260246000fd5b50919050565b600060001982141561106657634e487b7160e01b81526011600452602481fd5b5060010190565b634e487b7160e01b600052604160045260246000fdfe608060405234801561001057600080fd5b50610509806100206000396000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c806391d40c831161005057806391d40c83146100bd578063949d225d146100d05780639f161b0a146100e157600080fd5b80631003e2d2146100775780634cc822151461008c57806353ed51431461009f575b600080fd5b61008a610085366004610419565b610104565b005b61008a61009a366004610419565b61016d565b6100a7610253565b6040516100b49190610431565b60405180910390f35b61008a6100cb366004610359565b6102ab565b6000546040519081526020016100b4565b6100f46100ef366004610419565b6102fd565b60405190151581526020016100b4565b61010d816102fd565b156101155750565b60008054600181810183559180527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5630182905561015160005490565b61015b9190610475565b60009182526001602052604090912055565b610176816102fd565b61017d5750565b60008181526001602081905260408220549190819061019b60005490565b6101a59190610475565b815481106101c357634e487b7160e01b600052603260045260246000fd5b9060005260206000200154905080600083815481106101f257634e487b7160e01b600052603260045260246000fd5b600091825260208083209091019290925582815260019091526040808220849055848252812081905580548061023857634e487b7160e01b600052603160045260246000fd5b60019003818190600052602060002001600090559055505050565b606060008054806020026020016040519081016040528092919081815260200182805480156102a157602002820191906000526020600020905b81548152602001906001019080831161028d575b5050505050905090565b60005b81518110156102f9576102e78282815181106102da57634e487b7160e01b600052603260045260246000fd5b6020026020010151610104565b806102f18161048c565b9150506102ae565b5050565b6000805461030d57506000919050565b6000828152600160205260409020541515806103535750816000808154811061034657634e487b7160e01b600052603260045260246000fd5b9060005260206000200154145b92915050565b6000602080838503121561036b578182fd5b823567ffffffffffffffff80821115610382578384fd5b818501915085601f830112610395578384fd5b8135818111156103a7576103a76104bd565b8060051b604051601f19603f830116810181811085821117156103cc576103cc6104bd565b604052828152858101935084860182860187018a10156103ea578788fd5b8795505b8386101561040c5780358552600195909501949386019386016103ee565b5098975050505050505050565b60006020828403121561042a578081fd5b5035919050565b6020808252825182820181905260009190848201906040850190845b818110156104695783518352928401929184019160010161044d565b50909695505050505050565b600082821015610487576104876104a7565b500390565b60006000198214156104a0576104a06104a7565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea26469706673582212202dd06c7e0608124355cb1f9ceca0e5d4d5916427eed189b475797b6f8ca8ef0164736f6c63430008040033a2646970667358221220676f95d9f15842eb3b1590f4bf23d50c2a8549b8cb7608e7249d56a7f17a475d64736f6c63430008040033608060405234801561001057600080fd5b50610509806100206000396000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c806391d40c831161005057806391d40c83146100bd578063949d225d146100d05780639f161b0a146100e157600080fd5b80631003e2d2146100775780634cc822151461008c57806353ed51431461009f575b600080fd5b61008a610085366004610419565b610104565b005b61008a61009a366004610419565b61016d565b6100a7610253565b6040516100b49190610431565b60405180910390f35b61008a6100cb366004610359565b6102ab565b6000546040519081526020016100b4565b6100f46100ef366004610419565b6102fd565b60405190151581526020016100b4565b61010d816102fd565b156101155750565b60008054600181810183559180527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5630182905561015160005490565b61015b9190610475565b60009182526001602052604090912055565b610176816102fd565b61017d5750565b60008181526001602081905260408220549190819061019b60005490565b6101a59190610475565b815481106101c357634e487b7160e01b600052603260045260246000fd5b9060005260206000200154905080600083815481106101f257634e487b7160e01b600052603260045260246000fd5b600091825260208083209091019290925582815260019091526040808220849055848252812081905580548061023857634e487b7160e01b600052603160045260246000fd5b60019003818190600052602060002001600090559055505050565b606060008054806020026020016040519081016040528092919081815260200182805480156102a157602002820191906000526020600020905b81548152602001906001019080831161028d575b5050505050905090565b60005b81518110156102f9576102e78282815181106102da57634e487b7160e01b600052603260045260246000fd5b6020026020010151610104565b806102f18161048c565b9150506102ae565b5050565b6000805461030d57506000919050565b6000828152600160205260409020541515806103535750816000808154811061034657634e487b7160e01b600052603260045260246000fd5b9060005260206000200154145b92915050565b6000602080838503121561036b578182fd5b823567ffffffffffffffff80821115610382578384fd5b818501915085601f830112610395578384fd5b8135818111156103a7576103a76104bd565b8060051b604051601f19603f830116810181811085821117156103cc576103cc6104bd565b604052828152858101935084860182860187018a10156103ea578788fd5b8795505b8386101561040c5780358552600195909501949386019386016103ee565b5098975050505050505050565b60006020828403121561042a578081fd5b5035919050565b6020808252825182820181905260009190848201906040850190845b818110156104695783518352928401929184019160010161044d565b50909695505050505050565b600082821015610487576104876104a7565b500390565b60006000198214156104a0576104a06104a7565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea26469706673582212202dd06c7e0608124355cb1f9ceca0e5d4d5916427eed189b475797b6f8ca8ef0164736f6c63430008040033";

type UintComponentConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UintComponentConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UintComponent__factory extends ContractFactory {
  constructor(...args: UintComponentConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _gameAddr: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<UintComponent> {
    return super.deploy(_gameAddr, overrides || {}) as Promise<UintComponent>;
  }
  override getDeployTransaction(
    _gameAddr: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_gameAddr, overrides || {});
  }
  override attach(address: string): UintComponent {
    return super.attach(address) as UintComponent;
  }
  override connect(signer: Signer): UintComponent__factory {
    return super.connect(signer) as UintComponent__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UintComponentInterface {
    return new utils.Interface(_abi) as UintComponentInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UintComponent {
    return new Contract(address, _abi, signerOrProvider) as UintComponent;
  }
}
