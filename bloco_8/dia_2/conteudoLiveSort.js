const pizzas = ['Frango com Catupiry', 'Marguerita','Gratinada','Quatro Queijo'];
const numbers = [8,5,93,1,7,4,2,6,10];

/*const comparar = (a, b) => {
  if (a < b)  return -1;
  if (a > b) return 1;
  return 0;
}*/

const comparar = (a, b) => b - a;

console.log(numbers.sort(comparar));
