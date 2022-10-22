import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { StringComponent, StringComponentInterface } from "../../../contracts/TypedComponents.sol/StringComponent";
declare type StringComponentConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class StringComponent__factory extends ContractFactory {
    constructor(...args: StringComponentConstructorParams);
    deploy(_gameAddr: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<StringComponent>;
    getDeployTransaction(_gameAddr: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): StringComponent;
    connect(signer: Signer): StringComponent__factory;
    static readonly bytecode = "0x60a0604052604051610010906100e0565b604051809103906000f08015801561002c573d6000803e3d6000fd5b5060601b6001600160601b031916608052604051610049906100e0565b604051809103906000f080158015610065573d6000803e3d6000fd5b50600180546001600160a01b03929092166001600160a01b031992831617905560048054909116905534801561009a57600080fd5b5060405162001ca338038062001ca38339810160408190526100bb916100ee565b600080546001600160a01b0319166001600160a01b039290921691909117905561011c565b610529806200177a83390190565b6000602082840312156100ff578081fd5b81516001600160a01b0381168114610115578182fd5b9392505050565b60805160601c61163f6200013b60003960006109c3015261163f6000f3fe608060405234801561001057600080fd5b50600436106100d45760003560e01c80638b28294711610081578063b361be461161005b578063b361be46146101b7578063cccf7a8e146101ca578063f94655da146101ed57600080fd5b80638b282947146101685780639933adfd1461017b578063a1d8509f146101a657600080fd5b80634cc82215116100b25780634cc822151461012a578063643719771461013f57806378d9f34f1461015257600080fd5b80630ff4c916146100d957806331b933b9146101025780634c518fdc14610117575b600080fd5b6100ec6100e7366004610dd8565b610200565b6040516100f99190610fcc565b60405180910390f35b61010a610224565b6040516100f99190610f48565b6100ec610125366004610dd8565b6102c3565b61013d610138366004610dd8565b6103fb565b005b61013d61014d366004610e35565b610521565b61015a61054a565b6040516100f9929190610f5b565b61013d610176366004610df0565b610752565b61018e610189366004610d2a565b61098f565b6040516001600160a01b0390911681526020016100f9565b6001546001600160a01b031661018e565b61010a6101c5366004610d2a565b6109e8565b6101dd6101d8366004610dd8565b610a67565b60405190151581526020016100f9565b61010a6101fb366004610d2a565b610afd565b606061020b826102c3565b80602001905181019061021e9190610d65565b92915050565b600154604080517f53ed514300000000000000000000000000000000000000000000000000000000815290516060926001600160a01b0316916353ed5143916004808301926000929190829003018186803b15801561028257600080fd5b505afa158015610296573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526102be9190810190610c5b565b905090565b60606102ce82610a67565b61035d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f435552494f3a20456e74697479206e6f7420666f756e6420696e20636f6d706f60448201527f6e656e7400000000000000000000000000000000000000000000000000000000606482015260840160405180910390fd5b6000828152600260205260409020805461037690611068565b80601f01602080910402602001604051908101604052809291908181526020018280546103a290611068565b80156103ef5780601f106103c4576101008083540402835291602001916103ef565b820191906000526020600020905b8154815290600101906020018083116103d257829003601f168201915b50505050509050919050565b600154604051634cc8221560e01b8152600481018390526001600160a01b0390911690634cc8221590602401600060405180830381600087803b15801561044157600080fd5b505af1158015610455573d6000803e3d6000fd5b5050506000828152600260205260408082209051919250600391839161047a91610ead565b60408051918290039091208252602082019290925201600020546004546001600160a01b03918216925016811461050657604051634cc8221560e01b8152600481018390526001600160a01b03821690634cc8221590602401600060405180830381600087803b1580156104ed57600080fd5b505af1158015610501573d6000803e3d6000fd5b505050505b600082815260026020526040812061051d91610b27565b5050565b61051d82826040516020016105369190610fcc565b604051602081830303815290604052610752565b6060806000600160009054906101000a90046001600160a01b03166001600160a01b03166353ed51436040518163ffffffff1660e01b815260040160006040518083038186803b15801561059d57600080fd5b505afa1580156105b1573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526105d99190810190610c5b565b90506000815167ffffffffffffffff81111561060557634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561063857816020015b60608152602001906001900390816106235790505b50905060005b8251811015610748576002600084838151811061066b57634e487b7160e01b600052603260045260246000fd5b60200260200101518152602001908152602001600020805461068c90611068565b80601f01602080910402602001604051908101604052809291908181526020018280546106b890611068565b80156107055780601f106106da57610100808354040283529160200191610705565b820191906000526020600020905b8154815290600101906020018083116106e857829003601f168201915b505050505082828151811061072a57634e487b7160e01b600052603260045260246000fd5b60200260200101819052508080610740906110a3565b91505061063e565b5090939092509050565b600154604051630801f16960e11b8152600481018490526001600160a01b0390911690631003e2d290602401600060405180830381600087803b15801561079857600080fd5b505af11580156107ac573d6000803e3d6000fd5b505050600083815260026020526040808220905191925060039183916107d191610ead565b60408051918290039091208252602082019290925201600020546004546001600160a01b03918216925016811461085d57604051634cc8221560e01b8152600481018490526001600160a01b03821690634cc8221590602401600060405180830381600087803b15801561084457600080fd5b505af1158015610858573d6000803e3d6000fd5b505050505b6000838152600260209081526040909120835161087c92850190610b64565b5081516020808401919091206004546000828152600390935260409092205490916001600160a01b039182169116141561091e576040516108bc90610be8565b604051809103906000f0801580156108d8573d6000803e3d6000fd5b50600082815260036020526040902080547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b03929092169190911790555b60008181526003602052604090819020549051630801f16960e11b8152600481018690526001600160a01b0390911690631003e2d290602401600060405180830381600087803b15801561097157600080fd5b505af1158015610985573d6000803e3d6000fd5b5050505050505050565b80516020808301919091206000908152600390915260408120546004546001600160a01b03918216911681141561021e57507f000000000000000000000000000000000000000000000000000000000000000092915050565b60606109f38261098f565b6001600160a01b03166353ed51436040518163ffffffff1660e01b815260040160006040518083038186803b158015610a2b57600080fd5b505afa158015610a3f573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261021e9190810190610c5b565b6001546040517f9f161b0a000000000000000000000000000000000000000000000000000000008152600481018390526000916001600160a01b031690639f161b0a9060240160206040518083038186803b158015610ac557600080fd5b505afa158015610ad9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061021e9190610d03565b606061021e82604051602001610b139190610fcc565b6040516020818303038152906040526109e8565b508054610b3390611068565b6000825580601f10610b43575050565b601f016020900490600052602060002090810190610b619190610bf5565b50565b828054610b7090611068565b90600052602060002090601f016020900481019282610b925760008555610bd8565b82601f10610bab57805160ff1916838001178555610bd8565b82800160010185558215610bd8579182015b82811115610bd8578251825591602001919060010190610bbd565b50610be4929150610bf5565b5090565b610529806110e183390190565b5b80821115610be45760008155600101610bf6565b600082601f830112610c1a578081fd5b8135610c2d610c2882611010565b610fdf565b818152846020838601011115610c41578283fd5b816020850160208301379081016020019190915292915050565b60006020808385031215610c6d578182fd5b825167ffffffffffffffff80821115610c84578384fd5b818501915085601f830112610c97578384fd5b815181811115610ca957610ca96110ca565b8060051b9150610cba848301610fdf565b8181528481019084860184860187018a1015610cd4578788fd5b8795505b83861015610cf6578051835260019590950194918601918601610cd8565b5098975050505050505050565b600060208284031215610d14578081fd5b81518015158114610d23578182fd5b9392505050565b600060208284031215610d3b578081fd5b813567ffffffffffffffff811115610d51578182fd5b610d5d84828501610c0a565b949350505050565b600060208284031215610d76578081fd5b815167ffffffffffffffff811115610d8c578182fd5b8201601f81018413610d9c578182fd5b8051610daa610c2882611010565b818152856020838501011115610dbe578384fd5b610dcf826020830160208601611038565b95945050505050565b600060208284031215610de9578081fd5b5035919050565b60008060408385031215610e02578081fd5b82359150602083013567ffffffffffffffff811115610e1f578182fd5b610e2b85828601610c0a565b9150509250929050565b60008060408385031215610e02578182fd5b6000815180845260208085019450808401835b83811015610e7657815187529582019590820190600101610e5a565b509495945050505050565b60008151808452610e99816020860160208601611038565b601f01601f19169290920160200192915050565b600080835482600182811c915080831680610ec957607f831692505b6020808410821415610ee957634e487b7160e01b87526022600452602487fd5b818015610efd5760018114610f0e57610f3a565b60ff19861689528489019650610f3a565b60008a815260209020885b86811015610f325781548b820152908501908301610f19565b505084890196505b509498975050505050505050565b602081526000610d236020830184610e47565b604081526000610f6e6040830185610e47565b6020838203818501528185518084528284019150828160051b850101838801865b83811015610fbd57601f19878403018552610fab838351610e81565b94860194925090850190600101610f8f565b50909998505050505050505050565b602081526000610d236020830184610e81565b604051601f8201601f1916810167ffffffffffffffff81118282101715611008576110086110ca565b604052919050565b600067ffffffffffffffff82111561102a5761102a6110ca565b50601f01601f191660200190565b60005b8381101561105357818101518382015260200161103b565b83811115611062576000848401525b50505050565b600181811c9082168061107c57607f821691505b6020821081141561109d57634e487b7160e01b600052602260045260246000fd5b50919050565b60006000198214156110c357634e487b7160e01b81526011600452602481fd5b5060010190565b634e487b7160e01b600052604160045260246000fdfe608060405234801561001057600080fd5b50610509806100206000396000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c806391d40c831161005057806391d40c83146100bd578063949d225d146100d05780639f161b0a146100e157600080fd5b80631003e2d2146100775780634cc822151461008c57806353ed51431461009f575b600080fd5b61008a610085366004610419565b610104565b005b61008a61009a366004610419565b61016d565b6100a7610253565b6040516100b49190610431565b60405180910390f35b61008a6100cb366004610359565b6102ab565b6000546040519081526020016100b4565b6100f46100ef366004610419565b6102fd565b60405190151581526020016100b4565b61010d816102fd565b156101155750565b60008054600181810183559180527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5630182905561015160005490565b61015b9190610475565b60009182526001602052604090912055565b610176816102fd565b61017d5750565b60008181526001602081905260408220549190819061019b60005490565b6101a59190610475565b815481106101c357634e487b7160e01b600052603260045260246000fd5b9060005260206000200154905080600083815481106101f257634e487b7160e01b600052603260045260246000fd5b600091825260208083209091019290925582815260019091526040808220849055848252812081905580548061023857634e487b7160e01b600052603160045260246000fd5b60019003818190600052602060002001600090559055505050565b606060008054806020026020016040519081016040528092919081815260200182805480156102a157602002820191906000526020600020905b81548152602001906001019080831161028d575b5050505050905090565b60005b81518110156102f9576102e78282815181106102da57634e487b7160e01b600052603260045260246000fd5b6020026020010151610104565b806102f18161048c565b9150506102ae565b5050565b6000805461030d57506000919050565b6000828152600160205260409020541515806103535750816000808154811061034657634e487b7160e01b600052603260045260246000fd5b9060005260206000200154145b92915050565b6000602080838503121561036b578182fd5b823567ffffffffffffffff80821115610382578384fd5b818501915085601f830112610395578384fd5b8135818111156103a7576103a76104bd565b8060051b604051601f19603f830116810181811085821117156103cc576103cc6104bd565b604052828152858101935084860182860187018a10156103ea578788fd5b8795505b8386101561040c5780358552600195909501949386019386016103ee565b5098975050505050505050565b60006020828403121561042a578081fd5b5035919050565b6020808252825182820181905260009190848201906040850190845b818110156104695783518352928401929184019160010161044d565b50909695505050505050565b600082821015610487576104876104a7565b500390565b60006000198214156104a0576104a06104a7565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea26469706673582212202dd06c7e0608124355cb1f9ceca0e5d4d5916427eed189b475797b6f8ca8ef0164736f6c63430008040033a2646970667358221220172bc37c3293bd90dbe1ddc3175dd0c1ed41f8d07192a0167d85545a15d0b50864736f6c63430008040033608060405234801561001057600080fd5b50610509806100206000396000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c806391d40c831161005057806391d40c83146100bd578063949d225d146100d05780639f161b0a146100e157600080fd5b80631003e2d2146100775780634cc822151461008c57806353ed51431461009f575b600080fd5b61008a610085366004610419565b610104565b005b61008a61009a366004610419565b61016d565b6100a7610253565b6040516100b49190610431565b60405180910390f35b61008a6100cb366004610359565b6102ab565b6000546040519081526020016100b4565b6100f46100ef366004610419565b6102fd565b60405190151581526020016100b4565b61010d816102fd565b156101155750565b60008054600181810183559180527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5630182905561015160005490565b61015b9190610475565b60009182526001602052604090912055565b610176816102fd565b61017d5750565b60008181526001602081905260408220549190819061019b60005490565b6101a59190610475565b815481106101c357634e487b7160e01b600052603260045260246000fd5b9060005260206000200154905080600083815481106101f257634e487b7160e01b600052603260045260246000fd5b600091825260208083209091019290925582815260019091526040808220849055848252812081905580548061023857634e487b7160e01b600052603160045260246000fd5b60019003818190600052602060002001600090559055505050565b606060008054806020026020016040519081016040528092919081815260200182805480156102a157602002820191906000526020600020905b81548152602001906001019080831161028d575b5050505050905090565b60005b81518110156102f9576102e78282815181106102da57634e487b7160e01b600052603260045260246000fd5b6020026020010151610104565b806102f18161048c565b9150506102ae565b5050565b6000805461030d57506000919050565b6000828152600160205260409020541515806103535750816000808154811061034657634e487b7160e01b600052603260045260246000fd5b9060005260206000200154145b92915050565b6000602080838503121561036b578182fd5b823567ffffffffffffffff80821115610382578384fd5b818501915085601f830112610395578384fd5b8135818111156103a7576103a76104bd565b8060051b604051601f19603f830116810181811085821117156103cc576103cc6104bd565b604052828152858101935084860182860187018a10156103ea578788fd5b8795505b8386101561040c5780358552600195909501949386019386016103ee565b5098975050505050505050565b60006020828403121561042a578081fd5b5035919050565b6020808252825182820181905260009190848201906040850190845b818110156104695783518352928401929184019160010161044d565b50909695505050505050565b600082821015610487576104876104a7565b500390565b60006000198214156104a0576104a06104a7565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea26469706673582212202dd06c7e0608124355cb1f9ceca0e5d4d5916427eed189b475797b6f8ca8ef0164736f6c63430008040033";
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
    static createInterface(): StringComponentInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): StringComponent;
}
export {};
