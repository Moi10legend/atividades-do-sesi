let valor = 0;

button = function() {
    valor = prompt("Digite um número")
    let dobro = valor*2;
    let metade = valor/2;
    let mensagem = `O dobro de ${valor} é ${dobro} e a metade é ${metade}`
    document.querySelector("section").innerHTML = mensagem;
}


   