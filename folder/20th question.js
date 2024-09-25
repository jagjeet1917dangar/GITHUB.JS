// 20. Find and print the difference between the maximum and minimum elements in arr = [80, 30, 70, 50, 20].

// ANSWER...

let array=[80, 30, 70, 50, 20];
let updated=array.sort();
let length=updated.length;
let difference=updated[length-1]-updated[0];
console.log("smallest:",updated[0],"largest:",updated[length-1]);
console.log("difference:",difference);