import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiClock, FiAlertCircle, FiCalendar } from 'react-icons/fi';

const Tasks = () => {
  const tasks = [
    {
      id: 1,
      title: 'Complete Profile Setup',
      description: 'Add personal information and upload required documents',
      deadline: '2024-03-20',
      reward: 50,
      status: 'completed'
    },
    {
      id: 2,
      title: 'Recruit 3 New Members',
      description: 'Bring in new members to your downline network',
      deadline: '2024-03-25',
      reward: 150,
      status: 'in-progress'
    },
    {
      id: 3,
      title: 'Achieve Sales Target',
      description: 'Complete sales worth $5000 in your network',
      deadline: '2024-03-31',
      reward: 300,
      status: 'pending'
    },
    {
      id: 4,
      title: 'Complete Training Module',
      description: 'Finish the advanced marketing strategy course',
      deadline: '2024-03-22',
      reward: 100,
      status: 'in-progress'
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <FiCheckCircle className="w-5 h-5 text-green-500" />;
      case 'in-progress':
        return <FiClock className="w-5 h-5 text-yellow-500" />;
      case 'pending':
        return <FiAlertCircle className="w-5 h-5 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'in-progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'pending':
        return 'bg-red-100 text-red-800';
      default:
        return '';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Tasks & Challenges</h2>
        <div className="flex space-x-4">
          <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500">
            <option>All Tasks</option>
            <option>Completed</option>
            <option>In Progress</option>
            <option>Pending</option>
          </select>
          <button className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors">
            Create Task
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {tasks.map((task, index) => (
          <motion.div
            key={task.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-sm"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center">
                {getStatusIcon(task.status)}
                <h3 className="text-lg font-semibold text-gray-900 ml-2">{task.title}</h3>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(task.status)}`}>
                {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
              </span>
            </div>

            <p className="text-gray-600 mb-4">{task.description}</p>

            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center">
                <FiCalendar className="w-4 h-4 mr-2" />
                <span>Deadline: {task.deadline}</span>
              </div>
              <div className="flex items-center">
                <FiCheckCircle className="w-4 h-4 mr-2" />
                <span>Reward: ${task.reward}</span>
              </div>
            </div>

            {task.status !== 'completed' && (
              <button className="mt-4 w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition-colors">
                {task.status === 'pending' ? 'Start Task' : 'Continue Task'}
              </button>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;