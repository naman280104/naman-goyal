import React, { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

const KonamiCode: React.FC<{ onActivate: () => void }> = ({ onActivate }) => {
  const { toast } = useToast();
  const [sequence, setSequence] = useState<string[]>([]);
  const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key;
      const newSequence = [...sequence, key];
      
      // Only keep the last 10 keys pressed
      if (newSequence.length > konamiSequence.length) {
        newSequence.shift();
      }
      
      setSequence(newSequence);
      
      // Check if the sequence matches the Konami code
      if (newSequence.length === konamiSequence.length) {
        const isMatch = newSequence.every((value, index) => value === konamiSequence[index]);
        if (isMatch) {
          toast({
            title: "Konami Code Activated!",
            description: "You've found the Easter egg! Switching to alternate theme...",
          });
          onActivate();
          setSequence([]);
        }
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [sequence, onActivate, toast]);
  
  return null; // This component doesn't render anything
};

export default KonamiCode;
