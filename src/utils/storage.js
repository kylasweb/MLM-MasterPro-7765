// Local Storage Keys
const STORAGE_KEYS = {
  USER: 'mlm_user',
  PROFILE: 'mlm_profile_',
  PREFERENCES: 'mlm_preferences_',
  TRANSACTIONS: 'mlm_transactions',
  NETWORK: 'mlm_network_',
  SETTINGS: 'mlm_settings_'
};

// Storage Operations
export const storage = {
  // Generic operations
  set: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error('Storage set error:', error);
      return false;
    }
  },

  get: (key) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error('Storage get error:', error);
      return null;
    }
  },

  remove: (key) => {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error('Storage remove error:', error);
      return false;
    }
  },

  // User specific operations
  setUserData: (userId, data, type) => {
    const key = `${STORAGE_KEYS[type]}${userId}`;
    return storage.set(key, data);
  },

  getUserData: (userId, type) => {
    const key = `${STORAGE_KEYS[type]}${userId}`;
    return storage.get(key);
  },

  // Batch operations
  batchSet: (items) => {
    try {
      items.forEach(({ key, value }) => storage.set(key, value));
      return true;
    } catch (error) {
      console.error('Batch set error:', error);
      return false;
    }
  },

  // Clear all MLM related data
  clearAll: () => {
    try {
      Object.values(STORAGE_KEYS).forEach(key => {
        const keys = Object.keys(localStorage).filter(k => k.startsWith(key));
        keys.forEach(k => localStorage.removeItem(k));
      });
      return true;
    } catch (error) {
      console.error('Clear all error:', error);
      return false;
    }
  }
};

export default storage;