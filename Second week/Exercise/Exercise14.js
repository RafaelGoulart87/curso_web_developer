/*
14 - Dado um array de números, faça um programa que encontre o menor
elemento deste array e sua posição. Mostre as informações encontradas no
console.
Exemplo de Entrada:
[1,2,3,4,-5,6,7,8,9,10]
Exemplo de Saída:
Menor valor: -5
Posição: 4
*/


let numbers = [4, 3, 10]
let minimumValue = numbers[0]
let position = 0


for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < minimumValue) {
        position = i
        minimumValue = numbers[i]
    }

}

console.log(minimumValue, position)