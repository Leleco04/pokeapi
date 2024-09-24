document.addEventListener("DOMContentLoaded", function () {

  const botao = document.getElementById("botao-pesquisar");
  const display = document.getElementById("input-pesquisar");

  botao.addEventListener("click", function () {
    let pokemon = display.value;
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const nome = document.getElementById("nome") 
    const peso = document.getElementById("peso")
    const altura = document.getElementById("altura")
    const visor = document.getElementById("visor")
    const informacoes = document.getElementById("container-informacoes")
    const hpNum = document.getElementById('hp-numero')
    const ataqueNum = document.getElementById('ataque-numero')
    const defesaNum = document.getElementById('defesa-numero')
    const ataqueEspecialNum = document.getElementById('ataque-especial-numero')
    const defesaEspecialNum = document.getElementById('defesa-especial-numero')
    const velocidadeNum = document.getElementById('velocidade-numero')
    const barra1 = document.getElementById("hp-barra")
    const barra2 = document.getElementById("ataque-barra")
    const barra3 = document.getElementById("defesa-barra")
    const barra4 = document.getElementById("ataque-especial-barra")
    const barra5 = document.getElementById("defesa-especial-barra")
    const barra6 = document.getElementById("velocidade-barra")
    const barras = document.getElementById("barras")

    fetch(url)
      .then(response => {
        if(!response.ok) {
          throw new Error("Erro ao realizar API: " + response.status)
        }
        return response.json()
      })
      .then(data => {
        visor.innerHTML = ""
        informacoes.classList.remove("escondido")
        informacoes.classList.add("exibir")
        barras.classList.remove("barras-esconder")
        barras.classList.add("barras-mostrar")
        const divImg = document.createElement("div")
        divImg.classList.add("div-imagem")
        divImg.innerHTML = `<img src="${data.sprites.other.showdown.front_default}" class="imagem-pokemon">`
        visor.appendChild(divImg)

        let alturaPokemon = (data.height / 10)
        let pesoPokemon = (data.weight / 10)
        // let hp = data.stats[0]['base_stat']
        let status = []
        for(let x = 0; x < 6; x++) {
          status[x] = data.stats[x]['base_stat']
        }

        nome.innerText = `${data.name}`
        peso.innerText = `${pesoPokemon} kg` 
        altura.innerHTML = `${alturaPokemon} metros`
        hpNum.innerText = status[0]
        ataqueNum.innerText = status[1]
        defesaNum.innerText = status[2]
        ataqueEspecialNum.innerText = status[3]
        defesaEspecialNum.innerText = status[4]
        velocidadeNum.innerText = status[5]

        barra1.style.paddingRight = status[0] + "px"
        barra2.style.paddingRight = status[1] + "px"
        barra3.style.paddingRight = status[2] + "px"
        barra4.style.paddingRight = status[3] + "px"
        barra5.style.paddingRight = status[4] + "px"
        barra6.style.paddingRight = status[5] + "px"

      })
      .catch(error => {
        console.log("Erro ao utilizar a API: " + error)
      })

  });

});
