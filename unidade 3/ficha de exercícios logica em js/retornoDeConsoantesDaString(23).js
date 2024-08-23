let consoantes = ["b", "c", "d", "f", "g", "h", "j", "K", "l", "m","n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]

function mostrarApenasConsoantes(string){
    
    let palavraSoComConsoantes = []
    for(let i = 0; i < string.length; i++){
        for(let a = 0; a < consoantes.length; a++){
            if(string[i] == consoantes[a] || string[i] == consoantes[a].toUpperCase()){
                palavraSoComConsoantes.push(string[i])
            }

        }
        
    }

    console.log(palavraSoComConsoantes.join(""))
}

mostrarApenasConsoantes("tabemos de tudo")
