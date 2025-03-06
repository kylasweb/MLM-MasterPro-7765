import React from 'react';
import { motion } from 'framer-motion';
import { FiLoader } from 'react-icons/fi';

export const PageLoader = () => (
  <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className="text-primary-600"
    >
      <FiLoader className="w-12 h-12" />
    </motion.div>
  </div>
);

export const ContentLoader = ({ height = "400px" }) => (
  <div
    className="w-full bg-gray-50 rounded-lg animate-pulse"
    style={{ height }}
  />
);

export const TableLoader = ({ rows = 5 }) => (
  <div className="space-y-4">
    {[...Array(rows)].map((_, i) => (
      <div key={i} className="h-16 bg-gray-50 rounded-lg animate-pulse" />
    ))}
  </div>
);

export const CardLoader = () => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <div className="animate-pulse space-y-4">
      <div className="h-6 bg-gray-100 rounded w-3/4" />
      <div className="space-y-2">
        <div className="h-4 bg-gray-100 rounded" />
        <div className="h-4 bg-gray-100 rounded w-5/6" />
      </div>
      <div className="h-10 bg-gray-100 rounded" />
    </div>
  </div>
);

export const ButtonLoader = ({ text = "Loading..." }) => (
  <div className="flex items-center justify-center">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className="mr-2"
    >
      <FiLoader className="w-4 h-4" />
    </motion.div>
    <span>{text}</span>
  </div>
);