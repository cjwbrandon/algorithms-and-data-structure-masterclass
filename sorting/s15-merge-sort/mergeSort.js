function merge(arr1, arr2) {
  const arr = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      arr.push(arr1[i]);
      i++;
    } else {
      arr.push(arr2[j]);
      j++;
    }
  }
  if (i === arr1.length) arr.push(...arr2.slice(j));
  else if (j === arr2.length) arr.push(...arr1.slice(i));

  return arr;
}

// console.log(merge([1, 3, 6, 8], [2, 3, 4, 5, 9, 10, 11, 12]));
// console.log(merge([1], [2]));

function mergeSort(arr) {
  // Break until single or no element
  if (arr.length <= 1) return arr;

  // Break up into half
  const split = Math.floor(arr.length / 2);
  // Merge back together recursively
  return merge(mergeSort(arr.slice(0, split)), mergeSort(arr.slice(split)));
}

console.log(mergeSort([6, 34, 1, 3, 111, 6, 8, 94, 3]));
