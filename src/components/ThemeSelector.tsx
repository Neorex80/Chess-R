import React from 'react';
import { themes } from '../utils/themes';
import { ThemeType } from '../types/theme';
import { motion } from 'framer-motion';

interface ThemeSelectorProps {
  currentTheme: ThemeType;
  onThemeChange: (theme: ThemeType) => void;
}

export const ThemeSelector: React.FC<ThemeSelectorProps> = ({
  currentTheme,
  onThemeChange,
}) => {
  return (
    <div className="flex gap-2">
      {Object.entries(themes).map(([key, theme]) => (
        <motion.button
          key={key}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onThemeChange(key as ThemeType)}
          className={`w-8 h-8 rounded-full border-2 ${
            currentTheme === key ? 'border-white' : 'border-transparent'
          } overflow-hidden`}
        >
          <div className={`w-full h-full ${theme.board.dark}`} />
        </motion.button>
      ))}
    </div>
  );
};