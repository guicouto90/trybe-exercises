

function maiorNome(){
  let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana', 'Guilherme'];
  let maior = nomes[0];


  for(let index = 0; index < nomes.length; index += 1){
      if(maior.length <= nomes[index].length){
          maior = nomes[index];
      }
  }
  return maior;
}

console.log(maiorNome());




