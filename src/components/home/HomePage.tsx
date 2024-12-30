import React from 'react';
import { HeroSection } from './HeroSection';
import { FeaturesSection } from './FeaturesSection';
import { StatsSection } from './StatsSection';
import { CTASection } from './CTASection';

interface HomePageProps {
  onPlayClick: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onPlayClick }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-black text-white">
      <HeroSection onPlayClick={onPlayClick} />
      <FeaturesSection />
      <StatsSection />
      <CTASection onPlayClick={onPlayClick} />
    </div>
  );
};