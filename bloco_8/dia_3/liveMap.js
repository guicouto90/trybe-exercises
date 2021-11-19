//mapea o array original para gerar o segundo array
const states = [
    { short: 'AM', name: 'Amazonas' },
    { short: 'PA', name: 'Pará' },
    { short: 'TO', name: 'Tocantins' },
    { short: 'MG', name: 'Minas Gerais' },
    { short: 'BA', name: 'Bahia' },
    { short: 'PR', name: 'Paraná' },
    { short: 'SP', name: 'São Paulo' },
    { short: 'RN', name: 'Rio Grande do Norte' },
    { short: 'CE', name: 'Ceará' }  
];

const regions = [
 { short: 'N', name: 'Norte' },
 { short: 'S', name: 'Sul' },
 { short: 'CW', name: 'Centrooeste' },
 { short: 'NE', name: 'Nordeste' },
 { short: 'SE', name: 'Sudeste'}
];

const cities = [
    { state: 'AM', name: 'Manaus', region: 'N' },
    { state: 'PA', name: 'Belém', region: 'N' },
    { state: 'TO', name: 'Porto Nacional', region: 'N' },
    { state: 'MG', name: 'Nepomuceno', region: 'SE' },
    { state: 'BA', name: 'Cachoeira', region: 'NE' },
    { state: 'PR', name: 'Curitiba', region: 'S' },
    { state: 'SP', name: 'Hortolandia', region: 'SE' },
    { state: 'RN', name: 'Touros', region: 'NE' },
    { state: 'CE', name: 'Jericoacoara', region: 'NE' },
    { state: 'TO', name: 'Palmas', region: 'N' },
    { state: 'MG', name: 'João Pinheiro', region: 'SE' },
];

// Usando o for
/*
let citiesAndStates = []
for (let index = 0; index < cities.length; index += 1) {
  citiesAndStates.push(`${cities[index].name} - ${cities[index].state}`);
}
console.log(citiesAndStates);*/

// Usando o map
const citiesAndStates = cities.map((city) => {
  return `${city.name} - ${city.state}`;
});
console.log(citiesAndStates);

//Pega propriedades de dois arrays diferentes.
let citiesAndStatesName = cities.map((city) => {
    const findState = states.find((state) => {
      return state.short === city.state;
    })
  return `A cidade de ${city.name} fica no estado de ${findState.name}`;
});
console.log(citiesAndStatesName);

//Retorna um objeto com 3 arrays diferentes
const arrayCities = cities.map((city) => {
  const findState = states.find((state) => state.short === city.state);
  const findRegion = regions.find((region) => city.region === region.short);
  return {
    state: findState.name,
    city: city.name,
    region: findRegion.name
  }
});

console.log(arrayCities);