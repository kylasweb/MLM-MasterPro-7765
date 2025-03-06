import React from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiLock, FiBell, FiCreditCard, FiShield } from 'react-icons/fi';

const Settings = () => {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-6 rounded-lg shadow-sm"
      >
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Profile Settings</h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Country
              </label>
              <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500">
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Canada</option>
                <option>Australia</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Bio
            </label>
            <textarea
              rows="4"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              placeholder="Tell us about yourself"
            ></textarea>
          </div>

          <button className="bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition-colors">
            Save Changes
          </button>
        </form>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white p-6 rounded-lg shadow-sm"
      >
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Security Settings</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center">
              <FiLock className="w-5 h-5 text-gray-600" />
              <span className="ml-3 text-gray-900">Change Password</span>
            </div>
            <button className="text-primary-600 hover:text-primary-700">Update</button>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center">
              <FiShield className="w-5 h-5 text-gray-600" />
              <span className="ml-3 text-gray-900">Two-Factor Authentication</span>
            </div>
            <button className="text-primary-600 hover:text-primary-700">Enable</button>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center">
              <FiBell className="w-5 h-5 text-gray-600" />
              <span className="ml-3 text-gray-900">Notification Preferences</span>
            </div>
            <button className="text-primary-600 hover:text-primary-700">Configure</button>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center">
              <FiCreditCard className="w-5 h-5 text-gray-600" />
              <span className="ml-3 text-gray-900">Payment Methods</span>
            </div>
            <button className="text-primary-600 hover:text-primary-700">Manage</button>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white p-6 rounded-lg shadow-sm"
      >
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Preferences</h2>
        <div className="space-y-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
            <label className="ml-2 block text-sm text-gray-900">
              Receive email notifications
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
            <label className="ml-2 block text-sm text-gray-900">
              Receive SMS notifications
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
            <label className="ml-2 block text-sm text-gray-900">
              Show profile to other members
            </label>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Settings;