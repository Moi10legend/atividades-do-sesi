function verificarSeNumeroEIndiceSaoPares(array){
    let novaArray = []
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 == 0 && (i % 2 == 0 || i == 0)){
            novaArray.push(array[i])
        }
    }

    console.log(novaArray)
}

verificarSeNumeroEIndiceSaoPares([1, 2, 3, 4, 5, 5, 8])