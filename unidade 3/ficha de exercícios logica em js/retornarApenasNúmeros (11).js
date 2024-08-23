function retornarApenasNumerosDaArray (array){
    let newArray = []
    for(let i = 0; i < array.length; i++){
        if(!isNaN(array[i])){
            newArray.push(array[i])
        }
    }
    console.log(newArray)
}

retornarApenasNumerosDaArray(["Oi", "Amor", 78, 9, "te amo"])