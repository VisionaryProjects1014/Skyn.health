import React from 'react';
import aiVisualization from '../assets/ai-visualization.jpg';
import { Cpu, Eye, MessageSquare, Shield } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Eye,
      title: "Computer Vision",
      description: "Advanced image analysis trained on thousands of dermatological cases"
    },
    {
      icon: MessageSquare,
      title: "Natural Language",
      description: "Conversational AI that understands medical terminology and patient concerns"
    },
    {
      icon: Cpu,
      title: "Multimodal Intelligence",
      description: "Combines visual and textual data for comprehensive skin health analysis"
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "End-to-end encryption with HIPAA-compliant data handling"
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
              Multimodal Intelligence Built for Skin
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Strata leverages cutting-edge computer vision and natural language processing 
              to analyze skin conditions with the same comprehensive approach that 
              dermatologists use – combining visual examination with detailed patient history.
            </p>

            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Our AI models are trained on diverse datasets and validated by medical professionals, 
              ensuring accurate, unbiased, and culturally sensitive skin health insights for everyone.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={aiVisualization}
                alt="AI neural network visualization"
                className="w-full rounded-2xl shadow-float hover-lift"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-primary opacity-20 rounded-2xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-primary opacity-10 rounded-2xl"></div>
            
            {/* Floating Stats */}
            <div className="absolute top-8 right-8 glass-card p-4 rounded-xl">
              <div className="text-2xl font-bold text-primary">99.2%</div>
              <div className="text-sm text-muted-foreground">Accuracy Rate</div>
            </div>
            
            <div className="absolute bottom-8 left-8 glass-card p-4 rounded-xl">
              <div className="text-2xl font-bold text-accent">50K+</div>
              <div className="text-sm text-muted-foreground">Images Analyzed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;