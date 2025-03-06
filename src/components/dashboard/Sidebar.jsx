import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FiHome,
  FiUsers,
  FiDollarSign,
  FiPieChart,
  FiSettings,
  FiBox,
  FiTarget,
  FiAward,
  FiMessageSquare
} from 'react-icons/fi';

const menuItems = [
  { icon: FiHome, label: 'Dashboard', path: '/dashboard' },
  { icon: FiUsers, label: 'Network', path: '/network' },
  { icon: FiDollarSign, label: 'Finance', path: '/finance' },
  { icon: FiBox, label: 'Products', path: '/products' },
  { icon: FiTarget, label: 'Tasks', path: '/tasks' },
  { icon: FiAward, label: 'Rewards', path: '/rewards' },
  { icon: FiPieChart, label: 'Analytics', path: '/analytics' },
  { icon: FiMessageSquare, label: 'Support', path: '/support' },
  { icon: FiSettings, label: 'Settings', path: '/settings' }
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="w-64 bg-white h-screen shadow-lg fixed left-0 top-0">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-primary-600">MLM Platform</h1>
      </div>
      <nav className="mt-6">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-6 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors ${
                isActive ? 'bg-primary-50 text-primary-600' : ''
              }`}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-5 h-5" />
              </motion.div>
              <span className="ml-3">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;