import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { AddressComponent, AddressComponentInterface } from "../../TypedComponents.sol/AddressComponent";
declare type AddressComponentConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AddressComponent__factory extends ContractFactory {
    constructor(...args: AddressComponentConstructorParams);
    deploy(_gameAddr: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<AddressComponent>;
    getDeployTransaction(_gameAddr: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): AddressComponent;
    connect(signer: Signer): AddressComponent__factory;
    static readonly bytecode = "0x6080604052604051610010906100a5565b604051809103906000f08015801561002c573d6000803e3d6000fd5b50600180546001600160a01b03929092166001600160a01b031992831617905560048054909116905534801561006157600080fd5b50604051611b4c380380611b4c833981016040819052610080916100b2565b600080546001600160a01b0319166001600160a01b03929092169190911790556100e0565b6105298061162383390190565b6000602082840312156100c3578081fd5b81516001600160a01b03811681146100d9578182fd5b9392505050565b611534806100ef6000396000f3fe608060405234801561001057600080fd5b50600436106100be5760003560e01c80634cc82215116100765780638b2829471161005b5780638b28294714610179578063b361be461461018c578063cccf7a8e1461019f57600080fd5b80634cc822151461015057806378d9f34f1461016357600080fd5b806331b933b9116100a757806331b933b9146101085780633e1b5e0d1461011d5780634c518fdc1461013057600080fd5b80630ff4c916146100c35780632f30c6f6146100f3575b600080fd5b6100d66100d1366004610cd4565b6101c2565b6040516001600160a01b0390911681526020015b60405180910390f35b610106610101366004610cec565b6101e6565b005b610110610218565b6040516100ea9190610e80565b61011061012b366004610b99565b6102b7565b61014361013e366004610cd4565b6102e6565b6040516100ea9190610f04565b61010661015e366004610cd4565b610388565b61016b6104aa565b6040516100ea929190610e93565b610106610187366004610d1b565b6106b2565b61011061019a366004610c99565b6108ef565b6101b26101ad366004610cd4565b6109b5565b60405190151581526020016100ea565b60006101cd826102e6565b8060200190518101906101e09190610bb5565b92915050565b604080516001600160a01b0383166020820152610214918491016040516020818303038152906040526106b2565b5050565b600154604080517f53ed514300000000000000000000000000000000000000000000000000000000815290516060926001600160a01b0316916353ed5143916004808301926000929190829003018186803b15801561027657600080fd5b505afa15801561028a573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526102b29190810190610bd1565b905090565b604080516001600160a01b03831660208201526060916101e091016040516020818303038152906040526108ef565b600081815260026020526040902080546060919061030390610f48565b80601f016020809104026020016040519081016040528092919081815260200182805461032f90610f48565b801561037c5780601f106103515761010080835404028352916020019161037c565b820191906000526020600020905b81548152906001019060200180831161035f57829003601f168201915b50505050509050919050565b600154604051634cc8221560e01b8152600481018390526001600160a01b0390911690634cc8221590602401600060405180830381600087803b1580156103ce57600080fd5b505af11580156103e2573d6000803e3d6000fd5b5050506000828152600260205260408082209051919250600391839161040791610de5565b60408051918290039091208252602082019290925201600020546004546001600160a01b03918216925016811461049357604051634cc8221560e01b8152600481018390526001600160a01b03821690634cc8221590602401600060405180830381600087803b15801561047a57600080fd5b505af115801561048e573d6000803e3d6000fd5b505050505b600082815260026020526040812061021491610a4b565b6060806000600160009054906101000a90046001600160a01b03166001600160a01b03166353ed51436040518163ffffffff1660e01b815260040160006040518083038186803b1580156104fd57600080fd5b505afa158015610511573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526105399190810190610bd1565b90506000815167ffffffffffffffff81111561056557634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561059857816020015b60608152602001906001900390816105835790505b50905060005b82518110156106a857600260008483815181106105cb57634e487b7160e01b600052603260045260246000fd5b6020026020010151815260200190815260200160002080546105ec90610f48565b80601f016020809104026020016040519081016040528092919081815260200182805461061890610f48565b80156106655780601f1061063a57610100808354040283529160200191610665565b820191906000526020600020905b81548152906001019060200180831161064857829003601f168201915b505050505082828151811061068a57634e487b7160e01b600052603260045260246000fd5b602002602001018190525080806106a090610f83565b91505061059e565b5090939092509050565b600154604051630801f16960e11b8152600481018490526001600160a01b0390911690631003e2d290602401600060405180830381600087803b1580156106f857600080fd5b505af115801561070c573d6000803e3d6000fd5b5050506000838152600260205260408082209051919250600391839161073191610de5565b60408051918290039091208252602082019290925201600020546004546001600160a01b0391821692501681146107bd57604051634cc8221560e01b8152600481018490526001600160a01b03821690634cc8221590602401600060405180830381600087803b1580156107a457600080fd5b505af11580156107b8573d6000803e3d6000fd5b505050505b600083815260026020908152604090912083516107dc92850190610a88565b5081516020808401919091206004546000828152600390935260409092205490916001600160a01b039182169116141561087e5760405161081c90610b0c565b604051809103906000f080158015610838573d6000803e3d6000fd5b50600082815260036020526040902080547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b03929092169190911790555b60008181526003602052604090819020549051630801f16960e11b8152600481018690526001600160a01b0390911690631003e2d290602401600060405180830381600087803b1580156108d157600080fd5b505af11580156108e5573d6000803e3d6000fd5b5050505050505050565b80516020808301919091206000908152600390915260409020546004546060916001600160a01b039081169116811415610939575050604080516000815260208101909152919050565b806001600160a01b03166353ed51436040518163ffffffff1660e01b815260040160006040518083038186803b15801561097257600080fd5b505afa158015610986573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526109ae9190810190610bd1565b9392505050565b6001546040517f9f161b0a000000000000000000000000000000000000000000000000000000008152600481018390526000916001600160a01b031690639f161b0a9060240160206040518083038186803b158015610a1357600080fd5b505afa158015610a27573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101e09190610c79565b508054610a5790610f48565b6000825580601f10610a67575050565b601f016020900490600052602060002090810190610a859190610b19565b50565b828054610a9490610f48565b90600052602060002090601f016020900481019282610ab65760008555610afc565b82601f10610acf57805160ff1916838001178555610afc565b82800160010185558215610afc579182015b82811115610afc578251825591602001919060010190610ae1565b50610b08929150610b19565b5090565b61052980610fd683390190565b5b80821115610b085760008155600101610b1a565b600082601f830112610b3e578081fd5b813567ffffffffffffffff811115610b5857610b58610faa565b610b6b601f8201601f1916602001610f17565b818152846020838601011115610b7f578283fd5b816020850160208301379081016020019190915292915050565b600060208284031215610baa578081fd5b81356109ae81610fc0565b600060208284031215610bc6578081fd5b81516109ae81610fc0565b60006020808385031215610be3578182fd5b825167ffffffffffffffff80821115610bfa578384fd5b818501915085601f830112610c0d578384fd5b815181811115610c1f57610c1f610faa565b8060051b9150610c30848301610f17565b8181528481019084860184860187018a1015610c4a578788fd5b8795505b83861015610c6c578051835260019590950194918601918601610c4e565b5098975050505050505050565b600060208284031215610c8a578081fd5b815180151581146109ae578182fd5b600060208284031215610caa578081fd5b813567ffffffffffffffff811115610cc0578182fd5b610ccc84828501610b2e565b949350505050565b600060208284031215610ce5578081fd5b5035919050565b60008060408385031215610cfe578081fd5b823591506020830135610d1081610fc0565b809150509250929050565b60008060408385031215610d2d578182fd5b82359150602083013567ffffffffffffffff811115610d4a578182fd5b610d5685828601610b2e565b9150509250929050565b6000815180845260208085019450808401835b83811015610d8f57815187529582019590820190600101610d73565b509495945050505050565b60008151808452815b81811015610dbf57602081850181015186830182015201610da3565b81811115610dd05782602083870101525b50601f01601f19169290920160200192915050565b600080835482600182811c915080831680610e0157607f831692505b6020808410821415610e2157634e487b7160e01b87526022600452602487fd5b818015610e355760018114610e4657610e72565b60ff19861689528489019650610e72565b60008a815260209020885b86811015610e6a5781548b820152908501908301610e51565b505084890196505b509498975050505050505050565b6020815260006109ae6020830184610d60565b604081526000610ea66040830185610d60565b6020838203818501528185518084528284019150828160051b850101838801865b83811015610ef557601f19878403018552610ee3838351610d9a565b94860194925090850190600101610ec7565b50909998505050505050505050565b6020815260006109ae6020830184610d9a565b604051601f8201601f1916810167ffffffffffffffff81118282101715610f4057610f40610faa565b604052919050565b600181811c90821680610f5c57607f821691505b60208210811415610f7d57634e487b7160e01b600052602260045260246000fd5b50919050565b6000600019821415610fa357634e487b7160e01b81526011600452602481fd5b5060010190565b634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114610a8557600080fdfe608060405234801561001057600080fd5b50610509806100206000396000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c806391d40c831161005057806391d40c83146100bd578063949d225d146100d05780639f161b0a146100e157600080fd5b80631003e2d2146100775780634cc822151461008c57806353ed51431461009f575b600080fd5b61008a610085366004610419565b610104565b005b61008a61009a366004610419565b61016d565b6100a7610253565b6040516100b49190610431565b60405180910390f35b61008a6100cb366004610359565b6102ab565b6000546040519081526020016100b4565b6100f46100ef366004610419565b6102fd565b60405190151581526020016100b4565b61010d816102fd565b156101155750565b60008054600181810183559180527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5630182905561015160005490565b61015b9190610475565b60009182526001602052604090912055565b610176816102fd565b61017d5750565b60008181526001602081905260408220549190819061019b60005490565b6101a59190610475565b815481106101c357634e487b7160e01b600052603260045260246000fd5b9060005260206000200154905080600083815481106101f257634e487b7160e01b600052603260045260246000fd5b600091825260208083209091019290925582815260019091526040808220849055848252812081905580548061023857634e487b7160e01b600052603160045260246000fd5b60019003818190600052602060002001600090559055505050565b606060008054806020026020016040519081016040528092919081815260200182805480156102a157602002820191906000526020600020905b81548152602001906001019080831161028d575b5050505050905090565b60005b81518110156102f9576102e78282815181106102da57634e487b7160e01b600052603260045260246000fd5b6020026020010151610104565b806102f18161048c565b9150506102ae565b5050565b6000805461030d57506000919050565b6000828152600160205260409020541515806103535750816000808154811061034657634e487b7160e01b600052603260045260246000fd5b9060005260206000200154145b92915050565b6000602080838503121561036b578182fd5b823567ffffffffffffffff80821115610382578384fd5b818501915085601f830112610395578384fd5b8135818111156103a7576103a76104bd565b8060051b604051601f19603f830116810181811085821117156103cc576103cc6104bd565b604052828152858101935084860182860187018a10156103ea578788fd5b8795505b8386101561040c5780358552600195909501949386019386016103ee565b5098975050505050505050565b60006020828403121561042a578081fd5b5035919050565b6020808252825182820181905260009190848201906040850190845b818110156104695783518352928401929184019160010161044d565b50909695505050505050565b600082821015610487576104876104a7565b500390565b60006000198214156104a0576104a06104a7565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea26469706673582212202dd06c7e0608124355cb1f9ceca0e5d4d5916427eed189b475797b6f8ca8ef0164736f6c63430008040033a2646970667358221220d9bc1ff030a7f3af969e4cee86e689916fee190625184a0b0e83b3a5396a7d4464736f6c63430008040033608060405234801561001057600080fd5b50610509806100206000396000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c806391d40c831161005057806391d40c83146100bd578063949d225d146100d05780639f161b0a146100e157600080fd5b80631003e2d2146100775780634cc822151461008c57806353ed51431461009f575b600080fd5b61008a610085366004610419565b610104565b005b61008a61009a366004610419565b61016d565b6100a7610253565b6040516100b49190610431565b60405180910390f35b61008a6100cb366004610359565b6102ab565b6000546040519081526020016100b4565b6100f46100ef366004610419565b6102fd565b60405190151581526020016100b4565b61010d816102fd565b156101155750565b60008054600181810183559180527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5630182905561015160005490565b61015b9190610475565b60009182526001602052604090912055565b610176816102fd565b61017d5750565b60008181526001602081905260408220549190819061019b60005490565b6101a59190610475565b815481106101c357634e487b7160e01b600052603260045260246000fd5b9060005260206000200154905080600083815481106101f257634e487b7160e01b600052603260045260246000fd5b600091825260208083209091019290925582815260019091526040808220849055848252812081905580548061023857634e487b7160e01b600052603160045260246000fd5b60019003818190600052602060002001600090559055505050565b606060008054806020026020016040519081016040528092919081815260200182805480156102a157602002820191906000526020600020905b81548152602001906001019080831161028d575b5050505050905090565b60005b81518110156102f9576102e78282815181106102da57634e487b7160e01b600052603260045260246000fd5b6020026020010151610104565b806102f18161048c565b9150506102ae565b5050565b6000805461030d57506000919050565b6000828152600160205260409020541515806103535750816000808154811061034657634e487b7160e01b600052603260045260246000fd5b9060005260206000200154145b92915050565b6000602080838503121561036b578182fd5b823567ffffffffffffffff80821115610382578384fd5b818501915085601f830112610395578384fd5b8135818111156103a7576103a76104bd565b8060051b604051601f19603f830116810181811085821117156103cc576103cc6104bd565b604052828152858101935084860182860187018a10156103ea578788fd5b8795505b8386101561040c5780358552600195909501949386019386016103ee565b5098975050505050505050565b60006020828403121561042a578081fd5b5035919050565b6020808252825182820181905260009190848201906040850190845b818110156104695783518352928401929184019160010161044d565b50909695505050505050565b600082821015610487576104876104a7565b500390565b60006000198214156104a0576104a06104a7565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea26469706673582212202dd06c7e0608124355cb1f9ceca0e5d4d5916427eed189b475797b6f8ca8ef0164736f6c63430008040033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        name?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): AddressComponentInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AddressComponent;
}
export {};
