// This script takes a command line argument, converts it to a number, and prints it.
const arg = process.argv[2];
const number = Number(arg);

if (!isNaN(number)) {
  console.log(`My number: ${number}`);
} else {
  console.log('Not a number');
}
