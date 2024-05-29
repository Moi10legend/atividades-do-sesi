let button = document.getElementById("button")
let text = document.getElementById("text")

button.addEventListener('click', getDate)

function getDate(){
    let mesDoAno = window.prompt("Insira o mês:").toLowerCase()
    
    mesDoAno = mesDoAno.split('')
    mesDoAno[0] = mesDoAno[0].toUpperCase()
    mesDoAno = mesDoAno.join('')

    

    if(mesDoAno === 'Abril' || mesDoAno ==='Maio' || mesDoAno === 'Junho') {
        text.innerHTML = `
        <p>No mês de <mark>${mesDoAno}</mark>, estamos na estação de <mark><b>OUTONO</b></mark></p>
        `
    }else if(mesDoAno === 'Julho' || mesDoAno === 'Agosto' || mesDoAno === 'Setembro'){
        text.innerHTML = `
        <p>No mês de <mark>${mesDoAno}</mark>, estamos na estação de <mark><b>INVERNO</b></mark></p>
        `
    }else if(mesDoAno === 'Outubro' || mesDoAno === 'Novembro' || mesDoAno === "Dezembro"){
        text.innerHTML = `
        <p>No mês de <mark>${mesDoAno}</mark>, estamos na estação de <mark><b>PRIMAVERA</b></mark></p>
        `
    }else{
        text.innerHTML = `
        <p>No mês de <mark>${mesDoAno}</mark>, estamos na estação de <mark><b>VERÃO</b></mark></p>
        `
    }
}

