import React from 'react';
import heroPhoneMockup from '../assets/hero-phone-mockup.jpg';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{background: 'var(--gradient-hero)'}}>
      {/* Floating Medical-Tech Geometric Shapes */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-medical-green rounded-lg rotate-45 blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="fade-in">
            <h1 className="hero-title mb-6 text-shadow">
              <span className="gradient-text">Skyn.health</span> – Your{' '}
              <span className="gradient-text">AI Skin Health</span> Companion
            </h1>
            
            <p className="subsection-title text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Early insights. Trusted guidance. Smarter skin care.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-primary"
              >
                Try the Beta
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="btn-secondary"
              >
                Learn How It Works
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8 text-sm font-medium">
              <div className="flex items-center gap-2 text-medical-green">
                <div className="w-2 h-2 bg-medical-green rounded-full"></div>
                <span>Medical AI</span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Privacy First</span>
              </div>
              <div className="flex items-center gap-2 text-accent">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Expert Validated</span>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative lg:ml-8 scale-in">
            <div className="relative z-10">
              <img
                src={heroPhoneMockup}
                alt="Skyn.health AI skin diagnosis interface on mobile device"
                className="w-full max-w-md mx-auto rounded-2xl transition-transform duration-500 hover:scale-105"
                style={{boxShadow: 'var(--shadow-xl)'}}
              />
              
              {/* Floating UI elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-card rounded-xl p-3 animate-pulse">
                <div className="w-full h-full bg-primary/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📸</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 w-24 h-16 bg-card rounded-xl p-2">
                <div className="text-xs font-semibold text-medical-green">94% Accuracy</div>
                <div className="text-xs text-muted-foreground">Validated</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;