import React from 'react';
import { motion } from 'framer-motion';
import { Volume2, Lightbulb, ChevronRight, X } from 'lucide-react';
import { GamePreferences } from '../../types/game';
import { GameMode } from '../../types/chess';
import { DifficultySelector } from './DifficultySelector';

interface PreferencesStepProps {
  preferences: GamePreferences;
  onPreferencesChange: (prefs: GamePreferences) => void;
  onNext: () => void;
  onCancel: () => void;
}

export const PreferencesStep: React.FC<PreferencesStepProps> = ({
  preferences,
  onPreferencesChange,
  onNext,
  onCancel,
}) => {
  const handleDifficultyChange = (mode: GameMode) => {
    onPreferencesChange({ ...preferences, difficulty: mode });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6 max-h-[90vh] overflow-y-auto px-2 sm:px-4 md:px-8 pb-20 md:pb-24"
    >
      <div className="flex justify-between items-center sticky top-0 bg-zinc-900/90 backdrop-blur-sm 
                    py-4 px-2 sm:px-4 z-10 -mx-2 sm:-mx-4 md:-mx-8">
        <h2 className="text-xl md:text-2xl font-bold">Game Setup</h2>
        <button 
          onClick={onCancel} 
          className="p-2 hover:bg-white/10 rounded-lg transition-colors"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Select Difficulty</h3>
          <DifficultySelector
            selectedMode={preferences.difficulty || 'medium'}
            onModeSelect={handleDifficultyChange}
          />
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 sm:p-4 rounded-xl bg-white/5">
            <div className="flex items-center gap-3">
              <Volume2 className="w-5 h-5" />
              <span className="text-sm sm:text-base">Sound Effects</span>
            </div>
            <motion.button
              onClick={() => onPreferencesChange({
                ...preferences,
                soundEnabled: !preferences.soundEnabled
              })}
              className={`w-10 sm:w-12 h-5 sm:h-6 rounded-full p-0.5 sm:p-1 transition-colors ${
                preferences.soundEnabled ? 'bg-cyan-400' : 'bg-gray-600'
              }`}
            >
              <motion.div
                className="w-4 h-4 bg-white rounded-full"
                animate={{ x: preferences.soundEnabled ? '100%' : '0%' }}
              />
            </motion.button>
          </div>

          <div className="flex items-center justify-between p-3 sm:p-4 rounded-xl bg-white/5">
            <div className="flex items-center gap-3">
              <Lightbulb className="w-5 h-5" />
              <span className="text-sm sm:text-base">Show Hints</span>
            </div>
            <motion.button
              onClick={() => onPreferencesChange({
                ...preferences,
                showHints: !preferences.showHints
              })}
              className={`w-10 sm:w-12 h-5 sm:h-6 rounded-full p-0.5 sm:p-1 transition-colors ${
                preferences.showHints ? 'bg-cyan-400' : 'bg-gray-600'
              }`}
            >
              <motion.div
                className="w-4 h-4 bg-white rounded-full"
                animate={{ x: preferences.showHints ? '100%' : '0%' }}
              />
            </motion.button>
          </div>
        </div>
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
          Next
          <ChevronRight className="w-5 h-5" />
        </motion.button>
      </div>
    </motion.div>
  );
};