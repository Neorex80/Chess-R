import React from 'react';
import { motion } from 'framer-motion';
import { Home, Settings } from 'lucide-react';

interface NavigationProps {
  onNavigate: (page: 'home' | 'settings') => void;
  currentPage: 'home' | 'settings';
}

export const Navigation: React.FC<NavigationProps> = ({ onNavigate, currentPage }) => {
  return (
    <div className="fixed top-4 right-4 flex gap-2">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onNavigate('home')}
        className={`p-2 rounded-lg ${
          currentPage === 'home' ? 'bg-white/20' : 'bg-white/10'
        } hover:bg-white/30`}
      >
        <Home className="w-5 h-5" />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onNavigate('settings')}
        className={`p-2 rounded-lg ${
          currentPage === 'settings' ? 'bg-white/20' : 'bg-white/10'
        } hover:bg-white/30`}
      >
        <Settings className="w-5 h-5" />
      </motion.button>
    </div>
  );
};