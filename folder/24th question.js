// 24. Write a program to remove whitespace from both ends of a string.Example: Input: " hello ", Output: "hello".

// ANSWER...

let string=" hello ";
let array=string.split('');
array.pop();
array.shift();
let string1=array.join('');
console.log(string1)
