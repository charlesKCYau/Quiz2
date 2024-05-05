// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "They decided to beef up the security for the event.",
    answer: "To make something stronger or more robust.",
    options: [
      "To make something stronger or more robust.",
      "To make someone excited or full of energy.",
      "To become smarter or more intelligent (usually after a mistake is made.)",
      "To make something more exciting or fun."
    ]
  },
    {
    numb: 2,
    question: "The music helped liven up the party",
    answer: "To make something more exciting or fun.",
    options: [
      "To make something stronger or more robust.",
      "To make someone excited or full of energy.",
      "To become smarter or more intelligent (usually after a mistake is made.)",
      "To make something more exciting or fun."
    ]
  },
    {
    numb: 3,
    question: "I got the job! I'm so pumped up!",
    answer: "To make someone excited or full of energy.",
    options: [
      "To make something stronger or more robust.",
      "To make someone excited or full of energy.",
      "To become smarter or more intelligent (usually after a mistake is made.)",
      "To make something more exciting or fun."
    ]
  },
    {
    numb: 4,
    question: "I'm going to smarten up so I don't make the same mistake again.",
    answer: "To become smarter or more intelligent (usually after a mistake is made.)",
    options: [
      "To make something stronger or more robust.",
      "To make someone excited or full of energy.",
      "To become smarter or more intelligent (usually after a mistake is made.)",
      "To make something more exciting or fun."
    ]
  },
  {
    numb: 5,
    question: "She changed her gym routine to toughen herself up for the competition.",
    answer: "To make someone stronger or more able to deal with difficult situations.",
    options: [
      "To make someone stronger or more able to deal with difficult situations.",
      "To talk about someone or something in a very positive way. To promote.",
      "To make small improvements or repairs to something.",
      "To make something more interesting or attractive."
    ]
  },
  {
    numb: 6,
    question: "People always talk up the iPone, but I wasn't impressed.",
    answer: "To talk about someone or something in a very positive way. To promote.",
    options: [
      "To make someone stronger or more able to deal with difficult situations.",
      "To talk about someone or something in a very positive way. To promote.",
      "To make small improvements or repairs to something.",
      "To make something more interesting or attractive."
    ]
  },
  {
    numb: 7,
    question: "They decided to jazz up the room with some brighter colors.",
    answer: "To make something more interesting or attractive.",
    options: [
      "To make someone stronger or more able to deal with difficult situations.",
      "To talk about someone or something in a very positive way. To promote.",
      "To make small improvements or repairs to something.",
      "To make something more interesting or attractive."
    ]
  },
  {
    numb: 8,
    question: "He took his car to the garage to get the paint touched up.",
    answer: "To make small improvements or repairs to something.",
    options: [
      "To make someone stronger or more able to deal with difficult situations.",
      "To talk about someone or something in a very positive way. To promote.",
      "To make small improvements or repairs to something.",
      "To make something more interesting or attractive."
    ]
  },
  {
    numb: 9,
    question: "I have to break up the book into smaller sections.",
    answer: "To divide something into smaller, more manageable parts.",
    options: [
      "To use teeth to break food into smaller parts to swallow easily.",
      "To divide something into equal pieces (in the sense of distribution)",
      "To divide or break (in the sense of two things moving away from each other)",
      "To divide something into smaller, more manageable parts."
    ]
  },
  {
    numb: 10,
    question: "JLo and Ben split up again.",
    answer: "To divide or break (in the sense of two things moving away from each other)",
    options: [
      "To use teeth to break food into smaller parts to swallow easily.",
      "To divide something into equal pieces (in the sense of distribution)",
      "To divide or break (in the sense of two things moving away from each other)",
      "To divide something into smaller, more manageable parts."
    ]
  },
  {
    numb: 11,
    question: "We're going to divide up all the candy, 50/50.",
    answer: "To divide something into equal pieces (in the sense of distribution)",
    options: [
      "To use teeth to break food into smaller parts to swallow easily.",
      "To divide something into equal pieces (in the sense of distribution)",
      "To divide or break (in the sense of two things moving away from each other)",
      "To divide something into smaller, more manageable parts."
    ]
  },
  {
    numb: 12,
    question: "Children need to chew up their food before swallowing.",
    answer: "To use teeth to break food into smaller parts to swallow easily.",
    options: [
      "To use teeth to break food into smaller parts to swallow easily.",
      "To divide something into equal pieces (in the sense of distribution)",
      "To divide or break (in the sense of two things moving away from each other)",
      "To divide something into smaller, more manageable parts."
    ]
  },
  {
    numb: 13,
    question: "Let's cut up the cake!",
    answer: "To physically divide something into smaller pieces.",
    options: [
      "To tear or rip something into pieces.",
      "To divide something into smaller parts by chopping.",
      "To physically divide something into smaller pieces.",
      "To laugh a lot when something is really funny."
    ]
  },
  {
    numb: 14,
    question: "I'll chop up some vegetables for the salad.",
    answer: "To divide something into smaller parts by chopping.",
    options: [
      "To tear or rip something into pieces.",
      "To divide something into smaller parts by chopping.",
      "To physically divide something into smaller pieces.",
      "To laugh a lot when something is really funny."
    ]
  },
  {
    numb: 15,
    question: "They tore up the contract.",
    answer: "To tear or rip something into pieces.",
    options: [
      "To tear or rip something into pieces.",
      "To divide something into smaller parts by chopping.",
      "To physically divide something into smaller pieces.",
      "To laugh a lot when something is really funny."
    ]
  },
  {
    numb: 16,
    question: "I was cracking up during the comedy show.",
    answer: "To laugh a lot when something is really funny.",
    options: [
      "To tear or rip something into pieces.",
      "To divide something into smaller parts by chopping.",
      "To physically divide something into smaller pieces.",
      "To laugh a lot when something is really funny."
    ]
  },
  {
    numb: 17,
    question: "Please, sit up and pay attention.",
    answer: "To fix your posture in your seat, often to be more attentive.",
    options: [
      "To fix your posture in your seat, often to be more attentive.",
      "To remove something that's buried in the ground.",
      "To mature, to be become an adult.",
      "To increase rapidly and suddenly."
    ]
  },
  {
    numb: 18,
    question: "I stopped being afraid of dogs after I grew up.",
    answer: "To mature, to be become an adult.",
    options: [
      "To fix your posture in your seat, often to be more attentive.",
      "To remove something that's buried in the ground.",
      "To mature, to be become an adult.",
      "To increase rapidly and suddenly."
    ]
  },
  {
    numb: 19,
    question: "It's impressive that the sales shot up like that in January.",
    answer: "To increase rapidly and suddenly.",
    options: [
      "To fix your posture in your seat, often to be more attentive.",
      "To remove something that's buried in the ground.",
      "To mature, to be become an adult.",
      "To increase rapidly and suddenly."
    ]
  },
  {
    numb: 20,
    question: "The dog dug up an old toy in the backyard.",
    answer: "To remove something that's buried in the ground.",
    options: [
      "To fix your posture in your seat, often to be more attentive.",
      "To remove something that's buried in the ground.",
      "To mature, to be become an adult.",
      "To increase rapidly and suddenly."
    ]
  },
  {
    numb: 21,
    question: "Some peope are sick so that work is piling up.",
    answer: "To increasingly and continuously accumulate.",
    options: [
      "To be on fire.",
      "To have tears in eyes.",
      "To vomit, to eject the contents of the stomach through the mouth.",
      "To increasingly and continuously accumulate."
    ]
  },
  {
    numb: 22,
    question: "The house is burning up!",
    answer: "To be on fire.",
    options: [
      "To be on fire.",
      "To have tears in eyes.",
      "To vomit, to eject the contents of the stomach through the mouth.",
      "To increasingly and continuously accumulate."
    ]
  },
  {
    numb: 23,
    question: "You're tearing up! Do you want to talk about what's going on?",
    answer: "To have tears in eyes.",
    options: [
      "To be on fire.",
      "To have tears in eyes.",
      "To vomit, to eject the contents of the stomach through the mouth.",
      "To increasingly and continuously accumulate."
    ]
  },
  {
    numb: 24,
    question: "Throw up in the bathroom, not here!",
    answer: "To vomit, to eject the contents of the stomach through the mouth.",
    options: [
      "To be on fire.",
      "To have tears in eyes.",
      "To vomit, to eject the contents of the stomach through the mouth.",
      "To increasingly and continuously accumulate."
    ]
  },
// you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];