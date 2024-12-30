import React from 'react';
import { motion } from 'framer-motion';
import { themes } from '../../utils/themes';
import { ThemeType } from '../../types/theme';

interface ThemeSelectorProps {
  currentTheme: ThemeType;
  onThemeChange: (theme: ThemeType) => void;
}

export const ThemeSelector: React.FC<ThemeSelectorProps> = ({
  currentTheme,
  onThemeChange,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {Object.entries(themes).map(([key, theme]) => (
        <motion.button
          key={key}
          onClick={() => onThemeChange(key as ThemeType)}
          className={`relative group p-6 rounded-xl ${
            currentTheme === key 
              ? 'ring-2 ring-cyan-400' 
              : 'hover:ring-2 hover:ring-white/20'
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className={`absolute inset-0 ${theme.background} rounded-xl opacity-50`} />
          
          <div className="relative space-y-4">
            <h3 className="text-xl font-semibold">{theme.name}</h3>
            
            {/* Theme Preview */}
            <div className="grid grid-cols-8 gap-1 p-2 rounded-lg bg-black/20">
              {[...Array(8)].map((_, i) => (
                <React.Fragment key={i}>
                  <div className={`aspect-square ${i % 2 === 0 ? theme.board.light : theme.board.dark}`} />
                  <div className={`aspect-square ${i % 2 === 1 ? theme.board.light : theme.board.dark}`} />
                </React.Fragment>
              ))}
            </div>
            
            {/* Piece Preview */}
            <div className="flex justify-center gap-4 p-3 rounded-lg bg-black/20">
              <div className={`text-3xl ${theme.pieces.white}`}>♔</div>
              <div className={`text-3xl ${theme.pieces.black}`}>♚</div>
            </div>
          </div>
        </motion.button>
      ))}
    </div>
  );
};