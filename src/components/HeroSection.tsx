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
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-primary animate-pulse"></div>
        <div className="absolute top-40 right-32 w-20 h-20 rounded-full bg-accent animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/3 w-24 h-24 rounded-full bg-primary animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 rounded-full bg-accent animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Strata</span> – Your AI{' '}
              <span className="gradient-text">Skin Health</span> Companion
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-lg">
              Early insights. Trusted guidance. Smarter skin care.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-primary text-lg px-10 py-4"
              >
                Try the Beta
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="btn-secondary text-lg px-10 py-4"
              >
                Learn How It Works
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-muted-foreground">HIPAA Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-muted-foreground">Clinically Validated</span>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative lg:ml-8">
            <div className="relative z-10 hover-lift">
              <img
                src={heroPhoneMockup}
                alt="Strata AI skin health app interface"
                className="w-full max-w-md mx-auto rounded-2xl shadow-float"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-accent/20 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 -left-8 w-12 h-12 bg-primary/30 rounded-full animate-pulse delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;