const numInt = (num) => {
  if(typeof num !== "number") {
    return "o valor deve ser um número"
  }
  
  if(num < 0) {
    return "negativo"
  } else if(num > 0) {
    return "positivo"
  } else if(num === 0) {
    return "neutro"
  }
};

module.exports = numInt;