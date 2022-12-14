/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  InvalidERC721Recipient,
  InvalidERC721RecipientInterface,
} from "../../../../contracts/test/InvalidERC721Recipient.sol/InvalidERC721Recipient";

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
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x6080806040523461001657610150908161001c8239f35b600080fdfe608080604052600436101561001357600080fd5b6000803560e01c63150b7a021461002957600080fd5b346100c85760807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100c8576100606100cf565b506100696100f7565b5060643567ffffffffffffffff8082116100cb57366023830112156100cb5781600401359081116100cb57369101602401116100c857507fabcd0000000000000000000000000000000000000000000000000000000000008152602090f35b80fd5b8280fd5b6004359073ffffffffffffffffffffffffffffffffffffffff821682036100f257565b600080fd5b6024359073ffffffffffffffffffffffffffffffffffffffff821682036100f25756fea2646970667358221220e855b910e86b8634b98398ad5868b2489816a13b8b06e8741ecc5aa18085008364736f6c634300080e0033";

type InvalidERC721RecipientConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: InvalidERC721RecipientConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class InvalidERC721Recipient__factory extends ContractFactory {
  constructor(...args: InvalidERC721RecipientConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<InvalidERC721Recipient> {
    return super.deploy(overrides || {}) as Promise<InvalidERC721Recipient>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): InvalidERC721Recipient {
    return super.attach(address) as InvalidERC721Recipient;
  }
  override connect(signer: Signer): InvalidERC721Recipient__factory {
    return super.connect(signer) as InvalidERC721Recipient__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): InvalidERC721RecipientInterface {
    return new utils.Interface(_abi) as InvalidERC721RecipientInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): InvalidERC721Recipient {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as InvalidERC721Recipient;
  }
}
