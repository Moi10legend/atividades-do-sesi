let frase = "eu sou o milior de todos siuuu";

function contarPalavras(frase){
    const palavras = frase.split(" ")
    console.log("Há " + palavras.length + " palavras na frase")
}

contarPalavras(frase)