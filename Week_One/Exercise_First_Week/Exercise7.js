/*
07 - Tendo como informação os três lados de um triângulo faça um programa
que imprima na tela se ele é EQUILÁTERO, ISÓSCELES ou ESCALENO.
OBS: Triângulo Equilátero → Possui os 3 lados iguais;
Triângulo Isósceles → Possui 2 lados iguais;
Triângulo Escaleno → Possui 3 lados diferentes.
Os valores de entrada serão:
Lado 1;
Lado 2;
Lado 3.
Exemplo de Entrada:
10
5
10
-----------------
2
1
5
Exemplo de Saída:
Triângulo Isósceles
-----------------
Triângulo Escaleno
*/

let sideOne = 2
let sideTwo = 1
let sideThre = 5

if (sideOne === sideTwo && sideThre === sideOne) {
    console.log("Triangulo Equilatero")
} else if (sideOne !== sideTwo && sideThre !== sideOne) {
    console.log("Triangulo Escaleto")
} else {
    console.log("Triangulo Isósceles")
}