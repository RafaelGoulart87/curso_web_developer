/*
5 - Crie um algoritmo que tem como entrada um número e imprime a sua
tabuada do 1 ao 10.
Exemplo Entrada:
5
Exemplo Saída:
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50
*/

let number = 5
result = ""

for (i = 1; i < 11; i++) {

    console.log(number + " x " + [i] + " = " + (number * [i]))


}