import React, { useState, useEffect } from 'react';
import { View } from './types';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Dashboard from './components/Dashboard';
import Team from './components/Team';
import Settings from './components/Settings';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('dashboard');
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'team':
        return <Team />;
      case 'settings':
        return <Settings />;
      default:
        return (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center">
            <h2 className="text-4xl font-black tracking-tighter text-on-surface uppercase mb-4">Under Construction</h2>
            <p className="text-on-surface-variant max-w-md">We're working hard to bring you the {currentView} module. Stay tuned for updates!</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background transition-colors duration-500 selection:bg-primary/30 selection:text-primary">
      <Sidebar 
        currentView={currentView} 
        onViewChange={setCurrentView} 
        isDark={isDark} 
      />
      
      <TopBar 
        currentView={currentView} 
        isDark={isDark} 
        onToggleTheme={() => setIsDark(!isDark)} 
      />

      <main className="lg:ml-64 pt-28 px-6 lg:px-12 pb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
