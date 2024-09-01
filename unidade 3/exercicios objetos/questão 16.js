class Disciplina{
    constructor(nome, codigo, cargaHoraria){
        this.nome = nome
        this.codigo = codigo
        this.cargaHoraria = cargaHoraria
    }

    get valorDoNome(){
        return this.nome
    }

    set novoNome(nome){
        this.nome = nome
    }

    get valorDoCodigo(){
        return this.codigo
    }

    set novoCodigo(codigo){
        this.codigo = codigo
    }

    get valorDaCargaHoraria(){
        return this.cargaHoraria
    }

    set novaCargaHoraria(cargaHoraria){
        this.cargaHoraria = cargaHoraria
    }
}