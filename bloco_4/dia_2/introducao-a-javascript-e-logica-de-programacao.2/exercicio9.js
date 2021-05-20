let numbers = new Array(25);


for (let contador = 1; contador < 25; contador+=1){
    numbers[contador] = contador;
    //console.log(numbers[contador]); 
}
let div = new Array(numbers.length);
console.log(div.length);

for (let contador = 1; contador <= numbers.length; contador+=1){
    div[contador] = numbers[contador]/2;
    console.log(div[contador]);
}