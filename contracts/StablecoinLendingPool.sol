// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/// @title StablecoinLendingPool
/// @notice Basic isolated lending pool optimized for stablecoins on Arc
contract StablecoinLendingPool {
    mapping(address => uint256) public deposits;
    mapping(address => uint256) public borrows;

    uint256 public totalDeposits;
    uint256 public totalBorrows;

    event Deposited(address indexed user, uint256 amount);
    event Borrowed(address indexed user, uint256 amount);
    event Repaid(address indexed user, uint256 amount);

    function deposit(uint256 amount) external {
        deposits[msg.sender] += amount;
        totalDeposits += amount;
        emit Deposited(msg.sender, amount);
    }

    function borrow(uint256 amount) external {
        require(totalDeposits - totalBorrows >= amount, "Insufficient liquidity");
        borrows[msg.sender] += amount;
        totalBorrows += amount;
        emit Borrowed(msg.sender, amount);
    }

    function repay(uint256 amount) external {
        borrows[msg.sender] = borrows[msg.sender] > amount ? borrows[msg.sender] - amount : 0;
        totalBorrows = totalBorrows > amount ? totalBorrows - amount : 0;
        emit Repaid(msg.sender, amount);
    }
}