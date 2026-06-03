const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("StablecoinLendingPool", function () {
  let lendingPool;
  let owner, user1;

  beforeEach(async function () {
    [owner, user1] = await ethers.getSigners();
    const LendingPool = await ethers.getContractFactory("StablecoinLendingPool");
    lendingPool = await LendingPool.deploy();
    await lendingPool.deployed();
  });

  it("Should allow deposits", async function () {
    await lendingPool.connect(user1).deposit(ethers.utils.parseEther("100"));
    expect(await lendingPool.deposits(user1.address)).to.equal(ethers.utils.parseEther("100"));
  });

  it("Should allow borrowing within liquidity", async function () {
    await lendingPool.connect(user1).deposit(ethers.utils.parseEther("100"));
    await lendingPool.connect(user1).borrow(ethers.utils.parseEther("50"));
    expect(await lendingPool.borrows(user1.address)).to.equal(ethers.utils.parseEther("50"));
  });
});