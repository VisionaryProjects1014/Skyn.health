import React from 'react';
import { Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold gradient-text mb-4">Strata</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Revolutionizing skin health through AI-powered diagnosis and personalized care. 
              Making dermatological insights accessible to everyone, everywhere.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@strata.ai"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('how-it-works')}
                  className="text-gray-300 hover:text-primary transition-colors duration-200"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-primary transition-colors duration-200"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('blog')}
                  className="text-gray-300 hover:text-primary transition-colors duration-200"
                >
                  Blog
                </button>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors duration-200"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors duration-200"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors duration-200"
                >
                  HIPAA Compliance
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@strata.ai"
                  className="text-gray-300 hover:text-primary transition-colors duration-200"
                >
                  Contact Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3 text-gray-300">
              <Mail className="w-5 h-5 text-primary" />
              <span>hello@strata.ai</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-300">
              <Phone className="w-5 h-5 text-primary" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-300">
              <MapPin className="w-5 h-5 text-primary" />
              <span>San Francisco, CA</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Strata Health AI. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm">Made with ❤️ for better skin health</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;