import React, { useState } from 'react';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { api } from '../lib/api';

const CTASection = () => {
  useScrollAnimation();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    setError('');

    try {
      await api.subscribeNewsletter({ email });
      setIsSubmitted(true);
      setEmail('');
      
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (err) {
      setError('Failed to subscribe. Please try again.');
      console.error('Newsletter subscription error:', err);
    } finally {
      setIsLoading(false);
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
                  disabled={isLoading}
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="bg-white text-primary font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-200 hover:scale-105 transform disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Joining...' : 'Join the Waitlist'}
              </button>
            </form>
          ) : (
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 flex items-center justify-center gap-3">
              <CheckCircle className="w-6 h-6 text-white" />
              <span className="text-white font-semibold">
                Welcome aboard! You're on the waitlist.
              </span>
            </div>
          )}
          
          {error && (
            <div className="mt-4 bg-red-500/20 backdrop-blur-sm rounded-full p-4 flex items-center justify-center gap-3">
              <AlertCircle className="w-5 h-5 text-white" />
              <span className="text-white">{error}</span>
            </div>
          )}
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">10,000+</div>
            <div className="text-white/80">Beta Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">99%</div>
            <div className="text-white/80">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-white/80">AI Availability</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;