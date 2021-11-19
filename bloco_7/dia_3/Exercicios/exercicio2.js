const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui

console.log(myRemove([1, 2, 3, 4], 3));

const array = [1, 2, 3, 4];
const newArray = myRemove([1, 2, 3, 4], 3);

assert.notStrictEqual(array, newArray);

assert.deepStrictEqual(array,myRemove([1,2,3,4],5));