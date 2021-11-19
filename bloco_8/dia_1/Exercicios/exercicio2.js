const randomNum = () => Math.ceil(Math.random()*5);

console.log(randomNum());

const prizeDraw = (num, callback) => {
  if (num === callback) {
    return 'Parabens você ganhou';
  }
  return 'Tente novamente';
}

console.log(prizeDraw(3, randonNum()));

const checkNumber = (number, )

