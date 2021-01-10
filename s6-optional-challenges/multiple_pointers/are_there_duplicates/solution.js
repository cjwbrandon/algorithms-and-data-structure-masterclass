const areThereDuplicates = function (...args) {
  args.sort();

  for (let i = 0; i < args.length; i++) {
    if (args[i] === args[i - 1]) return true;
  }
  return false;
};

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(...[1, 2, 2])); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
