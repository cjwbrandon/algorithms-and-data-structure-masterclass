/*
Write a funciton called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string.
In other words, the funciton should check whether the characters in the first string appear somewhere in the second string, without their order changing.
*/

const isSubsequence = function (s1, s2) {
  let pointer = 0;
  for (let l of s2) {
    if (l === s1[pointer]) {
      pointer++;
    }
    if (pointer === s1.length) return true;
  }
  return false;
};

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false
