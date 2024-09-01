class Veiculo{
    constructor(placa, modelo, capacidade, lotacao){
        this.placa = placa
        this.modelo = modelo
        this.capacidade = capacidade
        this.lotacao = lotacao
    }

    get valorDaPlaca(){
        return this.placa
    }

    set novaPlaca(placa){
        this.placa = placa
    }

    get valorDoModelo(){
        return this.modelo
    }

    set novoModelo(modelo){
        this.modelo = modelo
    }

    get valorDaCapacidade(){
        return this.capacidade 
    }

    set novaCapacidade(capacidade){
        this.capacidade = capacidade
    }

    set novaLotacao(pessoas){
        this.lotacao = pessoas
    }

    verificarLotacao(){
        console.log(this.lotacao)

        if(this.lotacao > this.capacidade){
            console.log(`O veículo está superlotado`)
        }
    }
}

class Onibus extends Veiculo{
    constructor(linha){
        this.linha = linha
    }

    get valorDaLinha(){
        return this.linha
    }

    set novaLinha(linha){
        this.linha = linha
    }
}

class Metro extends Veiculo{
    constructor(numeroDeVagoes){
        this.numeroDeVagoes = numeroDeVagoes
    }

    get valorDoNumeroDeVagoes(){
        return this.numeroDeVagoes
    }

    set novoNumeroDeVagoes(vagoes){
        this.numeroDeVagoes = vagoes
    }
}

class Bilhete{
    constructor(codigo, saldo){
        this.codigo = codigo
        this.saldo = saldo
    }

    get valorDoCodigo(){
        return this.codigo 
    }

    set novoCodigo(codigo){
        this.codigo = codigo
    }

    get valorDoSaldo(){
        return this.saldo
    }

    set novoSaldo(saldo){
        this.saldo = saldo
    }

    recarregar(recarga){
        this.saldo += recarga
    }
}