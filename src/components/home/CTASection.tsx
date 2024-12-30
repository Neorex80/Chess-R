import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin } from 'lucide-react';

interface CTASectionProps {
  onPlayClick: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onPlayClick }) => {
  return (
    <div className="py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="max-w-3xl mx-auto text-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8">
            Join thousands of players and start improving your chess game today.
          </p>
          
          <motion.button
            onClick={onPlayClick}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-purple-500 
                     rounded-lg font-semibold text-base sm:text-lg group flex items-center 
                     gap-2 mx-auto hover:from-cyan-400 hover:to-purple-400"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <div className="pt-12 flex items-center justify-center gap-6 text-gray-400">
            <a 
              href="https://github.com/Neorex80" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/devrex/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <span className="text-sm">Made by Rushikesh Pawar</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}