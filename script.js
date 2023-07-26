//establishes base variables
var startBtn = document.getElementById("start-btn")
var nextBtn = document.querySelector("next-btn")
var restartBtn = document.querySelector("restart")
var highScore = document.querySelector("user-score")
var timer = document.querySelector("timer")
var QuestionText = document.querySelector("question");
var answerText = document.querySelector("answer");
var answer1text = document.querySelector("A1")
var answer2text = document.querySelector("A2")
var answer3text = document.querySelector("A3")
var answer4text = document.querySelector("A4")
const quizContainerElement = document.querySelector('.quiz-container')
const questionContainerElement = document.querySelector('.questions-container')
var questionNum = 0
var testScore = 0
var shuffledQuestions

//goes to the next question in the list


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

  //sets up logic for correct and incorrect answers to show user if they got the correct answer//

  function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
  }

  function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
      element.classList.add('correct')
    } else {
      element.classList.add('wrong')
    }
  }

  //sets up logic for questions and answer buttons for quiz gen//
function selectAnswer() {
    setStatusClass(document.body, correct)
    quizQuestions.from(answerText.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
    })
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct

    if (shuffledQuestions.length > questionNum + 1) {
      nextBtn.classList.remove('hide')
    } else {
      startBtn.innerText = 'Restart'
      startBtn.classList.remove('hide')
    }
  }

//generates quiz questions
  
  function showQuestion(quizQuestions) {
    QuestionText.contents = quizQuestions.question
    quizQuestions.answers.forEach(answer => {
      const button = document.createElement('button')
      button.innerText = answer.text
      button.classList.add('btn')
      if (answer.correct) {
        button.dataset.correct = answer.correct
      }
      button.addEventListener('click', selectAnswer)
      answerText.appendChild(button)
    })
  };

  function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[questionNum])
  };

function quizGen() {
    startBtn.classList.add("hide")
    quizContainerElement.classList.remove("hide")
    //shuffledQuestions = questions.sort(() => Math.random() - .5)
    questionNum = 0
    showQuestion();
    selectAnswer();
    setNextQuestion()
};

  function resetState() {
    clearStatusClass(document.body)
    nextBtn.classList.add('hide')
    while (answerText.firstChild) {
      answerText.removeChild(answerText.firstChild)
    }
  };
  

  startBtn.addEventListener("click", quizGen);
  nextBtn.addEventListener("click", () => {
      questionNum++, setNextQuestion()
  });
  restartBtn.addEventListener("click", quizGen)
  
  QuestionText.value = question;
  answer1text.value = answer1
  answer2text.value = answer2
  answer3text.value = answer3
  answer4text.value = answer4

