// 30. Write a program to input an integer 'n' and print the sum of all its even digits and the sum of all its odd digits separately. Example : Input: 'n' = 132456, Output: 12, 9
// Explanation:
// The sum of even digits = 2 + 4 + 6 = 12
// The sum of odd digits = 1 + 3 + 5 = 9

let integer=123456;
let numstr=integer.toString();
let length=numstr.length;
let even=0;
let odd=0;
for(i=0;i<length;i++){
    let digit=parseInt(numstr[i]);
    
    if(numstr[i]%2==0){
        even=even+digit;
    }
    else{
        odd=odd+digit;
    }
}
console.log(even);
console.log(odd);
