/*
01 - Faça um programa que receba de entrada três valores e mostre no console
a soma dos dois maiores.
*/

let numberOne = 3
let numberTwo = 2
let numberThre = 3
let maior = 0
let menor = 0
let medium = 0


if (numberOne > numberTwo && numberOne > numberThre) {
    maior = numberOne
} else if (numberTwo > numberThre && numberTwo > numberOne) {
    maior = numberTwo
} else if (numberThre > numberOne && numberThre > numberTwo) {
    maior = numberThre
}
if (numberOne < numberTwo && numberOne < numberThre) {
    menor = numberOne
} else if (numberTwo < numberThre && numberTwo < numberOne) {
    menor = numberTwo
} else if (numberThre < numberOne && numberThre < numberTwo) {
    menor = numberThre
}
if (numberOne < maior && numberOne > menor) {
    medium = numberOne
} else if (numberTwo < maior && numberTwo > menor) {
    medium = numberTwo
} else if (numberThre < maior && numberThre > menor) {
    medium = numberThre
}

console.log(maior + medium)