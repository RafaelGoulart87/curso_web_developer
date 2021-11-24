/*
02 - Elabore um programa que receba três valores como entrada e mostre eles
em ordem crescente no console.
*/

let numberOne = 8
let numberTwo = 9
let numberThre = 7
let first = 0
let second = 0
let third = 0

if (numberOne > numberTwo && numberOne > numberThre) {
    first = numberOne
}
if (numberTwo > numberThre && numberTwo > numberOne) {
    first = numberTwo
}
if (numberThre > numberOne && numberThre > numberTwo) {
    fisrt = numberThre
}
if (numberOne < numberTwo && numberOne < numberThre) {
    third = numberOne
}
if (numberTwo < numberThre && numberTwo < numberOne) {
    third = numberTwo
}
if (numberThre < numberOne && numberThre < numberTwo) {
    third = numberThre
}
if (numberOne < first && numberOne > third) {
    second = numberOne
}
if (numberTwo < first && numberTwo > third) {
    second = numberTwo
}
if (numberThre < first && numberThre > third) {
    second = numberThre
}


console.log(third, second, first)