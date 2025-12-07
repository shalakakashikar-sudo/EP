import React, { useState, useEffect, useRef } from 'react';
import { FlashcardData, FlashcardStatus } from '../types';
import { updateFlashcardStatus } from '../utils/flashcardProgress';
import { playSound } from '../utils/audio';

type CardState = FlashcardData & {
    id: number;
    isFlipped: boolean;
    disappearing: boolean;
};

interface FlashcardsProps {
    initialData: FlashcardData[] | null;
    reviewCount: number;
}

const WordIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
);

const IdiomIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
);

const SpeakerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
    </svg>
);

const Flashcards: React.FC<FlashcardsProps> = ({ initialData, reviewCount }) => {
  const [cards, setCards] = useState<CardState[]>([]);
  const [allCardsReviewed, setAllCardsReviewed] = useState(false);

  useEffect(() => {
    if (initialData && initialData.length > 0) {
      setAllCardsReviewed(false);
      setCards(initialData.map((card, index) => ({
        ...card,
        id: index,
        isFlipped: false,
        disappearing: false,
      })));
    } else if (initialData) {
      // Data loaded, but it's empty
      setAllCardsReviewed(true);
    }
  }, [initialData]);

  const handleSpeak = (e: React.MouseEvent, textToSpeak: string) => {
    e.stopPropagation();
    playSound('click');
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.lang = 'en-GB';
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Sorry, your browser doesn't support text-to-speech.");
    }
  };

  const handleCardClick = (id: number) => {
    playSound('flip');
    setCards(currentCards =>
      currentCards.map(c => (c.id === id ? { ...c, isFlipped: !c.isFlipped } : c))
    );
  };
  
  const handleMarkCard = (e: React.MouseEvent, id: number, term: string, status: FlashcardStatus) => {
    e.stopPropagation();
    playSound('swoosh');
    updateFlashcardStatus(term, status);
    
    // Trigger disappearing animation
    setCards(currentCards => currentCards.map(c => c.id === id ? { ...c, disappearing: true } : c));
    
    // Remove the card after animation
    setTimeout(() => {
        setCards(currentCards => {
            const remainingCards = currentCards.filter(c => c.id !== id);
            if (remainingCards.length === 0) {
                setAllCardsReviewed(true);
            }
            return remainingCards;
        });
    }, 500);
  };

  const renderContent = () => {
    if (!initialData) {
      return <div className="h-64 flex items-center justify-center">
                <div className="w-10 h-10 border-4 border-mustard rounded-full animate-spin border-t-transparent"></div>
             </div>;
    }

    if (allCardsReviewed) {
        return (
            <div className="h-64 flex flex-col items-center justify-center text-dark-brown/70 dark:text-cream/70 bg-dark-brown/5 dark:bg-slate-900/50 rounded-2xl">
                <p className="text-xl font-semibold mb-2">Great work!</p>
                <p>All flashcards reviewed for today.</p>
            </div>
        )
    }

    return (
      // Changed grid to be much wider: 1 column mobile, 2 columns desktop (instead of 4)
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map(card => (
          <div
            key={card.id}
            // Increased height to h-96 (24rem / ~384px) for more vertical space
            className={`flashcard-container cursor-pointer h-96 ${card.isFlipped ? 'flipped' : ''} ${card.disappearing ? 'disappearing' : ''}`}
            onClick={() => handleCardClick(card.id)}
          >
            <div className="flashcard-inner">
              <div className="flashcard-front">
                {card.status === 'needs_review' && (
                  <div className="absolute top-4 right-4 group" aria-label="This card needs review">
                    <div className="relative flex items-center justify-center h-5 w-5">
                      <div className="absolute -inset-1 bg-rose-500 rounded-full blur opacity-75 animate-pulse"></div>
                      <div className="relative h-3 w-3 bg-rose-500 rounded-full"></div>
                    </div>
                    <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-max px-2 py-1 text-xs text-white bg-dark-brown dark:text-dark-brown dark:bg-cream rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                        Needs Review
                    </div>
                  </div>
                )}
                <div className="absolute top-5 left-5 flex items-center gap-2 text-sm uppercase font-semibold text-dark-brown/40 dark:text-cream/40">
                    {card.type === 'word' ? <WordIcon /> : <IdiomIcon />}
                    <span>{card.type}</span>
                </div>
                
                <button
                    onClick={(e) => handleSpeak(e, card.term)}
                    className="absolute bottom-4 right-4 p-3 rounded-full text-dark-brown/40 hover:bg-dark-brown/10 hover:text-dark-brown focus:outline-none focus:ring-2 focus:ring-dark-brown/50 dark:text-cream/40 dark:hover:bg-cream/10 dark:hover:text-cream dark:focus:ring-cream/50 transition-colors"
                    aria-label="Pronounce term"
                >
                    <SpeakerIcon />
                </button>

                <div className="flex-grow flex items-center justify-center w-full px-6">
                    {/* Using whitespace-normal allows standard text wrapping without breaking words mid-way */}
                    <p className="text-2xl md:text-3xl font-bold text-center leading-tight whitespace-normal">
                        {card.term}
                    </p>
                </div>
                
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-dark-brown/20 dark:text-cream/20 text-xs font-medium uppercase tracking-widest pointer-events-none">
                    Tap to flip
                </div>
              </div>
              
              <div className="flashcard-back flex flex-col h-full">
                <div className="flex-grow overflow-y-auto flex items-center justify-center thin-scrollbar w-full mb-4 mt-2">
                    <p className="text-lg font-medium leading-relaxed px-4 text-center">
                        {card.definition}
                    </p>
                </div>
                <div className="w-full flex justify-around items-center pt-4 pb-2 flex-shrink-0 border-t border-white/20">
                  <button
                    onClick={(e) => handleMarkCard(e, card.id, card.term, 'known')}
                    className="text-sm font-bold bg-white/10 hover:bg-white/30 rounded-full px-6 py-2 transition-colors border border-white/20"
                  >
                    I Know This
                  </button>
                  <button
                    onClick={(e) => handleMarkCard(e, card.id, card.term, 'needs_review')}
                    className="text-sm font-bold bg-white/10 hover:bg-white/30 rounded-full px-6 py-2 transition-colors border border-white/20"
                  >
                    Needs Review
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  return (
    <div className="bg-dark-brown/5 dark:bg-slate-900/50 p-6 sm:p-8 rounded-3xl mb-8 w-full">
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-xl font-bold text-dark-brown/70 dark:text-cream/70 tracking-wider uppercase">Daily Flashcards</h2>
        {reviewCount > 0 && (
            <div className="relative group" aria-label={`${reviewCount} card${reviewCount > 1 ? 's' : ''} to review`}>
                <div className="relative flex items-center justify-center h-6 w-6">
                    <div className="absolute -inset-1 bg-rose-500 rounded-full blur opacity-75 animate-pulse"></div>
                    <div className="relative flex items-center justify-center h-full w-full bg-rose-500 rounded-full text-white text-xs font-bold z-10">
                        {reviewCount}
                    </div>
                </div>
                <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-max px-2 py-1 text-xs text-white bg-dark-brown dark:text-dark-brown dark:bg-cream rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                    {reviewCount} card{reviewCount > 1 ? 's' : ''} for review!
                </div>
            </div>
        )}
      </div>
      {renderContent()}
    </div>
  );
};

export default Flashcards;