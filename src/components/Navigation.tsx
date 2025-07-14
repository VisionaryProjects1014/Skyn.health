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
          <div className="flex-shrink-0">
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
              className="btn-primary"
            >
              Check your skin's health
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-muted-foreground hover:text-foreground p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card/95 backdrop-blur-md rounded-lg mt-2 border border-border">
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="block px-3 py-3 text-muted-foreground hover:text-foreground font-medium w-full text-left min-h-[44px]"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block px-3 py-3 text-muted-foreground hover:text-foreground font-medium w-full text-left min-h-[44px]"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('blog')}
                className="block px-3 py-3 text-muted-foreground hover:text-foreground font-medium w-full text-left min-h-[44px]"
              >
                Blog
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-3 text-muted-foreground hover:text-foreground font-medium w-full text-left min-h-[44px]"
              >
                Contact
              </button>
              <div className="px-3 py-2">
                <a 
                  href="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full min-h-[48px] text-center inline-block leading-[48px]"
                >
                  Check your skin's health
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