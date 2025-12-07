import React, { useState, useEffect, useRef } from 'react';
import InteractiveMascot from './InteractiveMascot';
import { Coordinates } from '../types';

interface RoamingMascotProps {
    onPositionChange?: (pos: Coordinates) => void;
}

const RoamingMascot: React.FC<RoamingMascotProps> = ({ onPositionChange }) => {
  const [position, setPosition] = useState({ x: 90, y: 90 }); 
  const [isMoving, setIsMoving] = useState(false);
  const [bubblePos, setBubblePos] = useState<'left' | 'right' | 'top'>('left');
  const containerRef = useRef<HTMLDivElement>(null);

  // Central Mascot is roughly at Top Center
  const centralMascotPos = { x: 50, y: 15 };

  useEffect(() => {
    const moveMascot = () => {
      setIsMoving(true);
      
      const isDesktop = window.innerWidth >= 768;
      let newX, newY;
      let newBubblePos: 'left' | 'right' | 'top';

      if (isDesktop) {
          const side = Math.random() > 0.5 ? 'left' : 'right';
          if (side === 'left') {
              newX = 3 + Math.random() * 12; 
              newBubblePos = 'right'; 
          } else {
              newX = 85 + Math.random() * 12; 
              newBubblePos = 'left'; 
          }
          newY = 15 + Math.random() * 70;
      } else {
          newX = 10 + Math.random() * 80;
          newY = 85 + Math.random() * 8; 
          newBubblePos = 'top'; 
      }

      const newPos = { x: newX, y: newY };
      setPosition(newPos);
      setBubblePos(newBubblePos);
      
      // Notify parent of new position
      if (onPositionChange) {
          onPositionChange(newPos);
      }

      setTimeout(() => {
        setIsMoving(false);
      }, 4000); 
    };

    const initialTimer = setTimeout(moveMascot, 1000);
    
    const intervalId = setInterval(() => {
        moveMascot();
    }, 10000 + Math.random() * 5000); 

    return () => {
        clearTimeout(initialTimer);
        clearInterval(intervalId);
    };
  }, [onPositionChange]);

  return (
    <div 
        ref={containerRef}
        className="fixed z-[100] pointer-events-none transition-all duration-[4000ms] ease-in-out will-change-transform"
        style={{ 
            left: `${position.x}%`, 
            top: `${position.y}%`,
            transform: 'translate(-50%, -50%)' 
        }}
    >
        <div className={`pointer-events-auto transition-transform duration-500 ${isMoving ? 'scale-110' : 'scale-100'}`}>
            <InteractiveMascot 
                className="w-20 h-20 md:w-28 md:h-28 drop-shadow-2xl" 
                bubblePlacement={bubblePos}
                variant="rabbit"
                selfPosition={position}
                lookAt={centralMascotPos}
            />
        </div>
    </div>
  );
};

export default RoamingMascot;