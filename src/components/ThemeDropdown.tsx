import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Palette } from 'lucide-react';
import { themes } from '../utils/themes';
import { ThemeType } from '../types/theme';

interface ThemeDropdownProps {
  currentTheme: ThemeType;
  onThemeChange: (theme: ThemeType) => void;
}

export const ThemeDropdown: React.FC<ThemeDropdownProps> = ({
  currentTheme,
  onThemeChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg
                 hover:bg-white/20 transition-colors border border-white/20"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Palette className="w-5 h-5" />
        <span>{themes[currentTheme].name}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 mt-2 w-48 bg-black/80 backdrop-blur-xl
                     rounded-lg shadow-xl border border-white/20 overflow-hidden z-50"
          >
            {Object.entries(themes).map(([key, theme]) => (
              <motion.button
                key={key}
                onClick={() => {
                  onThemeChange(key as ThemeType);
                  setIsOpen(false);
                }}
                className={`flex items-center gap-3 w-full px-4 py-3 hover:bg-white/10
                         transition-colors ${currentTheme === key ? 'bg-white/20' : ''}`}
                whileHover={{ x: 5 }}
              >
                <div className={`w-4 h-4 rounded-full ${theme.board.dark}`} />
                <span className="text-white">{theme.name}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};