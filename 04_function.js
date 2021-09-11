// function
// function Declaration
// function greet(name) {
//     console.log(`Hello ${name}`)
// }

// 1 function Expression
// const greet2 = function greet2(name) {
//     console.log(`Hello 2 ${name}`)
// }
// greet('Dmitry')
// greet2('Dmitry')
// console.dir(greet)

// 2 Анонимные функции
// counter = 0
// const interval = setInterval(function() {
//     if (counter === 5) {
//         clearInterval(interval)
//     }
//     else {
//         console.log(++counter)
//     }
// }, 1000)

// 3 Стрелочные функции
// function greet(name) {
//     console.log(`Hello ${name}`)
// }
// const arrow = (name) => {
//     console.log(`Hello ${name}`)
// }
// arrow('Dmitry')
// const pow2 = dig => dig**2
// console.log(pow2(12))

// 4 Параметры по умолчанию
// const sum = (a=4,b=3) => a + b
// const sumList = (...all) => {
//     let result = 0
//     for (let num of all) {
//         result += num
//     }
//     return result
// }
// const res = sumList(1,2,3,4,5,6,7,8,9)
// console.log(sumList(1,2,3,4,5,6,7,8,9))

// 5 Замыкание
function createMember(firstName) {
    return function(lastName) {
        console.log(`${lastName} ${firstName}`)
    }
}
const logWithLastName = createMember('Dmitry')
console.log(logWithLastName('Khoma'))


