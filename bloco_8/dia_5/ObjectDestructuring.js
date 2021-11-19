const product = {
    name: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas',
  };


const { name } = product;
console.log(name); // Smart TV Crystal UHD


const student = {
    a: 'Maria',
    b: 'Turma B',
    c: 'Matematica',
  };
  
  const { a: nome, b: classAssigned, c: subject } = student;
  
  console.log(nome); // Maria
  console.log(classAssigned); // Turma B
  console.log(subject); // Matemática
  console.log(student);

  