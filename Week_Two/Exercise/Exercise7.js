/*
7 - Dado um array de números, mostre quantos valores são pares, quantos são
ímpares, quantos são positivos e quantos são negativos.
Exemplo de Entrada:
[-5,0,-3,-4,12]
Exemplo de Saída:
3 valor(es) par(es)
2 valor(es) impar(es)
1 valor(es) positivo(s)
3 valor(es) negativo(s)
*/

let array = [-5, 0, -3, -4, 12]
let par = 0
let impar = 0
let positivo = 0
let negativo = 0

for (i = 0; i < array.length; i++) {
    //let teste = array[i]

    if (array[i] % 2 === 0) {
        par = par + 1
    }
    if (array[i] % 2 !== 0) {
        impar = impar + 1
    }
    if (array[i] > 0) {
        positivo = positivo + 1
    }
    if (array[i] < 0) {
        negativo = negativo + 1
    } else {

    }

}
console.log(par + " valor(es) par(es)" + "\n" + impar + " valor(es) impar(es)" + "\n" + positivo + " valor(es) positivo(s)" + "\n" + negativo + " valor(es) negativo(s)")