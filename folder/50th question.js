// 50. Given a string and a character, count how many times the character appears in the string.
// Input: str = "hello world", char = "o"
// Output: 2

// ANSWER...

let string="hello world";
let char="o";
let count=0;
for(i=0;i<string.length;i++){
    if(string[i]==char){
        count=count+1;
    }
}
console.log(count);

