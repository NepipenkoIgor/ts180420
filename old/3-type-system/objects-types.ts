const user: {
    readonly firstName: string,
    readonly  age?: number
} = {
    firstName: 'Ihor',
    age: 34
}

// user.firstName = 'Eugen'
// user = {
//     firstName: 'Ihor',
//     age: 34
// }
type User = {
    readonly firstName: string,
    readonly  age?: number
}

let u1: User = {
    firstName: 'Ihor',
}

let u2: User = {
    age: 34
}

let keys: keyof User = 'asd'
let nameKey: User['firstName' | 'age'] = true

let hashMapUser: {
    [userMongoDbId: string]: typeof user
} = {
    '123asdsd12412': {
        firstName: 'Ihor',
    },
    'qwe1234124asdasd': {
        firstName: 'Ihor',
    }
}
