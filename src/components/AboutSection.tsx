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
    <section id="about" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
              AI That Understands Skin
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Strata uses computer vision trained on thousands of medical images combined with natural language processing to analyze skin conditions like a dermatologist would.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our models are trained on diverse datasets and validated by medical professionals to ensure accurate, unbiased insights for all skin types.
            </p>

            {/* Simplified Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
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

          {/* Right Visual - Simplified */}
          <div className="relative">
            <img
              src={aiVisualization}
              alt="AI neural network visualization"
              className="w-full rounded-xl shadow-card"
            />
            
            {/* Simple overlays */}
            <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm p-3 rounded-lg border border-border">
              <div className="text-lg font-bold text-primary">99.2%</div>
              <div className="text-xs text-muted-foreground">Accuracy</div>
            </div>
            
            <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm p-3 rounded-lg border border-border">
              <div className="text-lg font-bold text-accent">50K+</div>
              <div className="text-xs text-muted-foreground">Images</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;