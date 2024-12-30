import React from 'react';
import { motion } from 'framer-motion';
import { Analysis, GameStats } from '../types/game';
import { TrendingUp, AlertTriangle, Clock, Book } from 'lucide-react';

interface GameAnalysisProps {
  analysis: Analysis;
  stats: GameStats;
}

export const GameAnalysis: React.FC<GameAnalysisProps> = ({ analysis, stats }) => {
  return (
    <div className="space-y-4 p-4 bg-black/30 rounded-lg">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Analysis</h3>
        <span className="text-sm opacity-70">Depth: {analysis.depth}</span>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-cyan-400" />
          <div>
            <div className="text-sm opacity-70">Accuracy</div>
            <div className="font-semibold">{stats.accuracy.toFixed(1)}%</div>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-yellow-400" />
          <div>
            <div className="text-sm opacity-70">Mistakes</div>
            <div className="font-semibold">{stats.mistakes}</div>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-purple-400" />
          <div>
            <div className="text-sm opacity-70">Avg Time</div>
            <div className="font-semibold">{stats.averageTime}s</div>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Book className="w-5 h-5 text-green-400" />
          <div>
            <div className="text-sm opacity-70">Opening</div>
            <div className="font-semibold">{stats.openingName}</div>
          </div>
        </div>
      </div>
      
      <div className="mt-4">
        <div className="text-sm opacity-70">Best continuation:</div>
        <div className="font-mono text-sm mt-1">
          {analysis.variation.slice(0, 3).join(' ')}
        </div>
      </div>
    </div>
  );
};