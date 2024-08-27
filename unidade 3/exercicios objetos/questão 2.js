class ContaCorrente{
    constructor(numeroDaConta, saldo){
        this.numeroDaConta = numeroDaConta
        this.saldo = saldo
    }

    get valorDoSaldo(){
        return this.saldo
    }

    set inserirSaldo(valorInicial){
        this.saldo = valorInicial
    }

    sacar(valor){
        saldo -= valor
    }

    depositar(valor){
        saldo += valor
    }
    toString(){
        console.log(`Conta: ${this.numeroDaConta} 
                    Saldo: R$${this.saldo}`) 
    } 
}

let conta1 = new ContaCorrente(1)

conta1.inserirSaldo(20)
conta1.depositar(2000)
conta1.sacar(20)
conta1.toString()