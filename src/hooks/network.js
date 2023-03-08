// import binanceCoin from '../images/binance-coin.png';
import dyno from "../images/dyno.png";
import binanceCoin from "../images/binance-coin.png";

export const supportNetwork = {
  // 7363: {
  //   name: "DYNO",
  //   chainId: 7363,
  //   rpc: "https://rpc.dynochain.io/",
  //   image: dyno,
  //   symbol: "DND",
  // },
  7364: {
    name: "TDYNO",
    chainId: 7364,
    rpc: "https://rpctest.dynochain.io/",
    image: dyno,
    symbol: "TDND",
  },
  default: {
    name: "TDYNO",
    chainId: 7364,
    rpc: "https://rpctest.dynochain.io/",
    image: dyno,
    symbol: "TDND",
  },
};

export const RPC_URLS = {
  7363: "https://rpc.dynochain.io/",
  7364: "https://rpctest.dynochain.io/",
};
