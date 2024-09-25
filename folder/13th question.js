// 13. Check if the array arr = [1, 2, 3, 4, 5] contains the number 3 and print true or false.

// ANSWER....

let array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
    if (array[i] == 3) {
        console.log("true");
        break; 
    }
}


