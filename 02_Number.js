// 1 Number

// js обарачивает все числа в класс Number
// const num = 42 // integer
// const float = 42.42 // float
// const pow = 10e3
// console.log('MAX_SAFE_INTEGER: ' + Number.MAX_SAFE_INTEGER)
// console.log(num)
// console.log(Math.pow(2,53) - 1)
// console.log('MIN_SAFE_INTEGER: ' + Number.MIN_SAFE_INTEGER)
// console.log('MAX_VALUE: ' + Number.MAX_VALUE)
// console.log('POSITIVE_INFINITY: ' + Number.POSITIVE_INFINITY)
// console.log('NEGATIVE_INFINITY: ' + Number.NEGATIVE_INFINITY)
// console.log(Number.NaN) // Not a Number. Type: number
// console.log('isNaN: Nan? ' + isNaN(Number.NaN))
// console.log('isFinite: POSITIVE_INFINITY? ' + isFinite(Number.POSITIVE_INFINITY))
// const stringInt = '42'
// const stringFloat = '42.42'
// console.log(stringInt + 2)
// console.log(parseInt(stringInt) + 2)
// console.log(parseFloat(stringFloat) + 2.42)
// console.log(0.2+0.4)
// console.log(parseFloat((0.4+0.2).toFixed(1)))


// 2 BigInt
// console.log(typeof 123123123123123123123123n) //BigInt work only with BigInt
// console.log(10n - 4) // errore
// console.log(parseInt(10n) - 4)


// 3 Math
function getRandomBetween(Min, Max) {
    return Math.round(Math.random() * (Max-Min) + Min)
}
console.log(getRandomBetween(10, 42))
