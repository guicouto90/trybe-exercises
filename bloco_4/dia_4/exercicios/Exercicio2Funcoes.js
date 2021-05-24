
function maiorNumeroIndex(arrayTest){
arrayTest = [2,3,6,7,10,1];
let maiorIndex = 0;
let maiorNumero = 0;

for(let index = 0; index <= arrayTest.length; index += 1){
    if (maiorNumero <= arrayTest[index]){
        maiorIndex = index;
        maiorNumero = arrayTest[index];
    }
}
return maiorIndex;
}

console.log(maiorNumeroIndex());