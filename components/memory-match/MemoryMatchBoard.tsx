import React, { useState, useEffect } from 'react';
import { MemoryCard, MascotState } from '../../types';
import InteractiveMascot from '../InteractiveMascot';
import confetti from 'canvas-confetti';
import { playSound } from '../../utils/audio';
import { getRandomComment } from '../../database/mascotComments';

interface MemoryMatchBoardProps {
  cards: MemoryCard[];
  onGameEnd: (score: number) => void;
  onReturnToMenu: () => void;
}

const MemoryMatchBoard: React.FC<MemoryMatchBoardProps> = ({ cards: initialCards, onGameEnd, onReturnToMenu }) => {
  const [cards, setCards] = useState<MemoryCard[]>(initialCards);
  const [flippedCards, setFlippedCards] = useState<MemoryCard[]>([]);
  const [isChecking, setIsChecking] = useState(false);
  const [moves, setMoves] = useState(0);
  const [matches, setMatches] = useState(0);
  const [mascotState, setMascotState] = useState<MascotState>('default');
  const [mascotMessage, setMascotMessage] = useState(getRandomComment('WELCOME'));
  const [isMessageVisible, setIsMessageVisible] = useState(true);

  const totalPairs = initialCards.length / 2;

  useEffect(() => {
    // Initial shuffle or setup if needed, but cards come pre-shuffled
    // Just ensure message fades
    const timer = setTimeout(() => setIsMessageVisible(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const showCommentary = (message: string, state: MascotState = 'default') => {
    setMascotMessage(message);
    setMascotState(state);
    setIsMessageVisible(true);
    setTimeout(() => setIsMessageVisible(false), 2000);
  };

  const handleCardClick = (clickedCard: MemoryCard) => {
    if (
      isChecking || 
      clickedCard.isMatched || 
      clickedCard.isFlipped || 
      flippedCards.length >= 2
    ) return;

    playSound('flip');

    // Flip the card
    const newCards = cards.map(card => 
      card.id === clickedCard.id ? { ...card, isFlipped: true } : card
    );
    setCards(newCards);
    
    const newFlippedCards = [...flippedCards, clickedCard];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setMoves(prev => prev + 1);
      setIsChecking(true);
      checkForMatch(newFlippedCards, newCards);
    }
  };

  const checkForMatch = (currentFlipped: MemoryCard[], currentCards: MemoryCard[]) => {
    const [card1, card2] = currentFlipped;
    const isMatch = card1.pairId === card2.pairId;

    if (isMatch) {
      playSound('correct');
      showCommentary(getRandomComment('CORRECT_ANSWER'), 'correct');
      
      // Trigger confetti if it was a particularly fast match or randomly
      if (Math.random() > 0.7) {
         confetti({ particleCount: 50, spread: 50, origin: { y: 0.7 } });
      }

      // Update cards to matched state
      setTimeout(() => {
        const matchedCards = currentCards.map(card => 
          card.pairId === card1.pairId ? { ...card, isMatched: true } : card
        );
        setCards(matchedCards);
        setFlippedCards([]);
        setIsChecking(false);
        setMatches(prev => {
            const newMatches = prev + 1;
            if (newMatches === totalPairs) {
                setTimeout(() => handleGameCompletion(moves + 1), 1000);
            }
            return newMatches;
        });
      }, 500);
    } else {
      playSound('incorrect');
      showCommentary(getRandomComment('INCORRECT_ANSWER'), 'thinking');
      
      // Flip back after delay
      setTimeout(() => {
        const resetCards = currentCards.map(card => 
          (card.id === card1.id || card.id === card2.id) ? { ...card, isFlipped: false } : card
        );
        setCards(resetCards);
        setFlippedCards([]);
        setIsChecking(false);
      }, 1000);
    }
  };

  const handleGameCompletion = (finalMoves: number) => {
    playSound('levelUp');
    // Simple scoring: more pairs - moves penalty
    // Base score 100, minus moves. Minimum 10.
    const score = Math.max(10, 100 - (finalMoves - totalPairs) * 2);
    onGameEnd(score);
  };

  return (
    <div className="bg-white/10 backdrop-blur-sm shadow-2xl rounded-3xl p-4 md:p-8 border-2 border-dark-brown/20 dark:bg-slate-800/50 dark:border-cream/20 w-full relative animate-fade-in mt-24">
       {/* Absolute container for mascot, ensuring clickable z-index */}
       <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-full flex justify-center z-30 pointer-events-none">
            <div className="pointer-events-auto">
                <InteractiveMascot
                    baseState={mascotState}
                    message={mascotMessage}
                    isMessageVisible={isMessageVisible}
                    className="w-32 h-32 md:w-36 md:h-36"
                />
            </div>
        </div>

      <div className="pt-24 md:pt-28">
        <div className="flex justify-between items-center mb-6">
             <button 
                onClick={() => {
                  playSound('click');
                  onReturnToMenu();
                }}
                className="text-dark-brown/50 hover:text-dark-brown dark:text-cream/50 dark:hover:text-cream transition-all p-2 -ml-2 rounded-full hover:bg-dark-brown/10 dark:hover:bg-cream/10 focus:outline-none focus:ring-2 focus:ring-dark-brown/50 dark:focus:ring-cream/50 transform hover:scale-110"
                aria-label="Return to Menu"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
            </button>
            <h2 className="text-2xl font-bold text-teal">Mind Match</h2>
            <div className="bg-mustard/20 px-4 py-1 rounded-full text-sm font-bold text-dark-brown dark:text-cream border border-mustard">
                Matches: {matches} / {totalPairs}
            </div>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 md:gap-4 mx-auto max-w-4xl">
            {cards.map((card) => (
                <div 
                    key={card.id}
                    className={`memory-card-container ${card.isFlipped ? 'flipped' : ''} ${card.isMatched ? 'matched' : ''}`}
                    onClick={() => handleCardClick(card)}
                >
                    <div className="memory-card-inner">
                        <div className="memory-card-front">
                            <span className="text-2xl opacity-50">?</span>
                        </div>
                        <div className="memory-card-back p-2 overflow-y-auto flex items-center justify-center">
                            <p className={`${card.content.length > 50 ? 'text-xs' : 'text-sm'} font-semibold`}>
                                {card.content}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        
        <div className="text-center mt-6 text-dark-brown/60 dark:text-cream/60 font-medium">
            Moves: {moves}
        </div>
      </div>
    </div>
  );
};

export default MemoryMatchBoard;