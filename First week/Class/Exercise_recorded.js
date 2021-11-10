// exercicio 1

function checkSignal(number) {
    if (number >= 0) {
        console.log(number + " é positivo.")
    } else {
        console.log(number + " é negativo.")
    }
}

checkSignal(-99)
checkSignal(42)


// exercicio 2

function double(numberOne) {
    return numberOne * 2
}

console.log(double(5))


//exercicio 3

function calculate(string, numberOne, numberTwo) {
    switch (string) {
        case "soma":
            console.log(numberOne + numberTwo)
            break;
        case "subtrair":
            console.log(numberOne - numberTwo)
            break;
        case "multiplicar":
            console.log(numberOne * numberTwo)
            break;
        case "dividir":
            console.log(numberOne / numberTwo)
            break;
    }
}

calculate("soma", 3, 5)
calculate("subtrair", 5, 5)
calculate("multiplicar", 5, 5)
calculate("dividir", 10, 5)