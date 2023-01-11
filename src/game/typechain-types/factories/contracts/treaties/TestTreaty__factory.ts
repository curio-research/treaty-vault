/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TestTreaty,
  TestTreatyInterface,
} from "../../../contracts/treaties/TestTreaty";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_diamond",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "contract AdminFacet",
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
        name: "_nationID",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_encodedParams",
        type: "bytes",
      },
    ],
    name: "approveBattle",
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
        name: "_nationID",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_encodedParams",
        type: "bytes",
      },
    ],
    name: "approveClaimTile",
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
        name: "_nationID",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_encodedParams",
        type: "bytes",
      },
    ],
    name: "approveDelegateGameFunction",
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
        name: "_nationID",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_encodedParams",
        type: "bytes",
      },
    ],
    name: "approveDeployTreaty",
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
        name: "_nationID",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_encodedParams",
        type: "bytes",
      },
    ],
    name: "approveDisbandArmy",
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
        name: "_nationID",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_encodedParams",
        type: "bytes",
      },
    ],
    name: "approveDisownTile",
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
        name: "_nationID",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_encodedParams",
        type: "bytes",
      },
    ],
    name: "approveEndGather",
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
        name: "_nationID",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_encodedParams",
        type: "bytes",
      },
    ],
    name: "approveEndTroopProduction",
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
        name: "_nationID",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_encodedParams",
        type: "bytes",
      },
    ],
    name: "approveHarvestResource",
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
        name: "_nationID",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_encodedParams",
        type: "bytes",
      },
    ],
    name: "approveHarvestResourcesFromCapital",
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
        name: "_nationID",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_encodedParams",
        type: "bytes",
      },
    ],
    name: "approveJoinTreaty",
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
        name: "_nationID",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_encodedParams",
        type: "bytes",
      },
    ],
    name: "approveLeaveTreaty",
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
        name: "_nationID",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_encodedParams",
        type: "bytes",
      },
    ],
    name: "approveMove",
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
        name: "_nationID",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_encodedParams",
        type: "bytes",
      },
    ],
    name: "approveMoveCapital",
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
        name: "_nationID",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_encodedParams",
        type: "bytes",
      },
    ],
    name: "approveOrganizeArmy",
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
        name: "_nationID",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_encodedParams",
        type: "bytes",
      },
    ],
    name: "approveRecoverTile",
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
        name: "_nationID",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_encodedParams",
        type: "bytes",
      },
    ],
    name: "approveStartGather",
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
        name: "_nationID",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_encodedParams",
        type: "bytes",
      },
    ],
    name: "approveStartTroopProduction",
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
        name: "_nationID",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_encodedParams",
        type: "bytes",
      },
    ],
    name: "approveTransfer",
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
        name: "_nationID",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_encodedParams",
        type: "bytes",
      },
    ],
    name: "approveUnloadResources",
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
        name: "_nationID",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_encodedParams",
        type: "bytes",
      },
    ],
    name: "approveUpgradeCapital",
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
        name: "_nationID",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_encodedParams",
        type: "bytes",
      },
    ],
    name: "approveUpgradeResource",
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
        name: "_nationID",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_encodedParams",
        type: "bytes",
      },
    ],
    name: "approveUpgradeTile",
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
    inputs: [],
    name: "description",
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
    inputs: [],
    name: "diamond",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "game",
    outputs: [
      {
        internalType: "contract GameFacet",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getter",
    outputs: [
      {
        internalType: "contract GetterFacet",
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
        name: "_nationID",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_duration",
        type: "uint256",
      },
    ],
    name: "minimumStayCheck",
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
    inputs: [],
    name: "name",
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
    inputs: [],
    name: "ownerID",
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
    inputs: [],
    name: "registerTreatyAndOwnerIds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_functionName",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_subjectID",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_canCall",
        type: "bool",
      },
    ],
    name: "treatyDelegateGameFunction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "treatyID",
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
    inputs: [],
    name: "treatyJoin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "treatyLeave",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_capitalID",
        type: "uint256",
      },
    ],
    name: "treatyUpgradeCapital",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001959380380620019598339810160408190526200003491620001fa565b806001600160a01b0381166200009e5760405162461bcd60e51b815260206004820152602560248201527f437572696f5472656174793a204469616d6f6e642061646472657373207265716044820152641d5a5c995960da1b606482015260840160405180910390fd5b600080546001600160a01b039092166001600160a01b0319928316811790915560018054831682179055600280548316821790556003805490921617905560408051808201909152600b8082526a546573742054726561747960a81b6020909201918252620001109160049162000154565b506040805180820190915260128082527154726561747920666f722074657374696e6760701b60209092019182526200014c9160059162000154565b505062000268565b82805462000162906200022c565b90600052602060002090601f016020900481019282620001865760008555620001d1565b82601f10620001a157805160ff1916838001178555620001d1565b82800160010185558215620001d1579182015b82811115620001d1578251825591602001919060010190620001b4565b50620001df929150620001e3565b5090565b5b80821115620001df5760008155600101620001e4565b6000602082840312156200020d57600080fd5b81516001600160a01b03811681146200022557600080fd5b9392505050565b600181811c908216806200024157607f821691505b6020821081036200026257634e487b7160e01b600052602260045260246000fd5b50919050565b6116e180620002786000396000f3fe608060405234801561001057600080fd5b50600436106102765760003560e01c80636a2a2b4e11610160578063cbb34e86116100d8578063ec19ae801161008c578063f2e1730b11610071578063f2e1730b1461027b578063f851a44014610397578063fa91f75e1461027b57600080fd5b8063ec19ae801461027b578063f0b7db4e1461038457600080fd5b8063d924100e116100bd578063d924100e1461037b578063e534ae5f1461027b578063e75991fa1461027b57600080fd5b8063cbb34e861461027b578063d553ed481461027b57600080fd5b80639bcecd0b1161012f578063b250ede511610114578063b250ede514610360578063c009a6cb1461027b578063c3fe3e281461036857600080fd5b80639bcecd0b1461027b578063a83280bc1461027b57600080fd5b80636a2a2b4e1461027b5780636a333c39146103165780637284e4161461032d578063993a04b71461033557600080fd5b80632d47fe27116101f35780634142a8a1116101c25780634ad30a91116101a75780634ad30a911461027b5780635f310b121461027b57806360acfcc61461030357600080fd5b80634142a8a1146102e857806347b958a6146102fb57600080fd5b80632d47fe271461027b5780632efd6629146102d5578063374155161461027b57806339ebfad41461027b57600080fd5b80631e15495c1161024a57806328f59b831161022f57806328f59b83146102b85780632b451c641461027b5780632b9b15ad146102c257600080fd5b80631e15495c1461027b578063243086c41461027b57600080fd5b8062048f5a1461027b57806304dc7c741461027b57806306fdde03146102a35780631c3571731461027b575b600080fd5b61028e6102893660046113bd565b6103aa565b60405190151581526020015b60405180910390f35b6102ab610414565b60405161029a9190611474565b6102c06104a2565b005b61028e6102d036600461148e565b6104ed565b6102c06102e33660046114b0565b610721565b6102c06102f6366004611524565b610816565b6102c0610f05565b61028e6103113660046113bd565b610f4f565b61031f60065481565b60405190815260200161029a565b6102ab610f8c565b600254610348906001600160a01b031681565b6040516001600160a01b03909116815260200161029a565b6102c0610f99565b600154610348906001600160a01b031681565b61031f60075481565b600054610348906001600160a01b031681565b600354610348906001600160a01b031681565b600080546001600160a01b0316331461040a5760405162461bcd60e51b815260206004820152601f60248201527f437572696f5472656174793a204f6e6c792067616d652063616e2063616c6c0060448201526064015b60405180910390fd5b5060015b92915050565b600480546104219061153d565b80601f016020809104026020016040519081016040528092919081815260200182805461044d9061153d565b801561049a5780601f1061046f5761010080835404028352916020019161049a565b820191906000526020600020905b81548152906001019060200180831161047d57829003601f168201915b505050505081565b6104e36040518060400160405280601481526020017f44656c656761746547616d6546756e6374696f6e000000000000000000000000815250600080610721565b6104eb61112e565b565b60025460405163b356003960e01b815230600482015260009182916001600160a01b039091169063b356003990602401602060405180830381865afa15801561053a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061055e9190611577565b6002546040516384d969bd60e01b815260206004820152600d60248201527f496e697454696d657374616d700000000000000000000000000000000000000060448201529192506000916001600160a01b03909116906384d969bd90606401602060405180830381865afa1580156105da573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105fe9190611590565b6002546040517f688513b200000000000000000000000000000000000000000000000000000000815260048101889052602481018590526001600160a01b0392831692634c518fdc92169063688513b290604401602060405180830381865afa15801561066f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106939190611577565b6040518263ffffffff1660e01b81526004016106b191815260200190565b600060405180830381865afa1580156106ce573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526106f691908101906115b9565b8060200190518101906107099190611577565b90506107158482611630565b42101595945050505050565b60025460405163b356003960e01b81523360048201526000916001600160a01b03169063b356003990602401602060405180830381865afa15801561076a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061078e9190611577565b6003546040517f66e39e790000000000000000000000000000000000000000000000000000000081529192506001600160a01b0316906366e39e79906107de908490889088908890600401611656565b600060405180830381600087803b1580156107f857600080fd5b505af115801561080c573d6000803e3d6000fd5b5050505050505050565b60025460405163b356003960e01b81523360048201526001600160a01b039091169063688513b290829063b356003990602401602060405180830381865afa158015610866573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061088a9190611577565b60025460405163b356003960e01b81523060048201526001600160a01b039091169063b356003990602401602060405180830381865afa1580156108d2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108f69190611577565b6040516001600160e01b031960e085901b16815260048101929092526024820152604401602060405180830381865afa158015610937573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061095b9190611577565b6000036109d05760405162461bcd60e51b815260206004820152602160248201527f437572696f5472656174793a204f6e6c79207369676e65722063616e2063616c60448201527f6c000000000000000000000000000000000000000000000000000000000000006064820152608401610401565b60025460405163b356003960e01b81523360048201526000916001600160a01b03169063b356003990602401602060405180830381865afa158015610a19573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a3d9190611577565b60015460025460405163b356003960e01b81523060048201529293506001600160a01b039182169263865ed32a928592169063b356003990602401602060405180830381865afa158015610a95573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ab99190611577565b6040516001600160e01b031960e085901b168152600481019290925260a06024830152600e60a48301527f557067726164654361706974616c00000000000000000000000000000000000060c48301526044820152606481018590526001608482015260e401600060405180830381600087803b158015610b3957600080fd5b505af1158015610b4d573d6000803e3d6000fd5b505060015460025460405163b356003960e01b81523060048201526001600160a01b03928316945063865ed32a935085929091169063b356003990602401602060405180830381865afa158015610ba8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bcc9190611577565b6040516001600160e01b031960e085901b168152600481019290925260a06024830152601b60a48301527f486172766573745265736f757263657346726f6d4361706974616c000000000060c48301526044820152606481018590526001608482015260e401600060405180830381600087803b158015610c4c57600080fd5b505af1158015610c60573d6000803e3d6000fd5b50506001546040517f32eebf76000000000000000000000000000000000000000000000000000000008152600481018690526001600160a01b0390911692506332eebf769150602401600060405180830381600087803b158015610cc357600080fd5b505af1158015610cd7573d6000803e3d6000fd5b505060015460025460405163b356003960e01b81523060048201526001600160a01b03928316945063865ed32a935085929091169063b356003990602401602060405180830381865afa158015610d32573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d569190611577565b6040516001600160e01b031960e085901b168152600481019290925260a06024830152600e60a48301527f557067726164654361706974616c00000000000000000000000000000000000060c48301526044820152606481018590526000608482015260e401600060405180830381600087803b158015610dd657600080fd5b505af1158015610dea573d6000803e3d6000fd5b505060015460025460405163b356003960e01b81523060048201526001600160a01b03928316945063865ed32a935085929091169063b356003990602401602060405180830381865afa158015610e45573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e699190611577565b6040516001600160e01b031960e085901b168152600481019290925260a06024830152601b60a48301527f486172766573745265736f757263657346726f6d4361706974616c000000000060c48301526044820152606481018590526000608482015260e401600060405180830381600087803b158015610ee957600080fd5b505af1158015610efd573d6000803e3d6000fd5b505050505050565b610f476040518060400160405280601481526020017f44656c656761746547616d6546756e6374696f6e00000000000000000000000081525060006001610721565b6104eb611216565b60008082806020019051810190610f669190611687565b509050808403610f7a57600091505061040e565b610f8484846103aa565b949350505050565b600580546104219061153d565b60025460405163b356003960e01b81523060048201526001600160a01b039091169063b356003990602401602060405180830381865afa158015610fe1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110059190611577565b6006556002546040516384d969bd60e01b815260206004820152600560248201527f4f776e657200000000000000000000000000000000000000000000000000000060448201526001600160a01b03909116906384d969bd90606401602060405180830381865afa15801561107e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110a29190611590565b6001600160a01b0316634c518fdc6006546040518263ffffffff1660e01b81526004016110d191815260200190565b600060405180830381865afa1580156110ee573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261111691908101906115b9565b8060200190518101906111299190611577565b600755565b60025460405163b356003960e01b81523360048201526000916001600160a01b03169063b356003990602401602060405180830381865afa158015611177573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061119b9190611577565b6003546040517f5ffde144000000000000000000000000000000000000000000000000000000008152600481018390529192506001600160a01b031690635ffde14490602401600060405180830381600087803b1580156111fb57600080fd5b505af115801561120f573d6000803e3d6000fd5b5050505050565b60025460405163b356003960e01b81523360048201526000916001600160a01b03169063b356003990602401602060405180830381865afa15801561125f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112839190611577565b6003546040517fff2a5e79000000000000000000000000000000000000000000000000000000008152600481018390529192506001600160a01b03169063ff2a5e79906024016020604051808303816000875af11580156112e8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061130c9190611577565b5050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561134f5761134f611310565b604052919050565b600067ffffffffffffffff82111561137157611371611310565b50601f01601f191660200190565b600061139261138d84611357565b611326565b90508281528383830111156113a657600080fd5b828260208301376000602084830101529392505050565b600080604083850312156113d057600080fd5b82359150602083013567ffffffffffffffff8111156113ee57600080fd5b8301601f810185136113ff57600080fd5b61140e8582356020840161137f565b9150509250929050565b60005b8381101561143357818101518382015260200161141b565b83811115611442576000848401525b50505050565b60008151808452611460816020860160208601611418565b601f01601f19169290920160200192915050565b6020815260006114876020830184611448565b9392505050565b600080604083850312156114a157600080fd5b50508035926020909101359150565b6000806000606084860312156114c557600080fd5b833567ffffffffffffffff8111156114dc57600080fd5b8401601f810186136114ed57600080fd5b6114fc8682356020840161137f565b935050602084013591506040840135801515811461151957600080fd5b809150509250925092565b60006020828403121561153657600080fd5b5035919050565b600181811c9082168061155157607f821691505b60208210810361157157634e487b7160e01b600052602260045260246000fd5b50919050565b60006020828403121561158957600080fd5b5051919050565b6000602082840312156115a257600080fd5b81516001600160a01b038116811461148757600080fd5b6000602082840312156115cb57600080fd5b815167ffffffffffffffff8111156115e257600080fd5b8201601f810184136115f357600080fd5b805161160161138d82611357565b81815285602083850101111561161657600080fd5b611627826020830160208601611418565b95945050505050565b6000821982111561165157634e487b7160e01b600052601160045260246000fd5b500190565b84815260806020820152600061166f6080830186611448565b60408301949094525090151560609091015292915050565b6000806040838503121561169a57600080fd5b50508051602090910151909290915056fea26469706673582212206ffeb32fb07d0db08f315894256acecc97b3a1d75509d05dd6c9cb5e0e89344664736f6c634300080d0033";

type TestTreatyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestTreatyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestTreaty__factory extends ContractFactory {
  constructor(...args: TestTreatyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _diamond: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestTreaty> {
    return super.deploy(_diamond, overrides || {}) as Promise<TestTreaty>;
  }
  override getDeployTransaction(
    _diamond: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_diamond, overrides || {});
  }
  override attach(address: string): TestTreaty {
    return super.attach(address) as TestTreaty;
  }
  override connect(signer: Signer): TestTreaty__factory {
    return super.connect(signer) as TestTreaty__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestTreatyInterface {
    return new utils.Interface(_abi) as TestTreatyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestTreaty {
    return new Contract(address, _abi, signerOrProvider) as TestTreaty;
  }
}
