async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const Transactions = await hre.ethers.getContractFactory("transaction");   
  const transactions = await Transactions.deploy();


  await transactions.deployed();

  console.log("Transactions deployed to:", transactions.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
const run = async()=>{
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

run();
