import React from 'react';
import { motion } from 'framer-motion';

export const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
      <motion.div 
        className="relative"
        animate={{ 
          rotate: 360,
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="w-16 h-16 text-6xl">♟</div>
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
      <motion.p
        className="absolute mt-24 text-gray-400"
        animate={{ 
          opacity: [0.5, 1, 0.5],
        }}
        transition={{ 
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        Loading...
      </motion.p>
    </div>
  );
};