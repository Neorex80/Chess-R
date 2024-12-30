import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

interface TimeControlProps {
  timeWhite: number;
  timeBlack: number;
  isWhiteTurn: boolean;
}

export const TimeControl: React.FC<TimeControlProps> = ({
  timeWhite,
  timeBlack,
  isWhiteTurn,
}) => {
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex justify-between items-center gap-4">
      <motion.div
        className={`flex items-center gap-2 p-2 rounded-lg ${
          isWhiteTurn ? 'bg-white/20' : 'bg-white/10'
        }`}
        animate={{ scale: isWhiteTurn ? 1.05 : 1 }}
      >
        <Clock className="w-5 h-5" />
        <span className="font-mono text-xl">{formatTime(timeWhite)}</span>
      </motion.div>
      
      <motion.div
        className={`flex items-center gap-2 p-2 rounded-lg ${
          !isWhiteTurn ? 'bg-white/20' : 'bg-white/10'
        }`}
        animate={{ scale: !isWhiteTurn ? 1.05 : 1 }}
      >
        <Clock className="w-5 h-5" />
        <span className="font-mono text-xl">{formatTime(timeBlack)}</span>
      </motion.div>
    </div>
  );
};