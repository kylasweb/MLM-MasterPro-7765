import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useToast } from '../../contexts/ToastContext';
import { FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

const Toast = () => {
  const { toast } = useToast();

  const icons = {
    success: <FiCheckCircle className="w-5 h-5 text-green-500" />,
    error: <FiAlertCircle className="w-5 h-5 text-red-500" />
  };

  return (
    <AnimatePresence>
      {toast.show && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 right-4 z-50"
        >
          <div className={`flex items-center p-4 rounded-lg shadow-lg bg-white border-l-4 ${
            toast.type === 'success' ? 'border-green-500' : 'border-red-500'
          }`}>
            {icons[toast.type]}
            <span className="ml-3 text-gray-800">{toast.message}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;