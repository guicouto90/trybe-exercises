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
  const daysOfMonth = document.querySelector('#days');
  for(let index = 0; index < dezDaysList.length; index += 1){
      const days = dezDaysList[index];
      const dayListItem = document.createElement('li');
      dayListItem.classList.add('day');
      if ((dezDaysList[index] === 24) || (dezDaysList[index] === 25) || (dezDaysList[index] === 31)) {
        dayListItem.classList.add('holiday');
      }
      if ((dezDaysList[index] === 4) || (dezDaysList[index] === 11) || (dezDaysList[index] === 18) || (dezDaysList[index] === 25)) {
        dayListItem.classList.add('friday');
      }
      dayListItem.innerHTML = days;
      daysOfMonth.appendChild(dayListItem);
  }
}
  
  createDaysOfTheWeek();
  createDaysOfTheMonth();
  
  // Escreva seu código abaixo.