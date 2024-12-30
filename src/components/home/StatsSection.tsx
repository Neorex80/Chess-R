import React from 'react';
import { motion } from 'framer-motion';
import { Users, Clock, Award, BookOpen } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '2M+',
    label: 'Active Players',
    color: 'text-cyan-400'
  },
  {
    icon: Clock,
    value: '10M+',
    label: 'Games Played',
    color: 'text-purple-400'
  },
  {
    icon: Award,
    value: '50K+',
    label: 'Tournaments',
    color: 'text-pink-400'
  },
  {
    icon: BookOpen,
    value: '100K+',
    label: 'Puzzles',
    color: 'text-green-400'
  }
];

export const StatsSection = () => {
  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="inline-block mb-4">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};