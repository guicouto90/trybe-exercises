//exercise 1
// const expression = (num1, num2 , num3) => {
//   return new Promise((resolve, reject) => {
//     if(typeof num1 !== "number" || typeof num2 !== "number" || typeof num3 !== "number") {
//       reject("Informe apenas números");
//     }
//     const result = ((num1 + num2) * num3);
//     if(result < 50) {
//       reject("Valor muito baixo");
//     }
//     resolve(result);
//   });
// };
// const generateNumber = () => {
//   const numbers = [];
//   for(let index = 0; index < 3; index += 1) {
//     numbers.push(Math.floor(Math.random() * 10 + 1));
//   }
//   return numbers;
// };
//Exercise 2
// expression(...generateNumber())
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
//Exercise 3
// const main = async () => {
//   try {
//     const result = await expression(...generateNumber());
//     console.log(result);
//   } catch(err) {
//     console.error(err);
//   };
// }
// main();
//Exercise 4.1
const fs = require('fs');
const nomeDoArquivo = 'simpsons.json';
// fs.readFile(nomeDoArquivo, 'utf8', (err, data) => {
//   if (err) {
//     console.error(`Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`);
//     process.exit(1);
//   }
//   JSON.parse(data).forEach(({ id, name}) => {
//     console.log(`${id} - ${name}`);
//   });
// });
//Exercise 4.2
const findCharacterByID = (idSimp) => {
  return new Promise((resolve, reject) => {
    if(idSimp < 1 || idSimp > 10 || typeof idSimp !== "number") reject("Valores inválidos");
    const dataSimpsons = JSON.parse(fs.readFileSync(nomeDoArquivo, 'utf8'));
    const selected = dataSimpsons.filter(({ id }) => Number(id) === idSimp );
    resolve(selected);
  });
};
findCharacterByID(40)
  .then((character) => console.log(character))
  .catch((err) => console.log(err));
