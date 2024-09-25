// 16. Check if all the elements in arr = [3, 5, 9, 1, 7] are positive numbers, and print true or false.

// ANSWER...

let arr = [1, 1, 2, 1, 7];
let allPositive = arr.every(x => x < 0);
console.log(allPositive);