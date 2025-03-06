import React from 'react';
import { motion } from 'framer-motion';
import ReactECharts from 'echarts-for-react';
import { format } from 'date-fns';
import { FiUsers, FiDollarSign, FiTrendingUp, FiActivity } from 'react-icons/fi';

const Dashboard = () => {
  const salesData = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      smooth: true
    }]
  };

  const networkGrowth = {
    tooltip: {
      trigger: 'item'
    },
    series: [{
      type: 'pie',
      radius: ['40%', '70%'],
      data: [
        { value: 1048, name: 'Level 1' },
        { value: 735, name: 'Level 2' },
        { value: 580, name: 'Level 3' },
        { value: 484, name: 'Level 4' },
        { value: 300, name: 'Level 5' }
      ]
    }]
  };

  const stats = [
    { icon: FiUsers, label: 'Total Users', value: '1,234', change: '+12%' },
    { icon: FiDollarSign, label: 'Revenue', value: '$45,678', change: '+8%' },
    { icon: FiTrendingUp, label: 'Growth', value: '23%', change: '+5%' },
    { icon: FiActivity, label: 'Active Users', value: '876', change: '+15%' }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                  <h3 className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</h3>
                </div>
                <div className="p-3 bg-primary-50 rounded-full">
                  <Icon className="w-6 h-6 text-primary-600" />
                </div>
              </div>
              <div className="mt-4">
                <span className="text-green-500 text-sm font-medium">{stat.change}</span>
                <span className="text-gray-500 text-sm ml-2">vs last month</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-6 rounded-lg shadow-sm"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Sales Overview</h3>
          <ReactECharts option={salesData} style={{ height: '300px' }} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-6 rounded-lg shadow-sm"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Network Distribution</h3>
          <ReactECharts option={networkGrowth} style={{ height: '300px' }} />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-6 rounded-lg shadow-sm"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activities</h3>
        <div className="space-y-4">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="flex items-center justify-between py-3 border-b last:border-0">
              <div>
                <p className="text-sm font-medium text-gray-900">New member joined</p>
                <p className="text-sm text-gray-500">John Doe joined Level 2</p>
              </div>
              <span className="text-sm text-gray-500">
                {format(new Date(), 'MMM d, yyyy')}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;