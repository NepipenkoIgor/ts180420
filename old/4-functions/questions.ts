type Person = {
    readonly name: string,
    age: number,
    // info: { male: boolean }
}
type RemoveByType<Obj, E> = {
    [key in keyof Obj]: E extends Obj[key] ? never : Obj[key];
}[keyof  Obj]

// {
//    'name': 'name' ,
//    'age': 'age' ,
//    'info' : never
// }[keyof Obj]  => / 'name' | 'age'
//
// {
//     'name': string ,
//     'age': number ,
//     'info' : never
// }[keyof Obj]  => / 'string' | 'number'

let a: Person[keyof Person] = true; //
const p: RemoveByType<Person, { male: boolean }> = true; // 'name' | 'age'
// 'string' | 'number'
