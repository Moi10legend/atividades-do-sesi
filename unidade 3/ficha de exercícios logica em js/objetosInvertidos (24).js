function inverterObjetos (objeto){
    let chaves = Object.keys(objeto)
    let valores = Object.values(objeto)
    let objetoInvertido = {}

    for(let i = 0; i < chaves.length; i++){
        objetoInvertido[valores[i]] = chaves[i]
        
    }

    console.log(objetoInvertido)
}

inverterObjetos({
    nome: "Moisés",
    idade: 18,
    curso: "engenharia de software"
})