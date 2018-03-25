/*
Instructions from your teacher:
Write a function called "removeStringValues".

Given an object, "removeStringValues" removes any properties on the given object whose values are strings.

var obj = {
  name: 'Sam',
  age: 20
}
removeStringValues(obj);
console.log(obj); // { age: 20 }

Starter Code :
function removeStringValues(obj) {
  // your code here
}
*/
var obj = { name: 'Sam', age: 20 }
removeStringValues(obj);
//console.log(obj); // { age: 20 }

function removeStringValues(obj) {
  delete obj.name;
  console.log(obj);
  return obj;
}
