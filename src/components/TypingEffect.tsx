
import React, { useState, useEffect } from 'react';

interface TypingEffectProps {
  text: string;
  typingSpeed?: number;
  className?: string;
  onComplete?: () => void;
}

const TypingEffect: React.FC<TypingEffectProps> = ({ 
  text, 
  typingSpeed = 50, 
  className = "", 
  onComplete 
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (currentIndex < text.length) {
      timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, typingSpeed);
    } else {
      setIsComplete(true);
      if (onComplete) onComplete();
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, text, typingSpeed, onComplete]);

  return (
    <div className={`inline-block ${className}`}>
      <span>{displayText}</span>
      {!isComplete && <span className="cursor-blink"></span>}
    </div>
  );
};

export default TypingEffect;
