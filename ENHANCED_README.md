# arc-stablecoin-lending-pools

Isolated lending pools optimized for stablecoins and tokenized assets on Arc.

## Overview
Educational starter for building efficient, low-volatility lending markets on Circle's Arc L1.

## Tech Stack
- Solidity
- Hardhat / Foundry
- Price oracles (optional)

## Getting Started
```bash
git clone https://github.com/Proxtox/arc-stablecoin-lending-pools.git
cd arc-stablecoin-lending-pools
npm install
```

## Key Files
- `contracts/StablecoinLendingPool.sol` - Core deposit, borrow, repay logic

## Next Steps
- Add interest rate model
- Implement liquidation
- Add collateral support for tokenized assets
- Integrate with CCTP for cross-chain liquidity

## License
MIT