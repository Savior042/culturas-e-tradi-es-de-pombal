const jogador = {
  nome: "Novo Jogador",
  idade: 17,
  atributos: {
    finalizacao: gerarOVR(),
    passe: gerarOVR(),
    drible: gerarOVR(),
    defesa: gerarOVR()
  }
};

const app = document.getElementById("app");

app.innerHTML = `
<div class="card">
  <h2>${jogador.nome}</h2>
  <pre>${JSON.stringify(jogador.atributos, null, 2)}</pre>
</div>
`;
