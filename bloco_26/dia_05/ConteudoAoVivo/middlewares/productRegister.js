const productRegister = (req, res, next) => {
  console.log("Estou Registrando um produto");

  const { name, price } = req.body;

  if(!name) next({status: 400, message: "name not found"})

  const product = {
    name,
    price,
  };


  return res.status(201).json(product);
}

module.exports = productRegister;