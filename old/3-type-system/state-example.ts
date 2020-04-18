// type Person = {
//     readonly name: string,
//     age: number,
//     info: { male: boolean }
// }
// type RemoveByType<T, E> = {
//     [P in keyof T]: E extends T[P] ? never : P;
// }[keyof T]
//
// const p: RemoveByType<Person, string> = 'asd';
//
// let a: Exclude<any, any>

interface IProduct {
    name: string;
    price: number;
}

interface ICartProduct extends IProduct {
    count: number
}

interface IUser {
    name: string;
    age: number;
}


interface IState {
    user: IUser,
    products: IProduct[],
    cart: ICartProduct[]
}

const state: IState = {
    user: {name: 'Ihor', age: 34},
    products: [{name: 'IPhone', price: 1000}],
    cart: [{name: 'IPhone', price: 1000, count: 2}],
}

type Select<TState> = <T extends keyof TState>(state: TState, field: T) => TState[T];

const select: Select<IState> = (storeState, field) => storeState[field];

const products: IProduct[] = select(state, 'products');
const user: IUser = select(state, 'user');
const cart: ICartProduct[] = select(state, 'cart1');
