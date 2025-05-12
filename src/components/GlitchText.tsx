
import React, { useState, useEffect } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  glitchInterval?: number;
  glitchDuration?: number;
}

const GlitchText: React.FC<GlitchTextProps> = ({
  text,
  className = "",
  glitchInterval = 3000,
  glitchDuration = 200
}) => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    // Start the glitch effect at regular intervals
    const intervalId = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), glitchDuration);
    }, glitchInterval);

    return () => clearInterval(intervalId);
  }, [glitchInterval, glitchDuration]);

  return (
    <span 
      className={`${className} relative inline-block overflow-hidden
                 ${isGlitching ? 'animate-glitch text-terminal-neon' : ''}`}
      style={{
        textShadow: isGlitching 
          ? '0 0 2px #39D353, 0 0 10px #39D353, 0 0 10px #39D353, 0 0 20px #39D353' 
          : 'none'
      }}
    >
      {text}
      {isGlitching && (
        <span 
          className="absolute inset-0 block overflow-hidden" 
          style={{ 
            clipPath: 'inset(45% 0 50% 0)',
            transform: 'translate(-5px, 0)',
            opacity: 0.8
          }}
        >
          {text}
        </span>
      )}
      {isGlitching && (
        <span 
          className="absolute inset-0 block overflow-hidden" 
          style={{ 
            clipPath: 'inset(70% 0 20% 0)', 
            transform: 'translate(5px, 0)',
            opacity: 0.8
          }}
        >
          {text}
        </span>
      )}
    </span>
  );
};

export default GlitchText;
