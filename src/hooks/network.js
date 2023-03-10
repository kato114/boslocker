import ethCoin from "../images/ethereum.png";

export const supportNetwork = {
  1: {
    name: "Etherem",
    chainId: 1,
    rpc: "https://mainnet.infura.io/v3/b870be2fc3f141a28946b03b10cefee8",
    image: ethCoin,
    symbol: "Etherem",
  },
  5: {
    name: "Goerli Testnet",
    chainId: 5,
    rpc: "https://eth-goerli.g.alchemy.com/v2/5N02vS8nblN4kMJBLwV4N_gU7ZtSUL7O",
    image: ethCoin,
    symbol: "Goerli Testnet",
  },
  default: {
    name: "Etherem",
    chainId: 1,
    rpc: "https://mainnet.infura.io/v3/b870be2fc3f141a28946b03b10cefee8",
    image: ethCoin,
    symbol: "Etherem",
  },
};

export const RPC_URLS = {
  1: "https://mainnet.infura.io/v3/b870be2fc3f141a28946b03b10cefee8",
  5: "https://eth-goerli.g.alchemy.com/v2/5N02vS8nblN4kMJBLwV4N_gU7ZtSUL7O",
};
