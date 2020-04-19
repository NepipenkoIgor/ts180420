// function average(a: number, b: number, c: number): string {
//     const avg: number = (a + b + c) / 3;
//     return `Avg is ${avg}`;
// }
//
// average(1, 2);
// average('1', '2', 3);
// let avg1: number = average(1, 2, 3);

// function average(a: number, b?: number, c?: number): string {
//     if(b === undefined){
//         b = 0;
//     }
//     if(c === undefined){
//         c = 0;
//     }
//     const avg: number = (a + b + c) / 3;
//     return `Avg is ${avg}`;
// }
//
// average(1, );
// average(1, 1);
// average(1, 1, 4);
// average('1', '2', 3);
// let avg1: number = average(1, 2);

// function average(a: number, b: number = 0, c: number = 0): string {
//     const avg: number = (a + b + c) / 3;
//     return `Avg is ${avg}`;
// }
//
// average(1, );
// average(1, 1);
// average(1, 1, 4);
// average('1', '2', 3);
// let avg1: number = average(1, 2);

function isString(_item: string | number): _item is string {
    return true //typeof item === 'string';
}
//
type sn = string | number;
function average(...items: sn[]): string {
    let total: number = 0;
    for (const item of items) {
        if (isString(item)) {
            total += parseInt(item, 10);
            continue;
        }
        total += item;
    }
    const avg: number = total / items.length;
    return `Avg is ${avg}`;
}

average(1,);
average(1, 1);
average(1, '1', 4);
average(1, 1, '4', 1, 2, 3, 4);
average(1, 1, 2, 3, 4);
average('1', '2m', 3);
let avg1: number = average(1);

