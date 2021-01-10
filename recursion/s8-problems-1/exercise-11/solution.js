/*
Write a function factorial which accepts a number and returns the factorial of that number.
A factorial is the product of an integer and all the integers below it.
*/

function factorial(num) {
  if (num === 0 || num === 1) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(4)); // 24
console.log(factorial(7)); // 5040
