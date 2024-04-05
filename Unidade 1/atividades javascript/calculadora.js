
let num1 = prompt("escreva o número");
let num2 = prompt("escreva outro número");

num1 = Number(num1);
num2 = Number(num2);

console.log(`${num1} + ${num2} = ${num1 + num2}`);
console.log(`${num1} - ${num2} = ${num1 - num2}`);
console.log(`${num1} * ${num2} = ${num1 * num2}`);
console.log(`${num1} / ${num2} = ${num1 / num2}`);


let idade = prompt("escreva sua idade");

idade = Number(idade);

if(idade >= 18){
    console.log("você é maior de idade");
}else{
    console.log("você é menor de idade")
}

for(let i = 1; i <= 100; i++){
    console.log(i)
}
