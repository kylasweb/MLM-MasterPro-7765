import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiUsers, FiTrendingUp } from 'react-icons/fi';

const PoolSystem = () => {
  const pools = [
    {
      id: 1,
      name: "Bronze Pool",
      type: "Manual",
      members: 156,
      totalVolume: "$245,000",
      requirements: {
        minInvestment: "$1,000",
        directReferrals: 2,
        rank: "Bronze"
      },
      rewards: {
        daily: "0.3%",
        monthly: "9%"
      }
    },
    {
      id: 2,
      name: "Silver Pool",
      type: "Manual",
      members: 89,
      totalVolume: "$520,000",
      requirements: {
        minInvestment: "$5,000",
        directReferrals: 4,
        rank: "Silver"
      },
      rewards: {
        daily: "0.4%",
        monthly: "12%"
      }
    },
    {
      id: 3,
      name: "Gold Pool",
      type: "Manual",
      members: 45,
      totalVolume: "$890,000",
      requirements: {
        minInvestment: "$10,000",
        directReferrals: 6,
        rank: "Gold"
      },
      rewards: {
        daily: "0.5%",
        monthly: "15%"
      }
    },
    {
      id: 4,
      name: "Auto Pool",
      type: "Automatic",
      members: 234,
      totalVolume: "$1,450,000",
      requirements: {
        minInvestment: "$2,500",
        directReferrals: "Any",
        rank: "Any"
      },
      rewards: {
        daily: "0.35%",
        monthly: "10.5%"
      }
    }
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
            <div className="p-3 bg-purple-50 rounded-full">
              <FiAward className="w-6 h-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Total Pools</p>
              <h3 className="text-2xl font-bold text-gray-900">4</h3>
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
            <div className="p-3 bg-blue-50 rounded-full">
              <FiUsers className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Total Members</p>
              <h3 className="text-2xl font-bold text-gray-900">524</h3>
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
            <div className="p-3 bg-green-50 rounded-full">
              <FiTrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Total Volume</p>
              <h3 className="text-2xl font-bold text-gray-900">$3.1M</h3>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {pools.map((pool, index) => (
          <motion.div
            key={pool.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`bg-white p-6 rounded-lg shadow-sm border-l-4 ${
              pool.type === 'Automatic' ? 'border-purple-500' : 'border-primary-500'
            }`}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{pool.name}</h3>
                <span className={`text-sm px-2 py-1 rounded-full ${
                  pool.type === 'Automatic' 
                    ? 'bg-purple-100 text-purple-800' 
                    : 'bg-primary-100 text-primary-800'
                }`}>
                  {pool.type}
                </span>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Members</p>
                <p className="text-lg font-semibold text-gray-900">{pool.members}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <h4 className="text-sm font-medium text-gray-700">Requirements</h4>
                <ul className="mt-2 space-y-1 text-sm text-gray-600">
                  <li>Min Investment: {pool.requirements.minInvestment}</li>
                  <li>Direct Referrals: {pool.requirements.directReferrals}</li>
                  <li>Rank: {pool.requirements.rank}</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-700">Rewards</h4>
                <ul className="mt-2 space-y-1 text-sm text-gray-600">
                  <li>Daily: {pool.rewards.daily}</li>
                  <li>Monthly: {pool.rewards.monthly}</li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Total Volume</span>
                <span className="text-lg font-semibold text-gray-900">{pool.totalVolume}</span>
              </div>
            </div>

            <button className={`mt-4 w-full py-2 px-4 rounded-md text-white ${
              pool.type === 'Automatic' 
                ? 'bg-purple-600 hover:bg-purple-700' 
                : 'bg-primary-600 hover:bg-primary-700'
            } transition-colors`}>
              Join Pool
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PoolSystem;