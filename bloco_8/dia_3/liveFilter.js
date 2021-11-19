//retorna um array 
// valida a condicao atraves de uma callback

const cities = [
    { state: 'AM', name: 'Manaus', region: 'N' },
    { state: 'PA', name: 'Belém', region: 'N' },
    { state: 'TO', name: 'Porto Nacional', region: 'N' },
    { state: 'MG', name: 'Nepomuceno', region: 'NSE' },
    { state: 'BA', name: 'Cachoeira', region: 'NE' },
    { state: 'PR', name: 'Curitiba', region: 'S' },
    { state: 'SP', name: 'Hortolandia', region: 'SE' },
    { state: 'RN', name: 'Touros', region: 'NE' },
    { state: 'CE', name: 'Jericoacoara', region: 'NE' },
    { state: 'TO', name: 'Palmas', region: 'N' },
    { state: 'MG', name: 'João Pinheiro', region: 'SE' },
];

//let citiesNE = [];

// usando o For normal;
/*
for (let index = 0; index < cities.length; index += 1) {
  if(cities[index].region === 'NE') {
    citiesNE.push(cities[index]);
  }
}

 console.log(citiesNE);*/

 // usando o filter:

 //Filtra todas as cidades do nordeste
 const citiesNE = cities.filter((city) => { 
   return city.region === 'NE';
 });

 console.log(citiesNE);

 //Filtra as cidades do estado do Tocantins
 const citiesTO = cities.filter((city) => {
   return city.state === 'TO';
 });

 console.log(citiesTO);

 //Filtra cidades que começam com a letra C
 const citiesC = cities.filter((city) => {
  // return city.name[0] === 'C';
   return city.name.startsWith('C'); //funcao interna do js para pegar a primeira letra de uma STRING. endsWith() = outra funçao que pega a ultima letra de uma STRING.
 });

 console.log(citiesC);