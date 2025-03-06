import React, { createContext, useContext, useReducer } from 'react';

const TransactionContext = createContext(null);

const initialState = {
  transactions: [],
  pendingTransactions: [],
  transactionStats: {
    totalVolume: 0,
    monthlyVolume: 0,
    averageTransaction: 0
  },
  loading: false,
  error: null
};

const transactionReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'SET_TRANSACTIONS':
      return { 
        ...state, 
        transactions: action.payload,
        transactionStats: calculateTransactionStats(action.payload)
      };
    case 'ADD_TRANSACTION':
      const updatedTransactions = [action.payload, ...state.transactions];
      return {
        ...state,
        transactions: updatedTransactions,
        transactionStats: calculateTransactionStats(updatedTransactions)
      };
    case 'UPDATE_TRANSACTION':
      const updatedTxs = state.transactions.map(tx =>
        tx.id === action.payload.id ? action.payload : tx
      );
      return {
        ...state,
        transactions: updatedTxs,
        transactionStats: calculateTransactionStats(updatedTxs)
      };
    default:
      return state;
  }
};

const calculateTransactionStats = (transactions) => {
  const total = transactions.reduce((sum, tx) => sum + tx.amount, 0);
  const monthly = transactions
    .filter(tx => {
      const txDate = new Date(tx.date);
      const currentDate = new Date();
      return txDate.getMonth() === currentDate.getMonth() &&
             txDate.getFullYear() === currentDate.getFullYear();
    })
    .reduce((sum, tx) => sum + tx.amount, 0);

  return {
    totalVolume: total,
    monthlyVolume: monthly,
    averageTransaction: transactions.length ? total / transactions.length : 0
  };
};

export const TransactionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(transactionReducer, initialState);

  const addTransaction = async (transactionData) => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      // Simulate API call
      const newTransaction = {
        id: Date.now(),
        ...transactionData,
        status: 'pending',
        date: new Date().toISOString()
      };
      
      // Store in local storage
      const storedTransactions = JSON.parse(localStorage.getItem('mlm_transactions') || '[]');
      const updatedTransactions = [newTransaction, ...storedTransactions];
      localStorage.setItem('mlm_transactions', JSON.stringify(updatedTransactions));

      dispatch({ type: 'ADD_TRANSACTION', payload: newTransaction });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const loadTransactions = async () => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      // Load from local storage
      const storedTransactions = JSON.parse(localStorage.getItem('mlm_transactions') || '[]');
      dispatch({ type: 'SET_TRANSACTIONS', payload: storedTransactions });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const value = {
    state,
    dispatch,
    addTransaction,
    loadTransactions
  };

  return (
    <TransactionContext.Provider value={value}>
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransactions = () => {
  const context = useContext(TransactionContext);
  if (!context) {
    throw new Error('useTransactions must be used within a TransactionProvider');
  }
  return context;
};