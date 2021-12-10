const readFile = require('../readFile');
const sinon = require('sinon');
const { expect } = require('chai');
const fs = require('fs/promises');

describe('ler um arquivo', () => {

  //Comportamento 1
  describe('o output', () => {

    before(() => {//Quando uma funcao tem uma outra funcao dentro dela, é necessario mockar ela.
      sinon.stub(fs, 'readFile').resolves('Harry Potter') //Mocka a funçao readFile do modulo fs.
    });

    after(() => {
      fs.readFile.restore(); //Executa depois de todos os 'its', restora a fs.readFile ao valor inicial.
    })

    it('é uma string', async () => {
      const result = await readFile('testes.txt');
      expect(result).to.be.a('string');
    });

    it('o resultado é igual ao texto do arquivo', async () => {
      const result = await readFile('testes.txt');
      expect(result).to.be.equal('Harry Potter');
    });
  });

  //Comportamento 2
  describe('erro na leitura do arquivo', () => {
    before(() => {
      sinon.stub(fs, 'readFile').rejects('Erro na leitura do arquivo')
    });

    after(() => {
      fs.readFile.restore();
    });

    describe('o output', () => {
      it('é null', async () => {
        const result = await readFile('testes.txt');
        expect(result).to.be.equal(null);
      })
    })
  })

});