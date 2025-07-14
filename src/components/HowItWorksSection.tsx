import React from 'react';
import { Camera, MessageCircle, Brain } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Camera,
      title: "Upload your skin photo",
      description: "Simply take a photo with your smartphone or upload an existing image. Our AI works with standard photos - no special equipment needed."
    },
    {
      icon: MessageCircle,
      title: "Answer symptom questions", 
      description: "Share context about what you're experiencing. Our chatbot asks targeted questions about symptoms, duration, and relevant history."
    },
    {
      icon: Brain,
      title: "Get AI-powered insights",
      description: "Receive personalized insights from our multimodal AI that combines visual analysis with your clinical context for comprehensive guidance."
    }
  ];

  return (
    <section id="how-it-works" className="section-padding" style={{background: 'var(--gradient-soft)'}}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 slide-up">
          <h2 className="section-title text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Three simple steps to get smarter insights about your skin health using our advanced AI technology.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative fade-in" style={{animationDelay: `${index * 0.2}s`}}>
              {/* Connection line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-full w-8 h-0.5 bg-primary/20 z-10 transform translate-x-4"></div>
              )}
              
              <div className="feature-card text-center h-full bg-card">
                {/* Step number */}
                <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center text-white font-bold text-xl" style={{background: 'var(--gradient-primary)'}}>
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="mb-6">
                  <step.icon className="w-12 h-12 text-primary mx-auto" />
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

        <div className="text-center mt-16">
          <button 
            onClick={() => {
              const section = document.getElementById('contact');
              if (section) section.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;