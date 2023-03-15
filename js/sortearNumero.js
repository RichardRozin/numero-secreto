const menorValor = 1
const maiorValor = 999
const numeroSecreto = numeroAleatorio()

function numeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}

console.log(numeroSecreto)

const menor_valor_html = document.querySelector('#menor_valor')
const maior_valor_html = document.querySelector('#maior_valor')

menor_valor_html.innerHTML = menorValor
maior_valor_html.innerHTML = maiorValor
