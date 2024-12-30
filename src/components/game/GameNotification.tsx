import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, AlertCircle, Flag, Check } from 'lucide-react';

type NotificationType = 'check' | 'checkmate' | 'draw' | 'win' | 'lose';

interface GameNotificationProps {
  type: NotificationType;
  show: boolean;
  onClose: () => void;
}

export const GameNotification: React.FC<GameNotificationProps> = ({ type, show, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  const getNotificationContent = () => {
    switch (type) {
      case 'check':
        return {
          icon: AlertCircle,
          title: 'Check!',
          color: 'from-yellow-400 to-orange-500',
          message: 'Your king is in check!'
        };
      case 'checkmate':
        return {
          icon: Trophy,
          title: 'Checkmate!',
          color: 'from-purple-400 to-pink-500',
          message: 'Game Over - Checkmate!'
        };
      case 'draw':
        return {
          icon: Flag,
          title: 'Draw!',
          color: 'from-blue-400 to-indigo-500',
          message: 'Game ended in a draw'
        };
      case 'win':
        return {
          icon: Trophy,
          title: 'Victory!',
          color: 'from-green-400 to-emerald-500',
          message: 'Congratulations, you won!'
        };
      case 'lose':
        return {
          icon: Flag,
          title: 'Defeat',
          color: 'from-red-400 to-rose-500',
          message: 'Better luck next time!'
        };
    }
  };

  const content = getNotificationContent();

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
          className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
        >
          <motion.div 
            className={`bg-gradient-to-r ${content.color} px-6 py-3 rounded-lg shadow-lg
                     flex items-center gap-3 text-white`}
            whileHover={{ scale: 1.02 }}
          >
            <content.icon className="w-5 h-5" />
            <div>
              <h3 className="font-semibold text-sm">{content.title}</h3>
              <p className="text-xs opacity-90">{content.message}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};