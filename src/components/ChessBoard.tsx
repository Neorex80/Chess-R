import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GameMode, ThemeType, Piece, Position } from '../types';
import { getValidMoves, getInitialBoard } from '../utils/chessLogic';
import { getBestMove } from '../utils/aiLogic';
import { themes } from '../utils/themes';
import { GameInfo } from './GameInfo';
import { CapturedPieces } from './CapturedPieces';
import { WinProbability } from './game/WinProbability';
import { GameNotification } from './game/GameNotification';
import { GameEndScreen } from './game/GameEndScreen';
import { getPieceSymbol } from '../utils/pieceUtils';
import { isKingInCheck, isCheckmate, validateMove } from '../utils/gameStateUtils';
import { evaluatePosition, calculateWinProbability } from '../utils/evaluationUtils';
import { calculateGameStats } from '../utils/gameAnalysis';

interface ChessBoardProps {
  gameMode: GameMode;
  theme: ThemeType;
}

export const ChessBoard: React.FC<ChessBoardProps> = ({ gameMode, theme }) => {
  const [board, setBoard] = useState(getInitialBoard());
  const [selectedSquare, setSelectedSquare] = useState<Position | null>(null);
  const [possibleMoves, setPossibleMoves] = useState<Position[]>([]);
  const [turn, setTurn] = useState<'white' | 'black'>('white');
  const [isThinking, setIsThinking] = useState(false);
  const [capturedPieces, setCapturedPieces] = useState<Piece[]>([]);
  const [winProbability, setWinProbability] = useState({ white: 50, black: 50 });
  const [gameState, setGameState] = useState({
    isCheck: false,
    isCheckmate: false,
    isDraw: false,
    winner: null as 'white' | 'black' | null
  });
  const [showNotification, setShowNotification] = useState(false);
  const [notificationType, setNotificationType] = useState<'check' | 'checkmate' | 'draw' | 'win' | 'lose'>('check');
  const [showEndScreen, setShowEndScreen] = useState(false);
  const [gameStats, setGameStats] = useState({
    accuracy: 85.5,
    mistakes: 2,
    averageTime: 15,
    openingName: 'Queen\'s Gambit'
  });

  useEffect(() => {
    if (turn === 'black' && !gameState.isCheckmate && !gameState.isDraw) {
      makeAIMove();
    }
  }, [turn]);

  useEffect(() => {
    const evaluation = evaluatePosition(board);
    const probability = calculateWinProbability(evaluation);
    setWinProbability(probability);

    // Check game state
    const whiteInCheck = isKingInCheck(board, 'white');
    const blackInCheck = isKingInCheck(board, 'black');
    const whiteCheckmated = isCheckmate(board, 'white');
    const blackCheckmated = isCheckmate(board, 'black');

    if (whiteCheckmated || blackCheckmated) {
      setGameState(prev => ({
        ...prev,
        isCheckmate: true,
        winner: whiteCheckmated ? 'black' : 'white'
      }));
      setNotificationType(whiteCheckmated ? 'lose' : 'win');
      setShowNotification(true);
      setShowEndScreen(true);
    } else if (whiteInCheck || blackInCheck) {
      setGameState(prev => ({ ...prev, isCheck: true }));
      setNotificationType('check');
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 2500);
    }
  }, [board]);

  const makeAIMove = async () => {
    setIsThinking(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const aiMove = getBestMove(board, gameMode, capturedPieces);
    if (aiMove) {
      const { from, to } = aiMove;
      const capturedPiece = board[to.y][to.x];
      const newBoard = board.map(row => [...row]);
      
      if (capturedPiece) {
        setCapturedPieces([...capturedPieces, capturedPiece]);
      }
      
      newBoard[to.y][to.x] = newBoard[from.y][from.x];
      newBoard[from.y][from.x] = null;
      setBoard(newBoard);
      setTurn('white');
    }
    setIsThinking(false);
  };

  const handleSquareClick = (position: Position) => {
    if (turn === 'black' || gameState.isCheckmate || gameState.isDraw) return;
    
    const piece = board[position.y][position.x];

    if (!selectedSquare) {
      if (piece && piece.color === turn) {
        setSelectedSquare(position);
        setPossibleMoves(getValidMoves(position, piece, board));
      }
    } else {
      const isValidMove = possibleMoves.some(
        move => move.x === position.x && move.y === position.y
      );

      if (isValidMove) {
        const capturedPiece = board[position.y][position.x];
        const newBoard = board.map(row => [...row]);
        
        if (capturedPiece) {
          setCapturedPieces([...capturedPieces, capturedPiece]);
        }
        
        newBoard[position.y][position.x] = newBoard[selectedSquare.y][selectedSquare.x];
        newBoard[selectedSquare.y][selectedSquare.x] = null;
        setBoard(newBoard);
        setTurn('black');
      }
      setSelectedSquare(null);
      setPossibleMoves([]);
    }
  };

  const handlePlayAgain = () => {
    setBoard(getInitialBoard());
    setCapturedPieces([]);
    setTurn('white');
    setGameState({
      isCheck: false,
      isCheckmate: false,
      isDraw: false,
      winner: null
    });
    setShowEndScreen(false);
  };

  const handleAnalyze = () => {
    // Implement game analysis logic
    console.log('Analyzing game...');
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-2 sm:px-4 py-4 space-y-6">
      <GameInfo turn={turn} isThinking={isThinking} gameMode={gameMode} />
      
      <WinProbability 
        whiteProb={winProbability.white} 
        blackProb={winProbability.black} 
      />
      
      <div className="space-y-4">
        <CapturedPieces pieces={capturedPieces.filter(p => p.color === 'white')} side="white" theme={theme} />
        
        <motion.div 
          className={`grid grid-cols-8 gap-0 border-4 ${themes[theme].board.border} rounded-lg overflow-hidden shadow-2xl`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {board.map((row, y) =>
            row.map((piece, x) => {
              const isSelected = selectedSquare?.x === x && selectedSquare?.y === y;
              const isLight = (x + y) % 2 === 0;
              const highlighted = possibleMoves.some(move => move.x === x && move.y === y);

              return (
                <motion.div
                  key={`${x}-${y}`}
                  className={`w-full aspect-square flex items-center justify-center relative
                    ${isLight ? themes[theme].board.light : themes[theme].board.dark}
                    ${isSelected ? `ring-4 ${themes[theme].board.selected}` : ''}
                    ${highlighted ? `ring-4 ${themes[theme].board.highlight}` : ''}
                    cursor-pointer transition-all duration-200`}
                  onClick={() => handleSquareClick({ x, y })}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <AnimatePresence mode="wait">
                    {piece && (
                      <motion.div
                        key={`piece-${x}-${y}`}
                        className={`text-4xl ${themes[theme].pieces[piece.color]}`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                      >
                        {getPieceSymbol(piece)}
                      </motion.div>
                    )}
                  </AnimatePresence>
                  {highlighted && !piece && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className={`w-4 h-4 rounded-full ${themes[theme].board.possible}`}
                    />
                  )}
                </motion.div>
              );
            })
          )}
        </motion.div>
        
        <CapturedPieces pieces={capturedPieces.filter(p => p.color === 'black')} side="black" theme={theme} />
      </div>

      <GameNotification
        type={notificationType}
        show={showNotification}
        onClose={() => setShowNotification(false)}
      />

      {showEndScreen && (
        <GameEndScreen
          winner={gameState.winner || 'draw'}
          stats={gameStats}
          onPlayAgain={handlePlayAgain}
          onAnalyze={handleAnalyze}
        />
      )}
    </div>
  );
};