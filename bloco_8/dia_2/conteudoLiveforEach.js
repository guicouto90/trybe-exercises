const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'i', 'j'];
const numbers = [1,2,3,4,5,6,7,8,9,10];

//For normal
/*or (let index = 0; index < letters.length; index += 1) {
    console.log(letters[index]);
}

// Estutura forEach
letters.forEach((valor) => {
    console.log(valor);
}); */

const pizzas = [
  {flavor: 'Frango com Catupiry', price: 12.20 },
  {flavor: 'Marguerita', price: 13.50 },
  {flavor: 'Gratinada', price: 15.32 },
  {flavor: 'Quatro Queijo', price: 13.63}
]

pizzas.forEach((pizza) => {
  console.log(pizza.flavor);
});
