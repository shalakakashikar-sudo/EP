// @/database/grammar/quantifiers.ts
import { GrammarQuestion } from '../../types';

export const quantifiers: GrammarQuestion[] = [
    // ==============================================================================
    // --- EASY ---
    // ==============================================================================
    { question: 'I don\'t have ___ money with me.', options: ['some', 'any', 'many', 'much'], correctAnswer: 'any', explanation: '"Any" is typically used in negative sentences and questions.', difficulty: 'Easy' },
    { question: 'How ___ apples did you buy?', options: ['much', 'many', 'some', 'any'], correctAnswer: 'many', explanation: '"Many" is used with countable nouns like "apples".', difficulty: 'Easy' },
    { question: 'There is ___ milk in the fridge.', options: ['some', 'any', 'many', 'a few'], correctAnswer: 'some', explanation: '"Some" is used in affirmative sentences for uncountable nouns.', difficulty: 'Easy' },
    { question: 'How ___ sugar do you want in your coffee?', options: ['much', 'many', 'a few', 'a little'], correctAnswer: 'much', explanation: '"Much" is used with uncountable nouns.', difficulty: 'Easy' },
    { question: 'There are ___ students in the classroom.', options: ['many', 'much', 'a little', 'some of'], correctAnswer: 'many', explanation: '"Many" is for countable nouns.', difficulty: 'Easy' },
    { question: 'There isn\'t ___ time left.', options: ['many', 'much', 'some', 'a few'], correctAnswer: 'much', explanation: '"Much" is used for uncountable nouns in negative sentences.', difficulty: 'Easy' },
    { question: 'We have ___ friends in this city.', options: ['a lot of', 'much', 'a little', 'any'], correctAnswer: 'a lot of', explanation: '"A lot of" can be used with countable nouns in affirmative sentences.', difficulty: 'Easy' },
    { question: 'Do you have ___ brothers or sisters?', options: ['some', 'any', 'much', 'little'], correctAnswer: 'any', explanation: '"Any" is used in questions.', difficulty: 'Easy' },
    { question: '___ child received a gift.', options: ['Each', 'All', 'Many', 'Few'], correctAnswer: 'Each', explanation: '"Each" is followed by a singular noun.', difficulty: 'Easy' },
    { question: '___ of the students passed the exam.', options: ['All', 'Every', 'Each', 'Whole'], correctAnswer: 'All', explanation: '"All of" is used with plural nouns.', difficulty: 'Easy' },
    { question: 'He ate the ___ cake.', options: ['whole', 'all', 'every', 'some'], correctAnswer: 'whole', explanation: 'We use "whole" with singular nouns to mean "complete" or "entire".', difficulty: 'Easy' },
    { question: 'There are ___ cars on the road today.', options: ['too many', 'too much', 'a little', 'much'], correctAnswer: 'too many', explanation: '"Cars" is a countable noun.', difficulty: 'Easy' },
    { question: 'He drinks ___ water.', options: ['a lot of', 'many', 'few', 'several'], correctAnswer: 'a lot of', explanation: '"Water" is uncountable.', difficulty: 'Easy' },
    { question: 'I would like ___ tea, please.', options: ['some', 'any', 'many', 'few'], correctAnswer: 'some', explanation: 'We use "some" in offers and requests.', difficulty: 'Easy' },
    { question: '___ student must wear a uniform.', options: ['Every', 'All', 'Many', 'Some'], correctAnswer: 'Every', explanation: '"Every" is followed by a singular noun.', difficulty: 'Easy' },

    // ==============================================================================
    // --- MEDIUM ---
    // ==============================================================================
    { question: 'He has very ___ friends.', options: ['few', 'little', 'much', 'any'], correctAnswer: 'few', explanation: '"Few" is used with countable nouns and has a negative connotation, meaning "not many".', difficulty: 'Medium' },
    { question: 'There is ___ hope left.', options: ['little', 'few', 'many', 'some'], correctAnswer: 'little', explanation: '"Little" is used with uncountable nouns and has a negative connotation, meaning "not much".', difficulty: 'Medium' },
    { question: 'Could I have ___ more water, please?', options: ['some', 'any', 'many', 'much'], correctAnswer: 'some', explanation: '"Some" is used in requests and offers, even though they are questions.', difficulty: 'Medium' },
    { question: 'I have ___ idea what you are talking about.', options: ['no', 'any', 'none', 'not'], correctAnswer: 'no', explanation: '"No" means "not any" and is used before nouns.', difficulty: 'Medium' },
    { question: 'There are ___ of apples in the basket.', options: ['plenty', 'many', 'much', 'several'], correctAnswer: 'plenty', explanation: '"Plenty of" means "more than enough". "Many" is not followed by "of" unless there is a determiner (many of the...).', difficulty: 'Medium' },
    { question: '___ of them wanted to go.', options: ['None', 'No', 'Not', 'Any'], correctAnswer: 'None', explanation: '"None of" is used with object pronouns or determiners.', difficulty: 'Medium' },
    { question: 'I have a ___ friends in London.', options: ['few', 'little', 'bit', 'lot'], correctAnswer: 'few', explanation: '"A few" means "some" (positive connotation) for countable nouns.', difficulty: 'Medium' },
    { question: 'We have a ___ time before the train leaves.', options: ['little', 'few', 'many', 'several'], correctAnswer: 'little', explanation: '"A little" means "some" (positive connotation) for uncountable nouns.', difficulty: 'Medium' },
    { question: 'Did you buy ___ oranges?', options: ['any', 'some', 'much', 'a little'], correctAnswer: 'any', explanation: 'General question about existence.', difficulty: 'Medium' },
    { question: '___ of the two sisters is married.', options: ['Neither', 'None', 'Both', 'All'], correctAnswer: 'Neither', explanation: '"Neither" is used for two people/things to mean "not one and not the other".', difficulty: 'Medium' },
    { question: '___ parent was present at the meeting.', options: ['Each', 'All', 'Both', 'Some'], correctAnswer: 'Each', explanation: '"Each" (or "Every") takes a singular noun.', difficulty: 'Medium' },
    { question: 'He spent ___ the money.', options: ['all', 'whole', 'most', 'every'], correctAnswer: 'all', explanation: '"All the money" or "all of the money". "Whole" would require "the whole money" (less common) or "the whole sum".', difficulty: 'Medium' },
    { question: 'There was ___ traffic on the road.', options: ['a great deal of', 'many', 'a large number of', 'few'], correctAnswer: 'a great deal of', explanation: '"Traffic" is uncountable.', difficulty: 'Medium' },
    { question: 'I have read ___ book on the shelf.', options: ['every', 'all', 'many', 'some'], correctAnswer: 'every', explanation: '"Every" is followed by a singular noun.', difficulty: 'Medium' },
    { question: '___ of the students knew the answer.', options: ['None', 'No', 'Any', 'Every'], correctAnswer: 'None', explanation: '"None of" + plural noun.', difficulty: 'Medium' },

    // ==============================================================================
    // --- HARD ---
    // ==============================================================================
    { question: 'Very ___ people can speak more than five languages.', options: ['few', 'little', 'a few', 'a little'], correctAnswer: 'few', explanation: '"Few" is used with countable nouns to mean "not many", emphasizing the small number.', difficulty: 'Hard' },
    { question: 'She spent ___ the day reading.', options: ['the whole', 'all', 'whole', 'most'], correctAnswer: 'the whole', explanation: 'We say "the whole day" or "all day". "All the day" is less common.', difficulty: 'Hard' },
    { question: '___ of the information was incorrect.', options: ['Much', 'Many', 'Several', 'Few'], correctAnswer: 'Much', explanation: '"Information" is uncountable, so we use "much" (often "much of").', difficulty: 'Hard' },
    { question: 'I have ___ patience left.', options: ['little', 'few', 'a few', 'many'], correctAnswer: 'little', explanation: '"Little" implies almost no patience.', difficulty: 'Hard' },
    { question: '___ employee has a specific role.', options: ['Each', 'All', 'Both', 'Some'], correctAnswer: 'Each', explanation: 'Focuses on the individual within a group.', difficulty: 'Hard' },
    { question: '___ side of the street is lined with trees.', options: ['Either', 'Both', 'All', 'Every'], correctAnswer: 'Either', explanation: '"Either side" means "both sides" (viewed individually) or "one side or the other". In this context, it likely means "each side".', difficulty: 'Hard' },
    { question: 'There are ___ reasons for his failure.', options: ['a number of', 'an amount of', 'a deal of', 'much'], correctAnswer: 'a number of', explanation: '"A number of" is used with countable nouns.', difficulty: 'Hard' },
    { question: 'He has ___ knowledge of history.', options: ['a vast amount of', 'a large number of', 'many', 'few'], correctAnswer: 'a vast amount of', explanation: '"Knowledge" is uncountable.', difficulty: 'Hard' },
    { question: '___ runner finished the race.', options: ['Every', 'All', 'Both', 'Some'], correctAnswer: 'Every', explanation: 'Singular noun "runner".', difficulty: 'Hard' },
    { question: 'We can go to ___ restaurant; I don\'t mind.', options: ['any', 'some', 'no', 'every'], correctAnswer: 'any', explanation: '"Any" here means "it doesn\'t matter which one".', difficulty: 'Hard' },
    { question: '___ of the applicants were suitable.', options: ['None', 'No', 'Not', 'Any'], correctAnswer: 'None', explanation: '"None of" is followed by a plural noun/verb in informal/general English.', difficulty: 'Hard' },
    { question: '___ of the two candidates was suitable.', options: ['Neither', 'None', 'Either', 'Both'], correctAnswer: 'Neither', explanation: 'Comparing two specific items negatively requires "neither".', difficulty: 'Hard' },
    { question: 'I have ___ friends who live abroad.', options: ['several', 'much', 'a great deal of', 'a little'], correctAnswer: 'several', explanation: '"Several" means "more than a few but not many".', difficulty: 'Hard' },
    { question: 'There is ___ doubt that he is guilty.', options: ['little', 'few', 'a few', 'many'], correctAnswer: 'little', explanation: '"Little doubt" means "almost no doubt".', difficulty: 'Hard' },
    { question: 'He earns ___ money.', options: ['a great deal of', 'many', 'a large number of', 'few'], correctAnswer: 'a great deal of', explanation: '"Money" is uncountable.', difficulty: 'Hard' },

    // ==============================================================================
    // --- EXAM ---
    // ==============================================================================
    { question: 'I have ___ respect for him.', options: ['a great deal of', 'many', 'a large number of', 'plenty'], correctAnswer: 'a great deal of', explanation: '"A great deal of" is used with uncountable nouns like "respect".', difficulty: 'Exam' },
    { question: '___ advice you gave me was helpful.', options: ['The little', 'A little', 'Little', 'Few'], correctAnswer: 'The little', explanation: '"The little" refers to the specific, small amount that existed.', difficulty: 'Exam' },
    { question: '___ few people who were there were shocked.', options: ['The', 'A', 'Some', 'Any'], correctAnswer: 'The', explanation: '"The few" refers to the specific small group present.', difficulty: 'Exam' },
    { question: '___ of the boys was given a prize.', options: ['Each', 'All', 'Both', 'Some'], correctAnswer: 'Each', explanation: '"Each of" is grammatically singular, though plural verbs are sometimes used informally. "Was" confirms singular.', difficulty: 'Exam' },
    { question: 'Unlike his brother, he has ___ ambition.', options: ['little', 'few', 'a few', 'many'], correctAnswer: 'little', explanation: 'Ambition is uncountable. "Little" implies a lack of it.', difficulty: 'Exam' },
    { question: '___ witness was questioned by the police.', options: ['Every', 'All', 'Both', 'Some'], correctAnswer: 'Every', explanation: '"Every" modifies a singular noun.', difficulty: 'Exam' },
    { question: '___ effort has been made to solve the problem.', options: ['Every', 'All', 'Many', 'Few'], correctAnswer: 'Every', explanation: '"Every effort" is a fixed collocation meaning "all possible efforts".', difficulty: 'Exam' },
    { question: 'We have ___ furniture in the room.', options: ['hardly any', 'nearly', 'almost', 'many'], correctAnswer: 'hardly any', explanation: '"Hardly any" means "very little/few". "Furniture" is uncountable.', difficulty: 'Exam' },
    { question: '___ needs to be done.', options: ['A great deal', 'A large number', 'Many', 'Few'], correctAnswer: 'A great deal', explanation: '"A great deal" acts as a pronoun for an uncountable amount.', difficulty: 'Exam' },
    { question: 'Whatever ___ money I have is yours.', options: ['little', 'few', 'less', 'least'], correctAnswer: 'little', explanation: 'Used after "whatever" to emphasize the small amount.', difficulty: 'Exam' },
    { question: 'She has ___ knowledge of physics.', options: ['scant', 'few', 'a few', 'many'], correctAnswer: 'scant', explanation: '"Scant" means barely sufficient or adequate.', difficulty: 'Exam' },
    { question: 'There were ___ fewer people than expected.', options: ['far', 'many', 'lot', 'very'], correctAnswer: 'far', explanation: 'We use "far", "much", or "a lot" to modify comparatives like "fewer".', difficulty: 'Exam' }
];