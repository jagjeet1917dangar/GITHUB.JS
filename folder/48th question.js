// 48.Given a string, return a new string with all vowels removed.
// Input: "hello"
// Output: "hll"


// ANSWER... 


let result = ''; 
let str="hello";
for (let i = 0; i < str.length; i++) {
    if (str[i] !== 'a' && str[i] !== 'e' && str[i] !== 'i' &&
        str[i] !== 'o' && str[i] !== 'u' && str[i] !== 'A' &&
        str[i] !== 'E' && str[i] !== 'I' && str[i] !== 'O' &&
        str[i] !== 'U'){
        result += str[i]; 
    }
} 
console.log(result);