//establishes base variables
var startBtn = document.getElementById("start-btn")
var nextBtn = document.getElementById("next-btn")
var restartBtn = document.querySelector("#restart")
var highScore = document.querySelector("#user-score")
var timer = document.querySelector("#timer")
var QuestionText = document.querySelector(".question");
var ansButton = document.createElement('button')
var answerText = document.querySelector(".answers");
var highScores = document.querySelector(".high-scores")
//var answer1text = document.querySelector("#A1")
//var answer2text = document.querySelector("#A2")
//var answer3text = document.querySelector("#A3")
//var answer4text = document.querySelector("#A4")
const quizContainerElement = document.querySelector('.quiz-container')
const questionContainerElement = document.querySelector('.questions-container')
const scoreContainer = document.querySelector('.score-container')
const startScreen = document.querySelector(".start-screen")
var NumofQues = document.querySelector(".number-of-question")
var questionNum = 0
var testScore = 0
var timeLeft = 30
//var shuffledQuestions


//testing the target for questions text insertion
QuestionText.innerText = "testing"
NumofQues.textContent = "testing"

// holds the information for the quiz questions and available answers
var quizQuestions = [
  {
    question: "Commonly used data types do NOT include ____ ?",
    answers: [
      { text: "Boolean", correct: false },
      { text: "Alerts", correct: true },
      { text: "Numbers", correct: false },
      { text: "Strings", correct: false }]
  },
  {
    question: "The condition in an if/else statement is enclosed with ____ ?",
    answers: [
      { text: "Curly brackets", correct: true },
      { text: "Parentheses", correct: false },
      { text: "Straight brackets", correct: false },
      { text: "Quotation marks", correct: false },
    ],
  },
  {
    question: "Arrays in JavaScript can be used to store ____ ?",
    answers: [
      { text: "Boolean values", correct: false },
      { text: "Numbers", correct: false },
      { text: "Strings", correct: false },
      { text: "All of the above", correct: true },
    ]
  },
  {
    question: "String values must be enclosed within _____ when being assigned to variables?",
    answers: [
      { text: "Curly brackets", correct: false },
      { text: "Parentheses", correct: false },
      { text: "Straight brackets", correct: false },
      { text: "Quotation marks", correct: true },
    ]
  }
]

console.log(quizQuestions[questionNum].question)
console.log(quizQuestions[questionNum].answers)
console.log(quizQuestions[questionNum].answers[0])
console.log(quizQuestions[questionNum].answers[0].correct)
//sets up logic for correct and incorrect answers to show user if they got the correct answer//

//function clearStatusClass(element) {
// element.classList.remove('correct')
// element.classList.remove('incorrect')
//}

//function setStatusClass(element, correct) {
// clearStatusClass(element)
// if (correct) {
//    element.classList.add('correct')
//  } else {
//    element.classList.add('incorrect')
//  }
//}


//sets up timer
function startTime() {

  var timerId = setInterval(countdown, 1000);

  function countdown() {
    if (timeLeft == 0) {
      clearTimeout(timerId);
      scoreContainer.classList.remove('hide')
    } else {
      timer.textContent = timeLeft + ' seconds remaining';
      timeLeft--;
    }
  }
}


//sets up logic for questions and answer buttons for quiz gen//

function selectAnswer() {

  //  setStatusClass(ansButton, correct)
  // const selectedButton = e.target
  // const correct = selectedButton.dataset.correct
  //src for turning answers back into an array to call forEach function again https://codedamn.com/news/javascript/how-to-fix-typeerror-foreach-is-not-a-function-in-javascript
  arrayAns = Array.from(answerText.children)
  console.log(arrayAns)
  arrayAns.forEach(ansButton => {
    ansButton.removeEventListener('click', selectAnswer);
    if (ansButton.correct) {
      ansButton.classList.add('correct')
    } else {
      ansButton.classList.add('incorrect')
    }
    //  setStatusClass(ansButton, ansButton.correct)
  })

  if (ansButton.correct) {
    timeLeft = timeLeft + 5
    console.log ("adding 5")
  }
  else {
    timeLeft = timeLeft - 5
    console.log ("subtracting 5")
  }

  if (quizQuestions.length > questionNum + 1) {
    nextBtn.classList.remove('hide')
  } else {
    startBtn.innerText = 'Restart'
    startBtn.classList.remove('hide')
  }
}

//generates quiz questions

function showQuestion(quizQuestions) {
  startTime()
  QuestionText.innerText = quizQuestions[questionNum].question
  NumofQues.textContent = ("Question " + (questionNum + 1) + " (of " + quizQuestions.length + ")")
  quizQuestions[questionNum].answers.forEach(answer => {
    console.log(answer.text)
    var ansButton = document.createElement('button')
    ansButton.innerText = answer.text
    ansButton.classList.add('btn')
    ansButton.classList.add('answer')
    console.log(answer.correct)

    if (answer.correct) {
      ansButton.correct = true
      console.log("this answer is correct")
      console.log(ansButton.correct)
    }
    else {
      ansButton.correct = false
      console.log(ansButton.correct)
    }
    answerText.appendChild(ansButton)
    ansButton.addEventListener('click', selectAnswer);
  })
};

//goes to the next question in the list
function setNextQuestion() {
  resetState()
  showQuestion(quizQuestions)
};

function quizGen() {
  startScreen.classList.add("hide")
  quizContainerElement.classList.remove("hide")
  //shuffledQuestions = questions.sort(() => Math.random() - .5)
  questionNum = 0
  resetState()
  showQuestion(quizQuestions);
};

function resetState() {
  // clearStatusClass(document.body)
  nextBtn.classList.add('hide')
  while (answerText.firstChild) {
    answerText.removeChild(answerText.firstChild)
  }
};

function quizGenRestart () {
  scoreContainer.classList.add('hide')
  startTime ()
  quizGen ()
}

startBtn.addEventListener("click", quizGen);

nextBtn.addEventListener("click", function nextQ() {
  questionNum++, setNextQuestion()
});

restartBtn.addEventListener("click", quizGenRestart)

  //QuestionText.value = question;
  //answer1text.value = answer1
  //answer2text.value = answer2
  //answer3text.value = answer3
 // answer4text.value = answer4
