// 1. **Print "Hello, World!"**  
//    - Task: Write a function that prints "Hello, World!" to the console.

console.log("Hello, World!")

// 2. **Add Two Numbers**  
//    - Task: Write a function that takes two numbers and returns their sum.  
//    - Test: `sum(3, 5)`  
//    - Expected Output: `8`

var a=3;
var b=5;                                 

console.log(a+b)

// 3. **Find the Largest Number**  
//    - Task: Write a function that takes three numbers and returns the largest.  
//    - Test: `findLargest(2, 8, 5)`  
//    - Expected Output: `8`
let a= 2;
let b= 8;
let c= 5;

if(a>b && a>c){
    console.log("consider a largest")
}
else if(b>a && b>c){
    console.log("consider b largest")
}
else if(c>a && c>b){
    console.log("consider c largest")
}
else if(a==b && a==c){
    console.log("all are equal")
}
else if(a=b && b>c){
    console.log("consider a and b largest")
}
else if(a<b && b==c){
    console.log("b and c are equal")
}
else{
    console.log("a and c are largest")
}

// 4. **Check if a Number is Even or Odd**  
//    - Task: Write a function that checks if a number is even or odd.  
//    - Test: `isEven(4)`  
//    - Expected Output: `true`

var number= 4;

if(number%2==0){
    console.log("true")
}
else{
    console.log("false")
}

// 5. **Calculate the Factorial of a Number**  
//    - Task: Write a function that returns the factorial of a number.  
//    - Test: `factorial(5)`  
//    - Expected Output: `120`

let number= 5;
let factorial= 1;

for(var i=1;i<=number;i++){
    factorial=factorial*i
}
console.log(factorial)

// 6. **Reverse a String**  
//    - Task: Write a function that takes a string and returns it reversed.  
//    - Test: `reverseString('hello')`  
//    - Expected Output: `'olleh'`

var str="hello";
var jagjeet= 
str.split("").reverse().join("");
console.log(jagjeet)

// I TOOK 3 MINUTES TO SOLVE THIS PROBLEM 
// I TOOK THE HELP OF CHATGPT TO SEE HOW TO REVERSE THE STRING.


// 7. **Check for Palindrome**  
//    - Task: Write a function that checks if a given string is a palindrome.  
//    - Test: `isPalindrome('madam')`  
//    - Expected Output: `true`


   let str = 'madam';
   let jagjeet= str === str.split('').reverse().join('');
   console.log(jagjeet);

//    I TOOK 3 MINUTES TO SOLVE THIS QUESTION
//    I TOOK THE HELP OF CHATGPT TO SEE WHAT IS THE MEANING OF PALINDROME.

// 8. **Find the Minimum Number in an Array**  
//    - Task: Write a function that takes an array and returns the smallest number.  
//    - Test: `findMin([3, 1, 4, 1, 5])`  
//    - Expected Output: `1`

    let arr = [3, 1, 4, 1, 5];
    let min = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
       if (arr[i] < min) {
         min = arr[i]; 
         }
    }

    console.log(min);

//  I TOOK 5 MINUTES TO SOLVE THIS PROBLEM
//  I DID NOT TAKE HELP FROM ANYONE.

// 9. **Sort an Array**  
//    - Task: Write a function that sorts an array of numbers in ascending order.  
//    - Test: `sortArray([3, 1, 4, 1, 5])`  
//    - Expected Output: `[1, 1, 3, 4, 5]`

let arr = [3, 1, 4, 1, 5];

for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length - 1 - i; j++) {
    if (arr[j] > arr[j + 1]) {
      
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}

console.log(arr); 

//    I TOOK 32 MINUTES TO SOLVE THIS QUESTION.
//    I TOOK THE HELP OF THE CHATGPT IN THE END.

// 10. **Check if a String Contains a Substring**  
//     - Task: Write a function that checks if a string contains another substring.  
//     - Test: `containsSubstring('hello world', 'world')`  
//     - Expected Output: `true` 

let str = 'hello world';
let substr = 'world';
let found = false;

for (let i = 0; i <= str.length - substr.length; i++) {
  let match = true;
  for (let j = 0; j < substr.length; j++) {
    if (str[i + j] !== substr[j]) {
      match = false;
      break;
    }
  }
  if (match) {
    found = true;
    break;
  }
}

console.log(found); 

//   I TOOK 23 MINUTES TO SOLVE THIS PROBLEM
//   I DID NOT TAKE HELP FROM ANYONE.


// 11. **Sum All Elements in an Array**  
//     - Task: Write a function that returns the sum of all numbers in an array.  
//     - Test: `sumArray([1, 2, 3, 4, 5])`  
//     - Expected Output: `15`

var array=[1, 2, 3, 4, 5];
var sum=0;
for(i=0;i<array.length;i++){
    sum=sum+array[i]
}
console.log(sum)

    //    I TOOK 2 MINUTES TO SOLVE THIS QUESTION.
    //    I DID NOT TAKE HELP FROM ANYONE.


// 12. **Generate Fibonacci Sequence**  
//     - Task: Write a function that generates the first `n` Fibonacci numbers.  
//     - Test: `fibonacci(5)`  
//     - Expected Output: `[0, 1, 1, 2, 3]`

fbn = [0,1]
function fbno(n){
    for(i=2;i<n;i++){
        fbn[i] = fbn[i-1] + fbn[i-2]
    }
    return fbn;
}

console.log(fbno(5));


// 13. **Check if a Number is Prime**  
//     - Task: Write a function that checks if a number is prime.  
//     - Test: `isPrime(7)`  
//     - Expected Output: `true`


let a= 7;
let count = 1;
for(i=2;i<a;i++){
    if(a%i==0){
        count = count+1;
    }
    
}

if(count>1){
    
        console.log("flase")
   
}else{
    console.log("true")
}

// 14. **Count the Number of Vowels in a String**  
//     - Task: Write a function that counts the number of vowels in a given string.  
//     - Test: `countVowels('hello')`  
//     - Expected Output: `2`
let str = 'hello';
let vowels = 'aeiouAEIOU';
let count = 0;

for (let i = 0; i < str.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (str[i] === vowels[j]) {
      count++;
      break; 
    }
  }
}

console.log(count); 

// I TOOK 6 MINUTS TO SOVE THIS QUESTION.
// I TOOK A LITTLE HELP FROM CHATGPT.




// 15. **Find the Index of an Element in an Array**  
//     - Task: Write a function that returns the index of a given element in an array. If the element is not found, return -1.  
//     - Test: `findIndex([1, 2, 3, 4, 5], 3)`  
//     - Expected Output: `2`

var arr = [1, 2, 3, 4, 5];
var element = 3;
var index = -1;

for (var i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
        index = i;
        break;
    }
}

console.log(index);


// I TOOK 19 MINUTES TO SOLVE THIS PROBLEM
// I TOOK THE HELP OF CHATGPT TO SOLVE THIS QUESTION.


// 16. **Remove Duplicates from an Array**  
//     - Task: Write a function that removes duplicate elements from an array.  
//     - Test: `removeDuplicates([1, 2, 2, 3, 4, 4, 5])`  
//     - Expected Output: `[1, 2, 3, 4, 5]`

var arr = [1, 2, 2, 3, 4, 4, 5];
var result = [];

for (var i = 0; i < arr.length; i++) {
    var j = 0;
    while (j < result.length && result[j] !== arr[i]) {
        j++;
    }
    if (j === result.length) result[result.length] = arr[i];
}

console.log(result);


// I TOOK 6 MINUTES TO SOVE THIS QUESTION
// I TOOK THE HELP OF CHATGPT TO SOVE THIS PROBLEM.


// 17. **Find the Intersection of Two Arrays**  
//     - Task: Write a function that returns an array of the common elements in two arrays.  
//     - Test: `findIntersection([1, 2, 3], [2, 3, 4])`  
//     - Expected Output: `[2, 3]`

var arr1 = [1, 2, 3];
var arr2 = [2, 3, 4];
var intersection = []; 


for (var i = 0; i < arr1.length; i++) {
    var element = arr1[i];
    
    
    for (var j = 0; j < arr2.length; j++) {
        if (element === arr2[j]) {
            
            var isAlreadyInIntersection = false;
            for (var k = 0; k < intersection.length; k++) {
                if (intersection[k] === element) {
                    isAlreadyInIntersection = true;
                    break;
                }
            }
            
            if (!isAlreadyInIntersection) {
                intersection.push(element);
            }
        }
    }
}

console.log(intersection);  


// I TOOK 6 MINUTES TO SOLVE THIS PROBLEM
// I TOOK CHATGPT TO SOLVE THIS PROBLEM.


// 18. **Check if Two Strings are Anagrams**  
//     - Task: Write a function that checks if two strings are anagrams of each other.  
//     - Test: `areAnagrams('listen', 'silent')`  
//     - Expected Output: `true`


let str1 = 'listen';
let str2 = 'silent';


str1 = str1.toLowerCase();
str2 = str2.toLowerCase();


let sortedStr1 = str1.split('').sort().join('');
let sortedStr2 = str2.split('').sort().join('');


let areAnagrams = sortedStr1 === sortedStr2;

console.log(areAnagrams);


// I TOOK 25 MINUTES TO SOLVE THIS PROBLEM
// I TOOK HELP FROM W3 SCHOOLS.



// 19. **Capitalize the First Letter of Each Word**  
//     - Task: Write a function that capitalizes the first letter of each word in a string.  
//     - Test: `capitalizeWords('hello world')`  
//     - Expected Output: `'Hello World'`

var line="this is a test string"
var world=line.split(" ")
for(i=0;i<world.length;i++){
  world[i]=world[i][0].toUpperCase()+world[i].slice(1)
}
var final=world.join(" ")
console.log(final)

// I TOOK 25 SECONDS TO SOLVE THIS PROBLEM
// I DID NOT TAKE ANY HELP.


// 20. **Flatten a Nested Array**  
//     - Task: Write a function that flattens a nested array (an array of arrays) into a single array.  
//     - Test: `flattenArray([1, [2, 3], [4, [5, 6]]])`  
//     - Expected Output: `[1, 2, 3, 4, 5, 6]`

var arr = [1, [2, 3], [4, [5, 6]]];
var flattenedArr = [];

var stack = [arr];


while (stack.length > 0) {
    var current = stack.pop(); 
    
  
    for (var i = 0; i < current.length; i++) {
        var item = current[i];
        
        if (Array.isArray(item)) {
            
            stack.push(item);
        } else {
            
            flattenedArr.push(item);
        }
    }
}

console.log(flattenedArr); 

// I TOOK 9 MINUTES TO SOLVE THIS PROBLEM.
// I TOOK THE HELP FROM CHATGPT TO SOLVE THIS PROBLEM.


// 21. **Generate a Random Number within a Range**  
//     - Task: Write a function that generates a random number between a given range.  
//     - Test: `randomNumber(1, 10)`  
//     - Expected Output: `A random number between 1 and 10`

var min = 1; 
var max = 10; 
var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomNumber);

// I TOOK 5 MINUTES TO SOLVE THIS PROBLEM
// I DID NOT TAKE THE HELP FROM ANYONE.

// 22. **Check if a String is a Valid Email**  
//     - Task: Write a function that checks if a given string is a valid email address.  
//     - Test: `isValidEmail('test@example.com')`  
//     - Expected Output: `true`


let email = 'test@example.com';


let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


let isValid = emailPattern.test(email);


console.log(isValid);

// I TOOK 12 MINUTES TO SOLVE THIS PROBKEM
// I DID NOT TAKE ANY HELP FROM ANYONE.


// 23. **Convert Celsius to Fahrenheit**  
//     - Task: Write a function that converts a temperature from Celsius to Fahrenheit.  
//     - Test: `celsiusToFahrenheit(0)`  
//     - Expected Output: `32`

    var celsius=0 ;
    console.log(celsius*(9/5)+32, "farenhit")


// 24. **Remove a Specific Element from an Array**  
//     - Task: Write a function that removes a specific element from an array.  
//     - Test: `removeElement([1, 2, 3, 4, 5], 3)`  
//     - Expected Output: `[1, 2, 4, 5]`

var arr = [1, 2, 3, 4, 5];
var elementToRemove = 3;
var newArr = []; 


for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== elementToRemove) {
        newArr.push(arr[i]);
    }
}

console.log(newArr); 

// I TOOK 8 MINUTES TO SOLVE THIS PROBLEM.
// I TOOK HELP FROM CHATGPT.



// 25. **Find the Second Largest Number in an Array**  
//     - Task: Write a function that returns the second largest number in an array.  
//     - Test: `secondLargest([1, 2, 3, 4, 5])`  
//     - Expected Output: `4`

var arr = [1, 2, 3, 4, 5];
var n = arr.length;

var largest = -Infinity;      
var secondLargest = -Infinity; 

for (var i = 0; i < n; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}


for (var i = 0; i < n; i++) {
    if (arr[i] > secondLargest && arr[i] < largest) {
        secondLargest = arr[i];
    }
}

console.log(secondLargest); 

// I TOOK 6 MINUTES TO SOLVE THIS QUESTION.
// I TOOK THE HELP CHATGPT TO SOLVE THIS PROBLEM.


// 26. **Find the Longest Word in a String**  
//     - Task: Write a function that returns the longest word in a string.  
//     - Test: `longestWord('The quick brown fox jumped over the lazy dog')`  
//     - Expected Output: `'jumped'`

    const sentence = 'The quick brown fox jumped over the lazy dog';
    const longest = sentence.split(' ').reduce((a, b) => a.length > b.length ? a : b);
    console.log(longest);



    // I TOOK 13 MINUTES TO SOLVE THIS QUESTION 
    // I TOOK THE HELP OF CHATGPT.


// 27. **Find the Missing Number in an Array**  
//     - Task: Write a function that finds the missing number in a sequence from 1 to n.  
//     - Test: `findMissingNumber([1, 2, 4, 5, 6])`  
//     - Expected Output: `3`

let arr = [1, 2, 4, 5, 6];
let n = arr.length + 1; 
let expectedSum = (n * (n + 1)) / 2;
let actualSum = 0;
for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];
}
let missingNumber = expectedSum - actualSum;

console.log(missingNumber);


// I TOOK 10 MINUTES TO SOLVE THIS QUESTION
// I TOOK THE HELP OF CHATGPT.


// 28. **Calculate the GCD of Two Numbers**  
//     - Task: Write a function that calculates the greatest common divisor (GCD) of two numbers.  
//     - Test: `gcd(12, 18)`  
//     - Expected Output: `6`

var a = 48;
var b = 18;

while (b !== 0) {
    var temp = b;
    b = a % b;
    a = temp;
}

var gcd = a;
console.log(gcd);

// I TOOK 2 MINUTES TO SOLVE THIS QUESTION
// I TOOK THE HELP OF CHATGPT TO SEE WHAT IS GCD.



// 29. **Calculate the LCM of Two Numbers**  
//     - Task: Write a function that calculates the least common multiple (LCM) of two numbers.  
//     - Test: `lcm(4, 6)`  
//     - Expected Output: `12`

var a = 48;
var b = 18;


var originalA = a;
var originalB = b;

while (b !== 0) {
    var temp = b;
    b = a % b;
    a = temp;
}

var gcd = a;


var lcm = (originalA * originalB) / gcd;

console.log(lcm); 


// I TOOK 3 MINUTES TO SOLVE THIS QUESTION
// I DID NOT TAKE ANY HELP FROM ANYONE.  

// 30. **Check for Balanced Parentheses**  
//     - Task: Write a function that checks if a string has balanced parentheses.  
//     - Test: `isBalanced('()')`  
//     - Expected Output: `true`

var str = '()'; 
var stack = [];  
var isBalanced = true;  

for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (char === '(') {
        stack.push('(');  
    } else if (char === ')') {
        if (stack.length === 0) {
            isBalanced = false; 
            break;
        } else {
            stack.pop();  
        }
    }
}

if (stack.length !== 0) {
    isBalanced = false;
}
console.log(isBalanced);  

// I TOOK 5 MINUTES TO SOLVE THIS PROBLEM
// I TOOK THE HELP OF CHATGPT TO SOLVE THIS QUESTION.

// 31. **Rotate an Array**  
//     - Task: Write a function that rotates an array by k steps.  
//     - Test: `rotateArray([1, 2, 3, 4, 5], 2)`  
//     - Expected Output: `[4, 5, 1, 2, 3]`

var arr = [1, 2, 3, 4, 5];
var k = 2;
var n = arr.length;


var rotatedArr = [];


for (var i = n - k; i < n; i++) {
    rotatedArr.push(arr[i]);
}


for (var i = 0; i < n - k; i++) {
    rotatedArr.push(arr[i]);
}


for (var i = 0; i < n; i++) {
    arr[i] = rotatedArr[i];
}

console.log(arr);  

// I TOOK 3 MINUTES TO SOLVE THIS PROBLEM
// I TOOK THE HELP OF CHATGPT TO SOLVE THIS PROBLEM.


STRING QUESTIONSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS


// 1. **Reverse a String**
//    - Task: Write a function that reverses a given string.
//    - Test:
//      ```javascript
//      console.log(reverseString("hello"));
//      ```
//    - Expected Output: `"olleh"`


var str="hello";
var jagjeet= 
str.split("").reverse().join("");
console.log(jagjeet)

// I TOOK 3 MINUTES TO SOLVE THIS PROBLEM 
// I TOOK THE HELP OF CHATGPT TO SEE HOW TO REVERSE THE STRING.


// 2. **Check if a String is a Palindrome**
//    - Task: Write a function that checks if a given string is a palindrome (reads the same forward and backward).
//    - Test:
//      ```javascript
//      console.log(isPalindrome("racecar"));
//      console.log(isPalindrome("hello"));
//      ```
//    - Expected Output:
//      ```javascript
//      true
//      false
//      ```

let str = 'racecar';
let string = 'hello';
   let jagjeet= str === str.split('').reverse().join('');
   let jagjeet2=string===string.split('').reverse().jon('');
   console.log(jagjeet);
   console.log(jagjeet2);


//   I TOOK 2 MINUTES TO SOLVE THIS QUESTION
//   I DID NOT TAKE THE HELP FROM ANYONE.



// 3. **Count the Number of Vowels in a String**
//    - Task: Write a function that counts the number of vowels (`a, e, i, o, u`) in a given string.
//    - Test:
//      ```javascript
//      console.log(countVowels("hello world"));
//      ```
//    - Expected Output: `3`

let str = "hello world";
let count = 0;
let vowels = "aeiouAEIOU";

for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
        if (str[i] === vowels[j]) {
            count++;
        }
    }
}

console.log(count); 

// I TOOK 6 MINUTES TO SOLVE THIS PROBLEM
// I DID NOT TAKE ANY HELP.




// 4. **Find the First Non-Repeated Character in a String**
//    - Task: Write a function that finds the first non-repeated character in a string.
//    - Test:
//      ```javascript
//      console.log(firstNonRepeatedCharacter("swiss"));
//      ```
//    - Expected Output: `"w"`

let str = "swiss";
let found = false;
let result = '';

for (let i = 0; i < str.length; i++) {
    found = true;
    for (let j = 0; j < str.length; j++) {
        if (i !== j && str[i] === str[j]) {
            found = false;
            break;
        }
    }
    if (found) {
        result = str[i];
        break;
    }
}

console.log(result); 


//  I TOOK 12 MINUTES TO SOLVE THIS PROBLEM
//  I TOOK A LITTLE HELP FROM CHATGPT.


// 5. **Count the Number of Words in a String**
//    - Task: Write a function that counts the number of words in a string. Assume words are separated by spaces.
//    - Test:
//      ```javascript
//      console.log(countWords("This is a test string"));
//      ```
//    - Expected Output: `5`

let str = "This is a test string";
let count = 0;
let inWord = false;

for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
        if (!inWord) {
            count++;
            inWord = true;
        }
    } else {
        inWord = false;
    }
}

console.log(count); 

// I TOOK 15 MINUTES TO SOLVE THIS QUESTION
// I DID NOT TAKE ANY HELP FROM ANYONE.




// 6. **Check if Two Strings are Anagrams**
//    - Task: Write a function that checks if two strings are anagrams (contain the same characters in different orders).
//    - Test:
//      ```javascript
//      console.log(areAnagrams("listen", "silent"));
//      console.log(areAnagrams("hello", "world"));
//      ```
//    - Expected Output:
//      ```javascript
//      true
//      false
//      ```

let str1 = 'listen';
let str2 = 'silent';
let str3 = 'hello' ;
let str4 = 'world' ;

str1 = str1.toLowerCase();
str2 = str2.toLowerCase();
str3 = str3.toLowercase();
str4 = str4.toLowercase();

let sortedStr1 = str1.split('').sort().join('');
let sortedStr2 = str2.split('').sort().join('');
let sortedstr3 = str3.split('').sort().join('');
let sortedstr4 = str4.split('').sort().join('');

let areAnagrams = sortedStr1 === sortedStr2;
let areAnagrams2 = sortedStr3 === sortedStr4;
console.log(areAnagrams); 
console.log(areAnagrams2);


// I TOOK 5 MINUTES TO SOLVE THIS QUESTION
// I TOOK A LITLLE HELP FROM W3 SCHOOL FOR THE KEYWORD.


// 7. **Replace All Spaces in a String with Hyphens**
//    - Task: Write a function that replaces all spaces in a string with hyphens (`-`).
//    - Test:
//      ```javascript
//      console.log(replaceSpaces("Hello World"));
//      ```
//    - Expected Output: `"Hello-World"`

var text="hello world"

var jagjeet=text.replace(" ","-")

console.log(jagjeet)

// I TOOK 2 MINUTES TO SOLVE THIS PROBLEM
// I DID NOT TAKE ANY HELP.


// 8. **Convert a String to Title Case**
//    - Task: Write a function that converts a string to title case (capitalizes the first letter of each word).
//    - Test:
//      ```javascript
//      console.log(toTitleCase("this is a test string"));
//      ```
//    - Expected Output: `"This Is A Test String"`

var line="this is a test string"
var world=line.split(" ")
for(i=0;i<world.length;i++){
  world[i]=world[i][0].toUpperCase()+world[i].slice(1)
}
var final=world.join(" ")
console.log(final)

// I TOOK 5 MINUTES TO SOLVE THIS PROBLEM
// I TOOK A HELP OF MY FRIEND.


// 9. **Check if a String Contains Only Digits**
//    - Task: Write a function that checks if a string contains only numeric digits.
//    - Test:
//      ```javascript
//      console.log(isNumeric("12345"));
//      console.log(isNumeric("123a5"));
//      ```
//    - Expected Output:
//      ```javascript
//      true
//      false
//      ```

function isNumeric(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] < '0' || str[i] > '9') {
            return false;
        }
    }
    return true;
}


console.log(isNumeric("12345")); 
console.log(isNumeric("123a5")); 



// I TOOK 4 MINUTES TO SOLVE THIS QUESTION
// I DID NOT TAKE ANYONE'S HELP.



// 10. **Remove Duplicates Characters from a String**
//     - Task: Write a function that removes duplicate characters from a string.
//     - Test:
//       ```javascript
//       console.log(removeDuplicates("programming"));
//       ```
//     - Expected Output: `"progamin"`

let str = "programming";
let result = "";


for (let i = 0; i < str.length; i++) {
    let isDuplicate = false;

    for (let j = 0; j < result.length; j++) {
        if (str[i] === result[j]) {
            isDuplicate = true;
            break;
        }
    }

    
    if (!isDuplicate) {
        result += str[i];
    }
}

console.log(result); 

// I TOOK 5 MINUTES TO SOLVE THIS QUESTION
// I TOOK A LITTLE HELP FROM CHATGPT.



// 11. **Find the Longest Word in a String**
//     - Task: Write a function that finds the longest word in a string.
//     - Test:
//       ```javascript
//       console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
//       ```
//     - Expected Output: `"jumped"`


 const sentence = 'The quick brown fox jumped over the lazy dog';
    const longest = sentence.split(' ').reduce((a, b) => a.length > b.length ? a : b);
    console.log(longest);



    // I TOOK 1 MINUTE TO SOLVE THIS QUESTION 
    // I DID NOT TAKE ANY HELP FROM ANYONE.



// 12. **Capitalize the First Letter of Each Word in a String**
//     - Task: Write a function that capitalizes the first letter of each word in a string.
//     - Test:
//       ```javascript
//       console.log(capitalizeFirstLetters("javascript is fun"));
//       ```
//     - Expected Output: `"Javascript Is Fun"`

var line="javascript is fun"
var world=line.split(" ")
for(i=0;i<world.length;i++){
  world[i]=world[i][0].toUpperCase()+world[i].slice(1)
}
var finel=world.join(" ")
console.log(finel)

// I TOOK 1 MINUTES TO SOLVE THIS PROBLEM
// I DID NOT TAKE ANY HELP.



// 13. **Repeat a String N Times**
//     - Task: Write a function that repeats a given string `n` times.
//     - Test:
//       ```javascript
//       console.log(repeatString("abc", 3));
//       ```
//     - Expected Output: `"abcabcabc"`


let str = "abc";
let n = 3;
let result = "";

for (let i = 0; i < n; i++) {
    result += str;
}

console.log(result); 

// I TOOK 2 MUNTES TO SOLVE THIS QUESTION
// I DID NOT TAKE ANY HELP.


// 14. **Check if a String Contains a Substring**
//     - Task: Write a function that checks if a string contains a given substring.
//     - Test:
//       ```javascript
//       console.log(containsSubstring("hello world", "world"));
//       console.log(containsSubstring("hello world", "planet"));
//       ```
//     - Expected Output:
//       ```javascript
//       true
//       false
//       ```

var str="hello world";
var text1=text.includes(world)
var text2=text.includes(planet)
console.log(text1)
console.log(text2)

// I TOOK 3 MINUTES TO SOLVE THIS QUESTION
// I TOOK THE HELP OF W3 SCHOOL.



// 15. **Convert a String to an Array of Words**
//     - Task: Write a function that converts a string to an array of words.
//     - Test:
//       ```javascript
//       console.log(stringToWords("This is a test"));
//       ```
//     - Expected Output: `["This", "is", "a", "test"]`


var line="this is a test string"
var world=line.split(" ")
for(i=0;i<world.length;i++){
  world[i]=world[i][0].toUpperCase()+world[i].slice(1)
}

console.log(world)

// I TOOK 25 SECONDS TO SOLVE THIS PROBLEM
// I DID NOT TAKE ANY HELP.
 

// 16. **Truncate a String**
//     - Task: Write a function that truncates a string to a specified length and adds "..." at the end.
//     - Test:
//       ```javascript
//       console.log(truncateString("This is a long string", 10));
//       ```
//     - Expected Output: `"This is a..."`


let str = "This is a long string";
let maxLength = 10;
let result = "";

if (str.length > maxLength) {
    for (let i = 0; i < maxLength - 3; i++) {
        result += str[i];
    }
    result += "...";
} else {
    result = str;
}

console.log(result); 


// I TOOK 7 MINUTES TO SOLVE THIS PROBLEM
// I TOOK THE HELP OF CHATGPT.


// 17. **Check if a String Starts with a Specific Substring**
//     - Task: Write a function that checks if a string starts with a given substring.
//     - Test:
//       ```javascript
//       console.log(startsWith("hello world", "hello"));
//       console.log(startsWith("hello world", "world"));
//       ```
//     - Expected Output:
//       ```javascript
//       true
//       false
//       ```

var str="hello world"
var text1=str.startsWith("hello")
var text2=str.startsWith("world")
console.log(text1)
console.log(text2)

// I TOOK 2 MINUTES TO SOLVE THIS PROBLEM
// I DID NOT TAKE HELP.


// 18. **Check if a String Ends with a Specific Substring**
//     - Task: Write a function that checks if a string ends with a given substring.
//     - Test:
//       ```javascript
//       console.log(endsWith("hello world", "world"));
//       console.log(endsWith("hello world", "hello"));
//       ```
//     - Expected Output:
//       ```javascript
//       true
//       false
//       ```

var str="hello world"
var text1=str.endsWith("world")
var text2=str.endsWith("hello")
console.log(text1)
console.log(text2)

// I TOOK 1 MINUTES TO SOLVE THIS PROBLEM
// I DID NOT TAKE HELP.


// 19. **Insert a Substring at a Specific Position in a String**
// - Task: Write a function that inserts a substring at a specific position in a string.
// - Test:
//   ```javascript
//   console.log(insertSubstring("Hello World", "Beautiful ", 6));
//   ```
// - Expected Output: `"Hello Beautiful World"`

var text="hello world"

var jagjeet=text.slice(0,5)+" beatiful "+text.slice(6)

console.log(jagjeet)

// I TOOK 2 MINUTES TO SOLVE THIS PROBLEM
// I DID NOT TAKE TAKE HELP FROM ANYONE OR ANYTHING.



// 20. **Remove All Instances of a Substring**
//     - Task: Write a function that removes all instances of a substring from a string.
//     - Test:
//       ```javascript
//       console.log(removeSubstring("This is a test. This is only a test.", "test"));
//       ```
//     - Expected Output: `"This is a . This is only a ."`

let text1 = "This is a test. This is only a test.";  
var jagjeet = "test";

let text2 = text1.replaceAll(jagjeet, ""); 
console.log(text2);

// I TOOK 5 MINUTES TO SOLVE THIS QUESTION
// I DID NOT TAKE ANY HELP.

ARRAY QUESTIONSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS


// 1. **Sum All Elements in an Array**  
//    - Task: Write a function that returns the sum of all numbers in an array.  
//    - Test: `sumArray([1, 2, 3, 4, 5])`  
//    - Expected Output: `15`
var array=[1,2,3,4,5]
var sum=0;

for(i=0;i<array.length;i++){
    sum=sum+array[i]
}
console.log(sum)


// I TOOK 1 MINUTE TO SOLVE THIS PROBLEM
// I DID NOT TAKE ANY HELP FROM ANYONE.


// 2. **Find the Largest Number in an Array**  
//    - Task: Write a function that returns the largest number in an array.  
//    - Test: `findLargest([1, 5, 3, 9, 2])`  
//    - Expected Output: `9`


  const points = [1,2,3,4,5];
var b=points.sort(function(a, b){return b - a});

console.log(b[1]);


//  I TOOK 1 MINUTES TO SOLVE THIS PROBLEM
//  I DID NOT TAKE HELP FROM ANYONE.



// 3. **Find the Smallest Number in an Array**  
//    - Task: Write a function that returns the smallest number in an array.  
//    - Test: `findSmallest([1, 5, 3, 9, 2])`  
//    - Expected Output: `1`

  var array=[1,2,3,4,5,6]

var b=Math.min.apply(null,array)
console.log(b)

// 2 MIN
// W3 SCHOOL

//  I TOOK 1 MINUTES TO SOLVE THIS PROBLEM
//  I DID NOT TAKE HELP FROM ANYONE.


// 4. **Sort an Array in Ascending Order**  
//    - Task: Write a function that sorts an array in ascending order.  
//    - Test: `sortArray([5, 2, 9, 1, 5, 6])`  
//    - Expected Output: `[1, 2, 5, 5, 6, 9]`

const points = [1,2,3,4,5];
var b=points.sort(function(a, b){return b - a});

console.log(b);


// I TOOK 2 MINUTES TO SOLVE THE QUESTION
// NOT TAKEN ANY HELP


// 5. **Sort an Array in Descending Order**  
//    - Task: Write a function that sorts an array in descending order.  
//    - Test: `sortArrayDescending([5, 2, 9, 1, 5, 6])`  
//    - Expected Output: `[9, 6, 5, 5, 2, 1]`

const points = [1,2,3,4,5];
var b=points.sort(function(a, b){return b - a});

console.log(b[1]);


// I TOOK 2 MINUTES TO SOLVE THIS PROBLEM
// I DID NOT TAKE HELP FROM ANYONE.


// 6. **Reverse an Array**  
//    - Task: Write a function that reverses the elements of an array.  
//    - Test: `reverseArray([1, 2, 3, 4, 5])`  
//    - Expected Output: `[5, 4, 3, 2, 1]`

let arr = [1, 2, 3, 4, 5];
let b = arr.reverse();

// I TOOK 2 MINUTES TO SOLVE THIS QUESTION
// NOT TAKEN ANY HELP

// 7. **Check if an Array Contains a Specific Element**  
//    - Task: Write a function that checks if an array contains a specific element.  
//    - Test: `containsElement([1, 2, 3, 4, 5], 3)`  
//    - Expected Output: `true`

let arr = [1, 2, 3, 4, 5];
let elementToFind = 3;
let found = false;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elementToFind) {
        found = true;
        break; 
    }
}

console.log(found);

// I TOOK 20 MINUTES TO SOLVE THIS QUE.
// I TOOK A LITTLE HELP FROM MY FRIEND.


// 8. **Find the Index of a Specific Element in an Array**  
//    - Task: Write a function that returns the index of a specific element in an array. If the element is not found, return -1.  
//    - Test: `findIndex([1, 2, 3, 4, 5], 3)`  
//    - Expected Output: `2`

let arr = [1, 2, 3, 4, 5];
let elementToFind = 3;
let index = -1; 

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elementToFind) {
        index = i;
        break; 
    }
}

console.log(index); 

// I TOOK 3 MINUTES TO SOLVE THIS QUESTION 
// I DID NOT TAKE ANY HELP TO SOLVE THIS PROBLEM.

// 9. **Remove Duplicates from an Array**  
//    - Task: Write a function that removes duplicate elements from an array.  
//    - Test: `removeDuplicates([1, 2, 2, 3, 4, 4, 5])`  
//    - Expected Output: `[1, 2, 3, 4, 5]`


let array = [1, 2, 2, 3, 4, 4, 5];
let uniqueArray = [];


for (let i = 0; i < array.length; i++) {
    let isDuplicate = false;

   
    for (let j = 0; j < uniqueArray.length; j++) {
        if (array[i] === uniqueArray[j]) {
            isDuplicate = true;
            break;
        }
    }

    
    if (!isDuplicate) {
        uniqueArray.push(array[i]);
    }
}

console.log(uniqueArray); 

// I TOOK 13 MINUTES TO SOLVE THIS QUESTION
// I TOOK THE HELP OF CHATGPT TO SOLVE THIS QUESTION.


// 10. **Merge Two Arrays**  
//     - Task: Write a function that merges two arrays into one.  
//     - Test: `mergeArrays([1, 2, 3], [4, 5, 6])`  
//     - Expected Output: `[1, 2, 3, 4, 5, 6]`

var array1=[1,2,3];
var array2=[4,5,6];
var mergedarr=array1.concat(array2)

console.log(mergedarr)

// I TOOK 2 MINUTES TO SOLVE THIS PROBLEM
// I DID NOT TAKE HELP OF ANYONE.



// 11. **Find the Intersection of Two Arrays**  
//     - Task: Write a function that returns the intersection of two arrays.  
//     - Test: `findIntersection([1, 2, 3], [2, 3, 4])`  
//     - Expected Output: `[2, 3]`

var arr1 = [1, 2, 3];
var arr2 = [2, 3, 4];
var intersection = []; 


for (var i = 0; i < arr1.length; i++) {
    var element = arr1[i];
    
    
    for (var j = 0; j < arr2.length; j++) {
        if (element === arr2[j]) {
            
            var isAlreadyInIntersection = false;
            for (var k = 0; k < intersection.length; k++) {
                if (intersection[k] === element) {
                    isAlreadyInIntersection = true;
                    break;
                }
            }
            
            if (!isAlreadyInIntersection) {
                intersection.push(element);
            }
        }
    }
}

console.log(intersection);  


// I TOOK 6 MINUTES TO SOLVE THIS PROBLEM
// I Took HELP TO SOLVE THIS PROBLEM.(chatgpt)


// 12. **Find the Union of Two Arrays**  
//     - Task: Write a function that returns the union of two arrays.  
//     - Test: `findUnion([1, 2, 3], [2, 3, 4])`  
//     - Expected Output: `[1, 2, 3, 4]`
var arr1 = [1, 2, 3];
var arr2 = [2, 3, 4];
var unionArray = [];
var i = 0, j = 0;
while (i < arr1.length) {
    var found = false;
    j = 0;
    while (j < unionArray.length) {
        if (unionArray[j] === arr1[i]) {
            found = true;
            break;
        }
        j++;
    }
    if (!found) {
        unionArray[unionArray.length] = arr1[i];
    }
    i++;
}
i = 0;
while (i < arr2.length) {
    var found = false;
    j = 0;
    while (j < unionArray.length) {
        if (unionArray[j] === arr2[i]) {
            found = true;
            break;
        }
        j++;
    }
    if (!found) {
        unionArray[unionArray.length] = arr2[i];
    }
    i++;
}
i = 0;
while (i < unionArray.length) {
    console.log(unionArray[i]);
    i++;
}

// I TOOK 10 MINUTES TO SOLVE THIS PROBLEM
// I TOOK THE HELP OF CHATGPT TO SOLVE THIS PPROBLEM.


// 13. **Check if an Array is Sorted**  
//     - Task: Write a function that checks if an array is sorted in ascending order.  
//     - Test: `isSorted([1, 2, 3, 4, 5])`  
//     - Expected Output: `true`

let arr = [1, 2, 3, 4, 5];
let isSorted = true; 

for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
        isSorted = false;
        break; 
    }
}

console.log(isSorted); 


// I TOOK 54 MINUTES TO SOLVE THIS QUESTION
// I TOOK THE HELP OF CHATGPT TO SOLVE THIS PROBLEM.



// 14. **Find the Difference of Two Arrays**  
//     - Task: Write a function that returns the difference of two arrays (elements in the first array that are not in the second array).  
//     - Test: `findDifference([1, 2, 3], [2, 3, 4])`  
//     - Expected Output: `[1]`

var arr1 = [1, 2, 3];
var arr2 = [2, 3, 4];
var differenceArray = [];
var i = 0, j = 0, found;
while (i < arr1.length) {
    found = false;
    j = 0;
    while (j < arr2.length) {
        if (arr1[i] === arr2[j]) {
            found = true;
            break;
        }
        j++;
    }
    if (!found) {
        differenceArray[differenceArray.length] = arr1[i];
    }
    i++;
}
i = 0;
while (i < differenceArray.length) {
    console.log(differenceArray[i]);
    i++;
}

//I TOOK 10 MINUTES TO SOLVE THIS PROBLEM
// I TOOK THE HELP OF CHATGPT TO SOLVE THIS QUESTION.


// 15. **Rotate an Array by K Positions**  
//     - Task: Write a function that rotates an array by `k` positions.  
//     - Test: `rotateArray([1, 2, 3, 4, 5], 2)`  
//     - Expected Output: `[4, 5, 1, 2, 3]`
var arr = [1, 2, 3, 4, 5];
var k = 2;
var n = arr.length;
var rotatedArray = [];
var i = 0;
k = k % n;
while (i < n) {
    var newIndex = (i + k) % n;
    rotatedArray[newIndex] = arr[i];
    i++;
}

i = 0;
while (i < rotatedArray.length) {
    console.log(rotatedArray[i]);
    i++;
}


// 16. **Find the Maximum Difference Between Two Elements in an Array**  
//     - Task: Write a function that finds the maximum difference between any two elements in an array.  
//     - Test: `maxDifference([2, 3, 10, 6, 4, 8, 1])`  
//     - Expected Output: `9`

const points = [2, 3, 10, 6, 4, 8, 1];
var b=points.sort(function(a, b){return b - a});
var c=b[0]-b[b.length-1]
console.log(c)

// I TOOK 8 MINUTES TO SOLVE THIS PROBLEM.
// I TOOK SOME HELP FROM CHATGPT.
 

// 17. **Find the Second Largest Element in an Array**  
//     - Task: Write a function that returns the second largest element in an array.  
//     - Test: `secondLargest([1, 2, 3, 4, 5])`  
//     - Expected Output: `4`

const points = [1,2,3,4,5];
var b=points.sort(function(a, b){return b - a});

console.log(b[1]);

// I TOOK 2 MUNTES TO SOLVE THIS PROBLEM
// I DID NOT TAKE ANY HELP.


// 18. **Find the Pair of Elements with the Maximum Sum in an Array**  
//     - Task: Write a function that finds the pair of elements with the maximum sum in an array.  
//     - Test: `maxSumPair([1, 2, 3, 4, 5])`  
//     - Expected Output: `[4, 5]`

const points = [1,2,3,4,5];
var b=points.sort(function(a, b){return b - a});

console.log([b[1],b[0]]);

// I TOOK 2 MUNTES TO SOLVE THIS PROBLEM
// I DID NOT TAKE ANY HELP.


// 19. **Find the Pair of Elements with the Minimum Sum in an Array**  
//     - Task: Write a function that finds the pair of elements with the minimum sum in an array.  
//     - Test: `minSumPair([1, 2, 3, 4, 5])`  
//     - Expected Output: `[1, 2]`

const points = [1,2,3,4,5];
var b=points.sort(function(a, b){return a - b});

console.log([b[0],b[1]]);

// I TOOK 1 MUNTE TO SOLVE THIS PROBLEM
// I DID NOT TAKE ANY HELP.


// 20. **Move All Zeros to the End of an Array**  
//     - Task: Write a function that moves all zeros in an array to the end, preserving the order of the other elements.  
//     - Test: `moveZeros([0, 1, 0, 3, 12])`  
//     - Expected Output: `[1, 3, 12, 0, 0]`


const points = [0,1,0,4,12];
var b=points.sort(function(a, b){return a - b});

console.log([b[b.length-3],b[b.length-2],b[b.length-1],b[0],b[1]]);


//20 min
//not taken any help


// 21. **Count the Frequency of Each Element in an Array**  
//     - Task: Write a function that counts the frequency of each element in an array.  
//     - Test: `countFrequency([1, 2, 2, 3, 3, 3])`  
//     - Expected Output: `{1: 1, 2: 2, 3: 3}`













// 22. **Find the Most Frequent Element in an Array**  
//     - Task: Write a function that finds the most frequent element in an array.  
//     - Test: `mostFrequent([1, 2, 2, 3, 3, 3])`  
//     - Expected Output: `3`














// 23. **Find the Longest Increasing Subsequence in an Array**  
//     - Task: Write a function that finds the longest increasing subsequence in an array.  
//     - Test: `longestIncreasingSubsequence([10, 22, 9, 33, 21, 50, 41, 60, 80])`  
//     - Expected Output: `[10, 22, 33, 50, 60, 80]`

















// 24. **Find the Longest Consecutive Sequence in an Array**  
//     - Task: Write a function that finds the longest consecutive sequence in an array.  
//     - Test: `longestConsecutive([100, 4, 200, 1, 3, 2])`  
//     - Expected Output: `4` (sequence is `[1, 2, 3, 4]`)









OBJECT QUESTIONSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS

// 1. **Create a Simple Object**
//    - Task: Create an object representing a person with properties `name`, `age`, and `city`.
//    - Test:
//      ```javascript
//      const person = createPerson("John", 25, "New York");
//      console.log(person);
//      ```
//    - Expected Output: `{ name: 'John', age: 25, city: 'New York' }`


var object={
    name:"john",
    age:"25",
    city:"new york"
}
console.log(object)

I TOOK 2 MINUTES TO SOLVE THIS QUESTION
T DID NOT TAKE HELP FROM ANYONE 



// 2. **Access Object Properties**
//    - Task: Write a function that returns the value of a given property from an object.
//    - Test:
//      ```javascript
//      const obj = { name: 'Alice', age: 30 };
//      console.log(getProperty(obj, 'name'));
//      ```
//    - Expected Output: `'Alice'`

var object={
    name:"john",
    age:"25",
    city:"new york"
}
console.log(object.name)

I TOOK HALF MINUTE TO SOLVE THIS QUESTION
T DID NOT TAKE HELP FROM ANYONE 



// 3. **Add a New Property to an Object**
//    - Task: Write a function that adds a new property to an object.
//    - Test:
//      ```javascript
//      const car = { brand: 'Toyota', model: 'Corolla' };
//      addProperty(car, 'year', 2020);
//      console.log(car);
//      ```
//    - Expected Output: `{ brand: 'Toyota', model: 'Corolla', year: 2020 }`


var object={name:"alto",weight:"900 kg"}

object.model = "2020"
console.log(object)


I TOOK 5 MINUTEs TO SOLVE THIS QUESTION
I TOOK HELP FROM CHATGPT TO SEE HOW TO ADD A PROPERTY IN OBJECT.



// 4. **Delete a Property from an Object**
//    - Task: Write a function that deletes a property from an object.
//    - Test:
//      ```javascript
//      const user = { username: 'john_doe', password: '12345' };
//      deleteProperty(user, 'password');
//      console.log(user);
//      ```
//    - Expected Output: `{ username: 'john_doe' }`

var object={name:"alto",weight:"900 kg"}

delete object.weight
console.log(object)

I TOOK ONE MINUTE TO SOLVE THIS PROBLEM
I DID NOT TOOK ANY HELP FROM ANYONE.


// 5. **Check if an Object has a Property**
//    - Task: Write a function that checks if an object has a specific property.
//    - Test:
//      ```javascript
//      const obj = { name: 'Alice', age: 30 };
//      console.log(hasProperty(obj, 'age'));
//      ```
//    - Expected Output: `true`

const obj = { name: 'Alice', age: 30 };

console.log('age' in obj)


I TOOK 2 MINUTES TO SOLVE THIS QUESTION
I TOOK HELP FROM CHATGPT TO SEE HOW TO CHECK IF AN OBJECT HAS A PROPETY OR NOT.


// 6. **Merge Two Objects**
//    - Task: Write a function that merges two objects into one.
//    - Test:
//      ```javascript
//      const obj1 = { a: 1, b: 2 };
//      const obj2 = { b: 3, c: 4 };
//      console.log(mergeObjects(obj1, obj2));
//      ```
//    - Expected Output: `{ a: 1, b: 3, c: 4 }`

  
var obj1 = { a: 1, b: 2 };
     var obj2 = { c: 3, d: 4 };

let mergedObj = Object.assign({},obj1,obj2);
console.log(mergedObj)

I TOOK 5 MINUTES TO SOLVE THIS ROBLEM
I TOOK HELP FROM CHATGPT TO SEE HOW TO MERGE TWO OBJECTS.

// 7. **Clone an Object**
//    - Task: Write a function that creates a deep clone of an object.
//    - Test:
//      ```javascript
//      const original = { name: 'Alice', details: { age: 30, city: 'NYC' } };
//      const clone = cloneObject(original);
//      clone.details.city = 'LA';
//      console.log(original.details.city);
//      console.log(clone.details.city);
//      ```
//    - Expected Output:
//      ```
//      'NYC'
//      'LA'
//      ```
const original = { name: 'Alice', details: { age: 30, city: 'NYC' } };


const clone = {
    name: original.name,
    details: {                                          
        age: original.details.age,
        city: original.details.city
    }
};


clone.details.city = 'LA';

console.log(original.details.city); 
console.log(clone.details.city); 

I TOOK 4 MINUTES TO SOLVE THIS PROBLEM
I DID NOT TAKE ANY HELP.   



// 8. **Loop Through Object Properties**
//    - Task: Write a function that loops through all the properties of an object and prints them.
//    - Test:
//      ```javascript
//      const user = { name: 'John', age: 30, city: 'New York' };
//      printProperties(user);
//      ```
//    - Expected Output:
//      ```
//      name: John
//      age: 30
//      city: New York
//      ```

    const user = { name: 'John', age: 30, city: 'New York' };

    for (const key in user) {
       if (user.hasOwnProperty(key)) {
    console.log(`${key}: ${user[key]}`);
    }
    }


    I TOOK 6 MINUTES TO SOLVE THIS QUESTION
    I TOOK HELP FROM CHATGPT.

// 9. **Count the Number of Properties in an Object**
//    - Task: Write a function that counts the number of properties in an object.
//    - Test:
//      ```javascript
//      const obj = { name: 'Alice', age: 30, city: 'NYC' };
//      console.log(countProperties(obj));
//      ```
//    - Expected Output: `3`

var object={
    name:"jagjeet",
    age:"17",
    village:"upleta"
}
console.log(Object.keys(object).length)

   I TOOK 2 MINUTES TO SOLVE THIS QUESTION
   I DID NOT TAKE HELP FROM ANYONE 



// 10. **Convert Object to Array of Keys**
//     - Task: Write a function that converts an object to an array of its keys.
//     - Test:
//       ```javascript
//       const obj = { name: 'Alice', age: 30, city: 'NYC' };
//       console.log(objectKeysToArray(obj));
//       ```
//     - Expected Output: `['name', 'age', 'city']`


  var object={
  name:"jagjeet",
  age:17,
  gender:"male"
  }
  console.log(Object.keys(object))

   I TOOK 2 MINUTES TO SOLVE THIS QUESTION
   I DID NOT TAKE HELP FROM ANYONE 


// 11. **Convert Object to Array of Values**
//     - Task: Write a function that converts an object to an array of its values.
//     - Test:
//       ```javascript
//       const obj = { name: 'Alice', age: 30, city: 'NYC' };
//       console.log(objectValuesToArray(obj));
//       ```
//     - Expected Output: `['Alice', 30, 'NYC']`


  var object={
  name:"jagjeet",
  age:17,
  gender:"male"
  }
  console.log(Object.values(object))


   I TOOK 2 MINUTES TO SOLVE THIS QUESTION
   I DID NOT TAKE HELP FROM ANYONE 



// 12. **Convert an Array of Objects to a Single Object**
//     - Task: Write a function that converts an array of objects into a single object. Assume each object in the array has a unique `key` property.
//     - Test:
//       ```javascript
//       const arr = [{ key: 'a', value: 1 }, { key: 'b', value: 2 }];
//       console.log(arrayToObject(arr));
//       ```
//     - Expected Output: `{ a: 1, b: 2 }`


     const arr = [{ key: 'a', value: 1 }, { key: 'b', value: 2 }];

     const resultObject = {};
     for (let i = 0; i < arr.length; i++) {
        resultObject[arr[i].key] = arr[i].value;
     }

     console.log(resultObject);

     I TOOK 2 MINUTES TO SOLVE THIS QUESTION
     I DID NOT TAKE HELP FROM ANYONE. 



// 13. **Group Objects by a Property**
//     - Task: Write a function that groups an array of objects by a specific property.
//     - Test:
//       ```javascript
//       const users = [
//         { name: 'Alice', age: 30 },
//         { name: 'Bob', age: 20 },
//         { name: 'Charlie', age: 30 }
//       ];
//       console.log(groupBy(users, 'age'));
//       ```
//     - Expected Output:
//       ```javascript
//       {
//         20: [{ name: 'Bob', age: 20 }],
//         30: [{ name: 'Alice', age: 30 }, { name: 'Charlie', age: 30 }]
//       }
//       ```

const users = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 20 },
    { name: 'Charlie', age: 30 }
];

let grouped = {};
const property = 'age'; 


for (let i = 0; i < users.length; i++) {
    let key = users[i][property];

    if (!grouped[key]) {
        grouped[key] = []; 
    }

    grouped[key].push(users[i]); 
}

console.log(grouped);

I TOOK 67 MINUTES TO SOLVE THIS QUESTION
I TOOK THE HELP OF CHATGPT IN THE END.



// 14. **Find the Object with the Maximum Value of a Property**
//     - Task: Write a function that finds the object with the maximum value of a given property in an array of objects.
//     - Test:
//       ```javascript
//       const users = [
//         { name: 'Alice', age: 30 },
//         { name: 'Bob', age: 20 },
//         { name: 'Charlie', age: 35 }
//       ];
//       console.log(findMax(users, 'age'));
//       ```
//     - Expected Output: `{ name: 'Charlie', age: 35 }`


const users = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 20 },
    { name: 'Charlie', age: 35 }
];

let maxObj = users[0];
const property = 'age'; 


for (let i = 1; i < users.length; i++) {
    if (users[i][property] > maxObj[property]) {
        maxObj = users[i]; 
    }
}

console.log(maxObj); 


I TOOK 4 MINUTES TO SOLVE THIS PROBLEM
I DID NOT TAKE ANY HELP.



// 15. **Sum the Values of a Specific Property in an Array of Objects**
//     - Task: Write a function that sums the values of a specific property in an array of objects.
//     - Test:
//       ```javascript
//       const items = [
//         { name: 'item1', price: 10 },
//         { name: 'item2', price: 15 },
//         { name: 'item3', price: 20 }
//       ];
//       console.log(sumProperty(items, 'price'));
//       ```
//     - Expected Output: `45`

const items = [
    { name: 'item1', price: 10 },
    { name: 'item2', price: 15 },
    { name: 'item3', price: 20 }
];

let total = 0;
const property = 'price';


for (let i = 0; i < items.length; i++) {
    total += items[i][property];
}

console.log(total);

I TOOK 5 MINUTES TO SOLVE THIS PROBLEM.
I TOOK A LITTLE HELP FROM CHATGPT.



















