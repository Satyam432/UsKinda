/**
 * PERSONALIZE HERE before sharing. All intimate story copy lives in this file.
 * Leave recipientName empty if you want the story to read naturally without a name.
 * Set insideJokeEnabled to false to remove the bonus intermission completely.
 */
export const story = {
  recipientName: 'Varshini',
  senderName: 'Satyam',
  websiteTitle: 'The Universe Has Some Explaining To Do ✨',
  subtitle: 'A tiny investigation into how you became my favorite person to talk to.',
  openingMessage: [
    'Okay, so...',
    'I made you something.',
    'Before you judge my questionable life choices...',
    "...just know this took more effort than pretending I wasn’t waiting for your text. 🙃",
  ],
  chapterTitles: [
    'The Mysterious Beginning',
    'Exhibit A: The Universe Is Acting Suspiciously.',
    'Exhibit B: The Plot Twist Nobody Saw Coming.',
    'Exhibit C: I Think You’ve Caused a Bug.',
    'Exhibit D: A Very Serious Scientific Investigation.',
    'Exhibit E: Our Love Language Is Questionable.',
    "BREAKING NEWS: The Real Reason I’m Here.",
    'The Part Where I Get Serious',
    'So... About Our Next Chapter.',
  ],
  chapterText: {
    universe: ['Out of approximately 8 billion people...', 'The universe somehow decided...', '...that you and I should cross paths.'],
    plot: [
      ['Two people started talking.', 'Nothing suspicious. Completely normal.'],
      ['Then the conversations got longer.', 'Apparently, neither of us understands how to say goodnight.'],
      ['And somewhere along the way...', 'You became someone I genuinely look forward to talking to.'],
    ],
    terminal: [
      '[INFO] Normal life functioning successfully.',
      '[INFO] Met someone interesting.',
      '[WARN] Checking phone suspiciously often.',
      '[WARN] Random smiling detected.',
      '[ERROR] One particular person occupying too much memory.',
      '[CRITICAL] Catching feelings may be in progress.',
    ],
  },
  roast: {
    subtitle: 'Some couples exchange poetry. We exchange insults and call it bonding.',
    exchanges: [
      ["You’re annoying.", 'And yet, here you are.'],
      ['Can you be normal for five minutes?', "That wasn’t included in the package."],
      ['Why do you bully me so much?', 'Because apparently being nice to you 24/7 would be too obvious.'],
    ],
    bullyResult: ['Wow. Not even a moment of hesitation.', 'Your enthusiasm for bullying me has been officially documented.'],
    niceResult: ['ERROR: Unexpected kindness detected.', 'Are you feeling okay? Should I call someone?', 'To be fair, I’d probably miss our ridiculous banter if it ever stopped.'],
    ending: ['I think my favorite part is that I can be completely ridiculous around you.', 'And somehow, instead of running away...', 'You become even more ridiculous.'],
  },
  hyrox: {
    subtitle: 'An exclusive investigation into my suspiciously specific intentions.',
    file: { candidate: 'You', position: 'Lifetime HYROX Doubles Partner', recruiter: 'Satyam', status: 'Extremely Promising' },
    requirements: [
      'Must tolerate ridiculous jokes.',
      'Must survive mutual roasting.',
      'Must be willing to hear about fitness.',
      "Must understand that ‘one more call’ never means one more minute.",
      'Must consider running and suffering voluntarily a bonding activity.',
    ],
    responsibilities: ['Run alongside me.', 'Complain about burpees together.', 'Question our life choices during sled pushes.', 'Encourage each other when things get difficult.', 'Bully me when I’m being dramatic.', 'Laugh about the experience afterward.'],
    benefits: ['Unlimited terrible jokes.', 'One extremely enthusiastic teammate.', 'Occasional emotional support.', 'Someone who genuinely enjoys your company.', 'A lifetime supply of unnecessary competition.'],
    confession: ['Okay, fine.', 'Maybe the HYROX thing is just an excuse.', 'Maybe I just really like the idea of having you beside me.'],
  },
  romanticMessage: [
    'I know we spend a ridiculous amount of time teasing each other.',
    'And I know I keep saying that the whole reason I’m here is because I need a HYROX partner.',
    'But somewhere between all the bullying, the laughter, and our conversations...',
    'I realized something.',
    'I feel more alive when I’m talking to you.',
    'Not in some dramatic, movie-dialogue kind of way.',
    'It’s just that even ordinary days feel a little more lively.',
    'I laugh more. I smile more. And I get to be my completely ridiculous self around you.',
    'And I really, really like that.',
    'So yes, I still need a HYROX partner.',
    'But more than that...',
    'I’m really happy it’s you I’m getting to know.',
  ],
  finalMessage: [
    'I don’t have a crystal ball.',
    'But I have a feeling there are a lot more conversations, inside jokes, adventures, and ridiculously long calls waiting for us.',
    'And I’d really like that.',
  ],
  finalPostscript: 'P.S. I still need that HYROX partner, by the way.',
  finalSecret: [
    'I could probably find a HYROX partner anywhere.',
    'But finding someone I genuinely enjoy talking to, laughing with, and being completely stupid around?',
    'That’s a little harder.',
    'And I’m really glad I found you.',
    'Even if you bully me for the rest of this conversation.',
  ],
  insideJokeEnabled: true,
  insideJokeTitle: 'The Incident We Shall Not Discuss.',
  insideJokeText: 'Some stories are too ridiculous to explain. Fortunately, we both know exactly what happened. 😂',
  endingSignature: '— Satyam ❤️',
  soundEnabledByDefault: false,
} as const

export const forRecipient = (text: string) => story.recipientName ? text.replaceAll('{name}', story.recipientName) : text.replaceAll('{name}, ', '').replaceAll('{name}', '')
