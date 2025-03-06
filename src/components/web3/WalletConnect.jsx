import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiWifi, FiLink, FiCopy } from 'react-icons/fi';
import Web3 from 'web3';
import WalletConnectProvider from "@walletconnect/web3-provider";

const WalletConnect = () => {
  const [account, setAccount] = useState(null);
  const [provider, setProvider] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const initWalletConnect = async () => {
    try {
      const provider = new WalletConnectProvider({
        infuraId: process.env.REACT_APP_INFURA_ID,
        rpc: {
          1: `https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_ID}`,
          56: "https://bsc-dataseed.binance.org/",
        },
      });

      await provider.enable();
      setProvider(provider);

      const web3 = new Web3(provider);
      const accounts = await web3.eth.getAccounts();
      setAccount(accounts[0]);

      provider.on("accountsChanged", (accounts) => {
        setAccount(accounts[0]);
      });

      provider.on("chainChanged", () => {
        window.location.reload();
      });

      provider.on("disconnect", () => {
        setAccount(null);
        setProvider(null);
      });
    } catch (err) {
      setError(err.message);
    }
  };

  const disconnectWallet = async () => {
    if (provider) {
      await provider.disconnect();
      setAccount(null);
      setProvider(null);
    }
  };

  const copyAddress = () => {
    navigator.clipboard.writeText(account);
    // Show toast notification
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-lg shadow-sm"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Wallet Connection</h3>
        <div className="flex items-center">
          <FiWifi className={`w-5 h-5 ${account ? 'text-green-500' : 'text-gray-400'}`} />
        </div>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}

      {!account ? (
        <button
          onClick={initWalletConnect}
          disabled={loading}
          className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          {loading ? 'Connecting...' : 'Connect Wallet'}
        </button>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
            <div className="flex items-center">
              <FiLink className="w-5 h-5 text-gray-400 mr-2" />
              <span className="text-sm font-medium text-gray-900">
                {`${account.slice(0, 6)}...${account.slice(-4)}`}
              </span>
            </div>
            <button
              onClick={copyAddress}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <FiCopy className="w-4 h-4 text-gray-500" />
            </button>
          </div>

          <button
            onClick={disconnectWallet}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            Disconnect
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default WalletConnect;