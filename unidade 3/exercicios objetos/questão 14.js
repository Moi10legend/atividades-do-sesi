class Aluno{
    constructor(nome, matricula, curso){
        this.nome = nome
        this.matricula = matricula
        this.curso = curso
    }

    get valorDoNome(){
        return this.nome
    }

    set novoNome(nome){
        this.nome = nome
    }

    get valorDaMatricula(){
        return this.matricula
    }

    set novaMatricula(matricula){
        this.matricula = matricula
    }

    get valorDoCurso(){
        return this.curso
    }

    set novoCurso(curso){
        this.curso = curso
    }
}