class Triangulo{
    constructor(ladoA, ladoB, ladoC){
        this.ladoA = ladoA
        this.ladoB = ladoB
        this.ladoC = ladoC
    }

    calcularArea(){
        let area 

        if((this.ladoA > this.ladoB) && (this.ladoA > this.ladoC)){
            area = (this.ladoB * this.ladoC)/2
            console.log(area)
        }else if((this.ladoB > this.ladoA) && (this.ladoB > this.ladoC)){
            area = (this.ladoA * this.ladoC)/2
            console.log(area)
        }else if((this.ladoA == this.ladoB) && (this.ladoA == this.ladoC) && (this.ladoC == this.ladoB)){
            area = ((this.ladoA**2)*Math.sqrt(3))/2
            console.log(area.toFixed(2))
        }else{
            area = (this.ladoA * this.ladoB)/2
            console.log(area)
        }
    }

    calcularPerimetro(){
        let perimetro = this.ladoA + this.ladoB + this.ladoC
        console.log(perimetro)
    }
}

let triangulo = new Triangulo(3, 3, 3)

triangulo.calcularArea()
triangulo.calcularPerimetro()