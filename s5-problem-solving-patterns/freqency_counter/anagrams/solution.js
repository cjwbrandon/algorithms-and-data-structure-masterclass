/*
Given two strings, write a function to determine if the second string is an anagram of the first.
An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
*/

const validAnagram = function (word1, word2) {
  if (word1.length !== word2.length) return false;

  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  for (let l of word1) {
    frequencyCounter1[l] = frequencyCounter1[l] + 1 || 1;
  }
  for (let l of word2) {
    frequencyCounter2[l] = frequencyCounter2[l] + 1 || 1;
  }

  for (let key of Object.keys(frequencyCounter1)) {
    if (!(key in frequencyCounter2)) return false;
    if (frequencyCounter1[key] !== frequencyCounter2[key]) return false;
  }

  return true;
};

console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("rat", "car")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("qwerty", "qeywrt")); // true
