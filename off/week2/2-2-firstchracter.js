/*

Instructions from your teacher:
Week 2-2 firstCharacter

 In this exercise, a string is passed to a method and a new string has to be returned with the first character of each word in the string

Example 1: makeString("The community at Code States might be the biggest asset"); => "TcaCSmbtba"

 */
var userInput = prompt("Enter a number:");

var makeString = function(s) {
  var second = [];
  var split = userInput.split(" ");
  for (var k of split){
    var first = k[0];
    second.push(first);
  }
  var result = second.join("");
  return result
};

console.log(makeString(userInput));
