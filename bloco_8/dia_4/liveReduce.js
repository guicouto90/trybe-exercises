const assert = require('assert');

const numbers = [2, 3 ,4, 6, 8, 12, 24];

//usando o for 
/*
let sumWithFor = numbers[0];
for (let index = 1; index < numbers.length; index += 1) {
  sumWithFor = sumWithFor + numbers[index];
}*/

// usando o reduce:

const sumWithFor = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

//testes
const expectedValue = 59;
assert.strictEqual(sumWithFor, expectedValue);