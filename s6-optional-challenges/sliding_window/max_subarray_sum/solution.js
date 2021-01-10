/*
Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.
Note that a subarray must consist of consecutive elements from the original array.
*/

const maxSubarraySum = function (arr, num) {
  if (num > arr.length) return null;

  let sum = arr.slice(0, num).reduce((a, b) => a + b, 0);
  let max = sum;

  for (let i = num; i < arr.length; i++) {
    sum += arr[i] - arr[i - num];
    if (sum > max) max = sum;
  }

  return max;
};

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null
