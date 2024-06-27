const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = '';
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = '';


//TODO: Variables for Part 2
let questions = [
  "Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? "
];
let correctAnswers = [
  "Sally Ride",
  "true",
  "40",
  "Trajectory",
  "3"
];
let candidateAnswers = [];


function askForName() {
candidateName = prompt("Please enter your name:");
}
console.log(`Welcome to the quiz ${candidateName}!`);

// TODO 1.2b: programmatically asks each question in the array and stores the user’s responses. //
function askQuestion() {
  
  for (let i = 0; i < questions.length; i++) {
    candidateAnswers[i] = input.question(questions[i] + " ");
  }
}

  // TODO 1.2c: template literal that displays each of the candidate’s responses in addition to the corresponding correct answers. // 
function gradeQuiz(candidateAnswers) {

  let CorrectAnswers = 0;

  for (let i = 0; i < candidateAnswers.length; i++) {
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      CorrectAnswers++;
    } 
    console.log(`Your answer: ${candidateAnswers[i]} \nCorrect answer: ${correctAnswers[i]}\n`);
  }

 //TODO 3.2 use this variable to calculate the candidates score.
  let grade = (CorrectAnswers / questions.length) * 100;
  console.log(`>>> Overall Grade: ${grade}% (${CorrectAnswers} of ${questions.length} responses correct) <<<`);
  console.log(`>>> Status: ${grade >= 80 ? "PASS" : "FAIL"} <<<`); 

  return grade;
}

function runProgram() {
  askForName();
  console.log(`Hello, ${candidateName}! Welcome to the quiz.`);
  console.log();
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};