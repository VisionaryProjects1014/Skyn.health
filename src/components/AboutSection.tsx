import React from 'react';
import { Brain, Shield, Zap, Users, Award, Clock } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AboutSection = () => {
  useScrollAnimation();
  
  const features = [
    {
      icon: Brain,
      title: "Advanced AI Technology",
      description: "Cutting-edge computer vision and machine learning algorithms trained on millions of dermatological cases."
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description: "End-to-end encryption and HIPAA-compliant data handling to protect your sensitive health information."
    },
    {
      icon: Zap,
      title: "Instant Analysis",
      description: "Get preliminary skin health insights in seconds, not weeks. Fast, reliable, and accessible anywhere."
    },
    {
      icon: Users,
      title: "Expert Validated",
      description: "Our AI models are continuously validated by board-certified dermatologists and medical professionals."
    },
    {
      icon: Award,
      title: "Clinical Accuracy",
      description: "Achieving 99%+ accuracy rates in clinical validation studies, comparable to specialist assessments."
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Access professional-grade skin health insights anytime, anywhere, without appointment scheduling."
    }
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in-on-scroll">
          <h2 className="section-title mb-6">
            Transforming Dermatology with AI
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Skyn.health combines computer vision and language understanding to mimic clinical reasoning and provide smarter skin insights. Our AI doesn't just look at images - it understands context.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="premium-card p-8 bg-card scale-in-on-scroll" style={{transitionDelay: `${index * 0.1}s`}}>
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center fade-in-on-scroll">
          <div className="space-y-2">
            <div className="text-4xl font-bold gradient-text">10K+</div>
            <div className="text-muted-foreground">Beta Users</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold gradient-text">99%</div>
            <div className="text-muted-foreground">Accuracy Rate</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold gradient-text">24/7</div>
            <div className="text-muted-foreground">Availability</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold gradient-text">HIPAA</div>
            <div className="text-muted-foreground">Compliant</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;