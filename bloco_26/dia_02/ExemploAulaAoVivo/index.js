const axios = require('axios');

const getPokemonId = async (id) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`); 
  
  return response.data;
}

//Jeito normal de chamar 1 pokemon por vez.
/*async function main() {
  const pokemon = await getPokemonId(25)
  console.log(`Pokemon: ${pokemon.name}`)
};

//Chama 50 pokemons por vez;
async function main() {
  for(let i = 1; i <= 50; i+= 1) {
    const pokemon = await getPokemonId(i)
    console.log(`Pokemon: ${pokemon.name}`)
  }
};*/

//Chama o total de pokemons que vc quer, e eles sao retornados de uma vez, quer dizer tudo é carregado primeiro, e depois é retornado.
async function main(total) {
  const promises = [];
  for(let i = 1; i <= total; i+= 1) {
    const pokemon = await getPokemonId(i)
    promises.push(pokemon)
    
  };

  const pokemons = await Promise.all(promises); //executa todas as promises no pokemon.
  pokemons.forEach(pokemon => console.log(`Pokemon: ${pokemon.name}`)); //identa todoas as posicoes do array.
};

main(300);


