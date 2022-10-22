import { Signer, ContractFactory, PayableOverrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Diamond, DiamondInterface } from "../Diamond";
declare type DiamondConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Diamond__factory extends ContractFactory {
    constructor(...args: DiamondConstructorParams);
    deploy(_contractOwner: PromiseOrValue<string>, _diamondCutFacet: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<Diamond>;
    getDeployTransaction(_contractOwner: PromiseOrValue<string>, _diamondCutFacet: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): Diamond;
    connect(signer: Signer): Diamond__factory;
    static readonly bytecode = "0x60806040526040516200225038038062002250833981016040819052620000269162000e5f565b6200003c826200016e60201b620000c21760201c565b604080516001808252818301909252600091816020015b60408051606080820183526000808352602083015291810191909152815260200190600190039081620000535750506040805160018082528183019092529192506000919060208083019080368337019050509050631f931c1c60e01b81600081518110620000d257634e487b7160e01b600052603260045260246000fd5b6001600160e01b031990921660209283029190910182015260408051606081019091526001600160a01b03851681529081016000815260200182815250826000815181106200013157634e487b7160e01b600052603260045260246000fd5b60200260200101819052506200016482600060405180602001604052806000815250620001f260201b6200016f1760201c565b50505050620010bb565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c132080546001600160a01b031981166001600160a01b03848116918217909355604051600080516020620021bc833981519152939092169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131e54600080516020620021bc8339815191529061ffff811690819060009060071615620002515750600381901c60009081526001840160205260409020545b60005b87518110156200031157620002f783838a84815181106200028557634e487b7160e01b600052603260045260246000fd5b6020026020010151600001518b8581518110620002b257634e487b7160e01b600052603260045260246000fd5b6020026020010151602001518c8681518110620002df57634e487b7160e01b600052603260045260246000fd5b602002602001015160400151620003a360201b60201c565b909350915080620003088162001087565b91505062000254565b508282146200032e5760028401805461ffff191661ffff84161790555b60078216156200035157600382901c600090815260018501602052604090208190555b7f8faa70878671ccd212d20771b795c50af8fd3ff6cf27f4bde57e5d4de0aeb673878787604051620003869392919062000ee2565b60405180910390a16200039a868662000bf9565b50505050505050565b60008080600080516020620021bc83398151915290506000845111620004245760405162461bcd60e51b815260206004820152602b60248201527f4c69624469616d6f6e644375743a204e6f2073656c6563746f727320696e206660448201526a1858d95d081d1bc818dd5d60aa1b60648201526084015b60405180910390fd5b60008560028111156200044757634e487b7160e01b600052602160045260246000fd5b1415620005da576200047386604051806060016040528060248152602001620021dc6024913962000e1e565b60005b8451811015620005d3576000858281518110620004a357634e487b7160e01b600052603260045260246000fd5b6020908102919091018101516001600160e01b03198116600090815291859052604090912054909150606081901c15620005465760405162461bcd60e51b815260206004820152603560248201527f4c69624469616d6f6e644375743a2043616e2774206164642066756e6374696f60448201527f6e207468617420616c726561647920657869737473000000000000000000000060648201526084016200041b565b6001600160e01b031980831660008181526020879052604090206001600160601b031960608d901b168e17905560e060058e901b811692831c199c909c1690821c179a811415620005ab5760038c901c600090815260018601602052604081209b909b555b8b620005b78162001087565b9c50505050508080620005ca9062001087565b91505062000476565b5062000bed565b6001856002811115620005fd57634e487b7160e01b600052602160045260246000fd5b141562000825576200062986604051806060016040528060288152602001620022286028913962000e1e565b60005b8451811015620005d35760008582815181106200065957634e487b7160e01b600052603260045260246000fd5b6020908102919091018101516001600160e01b03198116600090815291859052604090912054909150606081901c30811415620006f15760405162461bcd60e51b815260206004820152602f60248201527f4c69624469616d6f6e644375743a2043616e2774207265706c61636520696d6d60448201526e3aba30b1363290333ab731ba34b7b760891b60648201526084016200041b565b896001600160a01b0316816001600160a01b031614156200076a5760405162461bcd60e51b815260206004820152603860248201526000805160206200219c83398151915260448201527f6374696f6e20776974682073616d652066756e6374696f6e000000000000000060648201526084016200041b565b6001600160a01b038116620007d75760405162461bcd60e51b815260206004820152603860248201526000805160206200219c83398151915260448201527f6374696f6e207468617420646f65736e2774206578697374000000000000000060648201526084016200041b565b506001600160e01b031990911660009081526020849052604090206001600160601b03919091166001600160601b031960608a901b16179055806200081c8162001087565b9150506200062c565b60028560028111156200084857634e487b7160e01b600052602160045260246000fd5b141562000b94576001600160a01b03861615620008ce5760405162461bcd60e51b815260206004820152603660248201527f4c69624469616d6f6e644375743a2052656d6f7665206661636574206164647260448201527f657373206d75737420626520616464726573732830290000000000000000000060648201526084016200041b565b600388901c6007891660005b865181101562000b6f5789620009175782620008f6816200106d565b60008181526001870160205260409020549b50935060079250620009279050565b8162000923816200106d565b9250505b6000806000808a85815181106200094e57634e487b7160e01b600052603260045260246000fd5b6020908102919091018101516001600160e01b031981166000908152918a9052604090912054909150606081901c620009f05760405162461bcd60e51b815260206004820152603760248201527f4c69624469616d6f6e644375743a2043616e27742072656d6f76652066756e6360448201527f74696f6e207468617420646f65736e277420657869737400000000000000000060648201526084016200041b565b606081901c30141562000a5d5760405162461bcd60e51b815260206004820152602e60248201527f4c69624469616d6f6e644375743a2043616e27742072656d6f766520696d6d7560448201526d3a30b1363290333ab731ba34b7b760911b60648201526084016200041b565b600587901b8f901b94506001600160e01b03198086169083161462000aaf576001600160e01b03198516600090815260208a90526040902080546001600160601b0319166001600160601b0383161790555b6001600160e01b031991909116600090815260208990526040812055600381901c611fff16925060051b60e016905085821462000b16576000828152600188016020526040902080546001600160e01b031980841c19909116908516831c17905562000b3a565b80836001600160e01b031916901c816001600160e01b031960001b901c198e16179c505b8462000b5657600086815260018801602052604081208190559c505b505050808062000b669062001087565b915050620008da565b508062000b7e8360086200101c565b62000b8a919062001001565b9950505062000bed565b60405162461bcd60e51b815260206004820152602760248201527f4c69624469616d6f6e644375743a20496e636f727265637420466163657443756044820152663a20b1ba34b7b760c91b60648201526084016200041b565b50959694955050505050565b6001600160a01b03821662000c835780511562000c7f5760405162461bcd60e51b815260206004820152603c60248201527f4c69624469616d6f6e644375743a205f696e697420697320616464726573732860448201527f3029206275745f63616c6c64617461206973206e6f7420656d7074790000000060648201526084016200041b565b5050565b600081511162000cfc5760405162461bcd60e51b815260206004820152603d60248201527f4c69624469616d6f6e644375743a205f63616c6c6461746120697320656d707460448201527f7920627574205f696e6974206973206e6f74206164647265737328302900000060648201526084016200041b565b6001600160a01b038216301462000d325762000d3282604051806060016040528060288152602001620022006028913962000e1e565b600080836001600160a01b03168360405162000d4f919062000ec4565b600060405180830381855af49150503d806000811462000d8c576040519150601f19603f3d011682016040523d82523d6000602084013e62000d91565b606091505b50915091508162000e185780511562000dc0578060405162461bcd60e51b81526004016200041b919062000fe5565b60405162461bcd60e51b815260206004820152602660248201527f4c69624469616d6f6e644375743a205f696e69742066756e6374696f6e2072656044820152651d995c9d195960d21b60648201526084016200041b565b50505050565b813b818162000e185760405162461bcd60e51b81526004016200041b919062000fe5565b80516001600160a01b038116811462000e5a57600080fd5b919050565b6000806040838503121562000e72578182fd5b62000e7d8362000e42565b915062000e8d6020840162000e42565b90509250929050565b6000815180845262000eb08160208601602086016200103e565b601f01601f19169290920160200192915050565b6000825162000ed88184602087016200103e565b9190910192915050565b60006060808301818452808751808352608092508286019150828160051b8701016020808b01875b8481101562000fb357898403607f19018652815180516001600160a01b0316855283810151898601906003811062000f5057634e487b7160e01b8c52602160045260248cfd5b868601526040918201519186018a9052815190819052908401908a90898701905b8083101562000f9d5783516001600160e01b031916825292860192600192909201919086019062000f71565b5097850197955050509082019060010162000f0a565b50506001600160a01b038a1690880152868103604088015262000fd7818962000e96565b9a9950505050505050505050565b60208152600062000ffa602083018462000e96565b9392505050565b60008219821115620010175762001017620010a5565b500190565b6000816000190483118215151615620010395762001039620010a5565b500290565b60005b838110156200105b57818101518382015260200162001041565b8381111562000e185750506000910152565b6000816200107f576200107f620010a5565b506000190190565b60006000198214156200109e576200109e620010a5565b5060010190565b634e487b7160e01b600052601160045260246000fd5b6110d180620010cb6000396000f3fe60806040523661000b57005b600080356001600160e01b03191681527fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6020819052604090912054819060601c8061009e5760405162461bcd60e51b815260206004820181905260248201527f4469616d6f6e643a2046756e6374696f6e20646f6573206e6f7420657869737460448201526064015b60405180910390fd5b3660008037600080366000845af43d6000803e8080156100bd573d6000f35b3d6000fd5b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c132080547fffffffffffffffffffffffff000000000000000000000000000000000000000081166001600160a01b038481169182179093556040517fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c939092169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131e547fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c9061ffff8116908190600090600716156101de5750600381901c60009081526001840160205260409020545b60005b875181101561028f5761027883838a848151811061020f57634e487b7160e01b600052603260045260246000fd5b6020026020010151600001518b858151811061023b57634e487b7160e01b600052603260045260246000fd5b6020026020010151602001518c868151811061026757634e487b7160e01b600052603260045260246000fd5b60200260200101516040015161031b565b90935091508061028781610ff6565b9150506101e1565b508282146102ab5760028401805461ffff191661ffff84161790555b60078216156102cd57600382901c600090815260018501602052604090208190555b7f8faa70878671ccd212d20771b795c50af8fd3ff6cf27f4bde57e5d4de0aeb67387878760405161030093929190610e67565b60405180910390a16103128686610bd4565b50505050505050565b600080807fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c905060008451116103b95760405162461bcd60e51b815260206004820152602b60248201527f4c69624469616d6f6e644375743a204e6f2073656c6563746f727320696e206660448201527f6163657420746f206375740000000000000000000000000000000000000000006064820152608401610095565b60008560028111156103db57634e487b7160e01b600052602160045260246000fd5b1415610564576104038660405180606001604052806024815260200161102860249139610dfe565b60005b845181101561055e57600085828151811061043157634e487b7160e01b600052603260045260246000fd5b6020908102919091018101516001600160e01b03198116600090815291859052604090912054909150606081901c156104d25760405162461bcd60e51b815260206004820152603560248201527f4c69624469616d6f6e644375743a2043616e2774206164642066756e6374696f60448201527f6e207468617420616c72656164792065786973747300000000000000000000006064820152608401610095565b6001600160e01b031980831660008181526020879052604090206bffffffffffffffffffffffff1960608d901b168e17905560e060058e901b811692831c199c909c1690821c179a81141561053b5760038c901c600090815260018601602052604081209b909b555b8b61054581610ff6565b9c5050505050808061055690610ff6565b915050610406565b50610bc8565b600185600281111561058657634e487b7160e01b600052602160045260246000fd5b14156107d9576105ae8660405180606001604052806028815260200161107460289139610dfe565b60005b845181101561055e5760008582815181106105dc57634e487b7160e01b600052603260045260246000fd5b6020908102919091018101516001600160e01b03198116600090815291859052604090912054909150606081901c308114156106805760405162461bcd60e51b815260206004820152602f60248201527f4c69624469616d6f6e644375743a2043616e2774207265706c61636520696d6d60448201527f757461626c652066756e6374696f6e00000000000000000000000000000000006064820152608401610095565b896001600160a01b0316816001600160a01b031614156107085760405162461bcd60e51b815260206004820152603860248201527f4c69624469616d6f6e644375743a2043616e2774207265706c6163652066756e60448201527f6374696f6e20776974682073616d652066756e6374696f6e00000000000000006064820152608401610095565b6001600160a01b0381166107845760405162461bcd60e51b815260206004820152603860248201527f4c69624469616d6f6e644375743a2043616e2774207265706c6163652066756e60448201527f6374696f6e207468617420646f65736e277420657869737400000000000000006064820152608401610095565b506001600160e01b031990911660009081526020849052604090206bffffffffffffffffffffffff919091166bffffffffffffffffffffffff1960608a901b16179055806107d181610ff6565b9150506105b1565b60028560028111156107fb57634e487b7160e01b600052602160045260246000fd5b1415610b5a576001600160a01b0386161561087e5760405162461bcd60e51b815260206004820152603660248201527f4c69624469616d6f6e644375743a2052656d6f7665206661636574206164647260448201527f657373206d7573742062652061646472657373283029000000000000000000006064820152608401610095565b600388901c6007891660005b8651811015610b3a57896108c257826108a281610fdf565b60008181526001870160205260409020549b509350600792506108d09050565b816108cc81610fdf565b9250505b6000806000808a85815181106108f657634e487b7160e01b600052603260045260246000fd5b6020908102919091018101516001600160e01b031981166000908152918a9052604090912054909150606081901c6109965760405162461bcd60e51b815260206004820152603760248201527f4c69624469616d6f6e644375743a2043616e27742072656d6f76652066756e6360448201527f74696f6e207468617420646f65736e27742065786973740000000000000000006064820152608401610095565b606081901c301415610a105760405162461bcd60e51b815260206004820152602e60248201527f4c69624469616d6f6e644375743a2043616e27742072656d6f766520696d6d7560448201527f7461626c652066756e6374696f6e0000000000000000000000000000000000006064820152608401610095565b600587901b8f901b94506001600160e01b031980861690831614610a6b576001600160e01b03198516600090815260208a90526040902080546bffffffffffffffffffffffff19166bffffffffffffffffffffffff83161790555b6001600160e01b031991909116600090815260208990526040812055600381901c611fff16925060051b60e0169050858214610ad0576000828152600188016020526040902080546001600160e01b031980841c19909116908516831c179055610b09565b80837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916901c816001600160e01b031960001b901c198e16179c505b84610b2457600086815260018801602052604081208190559c505b5050508080610b3290610ff6565b91505061088a565b5080610b47836008610f94565b610b519190610f7c565b99505050610bc8565b60405162461bcd60e51b815260206004820152602760248201527f4c69624469616d6f6e644375743a20496e636f7272656374204661636574437560448201527f74416374696f6e000000000000000000000000000000000000000000000000006064820152608401610095565b50959694955050505050565b6001600160a01b038216610c5b57805115610c575760405162461bcd60e51b815260206004820152603c60248201527f4c69624469616d6f6e644375743a205f696e697420697320616464726573732860448201527f3029206275745f63616c6c64617461206973206e6f7420656d707479000000006064820152608401610095565b5050565b6000815111610cd25760405162461bcd60e51b815260206004820152603d60248201527f4c69624469616d6f6e644375743a205f63616c6c6461746120697320656d707460448201527f7920627574205f696e6974206973206e6f7420616464726573732830290000006064820152608401610095565b6001600160a01b0382163014610d0457610d048260405180606001604052806028815260200161104c60289139610dfe565b600080836001600160a01b031683604051610d1f9190610e4b565b600060405180830381855af49150503d8060008114610d5a576040519150601f19603f3d011682016040523d82523d6000602084013e610d5f565b606091505b509150915081610df857805115610d8a578060405162461bcd60e51b81526004016100959190610f62565b60405162461bcd60e51b815260206004820152602660248201527f4c69624469616d6f6e644375743a205f696e69742066756e6374696f6e20726560448201527f76657274656400000000000000000000000000000000000000000000000000006064820152608401610095565b50505050565b813b8181610df85760405162461bcd60e51b81526004016100959190610f62565b60008151808452610e37816020860160208601610fb3565b601f01601f19169290920160200192915050565b60008251610e5d818460208701610fb3565b9190910192915050565b60006060808301818452808751808352608092508286019150828160051b8701016020808b01875b84811015610f3257607f198a850301865281518885016001600160a01b0382511686528482015160038110610ed257634e487b7160e01b8c52602160045260248cfd5b868601526040918201519186018a9052815190819052908401908a90898701905b80831015610f1d5783516001600160e01b0319168252928601926001929092019190860190610ef3565b50978501979550505090820190600101610e8f565b50506001600160a01b038a16908801528681036040880152610f548189610e1f565b9a9950505050505050505050565b602081526000610f756020830184610e1f565b9392505050565b60008219821115610f8f57610f8f611011565b500190565b6000816000190483118215151615610fae57610fae611011565b500290565b60005b83811015610fce578181015183820152602001610fb6565b83811115610df85750506000910152565b600081610fee57610fee611011565b506000190190565b600060001982141561100a5761100a611011565b5060010190565b634e487b7160e01b600052601160045260246000fdfe4c69624469616d6f6e644375743a2041646420666163657420686173206e6f20636f64654c69624469616d6f6e644375743a205f696e6974206164647265737320686173206e6f20636f64654c69624469616d6f6e644375743a205265706c61636520666163657420686173206e6f20636f6465a26469706673582212203b52a626b7cca4c1f8a7166dceed9d35e7d217a849d152b4ffece6106152e0cc64736f6c634300080400334c69624469616d6f6e644375743a2043616e2774207265706c6163652066756ec8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c4c69624469616d6f6e644375743a2041646420666163657420686173206e6f20636f64654c69624469616d6f6e644375743a205f696e6974206164647265737320686173206e6f20636f64654c69624469616d6f6e644375743a205265706c61636520666163657420686173206e6f20636f6465";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    } | {
        stateMutability: string;
        type: string;
        inputs?: undefined;
    })[];
    static createInterface(): DiamondInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Diamond;
}
export {};
