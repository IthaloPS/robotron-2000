const subtrair = document.querySelector("#subtrair")
const somar = document.querySelector("#somar")
const peca = document.querySelector("#peca")

const controle = document.querySelectorAll('.controle-ajuste')
console.log(controle)

controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) =>{
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        console.log(manipulaDados)
    })
})

function manipulaDados (operacao, controle) {
    const peca = controle.querySelector("[data-contador]")

    if (operacao === '-') {
        peca.value = parseInt(peca.value) -1
    }
    else {
        peca.value = parseInt(peca.value) + 1
    }
}


