/*
Write a recursive function called reverse which accepts a string and returns a new string in reverse
*/

function reverse(s) {
  if (s.length === 1) return s;
  return s.slice(-1) + reverse(s.slice(0, -1));
}

console.log(reverse("awesome")); // 'emosewa'
console.log(reverse("rithmschool")); // 'loohcsmhtir'
