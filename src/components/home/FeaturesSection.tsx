import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Trophy, Cpu } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Advanced AI Engine',
    description: 'Challenge our sophisticated chess AI with multiple difficulty levels.',
    color: 'from-cyan-400 to-blue-500'
  },
  {
    icon: Trophy,
    title: 'Skill Levels',
    description: 'From beginner to grandmaster, find the perfect challenge for your skill level.',
    color: 'from-purple-400 to-pink-500'
  },
  {
    icon: Cpu,
    title: 'Real-time Analysis',
    description: 'Get instant feedback and learn from every move with our analysis tools.',
    color: 'from-green-400 to-emerald-500'
  }
];

export const FeaturesSection = () => {
  return (
    <div className="py-24 bg-black/30">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">AI-Powered Chess Experience</h2>
          <p className="text-xl text-gray-400">Challenge yourself against our advanced chess engine</p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 
                           rounded-xl blur-lg group-hover:opacity-75 transition-opacity" />
              <div className="relative p-8 rounded-xl bg-black/50 border border-white/10 backdrop-blur-sm">
                <div className={`inline-block p-3 rounded-lg bg-gradient-to-r ${feature.color} mb-4`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};