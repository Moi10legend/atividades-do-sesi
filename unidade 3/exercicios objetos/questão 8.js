class Cliente{
    constructor(nome, cpf, dataDeNascimento, endereco, email, ocupacao, rendaAnual){
        this.nome = nome 
        this.cpf = cpf
        this.dataDeNascimento = dataDeNascimento
        this.endereco = endereco
        this.email = email
        this.ocupacao = ocupacao
        this.rendaAnual = rendaAnual
    }

    reatorioDoCliente(){
        console.log(`
        Nome: ${this.nome}
        CPF: ${this.cpf}
        Data de Nascimento: ${this.dataDeNascimento}
        Endereço: ${this.endereco}
        Email: ${this.email}
        Ocupação: ${this.ocupacao}
        Renda anual: ${this.rendaAnual}
        `)
    }
}