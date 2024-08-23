let numeros = [22, 33, 44, 23, 54]

function getTheMedia(array){

    let soma = 0;

    for(let i = 0; i < array.length; i++){
        
        soma = soma + array[i]
    }

    let media = soma / array.length;

    console.log("A média total é " + media)
}

getTheMedia(numeros)