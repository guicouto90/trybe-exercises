const assert = require('assert');

const players = [
  { fullName: 'Adriano Imperador', email: 'didico@futebol.br' },
  { fullName: 'Ronaldinho Gaucho', email: 'bruxo@futebol.br' },
  { fullName: 'Ronaldo Fenomeno', email: 'cortesdocascao@futebol.br' },
  { fullName: 'Marta Vieira da Silva', email: 'rainhamarta@futebol.br' },
];

const newPlayers = players.reduce((accumulator, currentValue) => {
  accumulator[currentValue.fullName] = currentValue.email;
  return accumulator
}, {});

console.log(newPlayers);

//Teste
const expectedValue = {
  'Adriano Imperador': 'didico@futebol.br',
  'Ronaldinho Gaucho': 'bruxo@futebol.br',
  'Ronaldo Fenomeno': 'cortesdocascao@futebol.br',
  'Marta Vieira da Silva': 'rainhamarta@futebol.br',
};

assert.deepStrictEqual(newPlayers, expectedValue);