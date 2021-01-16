function selectionSort(arr) {
  let smallest;
  // Loop through array
  for (let i = 0; i < arr.length; i++) {
    // 1. Store the first element as the smallest value
    smallest = i;
    // Loop through array
    for (let j = i + 1; j < arr.length; j++) {
      // if smaller value is found, designate smaller number to be the new minimum
      if (arr[j] < arr[smallest]) {
        smallest = j;
      }
    }
    // If minimum is not initial value, swap positions
    if (smallest !== i) [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
  }

  return arr;
}

console.log(selectionSort([6, 3, 7, 5, 4]));
