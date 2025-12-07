
import React, { useState } from 'react';
import { Difficulty, UserProgress, WordScrambleSettings, difficulties } from '../../types';
import InteractiveMascot from '../InteractiveMascot';
import ProgressBar from '../ProgressBar';
import { getXPForNextLevel, getPlayerTitle } from '../../utils/progress';
import { playSound } from '../../utils/audio';

interface WordScrambleMenuProps {
  onStartGame: (settings: WordScrambleSettings) => void;
  userProgress: UserProgress;
  onBackToMenu: () => void;
}

const MIN_LEVEL_FOR_EXAM = 5;
const topics: ('Vocabulary' | 'Idioms')[] = ['Vocabulary', 'Idioms'];
const questionCounts = [5, 10];

const WordScrambleMenu: React.FC<WordScrambleMenuProps> = ({ onStartGame, userProgress, onBackToMenu }) => {
  const [difficulty, setDifficulty] = useState<Difficulty>('Easy');
  const [topic, setTopic] = useState<'Vocabulary' | 'Idioms'>('Vocabulary');
  const [numQuestions, setNumQuestions] = useState(5);
  const isExamLocked = userProgress.level < MIN_LEVEL_FOR_EXAM;
  const playerTitle = getPlayerTitle(userProgress.level);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playSound('start');
    onStartGame({ difficulty, topic, numQuestions });
  };
  
  const handleBack = () => {
    playSound('click');
    onBackToMenu();
  };

  return (
    <div className="bg-white/10 backdrop-blur-sm shadow-2xl rounded-3xl p-8 md:p-12 text-center border-2 border-dark-brown/20 dark:bg-slate-800/50 dark:border-cream/20 animate-fade-in">
      <div className="flex justify-center mb-6 mt-4">
        <InteractiveMascot className="w-32 h-32" />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mb-2">Word Scramble</h1>
      <p className="text-dark-brown/80 dark:text-cream/80 mb-6">Unjumble the letters to find the meaning!</p>
      
      <div className="text-center mb-1">
        <p className="text-lg font-semibold text-dark-brown/80 dark:text-cream/80 tracking-wide">{playerTitle}</p>
      </div>
      <ProgressBar 
        level={userProgress.level}
        currentXp={userProgress.xp}
        xpToNextLevel={getXPForNextLevel(userProgress.level)}
      />

      <form onSubmit={handleSubmit} className="space-y-6 mt-8">
        <div className="w-full">
            <label className="block text-sm font-semibold mb-2">Topic</label>
            <div className="relative">
                <select
                    value={topic}
                    onChange={(e) => { playSound('click'); setTopic(e.target.value as 'Vocabulary' | 'Idioms'); }}
                    className="w-full bg-cream border-2 border-dark-brown rounded-2xl py-3 px-4 appearance-none focus:outline-none focus:ring-2 focus:ring-teal transition-all dark:bg-slate-700 dark:border-slate-500 dark:text-cream"
                >
                    {topics.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-dark-brown dark:text-cream">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
            </div>
        </div>

        <div className="w-full">
          <label className="block text-sm font-semibold mb-2">Difficulty</label>
          <div className="relative">
            <select
              value={difficulty}
              onChange={(e) => { playSound('click'); setDifficulty(e.target.value as Difficulty); }}
              className="w-full bg-cream border-2 border-dark-brown rounded-2xl py-3 px-4 appearance-none focus:outline-none focus:ring-2 focus:ring-teal transition-all dark:bg-slate-700 dark:border-slate-500 dark:text-cream"
            >
              {difficulties.map((d) => {
                const isDisabled = d === 'Exam' && isExamLocked;
                return <option key={d} value={d} disabled={isDisabled} className={isDisabled ? 'text-dark-brown/50 dark:text-cream/50' : ''}>{d}{isDisabled ? ' (Locked)' : ''}</option>;
              })}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-dark-brown dark:text-cream">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
        
        <div className="w-full">
            <label className="block text-sm font-semibold mb-2">Questions</label>
            <div className="relative">
                <select
                    value={numQuestions}
                    onChange={(e) => { playSound('click'); setNumQuestions(Number(e.target.value)); }}
                    className="w-full bg-cream border-2 border-dark-brown rounded-2xl py-3 px-4 appearance-none focus:outline-none focus:ring-2 focus:ring-teal transition-all dark:bg-slate-700 dark:border-slate-500 dark:text-cream"
                >
                    {questionCounts.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-dark-brown dark:text-cream">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
            </div>
        </div>

        <button 
          type="submit" 
          className="w-full bg-mustard text-dark-brown font-bold py-4 px-6 rounded-2xl text-lg shadow-lg hover:bg-mustard/90 transform hover:-translate-y-1 transition-all duration-200 ease-in-out focus:outline-none focus:ring-4 focus:ring-mustard/50"
        >
          Start Scrambling
        </button>
      </form>

       <div className="mt-4">
        <button 
          onClick={handleBack}
          className="w-full bg-dark-brown/10 text-dark-brown dark:bg-cream/10 dark:text-cream dark:hover:bg-cream/20 font-bold py-4 px-6 rounded-2xl text-lg shadow-md hover:bg-dark-brown/20 transform hover:-translate-y-1 transition-all duration-200 ease-in-out focus:outline-none focus:ring-4 focus:ring-dark-brown/20 dark:focus:ring-cream/20"
        >
          Back to Games
        </button>
      </div>
    </div>
  );
};

export default WordScrambleMenu;
