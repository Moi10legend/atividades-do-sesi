    let nums = [1,2,3,20,22,42]
    function somarNumeros (array){
        let soma = 0 
        for(let i = 0; i < array.length; i++){
            
            soma = soma + array[i]
        }
        console.log("A soma dos números da array é igual: " + soma)
    }
    somarNumeros(nums)