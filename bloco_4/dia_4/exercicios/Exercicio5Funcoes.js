function repetition() {
    let arrayTest = [5, 3, 2, 5, 8, 5, 3];
    let repetido = 0;
    let repetido2, repetidoX = 0;

    for(let index = 0; index < arrayTest.length; index += 1){
        repetido2 = 0;
        for(let index2 = 0; index2 < arrayTest.length; index2 += 1){
            //console.log(arrayTest[index]);
            //console.log(arrayTest[index2]);

            if(arrayTest[index] === arrayTest[index2]){
                repetido2 += 1;
                

            }
           
        }
        
        if(repetidoX <= repetido2){
            repetido = arrayTest[index];
            repetidoX = repetido2;

        }


    }
    return repetido;


}

console.log(repetition());