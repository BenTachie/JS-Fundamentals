//This script takes two numbers as command line arguments and prints their sum.

a = Number(process.argv[2]);
b = Number(process.argv[3]);

function add(a, b) {
  return a + b;
}

console.log(add(a, b));