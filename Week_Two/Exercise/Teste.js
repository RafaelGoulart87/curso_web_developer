// for (var i = 0; i <= 100; i++) {
//     if (i % 2 == 0) {
//         console.log("Numeros pares: " + i);
//     }
// }


// function showNames(a, b) {
//     return a + b
// }

// console.log(showNames('Rafael ', 'Bianca'))



// const showNames => function


// let number = 7
// let count = ""

// for (let i = 1; i <= number; i++) {
//     let result = ""

//     for (let a = 0; a < 4; a++) {
//         count++
//         if (a === 3) {
//             result += "PUM"
//         } else {
//             result += count + ", "
//         }
//     }
//     console.log(result)
// }



let user = { name: 'Marília', age: 26, job: 'Dev' };

for (let index = 0; index < Object.keys(user).length; index++) {
    console.log(
        `o valor da propriedade ${Object.keys(user)[index]} é ${
      user[Object.keys(user)[index]]
    }`
    );
}