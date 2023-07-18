//establishes base variables
var startBtn = document.getElementByID('start-btn')
var nextBtn = document.getElementByID("next-btn")
var restartBtn = document.getElementByID("restart")
var highScore = document.getElementByID("user-score")
var timer = document.getElementByID("timer")
var QuestionText = document.getElementByID("question");
var answerText = document.getElementByID("answers");
var answer1text = document.getElementByID("A1")
var answer2text = document.getElementByID("A2")
var answer3text = document.getElementByID("A3")
var answer4text = document.getElementByID("A4")
const quizContainerElement = document.getElementById('quiz-container')
const questionContainerElement = document.getElementById('question-container')

var questionNum = 0
var testScore = 0

var shuffledQuestions, questionNum


// holds the information for the quiz questions and available answers
var quizQuestions = [
    {
        question: "Commonly Used Data Types do NOT include: ?",
        answers: [
           { text: "boolean", correct: false},
           { text: "alerts", correct: true},
            { text: "numbers", correct: false},
            { text: "strings", correct: false}]
        },
    {
        question: "The condition in an if/else statement is enclosed with _____ ?",
        answers: [
            { text: "curly brackets", correct: true},
            { text: "parentheses", correct: false},
            { text: "straight brackets", correct: false},
            { text: "quotation marks", correct: false},
        ],
    },
    {
        question: "Arrays in JavaScript can be used to store ____??",
        answers: [
            { text: "boolean values", correct: false},
            { text: "numbers", correct: false},
            { text: "strings", correct: false},
            { text: "all of the above", correct: true},
 ] },
    {
        question: "String values must be enclosed within _____ when being assigned to variables?",
        answers: [
            { text:  "curly brackets",  correct: false},
            { text:  "parentheses", correct: false},
            { text:  "straight brackets", correct: false},
            { text:  "quotation marks", correct: false},
  ]  
    }
]

function selectAnswer() {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerText.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > questionNum + 1) {
      nextBtn.classList.remove('hide')
    } else {
      startBtn.innerText = 'Restart'
      startBtn.classList.remove('hide')
    }
  }

//generates quiz questions
  
  function showQuestion(question) {
    QuestionText.innerText = question.question
    question.answers.forEach(answer => {
      const button = document.createElement('button')
      button.innerText = answer.text
      button.classList.add('btn')
      if (answer.correct) {
        button.dataset.correct = answer.correct
      }
      button.addEventListener('click', selectAnswer)
      answerText.appendChild(button)
    })
  }

  function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[questionNum])
  }

function quizGen() {
    startBtn.classList.add("hide")
    QuestionText.classList.remove("hide")
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    questionNum = 0
    setNextQuestion()
    showQuestion()
}

//goes to the next question in the list

    QuestionText.value = question;
    answer1text.value = answer1
    answer2text.value = answer2
    answer3text.value = answer3
    answer4text.value = answer4


  function resetState() {
    clearStatusClass(document.body)
    nextBtn.classList.add('hide')
    while (answerText.firstChild) {
      answerText.removeChild(answerText.firstChild)
    }
  }
  
  function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
      element.classList.add('correct')
    } else {
      element.classList.add('wrong')
    }
  }
  
  function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
  }

  startBtn.addEventListener("click", quizGen())
  nextBtn.addEventListener("click", () => {
      questionNum++, setNextQuestions ()
  })
  restartBtn.addEventListener("click", quizGen())
  
