// @/database/grammar/passiveVoice.ts
import { GrammarQuestion } from '../../types';

export const passiveVoice: GrammarQuestion[] = [
    // ==============================================================================
    // --- EASY ---
    // ==============================================================================
    { question: 'Butter ___ from milk.', options: ['is made', 'makes', 'made', 'is making'], correctAnswer: 'is made', explanation: 'General truth expressed in Present Simple Passive: is/are + past participle.', difficulty: 'Easy' },
    { question: 'The room ___ cleaned every day.', options: ['is', 'are', 'was', 'were'], correctAnswer: 'is', explanation: 'Present Simple Passive for a regular action.', difficulty: 'Easy' },
    { question: 'The letter ___ sent yesterday.', options: ['was', 'is', 'will be', 'has been'], correctAnswer: 'was', explanation: 'Past Simple Passive for a completed action in the past.', difficulty: 'Easy' },
    { question: 'These shoes ___ in Italy.', options: ['are made', 'make', 'made', 'is made'], correctAnswer: 'are made', explanation: 'Present Simple Passive describing origin.', difficulty: 'Easy' },
    { question: 'The game ___ won by our team.', options: ['was', 'is', 'were', 'has'], correctAnswer: 'was', explanation: 'Past Simple Passive.', difficulty: 'Easy' },
    { question: '___ the car parked in the garage?', options: ['Is', 'Does', 'Has', 'Did'], correctAnswer: 'Is', explanation: 'Question form of Present Simple Passive.', difficulty: 'Easy' },
    { question: 'The windows ___ washed once a week.', options: ['are', 'is', 'was', 'have'], correctAnswer: 'are', explanation: 'Passive voice with plural subject "windows".', difficulty: 'Easy' },
    { question: 'My bike ___ stolen last night.', options: ['was', 'is', 'has been', 'had been'], correctAnswer: 'was', explanation: 'Past Simple Passive with specific time "last night".', difficulty: 'Easy' },
    { question: 'Rome ___ not built in a day.', options: ['was', 'is', 'were', 'has'], correctAnswer: 'was', explanation: 'Famous proverb using Past Simple Passive.', difficulty: 'Easy' },
    { question: 'The garbage ___ taken out every Tuesday.', options: ['is', 'was', 'has', 'will'], correctAnswer: 'is', explanation: 'Routine action in the present.', difficulty: 'Easy' },

    // ==============================================================================
    // --- MEDIUM ---
    // ==============================================================================
    { question: 'The book ___ by a famous author.', options: ['was written', 'wrote', 'is writing', 'writes'], correctAnswer: 'was written', explanation: 'Passive voice: subject receives the action.', difficulty: 'Medium' },
    { question: 'The Mona Lisa ___ by Leonardo da Vinci.', options: ['was painted', 'painted', 'is painting', 'paints'], correctAnswer: 'was painted', explanation: 'Passive voice describing the creator.', difficulty: 'Medium' },
    { question: 'English ___ all over the world.', options: ['is spoken', 'speaks', 'spoke', 'is speaking'], correctAnswer: 'is spoken', explanation: 'Present Simple Passive.', difficulty: 'Medium' },
    { question: 'The new bridge ___ next year.', options: ['will be built', 'will build', 'builds', 'is building'], correctAnswer: 'will be built', explanation: 'Future Simple Passive.', difficulty: 'Medium' },
    { question: 'The thief ___ by the police yesterday.', options: ['was caught', 'caught', 'is caught', 'catches'], correctAnswer: 'was caught', explanation: 'Past Simple Passive.', difficulty: 'Medium' },
    { question: 'This cake ___ by my mother.', options: ['was made', 'made', 'is making', 'makes'], correctAnswer: 'was made', explanation: 'Passive voice focusing on the result.', difficulty: 'Medium' },
    { question: 'Mistakes ___ in the report.', options: ['were made', 'made', 'are making', 'make'], correctAnswer: 'were made', explanation: 'Passive voice: "Mistakes were made" is a common phrase.', difficulty: 'Medium' },
    { question: 'I ___ a job at the bank.', options: ['was offered', 'offered', 'was offering', 'have offered'], correctAnswer: 'was offered', explanation: 'Passive with indirect object as subject.', difficulty: 'Medium' },
    { question: 'Dinner ___ right now.', options: ['is being cooked', 'is cooking', 'cooks', 'cooked'], correctAnswer: 'is being cooked', explanation: 'Present Continuous Passive: is/are being + past participle.', difficulty: 'Medium' },
    { question: 'The house ___ yet.', options: ['hasn\'t been sold', 'didn\'t sell', 'hasn\'t sold', 'wasn\'t selling'], correctAnswer: 'hasn\'t been sold', explanation: 'Present Perfect Passive: has/have been + past participle.', difficulty: 'Medium' },
    { question: 'The problem ___ solved easily.', options: ['can be', 'can', 'be', 'is'], correctAnswer: 'can be', explanation: 'Modal Passive: modal + be + past participle.', difficulty: 'Medium' },
    { question: 'Homework ___ done before watching TV.', options: ['must be', 'must', 'has', 'is'], correctAnswer: 'must be', explanation: 'Modal of obligation in passive.', difficulty: 'Medium' },
    { question: 'My car ___ at the moment.', options: ['is being repaired', 'is repairing', 'repairs', 'was repaired'], correctAnswer: 'is being repaired', explanation: 'Present Continuous Passive.', difficulty: 'Medium' },
    { question: '___ the invitations been sent?', options: ['Have', 'Has', 'Did', 'Were'], correctAnswer: 'Have', explanation: 'Present Perfect Passive Question.', difficulty: 'Medium' },
    { question: 'The meeting ___ cancelled.', options: ['has been', 'has', 'was being', 'is being'], correctAnswer: 'has been', explanation: 'Present Perfect Passive indicating recent completion.', difficulty: 'Medium' },

    // ==============================================================================
    // --- HARD ---
    // ==============================================================================
    { question: 'The project ___ by next Friday.', options: ['will have been completed', 'will complete', 'will be completing', 'completes'], correctAnswer: 'will have been completed', explanation: 'Future Perfect Passive: will have been + past participle.', difficulty: 'Hard' },
    { question: 'It ___ that the company is closing.', options: ['is said', 'says', 'is saying', 'said'], correctAnswer: 'is said', explanation: 'Impersonal passive structure: "It is said/believed/thought that...".', difficulty: 'Hard' },
    { question: 'He loves ___ praised.', options: ['being', 'be', 'been', 'to be'], correctAnswer: 'being', explanation: 'Passive Gerund: being + past participle.', difficulty: 'Hard' },
    { question: 'The house ___ before we moved in.', options: ['had been cleaned', 'was cleaned', 'has been cleaned', 'cleaned'], correctAnswer: 'had been cleaned', explanation: 'Past Perfect Passive: had been + past participle (action before another past action).', difficulty: 'Hard' },
    { question: 'The car ___ when the accident happened.', options: ['was being washed', 'was washing', 'is being washed', 'had washed'], correctAnswer: 'was being washed', explanation: 'Past Continuous Passive: was/were being + past participle.', difficulty: 'Hard' },
    { question: 'By the time we arrived, the food ___ eaten.', options: ['had been', 'has been', 'was', 'is'], correctAnswer: 'had been', explanation: 'Past Perfect Passive.', difficulty: 'Hard' },
    { question: 'I remember ___ the story by my grandmother.', options: ['being told', 'telling', 'to be told', 'been told'], correctAnswer: 'being told', explanation: 'Passive Gerund after "remember".', difficulty: 'Hard' },
    { question: 'She hopes ___ for the team.', options: ['to be selected', 'being selected', 'to select', 'selecting'], correctAnswer: 'to be selected', explanation: 'Passive Infinitive: to be + past participle.', difficulty: 'Hard' },
    { question: 'Who ___ the telephone invented by?', options: ['was', 'is', 'has', 'did'], correctAnswer: 'was', explanation: 'Passive question structure.', difficulty: 'Hard' },
    { question: 'This letter needs ___ .', options: ['sending', 'to send', 'sent', 'be sent'], correctAnswer: 'sending', explanation: 'After "need", a gerund implies passive meaning (needs sending = needs to be sent).', difficulty: 'Hard' },
    { question: 'The decision ___ made tomorrow.', options: ['is to be', 'is', 'will', 'has'], correctAnswer: 'is to be', explanation: '"Be to + passive infinitive" is used for formal instructions or future arrangements.', difficulty: 'Hard' },
    { question: 'Nothing ___ done about it since then.', options: ['has been', 'was', 'is', 'had been'], correctAnswer: 'has been', explanation: 'Present Perfect Passive with "since".', difficulty: 'Hard' },

    // ==============================================================================
    // --- EXAM ---
    // ==============================================================================
    { question: 'I need to get my eyes ___.', options: ['tested', 'test', 'testing', 'to test'], correctAnswer: 'tested', explanation: 'Causative form: get/have + object + past participle.', difficulty: 'Exam' },
    { question: 'He is thought ___ the best doctor in town.', options: ['to be', 'being', 'is', 'was'], correctAnswer: 'to be', explanation: 'Personal passive construction: Subject + passive verb + to infinitive.', difficulty: 'Exam' },
    { question: 'We ___ the roof repaired last week.', options: ['had', 'got', 'did', 'made'], correctAnswer: 'had', explanation: 'Causative "have": have + object + past participle.', difficulty: 'Exam' },
    { question: 'She ___ her hair cut yesterday.', options: ['got', 'had', 'did', 'made'], correctAnswer: 'got', explanation: 'Causative "get" (informal): get + object + past participle.', difficulty: 'Exam' },
    { question: 'The fugitive is reported ___ hiding in the woods.', options: ['to be', 'being', 'that he is', 'to have'], correctAnswer: 'to be', explanation: 'Personal passive with continuous infinitive.', difficulty: 'Exam' },
    { question: 'It is believed ___ he is innocent.', options: ['that', 'to', 'for', 'of'], correctAnswer: 'that', explanation: 'Impersonal passive construction: It is believed that...', difficulty: 'Exam' },
    { question: 'He was given ___ book.', options: ['a', 'to a', 'for a', 'with a'], correctAnswer: 'a', explanation: 'Passive with two objects: "He was given a book" (no preposition needed).', difficulty: 'Exam' },
    { question: 'A book was given ___ him.', options: ['to', 'for', 'at', 'by'], correctAnswer: 'to', explanation: 'Passive with two objects: "A book was given TO him" (preposition needed).', difficulty: 'Exam' },
    { question: 'She hates ___ kept waiting.', options: ['being', 'to be', 'been', 'be'], correctAnswer: 'being', explanation: 'Passive gerund after "hate".', difficulty: 'Exam' },
    { question: 'The documents are supposed ___ signed by the manager.', options: ['to have been', 'to be', 'being', 'having been'], correctAnswer: 'to have been', explanation: 'Perfect Passive Infinitive to refer to a past obligation.', difficulty: 'Exam' },
    { question: 'The data ___ analyzed right now.', options: ['is being', 'is', 'has been', 'was being'], correctAnswer: 'is being', explanation: 'Present Continuous Passive using "data" (treated as singular in modern usage or uncountable).', difficulty: 'Exam' },
    { question: 'We won\'t let ourselves ___ deceived.', options: ['be', 'to be', 'being', 'been'], correctAnswer: 'be', explanation: 'After "let", we use the bare infinitive. Passive: let + object + be + past participle.', difficulty: 'Exam' }
];