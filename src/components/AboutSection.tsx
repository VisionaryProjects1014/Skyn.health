import React from 'react';
import aiVisualization from '../assets/ai-visualization.jpg';
import { Cpu, Eye, MessageSquare, Shield } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AboutSection = () => {
  useScrollAnimation();
  const features = [
    {
      icon: Eye,
      title: "Computer Vision",
      description: "Advanced image analysis that can identify subtle patterns and changes in skin texture, color, and morphology."
    },
    {
      icon: MessageSquare,
      title: "Natural Language",
      description: "Conversational AI that understands medical terminology and asks the right follow-up questions."
    },
    {
      icon: Cpu,
      title: "Clinical Reasoning",
      description: "Combines visual analysis with symptom assessment to provide comprehensive skin health insights."
    },
    {
      icon: Shield,
      title: "Privacy-First",
      description: "Your data stays secure with HIPAA-compliant infrastructure and encrypted processing."
    }
  ];

  return (
    <section id="about" className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="slide-in-left">
            <h2 className="section-title text-foreground mb-8 font-heading">
              Multimodal Intelligence Built for Skin
            </h2>
            
            <p className="body-text text-muted-foreground mb-6">
              Strata combines computer vision and language understanding to mimic clinical reasoning and provide smarter skin insights. Our AI doesn't just look at images - it understands context.
            </p>

            <p className="body-text text-muted-foreground mb-8">
              Built on advanced machine learning that processes both visual information and clinical context, just like a dermatologist would during a consultation.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 fade-in-on-scroll" style={{transitionDelay: `${index * 0.1}s`}}>
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative scale-in-on-scroll">
            <img
              src={aiVisualization}
              alt="Abstract AI network visualization showing Skyn.health's intelligence"
              className="w-full rounded-xl"
              style={{boxShadow: 'var(--shadow-card)'}}
            />
            
            {/* Performance overlays */}
            <div className="absolute top-6 right-6 bg-card/95 backdrop-blur-sm p-4 rounded-xl border border-border">
              <div className="text-xl font-bold text-primary">99.2%</div>
              <div className="text-sm text-muted-foreground">Accuracy Rate</div>
            </div>
            
            <div className="absolute bottom-6 left-6 bg-card/95 backdrop-blur-sm p-4 rounded-xl border border-border">
              <div className="text-xl font-bold text-medical-green">HIPAA</div>
              <div className="text-sm text-muted-foreground">Compliant</div>
            </div>
            
            <div className="absolute top-1/2 left-6 bg-card/95 backdrop-blur-sm p-3 rounded-lg border border-border">
              <div className="text-lg font-bold text-accent">24/7</div>
              <div className="text-xs text-muted-foreground">Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;