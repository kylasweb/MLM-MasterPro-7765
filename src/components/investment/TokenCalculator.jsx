import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiDollarSign, FiRefreshCcw } from 'react-icons/fi';

const TokenCalculator = () => {
  const [usdAmount, setUsdAmount] = useState(100);
  const [tokenAmount, setTokenAmount] = useState(0);
  const TOKEN_PRICE = 0.45;
  const MIN_INVESTMENT = 100;

  useEffect(() => {
    const tokens = usdAmount / TOKEN_PRICE;
    setTokenAmount(tokens);
  }, [usdAmount]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-lg shadow-sm"
    >
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Token Calculator</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Investment Amount (USD)
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiDollarSign className="text-gray-400" />
            </div>
            <input
              type="number"
              min={MIN_INVESTMENT}
              value={usdAmount}
              onChange={(e) => setUsdAmount(Math.max(MIN_INVESTMENT, Number(e.target.value)))}
              className="block w-full pl-10 pr-12 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-gray-500">USD</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <FiRefreshCcw className="text-gray-400" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Token Amount
          </label>
          <div className="relative">
            <input
              type="text"
              value={tokenAmount.toFixed(2)}
              readOnly
              className="block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-gray-500">Tokens</span>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-200">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Token Price:</span>
            <span className="font-medium text-gray-900">${TOKEN_PRICE}</span>
          </div>
          <div className="flex justify-between text-sm mt-2">
            <span className="text-gray-500">Minimum Investment:</span>
            <span className="font-medium text-gray-900">${MIN_INVESTMENT}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TokenCalculator;