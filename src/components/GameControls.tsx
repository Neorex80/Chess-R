import React from 'react';
import { motion } from 'framer-motion';
import { RotateCcw, Save, Download, Play, Pause } from 'lucide-react';

interface GameControlsProps {
  onTakeback: () => void;
  onSave: () => void;
  onLoad: () => void;
  onAnalyze: () => void;
  isPaused: boolean;
  onTogglePause: () => void;
}

export const GameControls: React.FC<GameControlsProps> = ({
  onTakeback,
  onSave,
  onLoad,
  onAnalyze,
  isPaused,
  onTogglePause,
}) => {
  return (
    <div className="flex gap-2">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="p-2 bg-white/10 rounded-lg hover:bg-white/20"
        onClick={onTakeback}
      >
        <RotateCcw className="w-5 h-5" />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="p-2 bg-white/10 rounded-lg hover:bg-white/20"
        onClick={onSave}
      >
        <Save className="w-5 h-5" />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="p-2 bg-white/10 rounded-lg hover:bg-white/20"
        onClick={onLoad}
      >
        <Download className="w-5 h-5" />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="p-2 bg-white/10 rounded-lg hover:bg-white/20"
        onClick={onTogglePause}
      >
        {isPaused ? <Play className="w-5 h-5" /> : <Pause className="w-5 h-5" />}
      </motion.button>
    </div>
  );
};