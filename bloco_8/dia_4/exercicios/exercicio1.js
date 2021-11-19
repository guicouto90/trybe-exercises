const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  const arrayUnique = arrays.reduce((acc, current) => {
    console.log(`Acumulador: ${acc} - Atual: ${current}`);
    return acc.concat(current);
  });
  return arrayUnique;
}

console.log(flatten());

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);