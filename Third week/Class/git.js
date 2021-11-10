function teste1(name) {
    console.log("Hi " + name)
}

teste1("Bianca")


const teste2 = function(name) {
    console.log("Hi " + name)
}

teste2("Rafael")


const teste3 = function(n1) {
    return function(n2) {
        return n1 + n2
    }
}

const result = teste3(1)
console.log(result(2))