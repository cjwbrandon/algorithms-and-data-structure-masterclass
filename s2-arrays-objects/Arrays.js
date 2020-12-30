// Video 15: When are Arrays Slow?

const array = [1, 2, 3];

// Accessing -> O(1)
console.log(array[1]);

// Insertion -> It depends
// To the end -> O(1)
array.push(4);
console.log(...array, 5);

// At the beginning -> O(n)
// Have to re-index every element in the Array
array.unshift(0);
console.log([-1, ...array]);

// Removal -> It depends -> similar to Insertion
// end
array.pop();
console.log(array.slice(0, -1));

// beginning
array.shift();
console.log(array.slice(1));

// Search - O(n)
for (let i = 0; i < array.length; i++) {
  if (array[i] === 2) {
    console.log("Found 2!");
  }
}
