// 58. Given an integer n, return true if it is a power of four. Otherwise, return false.An integer n is a power of four, if there exists an integer x such that n == 4x.
// Example 1: Input: n = 16, Output: true; Example 2: Input: n = 5, Output: false

// ANSWER... 

let n=5; 
if (n<=0){
    console.log(false); 
} else{
    while(n%4==0){
        n=n/4; 
    }
    if(n==1) {
        console.log(true); 
    } 
    else{
        console.log(false); 
    }
}
