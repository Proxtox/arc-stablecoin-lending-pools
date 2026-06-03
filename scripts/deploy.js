const hre = require("hardhat");

async function main() {
  const LendingPool = await hre.ethers.getContractFactory("StablecoinLendingPool");
  const pool = await LendingPool.deploy();
  await pool.deployed();
  console.log("StablecoinLendingPool deployed to:", pool.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});