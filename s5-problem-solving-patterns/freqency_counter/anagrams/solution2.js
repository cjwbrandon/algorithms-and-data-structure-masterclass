const validAnagram = function (word1, word2) {
  if (word1.length !== word2.length) return false;

  const lookup = {};
  for (let l of word1) {
    lookup[l] ? lookup[l]++ : (lookup[l] = 1);
  }

  for (let l of word2) {
    if (!lookup[l]) return false;
    lookup[l]--; // Not when letter = 0; falsy value -> earlier if statement will fail
  }
  return true;
};

console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("rat", "car")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("qwerty", "qeywrt")); // true
