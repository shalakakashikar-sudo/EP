// @/database/grammar/modals.ts
import { GrammarQuestion } from '../../types';

export const modals: GrammarQuestion[] = [
    // ==============================================================================
    // --- EASY ---
    // ==============================================================================
    { question: 'You ___ finish your homework before you go out to play.', options: ['must', 'can', 'may', 'might'], correctAnswer: 'must', explanation: '"Must" indicates a strong obligation or necessity.', difficulty: 'Easy' },
    { question: '___ I borrow your pen, please?', options: ['May', 'Must', 'Should', 'Would'], correctAnswer: 'May', explanation: '"May" is a polite way to ask for permission.', difficulty: 'Easy' },
    { question: 'I ___ swim when I was five.', options: ['could', 'can', 'should', 'may'], correctAnswer: 'could', explanation: '"Could" is the past form of "can", expressing past ability.', difficulty: 'Easy' },
    { question: 'You ___ smoke in the hospital.', options: ['mustn\'t', 'don\'t have to', 'needn\'t', 'couldn\'t'], correctAnswer: 'mustn\'t', explanation: '"Mustn\'t" indicates prohibition (it is forbidden).', difficulty: 'Easy' },
    { question: '___ you speak Spanish?', options: ['Can', 'May', 'Should', 'Must'], correctAnswer: 'Can', explanation: '"Can" is used to ask about ability.', difficulty: 'Easy' },
    { question: 'It is raining. You ___ take an umbrella.', options: ['should', 'can', 'may', 'might'], correctAnswer: 'should', explanation: '"Should" is used to give advice.', difficulty: 'Easy' },
    { question: '___ I help you carry those bags?', options: ['Shall', 'Will', 'Must', 'Would'], correctAnswer: 'Shall', explanation: '"Shall I...?" is a common way to make an offer.', difficulty: 'Easy' },
    { question: 'He ___ run very fast.', options: ['can', 'may', 'might', 'shall'], correctAnswer: 'can', explanation: '"Can" expresses physical ability.', difficulty: 'Easy' },
    { question: 'We ___ go to the zoo tomorrow.', options: ['might', 'can', 'should', 'must'], correctAnswer: 'might', explanation: '"Might" expresses a future possibility.', difficulty: 'Easy' },
    { question: 'You ___ touch that! It\'s hot.', options: ['mustn\'t', 'don\'t have to', 'wouldn\'t', 'needn\'t'], correctAnswer: 'mustn\'t', explanation: 'Prohibition for safety.', difficulty: 'Easy' },
    { question: '___ you like a cup of tea?', options: ['Would', 'Can', 'Do', 'Will'], correctAnswer: 'Would', explanation: '"Would you like..." is a polite offer.', difficulty: 'Easy' },
    { question: 'I ___ call you later.', options: ['will', 'would', 'can', 'may'], correctAnswer: 'will', explanation: '"Will" is used for future promises or decisions made at the moment.', difficulty: 'Easy' },

    // ==============================================================================
    // --- MEDIUM ---
    // ==============================================================================
    { question: 'You ___ be tired after such a long journey.', options: ['must', 'can', 'should', 'may'], correctAnswer: 'must', explanation: '"Must" is used here to express a logical conclusion or a strong assumption (deduction).', difficulty: 'Medium' },
    { question: 'It ___ rain later, so you should take an umbrella.', options: ['might', 'must', 'can', 'should'], correctAnswer: 'might', explanation: '"Might" expresses a possibility.', difficulty: 'Medium' },
    { question: 'We ___ hurry; we have plenty of time.', options: ['needn\'t', 'mustn\'t', 'can\'t', 'shouldn\'t'], correctAnswer: 'needn\'t', explanation: '"Needn\'t" (or don\'t have to) implies absence of obligation.', difficulty: 'Medium' },
    { question: 'The lights are off. They ___ be at home.', options: ['can\'t', 'mustn\'t', 'shouldn\'t', 'needn\'t'], correctAnswer: 'can\'t', explanation: '"Can\'t" is used for negative logical deductions (it is impossible that they are home).', difficulty: 'Medium' },
    { question: 'You ___ to see a doctor about that cough.', options: ['ought', 'should', 'must', 'could'], correctAnswer: 'ought', explanation: '"Ought" is the only modal in this list that is followed by "to".', difficulty: 'Medium' },
    { question: 'I ___ rather stay home tonight.', options: ['would', 'should', 'could', 'will'], correctAnswer: 'would', explanation: '"Would rather" is a fixed phrase expressing preference.', difficulty: 'Medium' },
    { question: 'He ___ play the piano when he was a child.', options: ['used to', 'would', 'could', 'might'], correctAnswer: 'could', explanation: '"Could" expresses general past ability.', difficulty: 'Medium' },
    { question: 'You ___ better leave now or you\'ll miss the bus.', options: ['had', 'would', 'should', 'did'], correctAnswer: 'had', explanation: 'The structure is "had better" (often contracted to \'d better) to give strong advice.', difficulty: 'Medium' },
    { question: 'They ___ be rich. They have three Ferraris.', options: ['must', 'can', 'should', 'will'], correctAnswer: 'must', explanation: 'Positive deduction: I am sure they are rich.', difficulty: 'Medium' },
    { question: 'I ___ visit my grandmother this weekend, but I\'m not sure.', options: ['may', 'must', 'will', 'can'], correctAnswer: 'may', explanation: '"May" indicates possibility.', difficulty: 'Medium' },
    { question: '___ you please close the door?', options: ['Could', 'May', 'Should', 'Must'], correctAnswer: 'Could', explanation: '"Could" is used for polite requests.', difficulty: 'Medium' },
    { question: 'We ___ to wear a uniform at work.', options: ['have', 'must', 'should', 'can'], correctAnswer: 'have', explanation: '"Have to" is used for external obligation. Also, "must" is not followed by "to".', difficulty: 'Medium' },
    { question: 'You ___ tell anyone. It\'s a secret.', options: ['mustn\'t', 'don\'t have to', 'needn\'t', 'wouldn\'t'], correctAnswer: 'mustn\'t', explanation: '"Mustn\'t" means it is forbidden to do so.', difficulty: 'Medium' },
    
    // ==============================================================================
    // --- HARD ---
    // ==============================================================================
    { question: 'You ___ have told me you were coming!', options: ['should', 'must', 'can', 'may'], correctAnswer: 'should', explanation: '"Should have" + past participle is used to express regret or criticism about a past action.', difficulty: 'Hard' },
    { question: 'I ___ have left my keys in the car, but I\'m not sure.', options: ['might', 'must', 'should', 'will'], correctAnswer: 'might', explanation: '"Might have" expresses a past possibility.', difficulty: 'Hard' },
    { question: 'He ___ have committed the crime; he was with me all night.', options: ['couldn\'t', 'mustn\'t', 'shouldn\'t', 'mightn\'t'], correctAnswer: 'couldn\'t', explanation: '"Couldn\'t have" expresses a negative logical deduction about the past (it was impossible).', difficulty: 'Hard' },
    { question: 'She ___ have practiced a lot to play that well.', options: ['must', 'should', 'can', 'might'], correctAnswer: 'must', explanation: '"Must have" expresses a positive logical deduction about the past (I am sure she did).', difficulty: 'Hard' },
    { question: 'The streets are wet. It ___ rained last night.', options: ['must have', 'should have', 'can have', 'would have'], correctAnswer: 'must have', explanation: 'Deduction about the past based on evidence.', difficulty: 'Hard' },
    { question: 'You ___ bought bread. We already have plenty.', options: ['needn\'t have', 'didn\'t need to', 'mustn\'t have', 'shouldn\'t have'], correctAnswer: 'needn\'t have', explanation: '"Needn\'t have" means you did it, but it wasn\'t necessary.', difficulty: 'Hard' },
    { question: 'Where is John? He ___ got stuck in traffic.', options: ['may have', 'should have', 'must have', 'will have'], correctAnswer: 'may have', explanation: 'Speculating about a possibility in the past.', difficulty: 'Hard' },
    { question: 'I ___ gone to the party, but I was too tired.', options: ['could have', 'must have', 'should have', 'would'], correctAnswer: 'could have', explanation: '"Could have" expresses a past capability or possibility that wasn\'t used.', difficulty: 'Hard' },
    { question: 'If I had known, I ___ helped you.', options: ['would have', 'will have', 'can have', 'may have'], correctAnswer: 'would have', explanation: 'Third conditional structure uses "would have".', difficulty: 'Hard' },
    { question: 'He ___ be joking! That story is impossible.', options: ['must', 'can', 'should', 'might'], correctAnswer: 'must', explanation: 'Deduction: "He must be joking" (I am sure he is). "Can\'t be serious" is the negative equivalent.', difficulty: 'Hard' },
    { question: 'You ___ have spoken to her like that. She was very upset.', options: ['shouldn\'t', 'mustn\'t', 'couldn\'t', 'needn\'t'], correctAnswer: 'shouldn\'t', explanation: 'Criticism of a past action.', difficulty: 'Hard' },
    { question: 'The car ___ start. I think the battery is dead.', options: ['won\'t', 'shouldn\'t', 'wouldn\'t', 'can\'t'], correctAnswer: 'won\'t', explanation: '"Won\'t" is used for refusal or failure to operate.', difficulty: 'Hard' },

    // ==============================================================================
    // --- EXAM ---
    // ==============================================================================
    { question: 'We ___ submitted the report yesterday, but we forgot.', options: ['should have', 'must have', 'can have', 'may have'], correctAnswer: 'should have', explanation: '"Should have" expresses an unfulfilled obligation in the past.', difficulty: 'Exam' },
    { question: 'I ___ cooked dinner, as we decided to eat out.', options: ['didn\'t need to', 'needn\'t have', 'mustn\'t have', 'couldn\'t have'], correctAnswer: 'didn\'t need to', explanation: '"Didn\'t need to" means it wasn\'t necessary, so I didn\'t do it. "Needn\'t have" means I did it, but it wasn\'t necessary.', difficulty: 'Exam' },
    { question: 'He ___ sit on the porch for hours when he was young.', options: ['would', 'should', 'could', 'might'], correctAnswer: 'would', explanation: '"Would" is used to describe past habits or characteristic behavior (similar to "used to").', difficulty: 'Exam' },
    { question: 'How ___ you say such a thing?', options: ['dare', 'need', 'ought', 'used'], correctAnswer: 'dare', explanation: '"Dare" can be used as a semi-modal, especially in questions and negatives regarding courage or audacity.', difficulty: 'Exam' },
    { question: 'She suggested that he ___ a doctor immediately.', options: ['see', 'sees', 'saw', 'must see'], correctAnswer: 'see', explanation: 'Subjunctive mood after "suggest". Often looks like a modal structure or bare infinitive.', difficulty: 'Exam' },
    { question: 'It is essential that every student ___ uniform.', options: ['wear', 'wears', 'must wear', 'wore'], correctAnswer: 'wear', explanation: 'Subjunctive mood after "essential".', difficulty: 'Exam' },
    { question: '___ it rain tomorrow, the match will be cancelled.', options: ['Should', 'If', 'Will', 'Does'], correctAnswer: 'Should', explanation: 'Inversion of the first conditional: "Should it rain" = "If it should rain".', difficulty: 'Exam' },
    { question: 'You ___ reserved a table; the restaurant is empty.', options: ['needn\'t have', 'didn\'t need to', 'shouldn\'t have', 'mustn\'t have'], correctAnswer: 'needn\'t have', explanation: 'You did it (reserved), but it turned out to be unnecessary.', difficulty: 'Exam' },
    { question: 'He ___ not have heard the phone; he was listening to music.', options: ['may', 'must', 'should', 'will'], correctAnswer: 'may', explanation: 'Possibility in the past (negative). "Must not" is usually for prohibition, not deduction (though "must not have" exists, "may/might not have" is safer for possibility). "Can\'t have" is stronger deduction.', difficulty: 'Exam' },
    { question: 'Try as he ___, he couldn\'t open the jar.', options: ['might', 'should', 'can', 'will'], correctAnswer: 'might', explanation: 'Fixed phrase "Try as he might" meaning "Although he tried very hard".', difficulty: 'Exam' }
];