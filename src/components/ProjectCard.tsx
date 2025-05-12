
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ExternalLink, Github, Code } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';

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
  // Default image if none provided
  const bgImage = imageUrl || 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80';
  
  return (
    <Card className="overflow-hidden group border-white/10 bg-transparent transition-all duration-300 hover:border-terminal-blue hover:scale-[1.02]">
      <div 
        className="h-48 w-full relative overflow-hidden"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-all duration-300"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="flex gap-3">
            {githubUrl && (
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-black/70 p-2 rounded-full text-white hover:text-terminal-blue transition-colors"
                aria-label="GitHub Repository"
              >
                <Github size={20} />
              </a>
            )}
            {projectUrl && (
              <a 
                href={projectUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-black/70 p-2 rounded-full text-white hover:text-terminal-blue transition-colors"
                aria-label="Live Project"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle className="text-xl flex items-center gap-2 text-terminal-blue">
          <Code size={18} />
          {title}
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <p className="text-gray-300 text-sm">{description}</p>
      </CardContent>
      
      <CardFooter className="flex flex-wrap gap-2 pt-0">
        {techStack.map((tech, index) => (
          <HoverCard key={index}>
            <HoverCardTrigger>
              <Badge 
                variant="outline" 
                className="bg-black/50 hover:bg-terminal-blue/20 transition-colors text-xs cursor-pointer"
              >
                {tech}
              </Badge>
            </HoverCardTrigger>
            <HoverCardContent className="text-xs bg-black/90 border-terminal-blue/20">
              Built with {tech}
            </HoverCardContent>
          </HoverCard>
        ))}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
