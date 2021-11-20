/*
11 - Crie um algoritmo que tem como entrada um array de notas, e imprime no
console a média aritmética dessas notas.
Exemplo Entrada:
[6, 8, 7]
Exemplo Saída:
7
*/

let number = [6, 8, 7]
let result = 0

for (let i = 0; i < number.length; i++) {
    result += number[i]

}
console.log(result / number.length)