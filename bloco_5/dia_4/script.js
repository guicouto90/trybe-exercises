function buttonColor(cor){
    let button = document.querySelector('.button-container');
    let button1 = document.createElement('button');
    button1.id = 'btn-cor';
    button1.innerHTML = cor;
    button.appendChild(button1);
}

function corDeFundo(){
    let mudarCor = document.querySelector('body');
    let botao = document.getElementById('btn-cor');
    let corAtual = 'white';
    let novaCor = 'lightgreen';
    botao.addEventListener('click', function(){
        if(mudarCor.style.backgroundColor === novaCor){
            mudarCor.style.backgroundColor = corAtual;
        } else {
            mudarCor.style.backgroundColor = novaCor;
        }
    })
}
function buttonTextColor(cor){
    let button = document.querySelector('.button-container');
    let button1 = document.createElement('button');
    button1.id = 'btn-text';
    button1.innerHTML = cor;
    button.appendChild(button1);
}

function corDoTexto(){
    let mudarCorTexto = document.querySelector('body');
    let botao = document.getElementById('btn-text');
    let fonteAtual = 'black';
    let novaFonte = 'darkblue';
    botao.addEventListener('click', function(){
        if(mudarCorTexto.style.color === novaFonte){
            mudarCorTexto.style.color = fonteAtual;
        } else {
            mudarCorTexto.style.color = novaFonte;
        }
    })
}


buttonTextColor("Mude a cor do texto");
buttonColor("Mude a cor de fundo");
corDoTexto();
corDeFundo();