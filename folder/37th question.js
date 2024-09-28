// 37. Given a sorted array and a target value, return the starting and ending position of that target in the array.Example:Input: [5, 7, 7, 8, 8, 10], target=8 ,Output: [3, 4]

// ANSWER...

let arr=[5,7,7,8,8,10];
let target=8;
let length=arr.length;
for(i=0;i<length;i++){
    for(j=i+1;j<length;j++){
        if(arr[i]==target && arr[j]==target){
            console.log(i,j);
        }
    }
}