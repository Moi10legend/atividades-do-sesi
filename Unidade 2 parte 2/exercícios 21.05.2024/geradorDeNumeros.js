let buttonGerar = document.getElementById("gerar")
let buttonLimpar = document.getElementById("limpar")
let texto  = document.getElementById("text")

buttonGerar.addEventListener('click', gerar)
buttonLimpar.addEventListener('click', limpar)

function gerar(){
    min = Math.ceil(1)
    max = Math.floor(101)
    let numero = Math.floor(Math.random() * (max - min) + min);
    
    
    texto.innerHTML += `<p>Acabei de pensar no número ${numero}!`
}

function limpar(){
    texto.innerHTML = ""
}