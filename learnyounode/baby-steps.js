// Write a program that accepts one or more numbers as command-line arguments
//   and prints the sum of those numbers to the console (stdout).

const initialValue = 0;

const args = process.argv.splice(2);

const reducer = (accumulator, item) => {
  return Number(accumulator) + Number(item);
};

const sum = args.reduce(reducer);

console.log(sum)
