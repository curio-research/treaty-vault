/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ERC721TokenReceiver,
  ERC721TokenReceiverInterface,
} from "../../../../../../lib/solmate/src/tokens/ERC721.sol/ERC721TokenReceiver";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class ERC721TokenReceiver__factory {
  static readonly abi = _abi;
  static createInterface(): ERC721TokenReceiverInterface {
    return new utils.Interface(_abi) as ERC721TokenReceiverInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721TokenReceiver {
    return new Contract(address, _abi, signerOrProvider) as ERC721TokenReceiver;
  }
}
