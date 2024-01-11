const express = require("express");
const questionsRoute = express.Router();
const {
  startQuiz,
  answerQuiz,
  displayScore,
} = require("../controllers/questions-controller.js");

// Start the quizz and display the first question
questionsRoute.get("/", startQuiz);
// Submit an answer to the current question and move to the next question.
questionsRoute.post("/", answerQuiz);
// Display the user’s final score at the end of the quiz.
questionsRoute.get("/score", displayScore);

module.exports = questionsRoute;
