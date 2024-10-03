// 45. Given a sentence, return the longest word in it.
// Input: "I love programming in JavaScript"
// Output: "programming"

// ANSWER...

const sentence = "I love programming in JavaScript";
const words = sentence.split(' ');
let longest = "";

for (let i = 0; i < words.length; i++) {
  if (words[i].length > longest.length) {
    longest = words[i];
  }
}

console.log(longest); 
