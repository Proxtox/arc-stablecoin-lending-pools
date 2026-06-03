"use client";

import { useState } from 'react';

export default function LendingDashboard() {
  const [depositAmount, setDepositAmount] = useState('');
  const [borrowAmount, setBorrowAmount] = useState('');

  const handleDeposit = () => alert(`Depositing ${depositAmount} (demo)`);
  const handleBorrow = () => alert(`Borrowing ${borrowAmount} (demo)`);

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6">
      <h1 className="text-3xl font-bold mb-6">Arc Stablecoin Lending</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Deposit */}
        <div className="border p-6 rounded-xl">
          <h2 className="font-semibold mb-4">Deposit</h2>
          <input
            type="text"
            placeholder="Amount"
            value={depositAmount}
            onChange={(e) => setDepositAmount(e.target.value)}
            className="w-full p-3 border rounded mb-3"
          />
          <button onClick={handleDeposit} className="w-full bg-green-600 text-white py-2 rounded">
            Deposit
          </button>
        </div>

        {/* Borrow */}
        <div className="border p-6 rounded-xl">
          <h2 className="font-semibold mb-4">Borrow</h2>
          <input
            type="text"
            placeholder="Amount"
            value={borrowAmount}
            onChange={(e) => setBorrowAmount(e.target.value)}
            className="w-full p-3 border rounded mb-3"
          />
          <button onClick={handleBorrow} className="w-full bg-blue-600 text-white py-2 rounded">
            Borrow
          </button>
        </div>
      </div>
    </div>
  );
}