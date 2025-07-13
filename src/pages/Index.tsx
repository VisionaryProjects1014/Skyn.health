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
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <AboutSection />
        <FoundersSection />
        <BlogSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
