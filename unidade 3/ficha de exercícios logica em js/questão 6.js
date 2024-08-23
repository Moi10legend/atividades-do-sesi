function verificarSeEstahEntreOsNumeros(numero, minimo, maximo, inclusivo){
    if(numero > minimo && numero < maximo){
        console.log(true)
    }else if(((numero >= minimo) || (numero <= maximo)) && (numero <= maximo) && (inclusivo == true)){
        console.log(true)
    }else{
        console.log(false)
    }
}

verificarSeEstahEntreOsNumeros(5, 2, 5, true)