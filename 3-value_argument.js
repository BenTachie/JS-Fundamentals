// This script checks if a command line argument is provided and prints it.
// If no argument is provided, it prints "No argument".
const firstArg = process.argv[2];

if (firstArg !== undefined) {
  console.log(firstArg);
} else {
  console.log("No argument");
}
