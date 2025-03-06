import React, { createContext, useContext, useReducer } from 'react';

const DashboardContext = createContext(null);

const initialState = {
  userStats: {
    totalEarnings: 0,
    activeReferrals: 0,
    networkSize: 0,
    rank: 'Bronze'
  },
  transactions: [],
  notifications: [],
  loading: {
    stats: false,
    transactions: false,
    network: false
  },
  error: null
};

const dashboardReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        loading: { ...state.loading, [action.payload.key]: action.payload.value }
      };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'UPDATE_STATS':
      return { ...state, userStats: { ...state.userStats, ...action.payload } };
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [action.payload, ...state.transactions]
      };
    case 'SET_TRANSACTIONS':
      return { ...state, transactions: action.payload };
    case 'ADD_NOTIFICATION':
      return {
        ...state,
        notifications: [action.payload, ...state.notifications]
      };
    default:
      return state;
  }
};

export const DashboardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dashboardReducer, initialState);

  const updateStats = async () => {
    dispatch({ type: 'SET_LOADING', payload: { key: 'stats', value: true } });
    try {
      // Simulate API call
      const stats = {
        totalEarnings: 45678,
        activeReferrals: 24,
        networkSize: 156,
        rank: 'Silver'
      };
      dispatch({ type: 'UPDATE_STATS', payload: stats });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: { key: 'stats', value: false } });
    }
  };

  const loadTransactions = async () => {
    dispatch({ type: 'SET_LOADING', payload: { key: 'transactions', value: true } });
    try {
      // Simulate API call
      const transactions = [
        {
          id: 1,
          type: 'commission',
          amount: 450,
          date: new Date().toISOString(),
          status: 'completed'
        }
      ];
      dispatch({ type: 'SET_TRANSACTIONS', payload: transactions });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: { key: 'transactions', value: false } });
    }
  };

  const value = {
    state,
    dispatch,
    updateStats,
    loadTransactions
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
};