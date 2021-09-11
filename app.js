// Task 1
const city = 'Saint-Petersburg'
const country = 'Russia'
const countPeople = 5000000
const hasFootballStadium = true


// Task 2
const height = 40
const width = 70
let square = height*width


// Task 3
const time = 2;
const speedOfFirst = 95;
const speedOfSecond = 114;
let Answer = speedOfFirst*time + speedOfSecond*time


// Task 4
const randomNumber = Math.floor(Math.random() * 100);
if (randomNumber < 20) {
    console.log("randomNumber меньше 20")
}
else if (randomNumber > 50) {
    console.log("randomNumber больше 50")
}
else {
    console.log("randomNumber больше 20, и меньше 50")
}


// Task 5
switch (randomNumber) {
    case (randomNumber < 20):
        console.log("randomNumber меньше 20")
        break
    case (randomNumber > 50):
        console.log("randomNumber больше 50")
        break
    default:
        console.log("randomNumber больше 20, и меньше 50")
        break
}