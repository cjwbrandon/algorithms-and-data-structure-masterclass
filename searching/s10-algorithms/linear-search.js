/*
Write a function called linearSearch which accepts an array and a value, and returns the index at which the value exists. 
If the value does not exist in the array, return -1.
*/

// 1. Function accepts an array and a value
function linearSearch(arr, value) {
  // 2. Loop through array
  for (let i = 0; i < arr.length; i++) {
    // 3. If value is found, return index
    if (arr[i] === value) return i;
  }
  // 4. If value is never found, return -1
  return -1;
}

console.log(linearSearch([10, 15, 20, 25, 30], 15)); // 1
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)); // 5
console.log(linearSearch([100], 100)); // 0
console.log(linearSearch([1, 2, 3, 4, 5], 6)); // -1
