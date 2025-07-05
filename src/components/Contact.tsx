import React from 'react';
import { contact } from '@/pages/portfolio';
import { Button } from './ui/button';

const Contact: React.FC = () => {
  if (!contact.email) return null;
  return (
    <section className="py-20 px-4" id="contact" style={{scrollMarginTop: '90px'}}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-center uppercase mb-12 text-3xl font-bold text-foreground tracking-wide">
          Contact
        </h2>
        <div className="mb-8">
          <p className="text-lg text-muted-foreground mb-6">
            Let's work together! Feel free to reach out.
          </p>
        </div>
        <a 
          href={`mailto:${contact.email}`}
          className="inline-block group"
        >
          <Button 
            variant="outline" 
            size="lg"
            className="font-semibold text-base px-8 py-3 transition-all duration-200 group-hover:scale-105"
          >
            Email me
          </Button>
        </a>
      </div>
    </section>
  );
};

export default Contact;
