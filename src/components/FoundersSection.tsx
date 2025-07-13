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
    <section className="section-padding bg-gradient-section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why We Built Strata
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three visionaries united by a mission to democratize dermatological care 
            through ethical AI and advanced technology.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <div key={index} className="floating-card p-8 text-center">
              {/* Profile Image */}
              <div className="relative mb-6">
                <img
                  src={founder.image}
                  alt={`${founder.name} - ${founder.title}`}
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-primary-light"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>

              {/* Name and Title */}
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {founder.name}
              </h3>
              <p className="text-primary font-medium mb-6">
                {founder.title}
              </p>

              {/* Quote */}
              <blockquote className="text-muted-foreground italic leading-relaxed">
                "{founder.quote}"
              </blockquote>

              {/* Quote decoration */}
              <div className="mt-6 flex justify-center">
                <div className="w-12 h-1 bg-gradient-primary rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-card max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To make world-class dermatological insights accessible to everyone, 
              regardless of location or economic status, while maintaining the highest 
              standards of privacy, accuracy, and ethical AI development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;