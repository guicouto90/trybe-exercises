let numbers = [5, 9, 3, 19, 70, 8, 100, 20, 35, 27];
let soma=0;
let maior = 0;
let menor;
for(let contador = 0; contador < numbers.length; contador +=1){
    if(maior < numbers[contador]){
        maior = numbers[contador];
    }
}

menor = maior;

for(let contador = 0; contador < numbers.length; contador +=1){
    if(menor > numbers[contador]){
        menor = numbers[contador];
        
    }
}

console.log(menor);

