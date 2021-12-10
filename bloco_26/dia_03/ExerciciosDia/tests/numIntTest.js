/*
Exercício 1 : Estruture os testes utilizando mocha e chai para um função que irá dizer se um número é "positivo", "negativo" ou "neutro":
Essa função irá receber um número como parâmetro e retornar uma string como resposta;
Quando o número passado for maior que 0 deverá retornar "positivo", quando for menor que 0 deverá retornar "negativo" e quando igual a 0 deverá retornar "neutro";
Descreva todos os cenário de teste utilizando describes ;
Descreva todos os testes que serão feitos utilizando its ;
Crie as asserções validando se os retornos de cada cenário tem o tipo e o valor esperado.


Exercício 2 : Implemente a função apresentada no exercício 1, garantindo que ela irá passar em todos os testes que você escreveu.
DICA : Lembre-se de adicionar o script de test no package.json e de instalar as dependências.
*/

const { expect } = require('chai');

const numInt = require('../numInt');

describe('Quando o numero for MENOR que 0', () => {
  it('retorna "negativo"', () => {
    const resposta = numInt(-1);

    expect(resposta).equals('negativo');
  });
});

describe('Quando o numero for MAIOR que 0', () => {
  it('retorna "positivo"', () => {
    const resposta = numInt(1);

    expect(resposta).equals('positivo');
  });
});

describe('Quando o numero for IGUAL a 0', () => {
  it('retorna "neturo"', () => {
    const resposta = numInt(0);

    expect(resposta).equals('neutro');
  });
});

describe('Verifica se o valor passado no parametro é do tipo "number"', () => {
  it('retorna "o valor deve ser um número"', () => {
    const resposta = numInt("0");

    expect(resposta).equals('o valor deve ser um número');
  });
});