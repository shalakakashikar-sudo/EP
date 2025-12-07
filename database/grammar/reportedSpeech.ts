// @/database/grammar/reportedSpeech.ts
import { GrammarQuestion } from '../../types';

export const reportedSpeech: GrammarQuestion[] = [
    // ==============================================================================
    // --- EASY ---
    // ==============================================================================
    { question: 'She said, "I like ice cream." -> She said she ___ ice cream.', options: ['liked', 'likes', 'like', 'liking'], correctAnswer: 'liked', explanation: 'Present simple "like" backshifts to past simple "liked".', difficulty: 'Easy' },
    { question: 'He said, "I am working." -> He said he ___ working.', options: ['was', 'is', 'were', 'has been'], correctAnswer: 'was', explanation: 'Present continuous "am working" changes to past continuous "was working".', difficulty: 'Easy' },
    { question: 'They said, "We live in London." -> They said they ___ in London.', options: ['lived', 'live', 'had lived', 'were living'], correctAnswer: 'lived', explanation: 'Present simple "live" changes to past simple "lived".', difficulty: 'Easy' },
    { question: 'She said, "I can swim." -> She said she ___ swim.', options: ['could', 'can', 'able to', 'coulded'], correctAnswer: 'could', explanation: 'Modal "can" changes to "could".', difficulty: 'Easy' },
    { question: 'He said, "I will call you." -> He said he ___ call me.', options: ['would', 'will', 'could', 'should'], correctAnswer: 'would', explanation: 'Modal "will" changes to "would".', difficulty: 'Easy' },
    { question: 'She said, "I don\'t know." -> She said she ___ know.', options: ['didn\'t', 'doesn\'t', 'don\'t', 'hadn\'t'], correctAnswer: 'didn\'t', explanation: 'Present negative "don\'t" changes to past negative "didn\'t".', difficulty: 'Easy' },
    { question: 'He said, "It is raining." -> He said it ___ raining.', options: ['was', 'is', 'were', 'has been'], correctAnswer: 'was', explanation: 'Present continuous "is" changes to "was".', difficulty: 'Easy' },
    { question: 'She told me, "I am happy." -> She told me she ___ happy.', options: ['was', 'is', 'were', 'had been'], correctAnswer: 'was', explanation: 'Present simple "am" changes to "was".', difficulty: 'Easy' },
    { question: 'He said, "I have a car." -> He said he ___ a car.', options: ['had', 'has', 'have', 'having'], correctAnswer: 'had', explanation: 'Present simple "have" changes to "had".', difficulty: 'Easy' },
    { question: 'She said, "My name is Sarah." -> She said her name ___ Sarah.', options: ['was', 'is', 'were', 'had been'], correctAnswer: 'was', explanation: 'Backshifting standardizes the tense, although "is" is possible if it is still true, "was" is the grammatical conversion.', difficulty: 'Easy' },
    { question: 'He said, "I want to go." -> He said he ___ to go.', options: ['wanted', 'wants', 'want', 'wanting'], correctAnswer: 'wanted', explanation: 'Present simple "want" changes to "wanted".', difficulty: 'Easy' },
    { question: 'She said, "I am tired." -> She said that she ___ tired.', options: ['was', 'is', 'am', 'be'], correctAnswer: 'was', explanation: 'When reporting speech, the present tense "am" changes to the past tense "was".', difficulty: 'Easy' },

    // ==============================================================================
    // --- MEDIUM ---
    // ==============================================================================
    { question: 'He said, "I will call you tomorrow." -> He said he would call me the ___ day.', options: ['next', 'previous', 'same', 'last'], correctAnswer: 'next', explanation: 'In reported speech, "tomorrow" changes to "the next day" or "the following day".', difficulty: 'Medium' },
    { question: 'She asked, "Do you speak English?" -> She asked me ___ I spoke English.', options: ['if', 'that', 'did', 'what'], correctAnswer: 'if', explanation: 'Yes/No questions are reported using "if" or "whether".', difficulty: 'Medium' },
    { question: 'He said, "I have finished my work." -> He said he ___ his work.', options: ['had finished', 'has finished', 'finished', 'was finished'], correctAnswer: 'had finished', explanation: 'Present perfect "have finished" changes to past perfect "had finished".', difficulty: 'Medium' },
    { question: 'She said, "I bought a new dress." -> She said she ___ a new dress.', options: ['had bought', 'bought', 'has bought', 'was buying'], correctAnswer: 'had bought', explanation: 'Past simple "bought" changes to past perfect "had bought".', difficulty: 'Medium' },
    { question: '"Sit down," the teacher said. -> The teacher told the students ___.', options: ['to sit down', 'sit down', 'that they sit', 'sat down'], correctAnswer: 'to sit down', explanation: 'Imperatives become infinitives in reported speech.', difficulty: 'Medium' },
    { question: 'He asked, "Where do you live?" -> He asked me where I ___.', options: ['lived', 'live', 'living', 'had lived'], correctAnswer: 'lived', explanation: 'In reported questions, the tense backshifts (present "do live" -> past "lived") and the word order is Statement (Subject + Verb), not Question.', difficulty: 'Medium' },
    { question: 'She said, "I was watching TV." -> She said she ___ TV.', options: ['had been watching', 'was watching', 'watched', 'has been watching'], correctAnswer: 'had been watching', explanation: 'Past continuous "was watching" changes to past perfect continuous "had been watching".', difficulty: 'Medium' },
    { question: 'He said he ___ see me the following day.', options: ['would', 'will', 'can', 'may'], correctAnswer: 'would', explanation: '"Will" backshifts to "would".', difficulty: 'Medium' },
    { question: 'She asked, "Are you busy?" -> She asked if I ___ busy.', options: ['was', 'am', 'were', 'had been'], correctAnswer: 'was', explanation: 'Present "are" changes to past "was" (agreeing with "I").', difficulty: 'Medium' },
    { question: 'He said, "I must go." -> He said he ___ go.', options: ['had to', 'must', 'has to', 'would'], correctAnswer: 'had to', explanation: '"Must" (obligation) often changes to "had to" in reported speech.', difficulty: 'Medium' },
    { question: 'She said, "I may come later." -> She said she ___ come later.', options: ['might', 'may', 'could', 'would'], correctAnswer: 'might', explanation: 'Modal "may" changes to "might".', difficulty: 'Medium' },
    { question: 'He said, "This is my book." -> He said that ___ was his book.', options: ['that', 'this', 'it', 'which'], correctAnswer: 'that', explanation: 'Demonstrative "this" often changes to "that" in reported speech.', difficulty: 'Medium' },
    { question: 'She said, "I am leaving now." -> She said she was leaving ___.', options: ['then', 'now', 'soon', 'there'], correctAnswer: 'then', explanation: 'Time expression "now" changes to "then".', difficulty: 'Medium' },
    { question: 'He told me to ___ quiet.', options: ['be', 'been', 'being', 'was'], correctAnswer: 'be', explanation: 'Reported command: "to" + infinitive.', difficulty: 'Medium' },
    { question: 'She asked, "Why are you crying?" -> She asked me why I ___ crying.', options: ['was', 'am', 'were', 'had been'], correctAnswer: 'was', explanation: 'Wh- question structure: Question Word + Subject + Verb (backshifted).', difficulty: 'Medium' },

    // ==============================================================================
    // --- HARD ---
    // ==============================================================================
    { question: 'She asked, "Where are you going?" -> She asked me where I ___ going.', options: ['was', 'am', 'is', 'were'], correctAnswer: 'was', explanation: 'In reported questions, the tense is backshifted (are -> was) and the word order is like a statement (subject before verb).', difficulty: 'Hard' },
    { question: 'He told me, "Don\'t be late." -> He told me ___ late.', options: ['not to be', 'to not be', 'don\'t be', 'should not be'], correctAnswer: 'not to be', explanation: 'Reported commands are formed with "to" + infinitive, and negative commands with "not to" + infinitive.', difficulty: 'Hard' },
    { question: 'She denied ___ the vase.', options: ['breaking', 'to break', 'break', 'broken'], correctAnswer: 'breaking', explanation: 'The verb "deny" is followed by a gerund.', difficulty: 'Hard' },
    { question: '"I\'ll help you," he said. -> He ___ to help me.', options: ['promised', 'denied', 'refused', 'suggested'], correctAnswer: 'promised', explanation: '"I\'ll help" is a promise, so we use the reporting verb "promised" + infinitive.', difficulty: 'Hard' },
    { question: '"Why don\'t you see a doctor?" she said. -> She ___ seeing a doctor.', options: ['suggested', 'told', 'asked', 'ordered'], correctAnswer: 'suggested', explanation: '"Why don\'t you..." is a suggestion structure.', difficulty: 'Hard' },
    { question: 'He asked me what time ___ .', options: ['the train left', 'did the train leave', 'does the train leave', 'left the train'], correctAnswer: 'the train left', explanation: 'Reported question word order: Subject + Verb. No auxiliary "did".', difficulty: 'Hard' },
    { question: '"I didn\'t steal the bag," he said. -> He denied ___ the bag.', options: ['stealing', 'to steal', 'stolen', 'steal'], correctAnswer: 'stealing', explanation: 'Deny + gerund.', difficulty: 'Hard' },
    { question: 'She said, "I\'ve been waiting for ages." -> She said she ___ for ages.', options: ['had been waiting', 'has been waiting', 'was waiting', 'waited'], correctAnswer: 'had been waiting', explanation: 'Present Perfect Continuous -> Past Perfect Continuous.', difficulty: 'Hard' },
    { question: '"If I were you, I would apologize," he said. -> He ___ me to apologize.', options: ['advised', 'said', 'suggested', 'threatened'], correctAnswer: 'advised', explanation: '"If I were you" is advice.', difficulty: 'Hard' },
    { question: 'He reminded me ___ the door.', options: ['to lock', 'locking', 'lock', 'locked'], correctAnswer: 'to lock', explanation: 'Remind + person + to infinitive.', difficulty: 'Hard' },
    { question: 'She admitted ___ a mistake.', options: ['making', 'to make', 'make', 'made'], correctAnswer: 'making', explanation: 'Admit + gerund.', difficulty: 'Hard' },
    { question: 'He asked if I ___ seen the film.', options: ['had', 'have', 'did', 'was'], correctAnswer: 'had', explanation: 'Past simple/Present perfect in direct speech becomes Past Perfect in reported speech.', difficulty: 'Hard' },
    { question: '"Please, please let me go," she cried. -> She ___ to be let go.', options: ['begged', 'asked', 'said', 'told'], correctAnswer: 'begged', explanation: '"Please, please" indicates begging.', difficulty: 'Hard' },
    { question: 'He told us that the sun ___ in the east.', options: ['rises', 'rose', 'risen', 'had risen'], correctAnswer: 'rises', explanation: 'General truths often do not backshift in reported speech.', difficulty: 'Hard' },
    { question: '"Don\'t forget to buy milk," she said. -> She ___ me to buy milk.', options: ['reminded', 'remembered', 'ordered', 'suggested'], correctAnswer: 'reminded', explanation: '"Don\'t forget" is a reminder.', difficulty: 'Hard' },

    // ==============================================================================
    // --- EXAM ---
    // ==============================================================================
    { question: '"Let\'s go for a walk," he said. -> He ___ going for a walk.', options: ['suggested', 'asked', 'told', 'said'], correctAnswer: 'suggested', explanation: '"Let\'s" usually indicates a suggestion. "Suggest" is followed by a gerund.', difficulty: 'Exam' },
    { question: 'He accused me ___ stealing the money.', options: ['of', 'for', 'to', 'that'], correctAnswer: 'of', explanation: 'Reporting verb pattern: accuse someone OF doing something.', difficulty: 'Exam' },
    { question: '"I wish I were richer," he said. -> He said he wished he ___ richer.', options: ['had been', 'were', 'would be', 'was'], correctAnswer: 'had been', explanation: 'In reported speech, "wish" + past simple (were) often shifts to past perfect (had been) to indicate a past wish, or stays as "were" if the wish is still current. In formal testing, backshifting is standard.', difficulty: 'Exam' },
    { question: 'She apologized ___ being late.', options: ['for', 'of', 'to', 'about'], correctAnswer: 'for', explanation: 'Apologize + FOR + gerund.', difficulty: 'Exam' },
    { question: '"You should study harder," the teacher said. -> The teacher ___ that I study harder.', options: ['suggested', 'advised', 'said', 'told'], correctAnswer: 'suggested', explanation: 'Subjunctive usage: "Suggest that someone do (base form)". Or "Advised me to study". "Suggested that I study" uses the subjunctive.', difficulty: 'Exam' },
    { question: 'He threatened ___ the police.', options: ['to call', 'calling', 'call', 'called'], correctAnswer: 'to call', explanation: 'Threaten + to infinitive.', difficulty: 'Exam' },
    { question: 'She insisted on ___ for the meal.', options: ['paying', 'to pay', 'pay', 'paid'], correctAnswer: 'paying', explanation: 'Insist on + gerund.', difficulty: 'Exam' },
    { question: '"Congratulations on winning," he said. -> He congratulated me ___ winning.', options: ['on', 'for', 'of', 'with'], correctAnswer: 'on', explanation: 'Congratulate + person + ON + gerund.', difficulty: 'Exam' },
    { question: 'He asked me where ___ applied for the job.', options: ['I had', 'had I', 'did I', 'I did'], correctAnswer: 'I had', explanation: 'Reported question word order + backshifting (Past simple -> Past perfect).', difficulty: 'Exam' },
    { question: '"Don\'t touch the wire!" he shouted. -> He warned me ___ the wire.', options: ['not to touch', 'to not touch', 'don\'t touch', 'no touching'], correctAnswer: 'not to touch', explanation: 'Warn + person + not to + infinitive.', difficulty: 'Exam' },
    { question: 'She complained that the service ___ bad.', options: ['was', 'is', 'had been', 'were'], correctAnswer: 'was', explanation: 'Standard backshift.', difficulty: 'Exam' },
    { question: '"I really must speak to the manager," she said. -> She insisted ___ speaking to the manager.', options: ['on', 'to', 'in', 'for'], correctAnswer: 'on', explanation: 'Insist on + gerund corresponds to "must" in this context.', difficulty: 'Exam' },
    { question: 'He objected to ___ treated unfairly.', options: ['being', 'be', 'been', 'to be'], correctAnswer: 'being', explanation: 'Object to + gerund.', difficulty: 'Exam' },
    { question: 'The police inquired whether I ___ anything suspicious.', options: ['had seen', 'saw', 'have seen', 'see'], correctAnswer: 'had seen', explanation: 'Formal reporting verb "inquire". Backshift: Past simple/Present perfect -> Past perfect.', difficulty: 'Exam' },
    { question: 'He discouraged me ___ buying the car.', options: ['from', 'to', 'of', 'for'], correctAnswer: 'from', explanation: 'Discourage + person + FROM + gerund.', difficulty: 'Exam' }
];