import { Piece } from '../types/chess';

export const getPieceSymbol = (piece: Piece): string => {
  const symbols: Record<string, string> = {
    'white-king': '♔',
    'white-queen': '♕',
    'white-rook': '♖',
    'white-bishop': '♗',
    'white-knight': '♘',
    'white-pawn': '♙',
    'black-king': '♚',
    'black-queen': '♛',
    'black-rook': '♜',
    'black-bishop': '♝',
    'black-knight': '♞',
    'black-pawn': '♟'
  };
  return symbols[`${piece.color}-${piece.type}`];
};