document.addEventListener("DOMContentLoaded", function () {
  const botao = document.getElementById("botao-pesquisar");
  const display = document.getElementById("input-pesquisar");
  botao.addEventListener("click", function () {
    let valorDisplay = display.value;
    alert(valorDisplay);
    display.value = ""
  });
});
