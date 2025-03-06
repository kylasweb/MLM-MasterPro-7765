import React from 'react';
import { motion } from 'framer-motion';
import { FiStar, FiAward, FiTrendingUp } from 'react-icons/fi';

const InvestmentPlans = () => {
  const plans = [
    {
      id: 1,
      name: 'Starter',
      icon: FiStar,
      minInvestment: 100,
      maxInvestment: 1000,
      features: [
        'Basic Binary Commissions',
        'Level 1-3 Access',
        'Regular Pool Entry',
        'Basic Support'
      ],
      color: 'blue'
    },
    {
      id: 2,
      name: 'Business',
      icon: FiTrendingUp,
      minInvestment: 1001,
      maxInvestment: 5000,
      features: [
        'Enhanced Binary Commissions',
        'Level 1-7 Access',
        'Premium Pool Entry',
        'Priority Support',
        'Team Building Tools'
      ],
      color: 'purple'
    },
    {
      id: 3,
      name: 'Enterprise',
      icon: FiAward,
      minInvestment: 5001,
      maxInvestment: 'Unlimited',
      features: [
        'Maximum Binary Commissions',
        'All Levels Access',
        'Auto Pool Entry',
        'VIP Support',
        'Advanced Analytics',
        'Leadership Rewards'
      ],
      color: 'yellow'
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Investment Plans</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => {
          const Icon = plan.icon;
          return (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white p-6 rounded-lg shadow-sm border-t-4 border-${plan.color}-500`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
                <Icon className={`w-6 h-6 text-${plan.color}-500`} />
              </div>

              <div className="mb-6">
                <div className="text-sm text-gray-500">Investment Range</div>
                <div className="text-2xl font-bold text-gray-900">
                  ${plan.minInvestment.toLocaleString()} - {
                    typeof plan.maxInvestment === 'number' 
                      ? `$${plan.maxInvestment.toLocaleString()}`
                      : plan.maxInvestment
                  }
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-2 px-4 bg-${plan.color}-500 text-white rounded-md hover:bg-${plan.color}-600 transition-colors`}>
                Select Plan
              </button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default InvestmentPlans;