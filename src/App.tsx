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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
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
              <button className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 py-2 rounded-full hover:scale-105 transition-transform duration-200">
                Skin in Check
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
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-teal-500 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-blue-400 rounded-lg rotate-45 blur-2xl opacity-30 animate-pulse delay-500"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                  Next Generation
                </span>
                <br />
                <span className="text-white">Foundational Model</span>
                <br />
                <span className="text-white">for </span>
                <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                  Dermatology
                </span>
              </h1>
            </div>

            <div className="animate-fade-in-up animation-delay-200">
              <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Revolutionary AI-powered skin diagnosis platform delivering early insights, trusted 
                guidance, and smarter skin care through advanced computer vision and medical AI.
              </p>
            </div>

            <div className="animate-fade-in-up animation-delay-400 flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold text-lg px-8 py-4 rounded-full hover:scale-105 transform transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                Try the Platform
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="bg-transparent border-2 border-white text-white font-semibold text-lg px-8 py-4 rounded-full hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Learn How It Works
              </button>
            </div>

            <div className="animate-fade-in-up animation-delay-600 flex flex-wrap justify-center items-center gap-8 text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-teal-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Medical AI</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-teal-400 rounded-full animate-pulse delay-200"></div>
                <span className="text-sm font-medium">Privacy First</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-teal-400 rounded-full animate-pulse delay-400"></div>
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
              How It <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of dermatology with our AI-powered platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-slate-700/50 rounded-2xl backdrop-blur-sm hover:bg-slate-700/70 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Upload Photo</h3>
              <p className="text-gray-300">
                Simply take a photo of your skin concern using your smartphone camera
              </p>
            </div>

            <div className="text-center p-8 bg-slate-700/50 rounded-2xl backdrop-blur-sm hover:bg-slate-700/70 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">AI Analysis</h3>
              <p className="text-gray-300">
                Our advanced AI analyzes your image using medical-grade computer vision
              </p>
            </div>

            <div className="text-center p-8 bg-slate-700/50 rounded-2xl backdrop-blur-sm hover:bg-slate-700/70 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Get Insights</h3>
              <p className="text-gray-300">
                Receive detailed analysis and recommendations for next steps
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Revolutionizing <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Skin Health</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Skyn.health combines cutting-edge artificial intelligence with medical expertise 
                to provide accurate, accessible skin health analysis. Our platform democratizes 
                dermatological care, making expert-level insights available to everyone.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-300">99%+ accuracy in clinical validation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-300">HIPAA-compliant privacy protection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-300">Validated by board-certified dermatologists</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🔬</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">AI Technology</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the experts behind Skyn.health's revolutionary AI technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-slate-700/50 rounded-2xl backdrop-blur-sm hover:bg-slate-700/70 transition-all duration-300 hover:scale-105">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">JS</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Jaskaran Singh</h3>
              <p className="text-teal-400 mb-4">Co-Founder & CEO</p>
              <p className="text-gray-300 text-sm">
                Medical AI researcher with expertise in computer vision and dermatology
              </p>
            </div>

            <div className="text-center p-8 bg-slate-700/50 rounded-2xl backdrop-blur-sm hover:bg-slate-700/70 transition-all duration-300 hover:scale-105">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">SS</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Sumukh Sharma</h3>
              <p className="text-teal-400 mb-4">Co-Founder & CTO</p>
              <p className="text-gray-300 text-sm">
                Full-stack developer and AI engineer specializing in healthcare technology
              </p>
            </div>

            <div className="text-center p-8 bg-slate-700/50 rounded-2xl backdrop-blur-sm hover:bg-slate-700/70 transition-all duration-300 hover:scale-105">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">PS</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Prabhav Sanga</h3>
              <p className="text-teal-400 mb-4">Co-Founder & Head of Product</p>
              <p className="text-gray-300 text-sm">
                Product strategist focused on user experience and medical device design
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
            Be among the first to experience AI-powered dermatological insights. 
            Join our beta program today.
          </p>

          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3 rounded-full text-slate-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/20"
              />
              <button className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 hover:scale-105 shadow-lg">
                Join Waitlist
              </button>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">10,000+</div>
              <div className="text-blue-100">Beta Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">99%</div>
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
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
            <div className="mt-8 text-gray-500 text-sm">
              © 2024 Skyn.health. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
