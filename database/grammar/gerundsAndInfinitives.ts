// @/database/grammar/gerundsAndInfinitives.ts
import { GrammarQuestion } from '../../types';

export const gerundsAndInfinitives: GrammarQuestion[] = [
    // ==============================================================================
    // --- EASY ---
    // ==============================================================================
    { question: 'I enjoy ___ books in my free time.', options: ['reading', 'to read', 'read', 'reads'], correctAnswer: 'reading', explanation: 'The verb "enjoy" is followed by a gerund (-ing form).', difficulty: 'Easy' },
    { question: 'He wants ___ a doctor when he grows up.', options: ['to be', 'being', 'be', 'is'], correctAnswer: 'to be', explanation: '"Want" is followed by an infinitive ("to" + verb).', difficulty: 'Easy' },
    { question: 'She decided ___ a new car.', options: ['to buy', 'buying', 'buy', 'buys'], correctAnswer: 'to buy', explanation: '"Decide" is followed by an infinitive.', difficulty: 'Easy' },
    { question: 'We hope ___ you soon.', options: ['to see', 'seeing', 'see', 'saw'], correctAnswer: 'to see', explanation: '"Hope" is followed by an infinitive.', difficulty: 'Easy' },
    { question: 'Please stop ___ noise.', options: ['making', 'to make', 'make', 'made'], correctAnswer: 'making', explanation: '"Stop making noise" means to cease the action.', difficulty: 'Easy' },
    { question: 'I promised ___ my room.', options: ['to clean', 'cleaning', 'clean', 'cleaned'], correctAnswer: 'to clean', explanation: '"Promise" is followed by an infinitive.', difficulty: 'Easy' },
    { question: 'Do you like ___ football?', options: ['playing', 'play', 'played', 'plays'], correctAnswer: 'playing', explanation: '"Like" is typically followed by a gerund for general enjoyment (though "to play" is also possible, "playing" is the best fit here for hobbies).', difficulty: 'Easy' },
    { question: 'He is learning ___ English.', options: ['to speak', 'speaking', 'speak', 'speaks'], correctAnswer: 'to speak', explanation: '"Learn" is followed by an infinitive.', difficulty: 'Easy' },
    { question: 'Keep ___!', options: ['going', 'to go', 'go', 'gone'], correctAnswer: 'going', explanation: '"Keep" meaning continue is followed by a gerund.', difficulty: 'Easy' },
    { question: 'She agreed ___ us.', options: ['to help', 'helping', 'help', 'helps'], correctAnswer: 'to help', explanation: '"Agree" is followed by an infinitive.', difficulty: 'Easy' },
    { question: 'I plan ___ a trip next month.', options: ['to take', 'taking', 'take', 'taken'], correctAnswer: 'to take', explanation: '"Plan" is followed by an infinitive.', difficulty: 'Easy' },
    { question: 'Would you like ___ something to drink?', options: ['to have', 'having', 'have', 'had'], correctAnswer: 'to have', explanation: '"Would like" is always followed by an infinitive.', difficulty: 'Easy' },
    { question: 'He offered ___ the bags.', options: ['to carry', 'carrying', 'carry', 'carried'], correctAnswer: 'to carry', explanation: '"Offer" is followed by an infinitive.', difficulty: 'Easy' },
    { question: 'Finish ___ your food.', options: ['eating', 'to eat', 'eat', 'eaten'], correctAnswer: 'eating', explanation: '"Finish" is always followed by a gerund.', difficulty: 'Easy' },
    { question: 'She seems ___ happy.', options: ['to be', 'being', 'be', 'been'], correctAnswer: 'to be', explanation: '"Seem" is followed by an infinitive.', difficulty: 'Easy' },

    // ==============================================================================
    // --- MEDIUM ---
    // ==============================================================================
    { question: 'He is good at ___ the piano.', options: ['play', 'playing', 'to play', 'played'], correctAnswer: 'playing', explanation: 'Prepositions (like "at") are followed by a gerund.', difficulty: 'Medium' },
    { question: '___ is good for your health.', options: ['Swim', 'To swim', 'Swimming', 'Swam'], correctAnswer: 'Swimming', explanation: 'A gerund can function as the subject of a sentence.', difficulty: 'Medium' },
    { question: 'I am interested in ___ a new language.', options: ['learning', 'to learn', 'learn', 'learned'], correctAnswer: 'learning', explanation: 'Preposition "in" + gerund.', difficulty: 'Medium' },
    { question: 'They managed ___ the project on time.', options: ['to finish', 'finishing', 'finish', 'finished'], correctAnswer: 'to finish', explanation: '"Manage" is followed by an infinitive.', difficulty: 'Medium' },
    { question: 'Do you mind ___ the window?', options: ['opening', 'to open', 'open', 'opened'], correctAnswer: 'opening', explanation: '"Mind" (in questions/negatives) is followed by a gerund.', difficulty: 'Medium' },
    { question: 'She refused ___ to him.', options: ['to talk', 'talking', 'talk', 'talked'], correctAnswer: 'to talk', explanation: '"Refuse" is followed by an infinitive.', difficulty: 'Medium' },
    { question: 'I miss ___ near the beach.', options: ['living', 'to live', 'live', 'lived'], correctAnswer: 'living', explanation: '"Miss" is followed by a gerund.', difficulty: 'Medium' },
    { question: 'He avoided ___ my question.', options: ['answering', 'to answer', 'answer', 'answered'], correctAnswer: 'answering', explanation: '"Avoid" is followed by a gerund.', difficulty: 'Medium' },
    { question: 'I can\'t afford ___ that car.', options: ['to buy', 'buying', 'buy', 'bought'], correctAnswer: 'to buy', explanation: '"Afford" is followed by an infinitive.', difficulty: 'Medium' },
    { question: 'Please remember ___ the door when you leave.', options: ['locking', 'to lock', 'lock', 'locked'], correctAnswer: 'to lock', explanation: '"Remember to do" refers to a task you need to perform.', difficulty: 'Medium' },
    { question: 'I remember ___ him at the party last year.', options: ['meeting', 'to meet', 'meet', 'met'], correctAnswer: 'meeting', explanation: '"Remember doing" refers to a memory of a past event.', difficulty: 'Medium' },
    { question: 'He suggested ___ to the cinema.', options: ['going', 'to go', 'go', 'gone'], correctAnswer: 'going', explanation: '"Suggest" is followed by a gerund (or a that-clause), never an infinitive.', difficulty: 'Medium' },
    { question: 'I tried ___ the window, but it was stuck.', options: ['open', 'to open', 'opening', 'opened'], correctAnswer: 'to open', explanation: '"Try to do" means to attempt an action that is difficult.', difficulty: 'Medium' },
    { question: 'We expect ___ late.', options: ['to arrive', 'arriving', 'arrive', 'arrived'], correctAnswer: 'to arrive', explanation: '"Expect" is followed by an infinitive.', difficulty: 'Medium' },
    { question: 'She pretended ___ asleep.', options: ['to be', 'being', 'be', 'been'], correctAnswer: 'to be', explanation: '"Pretend" is followed by an infinitive.', difficulty: 'Medium' },
    { question: 'He gave up ___ last year.', options: ['smoking', 'to smoke', 'smoke', 'smoked'], correctAnswer: 'smoking', explanation: 'Phrasal verbs (preposition "up") are followed by a gerund.', difficulty: 'Medium' },
    { question: 'It is important ___ helpful.', options: ['to be', 'being', 'be', 'been'], correctAnswer: 'to be', explanation: 'Adjective + infinitive structure (It is adjective + to do).', difficulty: 'Medium' },
    { question: 'She made me ___ .', options: ['laugh', 'to laugh', 'laughing', 'laughed'], correctAnswer: 'laugh', explanation: '"Make" (compel) is followed by the object and the bare infinitive (without "to").', difficulty: 'Medium' },
    { question: 'I let him ___ my bike.', options: ['borrow', 'to borrow', 'borrowing', 'borrowed'], correctAnswer: 'borrow', explanation: '"Let" is followed by the object and the bare infinitive.', difficulty: 'Medium' },
    { question: 'We spent the afternoon ___ cards.', options: ['playing', 'to play', 'play', 'played'], correctAnswer: 'playing', explanation: '"Spend time" is followed by a gerund.', difficulty: 'Medium' },

    // ==============================================================================
    // --- HARD ---
    // ==============================================================================
    { question: 'I look forward to ___ you soon.', options: ['seeing', 'see', 'to see', 'saw'], correctAnswer: 'seeing', explanation: '"Look forward to" ends in a preposition ("to"), so it requires a gerund.', difficulty: 'Hard' },
    { question: 'He stopped ___ a coffee on his way home.', options: ['to buy', 'buying', 'buy', 'bought'], correctAnswer: 'to buy', explanation: '"Stop to do" means stopping one action in order to do another (purpose).', difficulty: 'Hard' },
    { question: 'He stopped ___ years ago.', options: ['smoking', 'to smoke', 'smoke', 'smoked'], correctAnswer: 'smoking', explanation: '"Stop doing" means to cease a habit or activity completely.', difficulty: 'Hard' },
    { question: 'Why don\'t you try ___ some salt to the soup?', options: ['adding', 'to add', 'add', 'added'], correctAnswer: 'adding', explanation: '"Try doing" means to experiment with a method to see if it works.', difficulty: 'Hard' },
    { question: 'I regret ___ that car; it breaks down constantly.', options: ['buying', 'to buy', 'buy', 'bought'], correctAnswer: 'buying', explanation: '"Regret doing" expresses remorse about a past action.', difficulty: 'Hard' },
    { question: 'She made him ___ the truth.', options: ['admit', 'to admit', 'admitting', 'admitted'], correctAnswer: 'admit', explanation: 'Causative "make" uses the bare infinitive.', difficulty: 'Hard' },
    { question: 'I would rather ___ at home than go out.', options: ['stay', 'to stay', 'staying', 'stayed'], correctAnswer: 'stay', explanation: '"Would rather" is followed by the bare infinitive.', difficulty: 'Hard' },
    { question: 'It\'s no use ___ to him.', options: ['talking', 'to talk', 'talk', 'talked'], correctAnswer: 'talking', explanation: 'The phrase "It\'s no use" is always followed by a gerund.', difficulty: 'Hard' },
    { question: 'It\'s worth ___ the museum.', options: ['visiting', 'to visit', 'visit', 'visited'], correctAnswer: 'visiting', explanation: '"It\'s worth" is followed by a gerund.', difficulty: 'Hard' },
    { question: 'There is no point in ___ about it.', options: ['worrying', 'to worry', 'worry', 'worried'], correctAnswer: 'worrying', explanation: '"There is no point in" is followed by a gerund.', difficulty: 'Hard' },
    { question: 'I am not used to ___ up so early.', options: ['getting', 'get', 'to get', 'got'], correctAnswer: 'getting', explanation: '"Be used to" (accustomed to) is followed by a gerund (noun equivalent), because "to" is a preposition here.', difficulty: 'Hard' },
    { question: 'I used to ___ up early when I was a child.', options: ['get', 'getting', 'to get', 'got'], correctAnswer: 'get', explanation: '"Used to" (past habit) is followed by a bare infinitive.', difficulty: 'Hard' },
    { question: 'He was accused of ___ the money.', options: ['stealing', 'to steal', 'steal', 'stolen'], correctAnswer: 'stealing', explanation: 'Verb + preposition + gerund.', difficulty: 'Hard' },
    { question: 'I prefer walking to ___ .', options: ['driving', 'drive', 'to drive', 'drove'], correctAnswer: 'driving', explanation: 'With "prefer," if you use "to" as a preposition for comparison, you must use a gerund.', difficulty: 'Hard' },
    { question: 'He denied ___ the window.', options: ['breaking', 'to break', 'break', 'broke'], correctAnswer: 'breaking', explanation: '"Deny" is followed by a gerund.', difficulty: 'Hard' },
    { question: 'The car needs ___ .', options: ['washing', 'to wash', 'wash', 'washed'], correctAnswer: 'washing', explanation: 'After "need" (meaning passive necessity), we can use a gerund (e.g., needs repairing/washing).', difficulty: 'Hard' },
    { question: 'I consider ___ him for the job.', options: ['hiring', 'to hire', 'hire', 'hired'], correctAnswer: 'hiring', explanation: '"Consider" is followed by a gerund.', difficulty: 'Hard' },
    { question: 'We succeeded in ___ the problem.', options: ['solving', 'to solve', 'solve', 'solved'], correctAnswer: 'solving', explanation: '"Succeed in" + gerund.', difficulty: 'Hard' },
    { question: 'She admitted ___ the mistake.', options: ['making', 'to make', 'make', 'made'], correctAnswer: 'making', explanation: '"Admit" is followed by a gerund.', difficulty: 'Hard' },
    { question: 'I warned him not ___ that wire.', options: ['to touch', 'touching', 'touch', 'touched'], correctAnswer: 'to touch', explanation: '"Warn someone (not) to do something".', difficulty: 'Hard' },

    // ==============================================================================
    // --- EXAM ---
    // ==============================================================================
    { question: 'I regret ___ you that you have failed.', options: ['to tell', 'telling', 'tell', 'told'], correctAnswer: 'to tell', explanation: '"Regret to tell/inform" is a formal phrase used to announce bad news.', difficulty: 'Exam' },
    { question: 'I\'d better ___ now or I\'ll be late.', options: ['go', 'to go', 'going', 'went'], correctAnswer: 'go', explanation: '"Had better" is a modal idiom followed by the bare infinitive.', difficulty: 'Exam' },
    { question: 'He objected to ___ treated like a child.', options: ['being', 'be', 'to be', 'been'], correctAnswer: 'being', explanation: '"Object to" ends in a preposition, so it requires a gerund. "Being treated" is the passive gerund.', difficulty: 'Exam' },
    { question: 'She admitted to ___ the vase.', options: ['breaking', 'break', 'to break', 'broken'], correctAnswer: 'breaking', explanation: '"Admit to" + gerund (or just admit + gerund).', difficulty: 'Exam' },
    { question: 'They allow ___ in this area.', options: ['smoking', 'to smoke', 'smoke', 'smoked'], correctAnswer: 'smoking', explanation: '"Allow" without an object is followed by a gerund.', difficulty: 'Exam' },
    { question: 'They allow us ___ in this area.', options: ['to smoke', 'smoking', 'smoke', 'smoked'], correctAnswer: 'to smoke', explanation: '"Allow" with an object ("us") is followed by an infinitive.', difficulty: 'Exam' },
    { question: 'I saw him ___ the street.', options: ['crossing', 'to cross', 'crossed', 'crosses'], correctAnswer: 'crossing', explanation: 'Verbs of perception (see, hear) + object + gerund emphasizes the action in progress.', difficulty: 'Exam' },
    { question: 'I saw him ___ the street and enter the shop.', options: ['cross', 'crossing', 'to cross', 'crossed'], correctAnswer: 'cross', explanation: 'Verbs of perception + object + bare infinitive emphasizes the completed action.', difficulty: 'Exam' },
    { question: 'Whatever you do, don\'t forget ___ milk.', options: ['to buy', 'buying', 'buy', 'bought'], correctAnswer: 'to buy', explanation: 'Forget to do = fail to perform a duty.', difficulty: 'Exam' },
    { question: 'I\'ll never forget ___ the Queen.', options: ['meeting', 'to meet', 'meet', 'met'], correctAnswer: 'meeting', explanation: 'Forget doing = lose the memory of a past event.', difficulty: 'Exam' },
    { question: 'It is essential for him ___ prepared.', options: ['to be', 'being', 'be', 'is'], correctAnswer: 'to be', explanation: 'Adjective + for + object + infinitive structure.', difficulty: 'Exam' },
    { question: 'He had difficulty ___ the answer.', options: ['finding', 'to find', 'find', 'found'], correctAnswer: 'finding', explanation: 'The phrase "have difficulty (in)" is followed by a gerund.', difficulty: 'Exam' },
    { question: 'You aren\'t allowed ___ here.', options: ['to park', 'parking', 'park', 'parked'], correctAnswer: 'to park', explanation: 'Passive "be allowed" + infinitive.', difficulty: 'Exam' },
    { question: 'He was made ___ the room.', options: ['to leave', 'leave', 'leaving', 'left'], correctAnswer: 'to leave', explanation: 'Active: "make him leave" (bare). Passive: "was made TO leave" (to-infinitive).', difficulty: 'Exam' },
    { question: 'I advise ___ waiting until tomorrow.', options: ['waiting', 'to wait', 'wait', 'waited'], correctAnswer: 'waiting', explanation: '"Advise" without an object takes a gerund.', difficulty: 'Exam' },
    { question: 'I advise you ___ until tomorrow.', options: ['to wait', 'waiting', 'wait', 'waited'], correctAnswer: 'to wait', explanation: '"Advise" with an object takes an infinitive.', difficulty: 'Exam' }
];