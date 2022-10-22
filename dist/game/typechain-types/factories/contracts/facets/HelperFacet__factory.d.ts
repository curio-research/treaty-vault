import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { HelperFacet, HelperFacetInterface } from "../../../contracts/facets/HelperFacet";
declare type HelperFacetConstructorParams = [linkLibraryAddresses: HelperFacetLibraryAddresses, signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class HelperFacet__factory extends ContractFactory {
    constructor(...args: HelperFacetConstructorParams);
    static linkBytecode(linkLibraryAddresses: HelperFacetLibraryAddresses): string;
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<HelperFacet>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): HelperFacet;
    connect(signer: Signer): HelperFacet__factory;
    static readonly bytecode = "0x608060405260008055600180546001600160a01b031916905534801561002457600080fd5b50611db5806100346000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063954b855d1161005b578063954b855d146100c5578063ac344fb7146100d8578063b0cef49c146100eb578063f1d51bb2146100fe57600080fd5b80633cc4c6ce1461008d578063499831f21461009757806360a03a2a1461009f57806371995a7b146100b2575b600080fd5b610095610111565b005b6100956102c4565b6100956100ad3660046119f7565b6104fc565b6100956100c036600461175a565b610a06565b6100956100d33660046119c0565b610a9c565b6100956100e6366004611868565b611112565b6100956100f9366004611737565b611245565b61009561010c366004611737565b6112b3565b600080516020611d60833981519152600201546001600160a01b031633146101765760405162461bcd60e51b815260206004820152601360248201527210d5549253ce88155b985d5d1a1bdc9a5e9959606a1b60448201526064015b60405180910390fd5b600080516020611d608339815191525460ff166101d55760405162461bcd60e51b815260206004820152601660248201527f435552494f3a2047616d65206973206f6e676f696e6700000000000000000000604482015260640161016d565b60005b7f55a00bec60f0186444b50c10b732dd4123adc4f1d8b00b50012262ae72fba096548110156102815742600080516020611d608339815191526011016000600080516020611d60833981519152601001848154811061024757634e487b7160e01b600052603260045260246000fd5b60009182526020808320909101546001600160a01b031683528201929092526040019020600601558061027981611cf6565b9150506101d8565b50600080516020611d60833981519152805460ff191690556040517fc2b59ac10e0ce529935226cd4598d1b33c6884837c7c6466958ec98d7f25051590600090a1565b600080516020611d60833981519152600201546001600160a01b031633146103245760405162461bcd60e51b815260206004820152601360248201527210d5549253ce88155b985d5d1a1bdc9a5e9959606a1b604482015260640161016d565b600080516020611d608339815191525460ff16156103845760405162461bcd60e51b815260206004820152601560248201527f435552494f3a2047616d65206973207061757365640000000000000000000000604482015260640161016d565b6000600080516020611d608339815191526010018054806020026020016040519081016040528092919081815260200182805480156103ec57602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116103ce575b5050505050905060005b81518110156104af5773__$8a461d6baeda20cc8b97c0d95fb84681dd$__63ae2876ad83838151811061043957634e487b7160e01b600052603260045260246000fd5b60200260200101516040518263ffffffff1660e01b815260040161046c91906001600160a01b0391909116815260200190565b60006040518083038186803b15801561048457600080fd5b505af4158015610498573d6000803e3d6000fd5b5050505080806104a790611cf6565b9150506103f6565b50600080516020611d60833981519152805460ff191660011781554290600101556040517f379a7ed98de1761176e6287e5f55608de8a7ab47a92b795aed8fe2fd32d8260e90600090a150565b600080516020611d60833981519152600201546001600160a01b0316331461055c5760405162461bcd60e51b815260206004820152601360248201527210d5549253ce88155b985d5d1a1bdc9a5e9959606a1b604482015260640161016d565b6040517fff459967000000000000000000000000000000000000000000000000000000008152835160048201526020840151602482015273__$8a461d6baeda20cc8b97c0d95fb84681dd$__9063ff4599679060440160206040518083038186803b1580156105ca57600080fd5b505af41580156105de573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106029190611904565b61064e5760405162461bcd60e51b815260206004820152601360248201527f435552494f3a204f7574206f6620626f756e6400000000000000000000000000604482015260640161016d565b60405163342a412360e01b8152835160048201526020840151602482015273__$8a461d6baeda20cc8b97c0d95fb84681dd$__9063342a41239060440160806040518083038186803b1580156106a357600080fd5b505af41580156106b7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106db9190611a36565b5161074e576040516313ab5ce160e01b8152835160048201526020840151602482015273__$8a461d6baeda20cc8b97c0d95fb84681dd$__906313ab5ce19060440160006040518083038186803b15801561073557600080fd5b505af4158015610749573d6000803e3d6000fd5b505050505b60405163342a412360e01b8152835160048201526020840151602482015260009073__$8a461d6baeda20cc8b97c0d95fb84681dd$__9063342a41239060440160806040518083038186803b1580156107a657600080fd5b505af41580156107ba573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107de9190611a36565b90506000548160400151146108355760405162461bcd60e51b815260206004820152601460248201527f435552494f3a2054696c65206f63637570696564000000000000000000000000604482015260640161016d565b600054816060015114610956576040517faec697ec00000000000000000000000000000000000000000000000000000000815273__$36ce60c46c6912e05bf59e2acd98d36b24$__9063aec697ec906108949085908590600401611be4565b60206040518083038186803b1580156108ac57600080fd5b505af41580156108c0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108e49190611904565b6109565760405162461bcd60e51b815260206004820152602b60248201527f435552494f3a2043616e206f6e6c7920737061776e2077617465722074726f6f60448201527f707320696e20706f727473000000000000000000000000000000000000000000606482015260840161016d565b6040517f686be91600000000000000000000000000000000000000000000000000000000815273__$8a461d6baeda20cc8b97c0d95fb84681dd$__9063686be916906109aa90869088908790600401611baf565b60006040518083038186803b1580156109c257600080fd5b505af41580156109d6573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526109fe9190810190611aa8565b505050505050565b600080516020611d60833981519152600201546001600160a01b03163314610a665760405162461bcd60e51b815260206004820152601360248201527210d5549253ce88155b985d5d1a1bdc9a5e9959606a1b604482015260640161016d565b8051610a98907f55a00bec60f0186444b50c10b732dd4123adc4f1d8b00b50012262ae777409649060208401906115c2565b5050565b600080516020611d60833981519152600201546001600160a01b03163314610afc5760405162461bcd60e51b815260206004820152601360248201527210d5549253ce88155b985d5d1a1bdc9a5e9959606a1b604482015260640161016d565b6040517fff459967000000000000000000000000000000000000000000000000000000008152825160048201526020830151602482015273__$8a461d6baeda20cc8b97c0d95fb84681dd$__9063ff4599679060440160206040518083038186803b158015610b6a57600080fd5b505af4158015610b7e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ba29190611904565b610bee5760405162461bcd60e51b815260206004820152601360248201527f435552494f3a204f7574206f6620626f756e6400000000000000000000000000604482015260640161016d565b60405163342a412360e01b8152825160048201526020830151602482015273__$8a461d6baeda20cc8b97c0d95fb84681dd$__9063342a41239060440160806040518083038186803b158015610c4357600080fd5b505af4158015610c57573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c7b9190611a36565b51610cee576040516313ab5ce160e01b8152825160048201526020830151602482015273__$8a461d6baeda20cc8b97c0d95fb84681dd$__906313ab5ce19060440160006040518083038186803b158015610cd557600080fd5b505af4158015610ce9573d6000803e3d6000fd5b505050505b60405163342a412360e01b8152825160048201526020830151602482015260009073__$8a461d6baeda20cc8b97c0d95fb84681dd$__9063342a41239060440160806040518083038186803b158015610d4657600080fd5b505af4158015610d5a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d7e9190611a36565b905060005481606001511415610dd65760405162461bcd60e51b815260206004820152601460248201527f435552494f3a204e6f206261736520666f756e64000000000000000000000000604482015260640161016d565b600054816040015114610e2b5760405162461bcd60e51b815260206004820152601460248201527f435552494f3a2054696c65206f63637570696564000000000000000000000000604482015260640161016d565b60608101516040517f88c6a07400000000000000000000000000000000000000000000000000000000815260009173__$8a461d6baeda20cc8b97c0d95fb84681dd$__916388c6a07491610e859160040190815260200190565b6101206040518083038186803b158015610e9e57600080fd5b505af4158015610eb2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ed6919061191e565b60015460208201519192506001600160a01b03918216911614610f3b5760405162461bcd60e51b815260206004820152601460248201527f435552494f3a2042617365206973206f776e6564000000000000000000000000604482015260640161016d565b60608201805160009081527f55a00bec60f0186444b50c10b732dd4123adc4f1d8b00b50012262ae7774095b602052604080822080547fffffffffffffffffffffff0000000000000000000000000000000000000000ff166101006001600160a01b0389169081029190911790915592518252808220610320600390910155805163ae2876ad60e01b815260048101939093525173__$8a461d6baeda20cc8b97c0d95fb84681dd$__9263ae2876ad926024808301939192829003018186803b15801561100757600080fd5b505af415801561101b573d6000803e3d6000fd5b50505050611034600080516020611d6083398151915290565b6001600160a01b03841660009081526011919091016020526040812060070180549161105f83611cf6565b909155505060a08101516001600160a01b03841660009081527f55a00bec60f0186444b50c10b732dd4123adc4f1d8b00b50012262ae72fba0976020526040812060030180549091906110b3908490611cde565b909155505060c08101516001600160a01b03841660009081527f55a00bec60f0186444b50c10b732dd4123adc4f1d8b00b50012262ae72fba097602052604081206004018054909190611107908490611cde565b909155505050505050565b600080516020611d60833981519152600201546001600160a01b031633146111725760405162461bcd60e51b815260206004820152601360248201527210d5549253ce88155b985d5d1a1bdc9a5e9959606a1b604482015260640161016d565b60005b8151811015610a985773__$8a461d6baeda20cc8b97c0d95fb84681dd$__6313ab5ce18383815181106111b857634e487b7160e01b600052603260045260246000fd5b6020908102919091018101516040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815281516004820152910151602482015260440160006040518083038186803b15801561121a57600080fd5b505af415801561122e573d6000803e3d6000fd5b50505050808061123d90611cf6565b915050611175565b60405163ae2876ad60e01b81526001600160a01b038216600482015273__$8a461d6baeda20cc8b97c0d95fb84681dd$__9063ae2876ad9060240160006040518083038186803b15801561129857600080fd5b505af41580156112ac573d6000803e3d6000fd5b5050505050565b600080516020611d60833981519152600201546001600160a01b031633146113135760405162461bcd60e51b815260206004820152601360248201527210d5549253ce88155b985d5d1a1bdc9a5e9959606a1b604482015260640161016d565b6040517f241f227d0000000000000000000000000000000000000000000000000000000081526001600160a01b038216600482015273__$8a461d6baeda20cc8b97c0d95fb84681dd$__9063241f227d9060240160206040518083038186803b15801561137f57600080fd5b505af4158015611393573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113b79190611904565b1561142a5760405162461bcd60e51b815260206004820152602160248201527f435552494f3a20506c6179657220616c726561647920696e697469616c697a6560448201527f6400000000000000000000000000000000000000000000000000000000000000606482015260840161016d565b6040517f9d9f7af30000000000000000000000000000000000000000000000000000000081526001600160a01b038216600482015273__$8a461d6baeda20cc8b97c0d95fb84681dd$__90639d9f7af39060240160206040518083038186803b15801561149657600080fd5b505af41580156114aa573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114ce9190611904565b1561151b5760405162461bcd60e51b815260206004820152601760248201527f435552494f3a20506c6179657220697320616374697665000000000000000000604482015260640161016d565b6001600160a01b03811660008181527f55a00bec60f0186444b50c10b732dd4123adc4f1d8b00b50012262ae72fba09760209081526040918290206001808201805460ff191690911790557f55a00bec60f0186444b50c10b732dd4123adc4f1d8b00b50012262ae72fba08e54600290910155815192835290517ff9e7a3c08351a79e68db9da8c33909a2da65154bb66a298c3c47b36d94256d9f9281900390910190a150565b82805482825590600052602060002090810192821561160f579160200282015b8281111561160f57825180516115ff91849160209091019061161f565b50916020019190600101906115e2565b5061161b929150611666565b5090565b82805482825590600052602060002090810192821561165a579160200282015b8281111561165a57825182559160200191906001019061163f565b5061161b929150611683565b8082111561161b57600061167a8282611698565b50600101611666565b5b8082111561161b5760008155600101611684565b50805460008255906000526020600020908101906116b69190611683565b50565b80516116c481611d3d565b919050565b805180151581146116c457600080fd5b6000604082840312156116ea578081fd5b6116f2611c3d565b9050813581526020820135602082015292915050565b600060408284031215611719578081fd5b611721611c3d565b9050815181526020820151602082015292915050565b600060208284031215611748578081fd5b813561175381611d3d565b9392505050565b6000602080838503121561176c578182fd5b823567ffffffffffffffff80821115611783578384fd5b818501915085601f830112611796578384fd5b81356117a96117a482611cba565b611c89565b80828252858201915085850189878560051b88010111156117c8578788fd5b875b84811015611859578135868111156117e057898afd5b8701603f81018c136117f057898afd5b888101356118006117a482611cba565b808282528b82019150604084018f60408560051b8701011115611821578d8efd5b8d94505b83851015611843578035835260019490940193918c01918c01611825565b50875250505092870192908701906001016117ca565b50909998505050505050505050565b6000602080838503121561187a578182fd5b823567ffffffffffffffff811115611890578283fd5b8301601f810185136118a0578283fd5b80356118ae6117a482611cba565b80828252848201915084840188868560061b87010111156118cd578687fd5b8694505b838510156118f8576118e389826116d9565b835260019490940193918501916040016118d1565b50979650505050505050565b600060208284031215611915578081fd5b611753826116c9565b60006101208284031215611930578081fd5b604051610100810181811067ffffffffffffffff8211171561195457611954611d27565b604052825161196281611d52565b8152611970602084016116b9565b602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c08201526119b48460e08501611708565b60e08201529392505050565b600080606083850312156119d2578081fd5b6119dc84846116d9565b915060408301356119ec81611d3d565b809150509250929050565b600080600060808486031215611a0b578081fd5b611a1585856116d9565b92506040840135611a2581611d3d565b929592945050506060919091013590565b600060808284031215611a47578081fd5b6040516080810181811067ffffffffffffffff82111715611a6a57611a6a611d27565b604052611a76836116c9565b81526020830151611a8681611d52565b6020820152604083810151908201526060928301519281019290925250919050565b60008060408385031215611aba578182fd5b8251915060208084015167ffffffffffffffff80821115611ad9578384fd5b9085019060c08288031215611aec578384fd5b611af4611c66565b8251611aff81611d3d565b81528284015182811115611b11578586fd5b83019150601f82018813611b23578485fd5b8151611b316117a482611cba565b8082825286820191508685018b888560051b8801011115611b50578889fd5b8895505b83861015611b72578051835260019590950194918701918701611b54565b5080878501525050506040830151604082015260608301516060820152611b9c8860808501611708565b6080820152809450505050509250929050565b6001600160a01b038416815260808101611bd6602083018580518252602090810151910152565b826060830152949350505050565b600060a082019050838252825115156020830152602083015160038110611c1b57634e487b7160e01b600052602160045260246000fd5b8060408401525060408301516060830152606083015160808301529392505050565b6040805190810167ffffffffffffffff81118282101715611c6057611c60611d27565b60405290565b60405160a0810167ffffffffffffffff81118282101715611c6057611c60611d27565b604051601f8201601f1916810167ffffffffffffffff81118282101715611cb257611cb2611d27565b604052919050565b600067ffffffffffffffff821115611cd457611cd4611d27565b5060051b60200190565b60008219821115611cf157611cf1611d11565b500190565b6000600019821415611d0a57611d0a611d11565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b03811681146116b657600080fd5b600381106116b657600080fdfe55a00bec60f0186444b50c10b732dd4123adc4f1d8b00b50012262ae72fba086a26469706673582212205eda4d407888ae4681cbc5679cc06335e0ac49c18b62e1b870fe01306db5268664736f6c63430008040033";
    static readonly abi: {
        inputs: ({
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        } | {
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        })[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): HelperFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): HelperFacet;
}
export interface HelperFacetLibraryAddresses {
    ["contracts/libraries/GameUtil.sol:Util"]: string;
    ["contracts/libraries/EngineModules.sol:EngineModules"]: string;
}
export {};
