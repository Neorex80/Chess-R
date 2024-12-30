import React from 'react';
import { motion } from 'framer-motion';

interface MoveHistoryProps {
  moves: string[];
  currentMove: number;
  onMoveSelect: (index: number) => void;
}

export const MoveHistory: React.FC<MoveHistoryProps> = ({
  moves,
  currentMove,
  onMoveSelect,
}) => {
  return (
    <div className="bg-black/30 rounded-lg p-4 h-full">
      <h3 className="text-lg font-semibold mb-4">Move History</h3>
      <div className="space-y-2 max-h-[400px] overflow-y-auto">
        {moves.map((move, index) => (
          <motion.button
            key={index}
            onClick={() => onMoveSelect(index)}
            className={`w-full text-left p-2 rounded ${
              currentMove === index 
                ? 'bg-cyan-500/20 text-cyan-400' 
                : 'hover:bg-white/10'
            }`}
            whileHover={{ x: 4 }}
          >
            <span className="text-gray-400 mr-2">{Math.floor(index/2 + 1)}.</span>
            {move}
          </motion.button>
        ))}
      </div>
    </div>
  );
};