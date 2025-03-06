import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiDollarSign, FiUsers, FiPercent } from 'react-icons/fi';

const CommissionCalculator = () => {
  const [investment, setInvestment] = useState(1000);
  const [referrals, setReferrals] = useState({ left: 1, right: 1 });
  const [commissions, setCommissions] = useState({
    direct: 0,
    binary: 0,
    pool: 0,
    total: 0
  });

  const calculateCommissions = () => {
    // Direct Commission (40% for top, 20% each for left and right)
    const directComm = investment * 0.4;
    const leftComm = investment * 0.2;
    const rightComm = investment * 0.2;

    // Binary Commission (based on weaker leg)
    const weakerLeg = Math.min(referrals.left, referrals.right);
    const binaryComm = weakerLeg * (investment * 0.05);

    // Pool Commission (assumed 5% of investment)
    const poolComm = investment * 0.05;

    setCommissions({
      direct: directComm,
      binary: binaryComm,
      pool: poolComm,
      total: directComm + binaryComm + poolComm
    });
  };

  useEffect(() => {
    calculateCommissions();
  }, [investment, referrals]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Commission Calculator</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Investment Amount ($)
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
              <FiDollarSign className="text-gray-400" />
            </div>
            <input
              type="number"
              min="100"
              value={investment}
              onChange={(e) => setInvestment(Number(e.target.value))}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Left Referrals
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <FiUsers className="text-gray-400" />
              </div>
              <input
                type="number"
                min="0"
                value={referrals.left}
                onChange={(e) => setReferrals({ ...referrals, left: Number(e.target.value) })}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Right Referrals
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <FiUsers className="text-gray-400" />
              </div>
              <input
                type="number"
                min="0"
                value={referrals.right}
                onChange={(e) => setReferrals({ ...referrals, right: Number(e.target.value) })}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <p className="text-sm text-gray-500">Direct Commission</p>
            <p className="text-lg font-semibold text-gray-900">${commissions.direct.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Binary Commission</p>
            <p className="text-lg font-semibold text-gray-900">${commissions.binary.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Pool Commission</p>
            <p className="text-lg font-semibold text-gray-900">${commissions.pool.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Earnings</p>
            <p className="text-xl font-bold text-primary-600">${commissions.total.toFixed(2)}</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="font-medium text-gray-900">Commission Breakdown</h4>
        <div className="space-y-2">
          <div className="flex items-center justify-between p-3 bg-green-50 rounded-md">
            <div className="flex items-center">
              <FiPercent className="text-green-600 mr-2" />
              <span className="text-sm text-gray-700">Top Position</span>
            </div>
            <span className="text-sm font-medium text-green-600">40%</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-blue-50 rounded-md">
            <div className="flex items-center">
              <FiPercent className="text-blue-600 mr-2" />
              <span className="text-sm text-gray-700">Left & Right Direct</span>
            </div>
            <span className="text-sm font-medium text-blue-600">20% each</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-purple-50 rounded-md">
            <div className="flex items-center">
              <FiPercent className="text-purple-600 mr-2" />
              <span className="text-sm text-gray-700">Binary Bonus</span>
            </div>
            <span className="text-sm font-medium text-purple-600">5% per pair</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommissionCalculator;