import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { useAuth } from './AuthContext';

const ProfileContext = createContext(null);

const initialState = {
  profile: null,
  preferences: {
    theme: 'light',
    notifications: {
      email: true,
      push: true,
      sms: false
    },
    language: 'en'
  },
  loading: false,
  error: null
};

const profileReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'SET_PROFILE':
      return { ...state, profile: action.payload };
    case 'UPDATE_PROFILE':
      return { ...state, profile: { ...state.profile, ...action.payload } };
    case 'UPDATE_PREFERENCES':
      return {
        ...state,
        preferences: { ...state.preferences, ...action.payload }
      };
    default:
      return state;
  }
};

export const ProfileProvider = ({ children }) => {
  const [state, dispatch] = useReducer(profileReducer, initialState);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      loadProfile();
    }
  }, [user]);

  const loadProfile = async () => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      // Load from local storage
      const storedProfile = JSON.parse(localStorage.getItem(`mlm_profile_${user.id}`) || 'null');
      if (storedProfile) {
        dispatch({ type: 'SET_PROFILE', payload: storedProfile });
      } else {
        // Initialize new profile
        const newProfile = {
          userId: user.id,
          name: user.name,
          email: user.email,
          createdAt: new Date().toISOString(),
          completionStatus: 'incomplete',
          rank: 'Bronze',
          achievements: [],
          stats: {
            totalEarnings: 0,
            activeReferrals: 0,
            completedTasks: 0
          }
        };
        await updateProfile(newProfile);
      }
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const updateProfile = async (profileData) => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      // Store in local storage
      localStorage.setItem(`mlm_profile_${user.id}`, JSON.stringify(profileData));
      dispatch({ type: 'UPDATE_PROFILE', payload: profileData });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const updatePreferences = async (preferences) => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      // Store in local storage
      localStorage.setItem(`mlm_preferences_${user.id}`, JSON.stringify(preferences));
      dispatch({ type: 'UPDATE_PREFERENCES', payload: preferences });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const value = {
    state,
    dispatch,
    updateProfile,
    updatePreferences
  };

  return (
    <ProfileContext.Provider value={value}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};