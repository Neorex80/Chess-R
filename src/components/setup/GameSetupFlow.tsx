import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GamePreferences, GameSetupStep } from '../../types/game';
import { PreferencesStep } from './PreferencesStep';
import { ThemeSelectionStep } from './ThemeSelectionStep';
import { ThemeType } from '../../types/theme';

interface GameSetupFlowProps {
  onComplete: (preferences: GamePreferences, theme: ThemeType) => void;
  onCancel: () => void;
}

export const GameSetupFlow: React.FC<GameSetupFlowProps> = ({ onComplete, onCancel }) => {
  const [step, setStep] = useState<GameSetupStep>('preferences');
  const [preferences, setPreferences] = useState<GamePreferences>({
    difficulty: 'medium',
    soundEnabled: true,
    showHints: true,
  });
  const [selectedTheme, setSelectedTheme] = useState<ThemeType>('cyber');

  const handleNext = () => {
    if (step === 'preferences') {
      setStep('theme');
    } else if (step === 'theme') {
      onComplete(preferences, selectedTheme);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 z-50">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-2xl bg-zinc-900/90 rounded-2xl border border-white/10 
                 overflow-hidden max-h-[90vh]"
      >
        <AnimatePresence mode="wait">
          {step === 'preferences' ? (
            <PreferencesStep
              key="preferences"
              preferences={preferences}
              onPreferencesChange={setPreferences}
              onNext={handleNext}
              onCancel={onCancel}
            />
          ) : (
            <ThemeSelectionStep
              key="theme"
              selectedTheme={selectedTheme}
              onThemeChange={setSelectedTheme}
              onNext={handleNext}
              onBack={() => setStep('preferences')}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};