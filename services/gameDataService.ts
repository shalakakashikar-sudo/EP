
// @/services/gameDataService.ts
import { DB } from '../database/db';
import { GameSettings, Question, DailyContentData, FlashcardData, Difficulty, WordDetectiveSettings, WordDetectivePuzzle, Word, Idiom, CrosswordPuzzle, MemoryMatchSettings, MemoryCard, WordScrambleSettings, WordScramblePuzzle } from '../types';
import { getFlashcardProgress } from '../utils/flashcardProgress';
import { crosswords } from '../database/crosswords';

/**
 * Shuffles an array in place and returns it.
 * @param array The array to shuffle.
 */
const shuffle = <T>(array: T[]): T[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

/**
 * Creates a multiple-choice question from a database entry (word or idiom).
 * @param correctEntry The correct Word or Idiom from the database.
 * @param allEntries The pool of all possible entries of the same type to generate wrong answers from.
 * @param type The type of question to generate.
 */
const createMultipleChoiceQuestion = (
    correctEntry: { term: string; definition: string },
    allEntries: { term: string; definition: string }[],
    type: 'definition' | 'term'
): Omit<Question, 'explanation'> => {
    
    // Filter out the correct answer to create a pool of distractors
    const distractors = allEntries.filter(entry => entry.term !== correctEntry.term);
    const shuffledDistractors = shuffle([...distractors]);

    let questionText = '';
    let correctAnswer = '';
    const options: string[] = [];

    if (type === 'definition') {
        // "What is the definition of 'term'?"
        questionText = `What is the definition of "${correctEntry.term}"?`;
        correctAnswer = correctEntry.definition;
        options.push(correctAnswer);
        for (let i = 0; i < 3; i++) {
            options.push(shuffledDistractors[i].definition);
        }
    } else { // type === 'term'
        // "Which word or phrase means: "${correctEntry.definition}"?"
        questionText = `Which word or phrase means: "${correctEntry.definition}"?`;
        correctAnswer = correctEntry.term;
        options.push(correctAnswer);
        for (let i = 0; i < 3; i++) {
            options.push(shuffledDistractors[i].term);
        }
    }

    return {
        question: questionText,
        options: shuffle(options),
        correctAnswer: correctAnswer,
    };
};

export const generateQuestions = async (settings: GameSettings): Promise<Question[]> => {
  const { topic, numQuestions, difficulty } = settings;
  const questions: Question[] = [];
  
  // Ensure we don't request more questions than available
  const count = Math.min(numQuestions, 50); // Hard cap to prevent performance issues

  switch (topic) {
    case 'Vocabulary': {
      const staticWords = DB.words.filter(w => w.difficulty === difficulty);
      // Just use static words
      let uniqueWords = Array.from(new Map(staticWords.map(w => [w.term.toLowerCase(), w])).values());

      const shuffledWords = shuffle([...uniqueWords]);
      for (let i = 0; i < Math.min(count, shuffledWords.length); i++) {
        const word = shuffledWords[i];
        const questionType = Math.random() > 0.5 ? 'definition' : 'term';
        const mcq = createMultipleChoiceQuestion(word, DB.words, questionType);
        
        const fullExplanation = `"${word.term}" means: ${word.definition}\n\n${word.etymology || ''}\nExample: "${word.example}"`;

        questions.push({ ...mcq, explanation: fullExplanation.trim() });
      }
      break;
    }
    case 'Idioms': {
      const staticIdioms = DB.idioms.filter(i => i.difficulty === difficulty);
      let uniqueIdioms = Array.from(new Map(staticIdioms.map(i => [i.term.toLowerCase(), i])).values());

      const shuffledIdioms = shuffle([...uniqueIdioms]);
      for (let i = 0; i < Math.min(count, shuffledIdioms.length); i++) {
        const idiom = shuffledIdioms[i];
        // For idioms, asking for the definition is most common
        const mcq = createMultipleChoiceQuestion(idiom, DB.idioms, 'definition');
        questions.push({ ...mcq, explanation: `The idiom "${idiom.term}" means: ${idiom.definition}.\n\nExample: ${idiom.example}` });
      }
      break;
    }
    case 'Synonyms/Antonyms': {
      const filteredWords = DB.words.filter(w => w.difficulty === difficulty);
      const shuffledWords = shuffle([...filteredWords]).filter(w => w.synonyms.length > 0 || w.antonyms.length > 0);
      for (let i = 0; i < Math.min(count, shuffledWords.length); i++) {
        const word = shuffledWords[i];
        const isSynonym = Math.random() > 0.5 && word.synonyms.length > 0;
        
        if (isSynonym) {
            const correctAnswer = shuffle([...word.synonyms])[0];
            const distractors = DB.words
                .filter(w => w.term !== word.term && !word.synonyms.includes(w.term))
                .map(w => w.term);
            const options = shuffle([correctAnswer, ...shuffle(distractors).slice(0, 3)]);
            const explanation = `A synonym for "${word.term}" is "${correctAnswer}".\n\nBoth words relate to its meaning: "${word.definition}". ${word.etymology ? `\n\n${word.etymology}` : ''}`;
            questions.push({
                question: `Which of the following is a synonym for "${word.term}"?`,
                options,
                correctAnswer,
                explanation: explanation.trim()
            });
        } else if (word.antonyms.length > 0) { // Antonym question
             const correctAnswer = shuffle([...word.antonyms])[0];
             const distractors = DB.words
                .filter(w => w.term !== word.term && !word.antonyms.includes(w.term))
                .map(w => w.term);
             const options = shuffle([correctAnswer, ...shuffle(distractors).slice(0, 3)]);
             const explanation = `An antonym for "${word.term}" is "${correctAnswer}". They have opposite meanings.\n\n"${word.term}" means: "${word.definition}".`;
             questions.push({
                question: `Which of the following is an antonym for "${word.term}"?`,
                options,
                correctAnswer,
                explanation: explanation.trim()
            });
        }
      }
      break;
    }
    case 'Grammar': {
      const filteredGrammar = DB.grammar.filter(g => g.difficulty === difficulty);
      const shuffledGrammar = shuffle([...filteredGrammar]);
      for (let i = 0; i < Math.min(count, shuffledGrammar.length); i++) {
        const q = shuffledGrammar[i];
        questions.push({
          question: q.question,
          options: shuffle([...q.options]), // Shuffle options for variety
          correctAnswer: q.correctAnswer,
          explanation: q.explanation,
        });
      }
      break;
    }
    default:
      throw new Error(`Unsupported game topic: ${topic}`);
  }
  
  return questions;
};

export const getDailyContent = (): DailyContentData => {
  const randomWord = shuffle([...DB.words])[0];
  const randomQuote = shuffle([...DB.quotes])[0];
  
  const progress = getFlashcardProgress();
  const allTerms: { term: string; definition: string; type: 'word' | 'idiom' }[] = shuffle([
    ...DB.words.map(w => ({ term: w.term, definition: w.definition, type: 'word' as const })),
    ...DB.idioms.map(i => ({ term: i.term, definition: i.definition, type: 'idiom' as const })),
  ]);

  const needsReviewCards: FlashcardData[] = allTerms
    .filter(c => progress[c.term] === 'needs_review')
    .map(c => ({ ...c, status: 'needs_review' }));

  const knownCards: FlashcardData[] = allTerms
    .filter(c => progress[c.term] === 'known')
    .map(c => ({ ...c, status: 'known' }));

  const newCards: FlashcardData[] = allTerms.filter(c => !progress[c.term]);

  const DAILY_FLASHCARD_COUNT = 8;
  const NEEDS_REVIEW_TARGET = 5;

  let selectedCards: FlashcardData[] = [];

  // 1. Prioritize 'needs review' cards
  selectedCards.push(...shuffle(needsReviewCards).slice(0, NEEDS_REVIEW_TARGET));

  // 2. Fill the rest with 'new' cards
  let remainingSlots = DAILY_FLASHCARD_COUNT - selectedCards.length;
  if (remainingSlots > 0) {
    selectedCards.push(...shuffle(newCards).slice(0, remainingSlots));
  }

  // 3. If still not enough, fill with 'known' cards
  remainingSlots = DAILY_FLASHCARD_COUNT - selectedCards.length;
  if (remainingSlots > 0) {
     selectedCards.push(...shuffle(knownCards).slice(0, remainingSlots));
  }

  return {
    wordOfTheDay: {
      word: randomWord.term,
      definition: randomWord.definition,
      exampleSentence: randomWord.example || `(No example sentence available for this word.)`,
    },
    quoteOfTheDay: {
      quote: randomQuote.quote,
      author: randomQuote.author,
    },
    flashcards: selectedCards,
  };
};

export const getWordDetectivePuzzles = (settings: WordDetectiveSettings): WordDetectivePuzzle[] => {
  const { topic, difficulty, numQuestions } = settings;
  
  let source: { term: string; definition: string }[];
  if (topic === 'Words') {
    source = DB.words.filter(w => w.difficulty === difficulty);
  } else { // Idioms
    source = DB.idioms.filter(i => i.difficulty === difficulty);
  }

  if (source.length === 0) {
    throw new Error(`No '${topic}' found for '${difficulty}' difficulty.`);
  }

  return shuffle(source)
    .slice(0, numQuestions)
    .map(item => ({
      term: item.term,
      definition: item.definition,
      topic: topic,
    }));
};

export const getCrosswordPuzzle = (difficulty: Difficulty): CrosswordPuzzle => {
    // Attempt to find puzzles matching the difficulty
    const matchingPuzzles = crosswords.filter(p => p.difficulty === difficulty);
    
    // Fallback logic: if no puzzles for this difficulty (e.g. Exam), try Hard, then Medium, then Easy
    if (matchingPuzzles.length > 0) {
        return shuffle([...matchingPuzzles])[0];
    }
    
    const fallbacks: Difficulty[] = ['Hard', 'Medium', 'Easy'];
    for (const fallbackDifficulty of fallbacks) {
         const fallbackPuzzles = crosswords.filter(p => p.difficulty === fallbackDifficulty);
         if (fallbackPuzzles.length > 0) {
             return shuffle([...fallbackPuzzles])[0];
         }
    }
    
    throw new Error("No crossword puzzles available.");
};

export const generateMemoryMatchCards = (settings: MemoryMatchSettings): MemoryCard[] => {
  const { difficulty, topic } = settings;
  
  // Determine pair count based on difficulty
  let pairCount = 6; // Easy
  if (difficulty === 'Medium') pairCount = 8;
  if (difficulty === 'Hard') pairCount = 10;
  if (difficulty === 'Exam') pairCount = 12;

  let sourceData: { term: string; definition: string }[] = [];
  
  if (topic === 'Vocabulary') {
    // Use words matching difficulty, or fallback
    sourceData = DB.words.filter(w => w.difficulty === difficulty);
    if (sourceData.length < pairCount) {
        sourceData = [...sourceData, ...DB.words.filter(w => w.difficulty !== difficulty)];
    }
  } else {
    sourceData = DB.idioms.filter(i => i.difficulty === difficulty);
    if (sourceData.length < pairCount) {
        sourceData = [...sourceData, ...DB.idioms.filter(i => i.difficulty !== difficulty)];
    }
  }

  // Select N unique items
  // Use a map to ensure uniqueness by term
  const uniqueItems = Array.from(new Map(sourceData.map(item => [item.term, item])).values());
  const selectedItems = shuffle(uniqueItems).slice(0, pairCount);

  const cards: MemoryCard[] = [];

  selectedItems.forEach((item, index) => {
    const pairId = `pair-${index}`;
    
    // Card 1: Term
    cards.push({
      id: `${pairId}-term`,
      pairId: pairId,
      content: item.term,
      type: 'term',
      isFlipped: false,
      isMatched: false
    });

    // Card 2: Definition
    cards.push({
      id: `${pairId}-def`,
      pairId: pairId,
      content: item.definition,
      type: 'definition',
      isFlipped: false,
      isMatched: false
    });
  });

  return shuffle(cards);
};

export const getWordScramblePuzzles = (settings: WordScrambleSettings): WordScramblePuzzle[] => {
    const { topic, difficulty, numQuestions } = settings;
    
    // Better typing to allow access to 'example' later without dangerous casting
    let sourceData: (Word | Idiom)[] = [];
    
    if (topic === 'Vocabulary') {
        sourceData = DB.words.filter(w => w.difficulty === difficulty);
        if (sourceData.length < numQuestions) {
             sourceData = [...sourceData, ...DB.words.filter(w => w.difficulty !== difficulty)];
        }
    } else {
        sourceData = DB.idioms.filter(i => i.difficulty === difficulty);
        if (sourceData.length < numQuestions) {
             sourceData = [...sourceData, ...DB.idioms.filter(i => i.difficulty !== difficulty)];
        }
    }

    const selectedItems = shuffle(Array.from(new Map(sourceData.map(item => [item.term, item])).values())).slice(0, numQuestions);

    return selectedItems.map(item => {
        const original = item.term.toUpperCase();
        // Keep only letters for the scramble
        const letters = original.replace(/[^A-Z]/g, '').split('');
        let scrambled = shuffle([...letters]);
        
        // Ensure scrambled version is not identical to original letters (if possible)
        if (letters.length > 1) {
            while (scrambled.join('') === letters.join('')) {
                scrambled = shuffle([...scrambled]);
            }
        }

        return {
            originalTerm: original,
            scrambledLetters: scrambled,
            definition: item.definition,
            hint: item.example || "" 
        };
    });
};
