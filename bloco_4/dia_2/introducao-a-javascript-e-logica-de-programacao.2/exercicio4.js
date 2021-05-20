let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma=0;
let media;

for(let contador = 0; contador < numbers.length; contador +=1){
    soma = numbers[contador] + soma;
}

media = soma/numbers.length

if(media>20){
    console.log("Valor maior que 20");
}else{
    console.log("Valor menor ou igual a 20");
}