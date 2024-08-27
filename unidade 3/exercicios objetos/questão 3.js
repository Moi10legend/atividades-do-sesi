class Calculadora{
    somar(a, b){
        console.log(a + b)
    }

    subtrair(a, b){
        console.log(a - b)
    }

    dividir(a, b){
        console.log(a /  b)
    }

    multiplicar(a, b){
        console.log(a * b)
    }
}

let calculadora = new Calculadora()

calculadora.somar(2, 3)
calculadora.subtrair(2, 3)
calculadora.dividir(2, 3)
calculadora.multiplicar(2, 3)