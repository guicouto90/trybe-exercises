function verificaPalindrome(palavra){
    let palavra2 = palavra.split("").reverse().join(""); //para inverter a String.
    if(palavra === palavra2){
        return true;
    }else{
        return false;
    }

}

console.log(verificaPalindrome('desenvolvimento'));