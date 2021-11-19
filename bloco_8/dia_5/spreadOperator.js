// Faça uma lista com as suas frutas favoritas
/*const specialFruit = ['maçã', 'abacaxi', 'banana'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['granola', 'aveia', 'farinha lactea'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));
*/
//Aula ao vivo
// 1
const array = ['Ana Joana', 'Alberto', 'Joaquim'];

console.log(...array);

//2

const horrorBooks = ['It', 'The Shining'];
const scifiBooks = ['I, Robot', 'Caves of Steel', 'The End of Eternity'];
//Utilizando o for

let aewsomeBooks = [];
for(let index = 0; index < horrorBooks.length; index += 1) {
    aewsomeBooks.push(horrorBooks[index]);
};

for(let index = 0; index < scifiBooks.length; index += 1) {
    aewsomeBooks.push(scifiBooks[index]);
};

// Utilizando o spread

const books = [...horrorBooks, ...scifiBooks];

console.log(aewsomeBooks);
console.log(books);

//3Exemplo

const point = [1.0, 2.2, -6.6];
const otherPoint = [0.1, 3.5, -99.6];

printPointCoordinates = (x, y, z) => `Point coordinates are x = ${x}, y${y} and z = ${z}`;

console.log(printPointCoordinates(...point));
console.log(printPointCoordinates(...otherPoint));

