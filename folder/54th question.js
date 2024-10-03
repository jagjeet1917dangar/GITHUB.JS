// 54. An ugly number is a positive integer whose prime factors only include 2, 3, and 5. 
///Given an integer n, write a program to determine if n is an ugly number.
// Example:
// Input: n = 6
// Output: true
// Input: n = 8
// Output: true
// Input: n = 14
// Output: false
// Input: n = 1
// Output: true

// ANSWER...

let n = 14; 
let Ugly = true;
if (n <= 0) {
    Ugly = false; 
} else {
    while (n > 1) {
        if (n % 2 === 0) {
            n /= 2;
        } else if (n % 3 === 0) {
            n /= 3;
        } else if (n % 5 === 0) {
            n /= 5;
        } else {
            Ugly = false;
            break;
        }
    }
}
console.log(Ugly); 
