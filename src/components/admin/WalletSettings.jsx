import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSave, FiTrash2, FiPlus } from 'react-icons/fi';
import { useToast } from '../../contexts/ToastContext';
import { useAdmin } from '../../contexts/AdminContext';

const WalletSettings = () => {
  const { showToast } = useToast();
  const { updateWalletSettings, walletSettings } = useAdmin();
  const [wallets, setWallets] = useState(walletSettings?.wallets || []);
  const [newWallet, setNewWallet] = useState({
    address: '',
    chain: 'ETH',
    label: ''
  });

  const chains = [
    { id: 'ETH', name: 'Ethereum' },
    { id: 'BSC', name: 'Binance Smart Chain' },
    { id: 'MATIC', name: 'Polygon' },
    { id: 'AVAX', name: 'Avalanche' }
  ];

  const handleAddWallet = () => {
    if (!newWallet.address || !newWallet.chain || !newWallet.label) {
      showToast('Please fill all fields', 'error');
      return;
    }

    setWallets([...wallets, { ...newWallet, id: Date.now() }]);
    setNewWallet({ address: '', chain: 'ETH', label: '' });
  };

  const handleRemoveWallet = (id) => {
    setWallets(wallets.filter(wallet => wallet.id !== id));
  };

  const handleSaveSettings = async () => {
    try {
      await updateWalletSettings({ wallets });
      showToast('Wallet settings updated successfully', 'success');
    } catch (error) {
      showToast(error.message, 'error');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-lg shadow-sm"
    >
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Wallet Settings</h2>

      <div className="space-y-6">
        {/* Add New Wallet */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Add New Wallet</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Wallet Label"
              value={newWallet.label}
              onChange={(e) => setNewWallet({ ...newWallet, label: e.target.value })}
              className="p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
            />
            <select
              value={newWallet.chain}
              onChange={(e) => setNewWallet({ ...newWallet, chain: e.target.value })}
              className="p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
            >
              {chains.map(chain => (
                <option key={chain.id} value={chain.id}>{chain.name}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Wallet Address"
              value={newWallet.address}
              onChange={(e) => setNewWallet({ ...newWallet, address: e.target.value })}
              className="p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
          <button
            onClick={handleAddWallet}
            className="mt-4 flex items-center px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700"
          >
            <FiPlus className="w-4 h-4 mr-2" />
            Add Wallet
          </button>
        </div>

        {/* Wallet List */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">Connected Wallets</h3>
          {wallets.map(wallet => (
            <div
              key={wallet.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <div>
                <p className="font-medium text-gray-900">{wallet.label}</p>
                <p className="text-sm text-gray-500">{wallet.address}</p>
                <span className="inline-block px-2 py-1 mt-1 text-xs font-medium bg-blue-100 text-blue-800 rounded">
                  {chains.find(c => c.id === wallet.chain)?.name}
                </span>
              </div>
              <button
                onClick={() => handleRemoveWallet(wallet.id)}
                className="p-2 text-red-600 hover:bg-red-50 rounded-full"
              >
                <FiTrash2 className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button
            onClick={handleSaveSettings}
            className="flex items-center px-6 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700"
          >
            <FiSave className="w-4 h-4 mr-2" />
            Save Changes
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default WalletSettings;