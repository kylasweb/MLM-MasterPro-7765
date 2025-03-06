import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { DashboardProvider } from './contexts/DashboardContext';
import { ToastProvider } from './contexts/ToastContext';
import ErrorBoundary from './components/common/ErrorBoundary';
import AppRoutes from './routes';
import Toast from './components/common/Toast';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <AuthProvider>
          <DashboardProvider>
            <ToastProvider>
              <div className="min-h-screen bg-gray-50">
                <AppRoutes />
                <Toast />
              </div>
            </ToastProvider>
          </DashboardProvider>
        </AuthProvider>
      </Router>
    </ErrorBoundary>
  );
}

export default App;