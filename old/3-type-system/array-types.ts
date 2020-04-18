let arr: readonly number[] = [1, 2, 3]
arr.push(1);
arr[100] = 122;

let tupleArr: readonly [string, number] = ['some const', 1];
tupleArr.push(1);
tupleArr[100] = 122;


// const str = 'Igor';
//
// let s: typeof str = 'asdasd'

let x = 10 as const;
let y  = [10, 20] as const;

y.push(10);
y[100] = 1;

let foo = {
    name: 'foo',
    contents: y
} as const

foo = 1;
