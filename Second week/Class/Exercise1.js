/*
1. Construa um objeto chamado myUser que possui as propriedades: name, age e email. COloque valores de sua escolha nessas propriedades e imprima no console.
2. Dados o array["a","b","c","d"] imprima no console o valor do terceiro elemento.
3. Dados objeto dev{name: "Rafael", project: [{name:"projeto 1", star:"01/02/2021"}, {name:"projeto 2", star:"03/03/2021"}]}, imprima no console:
     a. O nome do dev.
     b. O segundo projeto.
     c. O nome do primeiro projeto.
4. Percorra o array [1,-22,3,4,-5] e modifique os valores, multiplicando cada um por 10.
*/

// exercicio 1

let myUser = {
    name: "Rafael Goulart",
    age: 34,
    email: "goulart.rafaelrosa89@gmail.com"
}

console.log(myUser)



//exercicio 2

let array = ["a", "b", "c", "d"]

console.log(array[2])



//exercicio 3

let dev = {
    name: "Rafael Goulart",
    project: [{ name: "projeto 1", star: "01/02/2021" }, { name: "projeto 2", star: "03/03/2021" }]
}

console.log(dev.name)
console.log(dev.project[1])
console.log(dev.project[0].name)



//exercicio 4

let array1 = [1, -22, 3, 4, -5]

for (let i = 0; i < 4; i++) {
    array1[i] = array1[i] * 10
}

console.log(array1)