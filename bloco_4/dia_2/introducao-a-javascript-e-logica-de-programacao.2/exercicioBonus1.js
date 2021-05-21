/*let array = new Array(5);
//console.log(array.length);

for(let contador = 0; contador < array.length; contador +=1){
    array[contador] = Math.ceil(Math.random()*10);
    console.log(array[contador]);
}



console.log("-----------------------------------------------")

for(let contador1 = 1; contador1 < array.length; contador1 +=1){
  for(let contador2 = 0; contador2< contador1; contador2=+1){
    if(array[contador1]< array[contador2]){
      let posicao = array[contador1];
      array[contador1] = array[contador2];
      array[contador2] = posicao;  
    }
      
  }
}
console.log("-----------------------------------------------")

console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);*/

let array = [9,4,6,8,10];

for(let contador1 = 1; contador1 < array.length; contador1 +=1){
  for(let contador2 = 0; contador2< contador1; contador2=+1){
    if(array[contador1]< array[contador2]){
      let posicao = array[contador1];
      array[contador1] = array[contador2];
      array[contador2] = posicao;  
    }
      
  }
}

console.log(array);
