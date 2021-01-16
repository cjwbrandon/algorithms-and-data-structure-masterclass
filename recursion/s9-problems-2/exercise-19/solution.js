/*
Write a recursive function called capitalizeFirst.
Given an array of strings, capitalize the first letter of each string in the array.
*/

function capitalizeFirst(arr) {
  let word = arr[0];
  word = word.charAt(0).toUpperCase() + word.slice(1);
  if (arr.length === 1) return [word];

  return [word, ...capitalizeFirst(arr.slice(1))];
}

console.log(capitalizeFirst(["car", "taco", "banana"]));
