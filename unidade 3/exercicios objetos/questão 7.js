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

    calcularTotal(){
        let total = this.quantidade * this.preco
        console.log(`Valor total: R$${total}`)
    }
}

let vassoura = new Produto("vassoura", 20, 3)

console.log(vassoura.preco)

vassoura.calcularTotal()