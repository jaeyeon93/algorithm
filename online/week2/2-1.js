/*
Instructions from your teacher:
Write a function called "joinArrays".

Given two arrays, "joinArrays" returns an array with the elements of "arr1" in order, followed by the elementsin "arr2".

var output = joinArrays([1, 2], [3, 4]);
console.log(output); // --> [1, 2, 3, 4]

You should be familiar with the "concat" method for this problem.

Starter Code :
function joinArrays(arr1, arr2) {
  // your code here
}
*/
function joinArrays(arr1, arr2) {
  var result = arr1.concat(arr2);
  return result;
}
