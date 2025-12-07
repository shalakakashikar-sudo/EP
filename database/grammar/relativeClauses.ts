// @/database/grammar/relativeClauses.ts
import { GrammarQuestion } from '../../types';

export const relativeClauses: GrammarQuestion[] = [
    // ==============================================================================
    // --- EASY ---
    // ==============================================================================
    { question: 'The woman ___ lives next door is a doctor.', options: ['who', 'which', 'whom', 'whose'], correctAnswer: 'who', explanation: '"Who" is used as a subject pronoun for people.', difficulty: 'Easy' },
    { question: 'This is the book ___ I was telling you about.', options: ['that', 'who', 'whom', 'whose'], correctAnswer: 'that', explanation: '"That" or "which" is used for things. In this context, the relative pronoun can also be omitted.', difficulty: 'Easy' },
    { question: 'The car ___ is parked outside is mine.', options: ['which', 'who', 'whose', 'where'], correctAnswer: 'which', explanation: '"Which" (or "that") is used for things/animals.', difficulty: 'Easy' },
    { question: 'Do you know the man ___ is talking to Alice?', options: ['who', 'which', 'whose', 'where'], correctAnswer: 'who', explanation: 'Subject relative pronoun for a person.', difficulty: 'Easy' },
    { question: 'I lost the pen ___ you gave me.', options: ['which', 'who', 'whose', 'where'], correctAnswer: 'which', explanation: 'Object relative pronoun for a thing.', difficulty: 'Easy' },
    { question: 'That is the school ___ I study.', options: ['where', 'which', 'that', 'who'], correctAnswer: 'where', explanation: '"Where" refers to a place.', difficulty: 'Easy' },
    { question: 'This is the boy ___ ball broke the window.', options: ['whose', 'who', 'which', 'that'], correctAnswer: 'whose', explanation: '"Whose" indicates possession.', difficulty: 'Easy' },
    { question: 'The movie ___ we watched yesterday was boring.', options: ['that', 'who', 'where', 'whose'], correctAnswer: 'that', explanation: '"That" refers to a thing (the movie).', difficulty: 'Easy' },
    { question: 'This is the place ___ the accident happened.', options: ['where', 'which', 'that', 'when'], correctAnswer: 'where', explanation: '"Where" refers to a location.', difficulty: 'Easy' },
    { question: 'I like people ___ are friendly.', options: ['who', 'which', 'whose', 'where'], correctAnswer: 'who', explanation: 'Relative pronoun for people.', difficulty: 'Easy' },
    { question: 'Where is the cheese ___ was in the fridge?', options: ['that', 'who', 'whose', 'where'], correctAnswer: 'that', explanation: '"That" refers to things.', difficulty: 'Easy' },
    { question: 'The girl ___ sits next to me is very smart.', options: ['who', 'whose', 'which', 'where'], correctAnswer: 'who', explanation: 'Subject relative pronoun for a person.', difficulty: 'Easy' },

    // ==============================================================================
    // --- MEDIUM ---
    // ==============================================================================
    { question: 'The man ___ car was stolen went to the police.', options: ['whose', 'who', 'whom', 'which'], correctAnswer: 'whose', explanation: '"Whose" is a possessive pronoun used for people and things.', difficulty: 'Medium' },
    { question: 'The city ___ I was born is very small.', options: ['where', 'which', 'that', 'when'], correctAnswer: 'where', explanation: '"Where" is a relative adverb used to refer to a place.', difficulty: 'Medium' },
    { question: 'I remember the day ___ we first met.', options: ['when', 'which', 'where', 'that'], correctAnswer: 'when', explanation: '"When" is a relative adverb used to refer to a time.', difficulty: 'Medium' },
    { question: 'The cake, ___ was delicious, was made by my mom.', options: ['which', 'that', 'who', 'whose'], correctAnswer: 'which', explanation: 'In non-defining relative clauses (with commas), we use "which" for things, never "that".', difficulty: 'Medium' },
    { question: 'My brother, ___ lives in London, is visiting.', options: ['who', 'that', 'which', 'whose'], correctAnswer: 'who', explanation: 'Non-defining relative clause for a person requires "who", never "that".', difficulty: 'Medium' },
    { question: '___ you need is a good holiday.', options: ['What', 'That', 'Which', 'The thing'], correctAnswer: 'What', explanation: '"What" functions as a relative pronoun meaning "the thing that".', difficulty: 'Medium' },
    { question: 'Is this the hotel ___ you stayed at?', options: ['that', 'where', 'when', 'who'], correctAnswer: 'that', explanation: 'If the preposition "at" is present at the end, we use "that" or "which". If "at" was removed, we would use "where".', difficulty: 'Medium' },
    { question: 'The hotel ___ we stayed was expensive.', options: ['where', 'that', 'which', 'who'], correctAnswer: 'where', explanation: 'Here there is no preposition, so "where" is correct (meaning "in which").', difficulty: 'Medium' },
    { question: 'The person ___ I admire most is my father.', options: ['who', 'whose', 'which', 'where'], correctAnswer: 'who', explanation: 'Object pronoun for people. "Whom" is also correct but formal; "who" is common in general use.', difficulty: 'Medium' },
    { question: 'I don\'t understand ___ you are saying.', options: ['what', 'that', 'which', 'who'], correctAnswer: 'what', explanation: '"What" means "the thing(s) that".', difficulty: 'Medium' },
    { question: 'The summer ___ I graduated was very hot.', options: ['when', 'where', 'which', 'who'], correctAnswer: 'when', explanation: 'Refers to a time period.', difficulty: 'Medium' },
    { question: 'She is the only person ___ can help us.', options: ['who', 'which', 'whose', 'where'], correctAnswer: 'who', explanation: 'Relative pronoun for a person.', difficulty: 'Medium' },
    { question: 'The laptop ___ I bought last week is already broken.', options: ['which', 'who', 'where', 'whose'], correctAnswer: 'which', explanation: 'Relative pronoun for a thing.', difficulty: 'Medium' },
    { question: 'Do you know the reason ___ she is crying?', options: ['why', 'which', 'where', 'who'], correctAnswer: 'why', explanation: '"Why" is used after "reason".', difficulty: 'Medium' },
    { question: 'The artist ___ painting you bought is famous.', options: ['whose', 'who', 'whom', 'that'], correctAnswer: 'whose', explanation: 'Possessive form.', difficulty: 'Medium' },

    // ==============================================================================
    // --- HARD ---
    // ==============================================================================
    { question: 'The reason ___ he was late is not clear.', options: ['why', 'which', 'that', 'what'], correctAnswer: 'why', explanation: '"Why" is a relative adverb used to give a reason.', difficulty: 'Hard' },
    { question: 'The manager, ___ I spoke to yesterday, was very helpful.', options: ['whom', 'who', 'which', 'whose'], correctAnswer: 'whom', explanation: '"Whom" is an object pronoun used for people, especially in formal English. You can test this by rearranging the clause: "I spoke to him/whom".', difficulty: 'Hard' },
    { question: 'The movie, ___ was directed by Spielberg, was a hit.', options: ['which', 'that', 'who', 'what'], correctAnswer: 'which', explanation: 'In non-defining relative clauses (with commas), we use "which", not "that".', difficulty: 'Hard' },
    { question: 'Everything ___ happened was my fault.', options: ['that', 'which', 'what', 'who'], correctAnswer: 'that', explanation: 'After indefinite pronouns like "everything", "all", "something", "that" is preferred over "which".', difficulty: 'Hard' },
    { question: 'He failed the exam, ___ surprised everyone.', options: ['which', 'that', 'what', 'it'], correctAnswer: 'which', explanation: '"Which" can refer to the whole preceding clause ("He failed the exam").', difficulty: 'Hard' },
    { question: 'The chair on ___ you are sitting is broken.', options: ['which', 'that', 'where', 'who'], correctAnswer: 'which', explanation: 'After a preposition (on), we must use "which" for things. We cannot use "that".', difficulty: 'Hard' },
    { question: 'I have a friend ___ brother is an actor.', options: ['whose', 'who', 'which', 'that'], correctAnswer: 'whose', explanation: 'Possessive relative pronoun.', difficulty: 'Hard' },
    { question: 'The company for ___ I work is very successful.', options: ['which', 'that', 'where', 'whom'], correctAnswer: 'which', explanation: 'Preposition + which (for things/groups). "Whom" would be for a specific person.', difficulty: 'Hard' },
    { question: 'He isn\'t the man ___ he used to be.', options: ['that', 'who', 'which', 'whom'], correctAnswer: 'that', explanation: 'When describing a character or quality of a person (rather than the person themselves), "that" is often preferred or the pronoun is omitted.', difficulty: 'Hard' },
    { question: 'She showed me the photo, ___ was very kind of her.', options: ['which', 'that', 'it', 'what'], correctAnswer: 'which', explanation: 'Sentential relative clause: "which" refers to the action of showing the photo.', difficulty: 'Hard' },
    { question: '___ gets the job will be very lucky.', options: ['Whoever', 'Who', 'Whomever', 'Which'], correctAnswer: 'Whoever', explanation: '"Whoever" means "anyone who". It acts as the subject of the clause.', difficulty: 'Hard' },
    { question: 'I will do ___ it takes to succeed.', options: ['whatever', 'what', 'that', 'which'], correctAnswer: 'whatever', explanation: '"Whatever" means "anything that".', difficulty: 'Hard' },
    { question: 'This is the best movie ___ I have ever seen.', options: ['that', 'which', 'what', 'where'], correctAnswer: 'that', explanation: 'After superlatives ("best"), "that" is preferred over "which".', difficulty: 'Hard' },
    { question: 'There is nothing ___ we can do.', options: ['that', 'what', 'which', 'where'], correctAnswer: 'that', explanation: 'After "nothing", "that" is the standard relative pronoun (often omitted).', difficulty: 'Hard' },
    { question: 'The villagers, many of ___ have never seen a car, were amazed.', options: ['whom', 'who', 'which', 'that'], correctAnswer: 'whom', explanation: 'Quantifier + of + relative pronoun. For people, use "whom".', difficulty: 'Hard' },

    // ==============================================================================
    // --- EXAM ---
    // ==============================================================================
    { question: 'He bought a car, the color of ___ is red.', options: ['which', 'that', 'whom', 'whose'], correctAnswer: 'which', explanation: 'We use "of which" for things to indicate possession, though "whose" is also becoming acceptable. In this structure "the noun + of + relative", "which" is the grammatically formal choice.', difficulty: 'Exam' },
    { question: 'The person to ___ I was speaking is my boss.', options: ['whom', 'who', 'that', 'which'], correctAnswer: 'whom', explanation: 'After a preposition (to), we must use "whom" for people. "Who" and "that" are incorrect after a preposition.', difficulty: 'Exam' },
    { question: 'I have three brothers, all of ___ are doctors.', options: ['whom', 'who', 'which', 'that'], correctAnswer: 'whom', explanation: 'After a quantifier + of (all of, some of, none of), we use "whom" for people.', difficulty: 'Exam' },
    { question: 'There were two bags, neither of ___ was mine.', options: ['which', 'that', 'whom', 'what'], correctAnswer: 'which', explanation: 'Quantifier + of + which (for things).', difficulty: 'Exam' },
    { question: 'We stayed at the Grand Hotel, ___ recommended by our friends.', options: ['which was', 'that was', 'what was', 'it was'], correctAnswer: 'which was', explanation: 'Non-defining relative clause.', difficulty: 'Exam' },
    { question: 'The man ___ I thought was the manager turned out to be a guest.', options: ['who', 'whom', 'which', 'whose'], correctAnswer: 'who', explanation: 'This is a complex structure. "Who" is the subject of "was the manager". The phrase "I thought" is an interjection/reporting clause. (The man [who was the manager]). Therefore, "who" is correct, not "whom".', difficulty: 'Exam' },
    { question: 'The goals for ___ we are striving are achievable.', options: ['which', 'that', 'whom', 'what'], correctAnswer: 'which', explanation: 'Preposition + relative pronoun (for which).', difficulty: 'Exam' },
    { question: '___ you say, I still think you are wrong.', options: ['Whatever', 'However', 'Whichever', 'Whenever'], correctAnswer: 'Whatever', explanation: 'Concessive clause meaning "No matter what you say".', difficulty: 'Exam' },
    { question: 'They elected a new CEO, ___ aim is to cut costs.', options: ['whose', 'who', 'whom', 'which'], correctAnswer: 'whose', explanation: 'Possessive relative pronoun referring to the CEO.', difficulty: 'Exam' },
    { question: 'This is the house in ___ Shakespeare was born.', options: ['which', 'that', 'where', 'what'], correctAnswer: 'which', explanation: 'Preposition "in" + "which". "Where" cannot follow "in".', difficulty: 'Exam' },
    { question: 'The woman with ___ he fell in love left him.', options: ['whom', 'who', 'that', 'which'], correctAnswer: 'whom', explanation: 'Preposition + whom.', difficulty: 'Exam' },
    { question: 'It was in 1990 ___ I first visited London.', options: ['that', 'when', 'which', 'where'], correctAnswer: 'that', explanation: 'This is a Cleft Sentence ("It was X that..."). Even though 1990 is a time, cleft sentences typically use "that".', difficulty: 'Exam' },
    { question: 'He is the author for ___ this award is named.', options: ['whom', 'who', 'which', 'that'], correctAnswer: 'whom', explanation: 'Preposition + whom.', difficulty: 'Exam' },
    { question: 'We saw several houses, most of ___ were too expensive.', options: ['which', 'that', 'whom', 'them'], correctAnswer: 'which', explanation: 'Quantifier + of + which.', difficulty: 'Exam' },
    { question: 'The train, ___ late departure caused us to miss the connection, has arrived.', options: ['whose', 'which', 'that', 'who'], correctAnswer: 'whose', explanation: '"Whose" can be used for things to indicate possession/association (the departure of the train).', difficulty: 'Exam' }
];