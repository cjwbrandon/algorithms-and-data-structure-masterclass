const maxSubarraySum = function (arr, num) {
  if (num > arr.length) return null;

  let sum = arr.slice(0, num).reduce((a, b) => a + b, 0);
  let max = sum;

  for (let i = num; i < arr.length; i++) {
    sum -= arr[i - num];
    sum += arr[i];
    if (sum > max) max = sum;
  }
  return max;
};

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
