let valor = 0;
let valor2 = 0;

button = function() {
    valor = parseInt(prompt("Digite um número"))
    valor2 = parseInt(prompt("Digite outro número"))
    let soma = valor + valor2;

    let mensagem = `A soma de ${valor} com ${valor2} é ${soma}`
    document.querySelector("section").innerHTML = mensagem;
}