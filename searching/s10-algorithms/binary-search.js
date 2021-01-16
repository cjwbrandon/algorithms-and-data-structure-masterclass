// 1. Function accepts a sorted array and a value
function binarySearch(sortedArr, val) {
  // 2. Create left and right pointer at start and beginning
  let leftPointer = 0;
  let rightPointer = sortedArr.length - 1;

  // 3. While left pointer comes before the right pointer
  while (leftPointer <= rightPointer) {
    // 4. Create a middle pointer
    const middlePointer = Math.ceil((rightPointer + leftPointer) / 2);

    // found value
    if (sortedArr[middlePointer] === val) return middlePointer;

    // value too small
    if (sortedArr[middlePointer] < val) leftPointer = middlePointer + 1;
    // value too large
    else rightPointer = middlePointer - 1;
  }

  // 5. never find value
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
console.log(
  binarySearch(
    [
      5,
      6,
      10,
      13,
      14,
      18,
      30,
      34,
      35,
      37,
      40,
      44,
      64,
      79,
      84,
      86,
      95,
      96,
      98,
      99,
    ],
    10
  )
); // 2

console.log(
  binarySearch(
    [
      5,
      6,
      10,
      13,
      14,
      18,
      30,
      34,
      35,
      37,
      40,
      44,
      64,
      79,
      84,
      86,
      95,
      96,
      98,
      99,
    ],
    95
  )
); // 16

console.log(
  binarySearch(
    [
      5,
      6,
      10,
      13,
      14,
      18,
      30,
      34,
      35,
      37,
      40,
      44,
      64,
      79,
      84,
      86,
      95,
      96,
      98,
      99,
    ],
    100
  )
); // -1
