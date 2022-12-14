/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  GettersAndDerivers,
  GettersAndDeriversInterface,
} from "../../../contracts/lib/GettersAndDerivers";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "conduitController",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "BadFraction",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "orderIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "considerationIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "shortfallAmount",
        type: "uint256",
      },
    ],
    name: "ConsiderationNotMet",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "EtherTransferGenericFailure",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientEtherSupplied",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidBasicOrderParameterEncoding",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "conduit",
        type: "address",
      },
    ],
    name: "InvalidCallToConduit",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidCanceller",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "conduitKey",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "conduit",
        type: "address",
      },
    ],
    name: "InvalidConduit",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "InvalidMsgValue",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidNativeOfferItem",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidTime",
    type: "error",
  },
  {
    inputs: [],
    name: "MissingOriginalConsiderationItems",
    type: "error",
  },
  {
    inputs: [],
    name: "NoSpecifiedOrdersAvailable",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "orderHash",
        type: "bytes32",
      },
    ],
    name: "OrderAlreadyFilled",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "orderHash",
        type: "bytes32",
      },
    ],
    name: "OrderIsCancelled",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "orderHash",
        type: "bytes32",
      },
    ],
    name: "OrderPartiallyFilled",
    type: "error",
  },
  {
    inputs: [],
    name: "PartialFillsNotEnabledForOrder",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newCounter",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "offerer",
        type: "address",
      },
    ],
    name: "CounterIncremented",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "orderHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "offerer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "zone",
        type: "address",
      },
    ],
    name: "OrderCancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "orderHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "offerer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "zone",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        components: [
          {
            internalType: "enum ItemType",
            name: "itemType",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "identifier",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct SpentItem[]",
        name: "offer",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "enum ItemType",
            name: "itemType",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "identifier",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "address payable",
            name: "recipient",
            type: "address",
          },
        ],
        indexed: false,
        internalType: "struct ReceivedItem[]",
        name: "consideration",
        type: "tuple[]",
      },
    ],
    name: "OrderFulfilled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "orderHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "offerer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "zone",
        type: "address",
      },
    ],
    name: "OrderValidated",
    type: "event",
  },
];

const _bytecode =
  "0x6101c06040523461006a5761001a6100156100c3565b61011e565b604051603a90816106e3823960805181505060a05181505060c05181505060e05181505061010051815050610120518150506101405181505061016051815050610180518150506101a051815050f35b600080fd5b604081019081106001600160401b0382111761008a57604052565b634e487b7160e01b600052604160045260246000fd5b601f909101601f19168101906001600160401b0382119082101761008a57604052565b61071d602081380391826040519384926100dd82856100a0565b83398101031261006a57516001600160a01b038116810361006a5790565b919082604091031261006a576020825192015190565b506040513d6000823e3d90fd5b604060049161012b61026b565b610120526101005260e05260c05260a052608052466101405261014c6101c5565b610160526001600160a01b03166101808190528151630a96ad3960e01b815292839182905afa9081156101b8575b600091610189575b506101a052565b6101aa915060403d81116101b1575b6101a281836100a0565b8101906100fb565b5038610182565b503d610198565b6101c0610111565b61017a565b60c05160805160a0516040519160208301938452604083015260608201524660808201523060a082015260a0815260c0810181811060018060401b0382111761008a5760405251902090565b6040519061021e8261006f565b6003825262312e3160e81b6020830152565b90815180926000905b82821061025457501161024a570190565b6000828201520190565b915080602080928401015181850152018391610239565b6102736106b9565b805160208092012091610284610211565b8281519101209160405181810192816102ae85600a906909ecccccae492e8cada560b31b81520190565b6e1d5a5b9d0e081a5d195b551e5c194b608a1b8152600f016d1859191c995cdcc81d1bdad95b8b60921b8152600e017f75696e74323536206964656e7469666965724f7243726974657269612c0000008152601d017f75696e74323536207374617274416d6f756e742c0000000000000000000000008152601401701d5a5b9d0c8d4d88195b99105b5bdd5b9d607a1b8152601101602960f81b81526001010392601f1993848101845261036290846100a0565b60405171086dedce6d2c8cae4c2e8d2dedc92e8cada560731b8282019081529481601287016e1d5a5b9d0e081a5d195b551e5c194b608a1b8152600f016d1859191c995cdcc81d1bdad95b8b60921b8152600e017f75696e74323536206964656e7469666965724f7243726974657269612c0000008152601d017f75696e74323536207374617274416d6f756e742c0000000000000000000000008152601401711d5a5b9d0c8d4d88195b99105b5bdd5b9d0b60721b8152601201701859191c995cdcc81c9958da5c1a595b9d607a1b8152601101602960f81b815260010103818101835261045190836100a0565b604051928381810161047a906010906f09ee4c8cae486dedae0dedccadce8e6560831b81520190565b6f1859191c995cdcc81bd999995c995c8b60821b81526010016c1859191c995cdcc81e9bdb994b609a1b8152600d017113d999995c925d195b56d7481bd999995c8b60721b81526012017f436f6e73696465726174696f6e4974656d5b5d20636f6e73696465726174696f8152611b8b60f21b60208201526022016f1d5a5b9d0e081bdc99195c951e5c194b60821b8152601001711d5a5b9d0c8d4d881cdd185c9d151a5b594b60721b81526012016f1d5a5b9d0c8d4d88195b99151a5b594b60821b815260100170189e5d195ccccc881e9bdb9952185cda0b607a1b81526011016c1d5a5b9d0c8d4d881cd85b1d0b609a1b8152600d017f6279746573333220636f6e647569744b65792c0000000000000000000000000081526013016e3ab4b73a191a9b1031b7bab73a32b960891b8152600f01602960f81b81526001010382810185526105ca90856100a0565b6040516c08a92a06e626488dedac2d2dc5609b1b8282019081529080600d83016b1cdd1c9a5b99c81b985b594b60a21b8152600c016e1cdd1c9a5b99c81d995c9cda5bdb8b608a1b8152600f016f1d5a5b9d0c8d4d8818da185a5b92590b60821b81526010017f6164647265737320766572696679696e67436f6e7472616374000000000000008152601901602960f81b815260010103848101825261067090826100a0565b51902097865190209683519020956040519384928301958661069191610230565b61069a91610230565b6106a391610230565b0390810182526106b390826100a0565b51902090565b604051906106c68261006f565b600d82526c21b7b739b4b232b930ba34b7b760991b602083015256fe600080fdfea26469706673582212206edf4770737456a3c30b70659b0b947b9b87356fd1a8ac1115ae5f28dbd461ce64736f6c634300080e0033";

type GettersAndDeriversConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GettersAndDeriversConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GettersAndDerivers__factory extends ContractFactory {
  constructor(...args: GettersAndDeriversConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    conduitController: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GettersAndDerivers> {
    return super.deploy(
      conduitController,
      overrides || {}
    ) as Promise<GettersAndDerivers>;
  }
  override getDeployTransaction(
    conduitController: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(conduitController, overrides || {});
  }
  override attach(address: string): GettersAndDerivers {
    return super.attach(address) as GettersAndDerivers;
  }
  override connect(signer: Signer): GettersAndDerivers__factory {
    return super.connect(signer) as GettersAndDerivers__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GettersAndDeriversInterface {
    return new utils.Interface(_abi) as GettersAndDeriversInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GettersAndDerivers {
    return new Contract(address, _abi, signerOrProvider) as GettersAndDerivers;
  }
}
