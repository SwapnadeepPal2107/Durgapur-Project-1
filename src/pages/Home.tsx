import React from 'react';
import { HeroSlider } from '../components/HeroSlider';
import { ServicesSection } from '../components/ServicesSection';
import { ValuesSection } from '../components/ValuesSection';
export function Home() {
  return <div className="pt-[120px]">
      <HeroSlider />
      <ServicesSection />
      <ValuesSection />
    </div>;
}