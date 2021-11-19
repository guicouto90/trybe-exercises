//Conteudo Trybe

const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
const [firstCountry, secondCountry, thirdCountry, fourthCountry] = arrayCountries;
/*
console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada
*/

//Fixação conteudo

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring

const [firstSaudacao, secondSaudacao] = saudacoes;
/*console.log(firstSaudacao);
console.log(secondSaudacao);

let comidaa = 'gato';
let animall = 'água';
let bebidaa = 'arroz';

const arrayTudo = [comidaa, animall, bebidaa];
const [animal, bebida, comida] = arrayTudo;

console.log(comida, animal, bebida); // arroz gato água
*/

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

let numerosPares = [1, 3, 5, 6, 8, 10, 12];
const [numImpar1, numImpar2, numImpar3] = numerosPares;
console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo