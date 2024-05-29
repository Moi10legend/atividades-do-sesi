const button = document.querySelector("button")
button.addEventListener("click", converter)
function converter(){
    const numero = window.prompt("digite o valor em graus")
    const tipo = window.prompt("digite o tipo de grau que você quer converter ('C' para celsius 'F' para fahrenheit")
    let conversao 
    if(tipo === 'C'){
        conversao = numero * 1.8 + 32
        window.alert(`${numero}º celcius será ${conversao} graus fahrenheit`) 
    }
    else{
        conversao = (numero -32)/1.8
        window.alert(`${numero}º fahrenheit será ${conversao} graus celcius`) 
    }
    


    
}