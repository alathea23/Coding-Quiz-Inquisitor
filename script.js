var startBtn = document.querySelector("#start-btn")


var QuestionText = document.querySelector("#question");
var answer1text = document.querySelector("#A1")
var answer2text = document.querySelector("#A2")
var answer3text = document.querySelector("#A3")
var answer4text = document.querySelector("#A4")

var questList = ["Commonly Used Data Types do NOT include: ?", "The condition in an if/else statement is enclosed with _____ ?", "Arrays in JavaScript can be used to store ____?", "String values must be enclosed within _____ when being assigned to variables?" ]
var A1List = ["boolean", "curly brackets", "boolean values", "curly brackets"]
var A2List = ["alerts", "parentheses", "numbers", "parentheses"]
var A3List = ["numbers", "straight brackets", "strings", "straight brackets"]
var A4List = ["strings", "quotation marks", "All of the above", "quotation marks"]

function quizGen() {
var question = questionGen();
var answer1 = A1gen();
var answer2 = A2gen();
var answer3 = A3gen();
var answer4 = A4gen();

QuestionText.value = question;
answer1text.value = answer1
answer2text.value = answer2
answer3text.value = answer3
answer4text.value = answer4
};


startBtn.addEventListener("click", quizGen)