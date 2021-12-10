function calculaSituacao(media) {
  if (media => 7) {
    return 'aprovado';
  } else if(media < 7) {
    return 'reprovado';
  }
}

module.exports = calculaSituacao;