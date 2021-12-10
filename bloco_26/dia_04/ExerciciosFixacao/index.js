const express = require('express');
const app = express();

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

//Para o array inteiro.
app.get('/drinks', (req, res) => {
  res.json(drinks);
});

//Query String;
app.get('/drinks/search', (req, res) => {
  const { name, maxPrice } = req.query;
  const filteredDrink = drinks.filter((r) => r.name.includes(name));
  res.status(200).json(filteredDrink);
});

//Definindo uma rota, por exemplo pelo ID
app.get('/drinks/:id', (req, res) => {
  const {id} = req.params;
  const drink = drinks.find((r) => r.id === parseInt(id));

  if(!drink) return res.status(404).json({message: 'Drink not Found'})

  res.status(200).json(drink);
});

app.listen(3000, ()=> {
  console.log('Aplicação ouvindo na porta 3000')
});