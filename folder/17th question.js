// 17. Count how many positive and negative numbers are in arr = [1, -2, 3, -4, 5, -6] and print the result.

// ANSWER....

let array=[1,-2,3,-4,5,-6];
let positive=0;
let negative=0;
for(i=0;i<array.length;i++){
    if(array[i]>0){
        positive=positive+1;
    }
    else if(array[i]<0){
        negative=negative+1;
    }
}
console.log(count);