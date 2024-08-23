function formarArrayComMesmoValor(valor, numeroDeRepetições){
    let array = []
    for(let i = 0; i < numeroDeRepetições; i++){
        array.push(valor)
    }
    console.log(array)
}

formarArrayComMesmoValor("moisés", 4)