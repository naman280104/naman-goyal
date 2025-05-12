
import React from 'react';

interface FloatingCodeProps {
  snippets: string[];
  className?: string;
}

const FloatingCode: React.FC<FloatingCodeProps> = ({ snippets, className = "" }) => {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden opacity-10 select-none ${className}`}>
      {snippets.map((snippet, index) => (
        <div 
          key={index}
          className="absolute text-xs font-mono text-terminal-green"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            transform: `rotate(${Math.random() * 10 - 5}deg)`,
            animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          {snippet}
        </div>
      ))}
    </div>
  );
};

export default FloatingCode;
