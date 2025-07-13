import React from 'react';
import { Camera, MessageCircle, Brain, Network, Route } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Camera,
      title: "Multimodal Input",
      description: "Upload dermoscopic images and provide clinical context including symptoms and medical history.",
    },
    {
      icon: Route,
      title: "Expert Routing",
      description: "Our gating mechanism routes your query to specialized experts based on lesion characteristics and clinical features.",
    },
    {
      icon: Brain,
      title: "Comprehensive Analysis",
      description: "Receive detailed diagnostic insights combining visual analysis, clinical reasoning, and expert medical knowledge.",
    }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-gradient-section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            MOE Architecture Pipeline
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Advanced multimodal processing through specialized expert networks.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="natural-card p-8 text-center h-full">
                {/* Step Number */}
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg mb-6 mx-auto">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-6 transition-all duration-300">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Simple CTA */}
        <div className="text-center mt-16">
          <button className="natural-button text-lg px-8 py-3">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;