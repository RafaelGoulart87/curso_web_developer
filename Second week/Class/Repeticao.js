// let array = [10]


// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

// let x = 1
// x--

// console.log(x)

let nameList = ["joao", "rafael", "pedro", "bianca"]

function showElements() {
    for (i = 0; i < nameList.length; i++) {
        if (i === nameList.length - 1) return;
        //console.log(nameList[i])
    }
}

showElements()



let array = [10, 20, 30, 40, 50]

for (i = 0; i < array.length; i++) {
    array[i] = array[i] * 10
}

console.log(array)