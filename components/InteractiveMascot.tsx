import React, { useState, useEffect, useRef } from 'react';
import Mascot from './Mascot';
import MascotCommentary from './MascotCommentary';
import { MascotState, Coordinates } from '../types';
import { interactiveReactions } from '../database/mascotComments';
import { playSound } from '../utils/audio';

interface InteractiveMascotProps {
  baseState?: MascotState; 
  message?: string; 
  isMessageVisible?: boolean; 
  className?: string; 
  bubblePlacement?: 'top' | 'bottom' | 'left' | 'right' | 'auto';
  variant?: 'blob' | 'rabbit';
  lookAt?: Coordinates | null;
  selfPosition?: Coordinates;
}

const InteractiveMascot: React.FC<InteractiveMascotProps> = ({
  baseState = 'default',
  message = '',
  isMessageVisible = false,
  className = "w-32 h-32",
  bubblePlacement = 'auto',
  variant = 'blob',
  lookAt = null,
  selfPosition
}) => {
  const [overrideState, setOverrideState] = useState<MascotState | null>(null);
  const [overrideMessage, setOverrideMessage] = useState<string | null>(null);
  const [isOverrideVisible, setIsOverrideVisible] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
        if ((!overrideState && (baseState === 'default' || baseState === 'thinking')) || overrideState === null) {
            setIsBlinking(true);
            setTimeout(() => setIsBlinking(false), 200); 
        }
    }, 2000); 

    return () => clearInterval(blinkInterval);
  }, [overrideState, baseState]);

  // (Keeping tickle logic from previous file)
  useEffect(() => {
      const promptInterval = setInterval(() => {
          const isIdle = !overrideMessage && !message && !isOverrideVisible && !isMessageVisible;
          if (isIdle && Math.random() > 0.7) {
              setOverrideMessage("Tickle me!");
              setIsOverrideVisible(true);
              
              setTimeout(() => {
                  setIsOverrideVisible(false);
                  setTimeout(() => setOverrideMessage(null), 300); 
              }, 3000);
          }
      }, 10000);
      return () => clearInterval(promptInterval);
  }, [overrideMessage, message, isOverrideVisible, isMessageVisible]);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    playSound('click');
    const reaction = interactiveReactions[Math.floor(Math.random() * interactiveReactions.length)];
    setOverrideState(reaction.state);
    setOverrideMessage(reaction.text);
    setIsOverrideVisible(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      setOverrideState(null);
      setIsOverrideVisible(false);
      setOverrideMessage(null);
    }, 4500);
  };

  const activeState = overrideState || baseState;
  const displayState = (!overrideState && isBlinking && (activeState === 'default' || activeState === 'thinking')) 
                       ? 'blinking' 
                       : activeState;
  const displayMessage = overrideMessage || message;
  const isVisible = isOverrideVisible || isMessageVisible;

  // (Keeping Bubble Logic)
  const getBubblePositionClasses = () => {
      const baseClasses = "pointer-events-none absolute z-50 w-max transition-all duration-300";
      switch (bubblePlacement) {
          case 'top': return `${baseClasses} bottom-full mb-2 left-1/2 -translate-x-1/2`;
          case 'bottom': return `${baseClasses} top-full mt-2 left-1/2 -translate-x-1/2`;
          case 'left': return `${baseClasses} right-full mr-3 top-1/2 -translate-y-1/2`;
          case 'right': return `${baseClasses} left-full ml-3 top-1/2 -translate-y-1/2`;
          case 'auto': default: return `${baseClasses} bottom-full mb-2 left-1/2 -translate-x-1/2 md:bottom-auto md:mb-0 md:left-full md:ml-3 md:top-1/2 md:-translate-y-1/2 md:translate-x-0`;
      }
  };

  const getCommentaryPlacement = (): 'top' | 'bottom' | 'left' | 'right' | 'auto' => {
      if (bubblePlacement === 'auto') return 'auto';
      return bubblePlacement;
  };

  return (
    <div className="relative flex flex-col items-center justify-center group">
      <div 
        className={`${className} cursor-pointer hover:scale-105 transition-transform duration-200 relative z-40`}
        onClick={handleClick}
      >
        <Mascot 
            state={displayState} 
            variant={variant} 
            lookAt={lookAt}
            selfPosition={selfPosition}
        />
      </div>
      <div className={getBubblePositionClasses()}>
          <MascotCommentary message={displayMessage} isVisible={isVisible} placement={getCommentaryPlacement()}/>
      </div>
    </div>
  );
};

export default InteractiveMascot;