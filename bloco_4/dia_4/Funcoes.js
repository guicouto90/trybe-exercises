
function soma(a,b){
    return a + b;
}

function subtracao(a,b){
    return a - b;
}

function multiplicacao(a,b){
    return a * b;
}

function divisao(a,b){
    return a / b;
}

function modulo(a,b){
    return a%b;
}


function maior(a,b){
    if(a>b){
        return a;
    }else if(b>a){
        return b;
    }else{
        return "numeros são iguais";
    }
}

console.log(soma(5,4));
console.log(subtracao(10,5));
console.log(multiplicacao(100,50));
console.log(divisao(100,3));
console.log(modulo(50,3));
console.log(maior(123,122));