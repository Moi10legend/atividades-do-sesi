let listaDeDespesas = [{
    nome: "HBOMAX",
    categoria: "entretenimento",
    preco: 29.90
    },
    {
        nome: "Iphone15",
        categoria: "Eletrônicos",
        preco: 4700.00
    }
    
]

function depesasTotais (array){
    let soma = 0;

    for(let i = 0; i < array.length; i++){
        soma = array[i].preco + soma;
    }

    console.log("A despesa total é " + soma)
}

depesasTotais(listaDeDEspesas)