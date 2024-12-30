import React from 'react';
import { motion } from 'framer-motion';

export const Logo = () => {
  return (
    <motion.div 
      className="flex items-center gap-2"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <motion.div
        className="relative"
        whileHover={{ scale: 1.1 }}
      >
        <motion.div
          animate={{ 
            rotate: [0, 10, -10, 0],
            y: [0, -2, 2, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-3xl"
        >
          ♟
        </motion.div>
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-50 blur-xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </motion.div>
      <motion.h1 
        className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
        whileHover={{ scale: 1.05 }}
      >
        Chess AI
      </motion.h1>
    </motion.div>
  );
};