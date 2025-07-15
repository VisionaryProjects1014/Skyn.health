import React from 'react';
import prabhavSanga from '../assets/prabhav-sanga.jpg';
import jaskaranSingh from '../assets/jaskaran-singh.jpg';
import sumukhDev from '../assets/sumukh-dev.jpg';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const FoundersSection = () => {
  useScrollAnimation();
  const founders = [
    {
      name: "Prabhav Sanga",
      title: "Co-Founder & CEO",
      image: prabhavSanga,
      quote: "Combining vision and language models lets us approach diagnosis more like real doctors do."
    },
    {
      name: "Jaskaran Singh", 
      title: "Co-Founder & CTO",
      image: jaskaranSingh,
      quote: "Trust and transparency were our first design principles, not an afterthought."
    },
    {
      name: "Sumukh Dev",
      title: "Co-Founder & CMO", 
      image: sumukhDev,
      quote: "We wanted to bring dermatology insights to every smartphone, ethically and intelligently."
    }
  ];

  return (
    <section className="section-padding" style={{background: 'linear-gradient(180deg, hsl(var(--card)), hsl(var(--secondary)))'}}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in-on-scroll">
          <h2 className="section-title text-foreground mb-6">
            Why We Built Skyn.health
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Meet the team behind the technology that's making skin health insights accessible to everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <div key={index} className="premium-card p-8 text-center bg-card scale-in-on-scroll" style={{transitionDelay: `${index * 0.2}s`}}>
              {/* Profile Image */}
              <img
                src={founder.image}
                alt={`${founder.name} - ${founder.title}`}
                className="w-30 h-30 rounded-full mx-auto mb-6 object-cover"
                style={{width: '120px', height: '120px', boxShadow: 'var(--shadow-medium)'}}
              />

              {/* Name and Title */}
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {founder.name}
              </h3>
              <p className="text-primary font-medium mb-6">
                {founder.title}
              </p>

              {/* Quote */}
              <blockquote className="text-muted-foreground text-lg leading-relaxed italic">
                "{founder.quote}"
              </blockquote>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <div className="premium-card p-8 max-w-4xl mx-auto bg-card scale-in-on-scroll">
            <h3 className="subsection-title text-foreground mb-6">Our Mission</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To democratize access to quality dermatological insights through responsible AI development, 
              making expert-level skin health guidance available to everyone, everywhere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;