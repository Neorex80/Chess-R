import React from 'react';
import { motion } from 'framer-motion';
import { ChessBoard } from '../ChessBoard';
import { GameControls } from '../GameControls';
import { GameMode, ThemeType } from '../../types';

interface GameLayoutProps {
  gameMode: GameMode;
  theme: ThemeType;
}

export const GameLayout: React.FC<GameLayoutProps> = ({ gameMode, theme }) => {
  return (
    <div className="min-h-screen w-full bg-zinc-950 px-2 py-4 sm:p-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-black/30 rounded-xl p-4"
        >
          <ChessBoard gameMode={gameMode} theme={theme} />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mt-4"
        >
          <GameControls
            onTakeback={() => {}}
            onSave={() => {}}
            onLoad={() => {}}
            onAnalyze={() => {}}
            isPaused={false}
            onTogglePause={() => {}}
          />
        </motion.div>
      </div>
    </div>
  );
};