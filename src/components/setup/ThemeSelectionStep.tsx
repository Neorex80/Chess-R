import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Palette } from 'lucide-react';
import { themes } from '../../utils/themes';
import { ThemeType } from '../../types/theme';

interface ThemeSelectionStepProps {
  selectedTheme: ThemeType;
  onThemeChange: (theme: ThemeType) => void;
  onNext: () => void;
  onBack: () => void;
}

export const ThemeSelectionStep: React.FC<ThemeSelectionStepProps> = ({
  selectedTheme,
  onThemeChange,
  onNext,
  onBack,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6 max-h-[90vh] overflow-y-auto px-2 sm:px-4 md:px-8 pb-20 md:pb-24"
    >
      <div className="flex items-center gap-4 sticky top-0 bg-zinc-900/90 backdrop-blur-sm 
                    py-4 px-2 sm:px-4 z-10 -mx-2 sm:-mx-4 md:-mx-8">
        <motion.button
          onClick={onBack}
          className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </motion.button>
        <h2 className="text-xl md:text-2xl font-bold">Choose Your Theme</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {Object.entries(themes).map(([key, theme]) => (
          <motion.button
            key={key}
            onClick={() => onThemeChange(key as ThemeType)}
            className={`relative group p-4 rounded-xl bg-black/50 backdrop-blur-sm
                     border ${selectedTheme === key ? 'border-cyan-400' : 'border-white/10'} 
                     overflow-hidden`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className={`absolute inset-0 ${theme.background} opacity-20 group-hover:opacity-30 
                          transition-opacity`} />
            
            <div className="relative space-y-3">
              <div className="flex items-center gap-2">
                <div className={`p-2 rounded-lg ${theme.board.dark}`}>
                  <Palette className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-base font-semibold">{theme.name}</h3>
              </div>
              
              <div className="grid grid-cols-8 gap-0.5 rounded-lg overflow-hidden">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className={`aspect-square ${i % 2 === 0 ? theme.board.light : theme.board.dark}`}
                  />
                ))}
              </div>
              
              <div className="flex justify-center gap-4 p-2 rounded-lg bg-black/20">
                <div className={`text-2xl ${theme.pieces.white}`}>♔</div>
                <div className={`text-2xl ${theme.pieces.black}`}>♚</div>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-zinc-900/90 backdrop-blur-sm py-4 px-4 
                    flex justify-end border-t border-white/10">
        <motion.button
          onClick={onNext}
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 
                   bg-cyan-500 rounded-lg font-semibold hover:bg-cyan-400 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Game
          <ChevronRight className="w-5 h-5" />
        </motion.button>
      </div>
    </motion.div>
  );
};