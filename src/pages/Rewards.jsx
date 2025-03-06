import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiTarget, FiStar, FiGift } from 'react-icons/fi';

const Rewards = () => {
  const rewards = [
    {
      id: 1,
      title: 'Sales Champion',
      description: 'Achieve $10,000 in team sales',
      points: 1000,
      progress: 75,
      type: 'achievement'
    },
    {
      id: 2,
      title: 'Network Builder',
      description: 'Recruit 10 active members',
      points: 500,
      progress: 60,
      type: 'achievement'
    },
    {
      id: 3,
      title: 'Leadership Bonus',
      description: 'Unlock special bonuses',
      amount: '$1,000',
      requirements: 'Reach Gold Level',
      type: 'bonus'
    },
    {
      id: 4,
      title: 'Performance Pool',
      description: 'Share in monthly pool',
      amount: '$5,000',
      requirements: 'Top 10 performers',
      type: 'bonus'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
              <p className="text-sm text-gray-500">Total Points</p>
              <h3 className="text-2xl font-bold text-gray-900">2,450</h3>
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
            <div className="p-3 bg-yellow-50 rounded-full">
              <FiTarget className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Achievements</p>
              <h3 className="text-2xl font-bold text-gray-900">15</h3>
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
              <FiStar className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Current Rank</p>
              <h3 className="text-2xl font-bold text-gray-900">Gold</h3>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white p-6 rounded-lg shadow-sm"
        >
          <div className="flex items-center">
            <div className="p-3 bg-blue-50 rounded-full">
              <FiGift className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Available Rewards</p>
              <h3 className="text-2xl font-bold text-gray-900">8</h3>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {rewards.map((reward, index) => (
          <motion.div
            key={reward.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-sm"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center">
                {reward.type === 'achievement' ? (
                  <FiTarget className="w-6 h-6 text-yellow-600" />
                ) : (
                  <FiGift className="w-6 h-6 text-purple-600" />
                )}
                <h3 className="text-lg font-semibold text-gray-900 ml-2">{reward.title}</h3>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                reward.type === 'achievement' ? 'bg-yellow-100 text-yellow-800' : 'bg-purple-100 text-purple-800'
              }`}>
                {reward.type.charAt(0).toUpperCase() + reward.type.slice(1)}
              </span>
            </div>

            <p className="text-gray-600 mb-4">{reward.description}</p>

            {reward.type === 'achievement' ? (
              <div>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                  <span>Progress</span>
                  <span>{reward.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-yellow-600 h-2 rounded-full"
                    style={{ width: `${reward.progress}%` }}
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">Reward: {reward.points} points</p>
              </div>
            ) : (
              <div className="space-y-2">
                <p className="text-lg font-semibold text-gray-900">{reward.amount}</p>
                <p className="text-sm text-gray-500">Requirements: {reward.requirements}</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Rewards;