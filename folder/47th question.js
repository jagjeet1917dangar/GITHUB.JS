// 47. Given an array of integers, find the first element that repeats. If no element repeats, return -1.
// Input: [10, 5, 3, 4, 3, 5, 6]
// Output: 5

// ANSWER...

let arr =[10, 5, 3, 4, 3, 5, 6];
let length =arr.length;
let count =-1;
for (let i=0;i<length;i++) {
    for (let j=i+1;j<length;j++){ 
        if (arr[i]===arr[j]){
            count=arr[i];
            break;
        }
    }
    if (count!=-1) { 
        break;
    }
}
console.log(count);
