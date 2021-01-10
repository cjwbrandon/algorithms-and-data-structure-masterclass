/*
Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward).
Otherwise it returns false
*/

const isPalindrome = function (s) {
  if (s.length === 1) return true;
  if (s.length === 2) return s[0] === s[1];
  return s[0] === s.slice(-1) && isPalindrome(s.slice(1, -1));
};

console.log(isPalindrome("awesome")); // false
console.log(isPalindrome("foobar")); // false
console.log(isPalindrome("tacocat")); // true
console.log(isPalindrome("amanaplanacanalpanama")); // true
console.log(isPalindrome("amanaplanacanalpandemonium")); // false
