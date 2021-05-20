let array = new Array(25);
console.log(array.length);

for(let contador = 1; contador < array.length; contador +=1){
    array[contador] = Math.ceil(Math.random()*100);
    console.log(array[contador]);
}



for (let index = 1; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (array[index] < array[secondIndex]) {
        let position = array[index];
        array[index] = array[secondIndex];
        array[secondIndex] = position;
      }
      console.log(array[index]);
    }
  }
