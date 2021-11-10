/* Faça uma função que recebe a idade de um nadador e retorna com a categoria de acordo com a tabela abaixo:

5 - 7 anos = infantil A
8 - 10 anos = infantil B
11 - 13 anos = juvenil A
14 - 17 anos = juvenil B
maiores de 18 anos = adulto
*/



function showCategory(swimmerAge) {
    if (swimmerAge >= 5 && swimmerAge <= 7) {
        console.log("Categoria infantil A.")
    } else if (swimmerAge >= 8 && swimmerAge <= 10) {
        console.log("Categoria infantil B.")
    } else if (swimmerAge >= 11 && swimmerAge <= 13) {
        console.log("Categoria juvenil A.")
    } else if (swimmerAge >= 14 && swimmerAge <= 17) {
        console.log("Categoria juvenil B.")
    } else if (swimmerAge > 17) {
        console.log("Categoria Adulto.")
    } else if (swimmerAge < 5) {
        console.log("Não temos uma categoria para essa idade.")
    }
}
showCategory(3)