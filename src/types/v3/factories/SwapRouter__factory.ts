/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SwapRouter, SwapRouterInterface } from "../SwapRouter";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_factory",
        type: "address",
      },
      {
        internalType: "address",
        name: "_WETH9",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "WETH9",
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
    inputs: [
      {
        components: [
          {
            internalType: "bytes",
            name: "path",
            type: "bytes",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountIn",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountOutMinimum",
            type: "uint256",
          },
        ],
        internalType: "struct ISwapRouter.ExactInputParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "exactInput",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "tokenIn",
            type: "address",
          },
          {
            internalType: "address",
            name: "tokenOut",
            type: "address",
          },
          {
            internalType: "uint24",
            name: "fee",
            type: "uint24",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountIn",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountOutMinimum",
            type: "uint256",
          },
          {
            internalType: "uint160",
            name: "sqrtPriceLimitX96",
            type: "uint160",
          },
        ],
        internalType: "struct ISwapRouter.ExactInputSingleParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "exactInputSingle",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes",
            name: "path",
            type: "bytes",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountOut",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountInMaximum",
            type: "uint256",
          },
        ],
        internalType: "struct ISwapRouter.ExactOutputParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "exactOutput",
    outputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "tokenIn",
            type: "address",
          },
          {
            internalType: "address",
            name: "tokenOut",
            type: "address",
          },
          {
            internalType: "uint24",
            name: "fee",
            type: "uint24",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountOut",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountInMaximum",
            type: "uint256",
          },
          {
            internalType: "uint160",
            name: "sqrtPriceLimitX96",
            type: "uint160",
          },
        ],
        internalType: "struct ISwapRouter.ExactOutputSingleParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "exactOutputSingle",
    outputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
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
    inputs: [
      {
        internalType: "bytes[]",
        name: "data",
        type: "bytes[]",
      },
    ],
    name: "multicall",
    outputs: [
      {
        internalType: "bytes[]",
        name: "results",
        type: "bytes[]",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "amount0Delta",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "amount1Delta",
        type: "int256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "pegasysV3SwapCallback",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "refundETH",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "selfPermit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "selfPermitAllowed",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "selfPermitAllowedIfNecessary",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "selfPermitIfNecessary",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountMinimum",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "sweepToken",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountMinimum",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "feeBips",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "feeRecipient",
        type: "address",
      },
    ],
    name: "sweepTokenWithFee",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountMinimum",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "unwrapWETH9",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountMinimum",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "feeBips",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "feeRecipient",
        type: "address",
      },
    ],
    name: "unwrapWETH9WithFee",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60c06040526000196000553480156200001757600080fd5b506040516200302f3803806200302f8339810160408190526200003a9162000076565b6001600160601b0319606092831b8116608052911b1660a052620000ad565b80516001600160a01b03811681146200007157600080fd5b919050565b6000806040838503121562000089578182fd5b620000948362000059565b9150620000a46020840162000059565b90509250929050565b60805160601c60a05160601c612f26620001096000398061012f528061058352806106ad5280610747528061078752806108b1528061186252806118c25280611943525080610a9b5280610f0d5280611e265250612f266000f3fe6080604052600436106101125760003560e01c8063ac9650d8116100a5578063db3e219811610074578063e0e189a011610059578063e0e189a014610302578063f28c049814610315578063f3995c6714610328576101bd565b8063db3e2198146102dc578063df2ab5bb146102ef576101bd565b8063ac9650d814610281578063c04b8d59146102a1578063c2e3140a146102b4578063c45a0155146102c7576101bd565b80634aa4a4fc116100e15780634aa4a4fc146102195780639b2c0a371461023b578063a4a78f0c1461024e578063a807071014610261576101bd565b806312210e8a146101c2578063414bf389146101ca5780634659a494146101f357806349404b7c14610206576101bd565b366101bd573373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016146101bb57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f4e6f742057455448390000000000000000000000000000000000000000000000604482015290519081900360640190fd5b005b600080fd5b6101bb61033b565b6101dd6101d83660046129f8565b61034d565b6040516101ea9190612df1565b60405180910390f35b6101bb610201366004612776565b6104bf565b6101bb610214366004612aff565b61057f565b34801561022557600080fd5b5061022e610745565b6040516101ea9190612c37565b6101bb610249366004612b2e565b610769565b6101bb61025c366004612776565b610981565b34801561026d57600080fd5b506101bb61027c366004612868565b610a56565b61029461028f3660046127d6565b610b9d565b6040516101ea9190612caa565b6101dd6102af36600461294d565b610cf7565b6101bb6102c2366004612776565b610e56565b3480156102d357600080fd5b5061022e610f0b565b6101dd6102ea3660046129f8565b610f2f565b6101bb6102fd3660046126d7565b6110bf565b6101bb610310366004612718565b6111dc565b6101dd610323366004612a14565b611342565b6101bb610336366004612776565b611476565b471561034b5761034b334761150e565b565b600081608001358061035d61165c565b11156103ca57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f5472616e73616374696f6e20746f6f206f6c6400000000000000000000000000604482015290519081900360640190fd5b61047060a08401356103e260808601606087016126b4565b6103f3610100870160e088016126b4565b604080518082019091528061040b60208a018a6126b4565b61041b60608b0160408c01612adc565b61042b60408c0160208d016126b4565b60405160200161043d93929190612bc1565b60405160208183030381529060405281526020013373ffffffffffffffffffffffffffffffffffffffff16815250611660565b91508260c001358210156104b9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104b090612d72565b60405180910390fd5b50919050565b604080517f8fcbaf0c00000000000000000000000000000000000000000000000000000000815233600482015230602482015260448101879052606481018690526001608482015260ff851660a482015260c4810184905260e48101839052905173ffffffffffffffffffffffffffffffffffffffff881691638fcbaf0c9161010480830192600092919082900301818387803b15801561055f57600080fd5b505af1158015610573573d6000803e3d6000fd5b50505050505050505050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561060857600080fd5b505afa15801561061c573d6000803e3d6000fd5b505050506040513d602081101561063257600080fd5b50519050828110156106a557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f496e73756666696369656e742057455448390000000000000000000000000000604482015290519081900360640190fd5b8015610740577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632e1a7d4d826040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b15801561071e57600080fd5b505af1158015610732573d6000803e3d6000fd5b50505050610740828261150e565b505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60008211801561077a575060648211155b61078357600080fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561080c57600080fd5b505afa158015610820573d6000803e3d6000fd5b505050506040513d602081101561083657600080fd5b50519050848110156108a957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f496e73756666696369656e742057455448390000000000000000000000000000604482015290519081900360640190fd5b801561097a577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632e1a7d4d826040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b15801561092257600080fd5b505af1158015610936573d6000803e3d6000fd5b50505050600061271061095285846117e690919063ffffffff16565b8161095957fe5b049050801561096c5761096c838261150e565b6109788582840361150e565b505b5050505050565b604080517fdd62ed3e00000000000000000000000000000000000000000000000000000000815233600482015230602482015290517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9173ffffffffffffffffffffffffffffffffffffffff89169163dd62ed3e91604480820192602092909190829003018186803b158015610a1657600080fd5b505afa158015610a2a573d6000803e3d6000fd5b505050506040513d6020811015610a4057600080fd5b50511015610978576109788686868686866104bf565b6000841380610a655750600083135b610a6e57600080fd5b6000610a7c82840184612a4c565b90506000806000610a908460000151611810565b925092509250610ac27f0000000000000000000000000000000000000000000000000000000000000000848484611841565b5060008060008a13610b03578473ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161089610b34565b8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16108a5b915091508115610b5357610b4e8587602001513384611860565b610573565b8551610b5e90611a3e565b15610b83578551610b6e90611a4a565b8652610b7d8133600089611a7f565b50610573565b806000819055508394506105738587602001513384611860565b60608167ffffffffffffffff81118015610bb657600080fd5b50604051908082528060200260200182016040528015610bea57816020015b6060815260200190600190039081610bd55790505b50905060005b82811015610cf05760008030868685818110610c0857fe5b9050602002810190610c1a9190612dfa565b604051610c28929190612c27565b600060405180830381855af49150503d8060008114610c63576040519150601f19603f3d011682016040523d82523d6000602084013e610c68565b606091505b509150915081610cce57604481511015610c8157600080fd5b60048101905080806020019051810190610c9b91906128e3565b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104b09190612d28565b80848481518110610cdb57fe5b60209081029190910101525050600101610bf0565b5092915050565b6000816040015180610d0761165c565b1115610d7457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f5472616e73616374696f6e20746f6f206f6c6400000000000000000000000000604482015290519081900360640190fd5b335b6000610d858560000151611a3e565b9050610dde856060015182610d9e578660200151610da0565b305b60006040518060400160405280610dba8b60000151611c3b565b81526020018773ffffffffffffffffffffffffffffffffffffffff16815250611660565b60608601528015610dfe578451309250610df790611a4a565b8552610e0b565b8460600151935050610e11565b50610d76565b8360800151831015610e4f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104b090612d72565b5050919050565b604080517fdd62ed3e0000000000000000000000000000000000000000000000000000000081523360048201523060248201529051869173ffffffffffffffffffffffffffffffffffffffff89169163dd62ed3e91604480820192602092909190829003018186803b158015610ecb57600080fd5b505afa158015610edf573d6000803e3d6000fd5b505050506040513d6020811015610ef557600080fd5b5051101561097857610978868686868686611476565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000816080013580610f3f61165c565b1115610fac57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f5472616e73616374696f6e20746f6f206f6c6400000000000000000000000000604482015290519081900360640190fd5b61105560a0840135610fc460808601606087016126b4565b610fd5610100870160e088016126b4565b6040518060400160405280886020016020810190610ff391906126b4565b61100360608b0160408c01612adc565b61101060208c018c6126b4565b60405160200161102293929190612bc1565b60405160208183030381529060405281526020013373ffffffffffffffffffffffffffffffffffffffff16815250611a7f565b91508260c00135821115611095576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104b090612d3b565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600055919050565b60008373ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561112857600080fd5b505afa15801561113c573d6000803e3d6000fd5b505050506040513d602081101561115257600080fd5b50519050828110156111c557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f496e73756666696369656e7420746f6b656e0000000000000000000000000000604482015290519081900360640190fd5b80156111d6576111d6848383611c4a565b50505050565b6000821180156111ed575060648211155b6111f657600080fd5b60008573ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561125f57600080fd5b505afa158015611273573d6000803e3d6000fd5b505050506040513d602081101561128957600080fd5b50519050848110156112fc57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f496e73756666696369656e7420746f6b656e0000000000000000000000000000604482015290519081900360640190fd5b801561097857600061271061131183866117e6565b8161131857fe5b049050801561132c5761132c878483611c4a565b6113398786838503611c4a565b50505050505050565b600081604001358061135261165c565b11156113bf57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f5472616e73616374696f6e20746f6f206f6c6400000000000000000000000000604482015290519081900360640190fd5b61143260608401356113d760408601602087016126b4565b60408051808201909152600090806113ef8980612dfa565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050509082525033602090910152611a7f565b5060005491508260800135821115611095576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104b090612d3b565b604080517fd505accf000000000000000000000000000000000000000000000000000000008152336004820152306024820152604481018790526064810186905260ff8516608482015260a4810184905260c48101839052905173ffffffffffffffffffffffffffffffffffffffff88169163d505accf9160e480830192600092919082900301818387803b15801561055f57600080fd5b6040805160008082526020820190925273ffffffffffffffffffffffffffffffffffffffff84169083906040518082805190602001908083835b6020831061158557805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101611548565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d80600081146115e7576040519150601f19603f3d011682016040523d82523d6000602084013e6115ec565b606091505b505090508061074057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600360248201527f5354450000000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b4290565b600073ffffffffffffffffffffffffffffffffffffffff8416611681573093505b60008060006116938560000151611810565b9194509250905073ffffffffffffffffffffffffffffffffffffffff808316908416106000806116c4868686611e1f565b73ffffffffffffffffffffffffffffffffffffffff1663128acb088b856116ea8f611e5d565b73ffffffffffffffffffffffffffffffffffffffff8e161561170c578d611732565b8761172b5773fffd8963efd1fc6a506488495d951d5263988d25611732565b6401000276a45b8d6040516020016117439190612da9565b6040516020818303038152906040526040518663ffffffff1660e01b8152600401611772959493929190612c58565b6040805180830381600087803b15801561178b57600080fd5b505af115801561179f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117c39190612845565b91509150826117d257816117d4565b805b6000039b9a5050505050505050505050565b6000821580611801575050818102818382816117fe57fe5b04145b61180a57600080fd5b92915050565b6000808061181e8482611e8f565b925061182b846014611f8f565b9050611838846017611e8f565b91509193909250565b60006118578561185286868661207f565b6120fc565b95945050505050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480156118bb5750804710155b15611a04577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db0826040518263ffffffff1660e01b81526004016000604051808303818588803b15801561192857600080fd5b505af115801561193c573d6000803e3d6000fd5b50505050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb83836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b1580156119d257600080fd5b505af11580156119e6573d6000803e3d6000fd5b505050506040513d60208110156119fc57600080fd5b506111d69050565b73ffffffffffffffffffffffffffffffffffffffff8316301415611a3257611a2d848383611c4a565b6111d6565b6111d68484848461212c565b8051604211155b919050565b805160609061180a9083906017907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe901612309565b600073ffffffffffffffffffffffffffffffffffffffff8416611aa0573093505b6000806000611ab28560000151611810565b9194509250905073ffffffffffffffffffffffffffffffffffffffff80841690831610600080611ae3858786611e1f565b73ffffffffffffffffffffffffffffffffffffffff1663128acb088b85611b098f611e5d565b60000373ffffffffffffffffffffffffffffffffffffffff8e1615611b2e578d611b54565b87611b4d5773fffd8963efd1fc6a506488495d951d5263988d25611b54565b6401000276a45b8d604051602001611b659190612da9565b6040516020818303038152906040526040518663ffffffff1660e01b8152600401611b94959493929190612c58565b6040805180830381600087803b158015611bad57600080fd5b505af1158015611bc1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611be59190612845565b91509150600083611bfa578183600003611c00565b82826000035b909850905073ffffffffffffffffffffffffffffffffffffffff8a16611c2c578b8114611c2c57600080fd5b50505050505050949350505050565b606061180a826000602b612309565b6040805173ffffffffffffffffffffffffffffffffffffffff8481166024830152604480830185905283518084039091018152606490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb000000000000000000000000000000000000000000000000000000001781529251825160009485949389169392918291908083835b60208310611d1f57805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101611ce2565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114611d81576040519150601f19603f3d011682016040523d82523d6000602084013e611d86565b606091505b5091509150818015611db4575080511580611db45750808060200190516020811015611db157600080fd5b50515b61097a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600260248201527f5354000000000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6000611e557f0000000000000000000000000000000000000000000000000000000000000000611e5086868661207f565b6124f0565b949350505050565b60007f80000000000000000000000000000000000000000000000000000000000000008210611e8b57600080fd5b5090565b600081826014011015611f0357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f746f416464726573735f6f766572666c6f770000000000000000000000000000604482015290519081900360640190fd5b8160140183511015611f7657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f746f416464726573735f6f75744f66426f756e64730000000000000000000000604482015290519081900360640190fd5b5001602001516c01000000000000000000000000900490565b60008182600301101561200357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f746f55696e7432345f6f766572666c6f77000000000000000000000000000000604482015290519081900360640190fd5b816003018351101561207657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f746f55696e7432345f6f75744f66426f756e6473000000000000000000000000604482015290519081900360640190fd5b50016003015190565b612087612626565b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1611156120bf579192915b506040805160608101825273ffffffffffffffffffffffffffffffffffffffff948516815292909316602083015262ffffff169181019190915290565b600061210883836124f0565b90503373ffffffffffffffffffffffffffffffffffffffff82161461180a57600080fd5b6040805173ffffffffffffffffffffffffffffffffffffffff85811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd00000000000000000000000000000000000000000000000000000000178152925182516000948594938a169392918291908083835b6020831061220957805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe090920191602091820191016121cc565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d806000811461226b576040519150601f19603f3d011682016040523d82523d6000602084013e612270565b606091505b509150915081801561229e57508051158061229e575080806020019051602081101561229b57600080fd5b50515b61097857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600360248201527f5354460000000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b60608182601f01101561237d57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f736c6963655f6f766572666c6f77000000000000000000000000000000000000604482015290519081900360640190fd5b8282840110156123ee57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f736c6963655f6f766572666c6f77000000000000000000000000000000000000604482015290519081900360640190fd5b8183018451101561246057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f736c6963655f6f75744f66426f756e6473000000000000000000000000000000604482015290519081900360640190fd5b60608215801561247f57604051915060008252602082016040526124e7565b6040519150601f8416801560200281840101858101878315602002848b0101015b818310156124b85780518352602092830192016124a0565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b6000816020015173ffffffffffffffffffffffffffffffffffffffff16826000015173ffffffffffffffffffffffffffffffffffffffff161061253257600080fd5b508051602080830151604093840151845173ffffffffffffffffffffffffffffffffffffffff94851681850152939091168385015262ffffff166060808401919091528351808403820181526080840185528051908301207fff0000000000000000000000000000000000000000000000000000000000000060a085015294901b7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000001660a183015260b58201939093527f4a995152ad4a45ce61f15e514146bc642453130f5c3ef14b85098e9c6266c43d60d5808301919091528251808303909101815260f5909101909152805191012090565b604080516060810182526000808252602082018190529181019190915290565b8035611a4581612ef4565b600082601f830112612661578081fd5b813561267461266f82612e88565b612e64565b818152846020838601011115612688578283fd5b816020850160208301379081016020019190915292915050565b600061010082840312156104b9578081fd5b6000602082840312156126c5578081fd5b81356126d081612ef4565b9392505050565b6000806000606084860312156126eb578182fd5b83356126f681612ef4565b925060208401359150604084013561270d81612ef4565b809150509250925092565b600080600080600060a0868803121561272f578081fd5b853561273a81612ef4565b945060208601359350604086013561275181612ef4565b925060608601359150608086013561276881612ef4565b809150509295509295909350565b60008060008060008060c0878903121561278e578081fd5b863561279981612ef4565b95506020870135945060408701359350606087013560ff811681146127bc578182fd5b9598949750929560808101359460a0909101359350915050565b600080602083850312156127e8578182fd5b823567ffffffffffffffff808211156127ff578384fd5b818501915085601f830112612812578384fd5b813581811115612820578485fd5b8660208083028501011115612833578485fd5b60209290920196919550909350505050565b60008060408385031215612857578182fd5b505080516020909101519092909150565b6000806000806060858703121561287d578182fd5b8435935060208501359250604085013567ffffffffffffffff808211156128a2578384fd5b818701915087601f8301126128b5578384fd5b8135818111156128c3578485fd5b8860208285010111156128d4578485fd5b95989497505060200194505050565b6000602082840312156128f4578081fd5b815167ffffffffffffffff81111561290a578182fd5b8201601f8101841361291a578182fd5b805161292861266f82612e88565b81815285602083850101111561293c578384fd5b611857826020830160208601612ec8565b60006020828403121561295e578081fd5b813567ffffffffffffffff80821115612975578283fd5b9083019060a08286031215612988578283fd5b60405160a08101818110838211171561299d57fe5b6040528235828111156129ae578485fd5b6129ba87828601612651565b8252506129c960208401612646565b602082015260408301356040820152606083013560608201526080830135608082015280935050505092915050565b60006101008284031215612a0a578081fd5b6126d083836126a2565b600060208284031215612a25578081fd5b813567ffffffffffffffff811115612a3b578182fd5b820160a081850312156126d0578182fd5b600060208284031215612a5d578081fd5b813567ffffffffffffffff80821115612a74578283fd5b9083019060408286031215612a87578283fd5b604051604081018181108382111715612a9c57fe5b604052823582811115612aad578485fd5b612ab987828601612651565b82525060208301359250612acc83612ef4565b6020810192909252509392505050565b600060208284031215612aed578081fd5b813562ffffff811681146126d0578182fd5b60008060408385031215612b11578182fd5b823591506020830135612b2381612ef4565b809150509250929050565b60008060008060808587031215612b43578182fd5b843593506020850135612b5581612ef4565b9250604085013591506060850135612b6c81612ef4565b939692955090935050565b60008151808452612b8f816020860160208601612ec8565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b606093841b7fffffffffffffffffffffffffffffffffffffffff000000000000000000000000908116825260e89390931b7fffffff0000000000000000000000000000000000000000000000000000000000166014820152921b166017820152602b0190565b6000828483379101908152919050565b73ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b600073ffffffffffffffffffffffffffffffffffffffff8088168352861515602084015285604084015280851660608401525060a06080830152612c9f60a0830184612b77565b979650505050505050565b6000602080830181845280855180835260408601915060408482028701019250838701855b82811015612d1b577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc0888603018452612d09858351612b77565b94509285019290850190600101612ccf565b5092979650505050505050565b6000602082526126d06020830184612b77565b60208082526012908201527f546f6f206d756368207265717565737465640000000000000000000000000000604082015260600190565b60208082526013908201527f546f6f206c6974746c6520726563656976656400000000000000000000000000604082015260600190565b600060208252825160406020840152612dc56060840182612b77565b905073ffffffffffffffffffffffffffffffffffffffff60208501511660408401528091505092915050565b90815260200190565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612e2e578283fd5b83018035915067ffffffffffffffff821115612e48578283fd5b602001915036819003821315612e5d57600080fd5b9250929050565b60405181810167ffffffffffffffff81118282101715612e8057fe5b604052919050565b600067ffffffffffffffff821115612e9c57fe5b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b60005b83811015612ee3578181015183820152602001612ecb565b838111156111d65750506000910152565b73ffffffffffffffffffffffffffffffffffffffff81168114612f1657600080fd5b5056fea164736f6c6343000706000a";

export class SwapRouter__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _factory: string,
    _WETH9: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SwapRouter> {
    return super.deploy(
      _factory,
      _WETH9,
      overrides || {}
    ) as Promise<SwapRouter>;
  }
  getDeployTransaction(
    _factory: string,
    _WETH9: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_factory, _WETH9, overrides || {});
  }
  attach(address: string): SwapRouter {
    return super.attach(address) as SwapRouter;
  }
  connect(signer: Signer): SwapRouter__factory {
    return super.connect(signer) as SwapRouter__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SwapRouterInterface {
    return new utils.Interface(_abi) as SwapRouterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SwapRouter {
    return new Contract(address, _abi, signerOrProvider) as SwapRouter;
  }
}