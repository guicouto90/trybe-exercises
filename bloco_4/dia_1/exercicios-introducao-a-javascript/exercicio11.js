let salarioBruto = 4000;
let salarioBase;
let descINSS;
let descIR;
let salarioLiquido;
let descTotal;



if (salarioBruto <= 1556.94){
    descINSS = salarioBruto * 0.08;
    salarioBase = salarioBruto - descINSS;
}else if(salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
    descINSS = salarioBruto * 0.09;
    salarioBase = salarioBruto - descINSS;
}else if(salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
    descINSS = salarioBruto * 0.11;
    salarioBase = salarioBruto - descINSS;
}else if(salarioBruto >5189.82){
    descINSS = 570.88;
    salarioBase = salarioBruto - descINSS;
}

if(salarioBase<1903.99){
    salarioLiquido = salarioBase;
}
else if(salarioBase >= 1903.99 && salarioBase <= 2826.65){
    descIR = (0.075*salarioBase) - 142.80;
    salarioLiquido = salarioBase - descIR;
}else if(salarioBase >= 2826.66 && salarioBase <= 3751.05){
    descIR = (0.15*salarioBase) - 354.80;
    salarioLiquido = salarioBase - descIR;
}else if(salarioBase >= 3751.06 && salarioBase <= 4664.68){
    descIR = (0.225*salarioBase) - 636.13;
    salarioLiquido = salarioBase - descIR;
}else if(salarioBase >= 4664.69){
    descIR = (0.275*salarioBase) - 869.36;
    salarioLiquido = salarioBase - descIR;
}

descTotal= salarioBruto - salarioLiquido;

console.log("Salario Bruto: R$"+salarioBruto);
console.log("O total de descontos de INSS e IR foi de R$" + descTotal);
console.log("O salario liquido é de R$" + salarioLiquido);