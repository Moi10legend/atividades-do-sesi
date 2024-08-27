class Animal{
    constructor(animal, tipo){
        this.animal = animal
        this.tipo = tipo

    }

    emitirSom(){ 
        throw new Error("O método emitir som deve ser implementado.");
    }
}

class Vaca extends Animal{


    get nomeDoAnimal(){
        return this.animal
    }
    emitirSom(){
        console.log("MUUUU")
    }
}

let vaca = new Vaca("mimosa", "vaca")

console.log(vaca.nomeDoAnimal)

vaca.emitirSom()