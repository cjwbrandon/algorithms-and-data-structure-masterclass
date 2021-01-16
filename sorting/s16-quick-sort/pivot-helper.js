function pivot(arr, start, end) {
  // Grab pivot from start of the array
  let currentPivotIndex = start;
  let pivotValue = arr[start];

  // Loop through array
  for (let i = start + 1; i <= end; i++) {
    if (pivotValue > arr[i]) {
      currentPivotIndex++;
      [arr[i], arr[currentPivotIndex]] = [arr[currentPivotIndex], arr[i]];
    }
  }
  [arr[start], arr[currentPivotIndex]] = [arr[currentPivotIndex], arr[start]];
  return currentPivotIndex;
}

let temp1 = [3, 1];
console.log(pivot(temp1, 0, 1));
console.log(temp1);

temp1 = [3, 1, 2];
console.log(pivot(temp1, 0, 1));
console.log(temp1);
