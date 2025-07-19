import React from 'react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Hero Content */}
          <div className="mb-8">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
              <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Next Generation</span><br />
              <span className="text-white">Foundational Model</span><br />
              <span className="text-white">for</span> <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Dermatology</span>
            </h1>
          </div>

          <div className="mb-12">
            <p className="text-xl lg:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
              Revolutionary AI-powered skin diagnosis platform delivering early insights, trusted 
              guidance, and smarter skin care through advanced computer vision and medical AI.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold text-lg px-8 py-4 rounded-full hover:scale-105 transform transition-all duration-200 shadow-lg"
            >
              Try the Platform
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="bg-transparent border-2 border-white text-white font-semibold text-lg px-8 py-4 rounded-full hover:bg-white hover:text-slate-900 transition-all duration-200"
            >
              Learn How It Works
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-white/80">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
              <span className="text-sm font-medium">Medical AI</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
              <span className="text-sm font-medium">Privacy First</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
              <span className="text-sm font-medium">Expert Validated</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;