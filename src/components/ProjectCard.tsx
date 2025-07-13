import React from 'react';
import { Project } from '@/pages/portfolio';
import { Button } from './ui/button';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="group bg-card border rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col overflow-hidden hover:scale-[1.02]">
    <div className="p-6 flex flex-col h-full">
      <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
        {project.name}
      </h3>
      <p className="text-muted-foreground mb-4 flex-grow leading-relaxed">
        {project.description}
      </p>
      {project.stack && (
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {project.stack.map((item, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      )}
      <div className="flex justify-center gap-3 mt-auto pt-4">
        {project.sourceCode && (
          <a 
            href={project.sourceCode} 
            aria-label="source code" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group/link"
          >
            <Button 
              variant="outline" 
              size="sm"
              className="group-hover/link:bg-primary group-hover/link:text-primary-foreground transition-colors"
            >
              <FaGithub className="mr-2" />
              Code
            </Button>
          </a>
        )}
        {project.livePreview && (
          <a 
            href={project.livePreview} 
            aria-label="live preview" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group/link"
          >
            <Button 
              variant="outline" 
              size="sm"
              className="group-hover/link:bg-primary group-hover/link:text-primary-foreground transition-colors"
            >
              <FaExternalLinkAlt className="mr-2" />
              Live
            </Button>
          </a>
        )}
        {project.demo && (
          <a 
            href={project.demo} 
            aria-label="demo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group/link"
          >
            <Button 
              variant="outline" 
              size="sm"
              className="group-hover/link:bg-primary group-hover/link:text-primary-foreground transition-colors"
            >
              <FaExternalLinkAlt className="mr-2" />
              Demo
            </Button>
          </a>
        )}
      </div>
    </div>
  </div>
);

export default ProjectCard;
