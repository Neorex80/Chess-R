import React from 'react';
import { motion } from 'framer-motion';
import { themes } from '../../utils/themes';

const initialPieces = [
  ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
  ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
  Array(8).fill(null),
  Array(8).fill(null),
  Array(8).fill(null),
  Array(8).fill(null),
  ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
  ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖'],
];

export const PreviewBoard = () => {
  const theme = themes.cyber;
  
  return (
    <motion.div 
      className="relative"
      initial="initial"
      animate="animate"
    >
      <div className={`grid grid-cols-8 gap-0.5 border-4 ${theme.board.border} rounded-lg overflow-hidden`}>
        {initialPieces.map((row, rowIndex) =>
          row.map((piece, colIndex) => {
            const isLight = (rowIndex + colIndex) % 2 === 0;
            const isPieceBlack = rowIndex < 2;
            
            return (
              <motion.div
                key={`${rowIndex}-${colIndex}`}
                className={`aspect-square ${isLight ? theme.board.light : theme.board.dark}
                          flex items-center justify-center`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: (rowIndex * 8 + colIndex) * 0.01 }}
              >
                {piece && (
                  <motion.div
                    className={`text-xl sm:text-2xl ${
                      isPieceBlack ? theme.pieces.black : theme.pieces.white
                    }`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: (rowIndex * 8 + colIndex) * 0.02 + 0.3 }}
                  >
                    {piece}
                  </motion.div>
                )}
              </motion.div>
            );
          })
        )}
      </div>
      
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-500/20"
        animate={{ 
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.02, 1],
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
    </motion.div>
  );
};