import React from 'react';
import { skills } from '@/pages/portfolio';

const Skills: React.FC = () => {
  if (!skills.length) return null;
  return (
    <section className="py-20 px-4" id="skills" style={{scrollMarginTop: '90px'}}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center uppercase mb-12 text-3xl font-bold text-foreground tracking-wide">
          Skills
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-3 max-w-4xl mx-auto">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-6 py-3 rounded-full font-semibold text-sm bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all duration-200 cursor-pointer hover:scale-105 shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
