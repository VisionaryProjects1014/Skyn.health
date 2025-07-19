import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'navbar-blur' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="w-8 h-8 mr-3">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Face Profile */}
                <path d="M30 20 Q45 15 60 25 Q65 30 65 40 Q62 50 60 60 Q55 70 50 75 Q40 80 30 75 Q25 70 25 60 Q22 50 25 40 Q25 30 30 20 Z" 
                      fill="#FF8A65" opacity="0.9"/>
                
                {/* Skin spots/blemishes */}
                <circle cx="38" cy="35" r="2" fill="#FF7043" opacity="0.8"/>
                <circle cx="42" cy="42" r="1.5" fill="#FF7043" opacity="0.8"/>
                <circle cx="35" cy="48" r="1.8" fill="#FF7043" opacity="0.8"/>
                <circle cx="45" cy="50" r="1.2" fill="#FF7043" opacity="0.8"/>
                
                {/* Magnifying Glass */}
                <circle cx="65" cy="45" r="15" fill="none" stroke="#4DB6AC" strokeWidth="4"/>
                <line x1="76" y1="56" x2="85" y2="65" stroke="#4DB6AC" strokeWidth="4" strokeLinecap="round"/>
                
                {/* Magnifying glass handle */}
                <ellipse cx="85" cy="68" rx="3" ry="8" fill="#4DB6AC" transform="rotate(45 85 68)"/>
              </svg>
            </div>
            <h1 className="text-2xl font-bold gradient-text">Skyn.health</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="text-muted-foreground hover:text-foreground font-medium transition-colors duration-200"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-muted-foreground hover:text-foreground font-medium transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('blog')}
                className="text-muted-foreground hover:text-foreground font-medium transition-colors duration-200"
              >
                Blog
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-muted-foreground hover:text-foreground font-medium transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>

          {/* CTA Button and Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <a 
              href="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm px-4 py-2"
            >
              Skin in Check
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-muted-foreground hover:text-foreground p-2"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-sm border-t border-border/50">
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 w-full text-left"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 w-full text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('blog')}
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 w-full text-left"
              >
                Blog
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 w-full text-left"
              >
                Contact
              </button>
              
              <div className="px-3 py-2">
                <a 
                  href="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full min-h-[44px] text-center inline-block leading-[44px] text-sm"
                >
                  Skin in Check
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;