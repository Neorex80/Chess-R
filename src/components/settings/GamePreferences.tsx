import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Volume2, Zap, RotateCcw } from 'lucide-react';

const timeControls = [
  { name: 'Bullet', time: '1+0', icon: Zap },
  { name: 'Blitz', time: '3+2', icon: Clock },
  { name: 'Rapid', time: '10+5', icon: Clock },
  { name: 'Classical', time: '30+20', icon: Clock },
];

export const GamePreferences: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Time Controls */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {timeControls.map(({ name, time, icon: Icon }) => (
          <motion.button
            key={name}
            className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10
                     flex flex-col items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon className="w-6 h-6" />
            <div className="text-lg font-semibold">{name}</div>
            <div className="text-sm text-gray-400">{time}</div>
          </motion.button>
        ))}
      </div>

      {/* Sound Settings */}
      <div className="flex items-center justify-between p-4 rounded-xl bg-white/5">
        <div className="flex items-center gap-3">
          <Volume2 className="w-6 h-6" />
          <span>Sound Effects</span>
        </div>
        <motion.button
          className="w-12 h-6 bg-cyan-500/20 rounded-full p-1"
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="w-4 h-4 bg-cyan-400 rounded-full"
            layout
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        </motion.button>
      </div>

      {/* Auto-Takeback */}
      <div className="flex items-center justify-between p-4 rounded-xl bg-white/5">
        <div className="flex items-center gap-3">
          <RotateCcw className="w-6 h-6" />
          <span>Allow Takebacks</span>
        </div>
        <motion.button
          className="w-12 h-6 bg-cyan-500/20 rounded-full p-1"
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="w-4 h-4 bg-cyan-400 rounded-full"
            layout
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        </motion.button>
      </div>
    </div>
  );
};