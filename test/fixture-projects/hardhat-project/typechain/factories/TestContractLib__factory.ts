/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { TestContractLib } from "../TestContractLib";

export class TestContractLib__factory extends ContractFactory {
  constructor(
    linkLibraryAddresses: TestContractLibLibraryAddresses,
    signer?: Signer
  ) {
    super(
      _abi,
      TestContractLib__factory.linkBytecode(linkLibraryAddresses),
      signer
    );
  }

  static linkBytecode(
    linkLibraryAddresses: TestContractLibLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$1aa4b765fd76494370265694b8fdfe4a87\\$__", "g"),
      linkLibraryAddresses["__$1aa4b765fd76494370265694b8fdfe4a87$__"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestContractLib> {
    return super.deploy(overrides || {}) as Promise<TestContractLib>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TestContractLib {
    return super.attach(address) as TestContractLib;
  }
  connect(signer: Signer): TestContractLib__factory {
    return super.connect(signer) as TestContractLib__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestContractLib {
    return new Contract(address, _abi, signerOrProvider) as TestContractLib;
  }
}

const _abi = [
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "printNumber",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061013f806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063652d3c4814610030575b600080fd5b61005c6004803603602081101561004657600080fd5b8101908080359060200190929190505050610072565b6040518082815260200191505060405180910390f35b60008073__$1aa4b765fd76494370265694b8fdfe4a87$__6305b8c7c2846040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b1580156100c457600080fd5b505af41580156100d8573d6000803e3d6000fd5b505050506040513d60208110156100ee57600080fd5b810190808051906020019092919050505090508091505091905056fea265627a7a7231582040518aaaf0ae19783cb9192cc96dea50f49665e488d2c4b64138ac331e33920f64736f6c634300050f0032";

export interface TestContractLibLibraryAddresses {
  ["__$1aa4b765fd76494370265694b8fdfe4a87$__"]: string;
}
