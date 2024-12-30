import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Crown, Github, Linkedin } from 'lucide-react';
import { PreviewBoard } from './PreviewBoard';

interface HeroSectionProps {
  onPlayClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onPlayClick }) => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10" />
      
      <div className="container mx-auto px-4 py-6 md:py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div 
            className="space-y-6 md:space-y-8 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Challenge Our AI
              </span>
              <br />
              <span className="text-white">Master Chess</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xl mx-auto md:mx-0">
              Test your skills against our advanced chess AI. Multiple difficulty levels from beginner to grandmaster.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <motion.button
                onClick={onPlayClick}
                className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-lg 
                         font-semibold hover:from-cyan-400 hover:to-cyan-500 transition-all flex items-center 
                         justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Play Now
                <Zap className="w-5 h-5" />
              </motion.button>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg">
                  <Brain className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm sm:text-base">Advanced AI</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg">
                  <Crown className="w-5 h-5 text-purple-400" />
                  <span className="text-sm sm:text-base">4 Difficulty Levels</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 justify-center md:justify-start pt-6 md:pt-8">
              <a 
                href="https://github.com/Neorex80" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/devrex/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <span className="text-sm sm:text-base text-gray-400">Made by Rushikesh Pawar</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:block"
          >
            <PreviewBoard />
          </motion.div>

          {/* Mobile Preview Board */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:hidden w-full max-w-[300px] mx-auto"
          >
            <PreviewBoard />
          </motion.div>
        </div>
      </div>
    </div>
  );
};