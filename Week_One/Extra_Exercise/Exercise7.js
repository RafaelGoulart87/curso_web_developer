/*
07 - Uma pessoa desenvolvedora recebe frequentemente propostas de trabalho
pela CLT(Consolidação das Leis Trabalhistas) e pela PJ (Pessoa Jurídica).
Considerando que o trabalho como CLT envolve férias, 13° salário, R$ 700 de
benefício e 8% mensal referente ao FGTS. Faça um programa que receba como
entrada os dois valores mensais oferecidos e tome a decisão informando qual
proposta a pessoa deve aceitar.
*/

let clt = 3500
let ano = clt * 11
let feriasClt = parseInt((clt / 3) + clt)
let salario13 = clt
let beneficio = 700
let cltAnual = ano + feriasClt + salario13 + beneficio


console.log("Renda fixa mensal = R$ " + clt)
console.log("Ferias = R$ " + feriasClt)
console.log("13º Salário = R$ " + salario13)
console.log("Beneficio = R$ " + beneficio)


// NÃO TERMINEI