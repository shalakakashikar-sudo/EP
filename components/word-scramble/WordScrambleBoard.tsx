import React, { useState, useEffect, useMemo } from 'react';
import { WordScramblePuzzle, MascotState } from '../../types';
import InteractiveMascot from '../InteractiveMascot';
import confetti from 'canvas-confetti';
import { playSound } from '../../utils/audio';
import { getRandomComment } from '../../database/mascotComments';

interface WordScrambleBoardProps {
  puzzles: WordScramblePuzzle[];
  onGameEnd: (score: number) => void;
  onReturnToMenu: () => void;
}

const WordScrambleBoard: React.FC<WordScrambleBoardProps> = ({ puzzles, onGameEnd, onReturnToMenu }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPuzzle, setCurrentPuzzle] = useState<WordScramblePuzzle>(puzzles[0]);
  const [availableLetters, setAvailableLetters] = useState<{char: string, id: number}[]>([]);
  const [placedLetters, setPlacedLetters] = useState<( {char: string, id: number} | null )[]>([]);
  const [score, setScore] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [mascotState, setMascotState] = useState<MascotState>('thinking');
  const [mascotMessage, setMascotMessage] = useState(getRandomComment('WELCOME'));
  const [isMessageVisible, setIsMessageVisible] = useState(true);
  
  const correctLettersOnly = useMemo(() => {
      return currentPuzzle.originalTerm.replace(/[^A-Z]/g, '').split('');
  }, [currentPuzzle]);

  useEffect(() => {
    loadPuzzle(currentIndex);
  }, [currentIndex]);

  const loadPuzzle = (index: number) => {
    const p = puzzles[index];
    setCurrentPuzzle(p);
    const lettersWithIds = p.scrambledLetters.map((char, i) => ({ char, id: i }));
    setAvailableLetters(lettersWithIds);
    setPlacedLetters(new Array(p.scrambledLetters.length).fill(null));
    setIsCorrect(false);
    setMascotState('thinking');
    setIsMessageVisible(false);
  };

  const showCommentary = (message: string, state: MascotState) => {
      setMascotMessage(message);
      setMascotState(state);
      setIsMessageVisible(true);
      setTimeout(() => setIsMessageVisible(false), 2500);
  }

  const handleLetterClick = (letterObj: {char: string, id: number}) => {
    if (isCorrect) return;
    playSound('click');
    // Move from available to first empty slot
    const firstEmptyIndex = placedLetters.findIndex(l => l === null);
    if (firstEmptyIndex !== -1) {
        const newPlaced = [...placedLetters];
        newPlaced[firstEmptyIndex] = letterObj;
        setPlacedLetters(newPlaced);
        
        setAvailableLetters(prev => prev.filter(l => l.id !== letterObj.id));
        
        // Filter to check completion and ensure type safety
        const nonNullLetters = newPlaced.filter((l): l is {char: string, id: number} => l !== null);
        
        // If length matches, it means there were no nulls, so it is full
        if (nonNullLetters.length === newPlaced.length) {
            checkAnswer(nonNullLetters);
        }
    }
  };

  const handleSlotClick = (index: number) => {
      if (isCorrect || !placedLetters[index]) return;
      playSound('click');
      const letterToReturn = placedLetters[index]!;
      const newPlaced = [...placedLetters];
      newPlaced[index] = null;
      setPlacedLetters(newPlaced);
      setAvailableLetters(prev => [...prev, letterToReturn]);
  };

  const checkAnswer = (finalPlaced: {char: string, id: number}[]) => {
      const guess = finalPlaced.map(l => l.char).join('');
      const target = correctLettersOnly.join('');
      
      if (guess === target) {
          playSound('correct');
          setIsCorrect(true);
          setScore(prev => prev + 1);
          setMascotState('happy');
          showCommentary(getRandomComment('CORRECT_ANSWER'), 'love');
          confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
      } else {
          playSound('incorrect');
          setMascotState('confused');
          showCommentary("That doesn't look quite right...", 'confused');
      }
  };
  
  const handleNext = () => {
      playSound('swoosh');
      if (currentIndex < puzzles.length - 1) {
          setCurrentIndex(prev => prev + 1);
      } else {
          onGameEnd(score + (isCorrect ? 0 : 0)); // Add last point handled in check
      }
  };

  const handleClear = () => {
      playSound('click');
      setAvailableLetters(currentPuzzle.scrambledLetters.map((char, i) => ({ char, id: i })));
      setPlacedLetters(new Array(currentPuzzle.scrambledLetters.length).fill(null));
      setIsCorrect(false);
  };

  return (
    <div className="bg-white/10 backdrop-blur-sm shadow-2xl rounded-3xl p-4 md:p-8 border-2 border-dark-brown/20 dark:bg-slate-800/50 dark:border-cream/20 w-full relative animate-fade-in mt-24">
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
            <div className="text-lg font-semibold">Puzzle {currentIndex + 1} / {puzzles.length}</div>
            <div className="bg-mustard/20 px-4 py-1 rounded-full text-sm font-bold text-dark-brown dark:text-cream border border-mustard">Score: {score}</div>
        </div>

        <div className="text-center mb-8 bg-dark-brown/5 dark:bg-slate-900/50 p-4 rounded-xl">
            <p className="text-sm uppercase tracking-wider opacity-60 font-bold mb-1">Definition</p>
            <p className="text-lg italic font-medium">"{currentPuzzle.definition}"</p>
        </div>

        {/* Answer Slots */}
        <div className="flex justify-center flex-wrap gap-2 mb-8 min-h-[3.5rem]">
            {placedLetters.map((letter, i) => (
                <div 
                    key={`slot-${i}`} 
                    className={`scramble-slot ${isCorrect ? 'border-green-500 text-green-600 dark:text-green-400' : ''}`}
                    onClick={() => handleSlotClick(i)}
                >
                    {letter ? letter.char : ''}
                </div>
            ))}
        </div>

        {/* Available Tiles */}
        <div className="flex justify-center flex-wrap gap-3 mb-8 min-h-[4rem]">
            {availableLetters.map((l) => (
                <button
                    key={l.id}
                    className="scramble-tile"
                    onClick={() => handleLetterClick(l)}
                >
                    {l.char}
                </button>
            ))}
        </div>

        {isCorrect && (
            <div className="text-center animate-fade-in mb-6">
                <p className="text-2xl font-bold text-teal mb-2">{currentPuzzle.originalTerm}</p>
                <p className="text-sm opacity-75">{currentPuzzle.hint}</p>
            </div>
        )}

        <div className="flex justify-center gap-4">
            {!isCorrect ? (
                <button onClick={handleClear} className="bg-dark-brown/10 text-dark-brown dark:bg-cream/10 dark:text-cream font-bold py-3 px-6 rounded-xl hover:bg-dark-brown/20 dark:hover:bg-cream/20 transition-colors">Clear</button>
            ) : (
                <button onClick={handleNext} className="bg-teal text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:bg-teal/90 animate-bounce transition-colors">
                    {currentIndex === puzzles.length - 1 ? 'Finish' : 'Next Word'}
                </button>
            )}
        </div>
      </div>
    </div>
  );
};

export default WordScrambleBoard;