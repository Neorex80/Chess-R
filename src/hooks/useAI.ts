import { useState } from 'react';
import { GameMode, Piece, Position } from '../types/chess';
import { getBestMove } from '../utils/aiLogic';

export const useAI = () => {
  const [isThinking, setIsThinking] = useState(false);

  const makeMove = async (
    board: (Piece | null)[][],
    gameMode: GameMode,
    capturedPieces: Piece[]
  ) => {
    setIsThinking(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const move = getBestMove(board, gameMode, capturedPieces);
    setIsThinking(false);
    
    return move;
  };

  return {
    isThinking,
    makeMove
  };
};