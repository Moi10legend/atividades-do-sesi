class Gato{
    constructor(nome, raca, idade){
        this.nome = nome
        this.raca = raca
        this.idade = idade
    }

    get valorDoNome(){
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

    miar(){
        console.log("Miau")
    }
}