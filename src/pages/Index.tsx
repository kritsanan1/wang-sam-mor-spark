
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AttractionsSection from '@/components/AttractionsSection';
import FoodSection from '@/components/FoodSection';
import CultureSection from '@/components/CultureSection';
import EventsSection from '@/components/EventsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import ExampleWelcomeSection from '@/components/ExampleWelcomeSection';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <HeroSection />
      <ExampleWelcomeSection />
      <AttractionsSection />
      <FoodSection />
      <CultureSection />
      <EventsSection />
      <TestimonialsSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
