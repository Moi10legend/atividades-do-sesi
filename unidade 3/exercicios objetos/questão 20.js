class Personagem{
    constructor(nome, pontosDevida, forca){
        this.nome = nome
        this.pontosDevida = pontosDevida
        this.forca = forca
    }

    get valorDoNome(){
        return this.nome
    }

    set novoNome(nome){
        this.nome = nome
    }

    get valorDosPontosDeVida(){
        return this.pontosDevida
    }

    set novoPontosDevida(vida){
        this.pontosDevida = this.pontosDevida
    }

    get valorDaForca(){
        return this.forca
    }

    set novaForca(forca){
        this.forca = forca
    }

    atacar(){

    }

    defender(){

    }
}

class Guerreiro extends Personagem{
    atacar(){
        console.log("Você atacou! -2 pontos de vida ao seu adversário")
    }

    defender(){
        console.log("Você se defendeu e não perdeu vida!")
    }
}