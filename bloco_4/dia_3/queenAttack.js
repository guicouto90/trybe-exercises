let linhaRainha = 4;
let colunaRainha = 4;

let linhaOponente = 4;
let colunaOponente = 7;

let ataqueBemSucedido = false;

if((linhaRainha == linhaOponente) || (colunaRainha === colunaOponente)) {
    ataqueBemSucedido = true;
}

for(let iSupDir = 1; iSupDir < 8; iSupDir +=1){
    let linhaAtualRainha = linhaRainha + iSupDir;
    let colunaAtualRainha = colunaRainha + iSupDir;
    
    if((linhaAtualRainha > 8)|| (colunaAtualRainha > 8)){
        break;
    }

    if((linhaAtualRainha === linhaOponente) && (colunaAtualRainha === colunaOponente)){
        ataqueBemSucedido = true;
    }
}

for(let iSupDir = 1; iSupDir < 8; iSupDir +=1){
    let linhaAtualRainha = linhaRainha + iSupDir;
    let colunaAtualRainha = colunaRainha + iSupDir;
    
    if((linhaAtualRainha > 8)|| (colunaAtualRainha > 8)){
        break;
    }

    if((linhaAtualRainha == linhaOponente) && (colunaAtualRainha === colunaOponente)){
        ataqueBemSucedido = true;
    }
}

console.log("Ataque bem sucedido?", ataqueBemSucedido);