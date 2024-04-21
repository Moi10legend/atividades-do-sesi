const minhaFrase = "julia é linda";
const palavras = minhaFrase.split(" ");

for (let i = 0; i < palavras.length; i++) {
 palavras[i] = palavras[i][0].toUpperCase() + palavras[i].substring(1);
}

console.log(palavras.join(" "));
console.log(palavras)

