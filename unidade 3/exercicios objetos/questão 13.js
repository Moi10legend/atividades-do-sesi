import { Data } from "./questão 5";

class Hora{
    constructor(horas, minutos){
        this.horas = horas
        this.minutos = minutos
    }
}

class DataHora{
    constructor(){
        this.data = new Data(21, 2, 2023)
        this.hora = new Hora()
    }
}

let dataHora = new DataHora()

console.log(dataHora.data)

