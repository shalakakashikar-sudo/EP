// @/database/grammar/tagQuestions.ts
import { GrammarQuestion } from '../../types';

export const tagQuestions: GrammarQuestion[] = [
    // ==============================================================================
    // --- EASY ---
    // ==============================================================================
    { question: 'It isn\'t raining, ___?', options: ['is it', 'isn\'t it', 'does it', 'has it'], correctAnswer: 'is it', explanation: 'A negative statement ("It isn\'t...") takes a positive tag ("is it?").', difficulty: 'Easy' },
    { question: 'You are coming to the party, ___?', options: ['aren\'t you', 'are you', 'don\'t you', 'do you'], correctAnswer: 'aren\'t you', explanation: 'A positive statement with "are" takes the negative tag "aren\'t".', difficulty: 'Easy' },
    { question: 'They are happy, ___?', options: ['aren\'t they', 'are they', 'do they', 'don\'t they'], correctAnswer: 'aren\'t they', explanation: 'Use the same auxiliary verb ("are") in the tag, but make it negative.', difficulty: 'Easy' },
    { question: 'She was late, ___?', options: ['wasn\'t she', 'was she', 'didn\'t she', 'is she'], correctAnswer: 'wasn\'t she', explanation: 'The verb "was" is repeated in the negative form for the tag.', difficulty: 'Easy' },
    { question: 'He is your brother, ___?', options: ['isn\'t he', 'is he', 'doesn\'t he', 'didn\'t he'], correctAnswer: 'isn\'t he', explanation: 'Positive statement ("He is") requires a negative tag ("isn\'t he").', difficulty: 'Easy' },
    { question: 'We aren\'t lost, ___?', options: ['are we', 'aren\'t we', 'do we', 'have we'], correctAnswer: 'are we', explanation: 'Negative statement ("aren\'t") requires a positive tag ("are").', difficulty: 'Easy' },
    { question: 'You can swim, ___?', options: ['can\'t you', 'can you', 'don\'t you', 'couldn\'t you'], correctAnswer: 'can\'t you', explanation: 'The modal verb "can" is repeated as "can\'t" in the tag.', difficulty: 'Easy' },
    { question: 'The dog is sleeping, ___?', options: ['isn\'t it', 'is it', 'doesn\'t it', 'didn\'t it'], correctAnswer: 'isn\'t it', explanation: 'Use "it" for an animal and repeat the auxiliary "is".', difficulty: 'Easy' },
    { question: 'They were friendly, ___?', options: ['weren\'t they', 'were they', 'did they', 'didn\'t they'], correctAnswer: 'weren\'t they', explanation: 'Positive past "were" becomes "weren\'t" in the tag.', difficulty: 'Easy' },
    { question: 'It was a good movie, ___?', options: ['wasn\'t it', 'was it', 'didn\'t it', 'isn\'t it'], correctAnswer: 'wasn\'t it', explanation: 'Positive past "was" becomes "wasn\'t".', difficulty: 'Easy' },
    { question: 'She isn\'t a teacher, ___?', options: ['is she', 'isn\'t she', 'does she', 'has she'], correctAnswer: 'is she', explanation: 'Negative statement ("isn\'t") becomes positive ("is").', difficulty: 'Easy' },
    { question: 'You will help me, ___?', options: ['won\'t you', 'will you', 'don\'t you', 'aren\'t you'], correctAnswer: 'won\'t you', explanation: 'The negative form of "will" is "won\'t".', difficulty: 'Easy' },
    { question: 'We can\'t park here, ___?', options: ['can we', 'can\'t we', 'do we', 'are we'], correctAnswer: 'can we', explanation: 'Negative "can\'t" becomes positive "can".', difficulty: 'Easy' },
    { question: 'He has a car, ___?', options: ['doesn\'t he', 'don\'t he', 'hasn\'t he', 'isn\'t he'], correctAnswer: 'doesn\'t he', explanation: 'When "have" is the main verb (possession), we typically use "do/does" in the tag (American/Modern English).', difficulty: 'Easy' },
    { question: 'You don\'t eat meat, ___?', options: ['do you', 'don\'t you', 'are you', 'will you'], correctAnswer: 'do you', explanation: 'Negative auxiliary "don\'t" becomes positive "do".', difficulty: 'Easy' },

    // ==============================================================================
    // --- MEDIUM ---
    // ==============================================================================
    { question: 'He didn\'t go to the party, ___?', options: ['did he', 'didn\'t he', 'does he', 'doesn\'t he'], correctAnswer: 'did he', explanation: 'A negative statement ("didn\'t") needs a positive tag ("did").', difficulty: 'Medium' },
    { question: 'She can speak French, ___?', options: ['can\'t she', 'can she', 'doesn\'t she', 'does she'], correctAnswer: 'can\'t she', explanation: 'Positive statement with modal verb "can" gets a negative tag "can\'t".', difficulty: 'Medium' },
    { question: 'They live in London, ___?', options: ['don\'t they', 'do they', 'are they', 'haven\'t they'], correctAnswer: 'don\'t they', explanation: 'Present simple sentences without an auxiliary use "don\'t" or "doesn\'t" in the tag.', difficulty: 'Medium' },
    { question: 'You wouldn\'t lie to me, ___?', options: ['would you', 'wouldn\'t you', 'did you', 'will you'], correctAnswer: 'would you', explanation: 'Negative auxiliary "wouldn\'t" takes positive "would".', difficulty: 'Medium' },
    { question: 'She has been to Paris, ___?', options: ['hasn\'t she', 'didn\'t she', 'doesn\'t she', 'isn\'t she'], correctAnswer: 'hasn\'t she', explanation: 'Present perfect auxiliary "has" is used in the tag.', difficulty: 'Medium' },
    { question: 'Your parents travel a lot, ___?', options: ['don\'t they', 'aren\'t they', 'do they', 'haven\'t they'], correctAnswer: 'don\'t they', explanation: 'Plural subject + Present Simple action verb = "don\'t they".', difficulty: 'Medium' },
    { question: 'He writes books, ___?', options: ['doesn\'t he', 'don\'t he', 'isn\'t he', 'hasn\'t he'], correctAnswer: 'doesn\'t he', explanation: 'Singular subject + Present Simple action verb = "doesn\'t he".', difficulty: 'Medium' },
    { question: 'You should apologize, ___?', options: ['shouldn\'t you', 'should you', 'don\'t you', 'will you'], correctAnswer: 'shouldn\'t you', explanation: 'The modal "should" is repeated as "shouldn\'t".', difficulty: 'Medium' },
    { question: 'The train left at 8 PM, ___?', options: ['didn\'t it', 'did it', 'wasn\'t it', 'hadn\'t it'], correctAnswer: 'didn\'t it', explanation: 'Past Simple sentences use "did" or "didn\'t" in the tag.', difficulty: 'Medium' },
    { question: 'We hadn\'t seen that movie before, ___?', options: ['had we', 'hadn\'t we', 'did we', 'have we'], correctAnswer: 'had we', explanation: 'Past Perfect auxiliary "hadn\'t" becomes positive "had".', difficulty: 'Medium' },
    { question: 'You could hear the noise, ___?', options: ['couldn\'t you', 'could you', 'can\'t you', 'didn\'t you'], correctAnswer: 'couldn\'t you', explanation: 'The modal "could" becomes "couldn\'t".', difficulty: 'Medium' },
    { question: 'Mary and John are getting married, ___?', options: ['aren\'t they', 'isn\'t they', 'don\'t they', 'won\'t they'], correctAnswer: 'aren\'t they', explanation: 'Two people form a plural subject ("they"), requiring "aren\'t".', difficulty: 'Medium' },
    { question: 'It will rain tomorrow, ___?', options: ['won\'t it', 'will it', 'isn\'t it', 'doesn\'t it'], correctAnswer: 'won\'t it', explanation: 'Positive "will" becomes negative "won\'t".', difficulty: 'Medium' },
    { question: 'He promised to help, ___?', options: ['didn\'t he', 'did he', 'hadn\'t he', 'wouldn\'t he'], correctAnswer: 'didn\'t he', explanation: 'Past Simple affirmative uses "didn\'t".', difficulty: 'Medium' },
    { question: 'You haven\'t finished yet, ___?', options: ['have you', 'haven\'t you', 'did you', 'do you'], correctAnswer: 'have you', explanation: 'Negative Present Perfect "haven\'t" becomes positive "have".', difficulty: 'Medium' },

    // ==============================================================================
    // --- HARD ---
    // ==============================================================================
    { question: 'Let\'s go to the beach, ___?', options: ['shall we', 'should we', 'will we', 'do we'], correctAnswer: 'shall we', explanation: 'The tag for "Let\'s..." suggests a suggestion, and always uses "shall we?".', difficulty: 'Hard' },
    { question: 'I am right, ___?', options: ['aren\'t I', 'am I not', 'don\'t I', 'do I'], correctAnswer: 'aren\'t I', explanation: 'The tag question for "I am" is always "aren\'t I?". "Am I not?" is formal/archaic.', difficulty: 'Hard' },
    { question: 'Don\'t be late, ___?', options: ['will you', 'do you', 'don\'t you', 'shall you'], correctAnswer: 'will you', explanation: 'Imperatives (commands), especially negative ones, usually take "will you" as a tag.', difficulty: 'Hard' },
    { question: 'He never plays football, ___?', options: ['does he', 'doesn\'t he', 'is he', 'isn\'t he'], correctAnswer: 'does he', explanation: '"Never" makes the statement negative grammatically, so the tag must be positive.', difficulty: 'Hard' },
    { question: 'Open the window, ___?', options: ['will you', 'do you', 'don\'t you', 'aren\'t you'], correctAnswer: 'will you', explanation: 'Positive imperatives (requests/commands) typically use "will you" (or sometimes "can you/could you").', difficulty: 'Hard' },
    { question: 'There is a problem, ___?', options: ['isn\'t there', 'is there', 'isn\'t it', 'doesn\'t it'], correctAnswer: 'isn\'t there', explanation: 'When the subject is "There", it is repeated in the tag.', difficulty: 'Hard' },
    { question: 'Everyone likes pizza, ___?', options: ['don\'t they', 'doesn\'t he', 'do they', 'aren\'t they'], correctAnswer: 'don\'t they', explanation: 'Indefinite pronouns like "everyone" take a singular verb in the statement but "they" in the tag.', difficulty: 'Hard' },
    { question: 'I\'m not late, ___?', options: ['am I', 'aren\'t I', 'are I', 'do I'], correctAnswer: 'am I', explanation: 'While "I am" becomes "aren\'t I", the negative "I\'m not" simply becomes "am I".', difficulty: 'Hard' },
    { question: 'They rarely eat out, ___?', options: ['do they', 'don\'t they', 'are they', 'aren\'t they'], correctAnswer: 'do they', explanation: '"Rarely" is a negative adverb, so the tag is positive.', difficulty: 'Hard' },
    { question: 'Stop making that noise, ___?', options: ['will you', 'do you', 'don\'t you', 'shall we'], correctAnswer: 'will you', explanation: 'An imperative telling someone to stop usually takes "will you".', difficulty: 'Hard' },
    { question: 'Nobody called, ___?', options: ['did they', 'didn\'t they', 'did he', 'didn\'t he'], correctAnswer: 'did they', explanation: '"Nobody" is negative and implies "they", so the tag is positive "did they".', difficulty: 'Hard' },
    { question: 'He had better go now, ___?', options: ['hadn\'t he', 'didn\'t he', 'wouldn\'t he', 'shouldn\'t he'], correctAnswer: 'hadn\'t he', explanation: '"Had better" is treated as an auxiliary structure, so the tag uses "had".', difficulty: 'Hard' },
    { question: 'Let\'s not argue, ___?', options: ['shall we', 'will we', 'do we', 'can we'], correctAnswer: 'shall we', explanation: 'Even negative "Let\'s not" suggestions use "shall we".', difficulty: 'Hard' },
    { question: 'Something is burning, ___?', options: ['isn\'t it', 'is it', 'aren\'t they', 'doesn\'t it'], correctAnswer: 'isn\'t it', explanation: '"Something" is treated as singular "it" in the tag.', difficulty: 'Hard' },
    { question: 'He\'d rather stay home, ___?', options: ['wouldn\'t he', 'hadn\'t he', 'didn\'t he', 'won\'t he'], correctAnswer: 'wouldn\'t he', explanation: 'The contraction "He\'d" here stands for "He would" (followed by base verb), so the tag is "wouldn\'t".', difficulty: 'Hard' },

    // ==============================================================================
    // --- EXAM ---
    // ==============================================================================
    { question: 'Everyone is here, ___?', options: ['aren\'t they', 'isn\'t it', 'isn\'t he', 'are they'], correctAnswer: 'aren\'t they', explanation: 'Subject "everyone" is grammatically singular but refers to a group, so the tag uses "they" and the plural verb "aren\'t".', difficulty: 'Exam' },
    { question: 'Nothing is wrong, ___?', options: ['is it', 'isn\'t it', 'are they', 'aren\'t they'], correctAnswer: 'is it', explanation: '"Nothing" makes the statement negative, so the tag must be positive "is it".', difficulty: 'Exam' },
    { question: 'She hardly ever speaks, ___?', options: ['does she', 'doesn\'t she', 'is she', 'isn\'t she'], correctAnswer: 'does she', explanation: '"Hardly" is a semi-negative adverb, requiring a positive tag.', difficulty: 'Exam' },
    { question: 'Neither of them offered to help, ___?', options: ['did they', 'didn\'t they', 'did he', 'didn\'t he'], correctAnswer: 'did they', explanation: '"Neither" makes the statement negative, and refers to people (they), so the tag is "did they".', difficulty: 'Exam' },
    { question: 'You used to live here, ___?', options: ['didn\'t you', 'usedn\'t you', 'don\'t you', 'weren\'t you'], correctAnswer: 'didn\'t you', explanation: '"Used to" is a past habit, so the tag uses the auxiliary for the past tense: "didn\'t".', difficulty: 'Exam' },
    { question: 'There used to be a cinema here, ___?', options: ['didn\'t there', 'usedn\'t there', 'wasn\'t there', 'hadn\'t there'], correctAnswer: 'didn\'t there', explanation: '"Used to" takes "did/didn\'t", and "There" is repeated as the subject.', difficulty: 'Exam' },
    { question: 'Little progress has been made, ___?', options: ['has it', 'hasn\'t it', 'does it', 'doesn\'t it'], correctAnswer: 'has it', explanation: '"Little" (without "a") is negative, meaning "almost no", so the tag is positive.', difficulty: 'Exam' },
    { question: 'One shouldn\'t be too strict, ___?', options: ['should one', 'shouldn\'t one', 'should you', 'shouldn\'t you'], correctAnswer: 'should one', explanation: 'If the subject is the formal "One", it is repeated in the tag.', difficulty: 'Exam' },
    { question: 'Everything looks beautiful, ___?', options: ['doesn\'t it', 'don\'t they', 'isn\'t it', 'aren\'t they'], correctAnswer: 'doesn\'t it', explanation: '"Everything" takes a singular verb and "it" in the tag. Note: "Looks" (Present Simple) requires "doesn\'t".', difficulty: 'Exam' },
    { question: 'He\'d done the work, ___?', options: ['hadn\'t he', 'wouldn\'t he', 'didn\'t he', 'hasn\'t he'], correctAnswer: 'hadn\'t he', explanation: 'The contraction "He\'d" here stands for "He had" (followed by past participle "done"), so the tag is "hadn\'t".', difficulty: 'Exam' },
    { question: 'Few people know the truth, ___?', options: ['do they', 'don\'t they', 'are they', 'aren\'t they'], correctAnswer: 'do they', explanation: '"Few" (without "a") implies a negative quantity (not many), so the tag is positive.', difficulty: 'Exam' },
    { question: 'This is your book, ___?', options: ['isn\'t it', 'isn\'t this', 'is it', 'is this'], correctAnswer: 'isn\'t it', explanation: 'When the subject is "This" or "That", the tag uses "it".', difficulty: 'Exam' },
    { question: 'Those aren\'t your keys, ___?', options: ['are they', 'aren\'t they', 'are those', 'aren\'t those'], correctAnswer: 'are they', explanation: 'When the subject is "These" or "Those", the tag uses "they".', difficulty: 'Exam' },
    { question: 'Be careful, ___?', options: ['won\'t you', 'don\'t you', 'aren\'t you', 'shall you'], correctAnswer: 'won\'t you', explanation: 'A warning imperative often uses "won\'t you" to sound like a persuasive instruction.', difficulty: 'Exam' },
    { question: 'Let\'s go, ___?', options: ['shall we', 'will we', 'can\'t we', 'don\'t we'], correctAnswer: 'shall we', explanation: 'The classic "Let\'s" rule applies here.', difficulty: 'Exam' }
];