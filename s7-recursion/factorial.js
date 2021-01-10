function factorialIter(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}

function factorialRec(num) {
  if (num === 2) return 2;
  return num * factorialRec(num - 1);
}

console.log(factorialIter(5));
console.log(factorialRec(5));
console.log(factorialIter(10) === factorialRec(10));
