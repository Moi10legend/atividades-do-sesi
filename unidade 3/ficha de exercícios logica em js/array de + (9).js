function formarArrayDeSinalDeAdicao(numeroDeVezesQueVaiRepetir){
    let array = []
    for(let i = 0; i < numeroDeVezesQueVaiRepetir; i++){
        array.push("+")
    }
    console.log(array.join(''))
}

formarArrayDeSinalDeAdicao(4)