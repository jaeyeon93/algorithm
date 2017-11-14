/*
Instructions from your teacher:
Write a function called "convertDoubleSpaceToSingle".

Given a string, "convertDoubleSpaceToSingle" returns the passed in string, with all the double spaces converted to single spaces.

var output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"

Notes:* In order to do this problem, you should be familiar with "String.split", and "Array.join".

Starter Code :
function convertDoubleSpaceToSingle(str) {
  // your code here
}
*/
function convertDoubleSpaceToSingle(str) {
  var split = str.split("  ");
  var result = split.join(" ");
  return result;
}
