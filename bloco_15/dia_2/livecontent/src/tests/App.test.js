import React from 'react';
import {fireEvent, render, screen, waitForDomChange} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App'

const mockPokemons = {
    cards: [
        {
            "id": "xyp-XY174",
            "name": "Pikachu-EX",
            "nationalPokedexNumber": 25,
            "imageUrl": "https://images.pokemontcg.io/xyp/XY174.png",
            "imageUrlHiRes": "https://images.pokemontcg.io/xyp/XY174_hires.png",
            "types": [
              "Lightning"
            ],
            "supertype": "Pokémon",
            "subtype": "EX",
            "hp": "130",
            "retreatCost": [
              "Colorless"
            ],
            "convertedRetreatCost": 1,
            "number": "XY174",
            "artist": "5ban Graphics",
            "rarity": "Common",
            "series": "XY",
            "set": "XY Black Star Promos",
            "setCode": "xyp",
            "text": [
              "When a Pokémon-EX has been Knocked Out, your opponent takes 2 Prize cards."
            ],
            "attacks": [
              {
                "cost": [
                  "Lightning",
                  "Colorless"
                ],
                "name": "Thunder Shock",
                "text": "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
                "damage": "30",
                "convertedEnergyCost": 2
              },
              {
                "cost": [
                  "Lightning",
                  "Lightning",
                  "Colorless"
                ],
                "name": "Mega Thunderbolt",
                "text": "Discard all Energy attached to this Pokémon.",
                "damage": "160",
                "convertedEnergyCost": 3
              }
            ],
            "resistances": [
              {
                "type": "Metal",
                "value": "-20"
              }
            ],
            "weaknesses": [
              {
                "type": "Fighting",
                "value": "×2"
              }
            ]
          }
    ]
}

describe('App.js tests', () => {
  test('Verificar se exibe o texto de pesquisar', () => {
    render(<App />);
    const h3text = screen.getByRole('heading', { // Procura o heding com o nome pesquise pokemon
      name: /pesquise um pokemon/i
    });
    expect(h3text).toBeInTheDocument();
  });

  test('Exibe o input e o botao', () => {
    render(<App />);
    const inputPokemon = screen.getByRole('textbox');//Input na tela
    expect(inputPokemon).toBeInTheDocument(); 

    const searchButton = screen.getByRole('button', { //Botao na tela
      name: /pesquisar/i,
    });
    expect(searchButton).toBeInTheDocument();
  });

  test('Se input recebe dados', () => {
    render(<App />);
    const inputPokemon = screen.getByRole('textbox');//Input na tela
    userEvent.type(inputPokemon, 'oi'); //userEvent utilizado para quando se tem um evento, nesse caso foi o 'type', que foi digitado 'oi';

    expect(inputPokemon).toHaveValue('oi'); //Espera que tenha sido digitado oi no input
  });

  test('Aparece o card quando pesquisado o pokemon', async () => {
    global.fetch =  jest.fn().mockImplementation( //setou um novo fetch usando o global.fetch, onde o que vem em sequencia sobreescreve o fetch padrao.
      function(url) { //Funcao simula exatamente o que um fetch faz quando se chamaria uma API real.
        return Promise.resolve({
          json: () => Promise.resolve(mockPokemons),
        })
      }
    )
    render(<App />);

    const inputPokemon = screen.getByRole('textbox');
    const searchButton = screen.getByRole('button', {
      name: /pesquisar/i,
    });

    userEvent.type(inputPokemon, 'pikachu');
    userEvent.click(searchButton);

    //waitFor()
    //waitForElementToBeRemoved() utilizar em momentos que ha assincronissidade;


    const pikachuName = await screen.findByText('Pikachu-EX'); //FindByText utilizado para funcoes assincronas
    expect(pikachuName).toBeInTheDocument();
  })
});