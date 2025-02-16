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
    return;
  }
  let result = 1;
  for(let i = 2; i<=n; i++){
    result *= i;
  }
  return result;
}

// Find the Largest Number
function findLargest(arr) {
  if(Array.isArray(arr) && arr.every(num => typeof num === 'number')){
    return arr.reduce((a, b) => Math.max(a, b), -Infinity);
  }
  console.log("Los datos de entrada no son adecuados");
}

// Count Vowels in a String
function countVowels(str) {
  if (typeof str === 'string'){
    const regex = /[aeiou]/gi;
    return (str.match(regex) || []).length;
  }
  console.log("Los datos de entrada no son adecuados");
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
