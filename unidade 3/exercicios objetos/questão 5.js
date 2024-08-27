export class Data{
    constructor(dia, mes, ano){
        if((dia >= 1) && (dia <= 31)){
            this.dia = dia
        }else{
            console.log("O dia está inválido")
        }
         
        if(mes >= 0 && mes <= 12){
            this.mes = mes
        }else{
            conaole.log("O mês está inválido")
        }
        
        this.ano = ano
    }

    get queDiaEh(){
        return this.dia
    }

    set mudarDia(dia){
        if((dia >= 1) && (dia <= 31)){
            this.dia = dia
        }else{
            console.log("O dia está inválido")
        }
        
    }

    get queMesEh(){
        return this.mes
    }

    set mudarMes(mes){
        if(mes >= 0 && mes <= 12){
            this.mes = mes
        }else{
            conaole.log("O mês está inválido")
        }
        
    }

    get queAnoEh(){
        return this.ano
    }

    set mudarAno(ano){
        this.ano = ano
    }

    toString(){
        console.log(`${this.dia}/${this.mes}/${this.ano}`)
    }


}

let data = new Data(31, 2, 2024)

data.toString()

