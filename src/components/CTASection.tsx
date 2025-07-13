import React, { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

const CTASection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to your backend
      setIsSubmitted(true);
      setEmail('');
      
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section id="contact" className="section-padding bg-gradient-cta relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute top-1/4 right-0 w-48 h-48 bg-white rounded-full translate-x-24"></div>
        <div className="absolute bottom-0 left-1/3 w-32 h-32 bg-white rounded-full translate-y-16"></div>
        <div className="absolute bottom-1/4 right-1/4 w-20 h-20 bg-white rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Be the First to Experience AI Skin Health
        </h2>
        
        <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
          Join thousands of early adopters who are already experiencing the future 
          of personalized skin care with Skyn.health's beta program.
        </p>

        {/* Email Signup Form */}
        <div className="max-w-md mx-auto">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full pl-12 pr-4 py-3 rounded-full border-0 focus:outline-none focus:ring-4 focus:ring-white/20 text-foreground"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-white text-primary font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-200 hover:scale-105 transform"
              >
                Join the Waitlist
              </button>
            </form>
          ) : (
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-center space-x-3 text-white">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span className="text-lg font-medium">
                  Thank you! You're on the waitlist.
                </span>
              </div>
              <p className="text-white/80 mt-2">
                We'll notify you when Skyn.health is ready for you.
              </p>
            </div>
          )}
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/80">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-sm">No spam, ever</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-sm">Unsubscribe anytime</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-sm">HIPAA compliant</span>
          </div>
        </div>

        {/* Beta Benefits */}
        <div className="mt-16 grid sm:grid-cols-3 gap-6 text-white">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">🚀</span>
            </div>
            <h3 className="font-semibold mb-2">Early Access</h3>
            <p className="text-sm text-white/80">Be among the first to try Skyn.health's revolutionary AI skin analysis</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">💝</span>
            </div>
            <h3 className="font-semibold mb-2">Free Beta</h3>
            <p className="text-sm text-white/80">Full access to all features during the beta period at no cost</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">🎯</span>
            </div>
            <h3 className="font-semibold mb-2">Shape the Future</h3>
            <p className="text-sm text-white/80">Your feedback will directly influence Skyn.health's development</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;