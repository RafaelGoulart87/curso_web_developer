/*
12 - Dado o objeto à seguir, imprima no console:
O nome do dev.
O segundo projeto.
O nome do primeiro projeto.
Entrada:
{
name: "Juca",
projects: [
{ name: "Projeto 1", start: "01/02/2021" },
{name: "Projeto 2", start: "03/03/2021"}
]
}
Saída Esperada:
Juca
{ name: 'Projeto 2', start: '03/03/2021' }
Projeto 1
*/

const obj = {
    name: "Juca",
    projects: [{ name: "Projeto 1", start: "01/02/2021" }, { name: "Projeto 2", start: "03/03/2021" }]
}

console.log(obj.name)
console.log(obj.projects[0])
console.log(obj.projects[0].name)