class Animal{
    constructor(animal, tipo){
        this.animal = animal
        this.tipo = tipo

    }

    get nomeDoAnimal(){
        return this.animal
    }

    set novoAnimal(animal){
        this.animal = animal
    }

    get valorDoTipo(){
        return this.tipo
    }

    set novoTipo(tipo){
        this.tipo = tipo
    }
    emitirSom(){ 
        throw new Error("O método emitir som deve ser implementado.");
    }
}

class Vaca extends Animal{


    
    emitirSom(){
        console.log("MUUUU")
    }
}

let vaca = new Vaca("mimosa", "vaca")

console.log(vaca.nomeDoAnimal)

vaca.emitirSom()