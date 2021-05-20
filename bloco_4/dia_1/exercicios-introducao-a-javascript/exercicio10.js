let custoProduto = 10.0;
let custoTotal = custoProduto + (custoProduto * 0.2);
let valorVenda = -1;
let lucro = valorVenda - custoTotal;
let lucroMil = lucro *1000;

if (custoProduto < 0 || valorVenda < 0){
    console.log("Valores invalidos o programa está sendo encerrado");
   if(lucro < custoTotal){
       console.log("Teve prejuizo de R$" + lucro + " por produto");
       console.log("A empresa teve prejuizo por 1000 produtos vendidos de R$"+lucroMil);
    }else if(lucro == custoTotal){
       console.log("A empresa está no 0x0");
    }else if(lucro > custoTotal){
       console.log("A empresa teve lucro de R$"+lucro +" por produto vendido");
      console.log("A empresa lucrou por 1000 produtos vendidos de R$"+lucroMil);
    }
}
