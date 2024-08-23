function retornarPrimeiroEUltimoElementoDaArray(array){
    let newArray = []
    newArray.push(array[0])
    newArray.push(array.pop())

    console.log(newArray)
}

retornarPrimeiroEUltimoElementoDaArray([2, 4, 5, 7, 19])