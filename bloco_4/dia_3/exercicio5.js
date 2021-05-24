let ast = "*";
let n = 7;
let ast2;
let ast3 = new Array(n);


// looping para adicionar o tamanho da piramide.
for(let cont = 1; cont <n; cont+=1){
    if(cont <= n){
        ast += "*";
        
    }
    
}
// looping para preencher todos os indices do array com "*".
for(let cont2 = 0; cont2<n; cont2 +=1){
    ast3[cont2] = ast;

}

//Verificação se o n é a par ou impar, pois muda a sequencia para sair a arvore de natal.

if(n%2==0){
  for(let cont2 = 1; cont2<n; cont2 +=2){
    ast3[cont2] = ast;
    ast2 = ast.replace('**',' ');
    ast = ast2;
  }
}

if(n%2!=0){
    for(let cont2 = 0; cont2<n; cont2 +=2){
        ast3[cont2] = ast;
        ast2 = ast.replace('**',' ');
        ast = ast2;
      }
}

//ALteração na sequencia do indice do vetor, foram trocados de tras para frente com o metodo .reverse();
ast3.reverse();

//exibir a piramide ao contrario
for(let cont = 0; cont <n; cont +=2){
    console.log(ast3[cont]);
}
