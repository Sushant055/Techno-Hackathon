// require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");
const fs=require("fs")
const privateKey=fs.readFileSync(".secret").toString()
const projectId="e0806d2d545d406f953397b15d01c91f"



module.exports = {
  network:{
    hardhat:{
      chainId: 1337
    },
    mumbai:{
      url:"", 
      accounts:[privateKey]
    },
    mainnet:{
      url:`https://mainnet.infura.io/v3/${projectId}`,
      accounts:[privateKey]
    }
  },
  solidity: "0.8.18",
};
