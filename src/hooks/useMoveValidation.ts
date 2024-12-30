import { useState } from 'react';
import { Piece, Position } from '../types/chess';
import { getValidMoves } from '../utils/moveValidation';

export const useMoveValidation = () => {
  const [selectedSquare, setSelectedSquare] = useState<Position | null>(null);
  const [possibleMoves, setPossibleMoves] = useState<Position[]>([]);

  const selectSquare = (position: Position, piece: Piece | null, board: (Piece | null)[][]) => {
    if (piece) {
      setSelectedSquare(position);
      setPossibleMoves(getValidMoves(position, piece, board));
      return true;
    }
    return false;
  };

  const clearSelection = () => {
    setSelectedSquare(null);
    setPossibleMoves([]);
  };

  return {
    selectedSquare,
    possibleMoves,
    selectSquare,
    clearSelection
  };
};