import React from 'react';
import { motion } from 'framer-motion';
import { FiShoppingBag, FiDollarSign, FiPlus } from 'react-icons/fi';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Starter Package',
      price: 499,
      commission: 50,
      description: 'Perfect for beginners to start their MLM journey',
      level: 'Bronze',
      sales: 124
    },
    {
      id: 2,
      name: 'Business Package',
      price: 999,
      commission: 100,
      description: 'Ideal for growing your network marketing business',
      level: 'Silver',
      sales: 89
    },
    {
      id: 3,
      name: 'Professional Package',
      price: 2499,
      commission: 300,
      description: 'Advanced features for professional marketers',
      level: 'Gold',
      sales: 67
    },
    {
      id: 4,
      name: 'Enterprise Package',
      price: 4999,
      commission: 700,
      description: 'Complete solution for large scale operations',
      level: 'Platinum',
      sales: 45
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Products</h2>
        <button className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors">
          <FiPlus className="w-5 h-5 mr-2" />
          Add Product
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-sm"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-primary-50 rounded-full">
                <FiShoppingBag className="w-6 h-6 text-primary-600" />
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                product.level === 'Bronze' ? 'bg-yellow-100 text-yellow-800' :
                product.level === 'Silver' ? 'bg-gray-100 text-gray-800' :
                product.level === 'Gold' ? 'bg-yellow-100 text-yellow-800' :
                'bg-purple-100 text-purple-800'
              }`}>
                {product.level}
              </span>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
            <p className="text-gray-600 text-sm mb-4">{product.description}</p>
            
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-gray-500">Price</p>
                <p className="text-lg font-bold text-gray-900">${product.price}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Commission</p>
                <p className="text-lg font-bold text-green-600">${product.commission}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Total Sales</span>
                <span className="text-sm font-medium text-gray-900">{product.sales}</span>
              </div>
            </div>

            <button className="mt-4 w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition-colors">
              View Details
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Products;