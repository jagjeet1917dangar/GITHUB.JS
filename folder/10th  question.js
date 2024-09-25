// 10. Given an array of integers, count how many numbers are even and how many are odd.

// ANSWER...

let array=[1,2,3,4,5];
let even=0;
let odd=0;
for(i=0;i<array.length;i++){
    if(array[i]%2==0){
        even=even+1;
    }
    else{
        odd=odd+1;
    }
}
console.log("even:",even,"odd:",odd)