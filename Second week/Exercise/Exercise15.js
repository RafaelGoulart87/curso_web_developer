/*
15 - Dado o array de objetos abaixo, faça um programa que calcule a média
aritmética dos estudantes e imprima no console os nomes dos estudantes
aprovados. A média de aprovação é 7.0.
Os valores de entrada serão:
Array de Objetos;
Exemplo de Entrada:
[
{nome: 'Marcos', notas: [10, 7, 2]},
{nome: 'Michele', notas: [10, 10, 10]},
{nome: 'Pedro', notas: [3, 10, 9]},
{nome: 'Andressa', notas: [6, 6, 8]},
{nome: 'Cristiana', notas: [7, 9, 2]}
]
Exemplo de Saída:
Michele
Pedro
*/

const student = [
    { nome: 'Marcos', notas: [10, 7, 2] },
    { nome: 'Michele', notas: [10, 10, 10] },
    { nome: 'Pedro', notas: [3, 10, 9] },
    { nome: 'Andressa', notas: [6, 6, 8] },
    { nome: 'Cristiana', notas: [7, 9, 2] }
]


if (((student[0].notas[0] + student[0].notas[1] + student[0].notas[2]) / 3) > 7.0) {
    console.log(student[0].nome)
}
if (((student[1].notas[0] + student[1].notas[1] + student[1].notas[2]) / 3) > 7.0) {
    console.log(student[1].nome)
}
if (((student[2].notas[0] + student[2].notas[1] + student[2].notas[2]) / 3) > 7.0) {
    console.log(student[2].nome)
}
if (((student[3].notas[0] + student[3].notas[1] + student[3].notas[2]) / 3) > 7.0) {
    console.log(student[3].nome)
}
if (((student[4].notas[0] + student[4].notas[1] + student[4].notas[2]) / 3) > 7.0) {
    console.log(student[4].nome)
} else {}