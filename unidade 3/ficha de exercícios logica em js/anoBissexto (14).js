function verificaSeEhAnoBissexto (ano){
    let ehAnoBissexto
    if((ano % 4 == 0) && (ano % 100 != 0 || ano % 400 == 0)){
        ehAnoBissexto = true;
    }else{
        ehAnoBissexto = false;
    }
    console.log(ehAnoBissexto)
}

verificaSeEhAnoBissexto(2100)