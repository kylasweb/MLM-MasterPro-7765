import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiDollarSign, FiRefreshCcw, FiArrowUp, FiArrowDown } from 'react-icons/fi';

const TokenManagement = () => {
  const [showBuyModal, setShowBuyModal] = useState(false);
  
  const tokenInfo = {
    price: 0.45,
    balance: 10000,
    value: 4500,
    transactions: [
      {
        id: 1,
        type: 'buy',
        amount: 1000,
        tokens: 2222.22,
        date: '2024-03-15',
        status: 'completed'
      },
      {
        id: 2,
        type: 'transfer',
        amount: 500,
        tokens: 1111.11,
        date: '2024-03-14',
        status: 'completed'
      },
      {
        id: 3,
        type: 'reward',
        amount: 200,
        tokens: 444.44,
        date: '2024-03-13',
        status: 'completed'
      }
    ]
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-lg shadow-sm"
        >
          <div className="flex items-center">
            <div className="p-3 bg-primary-50 rounded-full">
              <FiDollarSign className="w-6 h-6 text-primary-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Token Balance</p>
              <h3 className="text-2xl font-bold text-gray-900">{tokenInfo.balance.toLocaleString()} MLMT</h3>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white p-6 rounded-lg shadow-sm"
        >
          <div className="flex items-center">
            <div className="p-3 bg-green-50 rounded-full">
              <FiDollarSign className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Token Value</p>
              <h3 className="text-2xl font-bold text-gray-900">${tokenInfo.value.toLocaleString()}</h3>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-6 rounded-lg shadow-sm"
        >
          <div className="flex items-center">
            <div className="p-3 bg-blue-50 rounded-full">
              <FiRefreshCcw className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Token Price</p>
              <h3 className="text-2xl font-bold text-gray-900">${tokenInfo.price}</h3>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-6 rounded-lg shadow-sm"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Token Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => setShowBuyModal(true)}
              className="flex items-center justify-center px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
            >
              <FiArrowDown className="mr-2" />
              Buy Tokens
            </button>
            <button className="flex items-center justify-center px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors">
              <FiArrowUp className="mr-2" />
              Transfer Tokens
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-6 rounded-lg shadow-sm"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Transactions</h3>
          <div className="space-y-4">
            {tokenInfo.transactions.map((tx) => (
              <div key={tx.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900 capitalize">{tx.type}</p>
                  <p className="text-sm text-gray-500">{tx.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">{tx.tokens.toLocaleString()} MLMT</p>
                  <p className="text-sm text-gray-500">${tx.amount.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TokenManagement;