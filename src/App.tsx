import React from "react";

const App = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 nav-blur border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-2xl font-bold text-white">Skyn.health</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-white font-medium transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="text-gray-300 hover:text-white font-medium transition-colors duration-200"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection('technology')}
                className="text-gray-300 hover:text-white font-medium transition-colors duration-200"
              >
                Technology
              </button>
              <button
                onClick={() => scrollToSection('team')}
                className="text-gray-300 hover:text-white font-medium transition-colors duration-200"
              >
                Team
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-white font-medium transition-colors duration-200"
              >
                Contact
              </button>
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center">
              <button className="btn-primary">
                Try Skyn.health
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 pt-16">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-teal-500 rounded-full blur-3xl opacity-20 animate-pulse animation-delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-blue-400 rounded-lg rotate-45 blur-2xl opacity-30 animate-pulse animation-delay-600"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="gradient-text">
                  Next Generation
                </span>
                <br />
                <span className="text-white">AI-Powered</span>
                <br />
                <span className="gradient-text">
                  Skin Health Platform
                </span>
              </h1>
            </div>

            <div className="animate-fade-in-up animation-delay-200">
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Revolutionary multimodal AI system that combines clinical expertise with advanced computer vision 
                to deliver superior accuracy, robustness, and richer insights for skin health analysis.
              </p>
              <div className="text-lg text-blue-200 mb-12">
                <p className="font-semibold">Powered by breakthrough research from University College London & The Alan Turing Institute</p>
              </div>
            </div>

            <div className="animate-fade-in-up animation-delay-400 flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-primary text-lg px-8 py-4"
              >
                Start Your Analysis
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="btn-secondary text-lg px-8 py-4"
              >
                See How It Works
              </button>
            </div>

            <div className="animate-fade-in-up animation-delay-600 flex flex-wrap justify-center items-center gap-8 text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-teal-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Multimodal AI</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-teal-400 rounded-full animate-pulse animation-delay-200"></div>
                <span className="text-sm font-medium">Clinical Grade</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-teal-400 rounded-full animate-pulse animation-delay-400"></div>
                <span className="text-sm font-medium">Expert Validated</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our revolutionary Mixture of Experts technology makes dermatological insights accessible to everyone
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center hover-lift">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Upload & Analyze</h3>
              <p className="text-gray-300">
                Simply upload your skin image. Our advanced Vision-Language Models process both visual and clinical data.
              </p>
            </div>

            <div className="card text-center hover-lift">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Expert AI Analysis</h3>
              <p className="text-gray-300">
                Our Mixture of Experts system routes your case to specialized AI models for precise analysis and insights.
              </p>
            </div>

            <div className="card text-center hover-lift">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Personalized Results</h3>
              <p className="text-gray-300">
                Receive comprehensive analysis, risk assessment, and personalized recommendations for your skin health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Breakthrough <span className="gradient-text">Technology</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powered by cutting-edge research in multimodal AI and mixture of experts architecture
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Advanced AI Architecture</h3>
              <div className="space-y-6">
                <div className="p-6 bg-slate-800/50 rounded-xl border-l-4 border-blue-500">
                  <h4 className="text-xl font-semibold text-blue-400 mb-2">🧠 Multimodal AI System</h4>
                  <p className="text-gray-300">
                    Combines Vision-Language Models with clinical data processing for comprehensive skin lesion analysis.
                  </p>
                </div>
                <div className="p-6 bg-slate-800/50 rounded-xl border-l-4 border-teal-500">
                  <h4 className="text-xl font-semibold text-teal-400 mb-2">⚡ Mixture of Experts</h4>
                  <p className="text-gray-300">
                    Specialized AI experts handle different aspects: clinical significance, symptom analysis, and diagnostic reasoning.
                  </p>
                </div>
                <div className="p-6 bg-slate-800/50 rounded-xl border-l-4 border-blue-500">
                  <h4 className="text-xl font-semibold text-blue-400 mb-2">🎯 Dynamic Expert Routing</h4>
                  <p className="text-gray-300">
                    Smart gating system automatically routes cases to the most relevant expert models for optimal accuracy.
                  </p>
                </div>
              </div>
            </div>
            <div className="backdrop-blur-glass rounded-2xl p-8">
              <h4 className="text-2xl font-bold text-white mb-6">Clinical Performance</h4>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">99%+</div>
                  <div className="text-gray-300 text-sm">Clinical Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-400 mb-2">76.9%</div>
                  <div className="text-gray-300 text-sm">Precision Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">79.3%</div>
                  <div className="text-gray-300 text-sm">Recall Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-400 mb-2">5</div>
                  <div className="text-gray-300 text-sm">Expert Models</div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-slate-800/30 rounded-lg">
                <p className="text-gray-300 text-sm">
                  <strong>Validated on PAD-UFES20 dataset</strong> with superior performance across all metrics
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Revolutionizing <span className="gradient-text">Skin Health</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Skyn.health democratizes access to expert-level dermatological insights through our breakthrough 
                Multimodal Mixture of Experts technology. We're making clinical-grade skin analysis accessible 
                to everyone, anywhere, anytime.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-300">Advanced computer vision and medical AI</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-300">Privacy-first architecture with clinical compliance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-300">Backed by peer-reviewed research from top institutions</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 backdrop-blur-glass rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🔬</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Research-Backed</h3>
                  <p className="text-gray-300">
                    Built on breakthrough research from University College London and The Alan Turing Institute
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leading experts in AI, computer vision, and dermatology bringing cutting-edge research to market
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center hover-lift">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">PS</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Prabhav Sanga</h3>
              <p className="text-blue-400 mb-4">Co-Founder & CEO</p>
              <p className="text-gray-300 text-sm">
                Lead researcher behind the breakthrough MM-MoE technology at University College London. 
                Expert in multimodal AI systems and medical computer vision.
              </p>
            </div>

            <div className="card text-center hover-lift">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">SS</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Sumukh Sharma</h3>
              <p className="text-teal-400 mb-4">Co-Founder & CTO</p>
              <p className="text-gray-300 text-sm">
                Full-stack AI engineer and platform architect. Specializes in scaling ML systems 
                and building production-ready healthcare technology platforms.
              </p>
            </div>

            <div className="card text-center hover-lift">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">JS</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Jaskaran Singh</h3>
              <p className="text-blue-400 mb-4">Co-Founder & Head of Product</p>
              <p className="text-gray-300 text-sm">
                Product strategist and healthcare innovation expert. Focused on translating 
                cutting-edge research into accessible consumer health solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Join the Future of Skin Health
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Experience breakthrough AI-powered skin analysis. Get early access to the most advanced 
            dermatological insights powered by research from world-class institutions.
          </p>

          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3 rounded-full text-slate-900 placeholder-gray-500 focus-ring"
              />
              <button className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 hover:scale-105 shadow-lg">
                Get Early Access
              </button>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">10,000+</div>
              <div className="text-blue-100">Early Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">99%+</div>
              <div className="text-blue-100">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-blue-100">AI Availability</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Skyn.health</h3>
            <p className="text-gray-400 mb-6">
              Revolutionizing skin health through AI-powered diagnostics
            </p>
            <div className="flex justify-center space-x-6 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Research</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
            <div className="mt-8 text-gray-500 text-sm">
              © 2024 Skyn.health. All rights reserved. Powered by research from UCL & Alan Turing Institute.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
