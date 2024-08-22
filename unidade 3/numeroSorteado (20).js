function funcaoDaSorte (num){
    let numeroSorteado = Math.random().toFixed(0) * (10 - 1) + 1

    if(num === numeroSorteado){
        console.log("Parabéns! O número sorteado foi " + numeroSorteado )
    }else{
        console.log("Que pena! O número sorteado foi " + numeroSorteado)
    }
}

funcaoDaSorte(2)

