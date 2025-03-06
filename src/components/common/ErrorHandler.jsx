import React from 'react';
import { motion } from 'framer-motion';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

const ErrorHandler = ({ error, onClose, variant = 'toast' }) => {
  if (!error) return null;

  const variants = {
    toast: {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 50 },
      className: "fixed bottom-4 right-4 z-50 bg-red-50 border-l-4 border-red-500 p-4 rounded-lg shadow-lg"
    },
    inline: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      className: "bg-red-50 border-l-4 border-red-500 p-4 rounded-lg"
    },
    modal: {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.95 },
      className: "fixed inset-0 flex items-center justify-center z-50"
    }
  };

  const selectedVariant = variants[variant];

  if (variant === 'modal') {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <motion.div
          initial={selectedVariant.initial}
          animate={selectedVariant.animate}
          exit={selectedVariant.exit}
          className="bg-white rounded-lg p-6 max-w-md w-full mx-4"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <FiAlertCircle className="w-6 h-6 text-red-500 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">Error</h3>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
            >
              <FiXCircle className="w-6 h-6" />
            </button>
          </div>
          <p className="text-gray-600">{error.message || 'An error occurred'}</p>
          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      initial={selectedVariant.initial}
      animate={selectedVariant.animate}
      exit={selectedVariant.exit}
      className={selectedVariant.className}
    >
      <div className="flex items-center">
        <FiAlertCircle className="w-5 h-5 text-red-500 mr-2" />
        <div className="flex-1">
          <p className="text-sm text-red-700">
            {error.message || 'An error occurred'}
          </p>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="ml-4 text-red-400 hover:text-red-500"
          >
            <FiXCircle className="w-5 h-5" />
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default ErrorHandler;