
import React, { useState, useEffect } from 'react';
import TypingEffect from '../components/TypingEffect';
import SocialLinks from '../components/SocialLinks';
import { ArrowDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const textSequence = [
    "Hi, I'm Naman Goyal",
    "Full-Stack Developer",
    "Competitive Programmer"
  ];

  const handleTypingComplete = () => {
    setTimeout(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textSequence.length);
    }, 2000); // Wait 2 seconds before typing the next text
  };

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden px-6">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-terminal-dark"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-terminal-blue/10 via-transparent to-transparent"></div>
      </div>
      
      <div className="container mx-auto z-10">
        <div className="max-w-3xl">
          <p className="text-terminal-green font-mono mb-4">root@naman-goyal:~$</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <TypingEffect 
              text={textSequence[currentTextIndex]}
              typingSpeed={70}
              onComplete={handleTypingComplete}
              className="text-white"
            />
          </h1>
          <p className="text-lg text-gray-400 mb-8 font-mono">
            CSE Undergraduate @ IIT Jodhpur | 2021-2025 | CGPA 8.90/10
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 mb-12">
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-md bg-terminal-blue text-white font-medium hover:bg-terminal-blue/80 transition-all duration-300 inline-flex items-center justify-center space-x-2 terminal-container animate-pulse-glow"
            >
              Download Resume
            </a>
            <SocialLinks className="mt-2 sm:mt-0" />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-400 hover:text-terminal-neon transition-colors">
          <ArrowDown />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
