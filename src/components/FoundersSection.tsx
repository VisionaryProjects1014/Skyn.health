import React from 'react';
import prabhavSanga from '../assets/prabhav-sanga.jpg';
import jaskaranSingh from '../assets/jaskaran-singh.jpg';
import sumukhDev from '../assets/sumukh-dev.jpg';

const FoundersSection = () => {
  const founders = [
    {
      name: "Prabhav Sanga",
      title: "Co-Founder & CEO",
      image: prabhavSanga,
      quote: "AI can democratize access to quality healthcare, starting with dermatology."
    },
    {
      name: "Jaskaran Singh",
      title: "Co-Founder & CTO",
      image: jaskaranSingh,
      quote: "Building trust through transparency in every line of code we write."
    },
    {
      name: "Sumukh Dev",
      title: "Co-Founder & CMO",
      image: sumukhDev,
      quote: "Making healthcare AI accessible and understandable for everyone."
    }
  ];

  return (
    <section className="section-padding bg-gradient-section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three engineers passionate about making healthcare technology more accessible.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <div key={index} className="natural-card p-6 text-center">
              {/* Profile Image */}
              <img
                src={founder.image}
                alt={`${founder.name} - ${founder.title}`}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />

              {/* Name and Title */}
              <h3 className="text-xl font-bold text-foreground mb-1">
                {founder.name}
              </h3>
              <p className="text-primary font-medium mb-4 text-sm">
                {founder.title}
              </p>

              {/* Quote */}
              <blockquote className="text-muted-foreground text-sm leading-relaxed">
                "{founder.quote}"
              </blockquote>
            </div>
          ))}
        </div>

        {/* Simplified Mission */}
        <div className="mt-16 text-center">
          <div className="natural-card p-6 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-foreground mb-3">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              Make quality dermatological insights accessible to everyone through responsible AI development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;