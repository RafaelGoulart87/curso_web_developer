/*
10 - Crie uma função chamada calculate que possui três parâmetros. O primeiro
é uma string e os outros dois, números. A string será uma das seguintes opções:
"soma", "subtrai", "multiplica", "divide". A função calculate deve retornar o
resultado da operação (definida pela string) entre os dois números.
Exemplo de Entrada:
"soma"
3
5
-----------------
"divide"
21
7
Exemplo de Saída:
8
*/

function calculate(string, numberOne, numberTwo) {
    switch (string) {
        case "soma":
            return numberOne + numberTwo
            break;
        case "subtrair":
            return numberOne - numberTwo
            break;
        case "multiplicar":
            return numberOne * numberTwo
            break;
        case "dividir":
            return numberOne / numberTwo
    }
}

console.log(calculate("soma", 10, 5))
console.log(calculate("subtrair", 10, 5))
console.log(calculate("multiplicar", 10, 5))
console.log(calculate("dividir", 10, 5))