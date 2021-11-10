let array = [10, 20, 30, 40, 50]

// console.log(array)
// console.log(array[0])
// console.log(array[1])
// console.log(array[2])
// console.log(array[1] * 2)


// for (i = 0; i < array.length; i++) {
//     array[i] = array[i] * 10
// }

// console.log(array)


for (i = 0; i < array.length; i++) {
    if (i === array.length - 1) return;
    console.log(array[i])
}