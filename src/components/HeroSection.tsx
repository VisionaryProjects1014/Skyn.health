import React, { useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const HeroSection = () => {
  useScrollAnimation();

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{background: 'var(--gradient-hero)'}}>
      {/* Floating Abstract Shapes */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-primary rounded-lg rotate-45 blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center">
          {/* Hero Content */}
          <div className="fade-in">
            <h1 className="hero-title mb-8 text-shadow font-heading">
              <span className="gradient-text">Next Generation</span><br />
              <span className="text-foreground">Foundational Model</span><br />
              <span className="text-foreground">for</span> <span className="gradient-text">Dermatology</span>
            </h1>
            
            <p className="body-text text-muted-foreground mb-12 max-w-3xl mx-auto">
              Revolutionary AI-powered skin diagnosis platform delivering early insights, 
              trusted guidance, and smarter skin care through advanced computer vision and medical AI.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-primary button-text"
              >
                Try the Platform
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="btn-secondary button-text"
              >
                Learn How It Works
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-12 text-sm font-medium">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Medical AI</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <span className="text-muted-foreground">Privacy First</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-primary/70 rounded-full"></div>
                <span className="text-muted-foreground">Expert Validated</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;