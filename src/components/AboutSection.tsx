import React from 'react';
import aiVisualization from '../assets/ai-visualization.jpg';
import { Cpu, Eye, MessageSquare, Shield } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Eye,
      title: "Dermoscopic Analysis",
      description: "Specialized experts trained on clinical, dermoscopic, and pathology images with VLM integration"
    },
    {
      icon: MessageSquare,
      title: "Clinical Context",
      description: "Natural language processing for symptoms, medical history, and clinical significance assessment"
    },
    {
      icon: Cpu,
      title: "Mixture of Experts",
      description: "Dynamic expert selection with gating mechanisms for optimal accuracy and clinical insights"
    },
    {
      icon: Shield,
      title: "Medical Grade",
      description: "Validated on PAD-UFES20 dataset with superior performance across all diagnostic metrics"
    }
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
              Multimodal Mixture of Experts Architecture
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Our system leverages Vision-Language Models (VLMs) within a Mixture of Experts (MOE) framework, routing queries to specialized experts for dermoscopic image analysis and clinical reasoning.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Achieving superior accuracy through dynamic expert utilization, sparse activation strategies, and comprehensive evaluation on established dermatology datasets with clinical validation.
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
              <div className="text-lg font-bold text-primary">94.36%</div>
              <div className="text-xs text-muted-foreground">Recall (All Experts)</div>
            </div>
            
            <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm p-3 rounded-lg border border-border">
              <div className="text-lg font-bold text-accent">Top-K</div>
              <div className="text-xs text-muted-foreground">Gating Strategy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;