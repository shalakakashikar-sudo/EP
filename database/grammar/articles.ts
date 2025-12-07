
// @/database/grammar/articles.ts
import { GrammarQuestion } from '../../types';

export const articles: GrammarQuestion[] = [
    // --- EXISTING QUESTIONS ---
    { question: 'I saw ___ amazing movie last night.', options: ['a', 'an', 'the', 'some'], correctAnswer: 'an', explanation: '"An" is used before words that start with a vowel sound, like "amazing".', difficulty: 'Easy' },
    { question: 'Could you please pass me ___ salt?', options: ['a', 'an', 'the', 'any'], correctAnswer: 'the', explanation: '"The" is a definite article used here because it refers to a specific salt shaker that is understood by both speakers.', difficulty: 'Easy' },
    { question: 'I bought ___ orange from the market.', options: ['a', 'an', 'the', 'some'], correctAnswer: 'an', explanation: '"An" is used before words starting with a vowel sound.', difficulty: 'Easy' },
    { question: 'Please pass me ___ pen on the table.', options: ['a', 'an', 'the', 'some'], correctAnswer: 'the', explanation: '"The" refers to a specific pen that both speaker and listener know.', difficulty: 'Easy' },
    { question: 'My father is ___ engineer.', options: ['a', 'an', 'the', '-'], correctAnswer: 'an', explanation: 'We use "an" before professions starting with a vowel sound.', difficulty: 'Easy' },
    { question: '___ sun rises in the east.', options: ['A', 'An', 'The', '-'], correctAnswer: 'The', explanation: 'We use "The" for unique things in our world (the sun, the moon, the earth).', difficulty: 'Easy' },
    
    // --- NEW EASY QUESTIONS ---
    { question: 'I need ___ new phone.', options: ['a', 'an', 'the', '-'], correctAnswer: 'a', explanation: 'We use "a" before singular nouns starting with a consonant sound.', difficulty: 'Easy' },
    { question: 'Look at ___ moon!', options: ['a', 'an', 'the', '-'], correctAnswer: 'the', explanation: 'We use "the" because there is only one moon orbiting Earth.', difficulty: 'Easy' },
    { question: 'She wants to be ___ artist.', options: ['a', 'an', 'the', '-'], correctAnswer: 'an', explanation: '"Artist" begins with a vowel sound.', difficulty: 'Easy' },
    { question: 'He is ___ very nice person.', options: ['a', 'an', 'the', '-'], correctAnswer: 'a', explanation: 'The choice between "a" and "an" depends on the sound of the adjective following it ("very" starts with a consonant sound).', difficulty: 'Easy' },
    { question: 'Can I ask ___ question?', options: ['a', 'an', 'the', '-'], correctAnswer: 'a', explanation: 'We use "a" for a non-specific singular countable noun starting with a consonant.', difficulty: 'Easy' },
    { question: 'Paris is ___ capital of France.', options: ['a', 'an', 'the', '-'], correctAnswer: 'the', explanation: 'We use "the" because there is only one capital city.', difficulty: 'Easy' },

    // --- EXISTING MEDIUM QUESTIONS ---
    { question: 'I go to ___ school by bus.', options: ['the', 'a', 'an', '-'], correctAnswer: '-', explanation: 'We do not use an article when talking about the institution/purpose of school, work, or church.', difficulty: 'Medium' },
    { question: 'She plays ___ piano beautifully.', options: ['a', 'an', 'the', '-'], correctAnswer: 'the', explanation: 'We use "the" with musical instruments when talking about playing them.', difficulty: 'Medium' },
    { question: '___ rich should help the poor.', options: ['A', 'An', 'The', '-'], correctAnswer: 'The', explanation: '"The" + adjective refers to a group of people (the rich, the poor, the homeless).', difficulty: 'Medium' },
    { question: 'He is ___ honest man.', options: ['a', 'an', 'the', '-'], correctAnswer: 'an', explanation: '"Honest" starts with a silent "h", so it begins with a vowel sound.', difficulty: 'Medium' },

    // --- NEW MEDIUM QUESTIONS ---
    { question: 'I usually have ___ lunch at 12:30.', options: ['a', 'an', 'the', '-'], correctAnswer: '-', explanation: 'We do not usually use articles before the names of meals (breakfast, lunch, dinner).', difficulty: 'Medium' },
    { question: 'It took me ___ hour to get home.', options: ['a', 'an', 'the', '-'], correctAnswer: 'an', explanation: '"Hour" starts with a silent "h", producing a vowel sound.', difficulty: 'Medium' },
    { question: 'He goes to work by ___ train.', options: ['a', 'an', 'the', '-'], correctAnswer: '-', explanation: 'We use zero article with "by" + modes of transport (by car, by bus, by train).', difficulty: 'Medium' },
    { question: 'Have you ever seen ___ UFO?', options: ['a', 'an', 'the', '-'], correctAnswer: 'a', explanation: '"UFO" is pronounced "You-F-O", starting with a "y" (consonant) sound.', difficulty: 'Medium' },
    { question: 'She is ___ university student.', options: ['a', 'an', 'the', '-'], correctAnswer: 'a', explanation: '"University" starts with a "y" (consonant) sound.', difficulty: 'Medium' },
    { question: '___ Mount Fuji is in Japan.', options: ['The', 'A', 'An', '-'], correctAnswer: '-', explanation: 'Individual mountains do not typically take "the" (unlike mountain ranges).', difficulty: 'Medium' },
    { question: 'We stayed at ___ Hilton Hotel.', options: ['-', 'a', 'an', 'the'], correctAnswer: 'the', explanation: 'Names of hotels, theaters, and museums usually take "the".', difficulty: 'Medium' },

    // --- EXISTING HARD QUESTIONS ---
    { question: 'I visited ___ France last year.', options: ['the', 'a', 'an', '-'], correctAnswer: '-', explanation: 'Most countries do not take an article.', difficulty: 'Hard' },
    { question: 'We went to ___ United Kingdom.', options: ['-', 'a', 'an', 'the'], correctAnswer: 'the', explanation: 'Countries with "Kingdom", "States", or "Republic" in their name take "the".', difficulty: 'Hard' },
    { question: '___ Mount Everest is the highest peak.', options: ['The', 'A', 'An', '-'], correctAnswer: '-', explanation: 'We do not usually use "the" with individual mountain names.', difficulty: 'Hard' },

    // --- NEW HARD QUESTIONS ---
    { question: '___ Nile is the longest river in the world.', options: ['A', 'An', 'The', '-'], correctAnswer: 'The', explanation: 'Names of rivers, oceans, and seas take "the".', difficulty: 'Hard' },
    { question: 'They went to ___ Alps for skiing.', options: ['-', 'a', 'an', 'the'], correctAnswer: 'the', explanation: 'Mountain ranges (plural) take "the" (e.g., the Alps, the Rockies).', difficulty: 'Hard' },
    { question: 'He went to ___ prison to visit his client.', options: ['-', 'a', 'an', 'the'], correctAnswer: 'the', explanation: 'We use "the" because he is visiting the building, not staying there as a prisoner (which would be zero article).', difficulty: 'Hard' },
    { question: '___ Lake Superior is the largest of the Great Lakes.', options: ['The', 'A', 'An', '-'], correctAnswer: '-', explanation: 'Names of individual lakes usually do not take "the".', difficulty: 'Hard' },
    { question: '___ Philippines is an archipelago.', options: ['-', 'A', 'An', 'The'], correctAnswer: 'The', explanation: 'Countries with plural names (The Philippines, The Netherlands) take "the".', difficulty: 'Hard' },
    { question: 'I prefer ___ coffee to tea.', options: ['the', 'a', 'an', '-'], correctAnswer: '-', explanation: 'We do not use articles when talking about uncountable nouns in general.', difficulty: 'Hard' },
    { question: '___ Pacific Ocean is deeper than the Atlantic.', options: ['-', 'A', 'An', 'The'], correctAnswer: 'The', explanation: 'Oceans always take the definite article "the".', difficulty: 'Hard' },

    // --- EXISTING EXAM QUESTIONS ---
    { question: 'He was elected ___ President.', options: ['the', 'a', 'an', '-'], correctAnswer: '-', explanation: 'Articles are often omitted before titles indicating a unique position held by one person at a time.', difficulty: 'Exam' },
    { question: '___ knowledge is power.', options: ['The', 'A', 'An', '-'], correctAnswer: '-', explanation: 'Abstract nouns used in a general sense do not take an article.', difficulty: 'Exam' },
    { question: 'I love ___ nature.', options: ['the', 'a', 'an', '-'], correctAnswer: '-', explanation: '"Nature" (meaning the natural world) is never used with "the".', difficulty: 'Exam' },

    // --- NEW EXAM QUESTIONS ---
    { question: 'He patted me on ___ back.', options: ['-', 'a', 'an', 'the'], correctAnswer: 'the', explanation: 'We use "the" when referring to parts of the body in this construction (verb + object + preposition + the + body part).', difficulty: 'Exam' },
    { question: '___ giraffes are tall animals.', options: ['The', 'A', 'An', '-'], correctAnswer: '-', explanation: 'Plural nouns used in a general sense ("Giraffes" in general) do not take "the". "The giraffes" would refer to specific ones.', difficulty: 'Exam' },
    { question: '___ giraffe is a tall animal.', options: ['The', 'A', 'An', '-'], correctAnswer: 'The', explanation: '"The" + singular noun can be used to generalize about a whole species or class.', difficulty: 'Exam' },
    { question: 'We arrived at ___ Heathrow Airport.', options: ['the', 'a', 'an', '-'], correctAnswer: '-', explanation: 'Names of airports usually do not take "the".', difficulty: 'Exam' },
    { question: 'He is in ___ hospital having surgery.', options: ['the', 'a', 'an', '-'], correctAnswer: '-', explanation: 'In British English, "in hospital" implies being a patient. American English often uses "in the hospital". This question assumes British usage or general institution rule.', difficulty: 'Exam' },
    { question: '___ more you read, ___ more you learn.', options: ['A, a', '-, -', 'The, the', 'The, -'], correctAnswer: 'The, the', explanation: 'This is a double comparative structure requiring "the" before both parts.', difficulty: 'Exam' },
    { question: '___ man is mortal.', options: ['The', 'A', 'An', '-'], correctAnswer: '-', explanation: '"Man" referring to the human race or mankind does not take an article.', difficulty: 'Exam' },
    { question: 'I haven\'t seen him for ___ year and ___ half.', options: ['a, a', 'a, the', 'the, a', 'the, the'], correctAnswer: 'a, a', explanation: 'The phrase is "a year and a half".', difficulty: 'Exam' }
];
