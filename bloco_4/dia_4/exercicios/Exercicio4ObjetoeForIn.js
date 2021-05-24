let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald e Christmas on Bear Mountain',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

 info.recorrente = 'Sim';

 let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Dells Four Color Comics #178',
    nota: 'O ultimo MacPatinhas',
  };

 info2.recorrente = 'Sim';

 for(let index in info){
    console.log(info[index], 'e', info2[index]);

}