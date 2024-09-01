const prompt = require('prompt-sync')();

class Personagem{
    constructor(nome, pontosDevida, forca, xp, nivel, item){
        this.nome = nome
        this.pontosDevida = pontosDevida
        this.forca = forca
        this.nivel = nivel
        this.xp = xp
        this.item = item
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

    get valorDoNivel(){
        return this.nivel
    }

    get valorDoXp(){
        return this.xp
    }

    get valorDoItem(){
        return this.item
    }


    ganharXp(xp){
        this.xp += xp
        if(this.xp > 10){
            console.log("Parabéns, você subiu de nível!")
            this.pontosDevida += 4
            this.forca += 3
            this.xp = 0
        }
    }

    aumentarForca(){
        if(this.item == "espada"){
            this.forca += 3
        }
    }

    

    atacar(){

    }

    defender(){

    }
}

class Guerreiro extends Personagem{

    atacar(){

        if(this.forca < 5)
        console.log("Você atacou! -2 pontos de vida ao seu adversário")
        else{
            console.log("Você atacou! -8 pontos de vida ao seu adversário")
        }
    }

    defender(){

        if(this.forca < 5){
            console.log("Você se defendeu e perdeu apenas 1 de vida!")
        }else{
            console.log("Você se defendeu e não perdeu vida!")
        }
        
    }
}

class Mago extends Personagem{

    lancarFeitico(tipoDoFeitico){
        if(tipoDoFeitico === "cura"){
            console.log("Você curou seu amigo!")
        }else if(tipoDoFeitico === "explosão"){
            console.log("Você explodiu seu oponente!")
        }
    }

    atacar(){

        if(this.forca < 5)
        console.log("Você atacou! -1 pontos de vida ao seu adversário")
        else{
            console.log("Você atacou! -6 pontos de vida ao seu adversário")
        }
    }

    defender(){

        if(this.forca < 5){
            console.log("Você se defendeu e perdeu apenas 1 de vida!")
        }else{
            console.log("Você se defendeu e não perdeu vida!")
        }

    }
}

class Item{
    constructor(item){
        this.item = item
    }

    get valorDoitem(){
        return this.item
    }

    set novoItem(item){
        this.item = item
    }

    pocaoDeVida(){
        if(this.item == "poção de vida"){
            console.log("Você recuperou 5 pontos de vida!")
        }
    }

    espada(){
        if(this.item == "Espada"){
            
            console.log("Que bela arma de ataque você tem! +3 pontos de força")
        }
    }
}

class Batalha{
    constructor(player1, player2){
        this.player1 = player1
        this.player2 = player2
    }

    batalha(){

        let acao
        let acao2
        for(let i = true; i == true;){
            console.log("Vez de " + this.player1.nome) 
            acao = prompt("Você deseja atacar ou defender? ")
            if((acao === "atacar") && acao2 === "atacar"){
                this.player2.pontosDevida -= 3
                console.log(`${this.player2.nome} está com ${this.player2.pontosDevida} pontos de vida`)
            }else{
                this.player2.pontosDevida -= 1
                console.log(`${this.player2.nome} está com ${this.player2.pontosDevida} pontos de vida`)
            }   

            console.log("Vez de " + this.player2.nome)
            acao2 = prompt("Você deseja atacar ou defender? ")

            if((acao2 === "atacar") && (acao === "atacar")){
                this.player1.pontosDevida -= 3
                console.log(`${this.player1.nome} está com ${this.player1.pontosDevida} pontos de vida`)
            }else{
                this.player1.pontosDevida -= 1
                console.log(`${this.player1.nome} está com ${this.player1.pontosDevida} pontos de vida`)
            }

            if((this.player1.pontosDevida <= 0)){
                console.log(`${this.player1.nome} morreu, ${this.player2.nome} ganhou!`)
                i = false
            }else if(this.player2.pontosDevida <= 0){
                console.log(`${this.player2.nome} morreu, ${this.player1.nome} ganhou!`)
                i = false
            }
        }
    }
}

let batalha1 = new Batalha(new Guerreiro("Sés", 20, 7, 4, 1, "espada"), new Mago("Kyu", 15, 3, 7, 1, "poção de vida"))

batalha1.batalha()