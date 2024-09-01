export class Endereco{
    constructor(rua, numero, complemento, bairro, cidade, estado, cep){
        this.rua = rua
        this.numero = numero
        this.complemento = complemento
        this.bairro = bairro
        this.cidade = cidade
        this.estado = estado
        this.cep = cep
    }

    get valorDarua(){
        return this.rua
    }

    set novaRua(rua){
        this.rua = rua
    }

    get valorDoNumero(){
        return this.numero
    }

    set novoNumero(numero){
        this.numero = numero
    }

    get valorDoComplemento(){
        return this.complemento
    }

    set novoComplemento(complemento){
        this.complemento = complemento
    }

    get valorDoBairro(){
        return this.bairro
    }

    set novoBairro(bairro){
        this.bairro = bairro
    }

    get valorDaCidade(){
        return this.cidade
    }

    set novaCidade(cidade){
        this.cidade = cidade
    }

    get valorDoEstado(){
        return this.estado
    }

    set novoEstado(estado){
        this.estado = estado
    }

    get valorDoCep(){
        return this.cep
    }

    set novoCep(cep){
        this.cep = cep
    }

}