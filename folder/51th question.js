// 51. Given two arrays, one containing keys and the other containing values, create an object that combines them.
// Input:
// keys = ['name', 'age', 'city']
// values = ['Alice', 30, 'New York']
//  Output:{name: 'Alice', age: 30, city: 'New York'}

//  ANSWER...

const keys = ['name', 'age', 'city'];
const values = ['Alice', 30, 'New York'];
const obj = {};

for (let i = 0; i < keys.length; i++) {
  obj[keys[i]] = values[i];
}

console.log(obj); 


