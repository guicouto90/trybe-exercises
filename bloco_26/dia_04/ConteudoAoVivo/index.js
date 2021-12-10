const express = require('express');

const app = express();


const errorMiddleware = (err, req, res, next) => {
  return res.status(500).json({message: `Algo deu ruim: ${err.message}`})
}

const tokenValidate = (request, response, next) => {
  const token = request.headers.token;
  
  if(!token) return next("Erro");

  next();
}

app.get('/', tokenValidate, (req, res) => {
  return res.status(200).json("WELCOME ")//status
}, errorMiddleware);

app.post('/login', (req, res, next) => {
  const { login, senha } = req.body;

  if(login !== "Thiago" || senha !== "abc") next('Voce nao tem autorizacao')

  return res.status(200).json({message: `Boas Vindas ${login}`})
})

app.get('/rota', (req, res) => {
  const a = 10;
  const b = 50;
  const total = 50 + 10;

  res.status(200).send(`${total}`)
})



app.listen('3002', () => {
  console.log('Aplicacao rodando na porta 3002')
})