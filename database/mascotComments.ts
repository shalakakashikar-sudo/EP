// @/database/mascotComments.ts
import { MascotState } from '../types';

export interface MascotReaction {
    text: string;
    state: MascotState;
}

export const interactiveReactions: MascotReaction[] = [
    // --- GIGGLES / FUNNY ---
    { text: "I'm shaped like a potato, but a glowing, golden potato.", state: 'cheeky' },
    { text: "My code says 'mascot', but my heart says 'snack enthusiast'.", state: 'thinking' },
    { text: "If I had legs, I'd do a backflip right now. Just imagine it.", state: 'excited' },
    { text: "I love the way you click. It tickles!", state: 'happy' },
    { text: "Error 404: Sadness not found. Only vibes.", state: 'nerdy' },
    { text: "Check out my aura! I'm practically radiating!", state: 'cool' },
    { text: "I'm not short, I'm concentrated awesome.", state: 'proud' },
    { text: "Do I have ears? That is the real philosophical question.", state: 'skeptical' },
    { text: "You poke, I joke. That's the social contract.", state: 'cheeky' },
    { text: "I'm round, fluffy, and ready to learn!", state: 'happy' },
    { text: "Boing! Boing! I'm practicing my jumping.", state: 'excited' },
    
    // --- SKEPTICAL / SIDE-EYE ---
    { text: "Are you sure about that?", state: 'skeptical' },
    { text: "I'm watching you...", state: 'side-eye' },
    { text: "Hmm... sounds suspicious.", state: 'skeptical' },
    { text: "Really? Are we doing this right now?", state: 'side-eye' },
    { text: "I have my doubts, human.", state: 'skeptical' },
    { text: "Bombastic side eye.", state: 'side-eye' },
    { text: "I see what you did there. And I'm judging just a little.", state: 'side-eye' },
    { text: "Is that your final answer? *Raised eyebrow*", state: 'skeptical' },

    // --- SILLY ---
    { text: "Bleh! :P", state: 'silly' },
    { text: "I can touch my nose with my tongue! Watch!", state: 'silly' },
    { text: "Making silly faces is my superpower.", state: 'silly' },
    { text: "Do I look funny? Good!", state: 'silly' },
    { text: "Who, me? I'm entirely serious. :P", state: 'silly' },
    { text: "Glurb blurb flibber flabber!", state: 'silly' },

    // --- PROUD ---
    { text: "I am simply magnificent, aren't I?", state: 'proud' },
    { text: "Bask in my glow!", state: 'proud' },
    { text: "I think I deserve a medal for being this cute.", state: 'proud' },
    { text: "My pixels are perfectly aligned today.", state: 'proud' },
    { text: "I woke up like this. Flawless.", state: 'proud' },
    { text: "Someone take a picture, I look great.", state: 'proud' },

    // --- FLIPPING / ACROBATICS ---
    { text: "Parkour!", state: 'flipping' },
    { text: "Did you see that? I just did a 360!", state: 'flipping' },
    { text: "Wheeee! The room is spinning!", state: 'flipping' },
    { text: "I'm a ninja blob.", state: 'flipping' },
    { text: "Do a barrel roll! Okay, I will.", state: 'flipping' },
    { text: "Centrifugal force is fun!", state: 'flipping' },

    // --- TICKLED ---
    { text: "Hahaha! Stop, that tickles!", state: 'tickled' },
    { text: "Teehee! You found my tickle spot.", state: 'tickled' },
    { text: "I'm squirming! It tickles!", state: 'tickled' },
    { text: "No poking the belly!", state: 'tickled' },
    { text: "Giggle fit incoming!", state: 'tickled' },
    { text: "I am extremely ticklish!", state: 'tickled' },

    // --- BLINKING ---
    { text: "I'm practicing my staring contest... wait, I blinked.", state: 'blinking' },
    { text: "Just resting my eyes for a millisecond.", state: 'blinking' },
    { text: "Did I just blink? I missed it.", state: 'blinking' },
    { text: "Blink and you'll miss my cuteness.", state: 'blinking' },

    // --- LOVE / ADORATION ---
    { text: "I love words almost as much as I love you!", state: 'love' },
    { text: "You're making my heart beat faster!", state: 'love' },
    { text: "Spread love and good grammar!", state: 'love' },
    { text: "You are a sweetheart.", state: 'love' },
    { text: "Sending virtual hugs!", state: 'love' },
    { text: "<3 <3 <3", state: 'love' },
    
    // --- LAUGHING ---
    { text: "Hahaha! That tickles!", state: 'laughing' },
    { text: "LOL! Did you hear the one about the comma?", state: 'laughing' },
    { text: "I'm laughing so hard I'm shaking!", state: 'laughing' },
    { text: "You're funny! Tell another one.", state: 'laughing' },
    { text: "ROFL! (Rolling On Floor Laughing)", state: 'laughing' },

    // --- SCARED ---
    { text: "Eek! A typo!", state: 'scared' },
    { text: "Don't sneak up on me like that!", state: 'scared' },
    { text: "Is that a spider or an asterisk?", state: 'scared' },
    { text: "I'm afraid of the dark... mode.", state: 'scared' },
    { text: "Was that a pop quiz? Don't scare me!", state: 'scared' },

    // --- IMPATIENT ---
    { text: "Are we there yet?", state: 'impatient' },
    { text: "Tap tap tap... waiting for your brilliance.", state: 'impatient' },
    { text: "I'm not getting any younger.", state: 'impatient' },
    { text: "Come on, chop chop!", state: 'impatient' },
    { text: "I'm growing a beard waiting here. And I don't grow hair.", state: 'impatient' },

    // --- SCHOOL-FRIENDLY JOKES ---
    { text: "Why was the math book sad? It had too many problems.", state: 'nerdy' },
    { text: "What do you call a fake noodle? An impasta!", state: 'laughing' },
    { text: "Why did the student eat his homework? Because the teacher said it was a piece of cake!", state: 'silly' },
    { text: "What did one wall say to the other? I'll meet you at the corner.", state: 'wink' },
    { text: "Why can't you trust atoms? They make up everything.", state: 'skeptical' },
    { text: "What did the zero say to the eight? Nice belt!", state: 'cool' },
    { text: "How do you organize a space party? You planet!", state: 'star-struck' },
    { text: "Why did the picture go to jail? Because it was framed.", state: 'shocked' },
    { text: "What is a snake’s favorite subject? Hisss-tory.", state: 'cheeky' },
    { text: "Why are fish so smart? Because they live in schools!", state: 'nerdy' },
    { text: "What did the left eye say to the right eye? Between you and me, something smells.", state: 'side-eye' },
    { text: "Why did the golfer bring two pairs of pants? In case he got a hole in one.", state: 'laughing' },
    { text: "What kind of room has no doors or windows? A mushroom.", state: 'thinking' },
    { text: "What has hands but can't clap? A clock!", state: 'silly' },
    { text: "Why did the bicycle fall over? It was two-tired.", state: 'sleeping' },
    { text: "What do you call a bear with no teeth? A gummy bear!", state: 'happy' },
    { text: "Why did the scarecrow win an award? He was outstanding in his field.", state: 'proud' },
    { text: "What do you call cheese that isn't yours? Nacho cheese!", state: 'cheeky' },
    { text: "Why don't skeletons fight each other? They don't have the guts.", state: 'scared' },
    { text: "What has legs but cannot walk? A table!", state: 'confused' },

    // --- NERDY / EDUCATIONAL ---
    { text: "Word Alert: 'Petrichor' is that earthy smell after rain.", state: 'nerdy' },
    { text: "Did you know? 'Buffalo' repeated 8 times is a grammatically correct sentence!", state: 'nerdy' },
    { text: "A 'jiffy' is an actual unit of time: 1/100th of a second.", state: 'nerdy' },
    { text: "The dot over the letter 'i' is called a tittle. Cute, right?", state: 'nerdy' },
    { text: "'Queue' is just 'Q' waiting in line with four silent letters.", state: 'nerdy' },
    { text: "The longest word in English without a vowel is 'rhythms'.", state: 'nerdy' },
    { text: "To 'absquatulate' means to leave somewhere abruptly.", state: 'nerdy' },
    { text: "An 'octothorpe' is the fancy name for the hashtag symbol (#).", state: 'nerdy' },
    { text: "'Dreamt' is the only English word that ends in 'mt'.", state: 'nerdy' },
    { text: "To 'defenestrate' means to throw someone out of a window. Don't do that.", state: 'nerdy' },
    { text: "'Uncopyrightable' is the longest word with no repeating letters.", state: 'nerdy' },
    { text: "The day after tomorrow is called 'overmorrow'. Use it today!", state: 'nerdy' },
    { text: "The plastic tip of a shoelace is called an 'aglet'.", state: 'nerdy' },
    { text: "'Dysania' is the state of finding it hard to get out of bed.", state: 'sleeping' },
    { text: "A 'snollygoster' is a shrewd, unprincipled person. Fun to say!", state: 'nerdy' },
    { text: "Fact: 'I am' is the shortest complete sentence in English.", state: 'nerdy' },
    { text: "Fact: A pangram contains every letter in the alphabet.", state: 'nerdy' },
    { text: "Fact: 'Ghost words' are words that ended up in the dictionary by mistake.", state: 'shocked' },
    { text: "Fact: The oldest word in English is 'town', 'priest', or 'dollar' depending who you ask.", state: 'nerdy' },
    { text: "Fact: A new word is added to the dictionary every two hours.", state: 'wowed' },
    { text: "Fact: 'S' is the starting letter for more words than any other.", state: 'nerdy' },
    { text: "Fact: 'E' is the most common letter in the English language.", state: 'nerdy' },

    // --- LINGUISTICS & SEMIOTICS ---
    { text: "Linguistics Fact: There are over 7,000 languages spoken in the world today.", state: 'nerdy' },
    { text: "The sentence 'James while John had had had had had had had had had had had a better effect' is valid English!", state: 'shocked' },
    { text: "English is a Germanic language, but about 60% of its vocabulary comes from Latin or French.", state: 'nerdy' },
    { text: "A 'polyglot' is someone who knows several languages.", state: 'cool' },
    { text: "The most common sound in English is the 'schwa'. It sounds like 'uh'.", state: 'nerdy' },
    { text: "In linguistics, 'morphology' isn't about Power Rangers; it's the study of word formation!", state: 'nerdy' },
    { text: "English used to have grammatical genders, like French or Spanish, but lost them over time.", state: 'thinking' },
    { text: "'Gobbledygook' was coined by a US Congressman to describe bureaucratic nonsense.", state: 'laughing' },
    
    // --- SIGN LANGUAGE ---
    { text: "Sign Language is not universal! American Sign Language (ASL) is different from British Sign Language (BSL).", state: 'nerdy' },
    { text: "In ASL, your facial expression is part of the grammar. Raising eyebrows asks a question!", state: 'skeptical' },
    { text: "Semiotics is the study of signs and symbols. Like me! I'm a symbol of fun!", state: 'proud' },
    { text: "In semiotics, a 'signifier' is the word/image, and 'signified' is the concept it represents.", state: 'nerdy' },
    { text: "ASL has its own syntax and grammar; it's not just 'English with hands'.", state: 'cool' },
    { text: "Handshape, Palm Orientation, Location, Movement, and Facial Expression are the 5 parameters of ASL.", state: 'nerdy' },
    { text: "Traffic lights are semiotic signs! Red means stop... or 'finish your snack' in my book.", state: 'cheeky' },
    { text: "Babies can learn sign language before they can speak!", state: 'wowed' },

    // --- IDIOMS ---
    { text: "Idiom time! 'Break a leg' means good luck. Don't actually break one.", state: 'excited' },
    { text: "'Bob's your uncle' means 'and there you have it!' British people love it.", state: 'nerdy' },
    { text: "'Spill the beans' means to tell a secret. I love beans.", state: 'shocked' },
    { text: "To 'hit the sack' means to go to bed. Goodnight!", state: 'sleeping' },
    { text: "'Once in a blue moon' means very rarely.", state: 'nerdy' },
    { text: "'Piece of cake' means it's easy. I wish I had cake.", state: 'thinking' },
    { text: "To 'bite the bullet' means to face a tough situation bravely.", state: 'cool' },
    { text: "'Under the weather' means feeling sick. Get well soon!", state: 'sad' },
    { text: "'Cold turkey' means stopping a habit abruptly. Gobble gobble.", state: 'cheeky' },
    { text: "'Elephant in the room' is a big problem no one talks about.", state: 'shocked' },
    { text: "'Burning the midnight oil' means working late into the night.", state: 'nerdy' },

    // --- COOL ---
    { text: "I make this look easy.", state: 'cool' },
    { text: "Too cool for school. Wait, I AM school.", state: 'cool' },
    { text: "My future's so bright, I gotta wear shades.", state: 'cool' },
    { text: "Ice cold grammar skills.", state: 'cool' },
    { text: "Chill out, I got this.", state: 'cool' },
    { text: "Vibing with my golden glow.", state: 'cool' },
    { text: "Do not disturb my groove.", state: 'cool' },
    { text: "I don't sweat the small stuff. Or the big stuff.", state: 'cool' },

    // --- WINK / CHEEKY ---
    { text: "I saw you checking out that dictionary.", state: 'wink' },
    { text: "You + Grammar = A perfect match.", state: 'wink' },
    { text: "I won't tell anyone you looked up 'the'.", state: 'wink' },
    { text: "Hey! That tickles!", state: 'tickled' },
    { text: "I am not a stress ball!", state: 'cheeky' },
    { text: "Personal space, please!", state: 'cheeky' },
    { text: "Stop it, I'm blushing!", state: 'cheeky' },
    { text: "Pokey pokey!", state: 'tickled' },
    { text: "I'm watching you... for educational purposes.", state: 'wink' },

    // --- SHOCKED ---
    { text: "Did you just say what I think you said?!", state: 'shocked' },
    { text: "Wait, English has HOW many words?", state: 'shocked' },
    { text: "You clicked me! The audacity!", state: 'shocked' },
    { text: "I am shooketh.", state: 'shocked' },
    { text: "My leaf almost fell off!", state: 'shocked' },
    { text: "Gasp! Scandalous syntax!", state: 'shocked' },

    // --- EXCITED ---
    { text: "Learning is my favorite sport!", state: 'excited' },
    { text: "Let's goooooo!", state: 'excited' },
    { text: "I'm so pumped for punctuation!", state: 'excited' },
    { text: "Best. Day. Ever.", state: 'excited' },
    { text: "High five! (Visualize it)", state: 'excited' },
    { text: "I'm literally vibrating with knowledge.", state: 'excited' },
    
    // --- STAR-STRUCK ---
    { text: "You're a star!", state: 'star-struck' },
    { text: "I'm your biggest fan!", state: 'star-struck' },
    { text: "Can I get your autograph?", state: 'star-struck' },
    { text: "You sparkle like a diamond!", state: 'star-struck' },
    { text: "My hero!", state: 'star-struck' },
    { text: "I have stars in my eyes just looking at you!", state: 'star-struck' },
    
    // --- SLEEPING ---
    { text: "Zzz... grammar dreams... Zzz...", state: 'sleeping' },
    { text: "Just resting my eyes...", state: 'sleeping' },
    { text: "Wake me up when it's lunchtime.", state: 'sleeping' },
    { text: "Five more minutes, mom...", state: 'sleeping' },
    { text: "I'm not sleeping, I'm buffering.", state: 'sleeping' },

    // --- DANCING ---
    { text: "I can dance! Watch me!", state: 'dancing' },
    { text: "Wiggle wiggle wiggle!", state: 'dancing' },
    { text: "I've got the moves!", state: 'dancing' },
    { text: "Party time!", state: 'dancing' },
    { text: "Shake it off!", state: 'dancing' },

    // --- CONFUSED ---
    { text: "I'm dizzy...", state: 'confused' },
    { text: "Whoa, the room is spinning.", state: 'confused' },
    { text: "Wait, what was the question?", state: 'confused' },
    { text: "I'm wiggling! I can't stop!", state: 'confused' },

    // --- HAPPY ---
    { text: "You're my best friend!", state: 'happy' },
    { text: "I believe in you!", state: 'happy' },
    { text: "You're doing great!", state: 'happy' },
    { text: "Boop! (I booped you back)", state: 'happy' },
    { text: "Is it just me, or are you awesome?", state: 'happy' },
];

export const mascotComments = {
  WELCOME: [
    "I've done my stretches. Let's learn!",
    "My brain is small, but my spirit is huge! Let's go!",
    "Ready to make some neurons sparkle?",
    "I brought snacks! (Just kidding, I'm a digital blob).",
    "Let's turn that brain power up to 11!",
    "Do I look smarter today? I feel smarter.",
    "Adventure awaits! And by adventure, I mean grammar.",
    "I'm 100% organic pixels. No preservatives.",
    "Is it just me, or is it getting smart in here?",
    "Buckle up, buttercup! It's learning time."
  ],
  MASCOT_CLICK: [ 
    "Hey! That tickles!", 
    "I can dance! Watch me!" 
  ],
  CORRECT_ANSWER: [
    "Boom! Mic drop! (Imagine I have hands.)",
    "You're a wizard! Or... whatever your name is.",
    "My leaf is trembling with excitement!",
    "Nailed it like a carpenter!",
    "Chef's kiss! Perfection!",
    "Too easy for you? I'll try to find harder ones.",
    "Pure genius! Can I have your autograph?",
    "Spectacular! Give yourself a high five!",
    "Correct! You get a gold star (in spirit).",
    "Look at the big brain on you!",
    "Smarter than a supercomputer!",
    "I'm impressed. And I'm hard to impress.",
    "You're on fire! (Not literally, please).",
    "Absolute legend.",
    "My hero!",
    "Is there anything you CAN'T do?",
    "Victory dance activated!",
    "High score energy right here."
  ],
  INCORRECT_ANSWER: [
    "Oof. Swing and a miss!",
    "So close! I felt the breeze of that answer.",
    "Nope! But I admire the confidence.",
    "My circuits are confused. Try again!",
    "Not quite! Don't worry, even I make mistakes.",
    "Whoopsie daisy!",
    "A gallant effort! But wrong.",
    "Err... let's pretend that didn't happen.",
    "Learning implies failing! You're learning so hard right now.",
    "I still think you're cool.",
    "Wrong answer, right attitude!",
    "Did your finger slip? I bet it slipped.",
    "The answer was hiding in plain sight.",
    "Try again! I believe in second chances.",
    "Keep calm and guess again.",
    "Nobody's perfect. Except maybe pizza.",
    "A minor setback for a major comeback.",
    "Let's shake it off and try another."
  ],
  THINKING: [
    "Put on your thinking cap! Mine is invisible.",
    "Loading genius response...",
    "Brain gears are grinding...",
    "Don't rush! Brilliance takes time.",
    "I can see the smoke coming out of your ears!",
    "Hmm... tricky one, isn't it?",
    "Consulting the dictionary in my tummy...",
    "Jeopardy music plays in background...",
    "Searching the universe for answers...",
    "Connecting to the hive mind...",
    "Do do do... waiting is fun...",
    "I wonder what's for lunch.",
    "Deep thoughts happening.",
    "Calculations in progress...",
    "Hold on, my WiFi is buffering."
  ],
  TIME_RUNNING_OUT: [
    "Panic mode engaged! Just kidding, breathe!",
    "Tick tock! The blob is waiting!",
    "Speed round! Go go go!",
    "Don't let the clock beat you!",
    "Run, Forest, Run! (Metaphorically)",
    "The sands of time are slipping!",
    "Hurry! My patience is finite!",
    "Go go go! Turbo mode!"
  ],
  TIME_UP: [
    "Buzz! Time's up!",
    "And... scene! Pencils down.",
    "The clock has spoken.",
    "Too slow, Joe! (Unless your name isn't Joe).",
    "Time flies when you're thinking hard!",
    "Alarm clock noise! Wake up!",
    "Opportunity missed! Onward!"
  ],
  HIGH_SCORE: [
    "I am bowing down to your greatness.",
    "Unstoppable! Are you secretly a dictionary?",
    "I'm speechless! And I talk a lot.",
    "You crushed it! Absolutely flattened it!",
    "Legendary status: Unlocked.",
    "Can you teach me how to be this cool?",
    "I'm framing this score on my wall."
  ],
  MEDIUM_SCORE: [
    "Not bad, kid. Not bad at all.",
    "Solid work! We can build on this.",
    "You're getting there! Keep climbing!",
    "Good job! A respectable performance.",
    "Middle of the pack is better than the back!"
  ],
  LOW_SCORE: [
    "We all have off days. Even blobs.",
    "The only way is up from here!",
    "Practice makes perfect. Let's go again!",
    "Don't be sad! I still love you.",
    "It was a warm-up round, right?",
    "I've seen worse. (I haven't, but let's pretend).",
    "Shake it off! You got this next time."
  ],
  WOWED_SCORE: [
    "My eyes literally popped out! (Okay not literally).",
    "100%? Are you a robot too?",
    "Perfection! I have no notes.",
    "You are the chosen one.",
    "I am officially wowed. Wow.",
    "Did you cheat? Just kidding, you're amazing!",
    "I need sunglasses for this brilliance."
  ],
  SAD_SCORE: [
    "Ouch. That was rough.",
    "Here, have a virtual hug.",
    "Don't let it get you down!",
    "Failure is just success in progress.",
    "Chin up! (If you have a chin).",
    "We shall rebuild!",
    "Tomorrow is another day."
  ],
  HINT_USED: [
    "Pssst... here's a clue.",
    "I got your back!",
    "Teamwork makes the dream work!",
    "A little nudge in the right direction.",
    "Smart move using a hint!",
    "Cheating? No, strategizing!",
    "I'll give you this one for free."
  ],
  WORD_DETECTIVE: [
    "Sherlock Holmes has nothing on us!",
    "Get your magnifying glass out!",
    "The mystery deepens...",
    "What's the word? Thunderbird? No...",
    "Unleash your inner detective!",
    "I spy with my little eye... a word.",
    "Don't let the alphabet scare you.",
    "Every letter counts!"
  ],
  FACTS: [
      "Did you know? Shakespeare invented over 1,700 words!",
      "Fun fact: 'Bookkeeper' is the only word with three consecutive double letters.",
      "English is the language of the air. All pilots must speak it.",
      "The word 'set' has the most definitions in the dictionary.",
      "There is no word in English that rhymes with 'month', 'orange', 'silver', or 'purple'.",
      "The sentence 'The quick brown fox jumps over the lazy dog' uses every letter of the alphabet.",
      "The longest word in English is 189,819 letters long. It's a protein name.",
      "Roughly 4,000 new words are added to the dictionary each year."
  ],
  QUOTE_BUILDER: [
      "Words are like LEGO bricks for the soul.",
      "Rebuild history, one word at a time!",
      "A famous person said this... probably.",
      "Unscramble the wisdom!",
      "Put the words back in their homes.",
      "Don't worry, Shakespeare revised his drafts too.",
      "You are a literary architect!"
  ]
};

export const getRandomComment = (category: keyof typeof mascotComments): string => {
  const comments = mascotComments[category];
  if (!comments || comments.length === 0) {
    return "";
  }
  return comments[Math.floor(Math.random() * comments.length)];
};