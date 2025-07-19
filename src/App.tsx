import React from "react";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navigation */}
      <nav className="p-4 bg-slate-800">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Skyn.health</h1>
          <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">
            Skin in Check
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Next Generation
            </span>
            <br />
            <span>Foundational Model for</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Dermatology
            </span>
          </h1>
          
          <p className="text-xl mb-8 text-gray-300">
            Revolutionary AI-powered skin diagnosis platform delivering early insights, 
            trusted guidance, and smarter skin care through advanced computer vision and medical AI.
          </p>

          <div className="flex gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-8 py-3 rounded-full hover:scale-105 transition-transform">
              Try the Platform
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-slate-900 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
