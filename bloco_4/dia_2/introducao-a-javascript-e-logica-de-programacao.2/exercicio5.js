let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 500];
let soma=0;
let maior=0;

for(let contador = 0; contador < numbers.length; contador +=1){
    if(maior < numbers[contador]){
        maior = numbers[contador];
    }
}

console.log(maior);