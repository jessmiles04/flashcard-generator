var inquirer = require('inquirer');

// Import flash card layout
var flashCards = require('./basiccard.js');
// question list
var questions = require('./questions.js').questions;

// Variable that holds the asked question
var closeQuestions = [];

// Builds the question list from the close questions
for (var i = 0; i < questions.length; i++) {
    var q = new flashCards.ClozeCard(questions[i].full, questions[i].cloze);
    closeQuestions.push(q);
}

var currentQuestion = 0;
// How many questions the user has gotten right or wrong (stolen from previous trivia)
var correctAnswer = 0;
var wrongAnswer = 0;

// prompt for questions to be asked, hopefully advancing the way they are supposed to....
function question1() {
    inquirer.prompt([
        {
            type: 'input',
            message: closeQuestions[currentQuestion].partial + '\nAnswer: ',
            name: 'userGuess'
        }
    ]).then(function (answers) {
        console.log('\n');

        // fingers crossed this actually keeps track of correct answers...
        if (answers.userGuess.toLowerCase() === closeQuestions[currentQuestion].cloze.toLowerCase()) {
            console.log('Correct!');
            correctAnswer++;
        } else {
            console.log('Nope!');
            wrongAnswer++;
        }

        // Show the correct answer
        console.log(closeQuestions[currentQuestion].full);
        console.log('-------------------------------------');

        // Advance to the next question (please please work)
        if (currentQuestion < closeQuestions.length - 1) {
            currentQuestion++;
            question1();
        } else {
            console.log("We're all stories in the end, let's make it a good one.");
            console.log("Correct Answers: " + correctAnswer);
            console.log("Wrong Answers: " + wrongAnswer);

            console.log('-------------------------------------');
        }
    })
}

// Begin the quiz!
question1();
