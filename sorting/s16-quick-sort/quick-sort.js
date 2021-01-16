function pivot(arr, start = 0, end = arr.length - 1) {
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

function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start >= end) return;

  const pivotIdx = pivot(arr, start, end);
  quickSort(arr, start, pivotIdx - 1);
  quickSort(arr, pivotIdx + 1, end);

  return arr;
}

temp1 = [6, 34, 1, 3, 111, 6, 8, 94, 3];
console.log(quickSort(temp1));
console.log(temp1);
