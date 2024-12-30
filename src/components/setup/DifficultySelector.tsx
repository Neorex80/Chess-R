import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Zap, Trophy, Crown } from 'lucide-react';
import { GameMode } from '../../types/chess';

interface DifficultySelectorProps {
  selectedMode: GameMode;
  onModeSelect: (mode: GameMode) => void;
}

const difficultyLevels = [
  {
    mode: 'easy' as GameMode,
    label: 'Beginner',
    icon: Brain,
    color: 'from-green-400 to-emerald-500',
    description: 'Perfect for learning chess basics',
    rating: '800-1200'
  },
  {
    mode: 'medium' as GameMode,
    label: 'Intermediate',
    icon: Trophy,
    color: 'from-blue-400 to-indigo-500',
    description: 'Balanced gameplay with moderate challenge',
    rating: '1200-1600'
  },
  {
    mode: 'hard' as GameMode,
    label: 'Advanced',
    icon: Zap,
    color: 'from-purple-400 to-pink-500',
    description: 'Challenging gameplay with sophisticated strategies',
    rating: '1600-2000'
  },
  {
    mode: 'grandmaster' as GameMode,
    label: 'Grandmaster',
    icon: Crown,
    color: 'from-red-400 to-rose-500',
    description: 'Expert level gameplay',
    rating: '2000+'
  }
];

export const DifficultySelector: React.FC<DifficultySelectorProps> = ({
  selectedMode,
  onModeSelect
}) => {
  const [hoveredMode, setHoveredMode] = useState<GameMode | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {difficultyLevels.map(({ mode, label, icon: Icon, color, description, rating }) => (
        <motion.button
          key={mode}
          onClick={() => onModeSelect(mode)}
          onMouseEnter={() => setHoveredMode(mode)}
          onMouseLeave={() => setHoveredMode(null)}
          className={`relative group p-4 rounded-xl bg-black/50 backdrop-blur-sm
                   border ${selectedMode === mode ? 'border-cyan-400' : 'border-white/10'} 
                   overflow-hidden`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 
                        group-hover:opacity-20 transition-opacity`} />
          
          <div className="relative flex items-center gap-3">
            <div className={`p-2 rounded-lg bg-gradient-to-r ${color}`}>
              <Icon className="w-5 h-5 text-white" />
            </div>
            <div className="text-left flex-1 min-w-0">
              <h3 className="text-base font-semibold truncate">{label}</h3>
              <p className="text-xs text-gray-400">Rating: {rating}</p>
            </div>
          </div>

          <AnimatePresence>
            {hoveredMode === mode && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute inset-x-0 bottom-0 p-2 bg-black/90 text-xs text-gray-300"
              >
                {description}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      ))}
    </div>
  );
};