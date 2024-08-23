function contarQuantasVezesOCaractereAparece(caractere, frase){
    let numeroDeVezesQueOCaractereApareceNaFrase = 0
    for(let i = 0; i < frase.length; i++){
        if(frase[i] === caractere ){
            numeroDeVezesQueOCaractereApareceNaFrase += 1; 
        }
    }

    console.log(`O número de vezes que ${caractere} aparece na frase é ${numeroDeVezesQueOCaractereApareceNaFrase}`)
}

contarQuantasVezesOCaractereAparece("f", "É isso Familia Foda, fim!")