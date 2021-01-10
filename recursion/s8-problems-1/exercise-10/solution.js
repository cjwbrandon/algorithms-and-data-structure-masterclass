/*
Write a function called power which accepts a base and an exponent.
The function should return the power of the base to the exponent.
This function should mimic the functionality of Math.power() - do not worry about negative bases and exponents.
*/

const power = function (base, exp) {
  if (exp === 0) return 1;
  if (exp === 1) return base;
  return base * power(base, exp - 1);
};

console.log(power(2, 0)); // 1
console.log(power(2, 2)); // 4
console.log(power(2, 4)); // 16
