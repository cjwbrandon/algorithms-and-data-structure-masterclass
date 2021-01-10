/*
Write a function called findLogestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.
*/

const findLongestSubstring = function (s) {
  let max = 0;
  const unique = {};
  let pointer = 0;

  for (let i = 0; i < s.length; i++) {
    if (!unique[s[i]]) {
      unique[s[i]] = 1;
    } else {
      while (s[pointer] !== s[i]) {
        delete unique[s[pointer]];
        pointer++;
      }
      pointer++;
    }
    if (i - pointer + 1 > max) max = i - pointer + 1;
  }
  return max;
};

console.log(findLongestSubstring("")); // 0
console.log(findLongestSubstring("rithmschool")); // 7
console.log(findLongestSubstring("thisisawesome")); // 6
console.log(findLongestSubstring("thecatinthehat")); // 7
console.log(findLongestSubstring("bbbbbb")); // 1
console.log(findLongestSubstring("longestsubstring")); // 8
console.log(findLongestSubstring("thisishowwedoit")); // 6
