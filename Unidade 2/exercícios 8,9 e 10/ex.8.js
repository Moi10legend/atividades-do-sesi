let button = document.getElementById("button")
let texto = document.getElementById("texto")
button.addEventListener("click",calcular)
function calcular(){
    let num = window.prompt("digite o número")
    let parteInteira = parseInt(num)
    let inteiroMaisProximo = Math.round(num)
    let raizQuadrada = Math.sqrt(num)
    let raizCubica = Math.cbrt(num)
    let elv2 = num*num
    let elv3 = num*num*num
    
    texto.innerText = `O valor absoluto é ${num} 
    A parte inteira é ${parteInteira}
    O inteiro mais próximo é ${inteiroMaisProximo}
    A raiz quadrada é ${raizQuadrada}
    A raiz cúbica é ${raizCubica}
    ${num} elevado a 2 é ${elv2}
    ${num} elevado a 3 é ${elv3}`    
}