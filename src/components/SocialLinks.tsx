
import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ 
  className = "", 
  iconSize = 20 
}) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <a 
        href="https://github.com/naman280104" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-white hover:text-terminal-green transition-colors duration-300"
        aria-label="GitHub"
      >
        <Github size={iconSize} />
      </a>
      <a 
        href="https://www.linkedin.com/in/naman-goyal-1a91ab228" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-white hover:text-terminal-blue transition-colors duration-300"
        aria-label="LinkedIn"
      >
        <Linkedin size={iconSize} />
      </a>
      <a 
        href="mailto:naman280104@gmail.com" 
        className="text-white hover:text-terminal-purple transition-colors duration-300"
        aria-label="Email"
      >
        <Mail size={iconSize} />
      </a>
      <a 
        href="tel:9887537123" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-white hover:text-terminal-cyan transition-colors duration-300"
        aria-label="Phone"
      >
        <Phone size={iconSize} />
      </a>
    </div>
  );
};

export default SocialLinks;
