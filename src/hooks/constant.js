export const trimAddress = (addr) => {
  return `${addr.substring(0, 6)}...${addr.substring(addr.length - 4)}`;
};

// export const Api_Baseurl = "https://launchpad007.herokuapp.com/"
// export const Api_Baseurl = "http://localhost:8080/"

//Launchpad Contract

export const contract = {
  // 7363: {
  //   poolfactory: "0x8698c160fc9EA33fb36619aF39E8B8A0D83A64f4",
  //   poolmanager: "0x896753B2b6693d35b94eC4c2957E56Ee125D2C21",
  //   routeraddress: "0x91A46Fbf7D7a41f296457c937C782113078700b0    ",
  //   multicallAddress: "0x1CF1AFbD46A9bB1e584Da39A9205193169A7A2c7",
  //   lockAddress: "0xc02fcBa8Dca2A1470027B25B0Ecd895D83316A4E",
  //   routername: "Truiumswap",
  // },
  7364: {
    poolfactory: "0x35e67149924F6983759685755dDc04B90f39D15e",
    poolmanager: "0xB7c13e7c799Be8b913d1f7eFd0091535eB8F82AD",
    routeraddress: "0xaBC2a8378cc089081102DDA9746b6D0a3Cb61BFB",
    multicallAddress: "0x43FB9DcFdc5B8DE0c710b105528ebdA9D9314529",
    lockAddress: "0xaaFc5Ed6e803bFd58518cB0D516A0CafcAC22074",
    routername: "Truiumswap",
  },
  default: {
    poolfactory: "0x35e67149924F6983759685755dDc04B90f39D15e",
    poolmanager: "0xB7c13e7c799Be8b913d1f7eFd0091535eB8F82AD",
    routeraddress: "0xaBC2a8378cc089081102DDA9746b6D0a3Cb61BFB",
    multicallAddress: "0x43FB9DcFdc5B8DE0c710b105528ebdA9D9314529",
    lockAddress: "0xaaFc5Ed6e803bFd58518cB0D516A0CafcAC22074",
    routername: "Truiumswap",
  },
};
