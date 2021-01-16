function naiveStringSearch(longerString, shorterString) {
  let count = 0;
  for (let i = 0; i < longerString.length; i++) {
    for (let j = 0; j < shorterString.length; j++) {
      if (longerString[i + j] !== shorterString[j]) break;
      if (j === shorterString.length - 1) count++;
    }
  }
  return count;
}

console.log(naiveStringSearch("zomg", "omg")); // 1
console.log(naiveStringSearch("zomgzomg", "omg")); // 2
console.log(naiveStringSearch("abcdef", "fed")); // 0
