// обеъкты
const person = {
    firstName: 'Dmitry',
    lastName: 'Khoma',
    year: 19,
    'complex key': 'Complex Value',
    ['key_' + (1+4)]: 'Computed Value',
    isProgrammer: true,
    languages: ['ru', 'en'],
    info() {
        console.info('Информация про человека по имени: ' + this.firstName)
    }
}
// person.languages.push('uk')
// person['key_4'] = undefined
// delete person['key_4']
// console.log(person)

// деструктуризация
const {firstName, isProgrammer} = person

// context
// person.info()

const logger = {
    keys() {
        console.log('Object keys: ', Object.keys(this))
    }
}
logger.keys(person)