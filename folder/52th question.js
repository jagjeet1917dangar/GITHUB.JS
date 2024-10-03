// 52.Given an array nums, the running sum of an array is defined as runningSum[i] = sum(nums[0]…nums[i]).
// Example:
// Input: nums = [1, 2, 3, 4]
// Output: [1, 3, 6, 10]
// Explanation:
// runningSum[0] = 1
// runningSum[1] = 1 + 2 = 3
// runningSum[2] = 1 + 2 + 3 = 6
// runningSum[3] = 1 + 2 + 3 + 4 =10


// ANSWER...

let arr = [1, 2, 3, 4];
let length = arr.length;
let arr2 = [];
 arr2[0] = arr[0]; 
for (let i = 1; i < length; i++) {
    arr2[i] = arr2[i - 1] + arr[i]; 
}
console.log(arr2); 

