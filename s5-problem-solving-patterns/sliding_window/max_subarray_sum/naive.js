/*
Write a function called maxSubarraySum which accepts an array of integers and a number called n.
The function should calculate the maximum sum of n consecutive elements in the array.
*/

const maxSubarraySum = function (arr, num) {
  if (num > arr.length) return null;

  let sum = -Infinity;
  for (let i = num; i < arr.length; i++) {
    temp = arr.slice(i - num, i).reduce((a, b) => a + b, 0);
    if (temp > sum) sum = temp;
  }
  return sum;
};

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
