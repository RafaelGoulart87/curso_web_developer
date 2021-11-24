/*
03 - Escreva um programa que receba como entrada dois valores. Após, o
programa deve mostrar uma mensagem “São Múltiplos” ou “Não são Múltiplos”,
indicando se os valores recebidos como entrada são múltiplos entre si.
*/

let numberOne = 22
let numberTwo = 5
let multiply = ""

if (numberOne % numberTwo === 0) {
    multiply = "São multiplos"
} else {
    multiply = "Não são multiplos"
}

console.log(multiply)