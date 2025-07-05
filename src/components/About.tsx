import React, { useEffect, useRef } from 'react';
import { about } from '@/pages/portfolio';
import { Button } from './ui/button';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const About: React.FC = () => {
  const { name, role, description, resume, social } = about;
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate heading (typewriter/slide-up)
    if (headingRef.current) {
      headingRef.current.animate([
        { opacity: 0, transform: 'translateY(40px)' },
        { opacity: 1, transform: 'translateY(0)' }
      ], { duration: 800, fill: 'forwards', easing: 'cubic-bezier(.5,1.5,.5,1)' });
    }
    // Subtitle
    if (subtitleRef.current) {
      subtitleRef.current.animate([
        { opacity: 0, transform: 'translateY(30px)' },
        { opacity: 1, transform: 'translateY(0)' }
      ], { duration: 700, delay: 400, fill: 'forwards', easing: 'cubic-bezier(.5,1.5,.5,1)' });
    }
    // Description
    if (descRef.current) {
      descRef.current.animate([
        { opacity: 0, transform: 'translateY(20px)' },
        { opacity: 1, transform: 'translateY(0)' }
      ], { duration: 700, delay: 700, fill: 'forwards', easing: 'cubic-bezier(.5,1.5,.5,1)' });
    }
    // Button
    if (btnRef.current) {
      btnRef.current.animate([
        { opacity: 0, transform: 'scale(0.8)' },
        { opacity: 1, transform: 'scale(1)' }
      ], { duration: 500, delay: 1100, fill: 'forwards', easing: 'cubic-bezier(.5,1.5,.5,1)' });
    }
    // Icons
    if (iconsRef.current) {
      iconsRef.current.animate([
        { opacity: 0, transform: 'scale(0.8)' },
        { opacity: 1, transform: 'scale(1)' }
      ], { duration: 500, delay: 1300, fill: 'forwards', easing: 'cubic-bezier(.5,1.5,.5,1)' });
    }
  }, []);

  return (
    <section className="py-24 px-4">
      <div className="max-w-3xl mx-auto bg-card/80 rounded-2xl shadow-lg p-10 flex flex-col items-center text-center">
        {name && (
          <h1
            ref={headingRef}
            className="font-extrabold mb-4 text-4xl sm:text-5xl lg:text-6xl text-foreground"
            style={{ letterSpacing: 1, fontFamily: 'Poppins, Inter, sans-serif' }}
          >
            Hi, I am <span className="text-primary dark:text-primary">{name}</span>.
          </h1>
        )}
        {role && (
          <h2
            ref={subtitleRef}
            className="mb-6 text-2xl sm:text-3xl text-muted-foreground font-semibold"
          >
            {role}
          </h2>
        )}
        {description && (
          <p
            ref={descRef}
            className="mb-10 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            {description}
          </p>
        )}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
          {resume && (
            <a
              ref={btnRef}
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Button 
                variant="default" 
                size="lg"
                className="font-semibold text-base px-8 py-3 transition-all duration-200 group-hover:scale-105"
              >
                Resume
              </Button>
            </a>
          )}
          <div ref={iconsRef} className="flex items-center gap-4 justify-center mt-4 sm:mt-0">
            {social?.github && (
              <a
                href={social.github}
                aria-label="github"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-2xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            )}
            {social?.linkedin && (
              <a
                href={social.linkedin}
                aria-label="linkedin"
                className="text-primary hover:text-primary/80 transition-colors duration-200 text-2xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
