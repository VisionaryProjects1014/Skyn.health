import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import { api } from './lib/api';

const App = () => {
  useScrollAnimation();
  const navigate = useNavigate();
  
  // Email signup state
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Handle email signup
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);
    setError('');

    try {
      const result = await api.subscribeNewsletter({ email });
      setIsSubmitted(true);
      setEmail('');
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (err: any) {
      // Handle specific error cases
      if (err.message && err.message.includes('already subscribed')) {
        setError('This email is already subscribed to our newsletter.');
      } else {
        setError('Failed to subscribe. Please try again.');
      }
      console.error('Newsletter subscription error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-blue-50 to-yellow-50 text-gray-900 overflow-x-hidden">




                    {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative pt-16 overflow-hidden">
          {/* Logo centered at top */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20 flex items-center space-x-3 group cursor-pointer">
            <img 
              src="/skyn-logo.png" 
              alt="Skyn Logo" 
              className="w-14 h-14 object-contain transition-all duration-500 ease-out group-hover:scale-110 opacity-95 hover:opacity-100"
            />
            <span className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent transition-all duration-500 ease-out">
              Skyn
            </span>
          </div>

          {/* Background Video */}
          <div className="absolute inset-0 z-0">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              className="w-full h-full object-cover opacity-20"
              poster="/videos/hero-bg-poster.jpg"
            >
              <source src="/videos/hero-background.mp4" type="video/mp4" />
              <source src="/videos/hero-background.webm" type="video/webm" />
            </video>
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-50/80 via-blue-50/60 to-yellow-50/80"></div>
          </div>
          
          {/* Elegant Background Animation */}
          <div className="absolute inset-0 z-1">
            <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-orange-100/25 to-red-100/15 rounded-full blur-3xl animate-pulse transition-all duration-700 ease-in-out"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-yellow-100/20 to-orange-100/15 rounded-full blur-3xl animate-pulse transition-all duration-1000 ease-in-out" style={{ animationDelay: '4s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-50/15 to-orange-50/10 rounded-full blur-3xl animate-pulse transition-all duration-500 ease-in-out" style={{ animationDelay: '8s' }}></div>
          </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="animate-fade-in-up transform transition-all duration-1000 ease-out">
              <h1 className="text-5xl lg:text-7xl xl:text-8xl font-normal mb-12 text-slate-900 leading-tight tracking-normal transform transition-all duration-1200 ease-out text-center mx-auto">
                <span className="font-medium bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent transition-all duration-700 ease-out hover:from-orange-600 hover:to-red-600 block">Purpose-Built</span>
                <span className="font-normal text-slate-900 transition-all duration-700 ease-out block">Foundation Models</span>
                <span className="font-normal text-slate-900 transition-all duration-700 ease-out block">for <span className="font-medium bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent transition-all duration-700 ease-out hover:from-orange-600 hover:to-red-600 italic transform hover:scale-110 hover:-translate-y-1 cursor-pointer scale-in-on-scroll">Dermatology</span></span>
              </h1>
            </div>

            <div className="animate-fade-in-up transform transition-all duration-1000 ease-out" style={{ animationDelay: '0.15s' }}>
              <div className="max-w-4xl mx-auto mb-16">
                <p className="text-lg lg:text-xl text-slate-700 leading-relaxed font-medium text-center">
                  To enable next-generation dermatological diagnostics powered by <span className="text-blue-600 font-semibold italic">in-house foundational models</span>, built and trained specifically for dermatological applications to deliver exceptional accuracy, robustness, and clinically meaningful insights for skin lesion analysis.
                </p>
              </div>
            </div>

            <div className="animate-fade-in-up flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transform transition-all duration-1000 ease-out" style={{ animationDelay: '0.4s' }}>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-10 py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 rounded-full text-lg font-medium text-white transition-all duration-500 ease-out shadow-lg hover:shadow-2xl transform hover:scale-110 hover:-translate-y-2 group relative overflow-hidden"
              >
                <span className="relative z-10 transition-all duration-300 ease-out">Start Your Journey</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-600 translate-x-full group-hover:translate-x-0 transition-all duration-500 ease-out"></div>
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="px-10 py-4 border border-blue-300 hover:border-blue-500 rounded-full text-lg font-medium text-blue-700 hover:text-blue-800 hover:bg-gradient-to-r hover:from-blue-50 hover:to-orange-50 transition-all duration-500 ease-out transform hover:scale-110 hover:-translate-y-2 shadow-md hover:shadow-lg group"
              >
                <span className="group-hover:mr-2 transition-all duration-300">Explore Features</span>
                <span className="inline-block transform group-hover:translate-x-1 transition-all duration-300">→</span>
              </button>
            </div>



          </div>
        </div>
      </section>

      {/* About Section */}
      {/* Revolutionary AI Platform Section */}
              <section id="how-it-works" className="py-16 relative overflow-hidden">
        {/* Background animation */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-10 w-56 h-56 bg-slate-100/25 rounded-full blur-3xl animate-pulse transition-all duration-1000 ease-in-out" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-gray-100/20 rounded-full blur-3xl animate-pulse transition-all duration-700 ease-in-out" style={{ animationDelay: '5s' }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16 relative z-10 fade-in-on-scroll">
            <h2 className="text-5xl lg:text-6xl font-light bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent mb-8 tracking-tight transform transition-all duration-1000 ease-out hover:scale-105" style={{ lineHeight: '1.6', paddingTop: '8px', paddingBottom: '16px' }}>
              Revolutionary <span className="font-medium bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent transition-all duration-700 ease-out inline-block transform hover:scale-110" style={{ paddingBottom: '8px', display: 'inline-block' }}>Agentic Platform</span> in <span className="font-medium bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent transition-all duration-700 ease-out inline-block transform hover:scale-110">Action</span>
            </h2>

          </div>

          {/* From Foundational to Agentic - MOVED HERE */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-3xl p-12 border border-slate-200/50 shadow-xl scale-in-on-scroll">
              <h3 className="text-2xl lg:text-3xl font-semibold text-slate-800 mb-6 text-center">
                From Foundational to <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Agentic</span>
              </h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-8 text-center">
                Our vision is to transform this platform into a truly agentic AI system that not only analyzes but actively collaborates with clinicians. Think adaptive reasoning, contextual dialogue, and autonomous clinical support, all within a safe, regulatory aware framework.
              </p>
              <div className="text-center">
                <p className="text-xl font-medium bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
                  Join us on the journey to redefine dermatological care: powered by multimodality, grounded in trust, and built for the future.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* What We're Building Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-orange-50">
        {/* Background animation */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-orange-100/30 rounded-full blur-3xl animate-pulse transition-all duration-1000 ease-in-out" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-blue-100/25 rounded-full blur-3xl animate-pulse transition-all duration-700 ease-in-out" style={{ animationDelay: '3s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* What We're Building */}
          <div className="text-center mb-20 fade-in-on-scroll">
            <h2 className="text-5xl lg:text-6xl font-light bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent mb-8 tracking-tight transform transition-all duration-1000 ease-out hover:scale-105" style={{ lineHeight: '1.6', paddingTop: '8px', paddingBottom: '16px' }}>
              🔬 <span className="font-medium">What We're Building</span>
            </h2>
          </div>

          {/* Building Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {/* 1. Multimodal AI */}
            <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/50 hover:border-slate-300/50 transition-all duration-700 ease-out hover:shadow-2xl hover:shadow-slate-200/60 transform hover:scale-105 hover:-translate-y-2 scale-in-on-scroll">
              <h3 className="text-xl font-semibold text-slate-800 mb-4 group-hover:text-blue-600 transition-all duration-500">
                Agentic AI for Dermatology
              </h3>
              <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-all duration-500">
                Our system combines clinical, dermoscopic, and pathology images with patient text data to reflect real-world diagnostic complexity.
              </p>
            </div>

            {/* 2. Built for Interpretability - MOVED TO MIDDLE */}
            <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/50 hover:border-slate-300/50 transition-all duration-700 ease-out hover:shadow-2xl hover:shadow-slate-200/60 transform hover:scale-105 hover:-translate-y-2 scale-in-on-scroll" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-xl font-semibold text-slate-800 mb-4 group-hover:text-orange-600 transition-all duration-500">
                Built for Interpretability
              </h3>
              <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-all duration-500">
                Designed with explainability at its core, ensuring outputs are grounded in evidence and trusted by clinicians.
              </p>
            </div>

            {/* 3. Scalable & Clinical-Grade Performance - MERGED */}
            <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/50 hover:border-slate-300/50 transition-all duration-700 ease-out hover:shadow-2xl hover:shadow-slate-200/60 transform hover:scale-105 hover:-translate-y-2 scale-in-on-scroll" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-semibold text-slate-800 mb-4 group-hover:text-blue-600 transition-all duration-500">
                Scalable & Clinical-Grade Performance
              </h3>
              <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-all duration-500">
                From triage and risk stratification to educational support and structured reporting, our model adapts to diverse clinical workflows. Our system delivers higher accuracy, precision, and robustness for skin lesion analysis, supporting zero-shot diagnosis and generative reporting.
              </p>
            </div>


          </div>


        </div>
      </section>

      {/* CTA Section */}
              <section id="contact" className="py-16 relative overflow-hidden">
        {/* Background animation */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-slate-100/25 rounded-full blur-3xl animate-pulse transition-all duration-1000 ease-in-out" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gray-100/20 rounded-full blur-3xl animate-pulse transition-all duration-700 ease-in-out" style={{ animationDelay: '4s' }}></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 scale-in-on-scroll">
          <h2 className="text-5xl lg:text-6xl xl:text-7xl font-medium bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent mb-8 tracking-tight transform transition-all duration-1000 ease-out hover:scale-105" style={{ lineHeight: '1.2', paddingTop: '4px', paddingBottom: '8px' }}>
            Ready to join the future of <span className="italic bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent transition-all duration-700 ease-out inline-block transform hover:scale-110" style={{ paddingBottom: '4px', display: 'inline-block' }}>Dermatology?</span>
          </h2>
          <p className="text-xl lg:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light transition-all duration-700 ease-out hover:text-slate-500 transform hover:scale-105">
            Sign up for our platform below to get updates on our current platform
          </p>

          <div className="max-w-md mx-auto mb-12">
            {!isSubmitted ? (
              <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-full text-slate-900 placeholder-slate-500 bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-slate-400 transition-all duration-500 ease-out shadow-sm hover:shadow-md transform hover:scale-105"
                  required
                  disabled={isSubmitting}
                />
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="relative bg-slate-900 hover:bg-slate-800 text-white font-medium px-8 py-4 rounded-full transition-all duration-500 ease-out hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-2xl overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 transition-all duration-300 ease-out">
                    {isSubmitting ? 'Joining...' : 'Get Early Access'}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-700 translate-x-full group-hover:translate-x-0 transition-all duration-500 ease-out"></div>
                </button>
              </form>
            ) : (
              <div className="bg-green-50 border border-green-200 rounded-full p-6 flex items-center justify-center">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-green-800 font-semibold">
                    🎉 You're on the list! We'll be in touch soon.
                  </span>
                </div>
              </div>
            )}
            
            {error && (
              <div className="mt-4 bg-red-50 border border-red-200 rounded-full p-4 flex items-center justify-center">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <span className="text-red-800">{error}</span>
                </div>
              </div>
            )}
          </div>


        </div>
      </section>

      {/* Footer */}
              <footer className="py-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-6">
            {/* Company Name - Centered */}
            <div className="flex items-center space-x-3">
              <img 
                src="/skyn-logo.png" 
                alt="Skyn Logo" 
                className="w-10 h-10 object-contain opacity-90"
              />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">Skyn</h3>
            </div>
            
            {/* Social Media Icons - Centered */}
            <div className="flex space-x-4 justify-center">
              <a 
                href="https://www.linkedin.com/company/skyn-health/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors duration-300"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="text-white text-sm font-medium">LinkedIn</span>
              </a>
              
              <a 
                href="https://github.com/VisionaryProjects1014/Skyn.health" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors duration-300"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="text-white text-sm font-medium">GitHub</span>
              </a>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <p className="text-gray-600 text-sm">
              © 2024 Skyn. All rights reserved.
            </p>
          </div>
        </div>
      </footer>


    </div>
  );
};

export default App;
