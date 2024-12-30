import { useState, useEffect } from 'react';
import { GameState, GameStats } from '../types/game';
import { Piece, Position } from '../types/chess';
import { getInitialBoard } from '../utils/chessLogic';
import { isKingInCheck, isCheckmate } from '../utils/gameStateUtils';
import { evaluatePosition, calculateWinProbability } from '../utils/evaluationUtils';

export const useGameState = () => {
  const [board, setBoard] = useState(getInitialBoard());
  const [turn, setTurn] = useState<'white' | 'black'>('white');
  const [capturedPieces, setCapturedPieces] = useState<Piece[]>([]);
  const [winProbability, setWinProbability] = useState({ white: 50, black: 50 });
  const [gameState, setGameState] = useState<GameState>({
    isCheck: false,
    isCheckmate: false,
    isDraw: false,
    winner: null
  });

  useEffect(() => {
    const evaluation = evaluatePosition(board);
    const probability = calculateWinProbability(evaluation);
    setWinProbability(probability);

    const whiteInCheck = isKingInCheck(board, 'white');
    const blackInCheck = isKingInCheck(board, 'black');
    const whiteCheckmated = isCheckmate(board, 'white');
    const blackCheckmated = isCheckmate(board, 'black');

    setGameState({
      isCheck: whiteInCheck || blackInCheck,
      isCheckmate: whiteCheckmated || blackCheckmated,
      isDraw: false,
      winner: whiteCheckmated ? 'black' : blackCheckmated ? 'white' : null
    });
  }, [board]);

  const resetGame = () => {
    setBoard(getInitialBoard());
    setTurn('white');
    setCapturedPieces([]);
  };

  return {
    board,
    setBoard,
    turn,
    setTurn,
    capturedPieces,
    setCapturedPieces,
    winProbability,
    gameState,
    resetGame
  };
};