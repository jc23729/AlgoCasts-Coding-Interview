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

function reverse(str) {
    let reversed = '';

    for (let character of str) {
        reversed = character + reversed;
    }
    return reversed;

}


module.exports = reverse;



//SOLUTION 1
// function reverse(str) {
//     const arr = str.split('');
//     arr.reverse();
//     return arr.join('');
// }
    

