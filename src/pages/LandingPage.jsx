import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiShield, FiTrendingUp, FiUsers, FiAward } from 'react-icons/fi';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-900 to-secondary-900">
      <div className="backdrop-blur-lg bg-white/10">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-white">CryptoMLM</div>
            <Link 
              to="/login"
              className="px-6 py-2 text-white border border-white rounded-full hover:bg-white hover:text-primary-900 transition-all"
            >
              Login
            </Link>
          </div>
        </nav>

        <main className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl font-bold text-white mb-6">
                Revolutionary Binary MLM with Custom Token Investment
              </h1>
              <p className="text-lg text-white/80 mb-8">
                Join our innovative platform combining crypto investments with a powerful binary MLM structure. 
                Earn commissions, climb ranks, and participate in auto-balancing pools.
              </p>
              <div className="flex space-x-4">
                <Link
                  to="/register"
                  className="px-8 py-3 bg-white text-primary-900 rounded-full font-semibold hover:bg-primary-50 transition-all flex items-center"
                >
                  Get Started <FiArrowRight className="ml-2" />
                </Link>
                <Link
                  to="/about"
                  className="px-8 py-3 border border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="backdrop-blur-xl bg-white/10 p-8 rounded-2xl"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 backdrop-blur-lg bg-white/5 rounded-xl">
                  <h3 className="text-3xl font-bold text-white mb-2">$0.45</h3>
                  <p className="text-white/80">Token Price</p>
                </div>
                <div className="text-center p-6 backdrop-blur-lg bg-white/5 rounded-xl">
                  <h3 className="text-3xl font-bold text-white mb-2">40%</h3>
                  <p className="text-white/80">Top Commission</p>
                </div>
                <div className="text-center p-6 backdrop-blur-lg bg-white/5 rounded-xl">
                  <h3 className="text-3xl font-bold text-white mb-2">10</h3>
                  <p className="text-white/80">Levels Deep</p>
                </div>
                <div className="text-center p-6 backdrop-blur-lg bg-white/5 rounded-xl">
                  <h3 className="text-3xl font-bold text-white mb-2">∞</h3>
                  <p className="text-white/80">Auto Pool</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="backdrop-blur-lg bg-white/5 p-6 rounded-xl"
            >
              <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mb-4">
                <FiShield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Secure Investment</h3>
              <p className="text-white/70">
                Your investments are protected with advanced security measures and transparent smart contracts.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="backdrop-blur-lg bg-white/5 p-6 rounded-xl"
            >
              <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mb-4">
                <FiTrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Growing Returns</h3>
              <p className="text-white/70">
                Benefit from our unique binary structure and auto-balancing pools for maximized earnings.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="backdrop-blur-lg bg-white/5 p-6 rounded-xl"
            >
              <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mb-4">
                <FiUsers className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Community Driven</h3>
              <p className="text-white/70">
                Join a thriving community of investors and earn through our innovative referral system.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="backdrop-blur-lg bg-white/5 p-6 rounded-xl"
            >
              <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mb-4">
                <FiAward className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Rank & Rewards</h3>
              <p className="text-white/70">
                Climb through ranks and unlock additional benefits in our auto-pool system.
              </p>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default LandingPage;