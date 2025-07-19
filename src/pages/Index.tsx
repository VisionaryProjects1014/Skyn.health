import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import HowItWorksSection from '../components/HowItWorksSection';
import AboutSection from '../components/AboutSection';
import FoundersSection from '../components/FoundersSection';
import BlogSection from '../components/BlogSection';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navigation />
      <main>
        <HeroSection />
        <div id="how-it-works">
          <HowItWorksSection />
        </div>
        <div id="about">
          <AboutSection />
        </div>
        <div id="founders">
          <FoundersSection />
        </div>
        <div id="blog">
          <BlogSection />
        </div>
        <FAQSection />
        <div id="contact">
          <CTASection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
