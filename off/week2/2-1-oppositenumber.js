/*
Instructions from your teacher:
Week 2-1 oppositeNumber

Very simple, given a number, find its opposite.

 Examples:

 1: -1
 14: -14
 -34: 34
 But can you do it in 1 line of code and without any conditionals?
 */
var userInput = prompt("Enter a number:");

function opposite(number) {
  return (number*(-1))
}

console.log(opposite(userInput));
