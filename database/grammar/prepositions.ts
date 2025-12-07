// @/database/grammar/prepositions.ts
import { GrammarQuestion } from '../../types';

export const prepositions: GrammarQuestion[] = [
    // ==============================================================================
    // --- EASY ---
    // ==============================================================================
    { question: 'The cat is sleeping ___ the table.', options: ['on', 'in', 'at', 'under'], correctAnswer: 'under', explanation: '"Under" indicates a position below something.', difficulty: 'Easy' },
    { question: 'I will meet you ___ the bus stop.', options: ['on', 'in', 'at', 'by'], correctAnswer: 'at', explanation: '"At" is used for specific points or locations.', difficulty: 'Easy' },
    { question: 'The book is ___ the shelf.', options: ['on', 'in', 'at', 'with'], correctAnswer: 'on', explanation: '"On" is used for surfaces.', difficulty: 'Easy' },
    { question: 'He lives ___ London.', options: ['in', 'on', 'at', 'from'], correctAnswer: 'in', explanation: '"In" is used for cities, countries, and larger areas.', difficulty: 'Easy' },
    { question: 'The concert will take place ___ 8 PM.', options: ['at', 'on', 'in', 'by'], correctAnswer: 'at', explanation: 'Use "at" for specific times.', difficulty: 'Easy' },
    { question: 'My birthday is ___ October.', options: ['in', 'on', 'at', 'from'], correctAnswer: 'in', explanation: 'Use "in" for months.', difficulty: 'Easy' },
    { question: 'I\'ll see you ___ Monday.', options: ['on', 'in', 'at', 'by'], correctAnswer: 'on', explanation: 'We use "on" for days of the week.', difficulty: 'Easy' },
    { question: 'We travelled ___ car.', options: ['by', 'in', 'on', 'with'], correctAnswer: 'by', explanation: 'We use "by" for modes of transport (by car, by bus, by train).', difficulty: 'Easy' },
    { question: 'The picture is ___ the wall.', options: ['on', 'in', 'at', 'over'], correctAnswer: 'on', explanation: 'We use "on" for surfaces.', difficulty: 'Easy' },
    { question: 'She is interested ___ art.', options: ['in', 'on', 'at', 'with'], correctAnswer: 'in', explanation: 'The phrasal verb is "interested in".', difficulty: 'Easy' },
    { question: 'Put the milk ___ the fridge.', options: ['in', 'on', 'at', 'over'], correctAnswer: 'in', explanation: '"In" indicates being inside a container or space.', difficulty: 'Easy' },
    { question: 'We walked ___ the park.', options: ['through', 'on', 'at', 'between'], correctAnswer: 'through', explanation: '"Through" suggests moving from one side to the other within a space.', difficulty: 'Easy' },
    { question: 'The apple fell ___ the tree.', options: ['off', 'out', 'of', 'away'], correctAnswer: 'off', explanation: '"Off" indicates movement away from a surface.', difficulty: 'Easy' },
    { question: 'He is waiting ___ the bus.', options: ['for', 'to', 'at', 'on'], correctAnswer: 'for', explanation: 'You wait "for" something or someone.', difficulty: 'Easy' },
    { question: 'Look ___ the stars!', options: ['at', 'to', 'on', 'in'], correctAnswer: 'at', explanation: 'You look "at" specific targets.', difficulty: 'Easy' },
    { question: 'I wake up ___ 7 o\'clock.', options: ['at', 'on', 'in', 'to'], correctAnswer: 'at', explanation: 'Specific clock times use "at".', difficulty: 'Easy' },
    { question: 'We go to the beach ___ summer.', options: ['in', 'on', 'at', 'by'], correctAnswer: 'in', explanation: 'Seasons take "in" (in summer, in winter).', difficulty: 'Easy' },
    { question: 'The keys are ___ my pocket.', options: ['in', 'on', 'at', 'to'], correctAnswer: 'in', explanation: 'Inside a container/space.', difficulty: 'Easy' },
    { question: 'She sat ___ me in class.', options: ['next to', 'next', 'near to', 'at'], correctAnswer: 'next to', explanation: '"Next to" means beside.', difficulty: 'Easy' },
    { question: 'My birthday is ___ the 5th of May.', options: ['on', 'in', 'at', 'by'], correctAnswer: 'on', explanation: 'Specific dates take "on".', difficulty: 'Easy' },

    // ==============================================================================
    // --- MEDIUM ---
    // ==============================================================================
    { question: 'He is allergic ___ cats.', options: ['to', 'with', 'for', 'about'], correctAnswer: 'to', explanation: 'The correct preposition is "allergic to".', difficulty: 'Medium' },
    { question: 'She is very good ___ playing the piano.', options: ['at', 'in', 'on', 'with'], correctAnswer: 'at', explanation: 'We use "good at" to talk about skills.', difficulty: 'Medium' },
    { question: 'The movie is based ___ a true story.', options: ['on', 'in', 'at', 'from'], correctAnswer: 'on', explanation: 'The correct phrasal verb is "based on".', difficulty: 'Medium' },
    { question: 'She is responsible ___ the marketing department.', options: ['for', 'to', 'with', 'about'], correctAnswer: 'for', explanation: '"Responsible for" is the correct collocation.', difficulty: 'Medium' },
    { question: 'He apologized ___ his rude behavior.', options: ['for', 'to', 'with', 'about'], correctAnswer: 'for', explanation: 'You apologize "for" something you did.', difficulty: 'Medium' },
    { question: 'She is married ___ a doctor.', options: ['to', 'with', 'for', 'about'], correctAnswer: 'to', explanation: 'The correct preposition is "married to".', difficulty: 'Medium' },
    { question: 'He is afraid ___ spiders.', options: ['of', 'from', 'with', 'about'], correctAnswer: 'of', explanation: 'Adjective + preposition: afraid of.', difficulty: 'Medium' },
    { question: 'This book belongs ___ me.', options: ['to', 'for', 'with', 'at'], correctAnswer: 'to', explanation: 'Verb + preposition: belong to.', difficulty: 'Medium' },
    { question: 'She is famous ___ her singing.', options: ['for', 'of', 'by', 'with'], correctAnswer: 'for', explanation: 'Adjective + preposition: famous for.', difficulty: 'Medium' },
    { question: 'The decision depends ___ the outcome of the meeting.', options: ['on', 'of', 'from', 'with'], correctAnswer: 'on', explanation: 'The correct verb-preposition combination is "depends on".', difficulty: 'Medium' },
    { question: 'I am proud ___ my achievements.', options: ['of', 'for', 'at', 'in'], correctAnswer: 'of', explanation: 'Adjective + preposition: proud of.', difficulty: 'Medium' },
    { question: 'The shop is open ___ 9 AM to 5 PM.', options: ['from', 'at', 'between', 'during'], correctAnswer: 'from', explanation: 'We use "from... to..." for a range of time.', difficulty: 'Medium' },
    { question: 'Are you excited ___ the trip?', options: ['about', 'for', 'with', 'in'], correctAnswer: 'about', explanation: 'Adjective + preposition: excited about.', difficulty: 'Medium' },
    { question: 'The table is made ___ wood.', options: ['of', 'from', 'by', 'in'], correctAnswer: 'of', explanation: '"Made of" is used when the material hasn\'t changed its essential nature.', difficulty: 'Medium' },
    { question: 'I prefer coffee ___ tea.', options: ['to', 'than', 'over', 'from'], correctAnswer: 'to', explanation: 'The structure is "prefer X to Y".', difficulty: 'Medium' },
    { question: 'He shouted ___ me from across the street.', options: ['to', 'at', 'on', 'for'], correctAnswer: 'to', explanation: 'Shout "to" someone to be heard. Shout "at" someone in anger.', difficulty: 'Medium' },
    { question: 'Please fill ___ the form.', options: ['in', 'on', 'at', 'up'], correctAnswer: 'in', explanation: 'Phrasal verb "fill in" (UK) or "fill out" (US) a form.', difficulty: 'Medium' },
    { question: 'I arrived ___ the station just in time.', options: ['at', 'in', 'on', 'to'], correctAnswer: 'at', explanation: 'Arrive "at" a specific point/building. Arrive "in" a city/country.', difficulty: 'Medium' },
    { question: 'She is currently ___ holiday.', options: ['on', 'in', 'at', 'for'], correctAnswer: 'on', explanation: 'Fixed phrase "on holiday" (or "on vacation").', difficulty: 'Medium' },
    { question: 'I did it ___ mistake.', options: ['by', 'on', 'with', 'for'], correctAnswer: 'by', explanation: 'Fixed phrase "by mistake".', difficulty: 'Medium' },

    // ==============================================================================
    // --- HARD ---
    // ==============================================================================
    { question: 'I am looking forward ___ seeing you.', options: ['to', 'for', 'at', 'with'], correctAnswer: 'to', explanation: '"Look forward to" is a phrasal verb, and the "to" is a preposition, so it must be followed by a gerund.', difficulty: 'Hard' },
    { question: 'He is accused ___ theft.', options: ['of', 'for', 'with', 'about'], correctAnswer: 'of', explanation: 'The correct preposition is "accused of".', difficulty: 'Hard' },
    { question: 'This product is different ___ the one I bought last week.', options: ['from', 'than', 'to', 'with'], correctAnswer: 'from', explanation: '"Different from" is the standard preposition.', difficulty: 'Hard' },
    { question: 'She insisted ___ paying for the meal.', options: ['on', 'in', 'at', 'for'], correctAnswer: 'on', explanation: 'The verb "insist" is followed by "on".', difficulty: 'Hard' },
    { question: 'The new law will come ___ effect next month.', options: ['into', 'in', 'on', 'to'], correctAnswer: 'into', explanation: 'Idiom "come into effect".', difficulty: 'Hard' },
    { question: 'He succeeded ___ passing the exam.', options: ['in', 'on', 'at', 'for'], correctAnswer: 'in', explanation: 'Verb + preposition: succeed in.', difficulty: 'Hard' },
    { question: 'They congratulated him ___ his success.', options: ['on', 'for', 'of', 'about'], correctAnswer: 'on', explanation: 'Verb + preposition: congratulate on.', difficulty: 'Hard' },
    { question: 'I was not aware ___ the problem.', options: ['of', 'about', 'for', 'on'], correctAnswer: 'of', explanation: 'Adjective + preposition: aware of.', difficulty: 'Hard' },
    { question: 'He was charged ___ murder.', options: ['with', 'of', 'for', 'about'], correctAnswer: 'with', explanation: 'Legal term: charged with a crime.', difficulty: 'Hard' },
    { question: 'She is jealous ___ her sister.', options: ['of', 'for', 'with', 'about'], correctAnswer: 'of', explanation: 'Adjective + preposition: jealous of.', difficulty: 'Hard' },
    { question: 'The car is ___ sale.', options: ['for', 'on', 'in', 'at'], correctAnswer: 'for', explanation: '"For sale" means it can be bought. "On sale" often means at a reduced price.', difficulty: 'Hard' },
    { question: 'I am fed up ___ this weather.', options: ['with', 'of', 'about', 'by'], correctAnswer: 'with', explanation: 'Adjective + preposition: fed up with.', difficulty: 'Hard' },
    { question: 'He is addicted ___ video games.', options: ['to', 'with', 'on', 'in'], correctAnswer: 'to', explanation: 'Adjective + preposition: addicted to.', difficulty: 'Hard' },
    { question: 'This solution is superior ___ the previous one.', options: ['to', 'than', 'from', 'over'], correctAnswer: 'to', explanation: 'Latin comparatives (superior, inferior, senior, junior) take "to".', difficulty: 'Hard' },
    { question: 'We need to find a solution ___ this problem.', options: ['to', 'for', 'of', 'about'], correctAnswer: 'to', explanation: 'Noun + preposition: solution to.', difficulty: 'Hard' },
    { question: 'He was arrested ___ suspicion of robbery.', options: ['on', 'in', 'at', 'under'], correctAnswer: 'on', explanation: 'Fixed phrase "on suspicion of".', difficulty: 'Hard' },
    { question: 'I am doubtful ___ his ability to do the job.', options: ['about', 'of', 'for', 'on'], correctAnswer: 'about', explanation: 'Adjective + preposition: doubtful about (or of).', difficulty: 'Hard' },
    { question: 'The reasons ___ his behavior are unclear.', options: ['for', 'of', 'to', 'about'], correctAnswer: 'for', explanation: 'Noun + preposition: reason for.', difficulty: 'Hard' },
    { question: 'She is capable ___ doing great things.', options: ['of', 'to', 'in', 'for'], correctAnswer: 'of', explanation: 'Adjective + preposition: capable of.', difficulty: 'Hard' },
    { question: 'Don\'t shout ___ me! I can hear you.', options: ['at', 'to', 'on', 'with'], correctAnswer: 'at', explanation: 'Shout "at" implies anger or annoyance.', difficulty: 'Hard' },

    // ==============================================================================
    // --- EXAM ---
    // ==============================================================================
    { question: 'He died ___ pneumonia.', options: ['of', 'from', 'by', 'with'], correctAnswer: 'of', explanation: 'We generally say "die of" a specific disease.', difficulty: 'Exam' },
    { question: 'The letter was written ___ ink.', options: ['in', 'with', 'by', 'on'], correctAnswer: 'in', explanation: 'We say "in ink", "in pencil", "in bold".', difficulty: 'Exam' },
    { question: 'We are ___ no obligation to buy the product.', options: ['under', 'in', 'on', 'at'], correctAnswer: 'under', explanation: 'Fixed phrase "under obligation".', difficulty: 'Exam' },
    { question: 'He was found guilty ___ fraud.', options: ['of', 'for', 'with', 'about'], correctAnswer: 'of', explanation: 'Legal term: guilty of.', difficulty: 'Exam' },
    { question: 'She takes ___ her mother.', options: ['after', 'like', 'from', 'by'], correctAnswer: 'after', explanation: 'Phrasal verb "take after" means to resemble a parent.', difficulty: 'Exam' },
    { question: 'This painting is attributed ___ Picasso.', options: ['to', 'by', 'for', 'with'], correctAnswer: 'to', explanation: 'Passive + preposition: attributed to.', difficulty: 'Exam' },
    { question: 'We were prevented ___ entering the building.', options: ['from', 'to', 'of', 'against'], correctAnswer: 'from', explanation: 'Verb + object + preposition: prevent someone from doing something.', difficulty: 'Exam' },
    { question: 'The manager is ___ charge of the project.', options: ['in', 'on', 'at', 'with'], correctAnswer: 'in', explanation: 'Fixed phrase "in charge of".', difficulty: 'Exam' },
    { question: 'She hinted ___ the possibility of a promotion.', options: ['at', 'to', 'on', 'about'], correctAnswer: 'at', explanation: 'Verb + preposition: hint at.', difficulty: 'Exam' },
    { question: 'I picked this up ___ random.', options: ['at', 'by', 'in', 'on'], correctAnswer: 'at', explanation: 'Fixed phrase "at random".', difficulty: 'Exam' },
    { question: 'The country is rich ___ natural resources.', options: ['in', 'of', 'with', 'by'], correctAnswer: 'in', explanation: 'Adjective + preposition: rich in.', difficulty: 'Exam' },
    { question: 'He is notorious ___ his bad temper.', options: ['for', 'of', 'by', 'with'], correctAnswer: 'for', explanation: 'Adjective + preposition: notorious for (known for something bad).', difficulty: 'Exam' },
    { question: 'I did it ___ the spur of the moment.', options: ['on', 'in', 'at', 'by'], correctAnswer: 'on', explanation: 'Idiom "on the spur of the moment" (impulsively).', difficulty: 'Exam' },
    { question: 'We are ___ excellent terms with our neighbors.', options: ['on', 'in', 'at', 'by'], correctAnswer: 'on', explanation: 'Idiom "on good/bad/excellent terms with".', difficulty: 'Exam' },
    { question: 'He was absorbed ___ his work.', options: ['in', 'at', 'by', 'with'], correctAnswer: 'in', explanation: 'Adjective + preposition: absorbed in.', difficulty: 'Exam' },
    { question: 'They objected ___ the new plan.', options: ['to', 'against', 'for', 'with'], correctAnswer: 'to', explanation: 'Verb + preposition: object to.', difficulty: 'Exam' },
    { question: 'Wine is made ___ grapes.', options: ['from', 'of', 'by', 'with'], correctAnswer: 'from', explanation: '"Made from" is used when the material undergoes a significant change (you can\'t see the grapes in the wine).', difficulty: 'Exam' },
    { question: 'She is proficient ___ several languages.', options: ['in', 'at', 'with', 'of'], correctAnswer: 'in', explanation: 'Adjective + preposition: proficient in.', difficulty: 'Exam' },
    { question: 'He was released ___ bail.', options: ['on', 'in', 'at', 'under'], correctAnswer: 'on', explanation: 'Legal phrase "on bail".', difficulty: 'Exam' },
    { question: 'The book is tailored ___ beginners.', options: ['to', 'for', 'at', 'with'], correctAnswer: 'to', explanation: 'Verb + preposition: tailored to (needs/audience).', difficulty: 'Exam' }
];