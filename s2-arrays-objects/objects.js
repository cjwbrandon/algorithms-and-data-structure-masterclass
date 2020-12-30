// Video 14: The Big O of Objects

const object = {};

// Add -> O(1)
object.random = 1;
object["random2"] = 2;

// Removal -> O(1)
delete object.random2; // or delete object['random2']

// Accessing -> O(1)
console.log(object.random);

// Searching -> O(n)
for (key in object) {
  if (object[key] === 1) {
    console.log(key);
  }
}

// Methods
// Object.keys() -> O(n)
console.log(Object.keys(object));

// Object.values() -> O(n)
console.log(Object.values(object));

// Object.entries() -> O(n); slightly more work than keys and values but rounded to O(n)
console.log(Object.entries(object));

// hasOwnProperty -> O(1)
object.hasOwnProperty("random");
