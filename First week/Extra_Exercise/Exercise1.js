/*
01 - Faça um programa que receba de entrada três valores e mostre no console
a soma dos dois maiores.
*/

let numberOne = 7
let numberTwo = 4
let numberThre = 8
let maior = ""
let maior1 = ""
let medium = ""


if (numberOne > numberTwo && numberOne > numberThre) {
    maior = numberOne
}
if (numberTwo > numberThre && numberTwo > numberOne) {
    maior = numberTwo
}
if (numberThre > numberOne && numberThre > numberTwo) {
    maior = numberThre
}
// if (numberOne > numberTwo && numberOne > numberThre) {
//     maior1 = numberOne
// }
// if (numberTwo > numberThre && numberTwo > numberOne) {
//     maior1 = numberTwo
// }
// if (numberThre > numberOne && numberThre > numberTwo) {
//     maior1 = numberThre
// }

console.log(maior)