let button1 = document.getElementById("button1")
let button2 = document.getElementById("button2")
let button3 = document.getElementById("button3")
let button4 = document.getElementById("button4")
let texto = document.getElementById("texto")

button1.addEventListener("click", botao1)
button2.addEventListener("click", botao2)
button3.addEventListener("click", botao3)
button4.addEventListener("click", botao4)

function botao1(){
    texto.innerHTML += `<p>clicou no botão 1</p>`
}

function botao2(){
    texto.innerHTML += `<p>clicou no botão 2</p>`
}

function botao3(){
    texto.innerHTML += `<p>clicou no botão 3</p>`
}

function botao4(){
    texto.innerHTML += `<p>clicou no botão 4</p>`
}