class Professor{
    constructor(nome, departamento, titulacao){
        this.nome = nome
        this.departamento = departamento
        this.titulacao = titulacao
    }

    get valorDoNome(){
        return this.nome
    }

    set novoNome(nome){
        this.nome = nome
    }

    get valorDoDepartamento(){
        return this.departamento
    }

    set novoDepartamento(departamento){
        this.departamento = departamento
    }

    get valorDaTitulacao(){
        return this.titulacao
    }

    set novaTitulacao(titulacao){
        this.titulacao = titulacao
    }
}