//Conteudo Trybe

function quantosParams(...args) {
    console.log('parâmetros:', args);
    return `Você passou ${args.length} parâmetros para a função.`;
  }
  
  console.log(quantosParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
  console.log(quantosParams('string', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.


  //Conteudo Ao vivo

  //exemplo1
  const sumAllParameters = (...params) => {
    let sum = 0;
    params.forEach((value) => {
      sum += value;
    });
    return sum;
  };

  console.log(sumAllParameters(1,5,10,2235,35548,20003,-10000,565656,-1000000,500000));

  //exempplo2

  const formatDate = (year, month, day, hour, minute, second) => {
    return `${day}/${month}/${year} - ${hour}:${minute}:${second}`;
  };

  const dateInfo = ['1981', '7', '31', '22', '47', '12'];

  console.log(formatDate(...dateInfo));