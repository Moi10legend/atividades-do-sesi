class Cachorro{
    constructor(nome, raca, idade){
        this.nome = nome
        this.raca = raca
        this.idade = idade
    }

    get valorDeNome(){
        return this.nome
    }

    set novoNome(nome){
        this.nome = nome
    }

    get valorDaRaca(){
        return this.raca
    }

    set novaRaca(raca){
        this.raca = raca
    }

    get valorDaIdade(){
        return this.idade
    }

    set novaIdade(idade){
        this.idade = idade
    }
    
    latir(){
        console.log('Au AU')
    }
}