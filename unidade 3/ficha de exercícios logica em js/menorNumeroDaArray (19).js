let listaDeNumeros = [1, -2, 3, 10, -10]

function getTheSmallestNumber(array){
    let menorValor = array[0];
    for(let i = 0; i < array.length; i++)
        {
            
            if(menorValor > array[i]){
                menorValor = array[i]
            }
        }
    console.log("O menor valor é " + menorValor)
}

getTheSmallestNumber(listaDeNumeros)