// type vs interface

// 1. Object / Function

// interface IPoint {
//     x: number;
//     y: number;
// }
//
// let p1: IPoint = {
//     x: 10,
//     y: 10
// }
//
// type TPoint = {
//     x: number;
//     y: number;
// }
//
// let p2: TPoint = {
//     x: 10,
//     y: 10
// }
//
// interface ISetPoint {
//     (x: number, y: number): void
// }
//
// type TSetPoint = (x: number, y: number) => void
//
// let fn1: ISetPoint = function a(_x: number, _y: number) {
//
// }
//
// let fn2: TSetPoint = function a(_x, _y): void {
// }


// 2.  implements

// interface IPoint {
//     x: number;
//     y: number;
// }
//
//
// type TPoint = {
//     x: number;
//     y: number;
// }
//
// class Point implements TPoint {
//     x: number = 10;
//     y: number = 10;
// }

// 3. Inheritance
// type TPartialPointX = { x: number };
// type TPoint = { y: number } & IPartialPointX & IPartialPointY;
//
// interface IPartialPointX {
//     x: { x: number };
// }
//
// interface IPartialPointY {
//     y: number;
//     x: { d: string };
// }
//
// interface IPoint extends IPartialPointX, IPartialPointY, P {
//     x: { d: string, x: number };
// }
//
// let p1: TPoint = {
//     x: 10,
//     y: 10
// }
//
// let p2: IPoint = {
//     x: {d: '10', x: 10},
//     y: 10,
//     z: 10,
// }


class P {
    z: number;
}

// let dict: { _dictname: 'some name', [key: string]: any } = {_dictname: 'some name'};
// dict.randomkey= 'randomvalue'

type snb = string ;
type snb = string ;
type snb = string ;

let a: IA = {
    x: 's',
}

interface  IA {
    x: string;
}


interface  IB {
    y: string;
}


function fn(obj: IA | IB ) {
    if('x' instanceof obj){
        obj.
    }
}
