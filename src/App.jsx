import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Challenges from './components/sections/Challenges';
import HowItWorks from './components/sections/HowItWorks';
import Testimonials from './components/sections/Testimonials';
import Solutions from './components/sections/Solutions';
import CTA from './components/sections/CTA';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="bg-white text-[#4c4c4c] font-exo overflow-x-hidden w-full">
      <Header />
      <Hero />
      <Challenges />
      <HowItWorks />
      <Testimonials />
      <Solutions />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
