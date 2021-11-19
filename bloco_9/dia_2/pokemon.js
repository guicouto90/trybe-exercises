// Simulando um servidor respondendo…
// const requestPokemonFromServer = (callback) => {
//   const pokemons = ['Squirtle', 'Kakuna', 'Rattata', 'Pikachu'];
//   const randomIndex = Math.floor(Math.random() * pokemons.length);
//   const randomPokemon = pokemons[randomIndex];

//   const randomTimeResponse = Math.random() * 5000;

//   setTimeout(() => {
//     callback(`${randomPokemon} was received in ${randomTimeResponse} milliseconds`);
//   }, randomTimeResponse);
// };

const appendPokemon = (pokemon) => {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    let img = document.createElement('img');
  
    img.src = pokemon.sprites.other.dream_world.front_default;
    li.innerHTML = `${pokemon.name}</br> ${img.outerHTML}`;
    ul.appendChild(li);
  };
  
/*const getPokemon = (pokemonName, callback) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`) // promise
      .then((response) => {  // todos os dados da requisicao
        response.json().then((jsonDoPokemon) => {
          appendPokemon(jsonDoPokemon)
          callback ? callback() : undefined;
        })
    });
};

const fetchPokemon = () => {
  getPokemon('pikachu', 
    () => getPokemon('kakuna',
       () => getPokemon('squirtle')
    )
  );
};
  
          fetch('https://pokeapi.co/api/v2/pokemon/kakuna') // promise
          .then((response) => {  // todos os dados da requisicao
            response.json().then((jsonDoPokemon) => {
              appendPokemon(jsonDoPokemon)
  
              fetch('https://pokeapi.co/api/v2/pokemon/rattata') // promise
              .then((response) => {  // todos os dados da requisicao
                response.json().then((jsonDoPokemon) => {
                  appendPokemon(jsonDoPokemon)
  
                  fetch('https://pokeapi.co/api/v2/pokemon/pikachu') // promise
                  .then((response) => {  // todos os dados da requisicao
                    response.json().then((jsonDoPokemon) => {
                      appendPokemon(jsonDoPokemon)
                    })
                  })
  
                })
              })
  
            })
          })
  
        })
      })
  };*/
  
  const getPokemonPromise = (pokemonName) => {
    return new Promise((resolve, reject) => {
      if (pokemonName === 'squirtleaa'){
        reject('Esse pokemon não é aceito nesse game');
      } else {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`) //retorna uma promise
      .then((response) => {  // todos os dados da requisicao
        response.json().then((jsonDoPokemon) => { //retorna outra promise
          appendPokemon(jsonDoPokemon);
          console.log(jsonDoPokemon);
          resolve(); // deu bom!
        })
       });
      }
    });
  };

  const fetchPokemonPromise = async () => {
    try {
        await getPokemonPromise('mewtwo')
        await getPokemonPromise('zapdos')
        await getPokemonPromise('dragonite')
        await getPokemonPromise('charizard')    
    } catch (error) {
        console.log(error);
    }   
    
    /*getPokemonPromise('pikachu')
     .then(() => getPokemonPromise('mewtwo'))
     .then(() => getPokemonPromise('kakuna'))
     .then(() => getPokemonPromise('squirtle'))
     .catch((error) => console.log(error));*/

  };
  
  window.onload = fetchPokemonPromise();
  
  // JSON - JavaScript Object Notation
  // Callback Hell