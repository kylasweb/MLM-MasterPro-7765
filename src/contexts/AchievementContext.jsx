import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { storage } from '../utils/storage';

const AchievementContext = createContext(null);

const initialState = {
  achievements: [],
  userAchievements: [],
  loading: false,
  error: null
};

const achievementReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'SET_ACHIEVEMENTS':
      return { ...state, achievements: action.payload };
    case 'SET_USER_ACHIEVEMENTS':
      return { ...state, userAchievements: action.payload };
    case 'UNLOCK_ACHIEVEMENT':
      return {
        ...state,
        userAchievements: [...state.userAchievements, action.payload]
      };
    default:
      return state;
  }
};

export const AchievementProvider = ({ children }) => {
  const [state, dispatch] = useReducer(achievementReducer, initialState);
  const { user } = useAuth();

  const achievements = [
    {
      id: 'first_referral',
      title: 'First Steps',
      description: 'Refer your first member',
      points: 100,
      icon: '🌟'
    },
    {
      id: 'team_builder',
      title: 'Team Builder',
      description: 'Build a team of 10 active members',
      points: 500,
      icon: '👥'
    },
    {
      id: 'sales_master',
      title: 'Sales Master',
      description: 'Achieve $10,000 in team sales',
      points: 1000,
      icon: '💰'
    },
    // Add more achievements as needed
  ];

  useEffect(() => {
    if (user) {
      loadUserAchievements();
    }
  }, [user]);

  const loadUserAchievements = async () => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      dispatch({ type: 'SET_ACHIEVEMENTS', payload: achievements });
      const userAchievements = storage.getUserData(user.id, 'ACHIEVEMENTS') || [];
      dispatch({ type: 'SET_USER_ACHIEVEMENTS', payload: userAchievements });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const checkAndUnlockAchievement = async (achievementId, criteria) => {
    const achievement = achievements.find(a => a.id === achievementId);
    if (!achievement) return;

    const alreadyUnlocked = state.userAchievements.some(a => a.id === achievementId);
    if (alreadyUnlocked) return;

    if (await checkAchievementCriteria(achievementId, criteria)) {
      const unlockedAchievement = {
        ...achievement,
        unlockedAt: new Date().toISOString()
      };
      
      dispatch({ type: 'UNLOCK_ACHIEVEMENT', payload: unlockedAchievement });
      storage.setUserData(user.id, [...state.userAchievements, unlockedAchievement], 'ACHIEVEMENTS');
      
      // Trigger any achievement unlock animations or notifications here
      return unlockedAchievement;
    }
  };

  const checkAchievementCriteria = async (achievementId, criteria) => {
    // Implement achievement-specific criteria checking logic
    switch (achievementId) {
      case 'first_referral':
        return criteria.referralCount > 0;
      case 'team_builder':
        return criteria.teamSize >= 10;
      case 'sales_master':
        return criteria.teamSales >= 10000;
      default:
        return false;
    }
  };

  const value = {
    state,
    dispatch,
    checkAndUnlockAchievement
  };

  return (
    <AchievementContext.Provider value={value}>
      {children}
    </AchievementContext.Provider>
  );
};

export const useAchievements = () => {
  const context = useContext(AchievementContext);
  if (!context) {
    throw new Error('useAchievements must be used within an AchievementProvider');
  }
  return context;
};