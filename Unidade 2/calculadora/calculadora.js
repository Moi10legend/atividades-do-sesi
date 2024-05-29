import { simbolos, visor } from "./adicaodenumeros";

function soma(){
    simbolos.push('+')
    visor.innerHTML = "+"
}

function clean(){
    document.getElementById('visor').innerHTML = "";
}