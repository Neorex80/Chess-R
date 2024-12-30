import React from 'react';
import { motion } from 'framer-motion';

interface WinProbabilityProps {
  whiteProb: number;
  blackProb: number;
}

export const WinProbability: React.FC<WinProbabilityProps> = ({ whiteProb, blackProb }) => {
  return (
    <div className="bg-black/30 rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-4">Win Probability</h3>
      
      <div className="space-y-4">
        <div className="relative h-4 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-400 to-cyan-500"
            initial={{ width: '50%' }}
            animate={{ width: `${whiteProb}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        
        <div className="flex justify-between text-sm">
          <div>
            <span className="text-cyan-400 font-semibold">{whiteProb}%</span>
            <span className="text-gray-400 ml-2">White</span>
          </div>
          <div>
            <span className="text-purple-400 font-semibold">{blackProb}%</span>
            <span className="text-gray-400 ml-2">Black</span>
          </div>
        </div>
      </div>
    </div>
  );
};