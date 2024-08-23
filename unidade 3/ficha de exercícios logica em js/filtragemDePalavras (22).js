function filtrarPalavras(palavra, array){
    let filtroDaPalavra = []
    let palavrasFiltradas = []
    for(let i = 0; i < array.length; i++ ){
        for(let a = 0; a < palavra.length; a++){
            filtroDaPalavra.push(array[i][a])
            
        }
        if(filtroDaPalavra.join('') === palavra){
            palavrasFiltradas.push(array[i]) 
            filtroDaPalavra = []  
        }else{
            filtroDaPalavra = []
        }
    }
    console.log(palavrasFiltradas)
}

filtrarPalavras("pro", ["programador", "pro-gamer", "profissional"])