/*
05 - Um banco vai liberar linhas de crédito só para servidores públicos. Caso o(a)
servidor(a) for professor(a) terá uma linha de crédito especial com uma taxa de
juros menor. Crie um algoritmo que possui três valores de entradas: nome
completo (string), servidor (boolean), professor (boolean) e que imprime uma
mensagem dizendo se a pessoa tem acesso a linha de crédito, se sim, qual linha
de crédito.
*/

let name = "Rafael Goulart"
let servidor = false
let professor = true

if (servidor === true && professor === true) {
    console.log(name + ", você tem direito a uma linha de crédito especial.")
} else if (servidor === true && professor === false) {
    console.log(name + ", você tem direito a uma linha de crédito.")
} else(
    console.log(name + ", você não tem direito a linha de crédito.")
)