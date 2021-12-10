const productList = (req, res, next) => {

  const product = [
    {
      name: "celular",
      price: 1000,
    },
    {
      name: "fone de ouvido",
      price: 50,
    },
  ];
  
  return res.status(200).json(product);
};

module.exports = productList;