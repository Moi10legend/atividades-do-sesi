const button = document.querySelector('button')
button.addEventListener('click', converter)

function converter(){
    const valor = window.prompt("Digite o valor em reais desejado para conversão")
    const conversao = valor / 5.12

    window.alert(`R$${valor} em dólares fica US$${conversao.toFixed(2)}`)
}