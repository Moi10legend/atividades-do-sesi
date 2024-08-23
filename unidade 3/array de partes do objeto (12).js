function retornarArrayComPartesDoObjeto (objeto){
    let chaves = Object.keys(objeto)
    let valores = Object.values(objeto)
    let arrayExterno = []
    for (let i = 0; i < chaves.length; i++) {
        let linhaDaVez = [];
        linhaDaVez.push(chaves[i])
        linhaDaVez.push(valores[i])
        arrayExterno.push(linhaDaVez)
        linhaDaVez = []
    }

    console.log(arrayExterno)
}

retornarArrayComPartesDoObjeto({
    nome: "julia",
    profissao: "esposa troféu",
    idade: 17

})