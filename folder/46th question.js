// 46. Given a string, return the index of the first repeating character. If no character repeats, return -1.
// Input: "hello"
// Output: 2 (because 'l' repeats first)
// Input: "abcdef"
// Output: -1


// ANSWER...


let str1="hello";
let str2=str1;
let count=-1;
for(i=0;i<str1.length;i++){
    if(str1[i]==str2[i+1]){
        count=i;
    }
} 
console.log(count);