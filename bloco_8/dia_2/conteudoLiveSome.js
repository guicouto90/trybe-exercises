const pizzas = [
    { flavor: 'Frango com Catupiry', price: 12.20 },
    { flavor: 'Marguerita', price: 13.50  },
    { flavor: 'Gratinada', price: 15.32  },
    { flavor: 'Quatro Queijo', price: 13.63 },
  ];


//Jeito de fazer SOME mais trabalhoso
/*const priceLessThan13 = (pizzasArray) => {
  let result = false;
  for (let index = 0; index < pizzasArray.length; index +=1) {
    if(pizzasArray[index].price < 13) {
        result = true;
    }
  }
  return result;
}*/

//console.log(priceLessThan13(pizzas));

//Usando o metodo some
const priceLessThan13 = (pizzasArray) => {
  return pizzasArray.some((pizza) => {
   return pizza.price < 13;
  })
}

console.log(priceLessThan13(pizzas));