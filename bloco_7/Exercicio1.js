const testingScope = (escopo) => (
    escopo === true ? `Não devo ser utilizada fora do meu escopo (if) ótimo, fui utilizada no escopo !`: `Não devo ser utilizada fora meu escopo (else)`
);
  console.log(testingScope(false));


  /*const sortFunction = (a, b) => { 
    return (a - b) }*/

const sortFunction = (a, b) => a - b;

  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  oddsAndEvens.sort(sortFunction);

  console.log(oddsAndEvens);