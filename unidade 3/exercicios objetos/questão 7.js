class Produto{
    constructor(nome, preco, quantidade){
        this.nome = nome

        if(preco >= 0){
            this.preco = preco
        }else{
            console.log("O valor não pode ser negativo")
        }
        
        this.quantidade = quantidade
    }

    get valorDeNome(){
        return this.nome
    }

    set novoNome(nome){
        this.nome = nome
    }

    get valoDopreco(){
        return this.preco
    }

    set novoPreco(preco){
        if(preco >= 0){
            this.preco = preco
        }else{
            console.log("O valor não pode ser negativo")
        }

    }

    get valorDaQuantidade(){
        return this.quantidade
    }

    set novaQuantidade(quantidade){
        this.quantidade = quantidade
    }

    calcularTotal(){
        let total = this.quantidade * this.preco
        console.log(`Valor total: R$${total}`)
    }
}

let vassoura = new Produto("vassoura", 20, 3)

console.log(vassoura.preco)

vassoura.calcularTotal()