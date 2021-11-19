function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  }
  
function createDaysOfTheMonth(){  
  let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const daysOfMonth = document.querySelector('#days'); //variavel daysOfMonth pega todos as caracteristicas dos elementos que sejam id DAYS;
  for(let index = 0; index < dezDaysList.length; index += 1){ //looping para criaçao dos dias do mes conforme o array dezDaysList.
      const days = dezDaysList[index];
      const dayListItem = document.createElement('li');
      dayListItem.classList.add('day');
      if ((dezDaysList[index] === 24) || (dezDaysList[index] === 25) || (dezDaysList[index] === 31)) {
        dayListItem.classList.add('holiday');
      }
      if ((dezDaysList[index] === 4) || (dezDaysList[index] === 11) || (dezDaysList[index] === 18) || (dezDaysList[index] === 25)) {
        dayListItem.classList.add('friday');
      }
      dayListItem.innerHTML = days; // elemento 'li' que é o dayListItem(variavel), recebe os dias do mes que estavam na variavel days, derivada do array.
      daysOfMonth.appendChild(dayListItem);
  }
}

function buttonHoliday(feriado){
  let button = document.querySelector('.buttons-container');
  let button1 = document.createElement('button');
  //button1 = button;
  button1.id = 'btn-holiday';
  button1.innerHTML = feriado;
  button.appendChild(button1);
}
//let corDeFundo = document.getElementsByClassName('holiday');
//console.log(corDeFundo);

function clickHoliday(){
  let feriadim = document.getElementsByClassName('holiday');
  let botaoFeriado = document.getElementById('btn-holiday');
  let corDeFundo = 'rgb(238,238,238)';
  let novaCor = 'lightgreen';
  botaoFeriado.addEventListener('click', function(){
    for (let index = 0; index < feriadim.length; index += 1) {
      if(feriadim[index].style.backgroundColor === novaCor) {
        feriadim[index].style.backgroundColor = corDeFundo;
      } else {
        feriadim[index].style.backgroundColor = novaCor;
      }
    }
  })
}

function buttonFriday(sextaCheira){
  let button = document.querySelector('.buttons-container');
  let button1 = document.createElement('button');
  button1.id = 'btn-friday';
  button1.innerHTML = sextaCheira;
  button.appendChild(button1);
}

function clickFriday(){
  let sexta = document.querySelectorAll('.friday');
  let botaoSexta = document.querySelector('#btn-friday');
  //let novaCor = 'lightgreen';
  
  botaoSexta.addEventListener('click', function(){
    for (let index = 0; index < sexta.length; index += 1) {
      console.log(sexta);
      if(sexta[index].style.innerText != 'SEXTOU') {
        sexta[index].style.innerText = 'SEXTOU';
      } /*else {
        sexta[index].style.innerText = novaCor;
      }*/
    }
  })
}


  
  createDaysOfTheWeek();
  createDaysOfTheMonth();
  buttonHoliday('FERIADOS');
  buttonFriday('SEXTA-FEIRA')
  clickHoliday();
  
  // Escreva seu código abaixo.