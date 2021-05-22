let ast = "*";
let n = 5;
let ast2;
let ast3 = new Array(n);


// looping para adicionar o tamanho da piramide.
for(let cont = 1; cont <n; cont+=1){
    if(cont <= n){
        ast += "*";
        
    }
    
}
//looping para substituir os espaços com * para espaços em brancos, e ao mesmo tempo estavam sendo inseridos no vetor ast3;
for(let cont2 = 0; cont2<n; cont2 +=1){
        ast3[cont2] = ast;
        ast2 = ast.replace('*',' ');
        ast = ast2;
}

//teste para ver a sequencia dos vetores, e vetores foram trocados de tras para frente com o metodo .reverse();
ast3.reverse();

//exibir a piramide ao contrario
for(let cont = 0; cont <n; cont +=1){
        console.log(ast3[cont]);
}