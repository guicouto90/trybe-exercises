document.getElementById("elementoOndeVoceEsta").parentNode.style.color = "Blue";
document.getElementById("primeiroFilho").innerText = "Você se lembra dos vídeos da aula anterior, como fazer isso?";
document.getElementById("pai").firstElementChild.innerText = "Teste";
document.getElementById("elementoOndeVoceEsta").previousElementSibling = "Teste2";

let irmaoElementoOndeVoceEsta = document.createElement('div');
irmaoElementoOndeVoceEsta.innerText = "HEY BROTHER";

document.getElementById("pai").appendChild(irmaoElementoOndeVoceEsta);

let filhoElemento = document.createElement('div');
filhoElemento.innerText = "Filho do elementoOndeVoceEsta";

document.getElementById("elementoOndeVoceEsta").appendChild(filhoElemento);
