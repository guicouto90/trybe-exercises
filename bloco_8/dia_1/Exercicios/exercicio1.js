const funcionario = (nomeCompleto) => ({nome: nomeCompleto, email: `${nomeCompleto.toLowerCase().replace(' ', '_')}@trybe.com.br` });

const newEmployees = (funcionario) => {
    const employees = {
      id1: funcionario('Pedro Guerra').nome, // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: funcionario('Luiza Drumond').nome, // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: funcionario('Carla Paiva').nome, // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

  console.log(newEmployees(funcionario).id1);
  console.log(newEmployees(funcionario).id2);
  console.log(newEmployees(funcionario).id3);