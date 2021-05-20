/*let peca = "Bispo";

if(peca.toLocaleLowerCase() == "bispo"){
    console.log("Diagonal");
}else if(peca.toLocaleLowerCase() == "torre"){
    console.log("Reto");
}else if(peca.toLocaleLowerCase() == "cavalo"){
    console.log("em 'L' ");
}else if(peca.toLocaleLowerCase() == "rainha"){
    console.log("Para qualquer direçao, quantas casas quiser");
}else if(ppeca.toLocaleLowerCase()eca == "rei"){
    console.log("Qualquer direçao, somente uma casa");
}else if(peca.toLocaleLowerCase() == "peao"){
    console.log("para frente,uma casa e ganha posiçao para diagonal uma posicao");
}else{
    console.log("Peça invalida");
}*/

let chessPiece = 'Rei';

switch (chessPiece.toLowerCase()) {
  case 'rei':
    console.log('Rei-> Uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo-> Diagonal.');
    break;
  case 'rainha':
    console.log('Rainha-> Diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal e vertical.');
    break;
  case 'peão':
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
};