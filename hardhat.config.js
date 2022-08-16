require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: __dirname + '/.env' });


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.6",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: process.env.ALCHEMY_API_KEY_URL,
      accounts: [process.env.ACCOUNT_PRIVATE_KEY],
      gas: 2100000,
      gasPrice: 8000000000,
    },
  },
};
