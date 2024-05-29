let button = document.getElementById("button")
let input = document.getElementById("input")
let text = document.getElementById("text")
let subtitle = document.getElementById("subtitle")
let clearButton = document.getElementById("clear")

clearButton.addEventListener('click', clear)
button.addEventListener('click', makeMultiplicationTable)

function makeMultiplicationTable(){

    let number = Number(input.value)
    
    subtitle.innerText = `Tabuada do ${number}`

    for(let i = 1; i <= 10; i++){
        text.innerHTML += `<p>${number} x ${i} = ${number * i}</p>`
    }
}

function clear(){
    subtitle.innerHTML = ""
    text.innerHTML = ""
    input.value = ""
}

