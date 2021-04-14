// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'
//   capitalize('')

//TO RUN A TEST
// WRITE jest in command line, folder, and file that test is in 
// jest fib/test.js

//Solution 3, but hardest
function reverse(str) {
    return str.split('').reduce((rev, char) => char + rev, '')
}

module.exports = reverse;



//SOLUTION 1
// function reverse(str) {
//     const arr = str.split('');
//     arr.reverse();
//     return arr.join('');
// }
    

// SOLUTION 2

// function reverse(str) {
//     let reversed = '';

//     for (let character of str) {
//         reversed = character + reversed;
//     }
//     return reversed;

// }