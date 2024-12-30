import { GameState, Analysis, GameStats } from '../types/game';
import { evaluatePosition } from './chessEngine';

export const analyzePosition = (position: string): Analysis => {
  // Get evaluation and best moves from chess engine
  const analysis = evaluatePosition(position, 20); // depth 20
  return {
    evaluation: analysis.score,
    bestMove: analysis.bestMove,
    depth: analysis.depth,
    variation: analysis.principalVariation,
  };
};

export const calculateGameStats = (moves: string[], analyses: Analysis[]): GameStats => {
  let mistakes = 0;
  let blunders = 0;
  let totalAccuracy = 0;

  moves.forEach((move, i) => {
    const evalBefore = analyses[i].evaluation;
    const evalAfter = analyses[i + 1]?.evaluation;
    const evalDiff = Math.abs(evalBefore - evalAfter);

    if (evalDiff > 2) blunders++;
    else if (evalDiff > 1) mistakes++;
    
    const moveAccuracy = Math.max(0, 100 - (evalDiff * 20));
    totalAccuracy += moveAccuracy;
  });

  return {
    accuracy: totalAccuracy / moves.length,
    mistakes,
    blunders,
    averageTime: 0, // Calculate from move timestamps
    openingName: 'Unknown', // Get from opening book
  };
};