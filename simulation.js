function gerarOVR() {
  return Math.floor(Math.random() * 45) + 55;
}

function simularTemporada(jogador) {
  return {
    idade: jogador.idade++,
    gols: Math.floor(Math.random() * 40),
    assistencias: Math.floor(Math.random() * 20)
  };
}
