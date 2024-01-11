const { triviaQuestions } = require("../config/db.js");
let { userScore, questionCounter } = require("../config/db.js");

const startQuiz = (req, res) => {
    questionCounter = 0
  res.json(triviaQuestions[questionCounter].question);
};

const answerQuiz = (req, res) => {
  const { answer } = req.body;
  const currentQuestion = triviaQuestions[questionCounter];
  
  if((currentQuestion.answer.toLowerCase() != answer.toLowerCase()) && (questionCounter == triviaQuestions.length-1)){
    res.json('Incorrect answer, now the quiz is finished, hope you enjoyed it, go to /quiz/score to get your Score')
    }else if((currentQuestion.answer.toLowerCase() == answer.toLowerCase()) && (questionCounter == triviaQuestions.length-1)){
    userScore++
    res.json('Correct answer, now the quiz is finished, hope you enjoyed it, go to /quiz/score to get your Score')
    }else if (currentQuestion.answer.toLowerCase() != answer.toLowerCase()) {
    questionCounter++;
    res.json(`your answer "${answer}" is incorrect , next question : ${triviaQuestions[questionCounter].question}`);
    }else{
    questionCounter++;
    userScore++;
    res.json(`your answer "${answer}" is correct , next question : ${triviaQuestions[questionCounter].question}`);
  }
};

const displayScore = (req, res) => {
  res.json(`Congrats, your score is ${userScore}`);
};

module.exports = { startQuiz, answerQuiz, displayScore };
