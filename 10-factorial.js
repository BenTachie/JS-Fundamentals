//This script calculates the factorial of a number passed as a command line argument.

function factorial(n) {
  if (isNaN(n) || n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

const arg = Number(process.argv[2]);
console.log(factorial(arg));
