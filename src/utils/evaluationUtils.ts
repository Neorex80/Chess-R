import { Piece } from '../types/chess';

// Material values for pieces
const PIECE_VALUES = {
  pawn: 1,
  knight: 3,
  bishop: 3.25,
  rook: 5,
  queen: 9,
  king: 0 // King's value isn't counted in material evaluation
};

// Position bonus for piece placement
const POSITION_BONUS = {
  pawn: [
    [0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0],
    [0.5,  0.5,  0.5,  0.5,  0.5,  0.5,  0.5,  0.5],
    [0.1,  0.1,  0.2,  0.3,  0.3,  0.2,  0.1,  0.1],
    [0.05, 0.05, 0.1,  0.25, 0.25, 0.1,  0.05, 0.05],
    [0.0,  0.0,  0.0,  0.2,  0.2,  0.0,  0.0,  0.0],
    [0.05, -0.05,-0.1, 0.0,  0.0, -0.1, -0.05, 0.05],
    [0.05, 0.1,  0.1, -0.2, -0.2,  0.1,  0.1,  0.05],
    [0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0]
  ]
};

export const evaluatePosition = (board: (Piece | null)[][]): number => {
  let score = 0;
  let whiteMaterial = 0;
  let blackMaterial = 0;

  // Calculate material and position scores
  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      const piece = board[y][x];
      if (piece) {
        const materialValue = PIECE_VALUES[piece.type];
        const positionBonus = POSITION_BONUS[piece.type]?.[piece.color === 'white' ? y : 7-y]?.[x] || 0;
        
        if (piece.color === 'white') {
          whiteMaterial += materialValue;
          score += positionBonus;
        } else {
          blackMaterial += materialValue;
          score -= positionBonus;
        }
      }
    }
  }

  // Calculate win probability using sigmoid function
  const materialDiff = whiteMaterial - blackMaterial;
  score += materialDiff;

  return score;
};

export const calculateWinProbability = (evaluation: number): { white: number, black: number } => {
  // Convert evaluation score to win probability using sigmoid function
  const sigmoid = (x: number) => 1 / (1 + Math.exp(-x/3));
  const whiteWinProb = sigmoid(evaluation);
  
  return {
    white: Math.round(whiteWinProb * 100),
    black: Math.round((1 - whiteWinProb) * 100)
  };
};