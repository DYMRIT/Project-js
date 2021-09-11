// Массивы
const cars = ['мазда', 'бмв', 'форд', 'лада']
const people = [
    {Name:'Dmitry', budget: 2000},
    {Name:'Victor', budget: 2300},
    {Name:'Alla', budget: 1200},
]
// cars.push('сузуки')
// cars.unshift('волга')
// console.log(cars)
// cars.shift()
// const lastCar = cars.pop()
// console.log(cars)
// cars.reverse()
// console.log(cars)

// const bmwIndex = cars.indexOf('бмв')
// console.log(cars[bmwIndex])

// const index = people.findIndex(function(person) {
//     return person.budget === 2000
// })
// console.log(index)
//
// const person = people.find(function(person) {
//     return person.budget === 2000
// })
// console.log(person.Name)

// console.log(cars.includes('бмв'))
// const upperCars = cars.map(car => {
//     return car.toUpperCase()
// })
// console.log(upperCars)

// const filteredNumbers = [1,2,3,4,5,6,7].filter(num => {
//     return num > 3
// })
// console.log(filteredNumbers)

const allBudget = people.filter(person => person.budget >= 2000).reduce((acc, person) => {
    acc += person.budget
    return acc
}, 0)
console.log(allBudget)


// Task 1
// const Text = 'Привет Мир!'
// const reverseText = Text.toLowerCase().split('').reverse().join('')
// console.log(reverseText)

