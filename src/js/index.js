/*
*
* @Athor : Tiago Soares
*
*/

// OBJETIVO 1- quando clicar no botão do personagem na lista, marcar o botão como selecionado.

// PASSO 1- pegar os botãoes no JS para verificar quando o usuario clicar.

const botoes = document.querySelectorAll(".botao")

// OBJETIVO 2 - quando clicar no botão do personagem mostrar as informações do personagem
// PASSO 1- pega os personagens no js para poder mostrar ou esconder ele.

const personagens = document.querySelectorAll(".personagem")


botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

//PASS 3- verificar se ja existe um botão selecionado, se sim,devemos remover a seleção dele

      const botaoSelecionado =  document.querySelector(".botao.selecionado")
      botaoSelecionado.classList.remove("selecionado")

//PASSO 2- adicionar a classe "selecionado no botão clicado pelo usuario "

        botao.classList.add("selecionado")

//PASS 3- verificar se ja existe um personagem selecionado, se sim,devemos remover a seleção dele

const personagemSelecionado = document.querySelector(".personagem.selecionado")

personagemSelecionado.classList.remove("selecionado")

//PASSO 2- adicionar a classe "selecionado" no personagem que o usuario selecionou
        personagens[indice].classList.add("selecionado")
    })
})