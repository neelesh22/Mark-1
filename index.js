var readlineSync = require("readline-sync");

var score = 0;

// data of high score
var highScores = [
  {
    name: "Aniket",
    score: 3,
  },

  {
    name: "Rahul",
    score: 2,
  },
]

// array of objects
var questions = [{
  question: "Where do I live? ",
  answer: "Jaipur"
}, {
  question: "What is my favourite place for vacation? ",
  answer: "Bali"
},
{
  question: "What matters to me? ",
  answer: "Money"
}, {
  question: "What computer game i like most? ",
  answer: "Valorant"
}, {
  question: "What is my Dream car? ",
  answer: "BMW 340i"
}, {
  question: "What phone i want? ",
  answer: "IPHONE 14"
},];

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " to DO YOU KNOW ME?");
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();