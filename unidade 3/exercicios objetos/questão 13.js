import { Data } from "./questão 5.js";

class Hora{
    constructor(horas, minutos){
        this.horas = horas
        this.minutos = minutos
    }

    get valorDoTempo(){
        return `${this.horas}:${this.minutos}`
    }

    get valorDasHoras(){
        return this.horas
    }

    set novaHora(horas){
        this.horas = horas
    }

    get valorDosMinutos(){
        return this.minutos
    }

    set novoMinuto(minutos){
        this.minutos = minutos
    }
}

class DataHora{
    constructor(data, hora){
        this.data = new Data(21, 2, 2023)
        this.hora = new Hora(2, 40)
    }

    get valorDaData(){
        return this.data
    }

    set novoDia(objectData){
        this.data = objectData
    }

    get valorDaHora(){
        return this.hora.valorDoTempo
    }

    set novaHora(objectHora){
        this.hora = objectHora
    }
}

let dataHora = new DataHora()


dataHora.novoDia = new Data(22, 4, 2024)

console.log(dataHora.valorDaData)

console.log(dataHora.valorDaHora)