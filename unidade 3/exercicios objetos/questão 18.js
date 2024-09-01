import { Endereco } from "./questão 17.js"
import { Data } from "./questão 5.js"

class Empresa{
    constructor(nome, cnpj){
        this.nome = nome
        this.cnpj = cnpj
        this.endereco = new Endereco("José Bonifácio", 32, "casa", "São Cristovão", "Rio de Janeiro", "Rio de Janeiro", 3452100)
        this.dataDeCriacao = new Data()
    }

    get valorDoNome(){
        return this.nome
    }

    set novoNome(nome){
        this.nome = nome
    }

    get valorDoCnpj(){
        return this.cnpj
    }

    set novoCnpj(cnpj){
        this.cnpj = cnpj
    }

    get valorDoEndereco(){
        return this.endereco
    }

    set novoEndereco(objectEndereco){
        this.endereco = objectEndereco
    }

    get valorDaDataDeCriacao(){
        return this.dataDeCriacao
    }

    set novaDataDeCriacao(objectDataDeCriacao){
        this.dataDeCriacao = objectDataDeCriacao
    }
}

let empresa = new Empresa("SSG Core", 349203084787)



empresa.endereco.rua = "Avenida Brasil"

console.log(empresa.valorDoEndereco)