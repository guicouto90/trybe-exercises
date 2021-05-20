let a = 14;
let b = 14;
let c = 14;

if(a>b && a>c){
    console.log("O maior valor entre os três é: "+ a);
}else if (b>a && b>c){
    console.log("O maior valor entre os três é: "+ b);
}else if(c>a && c>b){
    console.log("O maior valor entre os três é: "+ c);
}else if(a==c && a>b){
    console.log("O valor "+a+" e o valor "+ c+" são iguais e maiores que o valor " + b);
}else if(b==a && a>c){
    console.log("O valor "+a+" e o valor "+b +" são iguais e maiores que o valor " + c);
}else if(c==b && c>a){
    console.log("O valor "+b+" e o valor "+c +" são iguais e maiores que o valor " + a);
}else if(a==b && a==c){
    console.log("Todos os valores sao iguais");
}