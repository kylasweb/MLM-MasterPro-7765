import React from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiUsers } from 'react-icons/fi';

const BinaryTreeNode = ({ node, level = 0 }) => {
  const nodeStyle = `
    relative p-4 bg-white rounded-lg shadow-sm border-2 
    ${node.active ? 'border-green-500' : 'border-gray-200'}
    ${level === 0 ? 'bg-primary-50' : ''}
  `;

  const lineStyle = `
    absolute w-px bg-gray-300
    ${level < 2 ? 'h-8' : 'h-6'}
  `;

  return (
    <div className="flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: level * 0.1 }}
        className={nodeStyle}
      >
        <div className="flex items-center space-x-3">
          <div className={`p-2 rounded-full ${level === 0 ? 'bg-primary-100' : 'bg-gray-100'}`}>
            <FiUser className={`w-5 h-5 ${level === 0 ? 'text-primary-600' : 'text-gray-600'}`} />
          </div>
          <div>
            <p className="font-medium text-gray-900">{node.name}</p>
            <p className="text-sm text-gray-500">ID: {node.id}</p>
          </div>
        </div>
        <div className="mt-2 text-xs">
          <div className="flex justify-between text-gray-500">
            <span>Left: {node.leftCount}</span>
            <span>Right: {node.rightCount}</span>
          </div>
          <div className="mt-1 flex justify-between">
            <span className="text-blue-600">Vol: ${node.volume}</span>
            <span className={node.active ? 'text-green-600' : 'text-red-600'}>
              {node.active ? 'Active' : 'Inactive'}
            </span>
          </div>
        </div>
      </motion.div>

      {level < 2 && (
        <div className="relative">
          <div className={`${lineStyle} left-1/4 -translate-x-1/2`} />
          <div className={`${lineStyle} right-1/4 translate-x-1/2`} />
          
          <div className="flex justify-center gap-8 mt-8">
            {node.left && <BinaryTreeNode node={node.left} level={level + 1} />}
            {node.right && <BinaryTreeNode node={node.right} level={level + 1} />}
          </div>
        </div>
      )}
    </div>
  );
};

const BinaryTree = () => {
  // Sample data - replace with actual data
  const treeData = {
    id: "001",
    name: "John Doe",
    leftCount: 24,
    rightCount: 18,
    volume: 15000,
    active: true,
    left: {
      id: "002",
      name: "Alice Smith",
      leftCount: 12,
      rightCount: 8,
      volume: 8000,
      active: true,
      left: {
        id: "004",
        name: "Mark Wilson",
        leftCount: 5,
        rightCount: 3,
        volume: 3000,
        active: true
      },
      right: {
        id: "005",
        name: "Sarah Brown",
        leftCount: 4,
        rightCount: 2,
        volume: 2000,
        active: false
      }
    },
    right: {
      id: "003",
      name: "Bob Johnson",
      leftCount: 10,
      rightCount: 6,
      volume: 6000,
      active: true,
      left: {
        id: "006",
        name: "Mike Davis",
        leftCount: 3,
        rightCount: 2,
        volume: 1500,
        active: true
      },
      right: {
        id: "007",
        name: "Emma Taylor",
        leftCount: 2,
        rightCount: 1,
        volume: 1000,
        active: true
      }
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm overflow-x-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Binary Network Structure</h2>
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 text-sm bg-primary-50 text-primary-600 rounded-md hover:bg-primary-100">
            <FiUsers className="inline-block mr-2" />
            View All Members
          </button>
        </div>
      </div>
      
      <div className="min-w-[1000px] flex justify-center pt-6">
        <BinaryTreeNode node={treeData} />
      </div>
    </div>
  );
};

export default BinaryTree;