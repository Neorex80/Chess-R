import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Target, Clock, Brain, RotateCcw } from 'lucide-react';
import { GameStats } from '../../types/game';

interface GameEndScreenProps {
  winner: 'white' | 'black' | 'draw';
  stats: GameStats;
  onPlayAgain: () => void;
  onAnalyze: () => void;
}

export const GameEndScreen: React.FC<GameEndScreenProps> = ({
  winner,
  stats,
  onPlayAgain,
  onAnalyze,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full max-w-lg bg-zinc-900/90 rounded-xl border border-white/10 overflow-hidden"
      >
        <div className="p-6 text-center space-y-4">
          <div className={`inline-flex p-4 rounded-full ${
            winner === 'white' ? 'bg-cyan-500/20' :
            winner === 'black' ? 'bg-purple-500/20' :
            'bg-gray-500/20'
          }`}>
            <Trophy className={`w-12 h-12 ${
              winner === 'white' ? 'text-cyan-400' :
              winner === 'black' ? 'text-purple-400' :
              'text-gray-400'
            }`} />
          </div>
          
          <h2 className="text-2xl font-bold">
            {winner === 'white' ? 'Victory!' :
             winner === 'black' ? 'Defeat!' :
             'Draw!'}
          </h2>
          
          <p className="text-gray-400">
            {winner === 'white' ? 'Congratulations! You won the game.' :
             winner === 'black' ? 'Better luck next time!' :
             'The game ended in a draw.'}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 p-6 bg-black/20">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Target className="w-5 h-5 text-cyan-400" />
              <div>
                <div className="text-sm text-gray-400">Accuracy</div>
                <div className="font-bold">{stats.accuracy.toFixed(1)}%</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Brain className="w-5 h-5 text-purple-400" />
              <div>
                <div className="text-sm text-gray-400">Mistakes</div>
                <div className="font-bold">{stats.mistakes}</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-green-400" />
              <div>
                <div className="text-sm text-gray-400">Avg. Time/Move</div>
                <div className="font-bold">{stats.averageTime}s</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Trophy className="w-5 h-5 text-yellow-400" />
              <div>
                <div className="text-sm text-gray-400">Opening</div>
                <div className="font-bold truncate">{stats.openingName}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 bg-black/40 flex gap-4">
          <motion.button
            onClick={onPlayAgain}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-cyan-500 
                     rounded-lg font-semibold hover:bg-cyan-400 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <RotateCcw className="w-5 h-5" />
            Play Again
          </motion.button>
          
          <motion.button
            onClick={onAnalyze}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 
                     bg-white/10 rounded-lg font-semibold hover:bg-white/20 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Brain className="w-5 h-5" />
            Analyze Game
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};