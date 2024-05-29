let button = document.getElementById("button")
let button2 = document.getElementById ("button2")
let texto = document.getElementById("texto")
let num = 0
button.addEventListener("click",clicar)
button2.addEventListener("click",resetar)
function clicar(){
    texto.innerText = num
    num += 1

}
function resetar(){
    num = 0
    texto.innerText = num
}