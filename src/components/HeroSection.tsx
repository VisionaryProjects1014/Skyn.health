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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Video - Full Screen */}
      <div className="fixed inset-0 w-full h-full z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.3) blur(1px)' }}
        >
          <source src="/videos/dermatology-bg.mp4" type="video/mp4" />
          <source src="/videos/dermatology-bg.webm" type="video/webm" />
          {/* Fallback for browsers that don't support video */}
        </video>
        
        {/* Video Overlay - Full Screen */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        <div className="absolute inset-0" style={{background: 'linear-gradient(135deg, rgba(70, 144, 226, 0.1) 0%, rgba(126, 214, 193, 0.1) 100%)'}}></div>
      </div>

      {/* Floating Abstract Shapes - Full Screen */}
      <div className="fixed inset-0 opacity-3 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-primary rounded-lg rotate-45 blur-2xl animate-pulse delay-500"></div>
        <div className="absolute top-3/4 left-1/3 w-48 h-48 bg-accent/50 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/6 right-1/6 w-20 h-20 bg-primary/70 rounded-full blur-2xl animate-pulse delay-300"></div>
      </div>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto section-padding relative z-20">
        <div className="text-center">
          {/* Hero Content */}
          <div className="fade-in">
            <h1 className="hero-title mb-8 text-shadow font-heading">
              <span className="gradient-text">Next Generation</span><br />
              <span className="text-white">Foundational Model</span><br />
              <span className="text-white">for</span> <span className="gradient-text">Dermatology</span>
            </h1>
          </div>

          <div className="fade-in delay-200">
            <p className="text-xl lg:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
              Revolutionary AI-powered skin diagnosis platform delivering early insights, trusted 
              guidance, and smarter skin care through advanced computer vision and medical AI.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="fade-in delay-400 flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-primary text-lg px-8 py-4 hover:scale-105 transform transition-all duration-200"
            >
              Try the Platform
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="btn-outline text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-primary transition-all duration-200"
            >
              Learn How It Works
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="fade-in delay-600 flex flex-wrap justify-center items-center gap-8 text-white/80">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <span className="text-sm font-medium">Medical AI</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <span className="text-sm font-medium">Privacy First</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <span className="text-sm font-medium">Expert Validated</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;