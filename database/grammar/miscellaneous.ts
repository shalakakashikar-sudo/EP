
// @/database/grammar/miscellaneous.ts
import { GrammarQuestion } from '../../types';

export const miscellaneous: GrammarQuestion[] = [
    { question: 'The meeting will be held ___ Tuesday.', options: ['in', 'at', 'on', 'by'], correctAnswer: 'on', explanation: '"On" is used for specific days and dates.', difficulty: 'Easy' },
    { question: 'She speaks English very ___', options: ['good', 'well', 'best', 'better'], correctAnswer: 'well', explanation: '"Well" is an adverb that modifies the verb "speaks". "Good" is an adjective and cannot be used here.', difficulty: 'Easy' },
    { question: 'He drove the car too ___', options: ['fast', 'fastly', 'faster', 'fastest'], correctAnswer: 'fast', explanation: '"Fast" is an adverb, and it does not change its form. "Fastly" is not a word.', difficulty: 'Easy' },
    { question: 'Please give the book to ___', options: ['I', 'me', 'my', 'mine'], correctAnswer: 'me', explanation: '"Me" is an object pronoun and is used after a preposition like "to".', difficulty: 'Easy' },
    { question: 'My sister and ___ went to the movies.', options: ['I', 'me', 'my', 'myself'], correctAnswer: 'I', explanation: '"I" is a subject pronoun. To check, you can remove "My sister and" and the sentence should still make sense ("I went to the movies").', difficulty: 'Medium' },
    { question: 'She is much taller than ___', options: ['I', 'me', 'my', 'myself'], correctAnswer: 'I', explanation: 'When "than" is used as a conjunction in comparisons, the pronoun that follows is in the subject case. You can think of it as an ellipsis of "than I am". While "than me" is common in informal speech, "than I" is grammatically correct.', difficulty: 'Hard' },
    { question: 'The company is looking for someone ___ has experience in marketing.', options: ['who', 'whom', 'which', 'whose'], correctAnswer: 'who', explanation: '"Who" is a subject pronoun used for people.', difficulty: 'Medium' },
    { question: 'I have no idea ___ he is.', options: ['who', 'whom', 'which', 'whose'], correctAnswer: 'who', explanation: '"Who" is used as a subject pronoun here.', difficulty: 'Medium' },
    { question: 'I need to ___ the new software on my computer.', options: ['set up', 'set in', 'set off', 'set on'], correctAnswer: 'set up', explanation: '"Set up" is a phrasal verb meaning to install or configure something.', difficulty: 'Medium' },
    
    // New Questions
    { question: 'I am ___ tired to walk any further.', options: ['too', 'so', 'very', 'such'], correctAnswer: 'too', explanation: '"Too" before an adjective implies a negative result (unable to do something).', difficulty: 'Easy' },
    { question: 'She is ___ a good singer that she won the contest.', options: ['such', 'so', 'very', 'too'], correctAnswer: 'such', explanation: 'We use "such + (a/an) + adjective + noun + that".', difficulty: 'Medium' },
    { question: 'The soup smells ___.', options: ['good', 'well', 'nicely', 'beautifully'], correctAnswer: 'good', explanation: 'Sense verbs (smell, taste, look) are followed by adjectives, not adverbs.', difficulty: 'Medium' },
    { question: 'Hardly ___ entered the room when the phone rang.', options: ['had I', 'I had', 'did I', 'I did'], correctAnswer: 'had I', explanation: 'Negative adverbs at the start of a sentence (Hardly, Scarcely) trigger inversion.', difficulty: 'Exam' },
    { question: 'Not only ___ late, but he also forgot his books.', options: ['was he', 'he was', 'did he', 'he did'], correctAnswer: 'was he', explanation: 'Inversion is required after "Not only" at the beginning of a clause.', difficulty: 'Exam' },
    { question: 'I used to ___ football when I was young.', options: ['play', 'playing', 'played', 'plays'], correctAnswer: 'play', explanation: '"Used to" for past habits is followed by the base verb.', difficulty: 'Medium' },
    { question: 'I am not used to ___ up so early.', options: ['getting', 'get', 'got', 'gotten'], correctAnswer: 'getting', explanation: '"Be used to" (meaning accustomed to) is followed by a gerund.', difficulty: 'Hard' },
    { question: 'I wish I ___ richer.', options: ['were', 'am', 'will be', 'would be'], correctAnswer: 'were', explanation: 'Subjunctive mood for hypothetical wishes uses "were" for all subjects.', difficulty: 'Hard' },
    { question: 'It\'s high time we ___ home.', options: ['went', 'go', 'have gone', 'had gone'], correctAnswer: 'went', explanation: '"It\'s high time" is followed by the past simple to express that something should have happened already.', difficulty: 'Exam' }
];
