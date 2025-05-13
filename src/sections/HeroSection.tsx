
import React, { useState, useEffect } from 'react';
import TypingEffect from '../components/TypingEffect';
import { ArrowDown, Download } from 'lucide-react';
import { Button } from '../components/ui/button';

const HeroSection: React.FC = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const textSequence = [
    "Naman Goyal",
    "Software Engineer",
    "Full-Stack Developer"
  ];
  const name = "Naman Goyal";

  const handleTypingComplete = () => {
    setTimeout(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textSequence.length);
    }, 2000); // Wait 2 seconds before typing the next text
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative overflow-hidden px-6">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-terminal-dark"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-terminal-blue/10 via-transparent to-transparent"></div>
      </div>
      
      <div className="container mx-auto z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <p className="text-terminal-green font-mono mb-4">root@naman-goyal:~$</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-sans tracking-wider">
              <TypingEffect 
                // text={textSequence[currentTextIndex]}
                text='Naman Goyal'
                typingSpeed={70}
                onComplete={()=>{}}
                className="text-white"
              />
            </h1>
            <p className="text-lg text-gray-400 mb-8 font-mono">
              Software Engineer | Full-Stack Developer
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <a 
                href="#contact" 
                className="px-6 py-3 rounded-md bg-terminal-blue text-white font-medium hover:bg-terminal-blue/80 transition-all duration-2000 inline-flex items-center justify-center space-x-2 animate-pulse-glow"
              >
                Get In Touch
              </a>
              
              <a 
                href="Naman_Resume.pdf"
                download="Naman_Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-terminal-neon transition-all duration-200 font-mono group"
              >
                <span>_download_resume</span>
                <Download 
                  size={18} 
                  className="group-hover:translate-y-1 transition-all duration-200" 
                />
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">

            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full border-4 border-terminal-blue/30 animate-pulse-glow pointer-events-none z-0"></div>

              {/* Image Layer (not affected by animation) */}
              <div className="relative w-full h-full rounded-full overflow-hidden z-10">
                <img
                  src="naman-profile-pic.jpeg"
                  alt="Naman Goyal"
                  className="w-full h-full object-cover"
                />
              </div>
          </div>
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
