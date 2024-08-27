class Pessoa{
    constructor(nome, idade, altura){
        this.nome = nome;

        if(idade >= 0){
            this.idade = idade;
        }else{
            console.log("Idade inválida")
        }
        
        if(altura > 0){
            this.altura = altura
        }else{
            console.log("Altura inválida")
        }
        
    }

    toString(){
        console.log(`
        Nome: ${this.nome}
        Idade: ${this.idade} anos
        Altura: ${this.altura}m`
        )
    }
}

let pessoa1 = new Pessoa("Moisés Freire", 18, 1.65)

pessoa1.toString()