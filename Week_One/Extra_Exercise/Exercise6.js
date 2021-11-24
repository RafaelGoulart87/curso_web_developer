/*
06 - Escreva um programa que receba como entrada três números que serão
armazenados nas variáveis valueOne, valueTwo e valueThree respectivamente.
Tendo esses valores, mostre-os na tela na ordem em que estão armazenados.
Após ter mostrado faça trocas em que ao final valueTwo assuma o valor de
valueThree, valueThree assuma o valor de valueOne e valueOne assuma o valor
de valueTwo. Mostre ao final os valores atualizados.
*/

let valueOne = 10
let valueTwo = 5
let valueThree = 2
let valueFour = valueTwo

console.log("Valor um = " + valueOne)
console.log("Valor dois = " + valueTwo)
console.log("Valor três = " + valueThree)

valueTwo = valueThree
valueThree = valueOne
valueOne = valueFour

console.log("Valor um = " + valueOne)
console.log("Valor dois = " + valueTwo)
console.log("Valor três = " + valueThree)