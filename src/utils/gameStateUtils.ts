import { Piece, Position } from '../types/chess';
import { getValidMoves } from './moveValidation';

export const findKing = (board: (Piece | null)[][], color: 'white' | 'black'): Position | null => {
  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      const piece = board[y][x];
      if (piece && piece.type === 'king' && piece.color === color) {
        return { x, y };
      }
    }
  }
  return null;
};

export const isKingInCheck = (board: (Piece | null)[][], kingColor: 'white' | 'black'): boolean => {
  const kingPos = findKing(board, kingColor);
  if (!kingPos) return false;

  // Check if any opponent piece can attack the king
  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      const piece = board[y][x];
      if (piece && piece.color !== kingColor) {
        const moves = getValidMoves({ x, y }, piece, board, true);
        if (moves.some(move => move.x === kingPos.x && move.y === kingPos.y)) {
          return true;
        }
      }
    }
  }
  return false;
};

export const isCheckmate = (board: (Piece | null)[][], kingColor: 'white' | 'black'): boolean => {
  if (!isKingInCheck(board, kingColor)) return false;

  // Check if any move can get out of check
  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      const piece = board[y][x];
      if (piece && piece.color === kingColor) {
        const moves = getValidMoves({ x, y }, piece, board);
        if (moves.length > 0) return false;
      }
    }
  }
  return true;
};

export const validateMove = (
  from: Position,
  to: Position,
  board: (Piece | null)[][],
  piece: Piece
): boolean => {
  const targetPiece = board[to.y][to.x];
  if (targetPiece?.type === 'king') return false;

  const newBoard = board.map(row => [...row]);
  newBoard[to.y][to.x] = newBoard[from.y][from.x];
  newBoard[from.y][from.x] = null;

  return !isKingInCheck(newBoard, piece.color);
};