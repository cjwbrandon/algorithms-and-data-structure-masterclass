/*
Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positiver integer.
This functions hould return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integers passed to the function.
If there isn't one, return 0 instead.
*/

const minSubArrayLen = function (arr, tg) {
  let sum = 0;
  let count = Infinity;
  let pointer = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    while (sum >= tg) {
      if (sum - arr[pointer] >= tg) {
        sum -= arr[pointer];
        pointer++;
      } else {
        if (i - pointer + 1 < count) count = i - pointer + 1;
        break;
      }
    }
  }

  if (count === Infinity) return 0;
  return count;
};

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2
