let nome = 0;

button = function() {
    nome = prompt("Digite o seu nome")
    
    let mensagem = `Olá! ${nome} Tudo bem?`
    document.querySelector("section").innerHTML = mensagem;
    
}