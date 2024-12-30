import { Piece, Position, PieceType, PieceColor } from '../types/chess';
import {
  getPawnMoves,
  getRookMoves,
  getKnightMoves,
  getBishopMoves,
  getQueenMoves,
  getKingMoves
} from './moveValidation';

export const getValidMoves = (
  from: Position,
  piece: Piece,
  board: (Piece | null)[][]
): Position[] => {
  switch (piece.type) {
    case 'pawn':
      return getPawnMoves(from, piece, board);
    case 'rook':
      return getRookMoves(from, piece, board);
    case 'knight':
      return getKnightMoves(from, piece, board);
    case 'bishop':
      return getBishopMoves(from, piece, board);
    case 'queen':
      return getQueenMoves(from, piece, board);
    case 'king':
      return getKingMoves(from, piece, board);
    default:
      return [];
  }
};

export const getInitialBoard = (): (Piece | null)[][] => {
  const board: (Piece | null)[][] = Array(8).fill(null).map(() => Array(8).fill(null));
  
  // Set up pawns
  for (let i = 0; i < 8; i++) {
    board[1][i] = { type: 'pawn', color: 'black' };
    board[6][i] = { type: 'pawn', color: 'white' };
  }

  // Set up other pieces
  const setupRow = (row: number, color: PieceColor) => {
    const pieces: PieceType[] = ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook'];
    pieces.forEach((type, col) => {
      board[row][col] = { type, color };
    });
  };

  setupRow(0, 'black');
  setupRow(7, 'white');

  return board;
};