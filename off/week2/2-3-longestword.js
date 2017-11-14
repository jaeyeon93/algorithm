/*
Instructions from your teacher:
Week 2-3 longestWord

 Using the JavaScript language, have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string.
 If there are two or more words that are the same length, return the first word from the string with that length.       Assume sen will not be empty.

Example 1: longestWord("I love codestates"); // => "codestates"
Example 2: longestWord("Teamwork skills will take you anywhere"); // => "Teamwork"
*/
var userInput = prompt("Enter a String:");

var longestWord = function(sen) {
  var split = sen.split(" ");
  var second = [];
  for (var s of split){
    var len = s.length;
    second.push(len);
  }
  var max = Math.max(...second);
  var result = second.indexOf(max);
  return (split[result]);
}

console.log(longestWord(userInput));
