import React, { createContext, useContext, useState, useEffect } from 'react';
import { users } from '../data/users';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('mlm_user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const login = async (credentials) => {
    try {
      const matchedUser = users.find(
        u => u.email === credentials.email && u.password === credentials.password
      );

      if (!matchedUser) {
        throw new Error('Invalid credentials');
      }

      setUser(matchedUser);
      localStorage.setItem('mlm_user', JSON.stringify(matchedUser));
      return matchedUser;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const register = async (userData) => {
    try {
      // Check if email already exists
      if (users.find(u => u.email === userData.email)) {
        throw new Error('Email already exists');
      }

      const newUser = {
        id: users.length + 1,
        ...userData,
        role: 'user',
        createdAt: new Date().toISOString()
      };

      users.push(newUser);
      setUser(newUser);
      localStorage.setItem('mlm_user', JSON.stringify(newUser));
      return newUser;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('mlm_user');
  };

  const updateUser = (updates) => {
    try {
      const updatedUser = { ...user, ...updates };
      setUser(updatedUser);
      localStorage.setItem('mlm_user', JSON.stringify(updatedUser));
      return updatedUser;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const value = {
    user,
    loading,
    error,
    login,
    logout,
    register,
    updateUser
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};