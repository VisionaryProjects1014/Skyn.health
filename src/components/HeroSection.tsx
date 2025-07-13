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
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="natural-text-gradient">Strata</span> – AI-Powered{' '}
              <span className="natural-text-gradient">Skin Analysis</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Get instant insights about your skin health through advanced computer vision and medical AI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={() => scrollToSection('contact')}
                className="natural-button text-lg px-10 py-4"
              >
                Try Beta Access
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg px-10 py-4 font-medium transition-all duration-200"
              >
                See How It Works
              </button>
            </div>

            {/* Simple Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <span>🔒 Privacy-first design</span>
              <span>🏥 Medical-grade AI</span>
              <span>📱 Instant analysis</span>
            </div>
          </div>

          {/* Right Visual - Simplified */}
          <div className="relative lg:ml-8">
            <div className="relative z-10">
              <img
                src={heroPhoneMockup}
                alt="Strata AI skin analysis app"
                className="w-full max-w-md mx-auto rounded-2xl shadow-card transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;