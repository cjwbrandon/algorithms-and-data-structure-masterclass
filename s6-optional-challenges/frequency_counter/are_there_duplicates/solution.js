/*
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and check whether there are any duplicates among the arguments passed in.
You can solve this using the frequency counter pattern OR the multiple pointers pattern.
*/

const areThereDuplicates = function (...args) {
  const unique = {};
  for (let i of args) {
    if (unique[i]) return true;
    unique[i] = 1;
  }
  return false;
};

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(...[1, 2, 2])); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
