const questions = [
   {
       question: "Commonly used datatypes DO NOT include:",
       choices: ["string", "boolean", "alerts", "numbers"],
       answer: 2
   },

   {
       question: "The condition in an if/else statement is enclosed with ____.",
       choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
       answer: 2
   },

   {
       question: "Arrays in javascript can be used to store ___.",
       choices: ["numbers and strings", "booleans", "other arrays", "all of the above"],
       answer: 3
   },

   {
       question: "String values must be enclosed within ___ when being assigned to variables.",
       choices: ["commas", "curly brackets", "quotes", "parenthesis"],
       answer: 2
   },

   {
       question: "A very useful tool used during development and debugging for printing content to the debugger is:",
       choices: ["Javascript", "terminal/bash", "for loops", "console.log"],
       answer: 3
   }
];

var highScore = document.getElementById("high-scores");
var questionEl = document.getElementById("questions");
var startButton = document.getElementById("start-button");
var beginEl = document.getElementById("start");
var questionChoice = document.getElementById("question-choice");
var questionAns1 = document.getElementById("choice-1");
var questionAns2 = document.getElementById("choice-2");
var questionAns3 = document.getElementById("choice-3");
var questionAns4 = document.getElementById("choice-4");
var currentQuestion = 0
var score = 0;
var answerEl = document.getElementById("answer");
var timeLeft = 75;

startButton.addEventListener("click", function(event){
    beginEl.classList.add("hide");
    questionEl.classList.remove("hide");
    updateQuestion()
})

questionAns1.addEventListener("click", function(event){
    console.log("clicked1")
    if (0 === questions[currentQuestion].answer){
        answerEl.textContent = "Correct!"
        score+=1
        currentQuestion+=1
        updateQuestion()
    } else {
        answerEl.textContent = "Wrong!"
        currentQuestion+=1
        updateQuestion()
    }
});
questionAns2.addEventListener("click", function(event){
    console.log("clicked2") 
    if (1 === questions[currentQuestion].answer){
        answerEl.textContent = "Correct!"
        score+=1
        currentQuestion+=1
        updateQuestion()
    } else {
        answerEl.textContent = "Wrong!"
        currentQuestion+=1
    }
});
questionAns3.addEventListener("click", function(event){
    console.log("clicked3") 
    if (2 === questions[currentQuestion].answer){

    }
});
questionAns4.addEventListener("click", function(event){
    console.log("clicked4") 
    if (3 === questions[currentQuestion].answer){

    }
});

function updateQuestion() {
    questionChoice.textContent = questions[currentQuestion].question;
    questionAns1.textContent = questions[currentQuestion].choices[0];
    questionAns2.textContent = questions[currentQuestion].choices[1];
    questionAns3.textContent = questions[currentQuestion].choices[2];
    questionAns4.textContent = questions[currentQuestion].choices[3];
}


