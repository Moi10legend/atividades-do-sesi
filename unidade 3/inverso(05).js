function booleanoOuNumericoInv(valor) {
    if (!isNaN(valor)) { 
        let inverso = valor * (-1)
        console.log("O valor inverso é " + inverso)
    } else if (valor == true) {
        valor = false
        console.log("O valor inverso é " + valor)
    
    } else if (valor == false){
        valor = true
        console.log("o valor inverso é " + valor)

    } 
    
} let valor = 7
booleanoOuNumericoInv(valor)