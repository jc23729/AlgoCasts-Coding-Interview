// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {}
if (i % 15 == 0)
console.log("FizzBuzz");
else if (i % 3 == 0)
console.log("Fizz");
else if (i % 5 == 0)
console.log("Buzz");
else
console.log(i);
module.exports = fizzBuzz;

//Second possible solution
// for (var i = 1; i <= 100; i++) {
//     var f = i % 3 == 0, b = i % 5 == 0;
//     console.log(f ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : i);
//   }

// First, we create a for-loop that will count from 1 to 100.
// for (let i = 1; i <= 100; i++) {
// }

// Inside the for-loop, we will create a series of if...else statements. The first if-statement checks to see if the number is divisible by both 3 and 5. If that’s the case, we print "FizzBuzz" using console.log().
// if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
// }

// Next, we create an else if statement. If the number doesn’t divide by both 3 and 5 but it is divisible by 3 only, we print out "Fizz".
// if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
// } else if (i % 3 === 0) {
//     console.log("Fizz");
// }