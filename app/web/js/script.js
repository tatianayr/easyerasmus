document.addEventListener("DOMContentLoaded", function() {
    var botao = document.getElementById("icone-button");
    var conteudo = document.getElementById("conteudo");
    botao.addEventListener("click", function() {
      conteudo.scrollIntoView({ behavior: "smooth" });
    });
  });
