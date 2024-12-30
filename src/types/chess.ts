export type PieceType = 'pawn' | 'rook' | 'knight' | 'bishop' | 'queen' | 'king';
export type PieceColor = 'white' | 'black';

export interface Piece {
  type: PieceType;
  color: PieceColor;
}

export type Position = {
  x: number;
  y: number;
};

export type GameMode = 'easy' | 'medium' | 'hard' | 'grandmaster';

export interface Square {
  piece: Piece | null;
  position: Position;
  isHighlighted: boolean;
  isSelected: boolean;
}