const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./middlewares/logger');
const productRegister = require('./middlewares/productRegister');
const error = require('./middlewares/error');
const auth = require('./middlewares/auth');
const productList = require('./middlewares/productList');

const app = express();
const port = 3000;

app.use(logger);
app.use(bodyParser.json())

app.get('/', (req,res,next) => {
  return res.status(200).json({message: "Boas Vindas"})
});

app.post('/product', auth, productRegister);

app.get('/product', productList);

app.use(error)

app.listen(port, ()=> console.log(`Porta ${3000}`))