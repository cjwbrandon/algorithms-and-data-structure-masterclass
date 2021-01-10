/*
Write a funciton called sameFrequency.
Given two positive integers, find out if the two numbers have the same frequency of digits.
Your solution MUST have the following complexities: O(N)
*/

const sameFrequency = function (n1, n2) {
  const s1 = n1.toString();
  const s2 = n2.toString();
  if (s1.length !== s2.length) return false;

  const charLookup = {};
  for (let l of s1) charLookup[l] = charLookup[l] + 1 || 1;

  for (let l of s2) {
    if (!charLookup[l]) return false;
    charLookup[l]--;
  }
  return true;
};

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
