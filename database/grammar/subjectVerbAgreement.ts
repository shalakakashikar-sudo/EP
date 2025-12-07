// @/database/grammar/subjectVerbAgreement.ts
import { GrammarQuestion } from '../../types';

export const subjectVerbAgreement: GrammarQuestion[] = [
    // ==============================================================================
    // --- EASY ---
    // ==============================================================================
    { question: 'The dog ___ chasing the cat.', options: ['is', 'are', 'am', 'be'], correctAnswer: 'is', explanation: 'A singular subject ("The dog") takes a singular verb ("is").', difficulty: 'Easy' },
    { question: 'The cats ___ playing in the garden.', options: ['are', 'is', 'am', 'be'], correctAnswer: 'are', explanation: 'A plural subject ("The cats") takes a plural verb ("are").', difficulty: 'Easy' },
    { question: 'My friends and I ___ going to the movies.', options: ['are', 'is', 'am', 'be'], correctAnswer: 'are', explanation: 'A compound subject ("My friends and I") is plural and takes a plural verb.', difficulty: 'Easy' },
    { question: 'There ___ many reasons for this decision.', options: ['are', 'is', 'was', 'has'], correctAnswer: 'are', explanation: 'With "There is/are", the verb agrees with the subject that follows (reasons = plural).', difficulty: 'Easy' },
    { question: 'She ___ to the park every Sunday.', options: ['goes', 'go', 'going', 'gone'], correctAnswer: 'goes', explanation: 'Third person singular subject ("She") takes a verb ending in -s or -es.', difficulty: 'Easy' },
    { question: 'They ___ not like spicy food.', options: ['do', 'does', 'doing', 'done'], correctAnswer: 'do', explanation: 'Plural subject ("They") takes "do".', difficulty: 'Easy' },
    { question: 'The book on the table ___ mine.', options: ['is', 'are', 'am', 'be'], correctAnswer: 'is', explanation: 'The subject is "book" (singular). "On the table" is just a prepositional phrase.', difficulty: 'Easy' },
    { question: 'Here ___ the bus!', options: ['comes', 'come', 'coming', 'came'], correctAnswer: 'comes', explanation: 'The subject is "bus" (singular). The sentence is inverted.', difficulty: 'Easy' },
    { question: 'We ___ happy to see you.', options: ['are', 'is', 'am', 'be'], correctAnswer: 'are', explanation: '"We" is a plural pronoun.', difficulty: 'Easy' },
    { question: 'Your shoes ___ under the bed.', options: ['are', 'is', 'was', 'be'], correctAnswer: 'are', explanation: '"Shoes" is a plural noun.', difficulty: 'Easy' },
    { question: 'John and Mary ___ best friends.', options: ['are', 'is', 'am', 'was'], correctAnswer: 'are', explanation: 'Two singular subjects joined by "and" form a plural subject.', difficulty: 'Easy' },
    { question: 'My brother ___ play football.', options: ['doesn\'t', 'don\'t', 'isn\'t', 'aren\'t'], correctAnswer: 'doesn\'t', explanation: 'Singular subject takes "doesn\'t" in simple present negative.', difficulty: 'Easy' },

    // ==============================================================================
    // --- MEDIUM ---
    // ==============================================================================
    { question: 'Either my mother or my father ___ coming to the meeting.', options: ['is', 'are', 'am', 'be'], correctAnswer: 'is', explanation: 'With "either...or", the verb agrees with the subject closer to it ("my father").', difficulty: 'Medium' },
    { question: 'The team ___ celebrating their victory.', options: ['is', 'are', 'am', 'be'], correctAnswer: 'is', explanation: 'A collective noun ("team") is treated as a singular unit here.', difficulty: 'Medium' },
    { question: 'Everyone ___ to be respected.', options: ['wants', 'want', 'are wanting', 'is wanting'], correctAnswer: 'wants', explanation: 'Indefinite pronouns like "everyone" are singular.', difficulty: 'Medium' },
    { question: 'One of the books ___ missing.', options: ['is', 'are', 'am', 'be'], correctAnswer: 'is', explanation: 'The subject is "One," which is singular.', difficulty: 'Medium' },
    { question: 'Physics ___ my favorite subject.', options: ['is', 'are', 'were', 'be'], correctAnswer: 'is', explanation: 'Subjects ending in -s (Physics, Mathematics) are singular.', difficulty: 'Medium' },
    { question: 'Each of the students ___ a textbook.', options: ['has', 'have', 'having', 'are having'], correctAnswer: 'has', explanation: '"Each" is always singular.', difficulty: 'Medium' },
    { question: 'Nobody ___ the answer to that question.', options: ['knows', 'know', 'knowing', 'known'], correctAnswer: 'knows', explanation: '"Nobody" is a singular indefinite pronoun.', difficulty: 'Medium' },
    { question: 'The list of items ___ on the desk.', options: ['is', 'are', 'were', 'have'], correctAnswer: 'is', explanation: 'The subject is "list" (singular), not "items".', difficulty: 'Medium' },
    { question: 'Swimming in the ocean ___ dangerous.', options: ['is', 'are', 'am', 'be'], correctAnswer: 'is', explanation: 'Gerunds (verb + -ing) used as subjects are singular.', difficulty: 'Medium' },
    { question: 'The scissors ___ on the table.', options: ['are', 'is', 'was', 'has'], correctAnswer: 'are', explanation: 'Nouns like "scissors," "glasses," and "pants" are always plural.', difficulty: 'Medium' },
    { question: 'A pair of scissors ___ on the table.', options: ['is', 'are', 'were', 'have'], correctAnswer: 'is', explanation: 'When "pair" is the subject, it is singular.', difficulty: 'Medium' },
    { question: 'Neither he nor his friends ___ going.', options: ['are', 'is', 'was', 'has'], correctAnswer: 'are', explanation: 'With "neither...nor", verb agrees with the closer subject ("friends" = plural).', difficulty: 'Medium' },
    { question: 'The jury ___ finally reached a verdict.', options: ['has', 'have', 'are', 'were'], correctAnswer: 'has', explanation: 'Collective nouns acting as a single unit take a singular verb.', difficulty: 'Medium' },
    { question: 'Somebody ___ left their umbrella behind.', options: ['has', 'have', 'are', 'were'], correctAnswer: 'has', explanation: '"Somebody" is singular.', difficulty: 'Medium' },
    { question: 'All of the pie ___ eaten.', options: ['was', 'were', 'are', 'have'], correctAnswer: 'was', explanation: '"Pie" is singular/uncountable here, so "All of it" is singular.', difficulty: 'Medium' },
    { question: 'All of the apples ___ eaten.', options: ['were', 'was', 'is', 'has'], correctAnswer: 'were', explanation: '"Apples" is plural, so "All of them" is plural.', difficulty: 'Medium' },

    // ==============================================================================
    // --- HARD ---
    // ==============================================================================
    { question: 'Neither of the students ___ the answer.', options: ['knows', 'know', 'are knowing', 'is knowing'], correctAnswer: 'knows', explanation: '"Neither" is a singular pronoun and takes a singular verb.', difficulty: 'Hard' },
    { question: 'The news ___ on at 6 PM.', options: ['is', 'are', 'am', 'be'], correctAnswer: 'is', explanation: '"News" is an uncountable noun and is treated as singular.', difficulty: 'Hard' },
    { question: 'The number of students in the class ___ limited to twenty.', options: ['is', 'are', 'am', 'be'], correctAnswer: 'is', explanation: '"The number" is singular (referring to the count).', difficulty: 'Hard' },
    { question: 'A number of students ___ late for the class.', options: ['were', 'was', 'is', 'be'], correctAnswer: 'were', explanation: '"A number of" means "many" and is plural.', difficulty: 'Hard' },
    { question: 'The police ___ investigating the case.', options: ['are', 'is', 'am', 'be'], correctAnswer: 'are', explanation: '"Police" is a plural noun.', difficulty: 'Hard' },
    { question: 'Fifty dollars ___ a lot of money.', options: ['is', 'are', 'am', 'be'], correctAnswer: 'is', explanation: 'Expressions of money, time, and distance are treated as singular.', difficulty: 'Hard' },
    { question: 'The man with all the birds ___ on my street.', options: ['lives', 'live', 'are living', 'is living'], correctAnswer: 'lives', explanation: 'The subject is "The man" (singular), not "birds".', difficulty: 'Hard' },
    { question: 'Bread and butter ___ his usual breakfast.', options: ['is', 'are', 'were', 'be'], correctAnswer: 'is', explanation: 'Compound subjects that refer to a single idea (bread and butter) take a singular verb.', difficulty: 'Hard' },
    { question: 'Neither the teacher nor the students ___ in the classroom.', options: ['were', 'was', 'is', 'has'], correctAnswer: 'were', explanation: 'With "neither...nor", the verb agrees with the closer subject (students = plural).', difficulty: 'Hard' },
    { question: 'Measles ___ a contagious disease.', options: ['is', 'are', 'were', 'have'], correctAnswer: 'is', explanation: 'Diseases ending in -s (measles, mumps) are singular.', difficulty: 'Hard' },
    { question: 'Ten kilometers ___ a long way to walk.', options: ['is', 'are', 'were', 'have'], correctAnswer: 'is', explanation: 'Distance is treated as a singular unit.', difficulty: 'Hard' },
    { question: 'More than one student ___ tried this.', options: ['has', 'have', 'are', 'were'], correctAnswer: 'has', explanation: '"More than one" is followed by a singular noun and singular verb, despite the meaning.', difficulty: 'Hard' },
    { question: 'My family ___ from different parts of the country.', options: ['come', 'comes', 'coming', 'is coming'], correctAnswer: 'come', explanation: 'When referring to the individuals in the group, collective nouns can be plural. (British English often treats "family" as plural; US usually singular unless emphasized). Here "come" fits best for individuals.', difficulty: 'Hard' },
    { question: 'Three-quarters of the cake ___ gone.', options: ['is', 'are', 'were', 'have'], correctAnswer: 'is', explanation: 'Fractions agree with the noun they modify ("cake" is singular).', difficulty: 'Hard' },
    { question: 'Three-quarters of the students ___ gone.', options: ['are', 'is', 'was', 'has'], correctAnswer: 'are', explanation: 'Fractions agree with the noun they modify ("students" is plural).', difficulty: 'Hard' },
    { question: 'Every man, woman, and child ___ protected.', options: ['is', 'are', 'were', 'have'], correctAnswer: 'is', explanation: '"Every" makes the entire subject singular, no matter how many nouns follow.', difficulty: 'Hard' },

    // ==============================================================================
    // --- EXAM ---
    // ==============================================================================
    { question: 'The committee ___ divided on the issue.', options: ['are', 'is', 'was', 'has'], correctAnswer: 'are', explanation: 'Collective nouns take a plural verb when the members are acting individually or disagreeing.', difficulty: 'Exam' },
    { question: 'The teacher, as well as the students, ___ attending the assembly.', options: ['is', 'are', 'were', 'have'], correctAnswer: 'is', explanation: 'Phrases like "as well as", "together with", "along with" do not make the subject plural. The verb agrees with the first subject ("The teacher").', difficulty: 'Exam' },
    { question: 'He is one of the students who ___ hard.', options: ['study', 'studies', 'is studying', 'studying'], correctAnswer: 'study', explanation: 'In "one of the [plural noun] who...", the relative pronoun "who" refers to the plural noun ("students"). Therefore, the verb is plural.', difficulty: 'Exam' },
    { question: 'He is the only one of the students who ___ hard.', options: ['studies', 'study', 'are studying', 'have studied'], correctAnswer: 'studies', explanation: 'In "the only one of the [plural noun] who...", "who" refers to "one". Therefore, the verb is singular.', difficulty: 'Exam' },
    { question: 'Not only the players but also the coach ___ upset.', options: ['was', 'were', 'are', 'have'], correctAnswer: 'was', explanation: 'With "not only...but also", the verb agrees with the closer subject ("coach").', difficulty: 'Exam' },
    { question: 'The poor ___ suffering.', options: ['are', 'is', 'was', 'has'], correctAnswer: 'are', explanation: 'Adjectives used as nouns (the poor, the rich, the elderly) are plural.', difficulty: 'Exam' },
    { question: 'Data ___ collected from various sources.', options: ['was', 'were', 'is', 'has'], correctAnswer: 'were', explanation: 'Technically "data" is the plural of "datum" and takes a plural verb in formal/academic contexts, though "is" is common in modern usage. In exams, "were" is safer.', difficulty: 'Exam' },
    { question: 'Statics ___ a difficult course.', options: ['is', 'are', 'were', 'have'], correctAnswer: 'is', explanation: 'Subjects of study ending in -ics are singular.', difficulty: 'Exam' },
    { question: 'Her politics ___ somewhat radical.', options: ['are', 'is', 'was', 'has'], correctAnswer: 'are', explanation: 'When "politics" refers to opinions/beliefs, it is plural. When referring to the science/study, it is singular.', difficulty: 'Exam' },
    { question: 'A large percentage of the population ___ voting.', options: ['is', 'are', 'were', 'have'], correctAnswer: 'is', explanation: '"Percentage" takes a singular verb when referring to a collective mass ("population").', difficulty: 'Exam' },
    { question: 'Neither of the reports ___ accurate.', options: ['is', 'are', 'were', 'have'], correctAnswer: 'is', explanation: '"Neither" is singular.', difficulty: 'Exam' },
    { question: 'There ___ a pen and some papers on the desk.', options: ['is', 'are', 'were', 'have'], correctAnswer: 'is', explanation: 'When a compound subject follows "there", the verb agrees with the first item ("a pen").', difficulty: 'Exam' }
];