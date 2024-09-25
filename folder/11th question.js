// 11. Remove duplicate elements from the array arr = [1, 2, 2, 3, 4, 4, 5] and print the updated array.

// ANSWER....

let array=[1,2,2,3,4,4,5];
let updated=[...new Set(array)];
console.log(updated)

