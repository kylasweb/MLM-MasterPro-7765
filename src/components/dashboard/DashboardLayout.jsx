import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import MobileNav from './MobileNav';
import { motion, AnimatePresence } from 'framer-motion';
import { useDashboard } from '../../contexts/DashboardContext';
import LoadingSpinner from '../common/LoadingSpinner';

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { state, updateStats, loadTransactions } = useDashboard();
  const location = useLocation();

  useEffect(() => {
    updateStats();
    loadTransactions();
  }, []);

  useEffect(() => {
    // Close mobile nav when route changes
    setSidebarOpen(false);
  }, [location]);

  if (state.loading.stats && state.loading.transactions) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LoadingSpinner size="large" />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-64 bg-white">
        <Sidebar />
      </div>

      {/* Mobile Navigation */}
      <MobileNav
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        menuItems={[
          { path: '/dashboard', label: 'Dashboard', icon: FiHome },
          // ... other menu items
        ]}
      />

      {/* Main Content */}
      <div className="flex-1 min-h-screen">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        <main className="p-4 md:p-6 pt-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;