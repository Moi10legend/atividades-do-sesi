function pegarOSegundoMaiorNumero (array){
    let maiorNumero = 0
    let segundoMaiorNumero = 0
    for(let i = 0; i < array.length; i++){
        if(array[i] > maiorNumero){
            maiorNumero = array[i]
        }
    }
    
    for(let i = 0; i < array.length; i++){
        if((array[i] > segundoMaiorNumero) && (array[i] < maiorNumero)){
            segundoMaiorNumero = array[i]
        }
    }

    console.log(segundoMaiorNumero)
}

pegarOSegundoMaiorNumero([11, 33, 567, 3, 900, 901, 1234])