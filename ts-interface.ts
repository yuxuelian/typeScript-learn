interface IPerson {
    firstName: string,
    lastName: string,
    sayHi: () => string
}


var customer: IPerson = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHi: (): string => { return "Hi there" }
}

console.log(customer)
console.log('-----------------------')

interface Person {
    age: number
}

interface Animal {
    age2: number
}

// 接口多继承
interface Musician extends Person, Animal {
    instrument: string
}

const myMusician: Musician = {
    age: 10,
    age2: 20,
    instrument: 'ABC'
}
console.log(myMusician)
