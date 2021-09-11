// String
const Name = 'Dmitry'
const age = 19
// const output = 'Hello, my Name is ' + Name + " and i'm a " + age + ' years old'
// const output =`Hello, my name is ${Name} and i'm a ${age} years old`
// console.log(output)

// const output = `
//     <div>
//         <p>My name is Dmitry</p>
//     </div>
// `
// console.log(output)
// const name = 'Dmitry' // js оборачивает стринг в new String, благодаря этому можем использовать много методов
// console.log(name.toLowerCase())
// console.log(name.charAt(2))
// console.log(name.indexOf('itr'))
// console.log(name.toLowerCase().startsWith('dmi'))
// const password = '   asdqwe    asd   a'
// console.log(password.trim()) // только слева и справа от начального и последнего символа

function logPerson(s, firstname, lastname) {
    // console.log(s)
    // console.log(firstname)
    // console.log(lastname)
    return `${s[0]}${firstname}`
}

const firstName = 'Dmitry'
const lastName = 'Khoma'
const output = logPerson`Name: ${firstName}, lastName: ${lastName}!`
console.log(output)