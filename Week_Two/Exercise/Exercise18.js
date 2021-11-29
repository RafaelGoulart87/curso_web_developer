/*
18 - Dado a lista de compra a seguir, faça um programa que imprime no console
valor total. Atenção, o valor de cada item é unitário.
Exemplo de Entrada:
[
{ nome: 'maçã', quantidade: 2, valor: 0.5},
{ nome: 'alface', quantidade: 1, valor: 1.73},
{ nome: 'Água 5L', quantidade: 2, valor: 5.99},
{ nome: 'Pão Francês', quantidade: 8, valor: 0.63}
]
Exemplo de Saída:
R$ 19.75
*/


const list = (pray) => {
    let result = 0
    for (i = 0; i < pray.length; i++) {
        value = (pray[i].valor * pray[i].quantidade)
        result += value
    }
    console.log(result)
}
list([
    { nome: 'maçã', quantidade: 2, valor: 0.5 },
    { nome: 'alface', quantidade: 1, valor: 1.73 },
    { nome: 'Água 5L', quantidade: 2, valor: 5.99 },
    { nome: 'Pão Francês', quantidade: 8, valor: 0.63 }
])