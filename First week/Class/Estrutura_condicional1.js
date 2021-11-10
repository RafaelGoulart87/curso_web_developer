let myNumber = 100


if (myNumber === 0) {
    console.log("Zero")
} else if (myNumber < 0) {
    console.log("Negativo")
} else if (myNumber % 2 === 0 && myNumber <= 100) {
    console.log("Par")
} else if (myNumber > 100) {
    console.log("É maior que 100")
} else {
    console.log("Impar")
}