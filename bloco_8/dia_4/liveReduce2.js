const assert = require('assert');

const numbers = [2, 3 ,4, 6, 8, 12, 24];


const evenNumbers = numbers.reduce((accumulator, current) => {
  if (current % 2 !== 0) {
    return accumulator + 0;
  }
  return accumulator + current;
});

//testes
const expectedValue = 56;
assert.strictEqual(evenNumbers, expectedValue);


//Mesma coisa ali de cima, porem usando o filter junto, e encadeando duas funcoes juntas.

const somaPares = numbers
.filter((par) => par % 2 === 0)
.reduce((acumulador, atual) => acumulador + atual);

console.log(somaPares);