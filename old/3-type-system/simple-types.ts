let isDone: boolean = true;

let decimal: number = 6;
let binar: number = 0b1010;
let nan: number = NaN;

let str: string = 'my str';

let nill: null = null;

let undf: undefined = undefined;

let bigNumber: bigint = 40n;

const key1: unique symbol = Symbol('key1');
const key2: symbol = Symbol('key2');
const key3 = Symbol('key3');

let strictObj = {
    [key1]: 100,
    [key2]: 'my name',
    [key3]: true,
}

let v1 = strictObj[key1];
let v2 = strictObj[key2];
let v3 = strictObj[key3];

const FOO:  unique symbol = Symbol('FOO');
const BAR = Symbol('BAR');
export function onlyFoo(_value: typeof FOO): void {

}

onlyFoo(FOO);
onlyFoo(BAR);
\
