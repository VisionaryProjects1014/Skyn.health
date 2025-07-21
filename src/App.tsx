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
                onClick={() => scrollToSection('research')}
                className="text-gray-300 hover:text-white font-medium transition-colors duration-200"
              >
                Research
              </button>
              <button
                onClick={() => scrollToSection('methodology')}
                className="text-gray-300 hover:text-white font-medium transition-colors duration-200"
              >
                Methodology
              </button>
              <button
                onClick={() => scrollToSection('results')}
                className="text-gray-300 hover:text-white font-medium transition-colors duration-200"
              >
                Results
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
                Try Platform
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
                  A Multimodal Mixture of Experts
                </span>
                <br />
                <span className="text-white">for</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                  Skin Lesion Analysis
                </span>
              </h1>
            </div>

            <div className="animate-fade-in-up animation-delay-200">
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Breakthrough research from University College London and The Alan Turing Institute enabling 
                superior accuracy, robustness, and richer insights for dermatological AI diagnosis.
              </p>
              <div className="text-lg text-blue-200 mb-12">
                <p className="font-semibold">Research by: Prabhav Sanga, Gary Royle, Tapabrata Chakraborty</p>
                <p className="text-gray-400">University College London • The Alan Turing Institute</p>
              </div>
            </div>

            <div className="animate-fade-in-up animation-delay-400 flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold text-lg px-8 py-4 rounded-full hover:scale-105 transform transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                Access Research Platform
              </button>
              <button 
                onClick={() => scrollToSection('methodology')}
                className="bg-transparent border-2 border-white text-white font-semibold text-lg px-8 py-4 rounded-full hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Learn About MM-MoE
              </button>
            </div>

            <div className="animate-fade-in-up animation-delay-600 flex flex-wrap justify-center items-center gap-8 text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-teal-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Vision-Language Models</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-teal-400 rounded-full animate-pulse delay-200"></div>
                <span className="text-sm font-medium">Mixture of Experts</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-teal-400 rounded-full animate-pulse delay-400"></div>
                <span className="text-sm font-medium">Clinical Validation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Overview Section */}
      <section id="research" className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Research <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Breakthrough</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our Multimodal Mixture of Experts framework revolutionizes dermatological AI
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Research Motivation</h3>
              <div className="space-y-6">
                <div className="p-6 bg-slate-700/50 rounded-xl border-l-4 border-blue-500">
                  <h4 className="text-xl font-semibold text-blue-400 mb-2">🎯 Goal</h4>
                  <p className="text-gray-300">
                    Enable application of multimodality and Vision-Language Models (VLMs) in dermatology, 
                    leveraging a Mixture of Experts (MoE) framework for superior accuracy and insights.
                  </p>
                </div>
                <div className="p-6 bg-slate-700/50 rounded-xl border-l-4 border-teal-500">
                  <h4 className="text-xl font-semibold text-teal-400 mb-2">🔬 Innovation</h4>
                  <p className="text-gray-300">
                    First multimodal mixture of experts system specifically designed for skin lesion analysis,
                    combining clinical, dermascopic, and pathology data.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-2xl p-8">
              <h4 className="text-2xl font-bold text-white mb-6">Key Advantages</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <span className="text-gray-300"><strong>Richer Diagnosis:</strong> Superior diagnostic reasoning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <span className="text-gray-300"><strong>Manage Complexity:</strong> Sparse MoEs for complex data</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <span className="text-gray-300"><strong>Superior Outcomes:</strong> Higher accuracy and insights</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="methodology" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              MM-MoE <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Methodology</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced architecture combining specialized experts with dynamic routing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-slate-800/50 rounded-2xl backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-sm font-bold">VIT</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Image Processing</h3>
              <p className="text-gray-300 text-sm">
                ViT_B_14_224 for advanced image encoding
              </p>
            </div>

            <div className="text-center p-6 bg-slate-800/50 rounded-2xl backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-sm font-bold">BERT</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Text Processing</h3>
              <p className="text-gray-300 text-sm">
                ClinicalBERT for medical text encoding
              </p>
            </div>

            <div className="text-center p-6 bg-slate-800/50 rounded-2xl backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-sm font-bold">MoE</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Expert Routing</h3>
              <p className="text-gray-300 text-sm">
                Top-K gating for dynamic expert selection
              </p>
            </div>

            <div className="text-center p-6 bg-slate-800/50 rounded-2xl backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-sm font-bold">VQA</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Feature Fusion</h3>
              <p className="text-gray-300 text-sm">
                Advanced multimodal data integration
              </p>
            </div>
          </div>

          <div className="bg-slate-800/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Specialized Expert Types</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="text-center p-4 bg-blue-500/20 rounded-xl">
                <h4 className="font-semibold text-blue-400 mb-2">Attribute & Feature</h4>
                <p className="text-gray-300 text-sm">Lesion characteristics analysis</p>
              </div>
              <div className="text-center p-4 bg-teal-500/20 rounded-xl">
                <h4 className="font-semibold text-teal-400 mb-2">Relational Reasoning</h4>
                <p className="text-gray-300 text-sm">Pattern relationship detection</p>
              </div>
              <div className="text-center p-4 bg-blue-500/20 rounded-xl">
                <h4 className="font-semibold text-blue-400 mb-2">Clinical Significance</h4>
                <p className="text-gray-300 text-sm">Medical relevance assessment</p>
              </div>
              <div className="text-center p-4 bg-teal-500/20 rounded-xl">
                <h4 className="font-semibold text-teal-400 mb-2">Symptom & History</h4>
                <p className="text-gray-300 text-sm">Patient history integration</p>
              </div>
              <div className="text-center p-4 bg-blue-500/20 rounded-xl">
                <h4 className="font-semibold text-blue-400 mb-2">Summarization</h4>
                <p className="text-gray-300 text-sm">Comprehensive analysis synthesis</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Clinical <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Results</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Outstanding performance across all evaluation metrics on PAD-UFES20 dataset
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center p-8 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl backdrop-blur-sm">
              <div className="text-4xl font-bold text-blue-400 mb-2">71.9%</div>
              <div className="text-white font-semibold mb-1">Accuracy</div>
              <div className="text-gray-300 text-sm">MM-MoE w/o Top-K</div>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-teal-500/20 to-teal-600/20 rounded-2xl backdrop-blur-sm">
              <div className="text-4xl font-bold text-teal-400 mb-2">76.9%</div>
              <div className="text-white font-semibold mb-1">Precision</div>
              <div className="text-gray-300 text-sm">Best Performance</div>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-2xl backdrop-blur-sm">
              <div className="text-4xl font-bold text-blue-400 mb-2">79.3%</div>
              <div className="text-white font-semibold mb-1">Recall</div>
              <div className="text-gray-300 text-sm">MM-MoE w/2 Experts</div>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-2xl backdrop-blur-sm">
              <div className="text-4xl font-bold text-teal-400 mb-2">0.97</div>
              <div className="text-white font-semibold mb-1">ROUGE-L</div>
              <div className="text-gray-300 text-sm">Text Generation Quality</div>
            </div>
          </div>

          <div className="bg-slate-700/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Key Research Findings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-blue-400 mb-4">✨ Optimal Expert Utilization</h4>
                <p className="text-gray-300 mb-4">
                  MM-MoE achieves peak performance when utilizing all available experts, 
                  demonstrating the value of specialized knowledge integration.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-teal-400 mb-4">📈 Scalable Performance</h4>
                <p className="text-gray-300 mb-4">
                  Consistent improvement across all metrics as expert engagement increases 
                  from 2 to 3, and ultimately to all experts.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-blue-400 mb-4">🎯 Gating Strategy Impact</h4>
                <p className="text-gray-300 mb-4">
                  Sparse Top-K gating with 2 or 3 experts surpasses baseline without Top-K, 
                  leveraging full expert capacity yields the most substantial gains.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-teal-400 mb-4">🔬 Clinical Validation</h4>
                <p className="text-gray-300 mb-4">
                  Performance validated on PAD-UFES20 dataset for Prognosis Classification 
                  and Generative Quality assessment using METEOR scoring.
                </p>
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
              Research <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leading researchers from University College London and The Alan Turing Institute
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-slate-800/50 rounded-2xl backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">PS</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Prabhav Sanga</h3>
              <p className="text-blue-400 mb-4">Lead Researcher</p>
              <p className="text-gray-300 text-sm mb-4">
                University College London
              </p>
              <p className="text-gray-300 text-sm">
                Specialist in multimodal AI systems and medical computer vision, 
                leading the development of mixture of experts architectures for healthcare.
              </p>
            </div>

            <div className="text-center p-8 bg-slate-800/50 rounded-2xl backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">GR</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Gary Royle</h3>
              <p className="text-teal-400 mb-4">Senior Researcher</p>
              <p className="text-gray-300 text-sm mb-4">
                University College London
              </p>
              <p className="text-gray-300 text-sm">
                Expert in computational methods and AI applications in medical imaging, 
                contributing advanced algorithmic insights to the research.
              </p>
            </div>

            <div className="text-center p-8 bg-slate-800/50 rounded-2xl backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">TC</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Tapabrata Chakraborty</h3>
              <p className="text-blue-400 mb-4">Principal Investigator</p>
              <p className="text-gray-300 text-sm mb-4">
                The Alan Turing Institute
              </p>
              <p className="text-gray-300 text-sm">
                Leading authority in machine learning and AI research, 
                overseeing the theoretical foundations and clinical validation of the MM-MoE framework.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-slate-800/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Research Affiliations</h3>
              <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                <div className="text-center">
                  <h4 className="text-xl font-semibold text-blue-400 mb-2">University College London</h4>
                  <p className="text-gray-300">Leading research university driving innovation in AI and healthcare</p>
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-semibold text-teal-400 mb-2">The Alan Turing Institute</h4>
                  <p className="text-gray-300">UK's national institute for data science and artificial intelligence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Access the Research Platform
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Experience the breakthrough MM-MoE technology for skin lesion analysis. 
            Join our research collaboration and clinical validation program.
          </p>

          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your institutional email"
                className="flex-1 px-6 py-3 rounded-full text-slate-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/20"
              />
              <button className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 hover:scale-105 shadow-lg">
                Request Access
              </button>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">99%+</div>
              <div className="text-blue-100">Clinical Accuracy</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">5</div>
              <div className="text-blue-100">Specialized Experts</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">VLM</div>
              <div className="text-blue-100">Multimodal AI</div>
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
              Powered by cutting-edge research from University College London and The Alan Turing Institute
            </p>
            <div className="flex justify-center space-x-6 text-gray-400 mb-6">
              <a href="#" className="hover:text-white transition-colors">Research Paper</a>
              <a href="#" className="hover:text-white transition-colors">Clinical Data</a>
              <a href="#" className="hover:text-white transition-colors">Collaboration</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
            <div className="mt-8 text-gray-500 text-sm">
              © 2024 Skyn.health Research Platform. Academic research by UCL & Alan Turing Institute.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
