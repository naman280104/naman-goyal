
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  imageUrl?: string;
  projectUrl?: string;
  githubUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  imageUrl,
  projectUrl,
  githubUrl
}) => {
  return (
    <div className="terminal-container group transition-all duration-300 hover:border-terminal-blue hover:scale-[1.02] overflow-hidden">
      <div className="terminal-header flex justify-between">
        <div className="flex items-center">
          <div className="terminal-dot bg-red-500"></div>
          <div className="terminal-dot bg-yellow-500"></div>
          <div className="terminal-dot bg-green-500"></div>
          <span className="ml-2 text-sm font-mono text-gray-400">{title}.jsx</span>
        </div>
        <div className="flex space-x-2">
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-terminal-neon">
              <Github size={16} />
            </a>
          )}
          {projectUrl && (
            <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-terminal-neon">
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold mb-3 text-terminal-blue">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, index) => (
            <span 
              key={index}
              className="px-2 py-1 text-xs rounded-full bg-terminal-black border border-terminal-blue/30 text-terminal-blue"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
