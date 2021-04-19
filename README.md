## Project use

This project is a quiz that gives you multiple choice questions.
All the questions and answers are in data.js in the data folder. You can alter the data to make your own questions, have as many questions as you'd like, etc. Just follow along in the pattern that is used to show the question, order of answer, and answerUsingIndex. Of course make sure to follow along correctly since it does matter.

## How to start

Clone the repository, install all necessities in order to run react on your local machine, and run it.
Then just follow the instructions as prompted to start the quiz.

## Why this was built

This project was built when I was learning react and in a previous version I used classes which I then converted to hooks.

## How to alter data to have your own

Entire data of single question is an item in an array called data.

Questions is just a string so change text inside questions for your own.
Answers is an array of 4 answers. Only 4 answers per questions, no more, no less.
AnswerUsingIndex is the correct answer, make sure to put the index of the correct answer not the length number.
