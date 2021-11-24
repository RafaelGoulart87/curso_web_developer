/*
3 - Dado um array de nomes, faça um programa que imprima na tela todos os
nomes (na mesma linha).
Os valores de entrada serão:
Array;
Exemplo de Entrada:
['Angela', 'Rosa', 'Ticiana', 'Carla', 'Renata']
Exemplo de Saída:
Angela, Rosa, Ticiana, Carla, Renata
*/


let nameList = ['Angela', 'Rosa', 'Ticiana', 'Carla', 'Renata']
let result = ""


for (let i = 0; i < nameList.length; i++) {
    let teste = nameList[i]

    if (i === nameList.length - 1) {
        result = result + teste
    } else {
        result = result + teste + ", "
    }
}
console.log(result)