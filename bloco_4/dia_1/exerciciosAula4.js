let nota = 101;

console.log(nota);
if(nota >= 80 && nota <= 100){
    console.log("PARABENS, VOCE FOI APROVADA(O)");
}else if(nota < 80 && nota >= 60){
    console.log("Voce esta na nossa lista de espera");
}else if(nota > 100){
    console.log("Valor invalido");
}else {
    console.log("Voce foi reprovado");
}
