function pegarMaiorMedia (objeto){
    let chaves = Object.keys(objeto)
    let valores = Object.values(objeto)
    let maiorMedia = 0;
    let maiorMediaEPessoa = []

    for(let i = 0; i < chaves.length; i++){
        let mediaDaVez = 0
        let arrayDeNotasDaVez = valores[i]
        let totalDaVez = 0
        for(let a = 0; a < valores[i].length; a++){
            
            
            totalDaVez += arrayDeNotasDaVez[a]
        }

        mediaDaVez = (totalDaVez / arrayDeNotasDaVez.length).toFixed(3)
        totalDaVez = 0

        if(mediaDaVez > maiorMedia){
            maiorMedia = mediaDaVez
            maiorMediaEPessoa["nome"] = chaves[i]
            maiorMediaEPessoa["media"] = maiorMedia
        }


    }

    console.log(maiorMediaEPessoa)

}

pegarMaiorMedia({
    joao: [8, 7.6, 8.9, 6],
    mariana: [9, 6.6, 7.9, 8],
    carla: [7, 7, 8, 9]
})