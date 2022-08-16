// Import ethers from Hardhat package
const { ethers } = require("hardhat");

async function main() {

const web3RSVPContract = await ethers.getContractFactory("Web3RSVP");
  const deployedWeb3RSVPContract = await web3RSVPContract.deploy();
  console.log("RSVP Contract Address:", deployedWeb3RSVPContract.address);

}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
