import React from 'react';
import { motion } from 'framer-motion';
import { ThemeSelector } from './ThemeSelector';
import { GamePreferences } from './GamePreferences';
import { ThemeType } from '../../types/theme';

interface SettingsPageProps {
  currentTheme: ThemeType;
  onThemeChange: (theme: ThemeType) => void;
}

export const SettingsPage: React.FC<SettingsPageProps> = ({
  currentTheme,
  onThemeChange,
}) => {
  return (
    <div className="min-h-screen p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto space-y-8"
      >
        <h1 className="text-4xl font-bold mb-8">Settings</h1>
        
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Theme Selection</h2>
          <ThemeSelector currentTheme={currentTheme} onThemeChange={onThemeChange} />
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Game Preferences</h2>
          <GamePreferences />
        </section>
      </motion.div>
    </div>
  );
};