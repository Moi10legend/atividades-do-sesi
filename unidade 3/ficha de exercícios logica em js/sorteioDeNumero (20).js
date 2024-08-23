function tenteASorte (num){
    
     function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
    
      let numeroSorteado = getRandomInt(1, 10)
    
    if(num === numeroSorteado){
        console.log(`Parabéns! O número sorteado foi ${numeroSorteado}`)
    }else{
        console.log(`Que pena! O número sorteado foi ${numeroSorteado}`)
    }
}

tenteASorte(3)