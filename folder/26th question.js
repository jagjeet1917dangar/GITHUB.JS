// 26. Write a program to check if a string ends with a specific character.Example: Input: ("codinggita", "a"), Output: true.

// ANSWER....

let char="a";
let main="codinggita"
for(i=0;i<main.length;i++){
    if(main[i]===char){
        console.log("true");
        break;
    }
}

