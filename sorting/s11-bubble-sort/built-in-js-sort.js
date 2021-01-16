console.log(["d", "e", "a", "b"].sort());

// Sorted by Strings unicode
console.log([21, 2, 10, 15].sort());

// Pass callback function -> sort ascending
console.log([21, 2, 10, 15].sort((a, b) => a - b));
// descending
console.log([21, 2, 10, 15].sort((a, b) => b - a));

// Sorting by the length of string
console.log(["a", "aaa", "aa", "aaaaaa"].sort((a, b) => a.length - b.length));
