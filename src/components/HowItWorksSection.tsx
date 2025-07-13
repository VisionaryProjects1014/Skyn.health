import React from 'react';
import { Camera, MessageCircle, Brain, Upload, CheckCircle } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Camera,
      title: "Upload your photo",
      description: "Take a clear photo of your skin concern using your smartphone camera.",
    },
    {
      icon: MessageCircle,
      title: "Answer questions",
      description: "Our AI asks about your symptoms and medical history to understand your situation.",
    },
    {
      icon: Brain,
      title: "Get insights",
      description: "Receive personalized analysis and recommendations based on medical knowledge.",
    }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-gradient-section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple, secure skin analysis in three steps.
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