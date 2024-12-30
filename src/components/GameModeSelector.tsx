import React from 'react';
import { GameMode } from '../types/chess';
import { motion } from 'framer-motion';
import { Users, Cpu, Zap } from 'lucide-react';

interface GameModeSelectorProps {
  onSelectMode: (mode: GameMode) => void;
}

export const GameModeSelector: React.FC<GameModeSelectorProps> = ({ onSelectMode }) => {
  const modes = [
    { mode: 'pvp', label: 'Player vs Player', icon: Users, color: 'from-blue-500 to-indigo-500' },
    { mode: 'easy', label: 'vs Computer (Easy)', icon: Cpu, color: 'from-green-500 to-emerald-500' },
    { mode: 'medium', label: 'vs Computer (Medium)', icon: Cpu, color: 'from-yellow-500 to-orange-500' },
    { mode: 'hard', label: 'vs Computer (Hard)', icon: Zap, color: 'from-red-500 to-rose-500' },
  ] as const;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
      {modes.map(({ mode, label, icon: Icon, color }) => (
        <motion.button
          key={mode}
          onClick={() => onSelectMode(mode)}
          className={`relative group px-6 py-4 rounded-xl bg-black/50 backdrop-blur-sm
                   border border-white/10 overflow-hidden`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 
                        group-hover:opacity-20 transition-opacity`} />
          <div className="relative flex items-center gap-3">
            <Icon className="w-6 h-6" />
            <span className="text-lg font-medium">{label}</span>
          </div>
          <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                        opacity-0 group-hover:opacity-100 blur-lg transition-opacity" />
        </motion.button>
      ))}
    </div>
  );
};