const operations = (operation) => {
    switch (operation) {
        case "soma":
            return (numberOne) => (numberTwo) => numberOne + numberTwo
            break;
        case "subtrair":
            return (numberOne) => (numberTwo) => numberOne - numberTwo
            break;
        case "multiplica":
            return (numberOne) => (numberTwo) => numberOne * numberTwo
            break;
        case "divide":
            return (numberOne) => (numberTwo) => numberOne / numberTwo
            break;
    }

}

console.log(operations("soma")(3)(5))