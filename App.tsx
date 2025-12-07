import React, { useState, useCallback, useEffect } from 'react';
import GameMenu from './components/GameMenu';
import GameBoard from './components/GameBoard';
import ResultsScreen from './components/ResultsScreen';
import ErrorDisplay from './components/ErrorDisplay';
import MoreGames from './components/MoreGames';
import WordDetectiveMenu from './components/word-detective/WordDetectiveMenu';
import WordDetectiveBoard from './components/word-detective/WordDetectiveBoard';
import MemoryMatchMenu from './components/memory-match/MemoryMatchMenu';
import MemoryMatchBoard from './components/memory-match/MemoryMatchBoard';
import WordScrambleMenu from './components/word-scramble/WordScrambleMenu';
import WordScrambleBoard from './components/word-scramble/WordScrambleBoard';
import LoadingSpinner from './components/LoadingSpinner';
import RoamingMascot from './components/RoamingMascot';
import { GameState, Question, GameSettings, UserProgress, difficulties, WordDetectivePuzzle, WordDetectiveSettings, MemoryMatchSettings, MemoryCard, WordScrambleSettings, WordScramblePuzzle, Coordinates } from './types';
import { generateQuestions, getWordDetectivePuzzles, generateMemoryMatchCards, getWordScramblePuzzles } from './services/gameDataService';
import { getUserProgress, saveUserProgress, getXPForNextLevel } from './utils/progress';
import { getMuteState, toggleMuteState, playSound } from './utils/audio';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.MENU);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [gameSettings, setGameSettings] = useState<GameSettings | null>(null);
  const [wordDetectivePuzzles, setWordDetectivePuzzles] = useState<WordDetectivePuzzle[]>([]);
  const [wordDetectiveSettings, setWordDetectiveSettings] = useState<WordDetectiveSettings | null>(null);
  const [memoryMatchCards, setMemoryMatchCards] = useState<MemoryCard[]>([]);
  const [memoryMatchSettings, setMemoryMatchSettings] = useState<MemoryMatchSettings | null>(null);
  const [wordScramblePuzzles, setWordScramblePuzzles] = useState<WordScramblePuzzle[]>([]);
  const [wordScrambleSettings, setWordScrambleSettings] = useState<WordScrambleSettings | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [userProgress, setUserProgress] = useState<UserProgress>(() => getUserProgress());
  const [lastGameResult, setLastGameResult] = useState<{ score: number; xpGained: number; levelledUp: boolean, oldProgress: UserProgress } | null>(null);
  const [isMuted, setIsMuted] = useState(() => getMuteState());
  const [roamingMascotPosition, setRoamingMascotPosition] = useState<Coordinates | null>(null);

  // Theme state
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return savedTheme || (prefersDark ? 'dark' : 'light');
  });

  // Effect to apply theme class
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    playSound('click');
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  
  const handleToggleMute = () => {
    const newMuteState = toggleMuteState();
    setIsMuted(newMuteState);
    if (!newMuteState) {
        playSound('click'); // Play sound on unmute
    }
  };

  const startGame = useCallback(async (settings: GameSettings) => {
    setGameSettings(settings);
    setWordDetectiveSettings(null);
    setMemoryMatchSettings(null);
    setWordScrambleSettings(null);
    setError(null);
    setGameState(GameState.LOADING);

    try {
      const fetchedQuestions = await generateQuestions(settings);
      if (fetchedQuestions.length === 0) {
        throw new Error("Could not find or generate any questions for the selected topic. Please try different settings.");
      }
      setQuestions(fetchedQuestions);
      setGameState(GameState.PLAYING);
    } catch (err: any) {
      setError(err.message || 'An unknown error occurred while preparing the game.');
      setGameState(GameState.ERROR);
    }
  }, []);
  
  const startWordDetective = useCallback((settings: WordDetectiveSettings) => {
    setError(null);
    setGameSettings(null);
    setMemoryMatchSettings(null);
    setWordScrambleSettings(null);
    try {
      const puzzles = getWordDetectivePuzzles(settings);
      setWordDetectivePuzzles(puzzles);
      setWordDetectiveSettings(settings);
      setGameState(GameState.WORD_DETECTIVE_PLAYING);
    } catch (err: any) {
      setError(err.message || 'An unknown error occurred while preparing Word Detective.');
      setGameState(GameState.ERROR);
    }
  }, []);

  const startMemoryMatch = useCallback((settings: MemoryMatchSettings) => {
    setError(null);
    setGameSettings(null);
    setWordDetectiveSettings(null);
    setWordScrambleSettings(null);
    try {
        const cards = generateMemoryMatchCards(settings);
        setMemoryMatchCards(cards);
        setMemoryMatchSettings(settings);
        setGameState(GameState.MEMORY_MATCH_PLAYING);
    } catch (err: any) {
        setError(err.message || 'An unknown error occurred while preparing Mind Match.');
        setGameState(GameState.ERROR);
    }
  }, []);

  const startWordScramble = useCallback((settings: WordScrambleSettings) => {
      setError(null);
      setGameSettings(null);
      setWordDetectiveSettings(null);
      setMemoryMatchSettings(null);
      try {
          const puzzles = getWordScramblePuzzles(settings);
          setWordScramblePuzzles(puzzles);
          setWordScrambleSettings(settings);
          setGameState(GameState.WORD_SCRAMBLE_PLAYING);
      } catch (err: any) {
          setError(err.message || 'An unknown error occurred while preparing Word Scramble.');
          setGameState(GameState.ERROR);
      }
  }, []);
  

  const handleGameEnd = useCallback((finalScore: number) => {
    const oldProgress = { ...userProgress };
    const xpPerCorrectAnswer = 10 + (difficulties.indexOf(gameSettings!.difficulty) * 5);
    const xpGained = finalScore * xpPerCorrectAnswer;
    
    updateProgress(xpGained, oldProgress, finalScore);
  }, [userProgress, gameSettings]);

  const handleWordDetectiveEnd = useCallback((finalScore: number) => {
    const oldProgress = { ...userProgress };
    // Grant slightly more XP for the added difficulty of Word Detective
    const xpPerCorrectAnswer = 15 + (difficulties.indexOf(wordDetectiveSettings!.difficulty) * 5);
    const xpGained = finalScore * xpPerCorrectAnswer;
    
    updateProgress(xpGained, oldProgress, finalScore);
  }, [userProgress, wordDetectiveSettings]);

  const handleMemoryMatchEnd = useCallback((finalScore: number) => {
    const oldProgress = { ...userProgress };
    // XP based on difficulty score
    const xpGained = Math.floor(finalScore * 1.5); 
    
    updateProgress(xpGained, oldProgress, finalScore);
  }, [userProgress, memoryMatchSettings]);

  const handleWordScrambleEnd = useCallback((finalScore: number) => {
      const oldProgress = { ...userProgress };
      // XP Logic for Scramble
      const xpGained = Math.floor(finalScore * 15);
      updateProgress(xpGained, oldProgress, finalScore);
  }, [userProgress, wordScrambleSettings]);

  const updateProgress = (xpGained: number, oldProgress: UserProgress, score: number) => {
    let newXp = userProgress.xp + xpGained;
    let newLevel = userProgress.level;
    let levelledUp = false;

    let xpForNext = getXPForNextLevel(newLevel);
    while (newXp >= xpForNext) {
      newXp -= xpForNext;
      newLevel++;
      levelledUp = true;
      xpForNext = getXPForNextLevel(newLevel);
    }

    const newProgress = { level: newLevel, xp: newXp };
    setUserProgress(newProgress);
    saveUserProgress(newProgress);
    
    setLastGameResult({ score, xpGained, levelledUp, oldProgress });
    setGameState(GameState.FINISHED);
  };

  const handleReturnToHome = () => {
    setGameState(GameState.MENU);
    setError(null);
    setGameSettings(null);
    setWordDetectivePuzzles([]);
    setWordDetectiveSettings(null);
    setMemoryMatchCards([]);
    setMemoryMatchSettings(null);
    setWordScramblePuzzles([]);
    setWordScrambleSettings(null);
  };
  
  const handleNavigateToMoreGames = () => {
    setGameState(GameState.MORE_GAMES);
  };
  
  const handleNavigateToWordDetectiveMenu = () => {
    setGameState(GameState.WORD_DETECTIVE_MENU);
  };

  const handleNavigateToMemoryMatchMenu = () => {
    setGameState(GameState.MEMORY_MATCH_MENU);
  };

  const handleNavigateToWordScrambleMenu = () => {
      setGameState(GameState.WORD_SCRAMBLE_MENU);
  };
  
  const returnToWordDetectiveMenu = () => {
    setGameState(GameState.WORD_DETECTIVE_MENU);
    setWordDetectivePuzzles([]);
    setWordDetectiveSettings(null);
  };

  const returnToMemoryMatchMenu = () => {
    setGameState(GameState.MEMORY_MATCH_MENU);
    setMemoryMatchCards([]);
    setMemoryMatchSettings(null);
  };

  const returnToWordScrambleMenu = () => {
      setGameState(GameState.WORD_SCRAMBLE_MENU);
      setWordScramblePuzzles([]);
      setWordScrambleSettings(null);
  }


  const restartGame = async () => {
    if (gameSettings) {
      await startGame(gameSettings);
    } else if (wordDetectiveSettings) {
      startWordDetective(wordDetectiveSettings);
    } else if (memoryMatchSettings) {
      startMemoryMatch(memoryMatchSettings);
    } else if (wordScrambleSettings) {
        startWordScramble(wordScrambleSettings);
    }
    else {
      handleReturnToHome(); // Fallback if settings are lost
    }
  };

  const renderContent = () => {
    switch (gameState) {
      case GameState.MENU:
        return <GameMenu 
                  onStartGame={startGame} 
                  userProgress={userProgress} 
                  onNavigateToMoreGames={handleNavigateToMoreGames}
                  roamingMascotPosition={roamingMascotPosition}
               />;
      case GameState.LOADING: {
        let message = "Getting things ready...";
        if (gameSettings) {
          message = "Preparing your questions...";
        }
        return <LoadingSpinner messages={message} />;
      }
      case GameState.PLAYING:
        if (!gameSettings || questions.length === 0) {
          setError("Game data is missing. Please return to the menu.");
          setGameState(GameState.ERROR);
          return <ErrorDisplay message={error || "An unknown error occurred."} onRetry={handleReturnToHome} />;
        }
        return (
          <GameBoard
            questions={questions}
            settings={gameSettings}
            onGameEnd={handleGameEnd}
            onReturnToHome={handleReturnToHome}
          />
        );
      case GameState.FINISHED: {
        // Determine total items for score percentage calculation
        let totalItems = 0;
        if (gameSettings) totalItems = gameSettings.numQuestions;
        else if (wordDetectiveSettings) totalItems = wordDetectiveSettings.numQuestions;
        else if (memoryMatchSettings) totalItems = 100; // Memory Match score is 0-100
        else if (wordScrambleSettings) totalItems = wordScrambleSettings.numQuestions;

        if (!lastGameResult) {
          setError("Results data is missing. Please return to the menu.");
          setGameState(GameState.ERROR);
          return <ErrorDisplay message={error || "An unknown error occurred."} onRetry={handleReturnToHome} />;
        }
        return (
          <ResultsScreen
            score={lastGameResult.score}
            totalQuestions={totalItems}
            onRestart={restartGame}
            onBackToMenu={handleReturnToHome}
            xpGained={lastGameResult.xpGained}
            levelledUp={lastGameResult.levelledUp}
            oldProgress={lastGameResult.oldProgress}
            newProgress={userProgress}
          />
        );
      }
      case GameState.MORE_GAMES:
        return <MoreGames 
                    userProgress={userProgress} 
                    onBackToMenu={handleReturnToHome} 
                    onNavigateToWordDetectiveMenu={handleNavigateToWordDetectiveMenu}
                    onNavigateToMemoryMatchMenu={handleNavigateToMemoryMatchMenu} 
                    onNavigateToWordScrambleMenu={handleNavigateToWordScrambleMenu}
                />;
      case GameState.WORD_DETECTIVE_MENU:
        return <WordDetectiveMenu onStartGame={startWordDetective} userProgress={userProgress} onBackToMenu={handleNavigateToMoreGames} />;
      case GameState.WORD_DETECTIVE_PLAYING:
        if (wordDetectivePuzzles.length === 0 || !wordDetectiveSettings) {
          setError("Word Detective puzzle is missing. Please return to the menu.");
          setGameState(GameState.ERROR);
          return <ErrorDisplay message={error || "An unknown error occurred."} onRetry={handleReturnToHome} />;
        }
        return <WordDetectiveBoard puzzles={wordDetectivePuzzles} settings={wordDetectiveSettings} onReturnToMenu={returnToWordDetectiveMenu} onGameEnd={handleWordDetectiveEnd} />;
      case GameState.MEMORY_MATCH_MENU:
        return <MemoryMatchMenu onStartGame={startMemoryMatch} userProgress={userProgress} onBackToMenu={handleNavigateToMoreGames} />;
      case GameState.MEMORY_MATCH_PLAYING:
        if (memoryMatchCards.length === 0 || !memoryMatchSettings) {
            setError("Mind Match cards are missing. Please return to the menu.");
            setGameState(GameState.ERROR);
            return <ErrorDisplay message={error || "An unknown error occurred."} onRetry={handleReturnToHome} />;
        }
        return <MemoryMatchBoard cards={memoryMatchCards} onGameEnd={handleMemoryMatchEnd} onReturnToMenu={returnToMemoryMatchMenu} />;
      case GameState.WORD_SCRAMBLE_MENU:
          return <WordScrambleMenu onStartGame={startWordScramble} userProgress={userProgress} onBackToMenu={handleNavigateToMoreGames} />;
      case GameState.WORD_SCRAMBLE_PLAYING:
          if (wordScramblePuzzles.length === 0 || !wordScrambleSettings) {
              setError("Word Scramble puzzle is missing. Please return to the menu.");
              setGameState(GameState.ERROR);
              return <ErrorDisplay message={error || "An unknown error occurred."} onRetry={handleReturnToHome} />;
          }
          return <WordScrambleBoard puzzles={wordScramblePuzzles} onGameEnd={handleWordScrambleEnd} onReturnToMenu={returnToWordScrambleMenu} />;
      case GameState.ERROR:
        return <ErrorDisplay message={error || "An unknown error occurred."} onRetry={handleReturnToHome} />;
      default:
        return <GameMenu onStartGame={startGame} userProgress={userProgress} onNavigateToMoreGames={handleNavigateToMoreGames} />;
    }
  };

  const ThemeToggle = () => (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 p-2 rounded-full bg-dark-brown/10 dark:bg-cream/10 text-dark-brown dark:text-cream hover:bg-dark-brown/20 dark:hover:bg-cream/20 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal dark:focus:ring-offset-slate-900"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
      )}
    </button>
  );
  
  const SoundToggle = () => (
    <button
      onClick={handleToggleMute}
      className="fixed top-4 right-16 z-50 p-2 rounded-full bg-dark-brown/10 dark:bg-cream/10 text-dark-brown dark:text-cream hover:bg-dark-brown/20 dark:hover:bg-cream/20 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal dark:focus:ring-offset-slate-900"
      aria-label="Toggle sound"
    >
      {isMuted ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clipRule="evenodd" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l4-4m0 0l-4-4m4 4H7" /></svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /></svg>
      )}
    </button>
  );

  return (
    <div className="min-h-screen flex items-center justify-center p-4 font-sans relative">
       {/* Roaming Mascot always present */}
       <RoamingMascot onPositionChange={setRoamingMascotPosition} />
       
       <ThemeToggle />
       <SoundToggle />
       <footer className="fixed top-0 left-1/2 -translate-x-1/2 py-2 text-xs text-dark-brown/80 dark:text-cream/80 font-light z-20">
            Created by Shalaka Kashikar
        </footer>
      <main className="w-full max-w-2xl mx-auto">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;