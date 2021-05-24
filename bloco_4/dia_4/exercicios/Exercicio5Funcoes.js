function repetition(){
    let arrayTest = [2,3,2,5,8,2,3];
    let repetido = 0;
    let repetido2 = 0;
    
    for(let index in arrayTest){
        
        if(repetido === arrayTest[index]){
            repetido2 = repetido;
        }
    }
}