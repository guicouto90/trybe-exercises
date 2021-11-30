/*
A fórmula para calcular velocidade média é distância / tempo .

Armazene o script no arquivo velocidade.js.

Agora, permita que o script seja executado através do comando npm run velocidade . Para isso, crie a chave velocidade dentro do objeto scripts no package.json .
Utilize o readline-sync para solicitar os dados à pessoa.

Considere a distância em metros e o tempo em segundos. Repare que, agora, estamos trabalhando com números inteiros.
*/

const readLine = require('readline-sync');

const velocidadeMedia = () => {

  const distancia = readLine.questionInt('Qual a distancia percorrida? (em m): ');
  const tempo = readLine.questionInt('Em quanto tempo a distancia foi percorrida? (em s): ');
  const total = distancia / tempo;

  console.log(`Distancia: ${distancia}m`);
  console.log(`Tempo: ${tempo}s`);
  console.log(`Velocidade Média: ${total.toFixed(2)}m/s`);
};

velocidadeMedia();