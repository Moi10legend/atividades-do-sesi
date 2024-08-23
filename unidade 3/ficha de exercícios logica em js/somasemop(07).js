let num1 = 4
let num2 = 6
function multSemOperador(num1, num2){
    let resultado = 0
    for(let i = 0; i < num2; i++){
        resultado += num1;
    }
    console.log(`O resultado é ${resultado}`)
}

multSemOperador(num1, num2)