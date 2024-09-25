// 19. Check if the array arr = [1, 2, 3, 4, 5] is sorted in ascending order, and print true or false.

// ANSWER...

let array=[1,2,3,4,5];
let updated= array.every(x => x < x+1);
console.log(updated)