import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "Is Skyn.health a replacement for a doctor?",
      answer: "No, Skyn.health is designed to complement, not replace, professional medical care. Our AI provides preliminary insights and educational information to help you make informed decisions about when to seek professional dermatological care. Always consult with a healthcare provider for medical advice, diagnosis, or treatment."
    },
    {
      question: "Is my data private?",
      answer: "Absolutely. We prioritize your privacy with end-to-end encryption, HIPAA-compliant data handling, and strict data governance policies. Your photos and personal information are never shared without your explicit consent, and you maintain full control over your data at all times."
    },
    {
      question: "How accurate is the AI?",
      answer: "Our AI models achieve over 99% accuracy in clinical validation studies, comparable to board-certified dermatologists. However, AI analysis should be considered as a preliminary assessment tool. The accuracy may vary based on image quality, lighting conditions, and the specific skin condition being analyzed."
    },
    {
      question: "What types of skin conditions can Skyn.health analyze?",
      answer: "Skyn.health can analyze a wide range of common skin conditions including acne, eczema, psoriasis, moles, rashes, and other dermatological concerns. Our AI is continuously learning and expanding its diagnostic capabilities through ongoing clinical validation studies."
    },
    {
      question: "How much does Skyn.health cost?",
      answer: "During our beta phase, Skyn.health is free to use. We're committed to making skin health insights accessible to everyone. Future pricing will be transparent and affordable, with options for different usage levels and potential insurance coverage."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="section-padding bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about Skyn.health and AI-powered skin health analysis.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-border rounded-xl overflow-hidden bg-card">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left bg-card hover:bg-muted transition-colors duration-200 flex items-center justify-between"
              >
                <h3 className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                {openFAQ === index ? (
                  <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                )}
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Support */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help.
          </p>
          <button className="natural-button">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;