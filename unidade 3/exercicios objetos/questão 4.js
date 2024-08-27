class Retangulo{
    constructor(base, altura){
        if(base > 0){
            this.base = base
        }else{
            console.log(`Base inválida`)
        }

        if(altura > 0){
            this.altura = altura
        }else{
            console.log(`Altura inválida`)
        }
    }

    get valorDaBase(){
        return base
    }

    set novaBase(base){
        if(base > 0){
            this.base = base
        }else{
            console.log(`Base inválida`)
        }
        
    }

    get valorDaAltura(){
        return altura
    }

    set novaAltura(altura){
        if(altura > 0){
            this.altura = altura
        }else{
            console.log(`Altura inválida`)
        }
        
    }

    calcularArea(){
        let area = this.altura*this.base
        console.log(`A área do retângulo é ${area}`)
    }

    calcularPerimetro(){
        let perimetro = this.base*2 + this.altura*2
        console.log(`O perímetro do retângulo é ${perimetro}`)
    }
}

let ret = new Retangulo(2, 3)

ret.calcularArea()
ret.calcularPerimetro()