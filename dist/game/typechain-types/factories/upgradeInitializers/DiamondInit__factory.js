"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiamondInit__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "admin",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "worldWidth",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "worldHeight",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "numInitTerrainTypes",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "initBatchSize",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "maxCityCountPerPlayer",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "maxArmyCountPerPlayer",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "maxPlayerCount",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "maxInventoryCapacity",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "cityUpgradeGoldCost",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "initCityGold",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "cityHealth",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "cityAttack",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "cityDefense",
                        type: "uint256",
                    },
                ],
                internalType: "struct WorldConstants",
                name: "_worldConstants",
                type: "tuple",
            },
        ],
        name: "init",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b50610ae5806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c806314c62efd14610030575b600080fd5b61004361003e366004610478565b610045565b005b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131f60209081527f699d9daa71b280d05a152715774afa0a81a312594b2d731d6b0b2552b7d6f69f8054600160ff1991821681179092557ff97e938d8af42f52387bb74b8b526fda8f184cc2aa534340a8d75a88fbecc77580548216831790557f65d510a5d8f7ef134ec444f7f34ee808c8eeb5177cdfd16be0c40fe1ab43369580548216831790557f7f5828d0000000000000000000000000000000000000000000000000000000006000527f5622121b47b8cd0120c4efe45dd5483242f54a3d49bd7679be565d47694918c38054909116909117905581517f55a00bec60f0186444b50c10b732dd4123adc4f1d8b00b50012262ae72fba088805473ffffffffffffffffffffffffffffffffffffffff191673ffffffffffffffffffffffffffffffffffffffff9092169190911790558101517f55a00bec60f0186444b50c10b732dd4123adc4f1d8b00b50012262ae72fba089556040808201517f55a00bec60f0186444b50c10b732dd4123adc4f1d8b00b50012262ae72fba08a5560608201517f55a00bec60f0186444b50c10b732dd4123adc4f1d8b00b50012262ae72fba08b5560808201517f55a00bec60f0186444b50c10b732dd4123adc4f1d8b00b50012262ae72fba08c5560a08201517f55a00bec60f0186444b50c10b732dd4123adc4f1d8b00b50012262ae72fba08d5560c08201517f55a00bec60f0186444b50c10b732dd4123adc4f1d8b00b50012262ae72fba08e5560e08201517f55a00bec60f0186444b50c10b732dd4123adc4f1d8b00b50012262ae72fba08f556101008201517f55a00bec60f0186444b50c10b732dd4123adc4f1d8b00b50012262ae72fba090556101208201517f55a00bec60f0186444b50c10b732dd4123adc4f1d8b00b50012262ae72fba091556101408201517f55a00bec60f0186444b50c10b732dd4123adc4f1d8b00b50012262ae72fba092556101608201517f55a00bec60f0186444b50c10b732dd4123adc4f1d8b00b50012262ae72fba093556101808201517f55a00bec60f0186444b50c10b732dd4123adc4f1d8b00b50012262ae72fba094556101a08201517f55a00bec60f0186444b50c10b732dd4123adc4f1d8b00b50012262ae72fba09555517fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c906103c290610442565b604051809103906000f0801580156103de573d6000803e3d6000fd5b507f55a00bec60f0186444b50c10b732dd4123adc4f1d8b00b50012262ae72fba08663017d785301805473ffffffffffffffffffffffffffffffffffffffff191673ffffffffffffffffffffffffffffffffffffffff929092169190911790555050565b6105298061058783390190565b803573ffffffffffffffffffffffffffffffffffffffff8116811461047357600080fd5b919050565b60006101c0828403121561048a578081fd5b610492610535565b61049b8361044f565b81526020830135602082015260408301356040820152606083013560608201526080830135608082015260a083013560a082015260c083013560c082015260e083013560e08201526101008084013581830152506101208084013581830152506101408084013581830152506101608084013581830152506101808084013581830152506101a08084013581830152508091505092915050565b6040516101c0810167ffffffffffffffff81118282101715610580577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040529056fe608060405234801561001057600080fd5b50610509806100206000396000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c806391d40c831161005057806391d40c83146100bd578063949d225d146100d05780639f161b0a146100e157600080fd5b80631003e2d2146100775780634cc822151461008c57806353ed51431461009f575b600080fd5b61008a610085366004610419565b610104565b005b61008a61009a366004610419565b61016d565b6100a7610253565b6040516100b49190610431565b60405180910390f35b61008a6100cb366004610359565b6102ab565b6000546040519081526020016100b4565b6100f46100ef366004610419565b6102fd565b60405190151581526020016100b4565b61010d816102fd565b156101155750565b60008054600181810183559180527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5630182905561015160005490565b61015b9190610475565b60009182526001602052604090912055565b610176816102fd565b61017d5750565b60008181526001602081905260408220549190819061019b60005490565b6101a59190610475565b815481106101c357634e487b7160e01b600052603260045260246000fd5b9060005260206000200154905080600083815481106101f257634e487b7160e01b600052603260045260246000fd5b600091825260208083209091019290925582815260019091526040808220849055848252812081905580548061023857634e487b7160e01b600052603160045260246000fd5b60019003818190600052602060002001600090559055505050565b606060008054806020026020016040519081016040528092919081815260200182805480156102a157602002820191906000526020600020905b81548152602001906001019080831161028d575b5050505050905090565b60005b81518110156102f9576102e78282815181106102da57634e487b7160e01b600052603260045260246000fd5b6020026020010151610104565b806102f18161048c565b9150506102ae565b5050565b6000805461030d57506000919050565b6000828152600160205260409020541515806103535750816000808154811061034657634e487b7160e01b600052603260045260246000fd5b9060005260206000200154145b92915050565b6000602080838503121561036b578182fd5b823567ffffffffffffffff80821115610382578384fd5b818501915085601f830112610395578384fd5b8135818111156103a7576103a76104bd565b8060051b604051601f19603f830116810181811085821117156103cc576103cc6104bd565b604052828152858101935084860182860187018a10156103ea578788fd5b8795505b8386101561040c5780358552600195909501949386019386016103ee565b5098975050505050505050565b60006020828403121561042a578081fd5b5035919050565b6020808252825182820181905260009190848201906040850190845b818110156104695783518352928401929184019160010161044d565b50909695505050505050565b600082821015610487576104876104a7565b500390565b60006000198214156104a0576104a06104a7565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea26469706673582212202dd06c7e0608124355cb1f9ceca0e5d4d5916427eed189b475797b6f8ca8ef0164736f6c63430008040033a26469706673582212204419c91aa861f45a2f3d28edd06a7ef47eff1c3bb028de4aae22a4f2f29fbc8964736f6c63430008040033";
const isSuperArgs = (xs) => xs.length > 1;
class DiamondInit__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
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
exports.DiamondInit__factory = DiamondInit__factory;
DiamondInit__factory.bytecode = _bytecode;
DiamondInit__factory.abi = _abi;
//# sourceMappingURL=DiamondInit__factory.js.map