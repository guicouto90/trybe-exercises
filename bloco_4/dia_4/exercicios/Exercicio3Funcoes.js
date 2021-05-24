
function menorNumeroIndex(arrayTest){
    arrayTest = [2,3,6,7,10,1,-10];
    let menorIndex = 0;
    let menorNumero = 0;
    let maiorIndex = 0;
    let maiorNumero = 0;

    for(let index = 0; index <= arrayTest.length; index += 1){
        if (maiorNumero <= arrayTest[index]){
            maiorIndex = index;
            maiorNumero = arrayTest[index];
        }
    }

    menorNumero = maiorNumero;
    
    for(let index = 0; index <= arrayTest.length; index += 1){
        if (menorNumero >= arrayTest[index]){
            menorIndex = index;
            menorNumero = arrayTest[index];
        }
    }
    return menorIndex;
    }
    
    console.log(menorNumeroIndex());