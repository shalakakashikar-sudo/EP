import React, { useMemo } from 'react';
import { MascotState, Coordinates } from '../types';

interface MascotProps {
  state?: MascotState;
  variant?: 'blob' | 'rabbit';
  lookAt?: Coordinates | null; // Target to look at (0-100% of screen)
  selfPosition?: Coordinates;  // Current position of this mascot (0-100%)
}

interface FeatureProps {
  cx?: number;
  cy?: number;
  mood: MascotState;
  lookOffset?: { x: number, y: number };
}

const Mascot: React.FC<MascotProps> = ({ 
  state = 'default' as MascotState, 
  variant = 'blob',
  lookAt,
  selfPosition = { x: 50, y: 50 } // Default center
}) => {
  
  // Define colors based on variant
  const isRabbit = variant === 'rabbit';
  
  // Rabbit Colors (Red Hood Style)
  const rabbitRed = '#FF6B6B'; // Coral/Red for hood
  const rabbitWhite = '#FFFFFF';
  const rabbitStroke = '#1E1A18'; // Bold dark outline
  
  // Original Blob Colors
  const strokeColor = isRabbit ? rabbitStroke : '#BE185D'; 
  const bodyFill = isRabbit ? 'transparent' : 'url(#body-gradient)'; // Rabbit body is drawn by specific components

  // Calculate Eye Movement
  const lookOffset = useMemo(() => {
    if (!lookAt) return { x: 0, y: 0 };

    const dx = lookAt.x - selfPosition.x;
    const dy = lookAt.y - selfPosition.y;

    const maxOffset = 3.5;
    const distance = Math.sqrt(dx * dx + dy * dy) || 1;
    
    const moveX = (dx / distance) * Math.min(Math.abs(dx / 10), maxOffset);
    const moveY = (dy / distance) * Math.min(Math.abs(dy / 10), maxOffset);

    return { x: moveX, y: moveY };
  }, [lookAt, selfPosition]);


  const getAnimationClass = () => {
    switch (state) {
      case 'correct':
      case 'happy':
        return 'animate-mascot-correct';
      case 'incorrect':
        return 'animate-mascot-incorrect';
      case 'wowed':
      case 'star-struck':
        return 'animate-mascot-wowed';
      case 'sad':
        return 'animate-mascot-sad';
      case 'confused':
        return 'animate-mascot-wobble';
      case 'dancing':
      case 'cheeky':
        return 'animate-mascot-dance';
      case 'thinking':
      case 'nerdy':
      case 'skeptical':
      case 'side-eye':
      case 'default':
        return 'animate-mascot-breathe';
      case 'cool':
        return 'animate-mascot-float';
      case 'sleeping':
        return 'animate-mascot-snore';
      case 'shocked':
        return 'animate-mascot-shocked';
      case 'excited':
        return 'animate-mascot-excited';
      case 'silly':
        return 'animate-mascot-silly';
      case 'proud':
        return 'animate-mascot-proud';
      case 'love':
        return 'animate-mascot-heartbeat';
      case 'laughing':
        return 'animate-mascot-laugh';
      case 'scared':
        return 'animate-mascot-scared';
      case 'impatient':
        return 'animate-mascot-impatient';
      case 'flipping':
        return 'animate-mascot-flip';
      case 'tickled':
        return 'animate-mascot-tickle';
      case 'blinking':
        return 'animate-mascot-breathe'; 
      default:
        return 'animate-gentle-bounce';
    }
  };

  /* --- RABBIT COMPONENTS (Red Hood Style) --- */
  const RabbitHoodAndEars = ({ mood }: { mood: MascotState }) => {
    // Dynamic ears based on mood
    const isSad = ['sad', 'incorrect', 'scared', 'tired', 'sleeping'].includes(mood);
    const isPerked = ['happy', 'excited', 'wowed', 'star-struck', 'listening'].includes(mood);
    
    // Ear paths (Default is big round upright)
    let leftEarPath = "M 20 45 C 10 10, 30 5, 45 45";
    let rightEarPath = "M 80 45 C 90 10, 70 5, 55 45";

    if (isSad) {
        // Droopy ears
        leftEarPath = "M 20 45 C 5 50, 5 70, 20 60";
        rightEarPath = "M 80 45 C 95 50, 95 70, 80 60";
    } else if (isPerked) {
        // Higher, more alert
        leftEarPath = "M 20 45 C 10 0, 35 0, 45 45";
        rightEarPath = "M 80 45 C 90 0, 65 0, 55 45";
    }

    return (
        <g>
           {/* Left Ear */}
           <path 
             d={leftEarPath}
             fill={rabbitRed} 
             stroke={strokeColor} 
             strokeWidth="3" 
             strokeLinecap="round" 
           />
           {/* Right Ear */}
           <path 
             d={rightEarPath} 
             fill={rabbitRed} 
             stroke={strokeColor} 
             strokeWidth="3" 
             strokeLinecap="round" 
           />
           {/* Hood Body */}
           <path 
             d="M 15 55 C 10 85, 30 95, 50 95 C 70 95, 90 85, 85 55 C 83 40, 70 30, 50 30 C 30 30, 17 40, 15 55 Z" 
             fill={rabbitRed} 
             stroke={strokeColor} 
             strokeWidth="3" 
           />
        </g>
    );
  };

  const RabbitFaceArea = () => (
      <ellipse 
        cx="50" cy="62" 
        rx="32" ry="28" 
        fill={rabbitWhite} 
        stroke={strokeColor} 
        strokeWidth="3" 
      />
  );

  const RabbitFeet = () => (
      <g>
          <path d="M 35 90 Q 35 96 42 96 L 45 96" fill={rabbitWhite} stroke={strokeColor} strokeWidth="3" strokeLinecap="round" />
          <path d="M 65 90 Q 65 96 58 96 L 55 96" fill={rabbitWhite} stroke={strokeColor} strokeWidth="3" strokeLinecap="round" />
      </g>
  );

  const KawaiiEyes = ({ mood, lookOffset }: FeatureProps) => {
      const { x, y } = lookOffset || { x: 0, y: 0 };
      
      // Glasses for Nerdy
      const Glasses = () => (
         <g stroke={strokeColor} strokeWidth="2" fill="rgba(255,255,255,0.3)">
             <circle cx="35" cy="60" r="10" />
             <circle cx="65" cy="60" r="10" />
             <line x1="45" y1="60" x2="55" y2="60" />
         </g>
      );

      // Sunglasses for Cool
      const Shades = () => (
          <g fill="#1E1A18">
              <path d="M 22 55 Q 35 55 48 58 Q 35 70 22 65 Z" />
              <path d="M 78 55 Q 65 55 52 58 Q 65 70 78 65 Z" />
              <line x1="48" y1="58" x2="52" y2="58" stroke="#1E1A18" strokeWidth="3" />
          </g>
      );

      if (mood === 'cool') return <Shades />;
      
      if (mood === 'love') {
          return (
            <g fill="#F43F5E" transform={`translate(${x}, ${y})`}>
               <path d="M 35 64 L 31 60 A 2 2 0 0 1 35 58 A 2 2 0 0 1 39 60 Z" />
               <path d="M 65 64 L 61 60 A 2 2 0 0 1 65 58 A 2 2 0 0 1 69 60 Z" />
            </g>
          );
      }

      if (mood === 'star-struck') {
          return (
             <g fill="#FFB000" stroke={strokeColor} strokeWidth="1" transform={`translate(${x}, ${y})`}>
                <path transform="translate(35, 60) scale(0.6)" d="M0,-10 L2.9,-3.2 L10,-3.2 L4.5,1.5 L6.4,8.8 L0,4.8 L-6.4,8.8 L-4.5,1.5 L-10,-3.2 L-2.9,-3.2 Z" />
                <path transform="translate(65, 60) scale(0.6)" d="M0,-10 L2.9,-3.2 L10,-3.2 L4.5,1.5 L6.4,8.8 L0,4.8 L-6.4,8.8 L-4.5,1.5 L-10,-3.2 L-2.9,-3.2 Z" />
             </g>
          );
      }

      if (['blinking', 'sleeping', 'sad'].includes(mood)) {
          return (
            <g stroke={strokeColor} strokeWidth="3" fill="none" strokeLinecap="round" transform={`translate(${x}, ${y})`}>
                <path d="M 28 62 Q 35 66 42 62" />
                <path d="M 58 62 Q 65 66 72 62" />
            </g>
          );
      }
      
      if (mood === 'wink') {
           return (
            <g transform={`translate(${x}, ${y})`}>
                <circle cx="35" cy="60" r="6" fill="#000" />
                <circle cx="33" cy="58" r="2" fill="white" />
                <path d="M 58 60 Q 65 64 72 60" stroke={strokeColor} strokeWidth="3" fill="none" strokeLinecap="round" />
            </g>
           )
      }

      return (
          <g transform={`translate(${x}, ${y})`}>
              <circle cx="35" cy="60" r="6" fill="#000" />
              <circle cx="33" cy="58" r="2" fill="white" />
              <circle cx="65" cy="60" r="6" fill="#000" />
              <circle cx="63" cy="58" r="2" fill="white" />
              {mood === 'nerdy' && <Glasses />}
          </g>
      );
  };

  const RabbitBlush = () => (
      <g opacity="0.6">
          <ellipse cx="25" cy="68" rx="5" ry="3" fill="#FCA5A5" />
          <ellipse cx="75" cy="68" rx="5" ry="3" fill="#FCA5A5" />
      </g>
  );

  const TinyMouth = ({ mood }: { mood: MascotState }) => {
      const d = (mood === 'happy' || mood === 'correct' || mood === 'excited' || mood === 'laughing') 
        ? "M 45 68 Q 50 75 55 68" 
        : (mood === 'shocked' ? "M 48 70 A 2 2 0 1 1 52 70 A 2 2 0 1 1 48 70" : "M 46 70 Q 50 72 54 70");
      
      const fill = mood === 'shocked' ? "#333" : "none";

      return <path d={d} stroke={mood === 'shocked' ? 'none' : strokeColor} strokeWidth="2" fill={fill} strokeLinecap="round" />;
  };

  /* --- BLOB COMPONENTS --- */

  const Arms = ({ mood }: FeatureProps) => {
    if (isRabbit) return null;
    return (
        <g stroke="#1E1A18" strokeWidth="5" strokeLinecap="round" fill="none">
             {mood === 'happy' && <><path d="M 15 55 Q 5 35 15 25" /><path d="M 85 55 Q 95 35 85 25" /></>}
             {mood === 'default' && <><path d="M 12 60 Q 5 65 12 70" /><path d="M 88 60 Q 95 65 88 70" /></>}
             {!['happy','default'].includes(mood) && <><path d="M 15 60 Q 5 70 15 80" /><path d="M 85 60 Q 95 70 85 80" /></>}
        </g>
    );
  };

  const Brows = ({ mood }: FeatureProps) => {
      if (isRabbit) return null; 

      switch(mood) {
          case 'incorrect':
          case 'sad':
              return (
                  <g stroke="#1E1A18" strokeWidth="3" strokeLinecap="round" fill="none">
                      <path d="M 35 40 Q 40 36 45 42" />
                      <path d="M 55 42 Q 60 36 65 40" />
                  </g>
              );
           case 'skeptical':
               return (
                    <g stroke="#1E1A18" strokeWidth="3" strokeLinecap="round" fill="none">
                        <path d="M 30 35 Q 35 28 40 35" />
                        <path d="M 60 40 L 70 40" />
                    </g>
               );
            default:
                // Widened eyebrows for the blob mascot
                return (
                   <g stroke="#1E1A18" strokeWidth="3" strokeLinecap="round" fill="none">
                      <path d="M 30 38 Q 35 36 40 38" />
                      <path d="M 60 38 Q 65 36 70 38" />
                  </g>
                );
      }
  }

  const Eyes = ({ mood, lookOffset }: FeatureProps) => {
    if (isRabbit) return <KawaiiEyes mood={mood} lookOffset={lookOffset} />;

    const { x, y } = lookOffset || { x: 0, y: 0 };

    // Helper: Move pupil based on offset
    const EyeBall = ({cx, cy}: {cx:number, cy:number}) => (
         <g>
            <circle cx={cx} cy={cy} r="7" fill="#1E1A18" />
            <circle cx={cx - 2 + x} cy={cy - 2 + y} r="3" fill="white" /> {/* Pupil moves */}
         </g>
    );
    
    // ... Simplified closed/wink eyes (no pupil movement needed) ...
    const ClosedEye = ({cx, cy}: {cx:number, cy:number}) => (
        <path d={`M ${cx - 7} ${cy} Q ${cx} ${cy + 5} ${cx + 7} ${cy}`} stroke="#1E1A18" strokeWidth="4" strokeLinecap="round" fill="none" />
    );
    const WinkEye = ({cx, cy}: {cx:number, cy:number}) => (
        <path d={`M ${cx - 7} ${cy} Q ${cx} ${cy - 5} ${cx + 7} ${cy}`} stroke="#1E1A18" strokeWidth="4" strokeLinecap="round" fill="none" />
    );
    const HappyEye = ({cx, cy}: {cx:number, cy:number}) => (
        <path d={`M ${cx - 8} ${cy} Q ${cx} ${cy - 8} ${cx + 8} ${cy}`} stroke="#1E1A18" strokeWidth="4" strokeLinecap="round" fill="none" />
    );

    switch (mood) {
      case 'correct':
      case 'happy':
      case 'dancing':
      case 'excited':
      case 'flipping':
        return <><HappyEye cx={35} cy={50} /><HappyEye cx={65} cy={50} /></>;
      case 'wowed':
        return (
          <>
            <circle cx={35} cy={50} r="10" fill="#1E1A18" />
            <circle cx={32 + x} cy={48 + y} r="4" fill="white" />
            <circle cx={65} cy={50} r="10" fill="#1E1A18" />
            <circle cx={62 + x} cy={48 + y} r="4" fill="white" />
          </>
        );
      case 'blinking':
      case 'sad':
      case 'sleeping':
        return <><ClosedEye cx={35} cy={52} /><ClosedEye cx={65} cy={52} /></>;
      case 'wink':
         return <><EyeBall cx={35} cy={50} /><WinkEye cx={65} cy={50} /></>;
      case 'nerdy':
            // Add glasses on top
            return (
              <>
                 <EyeBall cx={35} cy={50} />
                 <EyeBall cx={65} cy={50} />
                 <g stroke="#1E1A18" strokeWidth="3" fill="rgba(255,255,255,0.3)">
                     <circle cx="35" cy="50" r="12" />
                     <circle cx="65" cy="50" r="12" />
                     <line x1="47" y1="50" x2="53" y2="50" strokeWidth="3" />
                 </g>
              </>
           );
      default:
        return <><EyeBall cx={35} cy={50} /><EyeBall cx={65} cy={50} /></>;
    }
  };
  
  const Mouth = ({ mood }: FeatureProps) => {
    if (isRabbit) return <TinyMouth mood={mood} />;

    switch(mood) {
      case 'correct':
      case 'happy':
      case 'dancing':
      case 'excited':
      case 'flipping':
        return <path d="M 40 65 Q 50 78 60 65" stroke="#1E1A18" strokeWidth="4" fill="none" strokeLinecap="round"/>;
      case 'sad':
        return <path d="M 40 70 Q 50 62 60 70" stroke="#1E1A18" strokeWidth="4" fill="none" strokeLinecap="round"/>;
      case 'wowed':
        return <ellipse cx="50" cy="70" rx="8" ry="12" fill="#1E1A18" />;
      default:
        return <path d="M 45 68 Q 50 72 55 68" stroke="#1E1A18" strokeWidth="4" fill="none" strokeLinecap="round"/>;
    }
  };

  return (
    <div className={`transition-transform duration-300 ${getAnimationClass()}`}>
      <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="soft-shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
            <feOffset dx="0" dy="4" result="offsetblur"/>
            <feComponentTransfer><feFuncA type="linear" slope="0.2"/></feComponentTransfer>
            <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="aura-blur" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur in="SourceGraphic" stdDeviation="6" /></filter>
          <radialGradient id="gold-aura" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#FFD700" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FDB813" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="body-gradient" cx="35%" cy="35%" r="65%" fx="30%" fy="30%">
             <stop offset="0%" stopColor="#FBCFE8" stopOpacity="0.9" /> 
             <stop offset="80%" stopColor="#F472B6" stopOpacity="0.95" /> 
             <stop offset="100%" stopColor="#BE185D" stopOpacity="1" /> 
          </radialGradient>
        </defs>

        <circle cx="50" cy="55" r="52" fill="url(#gold-aura)" filter="url(#aura-blur)" className="animate-pulse" />

        <g filter="url(#soft-shadow)">
            {/* RABBIT STRUCTURE */}
            {isRabbit && <RabbitHoodAndEars mood={state} />}
            {isRabbit && <RabbitFeet />}
            {isRabbit && <RabbitFaceArea />}
            {isRabbit && <RabbitBlush />}
            {isRabbit && <KawaiiEyes mood={state} lookOffset={lookOffset} />}
            {isRabbit && <TinyMouth mood={state} />}

            {/* BLOB STRUCTURE */}
            {!isRabbit && <Arms mood={state} />}
            {!isRabbit && (
                <ellipse cx="50" cy="55" rx="45" ry="43" fill="url(#body-gradient)" stroke="#BE185D" strokeWidth="3" />
            )}
            {!isRabbit && (
                <g transform="translate(50, 12) rotate(-10)">
                    <path d="M0 0 C 12 -14, 26 0, 12 14 S -12 14, 0 0 Z" fill="#00C2B2" />
                    <path d="M 0 0 L 12 -6" stroke="#1E1A18" strokeWidth="2" strokeLinecap="round" />
                </g>
            )}
            {!isRabbit && <circle cx="25" cy="60" r="7" fill="#BE185D" opacity="0.3"/>}
            {!isRabbit && <circle cx="75" cy="60" r="7" fill="#BE185D" opacity="0.3"/>}
            {!isRabbit && <Brows mood={state} />}
            {!isRabbit && <Eyes mood={state} lookOffset={lookOffset} />}
            {!isRabbit && <Mouth mood={state} />}
        </g>
      </svg>
    </div>
  );
};

export default Mascot;