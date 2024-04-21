function soma(a, b) {
    return a + b
}

let estahFuncionando = true;

if(soma(1,2) === 5){
    console.log(estahFuncionando)
}else{
    console.log(!estahFuncionando)
}

console.log(soma(2,2))

module.exports = {soma}


