import React from 'react';
import { Camera, MessageCircle, Brain, Upload, CheckCircle } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Camera,
      title: "Upload your skin photo",
      description: "Take a clear photo of your skin concern using your smartphone camera. Our secure platform ensures your privacy.",
      animation: "hover:scale-110"
    },
    {
      icon: MessageCircle,
      title: "Answer symptom questions",
      description: "Our AI chatbot asks targeted questions about your symptoms, medical history, and concerns.",
      animation: "pulse-animation"
    },
    {
      icon: Brain,
      title: "Get AI-powered insights",
      description: "Receive personalized insights and recommendations based on advanced computer vision and medical knowledge.",
      animation: "hover:rotate-12"
    }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-gradient-section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How Strata Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our advanced AI combines computer vision and natural language processing 
            to provide personalized skin health insights in three simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Lines */}
          <div className="hidden md:block absolute top-20 left-1/3 w-1/3 h-0.5 bg-gradient-to-r from-primary to-accent"></div>
          <div className="hidden md:block absolute top-20 right-1/3 w-1/3 h-0.5 bg-gradient-to-r from-primary to-accent"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="floating-card p-8 text-center h-full">
                {/* Step Number */}
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg mb-6 mx-auto">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-primary-light rounded-2xl mb-6 transition-all duration-300 ${step.animation}`}>
                  <step.icon className="w-10 h-10 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>

                {/* Progress Indicator */}
                <div className="mt-6 flex justify-center">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to experience the future of skin health?
          </p>
          <button className="btn-primary text-lg px-8 py-3">
            Start Your Analysis
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;