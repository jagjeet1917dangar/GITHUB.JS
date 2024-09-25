// 9. Sort an Array in Ascending Order Example: Input: nums = [4,2,8,5,1]; Output: nums = [1,2,4,5,8].

// ANSWER

let arr=[4,2,8,5,1];
let sorted_array=array.sort();
console.log(array);

// WITHOUT USING IN-BUILT

let array=[4,2,8,5,1];
for(i=0;i<array.length;i++){
    for(j=0;j<array.length;j++){
    if(array[i]<array[j]){
        [array[i],array[j]]=[array[j],array[i]];
    }
}}
console.log(array)