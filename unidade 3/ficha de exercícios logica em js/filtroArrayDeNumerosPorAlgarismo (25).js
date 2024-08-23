function filtrarNumerosPorAlgarismos (arrayDeNumeros, quantidadeDeAlgarismos){
    let numerosParaString = []
    let novaArrayDeString = []
    let novaArrayDeNumeros = []
    for(let i = 0; i < arrayDeNumeros.length; i++){
        numerosParaString.push(arrayDeNumeros[i].toString())
        
        
        // if(numerosParaString[i].length == 2 ){

        // }
        
    }
    novaArrayDeString = numerosParaString.filter((numero) => numero.length == quantidadeDeAlgarismos)
    for(let i = 0; i < novaArrayDeString.length; i++){
        novaArrayDeNumeros.push(parseInt(novaArrayDeString[i]))
    }

    console.log(novaArrayDeNumeros)
}

filtrarNumerosPorAlgarismos([1, 2, 3, 3, 44, 55, 567], 2)

