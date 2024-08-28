class Cliente{
    constructor(nome, cpf, dataDeNascimento, endereco, email, ocupacao, rendaAnual, nivelDeEscolaridade){
        this.nome = nome 
        this.cpf = cpf
        this.dataDeNascimento = dataDeNascimento
        this.endereco = endereco
        this.email = email
        this.ocupacao = ocupacao
        this.rendaAnual = rendaAnual
        this.nivelDeEscolaridade = nivelDeEscolaridade
    }

    get valorDoNome(){
        return this.nome
    }

    set mudarNome(nome){
        this.nome = nome
    }

    get valorDoCpf(){
        return this.cpf
    }

    set mudarCpf(cpf){
        this.cpf = cpf
    }

    get valorDaDataDenascimento(){
        return this.dataDeNascimento
    }

    set novaDataDeNascimento(dataDeNascimento){
        this.dataDeNascimento = dataDeNascimento
    }

    get valroDoEndereco(){
        return this.endereco
    }

    set novoEndereço(endereco){
        this.endereco = this.endereco
    }

    get valorDoEMail(){
        return this.email
    }

    set novoEmail(email){
        this.email = email
    }

    get valorDaOcupacao0(){
        return this.ocupacao
    }

    set novaOcupacao(ocupacao){
        this.ocupacao = ocupacao
    }

    get
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