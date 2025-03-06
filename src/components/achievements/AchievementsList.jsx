import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAchievements } from '../../contexts/AchievementContext';

const AchievementsList = () => {
  const { state } = useAchievements();
  const { achievements, userAchievements } = state;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {achievements.map((achievement) => {
        const isUnlocked = userAchievements.some(ua => ua.id === achievement.id);
        
        return (
          <motion.div
            key={achievement.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-6 rounded-lg shadow-sm ${
              isUnlocked ? 'bg-primary-50 border-2 border-primary-500' : 'bg-white'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl">{achievement.icon}</span>
              {isUnlocked && (
                <span className="px-3 py-1 text-sm font-medium text-primary-700 bg-primary-100 rounded-full">
                  Unlocked
                </span>
              )}
            </div>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {achievement.title}
            </h3>
            <p className="text-sm text-gray-600 mb-4">{achievement.description}</p>
            
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Points: {achievement.points}</span>
              {isUnlocked && (
                <span className="text-primary-600">
                  {new Date(
                    userAchievements.find(ua => ua.id === achievement.id).unlockedAt
                  ).toLocaleDateString()}
                </span>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AchievementsList;