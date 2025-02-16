// Sum of Two Numbers
function sum(a, b) {
  if(typeof a === 'number' && typeof b === 'number'){
    return a + b;
  }
  console.log("Los datos de entrada no son adecuados");
}

// Factorial of a Number
function factorial(n) {
  if(!(typeof n=== 'number' && n>=0 && Number.isInteger(n))){
    console.log("Los datos de entrada no son adecuados")
  }
  let result = 1;
  for(let i = 2; i<=n; i++){
    result *= i;
  }
  return result;
}

// Find the Largest Number
function findLargest(arr) {
  // Add your code here
}

// Count Vowels in a String
function countVowels(str) {
  // Add your code here
}

// Check if a Number is Prime
function isPrime(n) {
  // Add your code here
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
