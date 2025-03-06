import React from 'react';
import { motion } from 'framer-motion';
import { FiDollarSign, FiCreditCard, FiTrendingUp, FiDownload } from 'react-icons/fi';
import ReactECharts from 'echarts-for-react';

const Finance = () => {
  const earningsData = {
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      name: 'Earnings',
      data: [12000, 15000, 18000, 14000, 16000, 20000],
      type: 'bar',
      itemStyle: {
        color: '#0ea5e9'
      }
    }]
  };

  const transactions = [
    { id: 1, type: 'Commission', amount: '+$450.00', date: '2024-03-15', status: 'Completed' },
    { id: 2, type: 'Withdrawal', amount: '-$1,200.00', date: '2024-03-14', status: 'Pending' },
    { id: 3, type: 'Bonus', amount: '+$300.00', date: '2024-03-13', status: 'Completed' },
    { id: 4, type: 'Commission', amount: '+$680.00', date: '2024-03-12', status: 'Completed' },
  ];

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
              <p className="text-sm text-gray-500">Total Earnings</p>
              <h3 className="text-2xl font-bold text-gray-900">$45,678</h3>
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
              <FiCreditCard className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Available Balance</p>
              <h3 className="text-2xl font-bold text-gray-900">$12,345</h3>
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
              <FiTrendingUp className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Monthly Growth</p>
              <h3 className="text-2xl font-bold text-gray-900">+24.6%</h3>
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
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Earnings Overview</h3>
            <button className="flex items-center text-sm text-primary-600 hover:text-primary-700">
              <FiDownload className="w-4 h-4 mr-1" />
              Export
            </button>
          </div>
          <ReactECharts option={earningsData} style={{ height: '300px' }} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-6 rounded-lg shadow-sm"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Transactions</h3>
          <div className="space-y-4">
            {transactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{transaction.type}</p>
                  <p className="text-sm text-gray-500">{transaction.date}</p>
                </div>
                <div className="text-right">
                  <p className={`font-medium ${transaction.amount.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {transaction.amount}
                  </p>
                  <p className={`text-sm ${
                    transaction.status === 'Completed' ? 'text-green-600' : 'text-yellow-600'
                  }`}>
                    {transaction.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-6 rounded-lg shadow-sm"
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Withdrawal</h3>
        </div>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Amount
            </label>
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              placeholder="Enter amount"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Payment Method
            </label>
            <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500">
              <option>Bank Transfer</option>
              <option>PayPal</option>
              <option>Crypto Wallet</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <button className="w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition-colors">
              Request Withdrawal
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Finance;