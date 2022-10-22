"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EngineFacet__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_troopId",
                type: "uint256",
            },
        ],
        name: "deleteTroop",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "x",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "y",
                        type: "uint256",
                    },
                ],
                internalType: "struct Position",
                name: "_pos",
                type: "tuple",
            },
        ],
        name: "initializePlayer",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_armyId",
                type: "uint256",
            },
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "x",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "y",
                        type: "uint256",
                    },
                ],
                internalType: "struct Position",
                name: "_targetPos",
                type: "tuple",
            },
        ],
        name: "march",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_troopId",
                type: "uint256",
            },
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "x",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "y",
                        type: "uint256",
                    },
                ],
                internalType: "struct Position",
                name: "_targetPos",
                type: "tuple",
            },
        ],
        name: "moveTroop",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "x",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "y",
                        type: "uint256",
                    },
                ],
                internalType: "struct Position",
                name: "_pos",
                type: "tuple",
            },
            {
                internalType: "uint256",
                name: "_troopTypeId",
                type: "uint256",
            },
        ],
        name: "purchaseTroop",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405260008055600180546001600160a01b031916905534801561002457600080fd5b506139f7806100346000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c8063b9a3fdcb11610050578063b9a3fdcb14610094578063c582e468146100a7578063e907bd1b146100ba57600080fd5b80635f7ef4321461006c578063a4702b8314610081575b600080fd5b61007f61007a366004613707565b6100cd565b005b61007f61008f36600461359b565b61102c565b61007f6100a2366004613707565b611a2d565b61007f6100b5366004613580565b61253d565b61007f6100c8366004613692565b613035565b7f55a00bec60f0186444b50c10b732dd4123adc4f1d8b00b50012262ae72fba0865460ff161561013c5760405162461bcd60e51b815260206004820152601560248201527410d5549253ce8811d85b59481a5cc81c185d5cd959605a1b60448201526064015b60405180910390fd5b604051639d9f7af360e01b815233600482015273__$8a461d6baeda20cc8b97c0d95fb84681dd$__90639d9f7af39060240160206040518083038186803b15801561018657600080fd5b505af415801561019a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101be9190613489565b61020a5760405162461bcd60e51b815260206004820152601960248201527f435552494f3a20506c6179657220697320696e616374697665000000000000006044820152606401610133565b604051600162ba669960e01b03198152815160048201526020820151602482015273__$8a461d6baeda20cc8b97c0d95fb84681dd$__9063ff4599679060440160206040518083038186803b15801561026257600080fd5b505af4158015610276573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061029a9190613489565b6102e65760405162461bcd60e51b815260206004820152601a60248201527f435552494f3a20546172676574206f7574206f6620626f756e640000000000006044820152606401610133565b60405163342a412360e01b8152815160048201526020820151602482015273__$8a461d6baeda20cc8b97c0d95fb84681dd$__9063342a41239060440160806040518083038186803b15801561033b57600080fd5b505af415801561034f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061037391906135c5565b516103e6576040516313ab5ce160e01b8152815160048201526020820151602482015273__$8a461d6baeda20cc8b97c0d95fb84681dd$__906313ab5ce19060440160006040518083038186803b1580156103cd57600080fd5b505af41580156103e1573d6000803e3d6000fd5b505050505b60008281527f55a00bec60f0186444b50c10b732dd4123adc4f1d8b00b50012262ae777409606020908152604080832081516060810183528154808252600180840154838701526002909301548285015285527f55a00bec60f0186444b50c10b732dd4123adc4f1d8b00b50012262ae777409618452828520835160a08101855281546001600160a01b0316815292810180548551818802810188019096528086529296959394919385810193908301828280156104c357602002820191906000526020600020905b8154815260200190600101908083116104af575b5050509183525050600282015460208083019190915260038301546040808401919091528051808201909152600484015481526005909301549083015260600152608081015190915061051461329d565b60405163342a412360e01b8152855160048201526020860151602482015260009073__$8a461d6baeda20cc8b97c0d95fb84681dd$__9063342a41239060440160806040518083038186803b15801561056c57600080fd5b505af4158015610580573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105a491906135c5565b90506000548160400151146106c25760408181015190516347254e5960e11b8152600481019190915273__$8a461d6baeda20cc8b97c0d95fb84681dd$__90638e4a9cb29060240160006040518083038186803b15801561060457600080fd5b505af4158015610618573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261064091908101906134a3565b80519092506001600160a01b031633146106c25760405162461bcd60e51b815260206004820152602a60248201527f435552494f3a20596f752063616e206f6e6c7920636f6d62696e65207769746860448201527f206f776e2074726f6f70000000000000000000000000000000000000000000006064820152608401610133565b6040517f52b7390c0000000000000000000000000000000000000000000000000000000081528351600482015260208085015160248301528751604483015287015160648201526001608482015273__$8a461d6baeda20cc8b97c0d95fb84681dd$__906352b7390c9060a40160206040518083038186803b15801561074757600080fd5b505af415801561075b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061077f9190613489565b6107f15760405162461bcd60e51b815260206004820152603360248201527f435552494f3a20596f752063616e206f6e6c792064697370617463682074726f60448201527f6f7020746f20746865206e6561722074696c65000000000000000000000000006064820152608401610133565b83516001600160a01b031633146108705760405162461bcd60e51b815260206004820152602660248201527f435552494f3a20596f752063616e206f6e6c79206469737061746368206f776e60448201527f2074726f6f7000000000000000000000000000000000000000000000000000006064820152608401610133565b60405163d18036a960e01b815273__$8a461d6baeda20cc8b97c0d95fb84681dd$__9063d18036a9906108a99086908a9060040161383c565b60206040518083038186803b1580156108c157600080fd5b505af41580156108d5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108f99190613489565b156109465760405162461bcd60e51b815260206004820152601d60248201527f435552494f3a20416c72656164792061742064657374696e6174696f6e0000006044820152606401610133565b60208401516040516315a1acf160e31b815273__$8a461d6baeda20cc8b97c0d95fb84681dd$__9163ad0d67889161098191906004016137f8565b60206040518083038186803b15801561099957600080fd5b505af41580156109ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109d191906136aa565b60608501516109e0904261396e565b1015610a3d5760405162461bcd60e51b815260206004820152602660248201527f435552494f3a204c6172676520616374696f6e2074616b656e20746f6f20726560448201526563656e746c7960d01b6064820152608401610133565b6020850151604051632bb1a5fb60e21b815273__$36ce60c46c6912e05bf59e2acd98d36b24$__9163aec697ec91610a7a91908590600401613880565b60206040518083038186803b158015610a9257600080fd5b505af4158015610aa6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aca9190613489565b610b3c5760405162461bcd60e51b815260206004820152602960248201527f435552494f3a2054726f6f7020616e64206c616e642074797065206e6f74206360448201527f6f6d70617469626c6500000000000000000000000000000000000000000000006064820152608401610133565b60005481604001511415610d985760608101516040516303d8e5b360e41b8152339173__$8a461d6baeda20cc8b97c0d95fb84681dd$__91633d8e5b3091610b8a9160040190815260200190565b60206040518083038186803b158015610ba257600080fd5b505af4158015610bb6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bda9190613468565b6001600160a01b03161480610bf457506000548160600151145b610c665760405162461bcd60e51b815260206004820152602960248201527f435552494f3a2043616e6e6f74206469726563746c792061747461636b20776960448201527f74682074726f6f707300000000000000000000000000000000000000000000006064820152608401610133565b6040517fd66e297f00000000000000000000000000000000000000000000000000000000815260009073__$8a461d6baeda20cc8b97c0d95fb84681dd$__9063d66e297f90610cbd9033908c9089906004016137cc565b60206040518083038186803b158015610cd557600080fd5b505af4158015610ce9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d0d91906136aa565b6040517f03377ad400000000000000000000000000000000000000000000000000000000815290915073__$36ce60c46c6912e05bf59e2acd98d36b24$__906303377ad490610d629084908b90600401613862565b60006040518083038186803b158015610d7a57600080fd5b505af4158015610d8e573d6000803e3d6000fd5b5050505050610ed0565b60058260200151516001610dac9190613956565b1115610e465760405162461bcd60e51b815260206004820152604160248201527f435552494f3a2041726d792063616e206861766520757020746f20666976652060448201527f74726f6f70732c206f722074776f2077697468206f6e65207472616e73706f7260648201527f7400000000000000000000000000000000000000000000000000000000000000608482015260a401610133565b60408181015190517fe1e2fa5100000000000000000000000000000000000000000000000000000000815260048101919091526024810188905273__$36ce60c46c6912e05bf59e2acd98d36b24$__9063e1e2fa519060440160006040518083038186803b158015610eb757600080fd5b505af4158015610ecb573d6000803e3d6000fd5b505050505b84516040517f0b46360400000000000000000000000000000000000000000000000000000000815260048101919091526024810188905273__$36ce60c46c6912e05bf59e2acd98d36b24$__90630b4636049060440160006040518083038186803b158015610f3e57600080fd5b505af4158015610f52573d6000803e3d6000fd5b5050604051637186154360e01b815273__$8a461d6baeda20cc8b97c0d95fb84681dd$__925063718615439150610f9190339087908b9060040161375a565b60006040518083038186803b158015610fa957600080fd5b505af4158015610fbd573d6000803e3d6000fd5b5050604051633d1a0f1360e21b815233600482015273__$8a461d6baeda20cc8b97c0d95fb84681dd$__925063f4683c4c915060240160006040518083038186803b15801561100b57600080fd5b505af415801561101f573d6000803e3d6000fd5b5050505050505050505050565b7f55a00bec60f0186444b50c10b732dd4123adc4f1d8b00b50012262ae72fba0865460ff16156110965760405162461bcd60e51b815260206004820152601560248201527410d5549253ce8811d85b59481a5cc81c185d5cd959605a1b6044820152606401610133565b604051639d9f7af360e01b815233600482015273__$8a461d6baeda20cc8b97c0d95fb84681dd$__90639d9f7af39060240160206040518083038186803b1580156110e057600080fd5b505af41580156110f4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111189190613489565b6111645760405162461bcd60e51b815260206004820152601960248201527f435552494f3a20506c6179657220697320696e616374697665000000000000006044820152606401610133565b604051600162ba669960e01b03198152825160048201526020830151602482015273__$8a461d6baeda20cc8b97c0d95fb84681dd$__9063ff4599679060440160206040518083038186803b1580156111bc57600080fd5b505af41580156111d0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111f49190613489565b6112405760405162461bcd60e51b815260206004820152601360248201527f435552494f3a204f7574206f6620626f756e64000000000000000000000000006044820152606401610133565b60405163342a412360e01b8152825160048201526020830151602482015273__$8a461d6baeda20cc8b97c0d95fb84681dd$__9063342a41239060440160806040518083038186803b15801561129557600080fd5b505af41580156112a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112cd91906135c5565b51611340576040516313ab5ce160e01b8152825160048201526020830151602482015273__$8a461d6baeda20cc8b97c0d95fb84681dd$__906313ab5ce19060440160006040518083038186803b15801561132757600080fd5b505af415801561133b573d6000803e3d6000fd5b505050505b60405163342a412360e01b8152825160048201526020830151602482015260009073__$8a461d6baeda20cc8b97c0d95fb84681dd$__9063342a41239060440160806040518083038186803b15801561139857600080fd5b505af41580156113ac573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113d091906135c5565b9050600054816060015114156114285760405162461bcd60e51b815260206004820152601460248201527f435552494f3a204e6f206261736520666f756e640000000000000000000000006044820152606401610133565b6000548160400151146114a35760405162461bcd60e51b815260206004820152602560248201527f435552494f3a2042617365206f6363757069656420627920616e6f746865722060448201527f74726f6f700000000000000000000000000000000000000000000000000000006064820152608401610133565b60608101516040517f88c6a07400000000000000000000000000000000000000000000000000000000815260009173__$8a461d6baeda20cc8b97c0d95fb84681dd$__916388c6a074916114fd9160040190815260200190565b6101206040518083038186803b15801561151657600080fd5b505af415801561152a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061154e91906134de565b60208101519091506001600160a01b031633146115d25760405162461bcd60e51b8152602060048201526024808201527f435552494f3a2043616e206f6e6c7920707572636861736520696e206f776e2060448201527f62617365000000000000000000000000000000000000000000000000000000006064820152608401610133565b604051632bb1a5fb60e21b815273__$36ce60c46c6912e05bf59e2acd98d36b24$__9063aec697ec9061160b9086908690600401613880565b60206040518083038186803b15801561162357600080fd5b505af4158015611637573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061165b9190613489565b6116cd5760405162461bcd60e51b815260206004820152602f60248201527f435552494f3a20426173652063616e6e6f742070757263686173652073656c6560448201527f637465642074726f6f70207479706500000000000000000000000000000000006064820152608401610133565b6040517f686be91600000000000000000000000000000000000000000000000000000000815273__$8a461d6baeda20cc8b97c0d95fb84681dd$__9063686be9169061172190339088908890600401613797565b60006040518083038186803b15801561173957600080fd5b505af415801561174d573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261177591908101906136c2565b50506040517fe017b2fd0000000000000000000000000000000000000000000000000000000081526004810184905260009073__$8a461d6baeda20cc8b97c0d95fb84681dd$__9063e017b2fd9060240160206040518083038186803b1580156117de57600080fd5b505af41580156117f2573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061181691906136aa565b6040517fae2876ad00000000000000000000000000000000000000000000000000000000815233600482015290915073__$8a461d6baeda20cc8b97c0d95fb84681dd$__9063ae2876ad9060240160006040518083038186803b15801561187c57600080fd5b505af4158015611890573d6000803e3d6000fd5b50506040517f7e4f8b3e00000000000000000000000000000000000000000000000000000000815233600482015273__$8a461d6baeda20cc8b97c0d95fb84681dd$__9250637e4f8b3e915060240160206040518083038186803b1580156118f757600080fd5b505af415801561190b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061192f91906136aa565b81111561197e5760405162461bcd60e51b815260206004820181905260248201527f435552494f3a20496e73756666696369656e7420676f6c642062616c616e63656044820152606401610133565b3360009081527f55a00bec60f0186444b50c10b732dd4123adc4f1d8b00b50012262ae72fba0976020526040812060020180548392906119bf90849061396e565b9091555050604051633d1a0f1360e21b815233600482015273__$8a461d6baeda20cc8b97c0d95fb84681dd$__9063f4683c4c9060240160006040518083038186803b158015611a0e57600080fd5b505af4158015611a22573d6000803e3d6000fd5b505050505050505050565b7f55a00bec60f0186444b50c10b732dd4123adc4f1d8b00b50012262ae72fba0865460ff1615611a975760405162461bcd60e51b815260206004820152601560248201527410d5549253ce8811d85b59481a5cc81c185d5cd959605a1b6044820152606401610133565b604051639d9f7af360e01b815233600482015273__$8a461d6baeda20cc8b97c0d95fb84681dd$__90639d9f7af39060240160206040518083038186803b158015611ae157600080fd5b505af4158015611af5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b199190613489565b611b655760405162461bcd60e51b815260206004820152601960248201527f435552494f3a20506c6179657220697320696e616374697665000000000000006044820152606401610133565b604051600162ba669960e01b03198152815160048201526020820151602482015273__$8a461d6baeda20cc8b97c0d95fb84681dd$__9063ff4599679060440160206040518083038186803b158015611bbd57600080fd5b505af4158015611bd1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bf59190613489565b611c415760405162461bcd60e51b815260206004820152601a60248201527f435552494f3a20546172676574206f7574206f6620626f756e640000000000006044820152606401610133565b60405163342a412360e01b8152815160048201526020820151602482015273__$8a461d6baeda20cc8b97c0d95fb84681dd$__9063342a41239060440160806040518083038186803b158015611c9657600080fd5b505af4158015611caa573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611cce91906135c5565b51611d41576040516313ab5ce160e01b8152815160048201526020820151602482015273__$8a461d6baeda20cc8b97c0d95fb84681dd$__906313ab5ce19060440160006040518083038186803b158015611d2857600080fd5b505af4158015611d3c573d6000803e3d6000fd5b505050505b6040516347254e5960e11b81526004810183905260009073__$8a461d6baeda20cc8b97c0d95fb84681dd$__90638e4a9cb29060240160006040518083038186803b158015611d8f57600080fd5b505af4158015611da3573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611dcb91908101906134a3565b80519091506001600160a01b03163314611e275760405162461bcd60e51b815260206004820152601f60248201527f435552494f3a2043616e206f6e6c79206d61726368206f776e2074726f6f70006044820152606401610133565b608081015160405163d18036a960e01b815273__$8a461d6baeda20cc8b97c0d95fb84681dd$__9163d18036a991611e649190869060040161383c565b60206040518083038186803b158015611e7c57600080fd5b505af4158015611e90573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611eb49190613489565b15611f015760405162461bcd60e51b815260206004820152601d60248201527f435552494f3a20416c72656164792061742064657374696e6174696f6e0000006044820152606401610133565b60208101516040516315a1acf160e31b815273__$8a461d6baeda20cc8b97c0d95fb84681dd$__9163ad0d678891611f3c91906004016137f8565b60206040518083038186803b158015611f5457600080fd5b505af4158015611f68573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f8c91906136aa565b6060820151611f9b904261396e565b1015611ff85760405162461bcd60e51b815260206004820152602660248201527f435552494f3a204c6172676520616374696f6e2074616b656e20746f6f20726560448201526563656e746c7960d01b6064820152608401610133565b60405163342a412360e01b8152825160048201526020830151602482015260009073__$8a461d6baeda20cc8b97c0d95fb84681dd$__9063342a41239060440160806040518083038186803b15801561205057600080fd5b505af4158015612064573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061208891906135c5565b6040517fa87da33a00000000000000000000000000000000000000000000000000000000815290915073__$36ce60c46c6912e05bf59e2acd98d36b24$__9063a87da33a906120dd9087908590600401613880565b60206040518083038186803b1580156120f557600080fd5b505af4158015612109573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061212d9190613489565b61219f5760405162461bcd60e51b815260206004820152602a60248201527f435552494f3a2054726f6f707320616e64206c616e642074797065206e6f742060448201527f636f6d70617469626c65000000000000000000000000000000000000000000006064820152608401610133565b60005481604001511415612359576000548160600151141561222b57604051634f73800560e11b815273__$36ce60c46c6912e05bf59e2acd98d36b24$__90639ee7000a906121f6903390889088906004016137cc565b60006040518083038186803b15801561220e57600080fd5b505af4158015612222573d6000803e3d6000fd5b50505050612467565b60608101516040516303d8e5b360e41b8152339173__$8a461d6baeda20cc8b97c0d95fb84681dd$__91633d8e5b309161226b9160040190815260200190565b60206040518083038186803b15801561228357600080fd5b505af4158015612297573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122bb9190613468565b6001600160a01b0316141561230557604051634f73800560e11b815273__$36ce60c46c6912e05bf59e2acd98d36b24$__90639ee7000a906121f6903390889088906004016137cc565b6040517f9ace81a800000000000000000000000000000000000000000000000000000000815273__$36ce60c46c6912e05bf59e2acd98d36b24$__90639ace81a8906121f6903390889088906004016137cc565b60408181015160009081527f55a00bec60f0186444b50c10b732dd4123adc4f1d8b00b50012262ae7774096160205220546001600160a01b03163314156123e25760405162461bcd60e51b815260206004820181905260248201527f435552494f3a2044657374696e6174696f6e2074696c65206f636375706965646044820152606401610133565b6040517f3942401e00000000000000000000000000000000000000000000000000000000815273__$36ce60c46c6912e05bf59e2acd98d36b24$__90633942401e90612436903390889088906004016137cc565b60006040518083038186803b15801561244e57600080fd5b505af4158015612462573d6000803e3d6000fd5b505050505b6080820151604051637186154360e01b815273__$8a461d6baeda20cc8b97c0d95fb84681dd$__916371861543916124a5913391889060040161375a565b60006040518083038186803b1580156124bd57600080fd5b505af41580156124d1573d6000803e3d6000fd5b5050604051633d1a0f1360e21b815233600482015273__$8a461d6baeda20cc8b97c0d95fb84681dd$__925063f4683c4c915060240160006040518083038186803b15801561251f57600080fd5b505af4158015612533573d6000803e3d6000fd5b5050505050505050565b7f55a00bec60f0186444b50c10b732dd4123adc4f1d8b00b50012262ae72fba0865460ff16156125a75760405162461bcd60e51b815260206004820152601560248201527410d5549253ce8811d85b59481a5cc81c185d5cd959605a1b6044820152606401610133565b7f55a00bec60f0186444b50c10b732dd4123adc4f1d8b00b50012262ae72fba086600201600a015473__$8a461d6baeda20cc8b97c0d95fb84681dd$__63e96070cc6040518163ffffffff1660e01b815260040160206040518083038186803b15801561261357600080fd5b505af4158015612627573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061264b91906136aa565b106126985760405162461bcd60e51b815260206004820181905260248201527f435552494f3a204d617820706c6179657220636f756e742065786365656465646044820152606401610133565b6040517f241f227d00000000000000000000000000000000000000000000000000000000815233600482015273__$8a461d6baeda20cc8b97c0d95fb84681dd$__9063241f227d9060240160206040518083038186803b1580156126fb57600080fd5b505af415801561270f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906127339190613489565b156127a65760405162461bcd60e51b815260206004820152602160248201527f435552494f3a20506c6179657220616c726561647920696e697469616c697a6560448201527f64000000000000000000000000000000000000000000000000000000000000006064820152608401610133565b604051600162ba669960e01b03198152815160048201526020820151602482015273__$8a461d6baeda20cc8b97c0d95fb84681dd$__9063ff4599679060440160206040518083038186803b1580156127fe57600080fd5b505af4158015612812573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128369190613489565b6128825760405162461bcd60e51b815260206004820152601360248201527f435552494f3a204f7574206f6620626f756e64000000000000000000000000006044820152606401610133565b60405163342a412360e01b8152815160048201526020820151602482015273__$8a461d6baeda20cc8b97c0d95fb84681dd$__9063342a41239060440160806040518083038186803b1580156128d757600080fd5b505af41580156128eb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061290f91906135c5565b51612982576040516313ab5ce160e01b8152815160048201526020820151602482015273__$8a461d6baeda20cc8b97c0d95fb84681dd$__906313ab5ce19060440160006040518083038186803b15801561296957600080fd5b505af415801561297d573d6000803e3d6000fd5b505050505b60405163342a412360e01b8152815160048201526020820151602482015260009073__$8a461d6baeda20cc8b97c0d95fb84681dd$__9063342a41239060440160806040518083038186803b1580156129da57600080fd5b505af41580156129ee573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a1291906135c5565b606001516001546040516303d8e5b360e41b8152600481018390529192506001600160a01b03169073__$8a461d6baeda20cc8b97c0d95fb84681dd$__90633d8e5b309060240160206040518083038186803b158015612a7157600080fd5b505af4158015612a85573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612aa99190613468565b6001600160a01b031614612aff5760405162461bcd60e51b815260206004820152601460248201527f435552494f3a20426173652069732074616b656e0000000000000000000000006044820152606401610133565b604080516101c0810182527f55a00bec60f0186444b50c10b732dd4123adc4f1d8b00b50012262ae72fba088546001600160a01b031681527f55a00bec60f0186444b50c10b732dd4123adc4f1d8b00b50012262ae72fba089546020808301919091527f55a00bec60f0186444b50c10b732dd4123adc4f1d8b00b50012262ae72fba08a54828401527f55a00bec60f0186444b50c10b732dd4123adc4f1d8b00b50012262ae72fba08b546060808401919091527f55a00bec60f0186444b50c10b732dd4123adc4f1d8b00b50012262ae72fba08c546080808501919091527f55a00bec60f0186444b50c10b732dd4123adc4f1d8b00b50012262ae72fba08d5460a0808601919091527f55a00bec60f0186444b50c10b732dd4123adc4f1d8b00b50012262ae72fba08e5460c08087019182527f55a00bec60f0186444b50c10b732dd4123adc4f1d8b00b50012262ae72fba08f5460e0808901919091527f55a00bec60f0186444b50c10b732dd4123adc4f1d8b00b50012262ae72fba09054610100808a01919091527f55a00bec60f0186444b50c10b732dd4123adc4f1d8b00b50012262ae72fba09154610120808b01919091527f55a00bec60f0186444b50c10b732dd4123adc4f1d8b00b50012262ae72fba09254610140808c01919091527f55a00bec60f0186444b50c10b732dd4123adc4f1d8b00b50012262ae72fba093546101608c019081527f55a00bec60f0186444b50c10b732dd4123adc4f1d8b00b50012262ae72fba094546101808d01527f55a00bec60f0186444b50c10b732dd4123adc4f1d8b00b50012262ae72fba095546101a08d01527f55a00bec60f0186444b50c10b732dd4123adc4f1d8b00b50012262ae72fba09680546001808201835560009283527fa4a500ef47b79b2442e32755ec4fb073013ff04a4cc69f0dd36d887a381d85b290910180547fffffffffffffffffffffffff000000000000000000000000000000000000000016331790558e519384018f52428085529c840181905297519d83019d909d5251988101989098529587018a9052938601899052908501959095529383019390935291810184905290810192909252907f55a00bec60f0186444b50c10b732dd4123adc4f1d8b00b50012262ae72fba0863360008181526011929092016020908152604092839020845181559084015160018201805491151560ff19928316179055928401516002820155606084015160038201556080840151600482015560a0840151600582015560c0840151600682015560e084015160078201556101008401516008820155610120909301516009909301805493151593909216929092179055612efb7f55a00bec60f0186444b50c10b732dd4123adc4f1d8b00b50012262ae72fba08690565b600084815263047868d5919091016020526040902080546001600160a01b0392909216610100027fffffffffffffffffffffff0000000000000000000000000000000000000000ff909216919091179055610320612f767f55a00bec60f0186444b50c10b732dd4123adc4f1d8b00b50012262ae72fba08690565b63047868d5016000848152602001908152602001600020600301819055507ff0a6a142d1cdc04619a8fd8924155cd64ff41b31e4226fb7ffa08e5ade8d6f9d3384604051612fc5929190613733565b60405180910390a1604051633d1a0f1360e21b815233600482015273__$8a461d6baeda20cc8b97c0d95fb84681dd$__9063f4683c4c906024015b60006040518083038186803b15801561301857600080fd5b505af415801561302c573d6000803e3d6000fd5b50505050505050565b6040517f9743bddd0000000000000000000000000000000000000000000000000000000081526004810182905260009073__$8a461d6baeda20cc8b97c0d95fb84681dd$__90639743bddd9060240160606040518083038186803b15801561309c57600080fd5b505af41580156130b0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906130d49190613637565b80516040516347254e5960e11b8152600481019190915290915060009073__$8a461d6baeda20cc8b97c0d95fb84681dd$__90638e4a9cb29060240160006040518083038186803b15801561312857600080fd5b505af415801561313c573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261316491908101906134a3565b80519091506001600160a01b031633146131c05760405162461bcd60e51b815260206004820181905260248201527f435552494f3a2043616e206f6e6c792064656c657465206f776e2074726f6f706044820152606401610133565b6040517f304c0add0000000000000000000000000000000000000000000000000000000081526004810184905273__$8a461d6baeda20cc8b97c0d95fb84681dd$__9063304c0add9060240160006040518083038186803b15801561322457600080fd5b505af4158015613238573d6000803e3d6000fd5b505083516040517f6dd2226400000000000000000000000000000000000000000000000000000000815233600482015260248101829052604481019190915273__$36ce60c46c6912e05bf59e2acd98d36b24$__9250636dd222649150606401613000565b6040518060a0016040528060006001600160a01b031681526020016060815260200160008152602001600081526020016132ea604051806040016040528060008152602001600081525090565b905290565b80516001600160a01b038116811461330657600080fd5b919050565b8051801515811461330657600080fd5b600060c0828403121561332c578081fd5b6133346138d9565b905061333f826132ef565b815260208083015167ffffffffffffffff8082111561335d57600080fd5b818501915085601f83011261337157600080fd5b8151818111156133835761338361399b565b8060051b9150613394848301613925565b8181528481019084860184860187018a10156133af57600080fd5b600095505b838610156133d25780518352600195909501949186019186016133b4565b50808688015250505050505060408201516040820152606082015160608201526133ff8360808401613439565b608082015292915050565b60006040828403121561341b578081fd5b613423613902565b9050813581526020820135602082015292915050565b60006040828403121561344a578081fd5b613452613902565b9050815181526020820151602082015292915050565b600060208284031215613479578081fd5b613482826132ef565b9392505050565b60006020828403121561349a578081fd5b6134828261330b565b6000602082840312156134b4578081fd5b815167ffffffffffffffff8111156134ca578182fd5b6134d68482850161331b565b949350505050565b600061012082840312156134f0578081fd5b604051610100810181811067ffffffffffffffff821117156135145761351461399b565b6040528251613522816139b1565b8152613530602084016132ef565b602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c08201526135748460e08501613439565b60e08201529392505050565b600060408284031215613591578081fd5b613482838361340a565b600080606083850312156135ad578081fd5b6135b7848461340a565b946040939093013593505050565b6000608082840312156135d6578081fd5b6040516080810181811067ffffffffffffffff821117156135f9576135f961399b565b6040526136058361330b565b81526020830151613615816139b1565b6020820152604083810151908201526060928301519281019290925250919050565b600060608284031215613648578081fd5b6040516060810181811067ffffffffffffffff8211171561366b5761366b61399b565b80604052508251815260208301516020820152604083015160408201528091505092915050565b6000602082840312156136a3578081fd5b5035919050565b6000602082840312156136bb578081fd5b5051919050565b600080604083850312156136d4578182fd5b82519150602083015167ffffffffffffffff8111156136f1578182fd5b6136fd8582860161331b565b9150509250929050565b60008060608385031215613719578182fd5b8235915061372a846020850161340a565b90509250929050565b6001600160a01b038316815260608101613482602083018480518252602090810151910152565b6001600160a01b038416815260a08101613781602083018580518252602090810151910152565b82516060830152602083015160808301526134d6565b6001600160a01b0384168152608081016137be602083018580518252602090810151910152565b826060830152949350505050565b6001600160a01b03841681526020808201849052825160408301528201516060820152608081016134d6565b6020808252825182820181905260009190848201906040850190845b8181101561383057835183529284019291840191600101613814565b50909695505050505050565b825181526020808401518183015282516040830152820151606082015260808101613482565b82815260608101613482602083018480518252602090810151910152565b600060a0820190508382528251151560208301526020830151600381106138b757634e487b7160e01b600052602160045260246000fd5b8060408401525060408301516060830152606083015160808301529392505050565b60405160a0810167ffffffffffffffff811182821017156138fc576138fc61399b565b60405290565b6040805190810167ffffffffffffffff811182821017156138fc576138fc61399b565b604051601f8201601f1916810167ffffffffffffffff8111828210171561394e5761394e61399b565b604052919050565b6000821982111561396957613969613985565b500190565b60008282101561398057613980613985565b500390565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b600381106139be57600080fd5b5056fea26469706673582212204bccc5477033bd7ed80e82bbee4cf361c1620de9578b9e8957ee65e7026150e164736f6c63430008040033";
const isSuperArgs = (xs) => {
    return (typeof xs[0] === "string" ||
        Array.isArray(xs[0]) ||
        "_isInterface" in xs[0]);
};
class EngineFacet__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            const [linkLibraryAddresses, signer] = args;
            super(_abi, EngineFacet__factory.linkBytecode(linkLibraryAddresses), signer);
        }
    }
    static linkBytecode(linkLibraryAddresses) {
        let linkedBytecode = _bytecode;
        linkedBytecode = linkedBytecode.replace(new RegExp("__\\$8a461d6baeda20cc8b97c0d95fb84681dd\\$__", "g"), linkLibraryAddresses["contracts/libraries/GameUtil.sol:Util"]
            .replace(/^0x/, "")
            .toLowerCase());
        linkedBytecode = linkedBytecode.replace(new RegExp("__\\$36ce60c46c6912e05bf59e2acd98d36b24\\$__", "g"), linkLibraryAddresses["contracts/libraries/EngineModules.sol:EngineModules"]
            .replace(/^0x/, "")
            .toLowerCase());
        return linkedBytecode;
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.EngineFacet__factory = EngineFacet__factory;
EngineFacet__factory.bytecode = _bytecode;
EngineFacet__factory.abi = _abi;
//# sourceMappingURL=EngineFacet__factory.js.map