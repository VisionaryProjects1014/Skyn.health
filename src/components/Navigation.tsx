import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl font-bold text-white">
              Skyn.health
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('about')}
                className="text-muted-foreground hover:text-foreground font-medium transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="text-muted-foreground hover:text-foreground font-medium transition-colors duration-200"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection('team')}
                className="text-muted-foreground hover:text-foreground font-medium transition-colors duration-200"
              >
                Team
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="text-muted-foreground hover:text-foreground font-medium transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
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
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-muted-foreground hover:text-foreground p-2"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 pointer-events-none'
        } overflow-hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-sm rounded-lg mt-2">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-3 py-2 text-foreground hover:bg-muted rounded-md transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="block w-full text-left px-3 py-2 text-foreground hover:bg-muted rounded-md transition-colors duration-200"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="block w-full text-left px-3 py-2 text-foreground hover:bg-muted rounded-md transition-colors duration-200"
            >
              Team
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-2 text-foreground hover:bg-muted rounded-md transition-colors duration-200"
            >
              Contact
            </button>
            
            {/* Mobile CTA */}
            <div className="pt-2">
              <a 
                href="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center btn-primary text-sm px-4 py-2"
              >
                Skin in Check
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;