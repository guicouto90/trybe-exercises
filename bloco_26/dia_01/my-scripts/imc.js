const readLine = require('readline-sync');
const imc = () => {
  const peso = readLine.questionInt('Qual o seu peso? (em kg)');
  const altura = readLine.questionInt('Qual sua altura? (em cm)')
  total = peso / Math.pow((altura /100), 2);
  let tipo = "";

  if(total < 18.5) {
    tipo = "Abaixo do peso(magreza)";
  } else if(total >= 18.5 && total <= 24.9) {
    tipo = 'Peso normal ';
  } else if(total >= 25 && total <= 29.9) {
    tipo = 'Acima do peso (sobrepeso)';
  } else if(total >= 30 && total <= 34.9) {
    tipo = 'Obesidade grau I ';
  } else if(total >= 35 && total <= 39.9) {
    tipo = 'Obesidade grau II';
  } else if(total >= 40) {
    tipo = 'Obesidade graus III e IV'
  }

  console.log(`Peso: ${peso}kg`);
  console.log(`Altura: ${altura}cm`);

  console.log(`IMC: ${total.toFixed(2)}`)
  console.log(`O seu IMC se encaixa na categoria: ${tipo}`)
};

imc();