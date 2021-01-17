function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

console.log(getDigit(12345, 0));
console.log(getDigit(12345, 1));
console.log(getDigit(12345, 2));
console.log(getDigit(12345, 3));
console.log(getDigit(12345, 4));
console.log(getDigit(12345, 5));

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

console.log(digitCount(12345));
console.log(digitCount(123));

function mostDigits(nums) {
  let maxDigits = 0;
  for (num of nums) {
    maxDigits = Math.max(maxDigits, digitCount(num));
  }
  return maxDigits;
}

console.log(mostDigits([1, 12345, 12, 123, 1234]));
