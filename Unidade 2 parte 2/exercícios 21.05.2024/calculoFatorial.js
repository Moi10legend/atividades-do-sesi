let button = document.getElementById("button")
let display = document.getElementById("input")

button.addEventListener('click', fatorial)

function fatorial(number){
    let numeros = []
    let num = Number(display.value)
    let resultado = 0
    
    if(!isNaN(display.value)){
        for(let i = 0; i < display.value; i++){
            numeros.push(num);
            num -= 1;
        }
        
        resultado = numeros[0]

        for(let i = 1; i < numeros.length; i++){
            resultado = resultado*numeros[i]
        }

        document.getElementById("text").innerHTML = `<h2>Calculando ${display.value}!</h2>`
        document.getElementById("result").innerHTML = `<p>${numeros.join(" x ")} = ${resultado}</p>`
    }else{
        window.alert("O valor inserido não é um número válido")
    }
}
     

    
