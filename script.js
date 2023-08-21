//establishes base variables
var startBtn = document.getElementById("start-btn")
var nextBtn = document.getElementById("next-btn")
var restartBtn = document.querySelector("#restart")
var userScore = document.querySelector("#user-score")
var timer = document.querySelector("#timer")
var QuestionText = document.querySelector(".question");
var ansButton = document.createElement('button')
var answerText = document.querySelector(".answers");
var highScoresBtn = document.querySelector(".high-scores")
var clearScoresBtn = document.querySelector(".clear-scores")
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
var timeLeft = 30
var score = 0
var highScores = []
let timerId

//getting high scores from local storage
var savedScores = JSON.parse(localStorage.getItem('highScores')) || [{Name: 'user1', pScore: '0'}, {Name: 'user2', pScore: '0'}, {Name: 'user3', pScore: '0'}, {Name: 'user4', pScore: '0'}, {Name: 'user5', pScore: '0'}]
//var shuffledQuestions
console.log(savedScores)

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
  },
  {
    question: "Booleans have ___ possible values",
    answers: [
      { text: "2 ", correct: true },
      { text: "unlimited", correct: false},
    ]
  },
  {
    question: "Which of the following are NOT array methods?",
    answers: [
      { text: "forEach()", correct: false },
      { text: "sort()", correct: false },
      { text: "reverse()", correct: false},
      { text: "listOut()", correct: true},
      { text: "indexOf()", correct: false},
    ]
  }
]

console.log(quizQuestions[questionNum].question)
console.log(quizQuestions[questionNum].answers)
console.log(quizQuestions[questionNum].answers[0])
console.log(quizQuestions[questionNum].answers[0].correct)

function trackHighScores() {
var newname = prompt("Enter Player Name")
//source code for adding new scores to array https://stackoverflow.com/questions/47858518/highscore-in-local-storage-javascript
var result = [{Name: newname, //creating the structure for the new score
  pScore: score}]
  var highScores = []
  var savedScores = JSON.parse(localStorage.getItem('highScores')) || [{Name:'user1', pScore:'0'}, {Name: 'user2', pScore: '0'}, {Name: 'user3', pScore: '0'}, {Name: 'user4', pScore: '0'}, {Name: 'user5', pScore: '0'}];

  console.log(savedScores);
  console.log(highScores);
  console.log(score);
var highScores = savedScores.concat(result); //adding in the latest score
console.log(savedScores);
  highScores.sort((a, b) => b.pScore - a.pScore); //sorts descending
  highScores.slice(0,10); //take 10 highest
  console.log(highScores);
localStorage.setItem('highScores', JSON.stringify(highScores)) //logs updated high scores
var savedScores = JSON.parse(localStorage.getItem('highScores'))
console.log (savedScores)
userScore.innerHTML = "Name: " + newname + " . " + " . " + " . "  + "      Score: " + score
}

//sets up timer
function startTime() {

  var timerId = setInterval(countdown, 1000);

  function countdown() {
    if (timeLeft <= 0) {
      clearTimeout(timerId);
      scoreContainer.classList.remove('hide')
      quizContainerElement.classList.add("hide")
      trackHighScores()
    } else {
      timer.textContent = timeLeft + ' seconds remaining';
      timeLeft--;
    }
  }
}


//sets up logic for questions and answer buttons for quiz gen//

function selectAnswer() {

  //src for turning answers back into an array to call forEach function again https://codedamn.com/news/javascript/how-to-fix-typeerror-foreach-is-not-a-function-in-javascript
  console.log(arrayAns)
  arrayAns.forEach(ansButton => {
    ansButton.removeEventListener('click', selectAnswer);
    if (ansButton.correct) {
      ansButton.classList.add('correct')
      console.log("finding correct")
    } else {
      ansButton.classList.add('incorrect')
    }
  })

  var youreRight = document.querySelector(".btn:focus.correct")
 // var youreWrong = document.querySelector(".btn:focus.incorrect")

  if (youreRight) {
    timeLeft = timeLeft + 5
    score ++
    console.log(score)
    console.log ("adding 5")

  }
  else {
    timeLeft = timeLeft - 5
    console.log ("subtracting 5")
  }

    //  setStatusClass(ansButton, ansButton.correct)
  if (quizQuestions.length > questionNum + 1) {
    nextBtn.classList.remove('hide')
  } else {
    startBtn.innerText = 'Restart'
    startBtn.classList.remove('hide')
  }
}

//generates quiz questions

function showQuestion(quizQuestions) {
  QuestionText.innerText = quizQuestions[questionNum].question
  NumofQues.textContent = ("Question " + (questionNum + 1) + " (of " + quizQuestions.length + ")")
  quizQuestions[questionNum].answers.forEach(answer => {
    console.log(answer.text)
    var ansButton = document.createElement('button')
    ansButton.innerText = answer.text
    ansButton.classList.add('btn')
    ansButton.classList.add('answer')
    //console.log(answer.correct)

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
  arrayAns = Array.from(answerText.children)
};

//goes to the next question in the list
function setNextQuestion() {
  resetState()
  showQuestion(quizQuestions)
};

function quizGen() {
  startScreen.classList.add("hide")
  quizContainerElement.classList.remove("hide")
  scoreContainer.classList.add('hide')
  //shuffledQuestions = questions.sort(() => Math.random() - .5)
  questionNum = 0
  timeLeft = 30
  resetState()
  showQuestion(quizQuestions);
  startTime(timeLeft)
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
  quizGen (timeLeft)
}

//start button listener
startBtn.addEventListener("click", quizGen);


//next button listener & end of quiz logic
nextBtn.addEventListener("click", function nextQ() {
  if (questionNum < (quizQuestions.length - 1)) {
    questionNum++, setNextQuestion()} 
    else if (questionNum >= (quizQuestions.length -1))//
    {
      clearTimeout(timerId);
      quizContainerElement.classList.add("hide")
      scoreContainer.classList.remove("hide")
      trackHighScores ()
    }
});

restartBtn.addEventListener("click", function startAgain() {
 quizGenRestart (timeLeft)
})

  //QuestionText.value = question;
  //answer1text.value = answer1
  //answer2text.value = answer2
  //answer3text.value = answer3
 // answer4text.value = answer4

 //showing high scores in score container
 function showHighScores() {
  //clearing old data
  while (userScore.firstChild) {
   userScore.removeChild(userScore.firstChild)
  }
  scoreContainer.classList.remove('hide')
  var savedScores = JSON.parse(localStorage.getItem('highScores'))
  console.log(savedScores)
//adding in each sorce in the array as a child
  savedScores.forEach(score => {
    playerName = score.Name
    playerScore = score.pScore
    console.log(playerName + playerScore)

    var ScoreText = document.createElement('div')
    ScoreText.innerHTML = "Name: " + playerName + " . " + " . " + " . "  + "      Score: " + playerScore
    userScore.appendChild(ScoreText)

  })
 }

 //adding high score event listener
 highScoresBtn.addEventListener("click", showHighScores)

 //adding clear scores event listener
 clearScoresBtn.addEventListener("click", function clearScores() {
  localStorage.clear("highScores")
 })