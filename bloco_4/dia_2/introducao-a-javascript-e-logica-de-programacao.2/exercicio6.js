let numbers = [10, 4, 2, 18, 70, 8, 100, 2, 38, 30];
let soma=0;
let impar=0;

for(let contador = 0; contador < numbers.length; contador +=1){
    if(numbers[contador]%2!=0){
        impar+=1;
    }
}

if (impar == 0){
    console.log("nenhum valor impar encontrado");
}

console.log(impar);



