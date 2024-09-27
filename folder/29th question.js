// 29.Write a program to find all pairs in an array whose sum is equal to a given number.
// Example 1:  Input: nums = [2,7,11,15], target = 9 , Output: [0,1].

// ANSWER...

let arr=[11,15,0,9,8,1];
let target=9;
let length=arr.length;
for(i=0;i<length;i++){
    for(j=i+1;j<length;j++){
        if(arr[i]+arr[j]==target){
            console.log(i,j);
        }
    }
}

