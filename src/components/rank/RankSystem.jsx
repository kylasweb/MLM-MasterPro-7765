import React from 'react';
import { motion } from 'framer-motion';
import { FiStar, FiAward, FiTrendingUp, FiUsers } from 'react-icons/fi';

const RankSystem = () => {
  const ranks = [
    {
      id: 1,
      name: 'Bronze',
      icon: FiStar,
      requirements: {
        investment: '$1,000',
        directReferrals: 2,
        teamVolume: '$5,000',
      },
      benefits: [
        'Basic Binary Commission (5%)',
        'Access to Bronze Pool',
        'Basic Support',
      ],
      color: 'yellow'
    },
    {
      id: 2,
      name: 'Silver',
      icon: FiAward,
      requirements: {
        investment: '$5,000',
        directReferrals: 4,
        teamVolume: '$20,000',
      },
      benefits: [
        'Enhanced Binary Commission (8%)',
        'Access to Silver Pool',
        'Priority Support',
        'Leadership Bonus',
      ],
      color: 'gray'
    },
    {
      id: 3,
      name: 'Gold',
      icon: FiTrendingUp,
      requirements: {
        investment: '$10,000',
        directReferrals: 6,
        teamVolume: '$50,000',
      },
      benefits: [
        'Premium Binary Commission (12%)',
        'Access to Gold Pool',
        'VIP Support',
        'Leadership Bonus',
        'Performance Bonus',
      ],
      color: 'yellow'
    },
    {
      id: 4,
      name: 'Diamond',
      icon: FiUsers,
      requirements: {
        investment: '$25,000',
        directReferrals: 8,
        teamVolume: '$100,000',
      },
      benefits: [
        'Maximum Binary Commission (15%)',
        'Access to Auto Pool',
        'Exclusive Support',
        'Leadership Bonus',
        'Performance Bonus',
        'Global Profit Share',
      ],
      color: 'blue'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Rank System</h2>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">Current Rank:</span>
          <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
            Bronze
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {ranks.map((rank, index) => {
          const Icon = rank.icon;
          return (
            <motion.div
              key={rank.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white p-6 rounded-lg shadow-sm border-t-4 border-${rank.color}-500`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">{rank.name}</h3>
                <Icon className={`w-6 h-6 text-${rank.color}-500`} />
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Requirements</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <FiStar className="w-4 h-4 mr-2 text-yellow-500" />
                      Min Investment: {rank.requirements.investment}
                    </li>
                    <li className="flex items-center">
                      <FiUsers className="w-4 h-4 mr-2 text-blue-500" />
                      Direct Referrals: {rank.requirements.directReferrals}
                    </li>
                    <li className="flex items-center">
                      <FiTrendingUp className="w-4 h-4 mr-2 text-green-500" />
                      Team Volume: {rank.requirements.teamVolume}
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Benefits</h4>
                  <ul className="space-y-2">
                    {rank.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button className={`mt-6 w-full py-2 px-4 bg-${rank.color}-500 text-white rounded-md hover:bg-${rank.color}-600 transition-colors`}>
                View Details
              </button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default RankSystem;