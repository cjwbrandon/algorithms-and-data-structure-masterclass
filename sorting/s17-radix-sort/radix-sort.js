function radixSort(nums) {
  // Find number of digits of the largest number
  const maxDigits = mostDigits(nums);

  // Loop up to largest number
  for (let i = 0; i < maxDigits; i++) {
    // Create bucket for 0 to 9
    const buckets = Array.from({ length: 10 }, () => []);
    for (num of nums) {
      // Place each number in their corresponding bucket
      buckets[getDigit(num, i)].push(num);
    }
    nums = buckets.flat(1);
    // nums = [].concat(...buckets)
  }
  return nums;
}

console.log(radixSort([6, 34, 1, 3, 111, 6, 8, 94, 3]));
console.log(radixSort([1, 11111, 11, 1111, 111, 11, 23232, 3]));

function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (num of nums) {
    maxDigits = Math.max(maxDigits, digitCount(num));
  }
  return maxDigits;
}
