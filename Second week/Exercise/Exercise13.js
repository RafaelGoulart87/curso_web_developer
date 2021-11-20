/*
13 - Dado um array de nomes, faça um programa que tenha como entrada um
valor à ser pesquisado e retorne se o nome existe ou não no array.
Exemplo de Entrada:
[‘Juliana’, ‘Pedro’, ‘Regina’, ‘João’, ‘Patrícia’, ‘Gabriel’, ‘Carlos’, ‘Carla’]
‘Carla’
Exemplo de Saída:
O nome Carla existe no Array.
*/

let listName = ['Juliana', 'Pedro', 'Regina', 'João', 'Patricia', 'Gabriel', 'Carlos', 'Carla']
let name = 'João'

for (let i = 0; i < listName.length; i++) {
    if (listName[i] === name) {
        console.log('O nome ' + name + ' existe no array.')
    } else {
        // console.log('')
    }
}