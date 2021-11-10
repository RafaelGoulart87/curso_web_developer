function showSum(n1, n2, n3) {
    console.log(n1 + n3)
}

showSum(4, 3, 7)


const showNumber = function(n1, n2, n3) {
    console.log(n1 + n3)
}

showNumber(4, 3, 7)

// const showCalculate = function(n1, n2, n3, callback) {
//     const result = n1 + n3;
//     return callback(result);
// };

// callback(4, 3, 7)


const teste = function(n1) {
    return function(n2) {
        return n1 + n2

    }
}

const result = teste(1)
console.log(result(2)) // uma forma de resultado

console.log(teste(1)(2)) // segunda forma de resultado