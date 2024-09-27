// 31. Write a program to repeat a string a specified number of times.Example: Input: ("hello", 3), Output: "hellohellohello".

// ANSWER...

let str = "hello";
let target = 3;
let result = "";  
for (let i = 0; i < target; i++) {
    result += str; 
}
console.log(result); 
