import React, { useState, useEffect } from 'react';
import { GameSettings, UserProgress, DailyContentData, Difficulty, Coordinates } from '../types';
import { difficulties, topics, questionCounts, timeLimits } from '../types';
import WordOfTheDay from './WordOfTheDay';
import ProgressBar from './ProgressBar';
import { getXPForNextLevel, getPlayerTitle } from '../utils/progress';
import QuoteOfTheDay from './QuoteOfTheDay';
import Flashcards from './Flashcards';
import { getDailyContent } from '../services/gameDataService';
import { getFlashcardProgress } from '../utils/flashcardProgress';
import InteractiveMascot from './InteractiveMascot';
import { playSound } from '../utils/audio';

interface GameMenuProps {
  onStartGame: (settings: GameSettings) => void;
  userProgress: UserProgress;
  onNavigateToMoreGames: () => void;
  roamingMascotPosition?: Coordinates | null;
}

const MIN_LEVEL_FOR_EXAM = 5;
const SETTINGS_KEY = 'englishPlaygroundLastSettings';

const CustomSelect = <T extends string | number,>({ label, value, options, onChange, optionTransformer }: { label: string, value: T, options: readonly T[], onChange: (value: T) => void, optionTransformer?: (opt: T) => string }) => (
  <div className="w-full">
    <label className="block text-sm font-semibold mb-2">{label}</label>
    <div className="relative">
      <select
        value={value}
        onChange={(e) => {
          playSound('click');
          onChange(e.target.value as T);
        }}
        className="w-full bg-cream border-2 border-dark-brown rounded-2xl py-3 px-4 appearance-none focus:outline-none focus:ring-2 focus:ring-teal transition-all dark:bg-slate-700 dark:border-slate-500 dark:text-cream"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {optionTransformer ? optionTransformer(opt) : opt}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-dark-brown dark:text-cream">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
      </div>
    </div>
  </div>
);

const GameMenu: React.FC<GameMenuProps> = ({ onStartGame, userProgress, onNavigateToMoreGames, roamingMascotPosition }) => {
  // ... (Existing State Logic remains the same)
  const [initialSettings] = useState(() => {
    try {
      const saved = localStorage.getItem(SETTINGS_KEY);
      if (saved) return JSON.parse(saved);
    } catch (error) {}
    return { topic: topics[0], difficulty: difficulties[0] as Difficulty, numQuestions: questionCounts[0], timePerQuestion: timeLimits[1] };
  });

  const [topic, setTopic] = useState(initialSettings.topic);
  const [difficulty, setDifficulty] = useState<Difficulty>(initialSettings.difficulty);
  const [numQuestions, setNumQuestions] = useState(initialSettings.numQuestions);
  const [timePerQuestion, setTimePerQuestion] = useState(initialSettings.timePerQuestion);
  const [dailyContent, setDailyContent] = useState<DailyContentData | null>(null);
  const [reviewCount, setReviewCount] = useState(0);
  const isExamLocked = userProgress.level < MIN_LEVEL_FOR_EXAM;
  const playerTitle = getPlayerTitle(userProgress.level);

  useEffect(() => {
    if (isExamLocked && difficulty === 'Exam') setDifficulty('Hard');
  }, [isExamLocked, difficulty]);

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    const cachedDate = localStorage.getItem('dailyContentDate');
    const cachedContent = localStorage.getItem('dailyContent');
    if (cachedDate === today && cachedContent) {
      setDailyContent(JSON.parse(cachedContent));
    } else {
      const contentData = getDailyContent();
      localStorage.setItem('dailyContent', JSON.stringify(contentData));
      localStorage.setItem('dailyContentDate', today);
      setDailyContent(contentData);
    }
    const progress = getFlashcardProgress();
    setReviewCount(Object.values(progress).filter(status => status === 'needs_review').length);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playSound('start');
    localStorage.setItem(SETTINGS_KEY, JSON.stringify({ topic, difficulty, numQuestions, timePerQuestion: Number(timePerQuestion) }));
    onStartGame({ topic, difficulty, numQuestions, timePerQuestion: Number(timePerQuestion) });
  };
  
  const handleNavigateToMoreGames = () => {
    playSound('click');
    onNavigateToMoreGames();
  };

  return (
    <div className="bg-white/10 backdrop-blur-sm shadow-2xl rounded-3xl p-8 md:p-12 text-center border-2 border-dark-brown/20 dark:bg-slate-800/50 dark:border-cream/20 animate-fade-in">
       {/* Mascot Section */}
       <div className="flex justify-center mb-6 mt-4">
          <InteractiveMascot 
            baseState="default" 
            className="w-32 h-32" 
            // Look at the roaming mascot if available
            lookAt={roamingMascotPosition}
            // Central position approximate
            selfPosition={{ x: 50, y: 15 }} 
          />
      </div>

      <h1 className="text-4xl md:text-5xl font-bold mb-2">English Playground</h1>
      {/* ... Rest of the component remains exactly the same ... */}
      <p className="text-dark-brown/80 dark:text-cream/80 mb-6">Ready to test your skills?</p>
      <div className="text-center mb-1">
        <p className="text-lg font-semibold text-dark-brown/80 dark:text-cream/80 tracking-wide">{playerTitle}</p>
      </div>
      <ProgressBar level={userProgress.level} currentXp={userProgress.xp} xpToNextLevel={getXPForNextLevel(userProgress.level)} />
      <Flashcards initialData={dailyContent?.flashcards ?? null} reviewCount={reviewCount} />
      <WordOfTheDay data={dailyContent?.wordOfTheDay ?? null} />
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <CustomSelect label="Topic" value={topic} options={topics} onChange={(v) => setTopic(v as string)} />
        <div className="w-full">
          <label className="block text-sm font-semibold mb-2">Difficulty</label>
          <div className="relative">
            <select value={difficulty} onChange={(e) => { playSound('click'); setDifficulty(e.target.value as Difficulty); }} className="w-full bg-cream border-2 border-dark-brown rounded-2xl py-3 px-4 appearance-none focus:outline-none focus:ring-2 focus:ring-teal transition-all dark:bg-slate-700 dark:border-slate-500 dark:text-cream">
              {difficulties.map((d) => {
                const isDisabled = d === 'Exam' && isExamLocked;
                return <option key={d} value={d} disabled={isDisabled} className={isDisabled ? 'text-dark-brown/50 dark:text-cream/50' : ''}>{d}{isDisabled ? ` (Lvl ${MIN_LEVEL_FOR_EXAM}+ Locked)` : ''}</option>;
              })}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-dark-brown dark:text-cream">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
          {isExamLocked && <p className="text-xs text-dark-brown/60 dark:text-cream/60 text-center mt-1">Reach Level {MIN_LEVEL_FOR_EXAM} to unlock 'Exam' difficulty!</p>}
        </div>
        <CustomSelect label="# of Questions" value={numQuestions} options={questionCounts} onChange={(val) => setNumQuestions(Number(val))} />
        <CustomSelect label="Time per Question" value={timePerQuestion} options={timeLimits} onChange={(val) => setTimePerQuestion(Number(val))} optionTransformer={(opt) => `${opt} seconds`} />
        <button type="submit" className="w-full bg-teal text-white font-bold py-4 px-6 rounded-2xl text-lg shadow-lg hover:bg-teal/90 transform hover:-translate-y-1 transition-all duration-200 ease-in-out focus:outline-none focus:ring-4 focus:ring-teal/50">Start Game</button>
      </form>
      <div className="mt-4">
        <button onClick={handleNavigateToMoreGames} className="w-full bg-dark-brown/10 text-dark-brown dark:bg-cream/10 dark:text-cream dark:hover:bg-cream/20 font-bold py-4 px-6 rounded-2xl text-lg shadow-md hover:bg-dark-brown/20 transform hover:-translate-y-1 transition-all duration-200 ease-in-out focus:outline-none focus:ring-4 focus:ring-dark-brown/20 dark:focus:ring-cream/20">More Games</button>
      </div>
      <QuoteOfTheDay data={dailyContent?.quoteOfTheDay ?? null} />
    </div>
  );
};

export default GameMenu;