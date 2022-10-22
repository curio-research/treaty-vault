import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { PositionComponent, PositionComponentInterface } from "../../../contracts/TypedComponents.sol/PositionComponent";
declare type PositionComponentConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class PositionComponent__factory extends ContractFactory {
    constructor(...args: PositionComponentConstructorParams);
    deploy(_gameAddr: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<PositionComponent>;
    getDeployTransaction(_gameAddr: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): PositionComponent;
    connect(signer: Signer): PositionComponent__factory;
    static readonly bytecode = "0x60a0604052604051610010906100e0565b604051809103906000f08015801561002c573d6000803e3d6000fd5b5060601b6001600160601b031916608052604051610049906100e0565b604051809103906000f080158015610065573d6000803e3d6000fd5b50600180546001600160a01b03929092166001600160a01b031992831617905560048054909116905534801561009a57600080fd5b5060405162001d2f38038062001d2f8339810160408190526100bb916100ee565b600080546001600160a01b0319166001600160a01b039290921691909117905561011c565b610529806200180683390190565b6000602082840312156100ff578081fd5b81516001600160a01b0381168114610115578182fd5b9392505050565b60805160601c6116cb6200013b60003960006109fe01526116cb6000f3fe608060405234801561001057600080fd5b50600436106100d45760003560e01c80638bbf68fe11610081578063b361be461161005b578063b361be46146101ce578063cccf7a8e146101e1578063fd4ab6d81461020457600080fd5b80638bbf68fe1461017f5780639933adfd14610192578063a1d8509f146101bd57600080fd5b80634cc82215116100b25780634cc822151461014157806378d9f34f146101565780638b2829471461016c57600080fd5b80630ff4c916146100d957806331b933b91461010c5780634c518fdc14610121575b600080fd5b6100ec6100e7366004610e83565b610217565b604080518251815260209283015192810192909252015b60405180910390f35b61011461024d565b604051610103919061102c565b61013461012f366004610e83565b6102ec565b60405161010391906110b0565b61015461014f366004610e83565b610424565b005b61015e61054a565b60405161010392919061103f565b61015461017a366004610e9b565b610752565b61015461018d366004610ee0565b61098f565b6101a56101a0366004610ddf565b6109ca565b6040516001600160a01b039091168152602001610103565b6001546001600160a01b03166101a5565b6101146101dc366004610ddf565b610a23565b6101f46101ef366004610e83565b610aa2565b6040519015158152602001610103565b610114610212366004610e1a565b610b38565b6040805180820190915260008082526020820152610234826102ec565b8060200190518101906102479190610e35565b92915050565b600154604080517f53ed514300000000000000000000000000000000000000000000000000000000815290516060926001600160a01b0316916353ed5143916004808301926000929190829003018186803b1580156102ab57600080fd5b505afa1580156102bf573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526102e79190810190610d10565b905090565b60606102f782610aa2565b610386576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f435552494f3a20456e74697479206e6f7420666f756e6420696e20636f6d706f60448201527f6e656e7400000000000000000000000000000000000000000000000000000000606482015260840160405180910390fd5b6000828152600260205260409020805461039f906110f4565b80601f01602080910402602001604051908101604052809291908181526020018280546103cb906110f4565b80156104185780601f106103ed57610100808354040283529160200191610418565b820191906000526020600020905b8154815290600101906020018083116103fb57829003601f168201915b50505050509050919050565b600154604051634cc8221560e01b8152600481018390526001600160a01b0390911690634cc8221590602401600060405180830381600087803b15801561046a57600080fd5b505af115801561047e573d6000803e3d6000fd5b505050600082815260026020526040808220905191925060039183916104a391610f91565b60408051918290039091208252602082019290925201600020546004546001600160a01b03918216925016811461052f57604051634cc8221560e01b8152600481018390526001600160a01b03821690634cc8221590602401600060405180830381600087803b15801561051657600080fd5b505af115801561052a573d6000803e3d6000fd5b505050505b600082815260026020526040812061054691610b74565b5050565b6060806000600160009054906101000a90046001600160a01b03166001600160a01b03166353ed51436040518163ffffffff1660e01b815260040160006040518083038186803b15801561059d57600080fd5b505afa1580156105b1573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526105d99190810190610d10565b90506000815167ffffffffffffffff81111561060557634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561063857816020015b60608152602001906001900390816106235790505b50905060005b8251811015610748576002600084838151811061066b57634e487b7160e01b600052603260045260246000fd5b60200260200101518152602001908152602001600020805461068c906110f4565b80601f01602080910402602001604051908101604052809291908181526020018280546106b8906110f4565b80156107055780601f106106da57610100808354040283529160200191610705565b820191906000526020600020905b8154815290600101906020018083116106e857829003601f168201915b505050505082828151811061072a57634e487b7160e01b600052603260045260246000fd5b602002602001018190525080806107409061112f565b91505061063e565b5090939092509050565b600154604051630801f16960e11b8152600481018490526001600160a01b0390911690631003e2d290602401600060405180830381600087803b15801561079857600080fd5b505af11580156107ac573d6000803e3d6000fd5b505050600083815260026020526040808220905191925060039183916107d191610f91565b60408051918290039091208252602082019290925201600020546004546001600160a01b03918216925016811461085d57604051634cc8221560e01b8152600481018490526001600160a01b03821690634cc8221590602401600060405180830381600087803b15801561084457600080fd5b505af1158015610858573d6000803e3d6000fd5b505050505b6000838152600260209081526040909120835161087c92850190610bb1565b5081516020808401919091206004546000828152600390935260409092205490916001600160a01b039182169116141561091e576040516108bc90610c35565b604051809103906000f0801580156108d8573d6000803e3d6000fd5b50600082815260036020526040902080547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b03929092169190911790555b60008181526003602052604090819020549051630801f16960e11b8152600481018690526001600160a01b0390911690631003e2d290602401600060405180830381600087803b15801561097157600080fd5b505af1158015610985573d6000803e3d6000fd5b5050505050505050565b61054682826040516020016109b69190815181526020918201519181019190915260400190565b604051602081830303815290604052610752565b80516020808301919091206000908152600390915260408120546004546001600160a01b03918216911681141561024757507f000000000000000000000000000000000000000000000000000000000000000092915050565b6060610a2e826109ca565b6001600160a01b03166353ed51436040518163ffffffff1660e01b815260040160006040518083038186803b158015610a6657600080fd5b505afa158015610a7a573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526102479190810190610d10565b6001546040517f9f161b0a000000000000000000000000000000000000000000000000000000008152600481018390526000916001600160a01b031690639f161b0a9060240160206040518083038186803b158015610b0057600080fd5b505afa158015610b14573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102479190610db8565b606061024782604051602001610b609190815181526020918201519181019190915260400190565b604051602081830303815290604052610a23565b508054610b80906110f4565b6000825580601f10610b90575050565b601f016020900490600052602060002090810190610bae9190610c42565b50565b828054610bbd906110f4565b90600052602060002090601f016020900481019282610bdf5760008555610c25565b82601f10610bf857805160ff1916838001178555610c25565b82800160010185558215610c25579182015b82811115610c25578251825591602001919060010190610c0a565b50610c31929150610c42565b5090565b6105298061116d83390190565b5b80821115610c315760008155600101610c43565b600082601f830112610c67578081fd5b813567ffffffffffffffff811115610c8157610c81611156565b610c94601f8201601f19166020016110c3565b818152846020838601011115610ca8578283fd5b816020850160208301379081016020019190915292915050565b600060408284031215610cd3578081fd5b6040516040810181811067ffffffffffffffff82111715610cf657610cf6611156565b604052823581526020928301359281019290925250919050565b60006020808385031215610d22578182fd5b825167ffffffffffffffff80821115610d39578384fd5b818501915085601f830112610d4c578384fd5b815181811115610d5e57610d5e611156565b8060051b9150610d6f8483016110c3565b8181528481019084860184860187018a1015610d89578788fd5b8795505b83861015610dab578051835260019590950194918601918601610d8d565b5098975050505050505050565b600060208284031215610dc9578081fd5b81518015158114610dd8578182fd5b9392505050565b600060208284031215610df0578081fd5b813567ffffffffffffffff811115610e06578182fd5b610e1284828501610c57565b949350505050565b600060408284031215610e2b578081fd5b610dd88383610cc2565b600060408284031215610e46578081fd5b6040516040810181811067ffffffffffffffff82111715610e6957610e69611156565b604052825181526020928301519281019290925250919050565b600060208284031215610e94578081fd5b5035919050565b60008060408385031215610ead578081fd5b82359150602083013567ffffffffffffffff811115610eca578182fd5b610ed685828601610c57565b9150509250929050565b60008060608385031215610ef2578182fd5b82359150610f038460208501610cc2565b90509250929050565b6000815180845260208085019450808401835b83811015610f3b57815187529582019590820190600101610f1f565b509495945050505050565b60008151808452815b81811015610f6b57602081850181015186830182015201610f4f565b81811115610f7c5782602083870101525b50601f01601f19169290920160200192915050565b600080835482600182811c915080831680610fad57607f831692505b6020808410821415610fcd57634e487b7160e01b87526022600452602487fd5b818015610fe15760018114610ff25761101e565b60ff1986168952848901965061101e565b60008a815260209020885b868110156110165781548b820152908501908301610ffd565b505084890196505b509498975050505050505050565b602081526000610dd86020830184610f0c565b6040815260006110526040830185610f0c565b6020838203818501528185518084528284019150828160051b850101838801865b838110156110a157601f1987840301855261108f838351610f46565b94860194925090850190600101611073565b50909998505050505050505050565b602081526000610dd86020830184610f46565b604051601f8201601f1916810167ffffffffffffffff811182821017156110ec576110ec611156565b604052919050565b600181811c9082168061110857607f821691505b6020821081141561112957634e487b7160e01b600052602260045260246000fd5b50919050565b600060001982141561114f57634e487b7160e01b81526011600452602481fd5b5060010190565b634e487b7160e01b600052604160045260246000fdfe608060405234801561001057600080fd5b50610509806100206000396000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c806391d40c831161005057806391d40c83146100bd578063949d225d146100d05780639f161b0a146100e157600080fd5b80631003e2d2146100775780634cc822151461008c57806353ed51431461009f575b600080fd5b61008a610085366004610419565b610104565b005b61008a61009a366004610419565b61016d565b6100a7610253565b6040516100b49190610431565b60405180910390f35b61008a6100cb366004610359565b6102ab565b6000546040519081526020016100b4565b6100f46100ef366004610419565b6102fd565b60405190151581526020016100b4565b61010d816102fd565b156101155750565b60008054600181810183559180527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5630182905561015160005490565b61015b9190610475565b60009182526001602052604090912055565b610176816102fd565b61017d5750565b60008181526001602081905260408220549190819061019b60005490565b6101a59190610475565b815481106101c357634e487b7160e01b600052603260045260246000fd5b9060005260206000200154905080600083815481106101f257634e487b7160e01b600052603260045260246000fd5b600091825260208083209091019290925582815260019091526040808220849055848252812081905580548061023857634e487b7160e01b600052603160045260246000fd5b60019003818190600052602060002001600090559055505050565b606060008054806020026020016040519081016040528092919081815260200182805480156102a157602002820191906000526020600020905b81548152602001906001019080831161028d575b5050505050905090565b60005b81518110156102f9576102e78282815181106102da57634e487b7160e01b600052603260045260246000fd5b6020026020010151610104565b806102f18161048c565b9150506102ae565b5050565b6000805461030d57506000919050565b6000828152600160205260409020541515806103535750816000808154811061034657634e487b7160e01b600052603260045260246000fd5b9060005260206000200154145b92915050565b6000602080838503121561036b578182fd5b823567ffffffffffffffff80821115610382578384fd5b818501915085601f830112610395578384fd5b8135818111156103a7576103a76104bd565b8060051b604051601f19603f830116810181811085821117156103cc576103cc6104bd565b604052828152858101935084860182860187018a10156103ea578788fd5b8795505b8386101561040c5780358552600195909501949386019386016103ee565b5098975050505050505050565b60006020828403121561042a578081fd5b5035919050565b6020808252825182820181905260009190848201906040850190845b818110156104695783518352928401929184019160010161044d565b50909695505050505050565b600082821015610487576104876104a7565b500390565b60006000198214156104a0576104a06104a7565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea26469706673582212202dd06c7e0608124355cb1f9ceca0e5d4d5916427eed189b475797b6f8ca8ef0164736f6c63430008040033a2646970667358221220e96c4277c663373076b69cc74bdf570e98c1b9f3aa375e01b3379129c8b14ac464736f6c63430008040033608060405234801561001057600080fd5b50610509806100206000396000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c806391d40c831161005057806391d40c83146100bd578063949d225d146100d05780639f161b0a146100e157600080fd5b80631003e2d2146100775780634cc822151461008c57806353ed51431461009f575b600080fd5b61008a610085366004610419565b610104565b005b61008a61009a366004610419565b61016d565b6100a7610253565b6040516100b49190610431565b60405180910390f35b61008a6100cb366004610359565b6102ab565b6000546040519081526020016100b4565b6100f46100ef366004610419565b6102fd565b60405190151581526020016100b4565b61010d816102fd565b156101155750565b60008054600181810183559180527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5630182905561015160005490565b61015b9190610475565b60009182526001602052604090912055565b610176816102fd565b61017d5750565b60008181526001602081905260408220549190819061019b60005490565b6101a59190610475565b815481106101c357634e487b7160e01b600052603260045260246000fd5b9060005260206000200154905080600083815481106101f257634e487b7160e01b600052603260045260246000fd5b600091825260208083209091019290925582815260019091526040808220849055848252812081905580548061023857634e487b7160e01b600052603160045260246000fd5b60019003818190600052602060002001600090559055505050565b606060008054806020026020016040519081016040528092919081815260200182805480156102a157602002820191906000526020600020905b81548152602001906001019080831161028d575b5050505050905090565b60005b81518110156102f9576102e78282815181106102da57634e487b7160e01b600052603260045260246000fd5b6020026020010151610104565b806102f18161048c565b9150506102ae565b5050565b6000805461030d57506000919050565b6000828152600160205260409020541515806103535750816000808154811061034657634e487b7160e01b600052603260045260246000fd5b9060005260206000200154145b92915050565b6000602080838503121561036b578182fd5b823567ffffffffffffffff80821115610382578384fd5b818501915085601f830112610395578384fd5b8135818111156103a7576103a76104bd565b8060051b604051601f19603f830116810181811085821117156103cc576103cc6104bd565b604052828152858101935084860182860187018a10156103ea578788fd5b8795505b8386101561040c5780358552600195909501949386019386016103ee565b5098975050505050505050565b60006020828403121561042a578081fd5b5035919050565b6020808252825182820181905260009190848201906040850190845b818110156104695783518352928401929184019160010161044d565b50909695505050505050565b600082821015610487576104876104a7565b500390565b60006000198214156104a0576104a06104a7565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea26469706673582212202dd06c7e0608124355cb1f9ceca0e5d4d5916427eed189b475797b6f8ca8ef0164736f6c63430008040033";
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
    } | {
        inputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
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
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    } | {
        inputs: ({
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        } | {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        })[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): PositionComponentInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PositionComponent;
}
export {};
